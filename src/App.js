/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Icon1 from './assests/call.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles.css";
import { Cards } from "./Cards";
import { History } from "./History";
import {Team} from './Team'
// import required modules
import { EffectCube, Pagination } from "swiper";
import { Doctors } from "./Doctors";
import { Dsc } from "./Dsc";
import { Testo } from "./Testo";
import { Books } from "./Books";
import { Study } from "./Study";
export default function App() {

  useEffect(() => {
    AOS.init();
  }, []) 


  return (
    <>
  
    <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
      

      <SwiperSlide className="imgslide "  id="slide1">
           
            <div className="flex flex-col py-3 text-center items-center" data-aos="fade-left"  id="herodiv"  data-aos-duration="3000">           
            <h2 className="text-4xl text-stone-300 items-center text-center">This is <span className="text-pink-800">Homeo</span></h2>
            <h2 className='text-4xl text-stone-300 items-center text-center'>Titleopotion</h2> 
            <p className="text-white-100 text-2xl text-bold ml-20 mr-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident magni voluptatem error dignissimos excepturi vero dicta voluptates voluptatum quis.</p>
             
         </div>
        </SwiperSlide >
        <SwiperSlide className="imgslide"  id="slide2">
        
        <div className="flex flex-col py-3 mt-30" data-aos="fade-right" id='herodiv' data-aos-duration="3000">           
            <h2 className="text-4xl text-stone-300 items-center text-center">This is <span className="text-pink-800">Homeo</span></h2>
            <h2 className='text-4xl text-stone-300 items-center text-center'>Titleopotion</h2> 
            <p className="text-white-100 text-2xl text-bold ml-20 mr-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident magni voluptatem error dignissimos excepturi vero dicta voluptates voluptatum quis.</p>
            <div className=" text-center" id="icondiv1">
             <img src={Icon1} className="h-10  w-10 text-blue-900" id="icon1"></img>           
              <h2 className="text-xl">Always I am Availble</h2>
  
            </div>
         </div>
        </SwiperSlide>
        <SwiperSlide className="imgslide"  id="slide3">
       
        </SwiperSlide>
      <Cards></Cards>     
      <History></History>
      <Team></Team>
      <Doctors></Doctors>
      <Dsc></Dsc>
      <Testo></Testo>
      <Books></Books>
      <Study></Study>
      </Swiper>
    
      
         



    </>
  );
}
