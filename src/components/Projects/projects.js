import React from "react";
import data from "./projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

class Projects extends React.Component {
  constructor() {
    super();
    this.ProjectsData = data;
  }
  render() {
    const mapped = this.ProjectsData.map(function (el) {
      return (
        <SwiperSlide>
          <div className="project-card-left">
            <p className="card-left-text fw-bold"> Project {el.id} </p>
            <p className="text-start">
              {el.description ? el.description : "Under Construction..."}
            </p>
          </div>
          <div className="card project-card p-0" key={el.id}>
            <figure className="card-image-container m-0">
              <img
                src={require("../images/" + el.imgUrl + ".jpg")}
                className="cardImg"
                alt={el.title}
              />
            </figure>
            <div className="project-card-body pt-2 text-center ">
              <p className="project-card-title text-center m-0 fw-bold ">
                {el.title}
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return (
      <div className="container-fluid projectsContainer p-0" id="projects">
        <h1 className="py-3 m-0 section-heading-projects-bg pe-3 ">
          <span className="section-heading-projects">Projects</span>
        </h1>
        <div className="cards-row w-75">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={120}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {mapped}
          </Swiper>
        </div>
      </div>
    );
  }
}
export default Projects;
