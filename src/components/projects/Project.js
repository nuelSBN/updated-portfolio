import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Section, Title } from "../main/main.style";
import {
  ProjectBox,
  ProjectCard,
  ProjectDesc,
  ProjectGrid,
  ProJectLink,
  ProJectRoute,
  ProjectTitle,
  ProjectTools,
} from "./project.styles";
import { projects } from "../../projects";
import { FaGithub, FaEye } from "react-icons/fa";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Section id="projects">
      <Title>
        02. <span>projects{" </>"}</span>
      </Title>
      <ProjectBox>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard data-aos="fade-up">
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectTools>{project.tools}</ProjectTools>
              <ProjectDesc>{project.desciption}</ProjectDesc>
              <ProJectRoute>
                <ProJectLink>
                  <a href={project.route} target={"_blank"} rel="noreferrer">
                    live <FaEye />
                  </a>
                </ProJectLink>
                <ProJectLink>
                  <a href={project.github} target={"_blank"} rel="noreferrer">
                    code <FaGithub />
                  </a>
                </ProJectLink>
              </ProJectRoute>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectBox>
    </Section>
  );
}
