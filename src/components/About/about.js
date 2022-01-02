import React from "react";
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function About(){
    return(
        <>  
        
<section className=" ">
  <h1 className=" pt-4 text-center fw-bold " id="about">About Me</h1>
    <br /> 
    <p className="text-center fs-4 p-0 rounded text-white w-50 m-auto w-100"> <span className="p-2 rounded" 
     style={{backgroundColor: '#55856d'}}>"Success is a Journey, not a Destination"</span></p>

    <div className="container-fluid pt-4 bg-info" id="about">
        <div className="row">
            <div className=" m-auto border-0" style={{ width:'65vw'}}>
                <div className="row no-gutters">
                    <figure className="col-sm-5 pe-3 pt-4">
                    <img className="card-img myImg" src={require("../images/About3.jpg")} alt="personal" />
                    </figure>
                 <div className="col-sm-7 ">
                   <div className="card-body">
                    <h2 className="card-title fw-bold h1 mt-5 pt-5 text-center"> Mahmood Al Qaisi </h2>
                    <hr />
                    <p>A junior Frontend Web Develoepr, born in Irak. I have studied Telecommunication Engineering in Baghdad
                    and achieved the Bachelor degree in 2014, in 2015 i moved to Austria, Vienna. My journey in Vienna started by completing multiple German courses and  by 
                    volunteering in Red Cross. My Passion to improve and expand my Knowledge in Programming led me to attend and accomplish an intensive Frontend Web Development course
                    at Code Factory Vienna in Oct. 2021, where I learnt how to work on real challenging Projects in a specific time within a team.</p>
                    <p> Moreover I tend to gain more experience and keep on improving myself.</p>
                   </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
</section>
        
        
        </>
    )
}

export default About