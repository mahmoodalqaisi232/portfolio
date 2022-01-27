import React from "react";import "./navbar.css";import "bootstrap/dist/css/bootstrap.min.css";import "../../fonts/Slaztone.otf"
class Nav extends React.Component {
  showMenu(){var NavBar=document.getElementsByClassName("sideNavHidden")[0];var hamMenu=document.getElementById("hamburger-menu");var sideBar=document.getElementsByClassName("side-bar")[0];NavBar.classList.toggle("sideNavShow");hamMenu.classList.toggle("change");sideBar.classList.toggle("change");var heroHeading=document.getElementsByClassName("section-heading")[0];if(document.body.clientWidth>=1024){heroHeading.classList.toggle("section-heading-xl")}}
  render() {
    return (
      <>
        <div className="side-bar">
          <div id="hamburger-menu" onClick={this.showMenu}>
            <div className="hamburger-top"></div>
            <div className="hamburger-middle"></div>
            <div className="hamburger-bottom"></div>
          </div>
          <nav className="sideNavHidden"><ul className="menu"><li><a href="#tech">Technologies</a></li><li><a href="#projects">Projects</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li></ul></nav>
        </div>
      </>);}}
export default Nav;
