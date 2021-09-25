import React from "react";
import WorkExperience from "../workExperience";
import About from "../about";
import Landing from "../landing";
import Footer from "../footer";
import Projects from "../projects";
import Header from "../header";
import Section from "./section";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//Styles

const GlobalStyle = createGlobalStyle`
  body {
    background: #010000;
    margin: 0;
    padding: 0px 200px 0px 200px;
    font-family: sans-serif;

      //this will update styling after a curtain resolution on our page
      @media screen and (max-width: 768px) { 
        padding: 0px 50px 0px 50px
      }
    }
`;

const theme = {
  colors: { primary: "#ffffff", secondary: "#ff0000" },
};

export default function Layout() {
  //To change layout look at styling for display grid and change accordingly
  //CSS Grid Container Help: https://www.w3schools.com/css/css_grid_container.asp

  //Section is like pages for the links at the top, this keeps everything contained

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Section children={<Landing />} />
      <Section title="About me" children={<About />} />
      <Section title="Work Experience" children={<WorkExperience />} />
      <Section title="Projects" children={<Projects />} />
      <Footer />
    </ThemeProvider>
  );
}
