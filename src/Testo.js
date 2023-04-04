import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
import './testo.css'
import  Aziz from './assests/aziz.jpg'
export const Testo = () => {

    useEffect(() => {
        AOS.init();
      }, []) 
    


  return (
    <>
    <div className='mt-10' id='testo'>
    <h2 className='text-4xl text-center text-sky-600 mt-10   hover:underline'  data-aos="fade-right"
    data-aos-duration="1300">TestoMonial</h2>
    <p  className=' text-gray-300  pl-20 pr-20 text-center'
    data-aos="fade-right"
    data-aos-duration="1300"
    ><span className='text-4xl'>``</span> Our goal is to provide compassionate and expert medical care to my patients.We are dedicated to staying up-to-date with the latest advancements in medicine and technology, and we are committed to using this knowledge to provide the best possible outcomes for our patients. <span className='text-4xl'>``</span>    
    </p>
    <div  className=' mt-5' id='aziz'>
    <img src={Aziz} className='h-12 w-12' ></img>
    <p className='text-stone-300'>Dr. Aziz</p>
    </div>
  </div>
    </>
  )
}
