import React from "react";import "./tech.css";import "bootstrap/dist/css/bootstrap.min.css";import{FontAwesomeIcon}from "@fortawesome/react-fontawesome";import{faAngular,faBootstrap,faCss3,faHtml5,faJs,faReact,faSass,}from "@fortawesome/free-brands-svg-icons";import{Fade}from "react-awesome-reveal"
class Tech extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid p-0 tech-container" id="tech">
          <h1 className="py-3 section-heading-tech-bg  pe-4 ">
            <span className="section-heading-tech">Technologies</span>
          </h1><br />
          <Fade>
            <div className="row d-flex justify-content-center ">
              <div className="card myCard">
                <FontAwesomeIcon icon={faJs} size="5x" />
                <p className="icon-description">JavaScript</p>
              </div>
              <div className="card myCard">
                <FontAwesomeIcon icon={faAngular} size="5x" />
                <p className="icon-description">Angular</p>
              </div>
              <div className="card myCard">
                <FontAwesomeIcon icon={faBootstrap} size="5x" />
                <p className="icon-description">Bootstrap</p>
              </div>
              <div className="card myCard ">
                <FontAwesomeIcon icon={faHtml5} size="5x" />
                <p className="icon-description">HTML5</p>
              </div>
              <div className="card myCard col-2">
                <FontAwesomeIcon icon={faCss3} size="5x" />
                <p className="icon-description">CSS3</p>
              </div>
              <div className="card myCard col-2">
                <FontAwesomeIcon icon={faSass} size="5x" className="p-0" />
                <p className="icon-description">Sass</p>
              </div>
              <div className="card myCard">
                <FontAwesomeIcon icon={faReact} size="5x" />
                <p className="icon-description">React</p>
              </div>
            </div>
          </Fade>
        </div>
      </>);}}
export default Tech;
