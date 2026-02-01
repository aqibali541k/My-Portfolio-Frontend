import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/projects/all`,
        );
        setProjects(res.data.projects);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-14">
          My <span className="text-green-500">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isExpanded = expandedId === project._id;

            return (
              <motion.div
                key={project._id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border-none"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "https://via.placeholder.com/400x220?text=Project"
                    }
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className={`text-sm text-gray-600 transition-all ${
                      isExpanded ? "" : "line-clamp-2"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* READ MORE */}
                  {project.description?.length > 120 && (
                    <button
                      onClick={() => toggleReadMore(project._id)}
                      className="text-green-600 text-xs font-medium mt-1 hover:underline"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}

                  {/* TECHNOLOGIES */}
                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* LINKS */}
                  <div className="flex gap-3 mt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-sm text-white bg-green-500 px-4 py-1.5 rounded-lg hover:bg-green-600 transition"
                      >
                        Live
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-sm border px-4 py-1.5 rounded-lg hover:bg-gray-100 transition"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
