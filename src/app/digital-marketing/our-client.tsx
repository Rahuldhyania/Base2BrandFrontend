'use client' 
import React from "react"; 
import client from '../../../public/marketing-img/c1.png';       
import client1 from '../../../public/marketing-img/c2.png';       
import client2 from '../../../public/marketing-img/c3.png';       
import line from '../../../public/marketing-img/lines.png';       
import '../digital-marketing/digital.css'


export default function OurClient() {
 
  

  return (
    <>  
        <div className="p-5 mt-4"> 
    <div className="container"> 
<div className="row text-white">
      <div className="col-md-8 mx-auto text-center mb-5" data-aos="fade-up">
        <h2>We Create Result-driven Strategies <br /> For Our Clients</h2>
        <p className="mt-3 mb-4">We are a reputed digital marketing agency in Chandigarh with a proven recordof growth-driven services delivered to clients around the world.</p>
      </div>
      <div className="col-md-5" data-aos="flip-left">
      <img className="w-100" src={client.src} alt="" />
      <div className="col-md-12 p-0 topSpaceLines">
        <h3 className="primary">Google Ads Results​</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
        </div>
        <div className="col-md-12 topSpaceLines p-0">
        <img className="w-100" src={client2.src} alt="" /> 
        </div>
      </div>
      <div className="col-md-2 mob-none" data-aos="zoom-in">
      <img className="lineCenter" src={line.src} alt="" /> 

      </div>

       
        <div className="col-md-5 p-0" data-aos="flip-right">
          <h3 className="primary">SEO Results</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
          <div className="col-md-12 topSpaceLines p-0">
          <img className="w-100" src={client1.src} alt="" /> 
          </div>
          <div className="col-md-12 topSpaceLines p-0">
        <h3 className="primary">Facebook Ads results ​</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
        </div>
        </div> 
       
     </div> 
</div>
</div>
</>
)
}