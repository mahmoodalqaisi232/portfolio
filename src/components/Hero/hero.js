import React from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container pt-5">
          <div className="text-white hero-content">
            <h1 className="pb-3 hero-heading">Welcome to My World !</h1>
            <p className="mt-4 mb-0 ps-4 hero-description">
              I'm Mahmood, Frontend Web Developer
            </p>
            <div>
              <code className="text-white ps-4 tech-hero">
                JavaScript / Angular / TypeScript / CSS3 / SCSS / Bootstrap
              </code>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Hero;
