import React from 'react'
import './doctors.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
import Doctor1 from './assests/dccard1.jpg';
import Doctor2 from './assests/dccard2.jpg';
import Doctor3 from './assests/dccard3.jpg';
export const Doctors = () => {

    useEffect(() => {
        AOS.init();
      }, []) 

  return (
    <>
    <h1 className='text-2xl text-sky-600 mt-10 mb-20 text-center hover:underline'>Our Doctors </h1>
    <div class="flex flex-row justify-items-center items-center  text-center mt-20"  id='row1'>
  <div class=" basis-1/4 " id='cardno2' data-aos="flip-left" data-aos-duration="1000">
     <img className='text-center' src={Doctor1} id='cartoon2' ></img>
     <p>pediatrician</p>
     <h2  className='text-xl  text-blue-700'>Sussi wolff</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>    
      <button className='text-center grid justify-items-center' id='btn2'>Appointment</button>
  </div>
 
  <div class=" basis-1/4 " id='cardno2' data-aos="flip-left" data-aos-duration="1500">
  <img className='text-center' src={Doctor2} id='cartoon2' ></img>
  <p>pediatrician</p>
     <h2  className='text-xl  text-blue-700'>Sussi wolff</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>    
      <button className='text-center grid justify-items-center' id='btn2'>Appointment</button>
</div>

<div class=" basis-1/4 " id='cardno2'  data-aos="flip-left" data-aos-duration="2000">
<img className='text-center' src={Doctor3} id='cartoon2' ></img>
<p>pediatrician</p>
<h2  className='text-xl  text-blue-700'>Sussi wolff</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>    
 <button className='text-center grid justify-items-center' id='btn2'>Appointment</button>
</div>




</div>





    </>
  )
}
