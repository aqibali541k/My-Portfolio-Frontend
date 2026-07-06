import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-primary-bg overflow-hidden relative transition-colors duration-300">
      <div className="absolute inset-0">
        <div
          style={{
            backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            opacity: 0.05
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border-custom bg-secondary-bg px-4 py-2 mb-6 shadow-sm transition-colors duration-300">
            <span className="h-2 w-2 rounded-full bg-primary-blue animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-text">
              My Resume
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6 tracking-tight transition-colors duration-300">
            Check Out My <span className="text-primary-blue">Resume</span>
          </h2>
          
          <p className="max-w-2xl text-secondary-text text-lg mb-10">
            You can view my resume directly in your browser or download a copy to learn more about my experience, skills, and education.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-primary-blue text-white font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <FaEye className="text-xl transition-transform duration-300 group-hover:scale-110" />
              View Resume
            </a>
            
            <a
              href="/Resume.pdf"
              download="Aqib_Ali_Resume.pdf"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-border-custom text-primary-text font-medium transition-all duration-300 hover:border-primary-blue hover:text-primary-blue hover:-translate-y-1 bg-secondary-bg hover:bg-card-bg shadow-sm transition-colors"
            >
              <FaDownload className="text-xl text-secondary-text transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary-blue" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
