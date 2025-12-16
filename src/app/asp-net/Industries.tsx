'use client' 
import React from "react";       
import Industrie1 from "../../../public/net/i1.png";
import Industrie2 from "../../../public/net/i2.png";
import Industrie3 from "../../../public/net/i3.png";
import Industrie4 from "../../../public/net/i4.png";
import Industrie5 from "../../../public/net/i5.png";
import Industrie6 from "../../../public/net/i6.png";
import Industrie7 from "../../../public/net/i7.png";
import Industrie8 from "../../../public/net/i8.png";
import Industrie9 from "../../../public/net/i9.png";
import Industrie10 from "../../../public/net/i10.png";


export default function industries() {
 
  

  return (
    <>  
        <div className="p-5 bgLight"> 
    <div className="container">
<div className="row text-white">
    <div className="col-md-12 text-center mb-5">
        <h1>Industries</h1>
        <p>Base<span className='text_primary'>2</span>Brand provides innovative solutions for the following industries. Lets get in touch to discuss your <br /> idea and get the website that gives you competitive advantages in your industry.</p>
     </div>
        <div className="col industrie">
            <img src={Industrie1.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Ecommerce</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie2.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Travel and Hospitality</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie3.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Education and Technology</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie4.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Real Estate</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie5.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Healthcare</h4>
        </div>

        <div className="col industrie">
            <img src={Industrie6.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Media and Entertainment</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie7.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Business</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie8.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Food and Delivery</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie9.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Social Networking</h4>
        </div>
        <div className="col industrie">
            <img src={Industrie10.src} className='IndustrieIcon' alt="" />
            <h4 className='text_primary'>Sports</h4>
        </div>
    </div>   
</div>
</div>
</>
)
}