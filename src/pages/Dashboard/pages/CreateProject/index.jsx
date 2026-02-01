import React, { useEffect, useState } from "react";
import { Input, Button, Tag, Upload, message } from "antd";
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
    editingProject?.image || null,
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveUrl: "",
    githubUrl: "",
    techStack: [],
  });

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title,
        description: editingProject.description,
        liveUrl: editingProject.liveUrl,
        githubUrl: editingProject.githubUrl,
        techStack: editingProject.techStack || [],
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTech = () => {
    if (!techInput.trim()) return;
    setFormData({
      ...formData,
      techStack: [...formData.techStack, techInput.trim()],
    });
    setTechInput("");
  };

  const removeTech = (t) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter((x) => x !== t),
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
      Object.entries(formData).forEach(([k, v]) => {
        payload.append(k, Array.isArray(v) ? JSON.stringify(v) : v);
      });

      if (imageFile) payload.append("image", imageFile);

      if (editingProject) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/projects/${editingProject._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        message.success("Project updated");
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/projects/create`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        message.success("Project created");
      }

      navigate("/admin/manage-projects");
    } catch {
      message.error("Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-1 sm:px-0 py-2">
      <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-xl p-5 sm:p-10 border border-gray-100">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            {editingProject ? "Edit Project" : "Create New Project"}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Showcase your work like a real-world portfolio
          </p>
        </div>

        {/* BASIC INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
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
            placeholder="Explain what this project does and why it's special..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div>
            <label className="form-label">GitHub Repository</label>
            <Input
              size="large"
              name="githubUrl"
              placeholder="https://github.com/aqib/project"
              value={formData.githubUrl}
              onChange={handleChange}
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
              className="bg-gray-900 text-white hover:bg-black rounded-xl"
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
          <label className="form-label">Project Thumbnail</label>

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

        {/* SUBMIT */}
        <Button
          type="primary"
          loading={loading}
          onClick={handleSubmit}
          className="w-full h-14 text-base sm:text-lg font-semibold rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        >
          {editingProject ? "Update Project" : "Create Project"}
        </Button>
      </div>
    </div>
  );
};

export default CreateProject;
