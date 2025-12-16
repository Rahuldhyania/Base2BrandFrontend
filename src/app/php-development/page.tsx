'use client'

import React from "react"; 
import Banner from '../../../public/net/net.png';      
import Php from '../../../public/net/php.png';    
import PhpGif from '../../../public/net/phpgif.png';    
import Header from '../../../component/header';     
import Industries from '../asp-net/Industries';    
import PhpDevelopment from '../php-development/php-service';    
import ChooseB2B from '../php-development/choose-b2b';    
import "../../app/asp-net/asp.css";        
import Feedback from '../feedback';    
import Faq from '../faq';        
import Footer from '../../../component/footer';    
import Typewriter from 'typewriter-effect'; 
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
                  strings: [' PHP DEVELOPMENT'],
                  autoStart: true,
                  loop: true,
                }}
              />
                    <p>Base2Brand is a proud IT pioneer that knows every customers needs are as unique <br /> as the features of undiscovered land.</p>
             <div className="mt-5">
              <button className='btn btn-outline-primary m-0'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
              </div>
                </div>
                <div className="col-md-5 position-relative"> 
                <img src={PhpGif.src} className="gifOverlapPhp" alt="" />

                    <img src={Php.src} alt="" className="w-75 m-auto" />
                </div>
            </div>
        </div>

    </div> 
    <div className="serviceSection"> 
    <div className="container text-white text-center">
        <h1 className="mb-3">PHP Development Services We Offer</h1>
        <p>PHP Development Services With 30+ yrs of hands-on experience in PHP, we offer best PHP development services of outstanding quality. From dynamic websites to interactive business applications, customized software to e-commerce solutions, open-source implementation to rapid application framework development, we have a pool of specialized PHP development team that can develop applications of every nature, size and complexity.</p>
    </div>
    </div>
    <PhpDevelopment />
    <ChooseB2B />
    <Industries />   
    <Feedback />
    <Faq /> 
    <Footer />
      </div>

    </>
  )
}
