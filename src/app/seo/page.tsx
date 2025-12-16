'use client'

import React from "react"; 
import Seo from '../../../public/seo/seo.png';    
import Header from '../../../component/header';    
import "../../app/seo/seo.css"
import SeoAccordion from '../../app/seo/seo-accordion';    
import Revenue from '../../app/seo/revenue';    
import Bestseo from '../../app/seo/bestseo';    
import Seoprocess from '../../app/seo/seo-process';    
import OurProject from '../../app/our-project';    
import Technologystack from '../../app/seo/technologystack';    
import Feedback from '../../app/feedback';    
import Faq from '../../app/faq';    
import Quote from '../../app/request-quote';    
import Footer from '../../../component/footer';    

export default function seo() {
 
  return (
    <>  
    <Header />
    <div className="bg-black">
    <div className="text-center text_primary overlap_seo" data-aos="fade-up">
            <h2>SEO Agency</h2>
            <p>That helps your business get more traffic online</p>
            <p className="text-white">Hoping to employ a Mohali SEO organization? Get page 1 outcomes with Base to Brand’s SEO services. <br /> Our SEO specialists will get you the outcomes you need to develop your business.</p>
        </div>
    <div className="seo"   style={{
      backgroundImage: `url(${Seo.src})`,
      width: '100%',
      height: '920px',  
      backgroundSize: 'auto',
      position: 'relative',
    }}>
     

    </div>
    <SeoAccordion />
    <Revenue />
    <Bestseo />
    <div className="col-md-12 text-center text-white mb-2" data-aos="fade-up">
                <h2>Our SEO process deliver proven results</h2>
            </div>
    <Seoprocess />
    <OurProject />
    <Technologystack />
    <Feedback />
    <Faq />
    <Quote/>
    <Footer />
      </div>

    </>
  )
}
