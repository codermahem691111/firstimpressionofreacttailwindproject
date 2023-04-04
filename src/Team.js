import React from 'react'
import './team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
export const Team = () => {

  useEffect(() => {
    AOS.init();
  }, []) 


  return (
    <>
   <div className='mt-10' id='team'>
     <h2 className='text-4xl text-center text-sky-600 mt-10   hover:underline'  data-aos="fade-up"
     data-aos-duration="1300"> Our Team</h2>
     <p  className=' text-gray-300  pl-20 pr-20 text-center'
     data-aos="fade-up"
     data-aos-duration="1300"
     >We are experts in providing medical care and treatment to patients. Our team is skilled in diagnosing illnesses and injuries, developing treatment plans, and administering medications and therapies to help patients recover and improve their health.
     We are also knowledgeable in preventative care and can advise patients on how to maintain good health and prevent future illnesses
     </p>
   </div>
    
    </>
  )
}
