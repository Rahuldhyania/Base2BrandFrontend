'use client'

import React, { useState } from "react";  
import Social from '../../../public/social/banner.png';    
import Header from '../../../component/header';     
import "../../app/social-media/social.css"  
import Seoprocess from '../../app/seo/seo-process';    
import OurProject from '../../app/our-project';       
import Feedback from '../../app/feedback';    
import SocialMedia from '../../app/social-media/social-media-marketing';    
import SocialAgency from '../../app/social-media/social-agency';    
import Socialprocess from '../../app/social-media/socialprocess';    
import Agency from '../../app/social-media/agency';    
import Technologystack from '../../app/social-media/technologystack';    
import Faq from '../../app/faq';    
import Quote from '../../app/request-quote';    
import Footer from '../../../component/footer';    
import Typewriter from 'typewriter-effect';
import Request from "../request-form";

export default function Socialmediasection() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>  
    <Header />
    <div className="bg-black">
    <div className="text-center text_primary overlap_social p-3">
    <Typewriter 
                options={{
                  strings: ['Social media managment'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="text-white">Our dedicated social media managers work 24*7 to deliver effective social media management <br /> and lead generation services to take your business to the new heights.</p>
            <div className="mt-5 text-center">
                <button className="btn btn-outline-primary"  onClick={toggleModal}> 
                {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
                Request a Quote </button>
                </div>
            </div>
            <div className="seo"   style={{
              backgroundImage: `url(${Social.src})`,
              width: '100%',
              height: '920px',  
              backgroundSize: 'auto',
              position: 'relative',
            }}>
     

    </div>
    {/* <SeoAccordion />  */}
    <SocialMedia />
    <SocialAgency /> 
    <Agency /> 
    <Socialprocess />
    <OurProject />
    <Technologystack /> 
    <Feedback />
    <Faq />
    <Quote/>
    <Footer />
      </div>
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
