import React from "react"
import "./hero.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Hero(){
    return(
        <>
<div className="continer hero-container d-flex justify-content-around pt-5">
            <div className="text-white pt-5">
                <h1 className="pb-3 hero-heading">Welcome to My World !</h1>
                <p className="mt-4 mb-0 ps-4 hero-description"> I'm Mahmood, Frontend Web Developer</p>
                <code className="text-white ps-4">JavaScript / Angular / TypeScript / CSS3 / SCSS / Bootstrap</code><br/>
                <button className="btn myBtn text-white ms-4 mt-4 fw-bold">More</button>
            </div>
            <div className="pt-5">
                <img src={require("../images/MyImg.png")} alt="MyImg" className="myImg"/>
            </div>
        </div>
        </>
        )
}

export default Hero