import React from "react";import{AttentionSeeker,Fade}from "react-awesome-reveal";import "./about.scss";import "bootstrap/dist/css/bootstrap.min.css"
class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-section" id="about">
          <h1 className="py-3 section-heading-about-bg pe-4 ">
            <span className="section-heading-about ">About Me</span>
          </h1>
          <Fade>
            <div className="text-center fs-1 p-0 rounded textdark m-0 w-100">
              <AttentionSeeker effect="jelly">
                <blockquote className="p-3 section-title fw-bold">
                  "Success is a Journey, not a Destination"
                </blockquote>
              </AttentionSeeker>
            </div>
          </Fade>
          <Fade>
            <div className="about-content-container mt-4" id="about">
              <div className="info-about text-white">
                <div className="img-container ps-3">
                  <figure className=" pt-4">
                    <img className="card-img myImg-about" src={require("../images/fococlipping-20220107-16722.webp")} alt="personal"/>
                  </figure>
                </div>
                <div className="card-body">
                  <h2 className="title fw-bold text-center"> Mahmood Al Qaisi </h2><hr />
                  <p> A junior Frontend Web Develoepr, born in Irak. I have studied Telecommunication Engineering in Baghdad and achieved the Bachelor degree in 2014, in 2015 i moved to Austria, Vienna. My journey in Vienna started by completing multiple German courses and by volunteering in Red Cross. My Passion to improve and expand my Knowledge in Programming led me to attend and accomplish an intensive Frontend Web Development course at Code Factory Vienna in Oct. 2021, where I learnt how to work on real challenging Projects in a specific time within a team.</p>
                  <p> Moreover I tend to gain more experience and keep on improving myself.</p>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </>);}}
export default About;
