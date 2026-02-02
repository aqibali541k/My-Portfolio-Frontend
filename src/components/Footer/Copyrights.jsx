import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0f172a] text-gray-300 px-6 pt-20 pb-10">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400" />

      <div className="max-w-7xl mx-auto grid gap-14 md:grid-cols-3">
        {/* 🧑‍💻 Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4 cursor-pointer">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-green-400 shadow-lg">
              <FaCode className="text-white text-xl" />
            </div>
            <h1
              onClick={() => handleScroll("home")}
              className="text-2xl font-extrabold text-white tracking-wide"
            >
              Aqib<span className="text-cyan-400">Stack</span>
            </h1>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Crafting elegant digital experiences with clean code, smooth
            interactions and modern technologies.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="md:mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleScroll(link)}
                  className="relative cursor-pointer text-gray-400 hover:text-cyan-400 transition duration-300 hover-animation"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🌐 Social */}
        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-white mb-4">
            Let’s Connect
          </h3>

          <div className="flex md:justify-end justify-center gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/aqibali541k",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/aqib-shabbir-62a16a345",
              },
              {
                icon: <FaTwitter />,
                link: "https://twitter.com/yourtwitter",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:aqibali541k@gmail.com",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-cyan-400/20 
                           hover:text-cyan-400 transition-all duration-300 
                           hover:-translate-y-1"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ⚡ Bottom */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
        © {currentYear} <span className="text-white font-semibold">Aqib</span>
        <span className="text-cyan-400 font-semibold">Stack</span> — Built with
        ❤️ by <span className="text-cyan-400 font-semibold">Aqib Shabbir</span>
      </div>
    </footer>
  );
};

export default Copyrights;
