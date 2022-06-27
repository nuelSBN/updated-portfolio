import styled from "styled-components";

export const ProjectBox = styled.div`
  min-height: 50vh;
  padding: 8vmin 0;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 6vmin;
  margin-top: 2vmin;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled.div`
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 5px 5px ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.body};
  line-height: 1.7;
`;

export const ProjectTitle = styled.h1`
  font-size: 4vmin;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ProjectTools = styled.h4`
  font-size: 3vmin;
  font-weight: 400;
  text-transform: capitalize;
  margin: 1vmin 0;
`;

export const ProjectDesc = styled.p`
  font-size: 2.4vmin;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 1.7;
  font-weight: 200;
  margin: 1vmin 0;
`;

export const ProJectRoute = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ProJectLink = styled.span`
  font-size: 3vmin;
  margin-right: 3vmin;

  a {
    display: flex;
    align-items: center;
    gap: 1vmin;
    text-transform: capitalize;
  }
`;
