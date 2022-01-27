import React from "react";import Nav from "../navbar/navbar";import Hero from "../Hero/hero";import Tech from "../Tech/tech";import Projects from "../Projects/projects";import About from "../About/about";import Contact from "../Contact/contact";import{FontAwesomeIcon}from "@fortawesome/react-fontawesome";import "./content.css";import{faChevronUp}from "@fortawesome/free-solid-svg-icons"
class Content extends React.Component {
  scrolling(){window.onscroll=function(){window.scrollY>=1500?(document.getElementById("topBox").style.display="block"):(document.getElementById("topBox").style.display="none")}}
  backToTop(){window.scrollTo({top:0,left:0,})}
  render() {
    this.scrolling();
    return (
      <>
        <div id="topBox">
          <FontAwesomeIcon
            icon={faChevronUp}
            size="2x"
            color="bisque"
            className="arrow"
            onClick={this.backToTop}/></div>
        <Nav />
        <Hero />
        <Tech />
        <Projects />
        <About />
        <Contact />
      </>);}}
export default Content;
