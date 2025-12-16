'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../../public/img/name.png';        
import blog3 from '../../public/img/blog3.png';        
import '../our-project.css'

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
         <div className="row pl-5 pr-5 text-center">
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
              <p className="fs-6 text-left"> Exceptional YouTube marketing services! The team helped boost our brand visibility significantly. Their strategic approach and attention to detail yielded impressive results. Highly recommend it!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Jennifer Lee</h3>
                    <p className="mb-0">Fitness Instructor</p>
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
              <div className="mb-3"> <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">As a small business owner, I needed to increase my brand online presence. Thanks to this team YouTube marketing services, I&apos;ve seen a noticeable uptick in traffic and leads. Great job!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">John Smith</h3>
                    <p className="mb-0">Small Business Owner </p>
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
              <p className="fs-6 text-left">I am thrilled with the results of working with this YouTube marketing team. They understood my brand vision and created engaging content that resonated with my audience. Can&apos;t wait to collaborate again!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Emily Chen</h3>
                    <p className="mb-0">Financial Analyst </p>
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
              <p className="fs-6 text-left"> Our company wanted to expand our reach on YouTube, and this team delivered exceptional results. Their expertise in keyword optimization and analytics helped us achieve our goals. Highly satisfied!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Samantha Clark</h3>
                    <p className="mb-0">Event Planner </p>
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
              <p className="fs-6 text-left">I am impressed by the professionalism and dedication of this YouTube marketing team. They went above and beyond to promote my videos and elevate my brand. Couldn&apos;t be happier with the outcome!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
              
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">Amanda Rodriguez</h3>
                    <p className="mb-0">Chef </p>
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
              <div className="mb-3"> <img className="name_latter" src={name.src} alt="Product" /></div>
              <p>These YouTube marketing services have been a game-changer for my e-commerce business. The team strategic approach and creative content have significantly increased brand awareness and sales. Highly recommended!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0">David Williams</h3>
                    <p className="mb-0">David Williams</p>
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
