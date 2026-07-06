import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

const DATA = [
  {
    degree: "BS Software Engineering",
    institution: "University of Agriculture, Faisalabad",
    duration: "Ongoing",
    desc: "Currently pursuing a Bachelor's degree in Software Engineering with a focus on software development, algorithms, database systems, and modern web technologies.",
  },
  {
    degree: "Web & Mobile App Development",
    institution: "Saylani Mass IT Training (SMIT)",
    duration: "Nov 2024 – Aug 2025",
    desc: "Successfully completed a 10-month professional training program focused on modern web and mobile application development with practical experience in the MERN Stack.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-border-custom bg-primary-bg px-6 py-24 sm:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 transition-colors duration-300">
            Education
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-5 text-base leading-8 text-secondary-text">
            My academic background and professional training have provided a
            strong foundation in software engineering, full-stack development,
            and building modern web applications.
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-card-bg md:block transition-colors duration-300" />

          <div className="space-y-10">
            {DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                className="relative flex flex-col gap-6 md:flex-row md:gap-8"
              >
                {/* Timeline Icon */}

                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hover bg-card-bg text-blue-500 transition-colors duration-300">
                    <FaGraduationCap size={16} />
                  </div>
                </div>

                {/* Card */}

                <div className="flex-1 rounded-3xl border border-border-custom bg-card-bg p-7 transition-all duration-300 hover:border-blue-500/40 transition-colors">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-text">
                        {item.degree}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-secondary-text">
                        <FaUniversity className="text-sm text-blue-500" />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-border-hover bg-secondary-bg px-4 py-2 text-sm font-medium text-primary-text transition-colors duration-300">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-card-bg transition-colors duration-300" />

                  <p className="mt-6 leading-8 text-secondary-text">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;