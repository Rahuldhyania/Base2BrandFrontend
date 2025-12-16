'use client'

import React from "react"; 
import Banner from '../../../public/net/net.png';      
import Net from '../../../public/net/asp.png';    
import Header from '../../../component/header';  
import AspDevelopement from '../asp-net/asp-dev';    
import Industries from '../asp-net/Industries';    
import ASPDevelopement from '../asp-net/dev-company';    
import "./asp.css"        
import Feedback from '../feedback';    
import Faq from '../faq';        
import Footer from '../../../component/footer';    
import Typewriter from 'typewriter-effect'; 
import Steps from "../../../public/net/line.png";
import Gif from "../../../public/net/gif.png";
export default function seo() {
 
  return (
    <>  
    <Header />
    <div className="bg-black">
        <div className="bggraydiant"  style={{
      backgroundImage: `url(${Banner.src})`,
      width: '100%',
      height: '500px',  
      backgroundSize: 'auto',
      position: 'relative',
    }}>
        <div className="container-fluid p-5">
            <div className="row align-items-center">
                <div className="col-md-7 text-white typeSize">
                <Typewriter 
                options={{
                  strings: ['ASP.NET DEVELOPMENT'],
                  autoStart: true,
                  loop: true,
                }}
              />
                    <p>Microsoft’s ASP.NET is an open-source server-side web application framework that is used by Dot NET developers to make dynamic websites and web applications.</p>
             <div className="mt-5">
              <button className='btn btn-outline-primary m-0'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
              </div>
                </div>
                <div className="col-md-5 position-relative"> 
                <img src={Gif.src} className="gifOverlap" alt="" />
                    <img src={Net.src} alt="" className="w-75 m-auto" />
                </div>
            </div>
        </div>

    </div> 
    <AspDevelopement />
    <Industries /> 
    <div className="text-center text-white pt-5 bgLight">
        <h1 className="mb-5">5 Steps Of ASP. Net Development</h1>
        <img src={Steps.src} className="w-75 m-auto" alt="" />
    </div>
    <ASPDevelopement />
    <Feedback />
    <Faq /> 
    <Footer />
      </div>

    </>
  )
}
