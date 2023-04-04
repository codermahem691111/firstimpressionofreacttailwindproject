import React from 'react'
import Marquee from "react-fast-marquee";
import Brithish from "./assests/brithish.jpeg"
import './History.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useRef, useState, useEffect } from "react";
export const History = () => {

    useEffect(() => {
        AOS.init();
      }, []) 

    return (
    <>
   
    
    <h1 className='text-2xl mt-10 mb-10 text-center text-sky-600' data-aos='fade-right' data-aos-duration='2000'>Introduction of Homeopathy</h1>
  
  <div class="flex flex-row" id='conths'>

  <div class="basis-1/2" data-aos="fade-right"
  data-aos-duration="1000">
   <img src={Brithish} id='brit'></img>
  </div>
  <div class="basis-1/2" id='histr' data-aos="fade-left"
 
  data-aos-duration="1500">
   <h3 className='text-2xl'>Christian Friedrich Samuel Hahnemann </h3>
   <h3 className='text-2xl'>M.D. (1755-1843)</h3>
  <h2 className='text-3xl'>CREATION OF HOMEOPATHY:</h2>
  <p>Hahnemann was dissatisfied with the state of medicine in his time, and particularly objected to practices such as bloodletting. He claimed that the medicine he had been taught to practice sometimes did the patient more harm than good: My sense of duty would not easily allow me to treat the unknown pathological state of my suffering brethren with these unknown medicines. The thought of becoming in this way a murderer or malefactor towards the life of my fellow human beings was most terrible to me, so terrible and disturbing that I wholly gave up my practice in the first years of my married life and occupied myself solely with chemistry and writing. After giving up his practice around 1784, Hahnemann made his living chiefly as a writer and translator, while resolving also to investigate the causes of medicine's alleged errors. While translating William Cullen's A Treatise on the Materia Medica, Hahnemann encountered the claim that cinchona, the bark of a Peruvian tree, was effective in treating malaria because of its astringency. Hahnemann believed that other astringent substances are not effective against malaria and began to research cinchona's effect on the human body by self-application. </p>
  
  </div>
  
</div>  




    </>
  )
}
