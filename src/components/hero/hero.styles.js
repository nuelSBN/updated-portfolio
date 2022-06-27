import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - 70px);
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const HeroBox = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.variant === "outline" ? "row" : "column"};
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    flex: 1;
  }
`;

export const HeroImg = styled.img`
  height: 50vmin;
  width: 50vmin;
  border-radius: 50%;
  border: 3px solid;
  object-fit: cover;
`;

export const HeroTextMd = styled.h4`
  font-size: 4vmin;
  margin-top: 2vmin;
  text-align: center;
`;

export const HeroTextLg = styled.h1`
  font-size: 7vmin;
  margin-top: 2vmin;
  text-align: center;
`;

export const HeroBtn = styled.a`
  padding: 10px 30px;
  margin: 20px 10px;
  font-size: 3vmin;
  background-color: ${(prop) => prop.theme.body};
  color: ${(props) => props.theme.fontColor};
  border: 3px solid ${(props) => props.theme.fontColor};
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
  }
`;
