import React from "react";
import { Section, Title } from "../main/main.style";
import { TechText } from "./technologies.styles";

export default function Technologies() {
  return (
    <Section id="technologies">
      <Title>
        03. <span>Technologies</span>
      </Title>
      <TechText>
        I've worked with a range of <span>technologies</span> in the web
        development world.
      </TechText>
      <TechText>My technical skills includes...</TechText>
      <TechText>
        <span>
          HTML/CSS/SASS, Javascript [ES6+],Bootstrapcss, ReactJS, NextJS,
          Tailwindcss, CSS-in-JS, Styled-Components, Redux-Toolkit, Firebase,
          nodejs, ExpressJs...
        </span>
      </TechText>
    </Section>
  );
}
