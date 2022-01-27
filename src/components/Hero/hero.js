import React from "react";import Typewriter from "typewriter-effect";import "./hero.css";import "bootstrap/dist/css/bootstrap.min.css";import "../../fonts/Slaztone.otf";import{AttentionSeeker}from "react-awesome-reveal"
class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
         <h1 className="pb-3 section-heading text-center">Welcome to My World</h1>
        <AttentionSeeker effect="headShake" className="hero-content">
          <div className="text-white text-center">
            <div className="mt-4 mb-0 p-2 hero-description" id="myText">
              <Typewriter options={{strings:["Hi !","I'm Mahmood","Frontend Web Developer"],autoStart:!0,loop:!0,}}/>
            </div>
          </div>
        </AttentionSeeker>
      </div>);}}
export default Hero;
