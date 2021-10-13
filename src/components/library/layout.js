import React from "react";
import WorkExperience from "../WorkExperience";
import About from "../About";
import Landing from "../Landing";
import Footer from "../Footer";
import Projects from "../Projects";
import Header from "../Header";
import Section from "./Section";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Contact from "./Contact";

//Styles

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background: #010000;
    font-family: sans-serif;
    margin: 0 200px 0 200px;

      //this will update styling after a curtain resolution on our page
      @media screen and (max-width: 1000px) { 
        margin: 0 2rem 0 2rem;
      }
    }
`;

//primary = white     secondary = red     tertiary = black

const theme = {
  colors: { primary: "#ffffff", secondary: "#ff0000", tertiary: "#000000" },
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
      <Section id="about" title="About me" children={<About />} />
      <Section
        id="experience"
        title="Work Experience"
        children={<WorkExperience />}
      />
      <Section id="project" title="Projects" children={<Projects />} />
      <Section
        id="contact"
        title="Contact"
        children={<Contact />}
        minHeight={"20vh"}
      />
      <Footer />
    </ThemeProvider>
  );
}
