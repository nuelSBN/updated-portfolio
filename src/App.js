import React, { useState } from "react";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import HeaderContainer from "./components/header/HeaderContainer";
import MainBox from "./components/main/MainBox";
import { Toggler } from "./components/header/header.styles";

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <HeaderContainer stuff={theme} />
      <MainBox />
      <Toggler onClick={themeToggler}>click</Toggler>
    </ThemeProvider>
  );
}

export default App;
