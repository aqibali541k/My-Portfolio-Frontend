import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaGlobe,
  FaCoffee,
  FaCodeBranch,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const STATS = [
  { icon: <FaCodeBranch />, value: "10+", label: "Projects Completed" },
  { icon: <FaStar />, value: "20+", label: "Technologies Learned" },
  { icon: <FaGraduationCap />, value: "4th", label: "Current Semester" },
  { icon: <FaCoffee />, value: "1", label: "Certification" },
];

const SOCIALS = [
  {
    icon: <FaGithub />,
    href: "https://github.com/aqibali541k",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/aqib-shabbir-62a16a345",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:aqibali541k@gmail.com",
    label: "Email",
  },
];

const FLOATING_BADGES = [
  { icon: <FaReact className="text-[#61DAFB]" />, name: "React", top: "10%", left: "-10%", delay: 0 },
  { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js", top: "30%", right: "-12%", delay: 1 },
  { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB", bottom: "25%", left: "-5%", delay: 2 },
  { icon: <SiExpress className="text-primary-text transition-colors duration-300" />, name: "Express", top: "5%", right: "15%", delay: 1.5 },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind", bottom: "-5%", left: "30%", delay: 2.5 },
];


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id, offset = -70) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset + offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary-bg overflow-hidden pt-28 pb-16 flex items-center font-sans transition-colors duration-300"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')",
          }}
        />

        {/* Dynamic Glowing Blobs */}
        <motion.div
          animate={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-[0.15] dark:opacity-10 transition-colors duration-300"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-[0.1] dark:opacity-[0.08] transition-colors duration-300"
        />

        {/* Very Subtle Floating Particles */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-primary-text rounded-full shadow-[0_0_10px_2px_rgba(150,150,150,0.5)] animate-pulse" />
        <div className="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-primary-blue rounded-full shadow-[0_0_12px_3px_rgba(59,130,246,0.5)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_2px_rgba(139,92,246,0.5)] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col mt-8 lg:mt-0"
        >
          {/* Availability Badge */}
          <div className="self-start inline-flex items-center gap-2.5 rounded-full border border-border-custom bg-secondary-bg/80 backdrop-blur-md px-4 py-2 shadow-card shadow-black/5 transition-colors duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-secondary-text">
              Available for Freelance & Full-time
            </span>
          </div>

          {/* Greeting */}
          <h2 className="mt-8 text-base font-semibold tracking-widest text-primary-blue uppercase">
            Hi, I'm Aqib Shabbir
          </h2>

          {/* Headline */}
          <h1 className="mt-4 text-[44px] leading-[1.1] sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-primary-text tracking-tight transition-colors duration-300">
            Building Digital <span className="inline-block pb-2">Products</span>
            <br />
            That Feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-purple-500">Fast,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-primary-blue to-blue-400">Modern & Beautiful.</span>
          </h1>

          {/* Typing Animation */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-lg sm:text-xl xl:text-2xl font-medium text-secondary-text transition-colors duration-300">
            <span>Specialized in</span>
            <TypeAnimation
              sequence={[
                "React.js", 2000,
                "Node.js", 2000,
                "Express.js", 2000,
                "MongoDB", 2000,
                "Firebase", 2000,
                "MERN Stack", 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
              className="font-bold text-primary-text transition-colors duration-300"
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-secondary-text leading-relaxed max-w-xl transition-colors duration-300">
            I am a MERN Stack Developer passionate about building scalable, responsive, and modern web applications.
            I enjoy solving real-world problems using React.js, Node.js, Express.js, and MongoDB.
            Currently looking for internship and junior developer opportunities.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <button
              onClick={() => scrollTo("contact")}
              className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-blue to-purple-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute cursor-pointer inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              Hire Me
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <a
              href="/Resume.pdf"
              download="Aqib_Shabbir_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-secondary-bg border border-border-custom px-7 py-3.5 text-sm sm:text-base font-semibold text-primary-text shadow-card transition-all duration-300 hover:border-border-hover hover:bg-card-bg hover:scale-[1.02] transition-colors"
            >
              <FaDownload className="text-secondary-text transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary-blue" />
              Download CV
            </a>
          </div>

          {/* Stat Cards — boxed icon cards per design */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center text-center gap-2 bg-card-bg border border-border-custom rounded-2xl px-4 py-6 transition-colors duration-300"
              >
                <span className="text-primary-blue text-xl">{stat.icon}</span>
                <h4 className="text-xl sm:text-2xl font-bold text-primary-text tracking-tight transition-colors duration-300">
                  {stat.value}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-muted-text transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-4">
            {SOCIALS.map((social, i) => (
              <div key={social.label} className="relative group">
                <motion.a
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border-custom bg-secondary-bg text-lg text-secondary-text shadow-card transition-all duration-300 hover:border-primary-blue hover:text-primary-blue hover:shadow-glow transition-colors"
                >
                  {social.icon}
                </motion.a>

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-secondary-bg border border-border-custom px-3 py-1.5 text-xs font-medium text-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-card z-50 transition-colors">
                  {social.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary-bg border-b border-r border-border-custom rotate-45 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT – CODE EDITOR ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0"
        >
          <div className="relative w-full max-w-[480px] xl:max-w-[520px]">

            {/* Ambient glow behind editor */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-blue/20 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />

            {/* CODE EDITOR WINDOW */}
            <div className="relative rounded-2xl border border-border-custom bg-[#0D1117] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">

              {/* Title Bar */}
              <div className="flex items-center gap-3 border-b border-white/6 bg-[#161B22] px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-[11px] font-medium text-[#8B949E] tracking-wide">
                    developer.ts
                  </span>
                </div>
                <div className="w-10" />
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center border-b border-white/6 bg-[#0D1117] px-5">
                <div className="flex items-center gap-1.5 py-2.5 border-b-2 border-[#6366F1] text-[#E6EDF3]">
                  <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  <span className="text-[11px] font-medium">developer.ts</span>
                </div>
              </div>

              {/* Code Body */}
              <div className="p-6 font-mono text-[13px] leading-7 overflow-x-auto">
                {/* Line numbers + code */}
                <div className="flex gap-5">
                  {/* Line numbers */}
                  <div className="flex flex-col text-right text-[#3D444D] select-none text-[12px] leading-7 shrink-0">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => <span key={n}>{n}</span>)}
                  </div>
                  {/* Code */}
                  <div className="flex flex-col leading-7 min-w-0">
                    <div><span className="text-[#FF7B72]">const</span> <span className="text-[#E6EDF3]">developer</span> <span className="text-[#FF7B72]">=</span> <span className="text-[#E6EDF3]">{"{"}</span></div>
                    <div className="pl-5"><span className="text-[#79C0FF]">name</span><span className="text-[#E6EDF3]">:</span> <span className="text-[#A5D6FF]">"Aqib Shabbir"</span><span className="text-[#E6EDF3]">,</span></div>
                    <div className="pl-5"><span className="text-[#79C0FF]">role</span><span className="text-[#E6EDF3]">:</span> <span className="text-[#A5D6FF]">"Full-Stack Developer"</span><span className="text-[#E6EDF3]">,</span></div>
                    <div className="pl-5"><span className="text-[#79C0FF]">stack</span><span className="text-[#E6EDF3]">:</span> <span className="text-[#A5D6FF]">"MERN"</span><span className="text-[#E6EDF3]">,</span></div>
                    <div className="pl-5"><span className="text-[#79C0FF]">available</span><span className="text-[#E6EDF3]">:</span> <span className="text-[#56D364]">true</span><span className="text-[#E6EDF3]">,</span></div>
                    <div><span className="text-[#E6EDF3]">{"};"}</span></div>
                    <div>&nbsp;</div>
                    <div>
                      <span className="text-[#FF7B72]">const</span>{" "}
                      <span className="text-[#E6EDF3]">result</span>{" "}
                      <span className="text-[#FF7B72]">=</span>{" "}
                      <span className="text-[#FF7B72]">await</span>{" "}
                      <span className="text-[#D2A8FF]">code</span>
                      <span className="text-[#E6EDF3]">();</span>
                    </div>
                    <div>
                      <span className="text-[#FF7B72]">return</span>{" "}
                      <span className="text-[#E6EDF3]">result;</span>{" "}
                      <span className="text-[#8B949E]">// ✨ magic</span>
                    </div>
                  </div>
                </div>

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
                  className="mt-1 ml-[calc(2.5rem+1ch)] inline-block w-[2px] h-[14px] bg-[#6366F1] align-middle"
                />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between bg-[#6366F1] px-5 py-1.5">
                <span className="text-[10px] text-white/80 font-medium">TypeScript</span>
                <span className="text-[10px] text-white/80">Ln 11, Col 2 · UTF-8</span>
              </div>
            </div>

            {/* Floating Badge: Open to Work */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ delay: 0.6, duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-4 xl:-right-8 flex items-center gap-2 bg-[#0D1117] border border-[#238636] rounded-full px-4 py-2 shadow-lg"
            >
              <span className="text-[#56D364] text-xs">✓</span>
              <span className="text-[11px] font-semibold text-[#56D364] whitespace-nowrap">Open to Work</span>
            </motion.div>

            {/* Floating Tech Icon Badges */}
            {FLOATING_BADGES.map((badge) => (
              <motion.div
                key={badge.name}
                animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
                className="absolute z-30 hidden lg:flex items-center justify-center p-2.5 rounded-xl bg-[#161B22] border border-white/8 shadow-lg"
                style={{ top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right }}
              >
                <div className="text-xl">{badge.icon}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] sm:text-xs cursor-pointer font-medium uppercase tracking-[0.2em] text-secondary-text transition-colors duration-300">
          Scroll Down
        </p>
        <button
          onClick={() => scrollTo("about")}
          className="flex h-10 w-6 cursor-pointer items-start justify-center rounded-full border-2 border-border-custom bg-secondary-bg/50 p-1 transition-colors hover:border-border-hover"
          aria-label="Scroll Down"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-1.5 rounded-full bg-primary-blue shadow-glow"
          />
        </button>
      </motion.div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Hero;