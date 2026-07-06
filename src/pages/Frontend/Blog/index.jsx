import React from "react";
import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa";

const Blog = () => {
  return (
    <section
      id="blog"
      className="border-t border-border-custom bg-primary-bg px-6 py-24 sm:px-8 lg:px-12 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 transition-colors duration-300">
            Blog
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Writing & Learning
          </h2>

          <p className="mt-5 text-base leading-8 text-secondary-text">
            I enjoy documenting what I learn while building real-world
            applications. This section will include articles about the MERN
            stack, React, backend architecture, UI engineering, and development
            experiences.
          </p>
        </motion.div>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4 }}
          className="mx-auto max-w-4xl rounded-3xl border border-border-custom bg-card-bg p-10 sm:p-14 transition-colors duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border-hover bg-secondary-bg transition-colors duration-300">
              <FaPenNib className="text-3xl text-blue-500" />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-primary-text">
              Articles Coming Soon
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-8 text-secondary-text">
              I'm currently preparing practical articles based on my learning
              journey and personal projects. Instead of publishing placeholder
              content, I'll only share write-ups that provide real value and
              reflect my actual experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-border-hover bg-secondary-bg px-4 py-2 text-sm text-primary-text transition-colors duration-300">
                React
              </span>

              <span className="rounded-full border border-border-hover bg-secondary-bg px-4 py-2 text-sm text-primary-text transition-colors duration-300">
                MERN Stack
              </span>

              <span className="rounded-full border border-border-hover bg-secondary-bg px-4 py-2 text-sm text-primary-text transition-colors duration-300">
                Node.js
              </span>

              <span className="rounded-full border border-border-hover bg-secondary-bg px-4 py-2 text-sm text-primary-text transition-colors duration-300">
                MongoDB
              </span>

              <span className="rounded-full border border-border-hover bg-secondary-bg px-4 py-2 text-sm text-primary-text transition-colors duration-300">
                UI Engineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;