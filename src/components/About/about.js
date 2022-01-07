import React from "react";
import "./about.css";
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
          <p className="text-center fs-4 p-0 rounded text-white m-0 w-100">
            <span
              className="p-2 rounded"
              style={{ backgroundColor: "#97660a9b " }}
            >
              "Success is a Journey, not a Destination"
            </span>
          </p>
          <div
            className="container-fluid about-content-container mt-4"
            id="about">
            {/* left-Side-Img */}
            <div className="card img-container w-25 bg-dark">
              <figure className=" pt-4">
                <img
                  className="card-img myImg-about"
                  src={require("../images/AboutImg.png")}
                  alt="personal"
                />
              </figure>
            </div>
            {/* Right-Side-Info */}
            <div className="card info-about w-50 bg-dark text-white ">
              <div className="card-body">
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
        </section>
      </>
    );
  }
}

export default About;
