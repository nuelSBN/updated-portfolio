import React, { useEffect } from "react";
import { Section, Title } from "../main/main.style";
import { AboutBox, AboutText } from "./about.styles";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Section id="about">
      <Title>
        01. <span>about me</span>
      </Title>
      <AboutBox>
        <AboutText data-aos="fade-up">
          I’m a talented, ambitious, and self-motivated MERN STACK DEVELOPER
          with useful skills ranging from self-discipline, teamwork, and the
          ability to work with minimum supervision.
        </AboutText>
        <AboutText data-aos="fade-up">
          I specialize in building web interfaces that are elegant, intuitive,
          and effectively communicate products to their intended users using
          modern web technologies and practices.
        </AboutText>
        <AboutText data-aos="fade-up">
          Looking For Opportunities To Build A Career That Would Help Me
          Contribute To Making Nigeria A Strong IT Hub In Africa And The World
          At Large Thereby Achieving Greater Excellence In The Softwareindustry
          Resulting In Greater Organizational Productivity.
        </AboutText>
      </AboutBox>
    </Section>
  );
}
