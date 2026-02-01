import React, { useEffect, useState } from "react";
import { Button, Popconfirm, message, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/all`,
      );
      setProjects(res.data.projects);
    } catch {
      message.error("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success("Project deleted");
      fetchProjects();
    } catch {
      message.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-1 sm:px-0 py-2">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            🎨 Manage Projects
          </h2>

          <Button
            type="primary"
            className="h-11 px-6 rounded-xl bg-green-500 hover:bg-green-600"
            onClick={() => navigate("/dashboard/create-project")}
          >
            + New Project
          </Button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="
                bg-white
                rounded-3xl
                shadow-md
                hover:shadow-xl
                transition
                overflow-hidden
                w-full
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={
                    project.image ||
                    "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* ACTIONS (DESKTOP HOVER) */}
                <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition items-center justify-center gap-4">
                  <Button
                    icon={<EditOutlined />}
                    className="bg-white text-gray-900"
                    onClick={() =>
                      navigate("/dashboard/create-project", {
                        state: { project },
                      })
                    }
                  >
                    Edit
                  </Button>

                  <Popconfirm
                    title="Delete this project?"
                    onConfirm={() => deleteProject(project._id)}
                  >
                    <Button danger icon={<DeleteOutlined />} />
                  </Popconfirm>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Tag
                        key={tech}
                        className="bg-green-100 text-green-700 border-none rounded-full px-3"
                      >
                        {tech}
                      </Tag>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-gray-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                {/* MOBILE ACTIONS */}
                <div className="flex sm:hidden gap-3 mt-5">
                  <Button
                    icon={<EditOutlined />}
                    className="flex-1 rounded-xl"
                    onClick={() =>
                      navigate("/dashboard/create-project", {
                        state: { project },
                      })
                    }
                  >
                    Edit
                  </Button>

                  <Popconfirm
                    title="Delete this project?"
                    onConfirm={() => deleteProject(project._id)}
                  >
                    <Button
                      danger
                      icon={<DeleteOutlined />}
                      className="flex-1 rounded-xl"
                    >
                      Delete
                    </Button>
                  </Popconfirm>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
