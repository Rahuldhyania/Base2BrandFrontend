'use client'
import { useEffect } from 'react';

import React from "react"; 
import project1 from '../../../public/services-img/p1.png';     
import project2 from '../../../public/services-img/p2.png';     
import project3 from '../../../public/services-img/p3.png';     
import '../shopify/service.css'
import Slider from "react-slick";

export default function ProjectSlick() {
    const settings = {
        dots: false,
        arrows: true, 
        speed: 500,
        centerMode: true,
        slidesToShow: 3,  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  

  return (
    <>  
        <div className="p-5 project_remove_padding"> 
    <div className="container"> 
    <div className="text-center text-white mb-5">
        <h2>Our Cherished Projects</h2>
    </div>
<Slider {...settings} className="slider">
        <div>
        <img src={project2.src} className='slider__item w-100' /> 
        </div>
        <div>
        <img src={project3.src} className='slider__item w-100' /> 
        </div>
        <div>
        <img src={project2.src} className='slider__item w-100' /> 
        </div>
        <div>
        <img src={project1.src} className='slider__item w-100' /> 
        </div>
        </Slider> 
</div>
</div>
</>
)
}