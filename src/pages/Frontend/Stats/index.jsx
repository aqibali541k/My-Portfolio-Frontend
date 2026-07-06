import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaUsers, FaGitAlt } from "react-icons/fa";

const DATA = [
  { value: 25, suffix: "+", label: "Projects Built", icon: <FaProjectDiagram className="text-[#6366F1]" />, color: "from-[#6366F1]/20 to-transparent" },
  { value: 10, suffix: "+", label: "Technologies", icon: <FaCode className="text-[#22C55E]" />, color: "from-[#22C55E]/20 to-transparent" },
  { value: 1, suffix: "+ yr", label: "Experience", icon: <FaUsers className="text-[#F59E0B]" />, color: "from-[#F59E0B]/20 to-transparent" },
  { value: 500, suffix: "+", label: "GitHub Commits", icon: <FaGitAlt className="text-[#F97316]" />, color: "from-[#F97316]/20 to-transparent" },
];

function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(item.value, 1400, visible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="relative text-center p-6 bg-card-bg border border-border-custom rounded-2xl overflow-hidden group hover:border-primary-blue/30 transition-colors duration-300"
    >
      {/* Gradient glow bg */}
      <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-bg border border-border-custom text-xl transition-colors duration-300">
          {item.icon}
        </div>
        <h3 className="text-3xl font-extrabold tracking-tight text-primary-blue">
          {count}{item.suffix}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-text">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
};

const Stats = () => (
  <section id="stats" className="py-16 bg-secondary-bg border-t border-border-custom px-6 sm:px-8 lg:px-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {DATA.map((s, i) => (
        <StatCard key={s.label} item={s} index={i} />
      ))}
    </div>
  </section>
);

export default Stats;
