import React from "react";
import Nav from "../navbar/navbar";
import Hero from "../Hero/hero";
import Tech from "../Tech/tech";
import Projects from "../Projects/projects";
import About from "../About/about";
import Contact from "../Contact/contact";
import "./content.css";

class Content extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </>
    );
  }
}

export default Content;
