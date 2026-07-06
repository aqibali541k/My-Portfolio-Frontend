import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const SERVICES = [
  { icon: <FaLaptopCode />, title: "Frontend Engineering", desc: "Interactive React interfaces with TypeScript, optimised rendering, and accessible component libraries." },
  { icon: <FaServer />, title: "Backend Architecture", desc: "Node.js & Express servers, JWT authentication, RESTful APIs, and organised MVC patterns." },
  { icon: <FaDatabase />, title: "Database Design", desc: "MongoDB schema modelling, compound indexing, query profiling, and caching strategies." },
  { icon: <FaMobileAlt />, title: "Responsive Builds", desc: "Fluid layouts across every viewport using modern CSS and tested browser compatibility." },
];

const Services = () => (
  <section id="services" className="py-24 bg-primary-bg px-6 sm:px-8 lg:px-12 border-t border-border-custom transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-primary-blue font-semibold mb-2" style={{ fontSize: "var(--text-label)", letterSpacing: "0.06em" }}>SERVICES</p>
        <h2 className="text-primary-text font-bold tracking-tight transition-colors duration-300" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.025em" }}>What I Do</h2>
        <div className="h-px w-10 bg-border-custom mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-card-bg border border-border-custom p-6 rounded-2xl text-left group hover:border-primary-blue/25 transition-colors">
            <div className="p-2.5 rounded-lg bg-secondary-bg border border-border-custom text-primary-blue w-fit mb-5 transition-colors duration-300" style={{ fontSize: "var(--text-h3)" }}>
              {s.icon}
            </div>
            <h3 className="text-primary-text font-semibold mb-2 transition-colors duration-300" style={{ fontSize: "var(--text-h3)" }}>{s.title}</h3>
            <p className="text-secondary-text leading-relaxed" style={{ fontSize: "var(--text-small)" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
