'use client'

import React from "react"; 
import banner from '../../public/img/feedback-banner.png';        
import name from '../../public/img/name.png';        
import blog3 from '../../public/img/blog3.png';        
import './our-project.css'

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
      <div className="bgimg_feed1 bg-dgray">
      <div className="container-fluid"> 
          <div className="row text-white"> 
              <div className="col-md-12 p-0">
              <h3 className="feedback_heading mb-4 text-center fs-1 pt-5 pb-2">What Our <strong>Clients</strong> Say</h3>
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
          <button className="carousel-control-prev ph_remove_btn" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Base2Brand designs delivered exceptional results! Their creativity and attention to detail surpassed our expectations. They understood our brand vision perfectly and translated it into stunning visuals. Their professionalism and efficiency made the entire process a breeze. Highly recommended!	</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Ashley Johnson</h3>
                    <p className="mb-0 fs-6">Social Media Manager</p>
                  </div>
                  
                </div>

                </div>
            </div>
        </div>
        <button className="carousel-control-next ph_remove_btn" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
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
              <div className="mb-3">  <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Base2Brand exceeded our expectations! Their team&apos;s creativity and expertise brought our brand to life in ways we never imagined. From concept to execution, they were a pleasure to work with. Their attention to detail and dedication to quality set them apart. Highly impressed!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Christopher Thompson</h3>
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
              <div className="mb-3">    <img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Working with Base2Brand was a delight! They were attentive to our needs and delivered designs that perfectly captured our brand essence. Their professionalism and creativity made the entire process seamless. We&apos;re thrilled with the results and look forward to future collaborations!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Olivia Martinez</h3>
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
              <p className="fs-6 text-left">The designs were top-notch! Their team&apos;s creativity and attention to detail are unmatched. They took the time to understand our brand and delivered designs that exceeded our expectations. Their professionalism and responsiveness made the entire process a breeze. Highly recommended!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Daniel Brown</h3>
                    <p className="mb-0 fs-6">CEO </p>
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
              <p className="fs-6 text-left">Base2Brand knocked it out of the park! Their creativity and expertise brought our event branding to life in ways we never imagined. They were responsive, professional, and delivered designs that perfectly captured the essence of our events. Couldn&apos;t be happier with the outcome!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Sophia Garcia</h3>
                    <p className="mb-0 fs-6">Event Planner </p>
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
              <p className="fs-6 text-left">Working with Base2Brand web design team was a game-changer for our startup! Their team creativity and attention to detail were evident in every design they delivered. They took the time to understand our vision and delivered results that exceeded our expectations. Highly recommended!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user mr-3">
                    <h3 className="mb-0 fs-6">Ethan Wilson</h3>
                    <p className="mb-0 fs-6">Startup Founder</p>
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
