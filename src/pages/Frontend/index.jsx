import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
const Frontend = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Frontend;
