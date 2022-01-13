import React from "react";
import "./hero.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../fonts/Slaztone.otf";
import { AttentionSeeker } from "react-awesome-reveal";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <h1 className="pb-3 hero-heading text-center">
            Welcome to My World !
          </h1>
          <AttentionSeeker effect="headShake" className="hero-content">
            <div className="text-white text-center">
              <div className="mt-4 mb-0 hero-description">
                Hi !I'm Mahmood
                <span className="ms-2 mySpan-Hero">
                  a Junior Frontend Developer{" "}
                </span>
              </div>
            </div>
          </AttentionSeeker>
        </div>
      </>
    );
  }
}
export default Hero;
