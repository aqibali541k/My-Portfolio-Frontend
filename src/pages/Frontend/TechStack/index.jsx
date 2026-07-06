import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const COLORS = [
  { text: "text-emerald-400", bar: "bg-emerald-400", bg: "bg-emerald-400/10" },
  { text: "text-teal-400", bar: "bg-teal-400", bg: "bg-teal-400/10" },
  { text: "text-orange-400", bar: "bg-orange-400", bg: "bg-orange-400/10" },
  { text: "text-fuchsia-400", bar: "bg-fuchsia-400", bg: "bg-fuchsia-400/10" },
  { text: "text-amber-400", bar: "bg-amber-400", bg: "bg-amber-400/10" },
  { text: "text-sky-400", bar: "bg-sky-400", bg: "bg-sky-400/10" },
  { text: "text-violet-400", bar: "bg-violet-400", bg: "bg-violet-400/10" },
];

const abbr = (name) => {
  const words = name.replace(".js", "").split(" ").filter(Boolean);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return words[0].slice(0, 2);
};

const CATS = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    techs: [
      { name: "React.js", level: 95 },
      { name: "Vite", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML5", level: 96 },
      { name: "CSS3", level: 93 },
      { name: "JavaScript", level: 94 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    techs: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 94 },
      { name: "JWT Auth", level: 88 },
      { name: "MVC", level: 86 },
      { name: "Mongoose", level: 89 },
      { name: "CORS", level: 84 },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    techs: [
      { name: "MongoDB", level: 91 },
      { name: "Redis", level: 78 },
      { name: "Cloudinary", level: 83 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <FaTools />,
    techs: [
      { name: "Git", level: 93 },
      { name: "GitHub", level: 92 },
      { name: "Postman", level: 90 },
      { name: "Vercel", level: 87 },
      { name: "Render", level: 85 },
      { name: "NPM", level: 89 },
      { name: "ESLint", level: 81 },
    ],
  },
];

const TechStack = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="techstack"
      className="py-24 bg-primary-bg border-t border-border-custom px-6 sm:px-8 lg:px-12 text-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p
            className="text-primary-blue font-semibold mb-2"
            style={{ fontSize: "var(--text-label)", letterSpacing: "0.06em" }}
          >
            TOOLBOX
          </p>
          <h2
            className="text-primary-text font-bold tracking-tight transition-colors duration-300"
            style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.025em" }}
          >
            Tech Stack
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATS.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer border
                ${active === i
                  ? "bg-primary-blue border-primary-blue text-white shadow-glow"
                  : "bg-secondary-bg border-border-custom text-secondary-text hover:text-primary-text hover:border-primary-blue/40"
                }`}
            >
              <span className="text-base">{c.icon}</span>
              {c.title}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left"
          >
            {CATS[active].techs.map((t, ti) => {
              const c = COLORS[ti % COLORS.length];
              return (
                <div
                  key={t.name}
                  className="bg-card-bg border border-border-custom p-5 rounded-2xl hover:border-primary-blue/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${c.bg} ${c.text}`}
                      >
                        {abbr(t.name)}
                      </div>
                      <h3 className="text-primary-text font-semibold text-[15px]">
                        {t.name}
                      </h3>
                    </div>
                    <span className={`font-bold text-sm ${c.text}`}>{t.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary-bg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${c.bar}`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStack;