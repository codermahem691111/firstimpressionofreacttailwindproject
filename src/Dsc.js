import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
import './dsc.css';
import D1 from './assests/deases/allergy.jpg';
import D2 from './assests/deases/astham.jpg';
import D3 from './assests/deases/hypertension.jpg';
import D4 from './assests/deases/infertility.jpg';
import D5 from './assests/deases/maigraine.jpg';
import D6 from './assests/deases/sinusitis.jpg';
import D7 from './assests/deases/skin.jpg';
import D8 from './assests/deases/spondylitis.jpg';
import D9 from './assests/deases/thyroid.jpg';










export const Dsc = () => {

    useEffect(() => {
        AOS.init();
      }, []) 



    return (
    <>
    <h1 className='text-2xl text-sky-600 mt-10 mb-20 text-center hover:underline'>Disease </h1>
    <div class="flex flex-row justify-items-center items-center  text-center mt-10"  id='row1'>
  <div class=" basis-1/4 " id='cardno2' data-aos="flip-left" data-aos-duration="1000">
     <img className='text-center' src={D1} id='cartoon3' ></img>
  
     <h2  className='text-xl  text-blue-700 mt-10'>Allergy</h2>
     
  </div>
 
  <div class=" basis-1/4 " id='cardno2' data-aos="flip-left" data-aos-duration="1500">
  <img className='text-center' src={D2} id='cartoon3' ></img>
 
  <h2  className='text-xl  text-blue-700 mt-10'>Astham</h2>
     
</div>

<div class=" basis-1/4 " id='cardno2'  data-aos="flip-left" data-aos-duration="2000">
<img className='text-center' src={D3} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>Hypertension</h2>
     
</div>




</div>
<div class="flex flex-row justify-items-center items-center  text-center mt-10"  id='row1'>
<div class=" basis-1/4 " id='cardno2' data-aos="flip-up" data-aos-duration="1000">
   <img className='text-center' src={D4} id='cartoon3' ></img>

   <h2  className='text-xl  text-blue-700 mt-10'>Infertility</h2>
   
</div>

<div class=" basis-1/4 " id='cardno2' data-aos="flip-up" data-aos-duration="1500">
<img className='text-center' src={D5} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>Maigraine</h2>
   
</div>

<div class=" basis-1/4 " id='cardno2'  data-aos="flip-up" data-aos-duration="2000">
<img className='text-center' src={D6} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>Sinusitis</h2>
   
</div>




</div>




<div class="flex flex-row justify-items-center items-center  text-center mt-10"  id='row1'>
<div class=" basis-1/4 " id='cardno2' data-aos="flip-right" data-aos-duration="1000">
   <img className='text-center' src={D7} id='cartoon3' ></img>

   <h2  className='text-xl  text-blue-700 mt-10'>Skin</h2>
   
</div>

<div class=" basis-1/4 " id='cardno2' data-aos="flip-right" data-aos-duration="1500">
<img className='text-center' src={D8} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>spondylitis</h2>
   
</div>

<div class=" basis-1/4 " id='cardno2'  data-aos="flip-right" data-aos-duration="2000">
<img className='text-center' src={D9} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>Thyroid</h2>
   
</div>




</div>



    </>
  )
}
