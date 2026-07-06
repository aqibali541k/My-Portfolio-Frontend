import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-primary-bg border-t border-border-custom px-6 sm:px-8 lg:px-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto text-center">

      {/* Header */}
      <div className="mb-14">
        <span className="inline-flex rounded-full border border-border-custom bg-secondary-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue transition-colors duration-300">
          Reviews
        </span>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-primary-text sm:text-5xl transition-colors duration-300">
          What Clients Say
        </h2>
        <p className="mt-4 text-base leading-8 text-secondary-text max-w-xl mx-auto">
          Testimonials will appear here once I complete client and collaborative projects.
        </p>
      </div>

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-xl rounded-2xl border border-border-custom bg-card-bg p-10 flex flex-col items-center gap-4 transition-colors duration-300"
      >
        <FaQuoteLeft className="text-4xl text-primary-blue/30" />
        <p className="text-secondary-text text-base leading-relaxed">
          Testimonials coming soon — currently building projects and gathering real feedback.
        </p>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-text">
          <span className="w-8 h-px bg-border-custom" />
          Open to Collaboration
          <span className="w-8 h-px bg-border-custom" />
        </span>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
