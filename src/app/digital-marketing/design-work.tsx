'use client' 
import React, { useState } from "react";  
import work1 from '../../../public/marketing-img/w1.png';        
import work2 from '../../../public/marketing-img/w2.png';        
import work3 from '../../../public/marketing-img/w3.png';        
import work4 from '../../../public/marketing-img/w4.png';        
import '../digital-marketing/digital.css'
import Request from "../request-form";


export default function DesignWork() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <>  
        <div className="p-5 ph_remove_padding"> 
    <div className="container"> 
<div className="row text-white">
    
    <div className="col-md-5 mb-4" data-aos="slide-left">
        <h2>Excellence in eCommerce Development</h2>
        <p className='mb-5 pr-5'> At Base2Brand, we excel in eCommerce web design, recognizing its pivotal role in online success. Our expertise ensures visually appealing and functional websites that drive engagement and conversions.</p>
        <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
   
    </div>
    <div className="col-md-7" data-aos="slide-right">
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work1.src} alt="" />   
                    <h3 className='primary'>Omnichannel Marketing Mastery</h3>
                    <p>Embracing an omnichannel marketing approach is essential for capitalizing on digital opportunities, driving customer acquisition and retention. We integrate various channels seamlessly to create cohesive and impactful marketing campaigns.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work2.src} alt="" />   
                    <h3 className='primary'>Solving Customer Pain Points</h3>
                    <p>By positioning businesses as industry influencers, we prioritize solving customer pain points. Our solutions address specific challenges, fostering trust and loyalty among our clients customer base.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work3.src} alt="" />   
                    <h3 className='primary'>Team Collaboration</h3>
                    <p>Starting as a one-person division, Base2Brand has evolved into a comprehensive web & app development company proficient in all aspects. Collaboration is at the core of our success, as we leverage each team member expertise to deliver exceptional results.</p>
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <div className="workIdea">
                <img className='work mb-3' src={work4.src} alt="" />   
                    <h3 className='primary'>Thorough Research</h3>
                    <p>Through thorough research, we gather, analyze, and interpret data methodically to inform our strategies. Our research-driven approach ensures that our clients receive tailored solutions that are backed by reliable data and insights.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>

{showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
</>
)
}