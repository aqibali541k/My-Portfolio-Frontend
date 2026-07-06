import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiReact } from "react-icons/si";

const LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const SOCIALS = [
  { icon: <FaGithub />, href: "https://github.com/aqibali541k", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/aqib-shabbir-62a16a345", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  { icon: <FaEnvelope />, href: "mailto:aqibali541k@gmail.com", label: "Email" },
];

const Copyrights = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary-bg text-secondary-text px-6 sm:px-8 lg:px-12 pt-16 pb-8 border-t border-border-custom transition-colors duration-300">

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-border-custom transition-colors duration-300">

          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-9 h-9 rounded-xl bg-primary-blue flex items-center justify-center font-bold text-white text-xs shadow-glow">
                AS
              </div>
              <span className="text-lg font-bold text-primary-text transition-colors duration-300">
                Aqib<span className="text-primary-blue">.</span>
              </span>
            </button>
            <p className="text-sm leading-relaxed text-secondary-text max-w-sm">
              Building production-ready web applications with clean architecture, efficient state management, and seamless user experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 pt-1">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-card-bg border border-border-custom text-secondary-text hover:border-primary-blue hover:text-primary-blue transition-all duration-300 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 md:mx-auto">
            <h3 className="text-xs font-semibold text-primary-text uppercase tracking-widest mb-4 transition-colors duration-300">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-secondary-text hover:text-primary-text hover:text-primary-blue transition-colors cursor-pointer"
                  >
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Back to top */}
          <div className="md:col-span-3 flex flex-col gap-4 md:items-end">
            <div>
              <h3 className="text-xs font-semibold text-primary-text uppercase tracking-widest mb-3 transition-colors duration-300">
                Get in Touch
              </h3>
              <a href="mailto:aqibali541k@gmail.com" className="text-sm text-secondary-text hover:text-primary-blue transition-colors block mb-1">
                aqibali541k@gmail.com
              </a>
              <a href="tel:+923078244507" className="text-sm text-secondary-text hover:text-primary-blue transition-colors block">
                +92 307 8244507
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card-bg border border-border-custom text-secondary-text hover:border-primary-blue hover:text-primary-blue transition-all duration-300 text-xs font-semibold group cursor-pointer mt-auto"
            >
              Back to Top <FaArrowUp className="text-[9px] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-text font-mono">
          <p>© {year} Aqib Shabbir. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <SiReact className="text-[#61DAFB] text-sm" /> React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Copyrights;
