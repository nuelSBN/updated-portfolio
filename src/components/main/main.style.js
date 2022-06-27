import styled from "styled-components";

export const MainStyle = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 4vmin;
  z-index: 9;
`;

export const Section = styled.section`
  height: 100%;
  padding: 4vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 7vmin;
  width: 100%;

  span {
    position: relative;
    text-transform: capitalize;
    font-family: "Smooch", cursive;
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0px;
      height: 3px;
      width: 80%;
      background-color: ${(props) => props.theme.fontColor};
    }
  }
`;
