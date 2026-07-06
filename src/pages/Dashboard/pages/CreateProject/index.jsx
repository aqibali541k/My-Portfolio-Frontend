import React, { useEffect, useState } from "react";
import { Input, Button, Tag, Upload, message, Select } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CreateProject = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const editingProject = state?.project || null;

  const [loading, setLoading] = useState(false);
  const [techInput, setTechInput] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    editingProject?.image || null
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    liveUrl: "",
    githubUrl: "",
    techStack: [],
  });

  // fill form when editing
  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        description: editingProject.description || "",
        category: editingProject.category || "",
        liveUrl: editingProject.liveUrl || "",
        githubUrl: editingProject.githubUrl || "",
        techStack: editingProject.techStack || [],
      });
    }
  }, [editingProject]);

  const projectCategories = [
    { label: "Full Stack", value: "full-stack" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTech = () => {
    if (!techInput.trim()) return;

    setFormData({
      ...formData,
      techStack: [...formData.techStack, techInput.trim()],
    });

    setTechInput("");
  };

  const removeTech = (tech) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter((t) => t !== tech),
    });
  };

  const handleImageChange = (file) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    return false;
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("authToken");

      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(
          key,
          Array.isArray(value) ? JSON.stringify(value) : value
        );
      });

      if (imageFile) {
        payload.append("image", imageFile);
      }

      if (editingProject) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/projects/${editingProject._id}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        message.success("Project updated successfully");
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/projects/create`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Category:", formData.category);

        for (let pair of payload.entries()) {
          console.log(pair[0], pair[1]);
        }

        message.success("Project created successfully");
      }

      navigate("/admin/manage-projects");
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-2 sm:px-0 py-4">
      <div className="mx-auto max-w-4xl bg-blue-500 rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-primary-text">
            {editingProject ? "Edit Project" : "Create New Project"}
          </h2>
          <p className="text-primary-text text-sm sm:text-base mt-1">
            Showcase your work like a real-world portfolio
          </p>
        </div>

        {/* TITLE + LIVE URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="form-label">Project Title</label>
            <Input
              size="large"
              name="title"
              placeholder="Donation Hub"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label">Live URL</label>
            <Input
              size="large"
              name="liveUrl"
              placeholder="https://project.com"
              value={formData.liveUrl}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6">
          <label className="form-label">Project Description</label>
          <Input.TextArea
            rows={4}
            name="description"
            placeholder="Explain what this project does..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* GITHUB URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

          <div className="mb-6">
            <label className="form-label">GitHub Repository</label>
            <Input
              size="large"
              name="githubUrl"
              placeholder="https://github.com/username/project"
              value={formData.githubUrl}
              onChange={handleChange}
            />
          </div>

          {/* CATEGORY */}
          <div className="mb-6">
            <label className="form-label">Project Category</label>

            <Select
              size="large"
              className="w-full mt-2"
              placeholder="Select Category"
              options={projectCategories}
              value={formData.category || undefined}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  category: value,
                })
              }
            />
          </div>
        </div>
        {/* TECH STACK */}
        <div className="mb-8">
          <label className="form-label">Tech Stack</label>

          <div className="flex gap-2 mt-2">
            <Input
              placeholder="React, Node.js"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onPressEnter={addTech}
            />

            <Button
              icon={<PlusOutlined />}
              className="bg-gray-900 text-primary-text hover:bg-black rounded-xl"
              onClick={addTech}
            >
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {formData.techStack.map((t) => (
              <Tag
                key={t}
                closable
                onClose={() => removeTech(t)}
                className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 border-none"
              >
                {t}
              </Tag>
            ))}
          </div>
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mb-8">
          <label className=" form-label">Project Thumbnail</label>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
            <Upload beforeUpload={handleImageChange} showUploadList={false}>
              <Button
                icon={<UploadOutlined />}
                className="h-12 px-6 rounded-xl border-dashed"
              >
                Upload Image
              </Button>
            </Upload>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                className="h-28 w-full sm:w-44 object-cover rounded-2xl shadow-md border"
              />
            )}
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type="primary"
          loading={loading}
          onClick={handleSubmit}
          className="w-full! bg-yellow-400! h-14! text-base! sm:text-lg! font-semibold! rounded-2xl! "
        >
          {editingProject ? "Update Project" : "Create Project"}
        </Button>

      </div>
    </div>
  );
};

export default CreateProject;