import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import About from "./About";
import Resume from "../../components/Resume/Resume";
import Services from "./Services";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import TechStack from "./TechStack";
import Project from "./Project";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Frontend = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-primary-bg text-primary-text selection:bg-primary-blue selection:text-primary-text transition-colors duration-300"
    >
      <Header />

      <main>

        <Hero />

        <About />

        <Stats />

        {/* <TechStack /> */}

        <Skills />

        <Services />

        <Project />

        <Experience />

        <Education />

        <Resume />

        <Testimonials />

        <Blog />

        <FAQ />

        <Contact />

      </main>

      <Footer />
    </motion.div>
  );
};

export default Frontend;
