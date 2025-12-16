'use client'

import React from "react";  
import stack from "../../../public/stack/t1.png"; 
import stack1 from "../../../public/stack/t2.png"; 
import stack2 from "../../../public/stack/t3.png"; 
import stack3 from "../../../public/stack/t4.png"; 
import stack4 from "../../../public/stack/t5.png"; 
import stack5 from "../../../public/stack/t6.png"; 
import stack6 from "../../../public/stack/t7.png"; 
import stack7 from "../../../public/stack/t8.png"; 
import stack8 from "../../../public/stack/t9.png"; 
import stack9 from "../../../public/stack/t10.png"; 

export default function technologystack() {
   
  return (
    <>  
      <div className="container-fluid p-5 mb-5"> 
         <div className="row">
            <div className="col-md-12 text-center text-white mb-5" data-aos="fade-up">
                <h2>Technology Stack</h2>
            </div>
            <div className="col borderStack">
                <img src={stack.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack1.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack2.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack3.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack4.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack5.src} alt=""   />
            </div>
            <div className="col borderStack">
                <img src={stack6.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack7.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack8.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={stack9.src} alt="" />
            </div>
         </div>

      </div> 
    </>
  )
}
