import React from "react"
import Nav from "../navbar/navbar";
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {Mousewheel,Pagination} from 'swiper';
SwiperCore.use([Mousewheel,Pagination]);


function Header(){
    return(
    <div className="container-fluid ps-0 pe-0 bg-dark">
        {/* Left-side */}
        <Nav/>
        {/* right-side */}
        <aside>
            <Swiper>
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
        </Swiper>
        </aside>
    </div>
    )
}
export default Header;