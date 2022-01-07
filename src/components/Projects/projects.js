import React from "react";
import data from "./projectsData";
import { Fade } from "react-awesome-reveal";
import "./projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Projects extends React.Component {
  constructor() {
    super();
    this.ProjectsData = data;
  }
  render() {
    const mapped = this.ProjectsData.map(function (el) {
      return (
        <>
          <Fade className="col-4 project-card m-auto mt-3 p-0">
            <div>
              <p className="card-number m-0 px-2">Project {el.id} </p>
              <div className="card-image-container ps-1">
                <img
                  src={require("../images/" + el.imgUrl + ".jpg")}
                  key={el.id}
                  className="card-img-top"
                  alt={el.title}
                />
              </div>
              <div className="project-card-body pt-2 ">
                <p className="project-card-title text-center pt-2 d-flex justify-content-around">
                  <button className="btn project-card-button">
                    Show Project
                  </button>
                </p>
              </div>
            </div>
          </Fade>
        </>
      );
    });
    return (
      <>
        <div className="container-fluid h-100 projects-main-container">
          <div className="row">{mapped}</div>
        </div>
      </>
    );
  }
}
export default Projects;
