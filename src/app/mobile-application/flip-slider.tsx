'use client'

import React from "react"; 
import Flip from '../../../public/mobile/flip.png'; 
import Flip1 from '../../../public/mobile/flip1.png'; 
import Flip2 from '../../../public/mobile/flip2.png';  
import Slider from "react-slick";
 

export default function FlipSlider() {
 
  const settings = {
    dots: true,
    arrows : false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     
      <div className="bg-black"> 
        <div className="p-3" >
          <Slider {...settings} className="w-100">
        <div>
          <img src={Flip.src} className='FlipSlider' /> 
        </div>
        <div>
          <img src={Flip1.src} className='FlipSlider' /> 
        </div> 
        <div>
        <img src={Flip2.src} className='FlipSlider' /> 
        </div> 
        <div>
          <img src={Flip.src} className='FlipSlider' /> 
        </div>
        <div>
          <img src={Flip.src} className='FlipSlider' /> 
        </div>
        </Slider>
</div>
</div>
    </>
  )
}
