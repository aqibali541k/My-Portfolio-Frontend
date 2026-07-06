import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiGithub, SiFirebase,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "DevOps"];

const SKILLS = [
  // Frontend
  { name: "HTML5", level: 95, icon: <SiHtml5 className="text-[#E34F26]" />, cat: "Frontend" },
  { name: "CSS3", level: 90, icon: <SiCss3 className="text-[#1572B6]" />, cat: "Frontend" },
  { name: "JavaScript", level: 70, icon: <SiJavascript className="text-[#F7DF1E]" />, cat: "Frontend" },
  { name: "TypeScript", level: 65, icon: <SiTypescript className="text-[#3178C6]" />, cat: "Frontend" },
  { name: "React.js", level: 72, icon: <SiReact className="text-[#61DAFB]" />, cat: "Frontend" },
  { name: "Redux Toolkit", level: 65, icon: <SiRedux className="text-[#764ABC]" />, cat: "Frontend" },
  { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss className="text-[#06B6D4]" />, cat: "Frontend" },
  // Backend
  { name: "Node.js", level: 68, icon: <SiNodedotjs className="text-[#339933]" />, cat: "Backend" },
  { name: "Express.js", level: 70, icon: <SiExpress className="text-primary-text transition-colors duration-300" />, cat: "Backend" },
  { name: "REST APIs", level: 72, icon: <FaServer className="text-[#6366F1]" />, cat: "Backend" },
  // Database
  { name: "MongoDB", level: 68, icon: <SiMongodb className="text-[#47A248]" />, cat: "Database" },
  { name: "Firebase", level: 60, icon: <SiFirebase className="text-[#FFCA28]" />, cat: "Database" },
  // DevOps
  { name: "Git", level: 75, icon: <SiGit className="text-[#F05032]" />, cat: "DevOps" },
  { name: "GitHub", level: 70, icon: <SiGithub className="text-primary-text transition-colors duration-300" />, cat: "DevOps" },
];

const BAR_COLORS = {
  Frontend: "from-[#6366F1] to-[#818CF8]",
  Backend: "from-[#22C55E] to-[#4ADE80]",
  Database: "from-[#F59E0B] to-[#FCD34D]",
  DevOps: "from-[#F97316] to-[#FB923C]",
};

const Skills = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? SKILLS : SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" className="py-24 bg-section-bg px-6 sm:px-8 lg:px-12 border-t border-border-custom transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue transition-colors duration-300">
            Abilities
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl transition-colors duration-300">
            Technical Skills
          </h2>
          <p className="mt-4 text-base leading-8 text-secondary-text max-w-xl mx-auto">
            Core technologies I use to build full-stack web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${active === cat
                  ? "bg-primary-blue border-primary-blue text-white"
                  : "bg-card-bg border-border-custom text-secondary-text hover:border-primary-blue/40 hover:text-primary-text"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                layout
                key={s.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-card-bg border border-border-custom rounded-2xl p-5 hover:border-primary-blue/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-bg border border-border-custom text-xl group-hover:border-primary-blue/30 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary-text transition-colors duration-300">{s.name}</h3>
                    <span className="text-[10px] font-mono text-muted-text">{s.cat}</span>
                  </div>
                  <span className="ml-auto text-xs font-bold text-primary-blue font-mono">{s.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-secondary-bg rounded-full overflow-hidden border border-border-custom transition-colors duration-300">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${BAR_COLORS[s.cat] || "from-primary-blue to-hover-blue"}`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
