import React from "react";
import Nav from "./components/navbar/navbar";
import Hero from "./components/Hero/hero";
import Tech from "./components/Tech/tech";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import{FontAwesomeIcon}from "@fortawesome/react-fontawesome";
import{faChevronUp}from "@fortawesome/free-solid-svg-icons"
import "./App.css";
class App extends React.Component {
  scrolling(){window.onscroll=function(){window.scrollY>=1500?(document.getElementById("topBox").style.display="block"):(document.getElementById("topBox").style.display="none")}}
  backToTop(){window.scrollTo({top:0,left:0,})}
  render() {
    this.scrolling();
    return (
      <>
      <div id="entrance"><span>Moe.Qaisi</span></div>
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
export default App