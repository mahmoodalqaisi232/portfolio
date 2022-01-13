import React from "react";
import { Fade } from "react-awesome-reveal";
import "./about.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="about-section">
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade>
          <p className="text-center fs-1 p-0 rounded textdark m-0 w-100">
            <span
              className="p-2 section-title" >
              "Success is a Journey, not a Destination"
            </span>
          </p>
          </Fade>
          <Fade>
          <div className="about-content-container mt-4" id="about">
            <div className="info-about text-white w-75">
              {/* left-Side-Img */}
            <div className="img-container ps-3 w-50">
              <figure className=" pt-4">
                <img
                  className="card-img myImg-about"
                  src={require("../images/fococlipping-20220107-16722.png")}
                  alt="personal"
                />
              </figure>
            </div>
            {/* Right-Side-Info */}
              <div className="card-body w-75">
                <h2 className="title fw-bold mt-5 pt-5 text-center">
                  Mahmood Al Qaisi
                </h2>
                <hr />
                <p>
                  A junior Frontend Web Develoepr, born in Irak. I have studied
                  Telecommunication Engineering in Baghdad and achieved the
                  Bachelor degree in 2014, in 2015 i moved to Austria, Vienna.
                  My journey in Vienna started by completing multiple German
                  courses and by volunteering in Red Cross. My Passion to
                  improve and expand my Knowledge in Programming led me to
                  attend and accomplish an intensive Frontend Web Development
                  course at Code Factory Vienna in Oct. 2021, where I learnt how
                  to work on real challenging Projects in a specific time within
                  a team.
                </p>
                <p>
                  Moreover I tend to gain more experience and keep on improving
                  myself.
                </p>
              </div>
            </div>
          </div>
          </Fade>
        </section>
      </>
    );
  }
}

export default About;
