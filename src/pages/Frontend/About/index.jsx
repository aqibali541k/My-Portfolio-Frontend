import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFileCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import profile from "../../../assets/images/profile.jpeg"
const CARDS = [
  {
    icon: <FaFileCode />,
    title: "Clean Architecture",
    desc: "Structured React components, modular hooks, and MVC backend patterns.",
  },
  {
    icon: <FaBriefcase />,
    title: "Full-Stack Focus",
    desc: "Building complete applications from database design to responsive UI.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learner",
    desc: "4th semester SE student always improving through real-world projects.",
  },
];

// Real journey — based on actual education and training only
const JOURNEY = [
  {
    year: "2025 – Now",
    title: "MERN Stack Developer",
    company: "Personal Projects",
    desc: "Building full-stack applications using React.js, Node.js, Express.js, and MongoDB. Focused on scalable architecture, secure authentication, and clean UI.",
  },
  {
    year: "Nov 2024 – Aug 2025",
    title: "Web & Mobile App Development",
    company: "Saylani Mass IT Training (SMIT)",
    desc: "Completed a 10-month professional training program covering the MERN stack, REST APIs, authentication, deployment, and real-world project delivery.",
  },
  {
    year: "2023 – Present",
    title: "BS Software Engineering",
    company: "University of Agriculture, Faisalabad",
    desc: "Currently in the 4th semester, studying software development, algorithms, database systems, and web technologies.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative border-t border-border-custom bg-primary-bg px-6 py-24 sm:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Centered Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue transition-colors duration-300">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-primary-text sm:text-5xl transition-colors duration-300">
            Who is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-500">
              Aqib Shabbir
            </span>
            ?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-secondary-text">
            A MERN Stack Developer passionate about building scalable, responsive, and modern web applications.
            Currently a 4th semester Software Engineering student, open to internship and junior developer opportunities.
          </p>
        </motion.div>

        {/* ── Two Column: Profile Card + Journey ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-border-custom bg-card-bg p-6 sm:p-8 flex flex-col items-center text-center transition-colors duration-300">
              <img
                src={profile}
                alt="Aqib Shabbir"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-primary-blue shadow-glow"
              />
              <h3 className="mt-5 text-xl font-bold text-primary-text transition-colors duration-300">
                Aqib Shabbir
              </h3>
              <p className="mt-1 text-primary-blue font-medium text-sm">
                MERN Stack Developer
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-secondary-text text-sm">
                <FaMapMarkerAlt className="text-muted-text" />
                Punjab, Pakistan
              </div>
            </div>

            {/* Supporting feature cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {CARDS.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group rounded-2xl border border-border-custom bg-card-bg p-5 transition-colors duration-300 hover:border-primary-blue/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-custom bg-secondary-bg text-lg text-primary-blue transition-colors duration-300 group-hover:border-primary-blue/40 group-hover:text-[#3B82F6]">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-sm font-semibold tracking-wide text-primary-text transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-text">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* My Journey — vertical timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold text-primary-text mb-8 transition-colors duration-300">
              My Journey
            </h3>

            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border-custom" />

              <div className="flex flex-col gap-10">
                {JOURNEY.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* node */}
                    <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-primary-blue border-4 border-primary-bg shadow-glow" />

                    <p className="text-primary-blue font-bold text-sm mb-1">
                      {item.year}
                    </p>
                    <h4 className="text-primary-text font-semibold text-base transition-colors duration-300">
                      {item.title}{" "}
                      <span className="text-secondary-text font-normal">
                        @ {item.company}
                      </span>
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-text leading-6 max-w-xl">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;