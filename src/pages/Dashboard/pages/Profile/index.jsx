import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Button, Input, message, Spin } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
  UserOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../../../../context/AuthContext";

const Profile = () => {
  const { token, isAuth } = useAuthContext();

  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    if (!isAuth) return;

    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/profile`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        setProfile(res.data.user);
        setFormData({
          firstName: res.data.user.firstName || "",
          lastName: res.data.user.lastName || "",
          email: res.data.user.email || "",
          dob: res.data.user.dob || "",
          image: null,
        });
      } catch {
        message.error("Failed to load profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, isAuth]);

  if (!isAuth) {
    return (
      <p className="text-center mt-20 text-red-500 font-semibold">
        Please login
      </p>
    );
  }

  /* ================= HANDLERS ================= */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const fd = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value) fd.append(key, value);
      });

      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/update`,
        fd,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setProfile(res.data.user);
      setEditMode(false);
      setPreview("");
      message.success("Profile updated");
    } catch {
      message.error("Update failed");
    } finally {
      setIsLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-yellow-100 px-1 sm:py-2">
      {/* LOADER */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/60 z-50 flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}

      {/* CARD */}
      <div className="mx-auto w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
          <h2 className="text-lg sm:text-xl font-bold">Profile</h2>

          <div className="flex gap-2">
            <Button
              icon={editMode ? <CheckOutlined /> : <EditOutlined />}
              type={editMode ? "primary" : "default"}
              onClick={() => (editMode ? handleUpdate() : setEditMode(true))}
            />
            {editMode && (
              <Button
                icon={<CloseOutlined />}
                onClick={() => {
                  setEditMode(false);
                  setPreview("");
                }}
              />
            )}
          </div>
        </div>

        {/* PROFILE TOP */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4 sm:px-6 py-6 border-b">
          {/* AVATAR */}
          <div className="relative">
            <Avatar
              size={110}
              src={preview || profile.image}
              icon={<UserOutlined />}
            />

            {editMode && (
              <label className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-full cursor-pointer shadow">
                <CameraOutlined className="text-white text-sm" />
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* NAME */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold">
              {profile.firstName} {profile.lastName}
            </h3>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>
        </div>

        {/* FIELDS */}
        <div className="px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="First Name"
            name="firstName"
            editMode={editMode}
            formData={formData}
            handleChange={handleChange}
          />
          <Field
            label="Last Name"
            name="lastName"
            editMode={editMode}
            formData={formData}
            handleChange={handleChange}
          />
          <Field
            label="Email"
            name="email"
            editMode={false}
            formData={formData}
          />
          <Field
            label="DOB"
            name="dob"
            type="date"
            editMode={editMode}
            formData={formData}
            handleChange={handleChange}
          />

          <div className="sm:col-span-2">
            <span className="text-gray-500 text-sm">Created At</span>
            <div className="bg-gray-50 p-3 rounded-lg">
              {profile.createdAt
                ? new Date(profile.createdAt).toLocaleDateString()
                : "N/A"}
            </div>
          </div>
        </div>

        {/* MOBILE SAVE BAR */}
        {editMode && (
          <div className="sm:hidden sticky bottom-0 bg-white border-t px-4 py-3 flex gap-3">
            <Button block danger onClick={() => setEditMode(false)}>
              Cancel
            </Button>
            <Button block type="primary" onClick={handleUpdate}>
              Save
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ================= FIELD ================= */
const Field = ({
  label,
  name,
  type = "text",
  editMode,
  formData,
  handleChange,
}) => (
  <div>
    <span className="text-gray-500 text-sm">{label}</span>
    {editMode ? (
      <Input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
      />
    ) : (
      <div className="bg-gray-50 p-3 rounded-lg">{formData[name] || "N/A"}</div>
    )}
  </div>
);

export default Profile;
