import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaHashtag } from "react-icons/fa";
import axios from "axios";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "full-stack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const CATEGORY_VALUES = ["full-stack", "frontend", "backend"];

const CATEGORY_LABELS = {
  "full-stack": "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
};

const matchesFilter = (project, filterValue) => {
  if (filterValue === "all") return true;
  if (CATEGORY_VALUES.includes(filterValue)) {
    return project.category === filterValue;
  }
  // tag-based filters (mern, ui-ux, open-source)
  return Array.isArray(project.tags) && project.tags.includes(filterValue);
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects/all`);
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const filterCount = useMemo(() => {
    const counts = {};
    FILTERS.forEach((f) => {
      if (f.value === "all") return;
      counts[f.value] = projects.filter((p) => matchesFilter(p, f.value)).length;
    });
    return counts;
  }, [projects]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (!matchesFilter(p, activeFilter)) return false;
      if (!q) return true;
      return (
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        (p.techStack || []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [projects, activeFilter, search]);

  return (
    <section
      id="projects"
      className="py-24 bg-section-bg border-t border-border-custom px-6 sm:px-8 lg:px-12 text-left"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <p className="text-label text-primary-blue mb-2">My Work</p>
          <h2 className="text-h1 text-primary-text transition-colors duration-300">Projects</h2>
          <div className="h-px w-10 bg-border-custom mx-auto mt-4" />
        </div>

        {/* ── Filter Tabs + Search ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`
                  px-4 py-2 rounded-xl text-small border cursor-pointer transition-all duration-200 whitespace-nowrap
                  ${activeFilter === tab.value
                    ? "bg-primary-blue border-primary-blue  text-white font-semibold"
                    : "bg-card-bg border-border-custom text-secondary-text hover:text-primary-text hover:border-primary-blue/40 font-medium"
                  }
                `}
              >
                {tab.label}
                {tab.value !== "all" && (
                  <span
                    className={`ml-1.5 text-[10px] font-mono ${activeFilter === tab.value ? "opacity-80" : "opacity-50"
                      }`}
                  >
                    ({filterCount[tab.value] || 0})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64 shrink-0">
            <FaHashtag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-text text-xs" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card-bg border border-border-custom text-primary-text placeholder:text-muted-text text-small focus:outline-none focus:border-primary-blue/50 transition-colors"
            />
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-20 text-secondary-text text-small"
              >
                No projects in this category yet.
              </motion.div>
            ) : (
              filtered.map((project) => {
                const isExpanded = expandedId === project._id;
                const tech = project.techStack || [];

                return (
                  <motion.article
                    layout
                    key={project._id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="bg-card-bg border border-border-custom rounded-2xl overflow-hidden flex flex-col hover:border-primary-blue/25 transition-colors duration-200 group"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-secondary-bg border-b border-border-custom overflow-hidden relative transition-colors duration-300">
                      <img
                        src={
                          project.image ||
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      {CATEGORY_LABELS[project.category] && (
                        <span className="absolute top-3 left-3 bg-primary-bg border border-border-custom text-secondary-text rounded-lg px-2.5 py-1 text-label transition-colors duration-300">
                          {CATEGORY_LABELS[project.category]}
                        </span>
                      )}
                    </div>

                    {/* Tech stack chips — directly under image, per design */}
                    {tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 px-6 pt-5">
                        {tech.slice(0, 4).map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-secondary-bg border border-border-custom text-muted-text rounded-full text-[11px] font-mono transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                        {tech.length > 4 && (
                          <span className="px-2.5 py-1 bg-secondary-bg border border-border-custom text-muted-text rounded-full text-[11px] font-mono transition-colors duration-300">
                            +{tech.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Body */}
                    <div className="px-6 pb-6 pt-3 flex flex-col gap-3 flex-grow">
                      <h3 className="text-h3 text-primary-text group-hover:text-primary-blue transition-colors">
                        {project.title}
                      </h3>

                      {/* Description with read more */}
                      <div className="text-small text-secondary-text leading-relaxed">
                        <p className={isExpanded ? "" : "line-clamp-2"}>
                          {project.description}
                        </p>
                        {project.description?.length > 100 && (
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : project._id)}
                            className="text-primary-blue  text-[11px] font-semibold mt-1 hover:underline cursor-pointer"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>

                      {/* Action links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="flex gap-2 pt-2 mt-auto">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-primary-blue hover:bg-hover-blue text-white text-small font-semibold rounded-xl transition-colors"
                            >
                              <FaExternalLinkAlt className="text-[10px]" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-border-custom hover:border-primary-blue hover:text-primary-text text-secondary-text text-small font-medium rounded-xl transition-colors"
                            >
                              <FaGithub className="text-sm" />
                              GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Show all count ── */}
        {filtered.length > 0 && (
          <p className="text-center mt-12 text-muted-text text-small">
            Showing{" "}
            <span className="text-primary-text font-semibold transition-colors duration-300">{filtered.length}</span>
            {" "}of{" "}
            <span className="text-primary-text font-semibold transition-colors duration-300">{projects.length}</span>
            {" "}projects
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;