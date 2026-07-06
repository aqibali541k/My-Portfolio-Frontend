import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const DATA = [
  { q: "What tech stack do you recommend for SaaS apps?", a: "The MERN stack (MongoDB, Express, React, Node.js) with TypeScript. PostgreSQL for strongly relational entities." },
  { q: "Can you work within Scrum sprints?", a: "Yes — standups, JIRA tracking, PR reviews, and on-time delivery are standard practice." },
  { q: "How do you ensure frontend performance?", a: "Asset optimisation, lazy loading, modern CSS, bundle analysis, and Chrome DevTools profiling." },
  { q: "Do you offer post-launch support?", a: "Yes — maintenance contracts, migration plans, error monitoring (Sentry), and dependency upgrades." },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-section-bg border-t border-border-custom px-6 sm:px-8 lg:px-12 text-left">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary-blue font-semibold mb-2" style={{ fontSize: "var(--text-label)", letterSpacing: "0.06em" }}>FAQ</p>
          <h2 className="text-primary-text font-bold tracking-tight transition-colors duration-300" style={{ fontSize: "var(--text-h1)", letterSpacing: "-0.025em" }}>Common Questions</h2>
          <div className="h-px w-10 bg-border-custom mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {DATA.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-card-bg border border-border-custom rounded-2xl overflow-hidden transition-colors duration-300">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition hover:bg-secondary-bg/30 transition-colors duration-300">
                  <span className="text-primary-text font-semibold pr-4 transition-colors duration-300" style={{ fontSize: "var(--text-body)" }}>{faq.q}</span>
                  <div className="p-1 rounded-md bg-secondary-bg border border-border-custom text-primary-blue shrink-0 transition-colors duration-300" style={{ fontSize: "10px" }}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <div className="px-5 pb-5 text-secondary-text leading-relaxed border-t border-border-custom/50 pt-3" style={{ fontSize: "var(--text-small)" }}>{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
