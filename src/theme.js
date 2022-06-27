import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  border: "rgba(238, 238, 238, 0.18)",
};

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  border: "rgba(0, 0, 0, 0.18)",
};

export const GlobalStyles = createGlobalStyle`
   *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }


a{
  text-decoration: inherit;
  color: inherit;
}

body{
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

}

`;
