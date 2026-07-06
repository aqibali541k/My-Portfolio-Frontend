import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaFileDownload } from "react-icons/fa";
import { useAuthContext } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NAV = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  // { name: "Certifications", id: "certifications" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { user, isAuth } = useAuthContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    NAV.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      NAV.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({
      top: section.offsetTop - 70,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const isAdmin = isAuth && user?.email === import.meta.env.VITE_ADMIN_EMAIL;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-primary-bg/70 backdrop-blur-md border-b border-border-custom"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1440px] mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-2">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-blue flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-glow">
              AS
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-primary-text hidden sm:block">
              Aqib<span className="text-primary-blue">.</span>
            </h1>
          </button>

          {/* Desktop Navigation - visible from lg, tighter until xl */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`px-2.5 xl:px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer text-[11px] xl:text-[13px] tracking-wide whitespace-nowrap
                  ${active === id
                      ? "bg-secondary-bg text-primary-text border border-border-custom"
                      : "text-secondary-text hover:text-primary-text hover:bg-secondary-bg/50 border border-transparent"
                    }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <ThemeToggle />

              <a
                href="/Resume.pdf"
                download="Aqib_Shabbir_Resume.pdf"
                className="group flex items-center gap-1.5 xl:gap-2 px-3 xl:px-5 py-2 xl:py-2.5 rounded-full border border-border-custom text-primary-text hover:border-primary-blue hover:text-primary-blue transition-all cursor-pointer text-xs xl:text-sm font-medium bg-secondary-bg/50 whitespace-nowrap"
              >
                <FaFileDownload className="text-muted-text group-hover:text-primary-blue transition-colors" />
                <span className="hidden xl:inline">Resume</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center gap-1.5 xl:gap-2 px-4 xl:px-6 py-2 xl:py-2.5 rounded-full bg-primary-blue hover:bg-hover-blue text-white font-semibold transition-all cursor-pointer shadow-glow text-xs xl:text-sm whitespace-nowrap"
              >
                Hire Me
                <FaChevronRight className="text-[9px] xl:text-[10px] group-hover:translate-x-1 transition-transform" />
              </button>

              {isAdmin && (
                <>
                  <span className="w-px h-5 bg-border-custom" />
                  <Link
                    to="/dashboard"
                    className="px-3 xl:px-4 py-2 rounded-full border border-border-custom hover:bg-secondary-bg/50 transition-all text-primary-text text-xs xl:text-sm whitespace-nowrap"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            {/* Theme toggle visible on mobile/tablet next to hamburger */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile / Tablet Hamburger (below lg) */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden relative flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border-custom bg-secondary-bg/60 z-50 shrink-0"
            >
              <span className={`block absolute h-0.5 w-4 sm:w-5 rounded-full bg-primary-text transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`block absolute h-0.5 w-4 sm:w-5 rounded-full bg-primary-text transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block absolute h-0.5 w-4 sm:w-5 rounded-full bg-primary-text transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Drawer (below lg) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[340px] bg-primary-bg border-l border-border-custom shadow-2xl z-50 flex flex-col p-5 sm:p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-border-custom pb-4">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-text uppercase">MENU</span>
                <ThemeToggle />
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                {NAV.map(({ name, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl transition-all font-medium text-sm ${active === id
                      ? "bg-secondary-bg text-primary-text border border-border-custom"
                      : "text-secondary-text hover:bg-secondary-bg/50 hover:text-primary-text"
                      }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <a
                  href="/Resume.pdf"
                  download="Aqib_Shabbir_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl border border-border-custom text-primary-text hover:bg-secondary-bg transition-all font-medium text-sm"
                >
                  <FaFileDownload className="text-secondary-text" />
                  Resume
                </a>

                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-primary-blue hover:bg-hover-blue text-white font-semibold transition-all shadow-glow text-sm"
                >
                  Hire Me
                  <FaChevronRight className="text-[10px]" />
                </button>

                {isAdmin && (
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center mt-3 py-3 rounded-xl border border-border-custom text-primary-text hover:bg-secondary-bg transition-all text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;