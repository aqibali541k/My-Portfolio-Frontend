import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const DATA = [
  {
    role: "MERN Stack Developer",
    company: "Personal Projects",
    duration: "2025 – Present",
    desc: "Building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Developed secure authentication systems, REST APIs, role-based access control, image uploads, responsive dashboards, and modern user interfaces.",
  },
  {
    role: "Open to Internship",
    company: "Actively Looking",
    duration: "Now",
    desc: "Seeking internship or junior developer opportunities where I can contribute to real products, collaborate with experienced engineers, and grow rapidly while delivering value from day one.",
  },
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-border-custom bg-primary-bg px-6 py-24 sm:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 transition-colors duration-300">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Development Journey
          </h2>

          <p className="mt-5 text-base leading-8 text-secondary-text">
            Hands-on experience gained through building full-stack applications,
            solving real-world problems, and continuously improving development
            skills across the MERN ecosystem.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-card-bg md:block transition-colors duration-300" />

          <div className="space-y-8">
            {DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="relative flex flex-col gap-6 md:flex-row md:gap-8"
              >
                {/* Timeline Icon */}

                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hover bg-card-bg text-blue-500 transition-colors duration-300">
                    {index === 0 ? (
                      <FaBriefcase size={14} />
                    ) : (
                      <FaCode size={14} />
                    )}
                  </div>
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-border-custom bg-card-bg p-7 transition-all duration-300 hover:border-blue-500/40 transition-colors">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-text">
                        {item.role}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-secondary-text">
                        <FaExternalLinkAlt className="text-xs text-blue-500" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-border-hover bg-secondary-bg px-4 py-2 text-sm font-medium text-primary-text transition-colors duration-300">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="mt-6 h-px bg-card-bg transition-colors duration-300" />

                  <p className="mt-6 leading-8 text-secondary-text">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;