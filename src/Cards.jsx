/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import Marquee from "react-fast-marquee";
import './cards.css';
import Cartoon1 from './assests/cartoon1.svg'
import Cartoon2 from './assests/book.svg'
import Cartoon3 from './assests/medicine.svg'
import Cartoon4 from './assests/shopping.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
export const Cards = () => {
  useEffect(() => {
    AOS.init();
  }, []) 


  return (
    <>
    
    
    <h1 className='text-2xl mt-10 mb-10 text-center text-sky-600  sm:text-blue-400' data-aos='fade-left' data-aos-duration='2000'>What we Have basically??</h1>

   
  <div class="flex flex-row justify-items-center items-center  text-center"  id='row1'>
  <div class=" basis-1/4  " id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
     <h1 className='text-center text-xl'>Our  Doctords</h1>
     <img className='text-center' src={Cartoon1} id='cartoon1' ></img>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
      <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
  </div>
 
  <div class=" basis-1/4 sm:basis-1/2 xs:basis-1/2" id='cardno1' data-aos="zoom-in-up" data-aos-duration="1000">
  <h1 className='text-center sm:basis-1/2 text-xl'>Our  Books</h1>
  <img className='text-center' src={Cartoon2} id='cartoon1' ></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
   <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
</div>

<div class=" basis-2/4 sm:basis-1/2 xs:basis-1/2" id='cardno1'  data-aos="zoom-in-up" data-aos-duration="1000">
<h1 className='text-center text-xl'>Medicines</h1>
<img className='text-center' src={Cartoon3} id='cartoon1' ></img>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
 <button className='text-center grid justify-items-center' id='btn1'>Read more</button>
</div>




</div>
    
    </>
  )
}
