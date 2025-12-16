'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../../public/img/name.png';        
import blog3 from '../../public/img/blog3.png';        
import '../../app/our-project.css'

export default function home() {
 
  return (  
    <>  
    {/* <div className="bgimg" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundSize: 'cover', 
      position: 'relative',
    }}> */}
      <div className="bgimg_feed1">
      <div className="container-fluid"> 
          <div className="row text-white"> 
              <div className="col-md-12 p-0">
              <h3 className="feedback_heading mb-4 text-center fs-1">What Our <strong>Clients</strong> Say</h3>
     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"> 
       <div className="carousel-inner">
        <div className="carousel-item active"  > 
        <div className="p-5 Mainslide">
          <div className="container">
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
          
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            <div className="d-flex flex-wrap justify-content-start gap-10">
              
               
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Unbelievable results! This teams PPC strategies propelled my online store to new heights, generating an unprecedented surge in sales. I can recommend them highly enough for e-commerce success!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Jessica Taylor</h3>
                    <p className="mb-0 fs-6">Online Retailer</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">

         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
         
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            <div className="d-flex flex-wrap justify-content-start gap-10">
             
             
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Absolutely outstanding! Their PPC management services revolutionized my small business, skyrocketing visibility and driving traffic beyond expectations. I&apos;m beyond thrilled with the remarkable outcomes!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Christopher Evans</h3>
                    <p className="mb-0 fs-6">Small Business Owner </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
      </div>
      </div>
    </div>
    
    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container"> 
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
      
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Remarkable service! This agency&apos;s PPC expertise transformed our campaigns, leading to a substantial increase in leads and conversions. Their commitment to excellence truly sets them apart in the industry.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
            
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Samantha Roberts</h3>
                    <p className="mb-0 fs-6">Marketing Director </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>

    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">  
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
        
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3">  <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Exceptional performance! Through their precise targeting and optimization, our startup witnessed unprecedented growth in user acquisition. Working with this team has been a game-changer for our business!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
              
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Daniel Nguyen</h3>
                    <p className="mb-0 fs-6">CEO, Tech Startup </p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>

    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">  

         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
        
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3">    <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Top-tier service! Collaborating with this team on PPC initiatives has been an absolute pleasure. Their strategic approach and meticulous attention to detail have significantly enhanced our advertising efforts.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
            
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Liam Patel</h3>
                    <p className="mb-0 fs-6">Digital Marketing Manager </p>
                  </div>
                </div>

                </div>
            </div>

        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>

    <div className="carousel-item "  > 
        <div className="p-5 Mainslide">
        <div className="container">  

         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
           
            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3">  <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Incredible outcomes! Thanks to their tailored PPC solutions, our real estate listings experienced a remarkable increase in inquiries and site visits. Their expertise has proven invaluable in maximizing our returns!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
              
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">William Anderson</h3>
                    <p className="mb-0 fs-6">Real Estate Developer</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
              </div>
             </div>
        </div> 
      </div> 
    </>
  )
}
