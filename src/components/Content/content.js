import React from "react"
import Nav from "../navbar/navbar";
import Hero from "../Hero/hero"
import Tech from "../Tech/tech"
import About from "../About/about"
import "./content.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {Mousewheel,Pagination} from 'swiper';
SwiperCore.use([Mousewheel,Pagination]);


function Content(){
    return(
    <div className="container-fluid ps-0 pe-0">
        {/* Left-side */}
        <Nav/>
        {/* right-side */}
        <aside>
            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{
  "clickable": true
}} className="mySwiper">
                <SwiperSlide><Hero/></SwiperSlide>
                <SwiperSlide><Tech/></SwiperSlide>
                <SwiperSlide><About/></SwiperSlide>
        
        </Swiper>
        </aside>
    </div>
    )
}
export default Content;