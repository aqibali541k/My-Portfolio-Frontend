import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-500" />, level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "Intermediate" },
  { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, level: "Intermediate" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" />, level: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Expert" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Expert" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" />, level: "Proficient" },
  { name: "Database", icon: <FaDatabase className="text-gray-500" />, level: "Intermediate" },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col justify-center items-center py-20 px-6 overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl top-20 left-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-purple-300/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse-slow delay-700"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 "
      >
        My <span className="text-cyan-500">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-7xl z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.07, rotate: 2 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl mb-4 flex justify-center">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-500">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
