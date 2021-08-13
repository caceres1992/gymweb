import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Trainer from "../../components/Trainer";
import Footer from "../../components/Footer";
import { Element } from "react-scroll";

const index = () => {
  return (
    <div>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="trainer">
        <Trainer />
      </Element>
      <Element name="contact">
        <Contact />
        <Footer />
      </Element>
    </div>
  );
};

export default index;
