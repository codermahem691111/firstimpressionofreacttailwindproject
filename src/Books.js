import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
import B1 from './assests/books/book-1.jpg'
import B2 from './assests/books/book-2.jpg'
import B3 from './assests/books/book-5.jpg'
import './books.css'
export const Books = () => {
  return (
    <>
    <h1 className='text-2xl text-sky-600 mt-10 mb-20 text-center hover:underline'>Books</h1>
    <div class="flex flex-row justify-items-center items-center  text-center mt-10"  id='row1'>
  <div class=" basis-1/4 " id='cardno2' data-aos="zoom-in" data-aos-duration="1000">
     <img className='text-center' src={B1} id='cartoon3' ></img>
  
     <h2  className='text-xl  text-blue-700 mt-10'>JRr Kollins</h2>
     
  </div>
 
  <div class=" basis-1/4 " id='cardno2' data-aos="zoom-in" data-aos-duration="1500">
  <img className='text-center' src={B2} id='cartoon3' ></img>
 
  <h2  className='text-xl  text-blue-700 mt-10'>Mr Marcedes</h2>
     
</div>

<div class=" basis-1/4 " id='cardno2'  data-aos="zoom-in" data-aos-duration="2000">
<img className='text-center' src={B3} id='cartoon3' ></img>

<h2  className='text-xl  text-blue-700 mt-10'>Nepolian  Hill</h2>
     
</div>




</div>



    
    
    </>
  )
}
