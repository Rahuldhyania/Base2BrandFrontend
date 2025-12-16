'use client'
import { useEffect } from 'react';

import React from "react"; 
import logo1 from '../../../public/marketing-img/m1.png';       
import logo2 from '../../../public/marketing-img/m2.png';       
import logo3 from '../../../public/marketing-img/cer.png';       
import logo4 from '../../../public/marketing-img/cer1.png';       
import logo5 from '../../../public/marketing-img/m5.png';       
import logo6 from '../../../public/marketing-img/cer2.png';       
import '../digital-marketing/digital.css'


export default function digitalLogo() {
 
  

  return (
    <>  
        <div className="p-5 bg_marketing"> 
    <div className="container"> 
<div className="row text-white align-items-center">
  <div className="col-md-12 text-center mb-5">
    <h2>OUR CERTIFICATION </h2>
  </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo1.src} alt="" />   
     </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo2.src} alt="" />   
     </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo3.src} alt="" />   
     </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo4.src} alt="" />   
     </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo5.src} alt="" />   
     </div>
     <div className="col-6 mb-3 col-md-2">
     <img className='logo_marketinh w-100' src={logo6.src} alt="" />   
     </div>
    </div>
</div>
</div>
</>
)
}