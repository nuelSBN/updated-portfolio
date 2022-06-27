import React from "react";
import { MainStyle } from "./main.style";
import Hero from "../hero/Hero";
import About from "../about/About";
import Project from "../projects/Project";
import Technologies from "../technologies/Technologies";
import Footer from "../footer/Footer";

export default function MainBox() {
  return (
    <MainStyle>
      <Hero />
      <About />
      <Project />
      <Technologies />
      <Footer />
    </MainStyle>
  );
}
