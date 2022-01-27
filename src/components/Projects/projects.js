import React from "react";import data from "./projectsData";import{Swiper,SwiperSlide}from "swiper/react";import "swiper/css";import "swiper/css/effect-coverflow";import "swiper/css/pagination";import "./projects.css";import "bootstrap/dist/css/bootstrap.min.css";import SwiperCore,{EffectCoverflow,Pagination}from "swiper";SwiperCore.use([EffectCoverflow,Pagination])
class Projects extends React.Component {
  constructor() {
    super();
    this.ProjectsData = data;
  }
  render() {
    const mapped = this.ProjectsData.map(function (el) {
      return (
        <SwiperSlide key={el.id}>
          <div className="project-card-left">
            <p className="card-left-title fw-bold"> Project {el.id} </p>
            <p className="card-left-text">
              {el.description ? el.description : "Under Construction..."}
            </p>
          </div>
          <div className="card project-card p-0">
            <figure className="card-image-container m-0">
              <img
                src={require("../images/" + el.imgUrl + ".webp")}
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
          <Swiper effect={"coverflow"}grabCursor={!0}centeredSlides={!0}slidesPerView={"auto"}coverflowEffect={{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0,}}spaceBetween={120}pagination={{clickable:!0,}}className="mySwiper">
            {mapped}
          </Swiper>
        </div>
      </div>
    );
  }
}
export default Projects;
