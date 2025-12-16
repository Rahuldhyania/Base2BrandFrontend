'use client'
import { useEffect } from 'react';

import React from "react";   


export default function creative() {
 
  

  return (
    <>  
    <div className="p-5 creative"> 
            <div className="inner-create row text-white align-items-center">
                <div className="col-12 col-sm-12 col-md-7" data-aos="flip-left"  data-aos-easing="linear" data-aos-duration="1500">
                    <h1 className='desc_service'>Creative<br/>
                        <span className="heading-gradient">UI/UX Design</span> Services</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-5" data-aos="flip-right"  data-aos-easing="linear" data-aos-duration="1500">
                    <p className="creative-para">Simplifying business challenges with our top-notch design services. We strategically craft visually appealing and functional digital experiences that users love to explore.</p>
                </div>       
            </div>
    </div>
    <div className="banner-video" data-aos="fades-up" data-aos-anchor-placement="top-bottom">
        <iframe width="100%" height="600" src="http://player.vimeo.com/video/41406753?byline=0&amp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    
</>
)
}