import React from "react";
import "./tech.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faBootstrap, faCss3, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Fade} from "react-awesome-reveal";


function Tech(){
    return(
        <>
        <div className="container-fluid techContainer  pt-4" id="tech">
   {/* first Row */}
  <div className="row pt-4">
    {/* <!-- Card --> */} 
    <div className="card col-10 offset-1">
      {/* <!-- Card Row  --> */}
      <div className="row g-0 "> 
        <div className="col-5  text-center">
          <Fade direction="up">
        <FontAwesomeIcon icon={faJs} size="10x" color="#0F1A34"/>
          
          </Fade>
          </div>

          <div className="col-5  text-end ">
          <Fade direction="up">
        <FontAwesomeIcon icon={faAngular} size="10x" color="#0F1A34"/>
          
          </Fade>
          </div>
    </div>
    
  </div>
</div>
  {/* <!-- second Row --> */}
  <div className="row mb-4 pt-4">
    {/* <!-- Card --> */}
    <div className="card col-10 offset-1">
      {/* <!-- Card Row  --> */}
      <div className="row g-0 "> 
        <div className="col-5  text-center">
          <Fade direction="up">
        <FontAwesomeIcon icon={faBootstrap} size="10x" color="#0F1A34"/>
        
          </Fade>
          </div>

          <div className="col-5  text-end ">
          <Fade direction="up">
        <FontAwesomeIcon icon={faHtml5} size="10x" color="#0F1A34"/>
          </Fade>
          </div>
    </div>
    
  </div>
</div>
  {/* <!-- Third Row  --> */}
  <div className="row pt-4 mb-4">
    {/* <!-- Card --> */}
    <div className="card col-10 offset-1">
      {/* <!-- Card Row  --> */}
      <div className="row g-0 "> 
        <div className="col-5  text-center">
          <Fade direction="up">
        <FontAwesomeIcon icon={faCss3} size="10x" color="#0F1A34"/>
          </Fade>
          </div>

          <div className="col-5 text-end ">
          <Fade direction="up">
        <FontAwesomeIcon icon={faSass} size="9x" color="#0F1A34" className="p-0"/>
          </Fade>
          </div>
    </div>
    
  </div>
</div>

<div className="row  pt-4">
    <div className="card  col-10 offset-1">
      {/* <!-- Card Row  --> */}
      <div className="row g-0 "> 
        <div className="col-12  text-center ">
        <Fade direction="up">
        <FontAwesomeIcon icon={faReact} size="10x" color="#242323"/>
          </Fade>
          </div>
    </div>
  </div>
</div>
  
</div>
        </>
    )
}




export default Tech