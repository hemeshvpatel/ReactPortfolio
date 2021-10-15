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
  fontSizes: { title: "25px", body: "15px" },
};

export default function Layout() {
  //Layout contains the Header, Sections, and Footer of website with theme being passed to all children.
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
