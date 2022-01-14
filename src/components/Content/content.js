import React from "react";
import Nav from "../navbar/navbar";
import Hero from "../Hero/hero";
import Tech from "../Tech/tech";
import About from "../About/about";
import Projects from "../Projects/projects";
import Contact from "../Contact/contact";
import "./content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Mousewheel, EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([Mousewheel, EffectCoverflow, Pagination]);

function Content() {
  return (
    <div className="container-fluid ps-0 pe-0">
      {/* Left-side */}
      <Nav />
      {/* right-side */}
      <aside className="swiper-container">
        <Swiper
          speed={2100}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          spaceBetween={60}
          className="mySwiper"
        >
          <SwiperSlide>
            <Hero />
          </SwiperSlide>
          <SwiperSlide>
            <Tech />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </aside>
    </div>
  );
}
export default Content;
