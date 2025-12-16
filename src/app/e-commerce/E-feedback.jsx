'use client'

import React from "react";         
import name from '../../../public/img/name.png';         
import '../our-project.css'

export default function Feedback() {
 
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
              <p className="fs-6 text-left">Working with this team was a game-changer for our e-commerce platform. Their expertise in backend development streamlined our processes and improved user experience, resulting in a significant boost in sales. Highly recommended!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
       
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Jessica Anderson</h3>
                    <p className="mb-0 fs-6">Marketing Director at TechSolutions Inc.</p>
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
              <p className="fs-6 text-left">From conception to deployment, they exceeded our expectations at every turn. Their frontend development skills brought our website to life, capturing our brand essence perfectly. Their professionalism and attention to detail were commendable.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Christopher Wilson</h3>
                    <p className="mb-0 fs-6">CEO of Smith & Co. </p>
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
              <p className="fs-6 text-left">I couldn&apos;t be happier with the e-commerce website they built for my boutique. The design is sleek, the shopping experience is seamless, and sales have soared since launch. Their team&apos;s dedication and responsiveness made the entire process a breeze.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Michelle Taylor</h3>
                    <p className="mb-0 fs-6">Owner of Taylor&apos;s Fashion Emporium </p>
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
              <p className="fs-6 text-left">Our company needed a robust e-commerce solution, and they delivered beyond our expectations. Their expertise in backend technologies ensured a scalable and secure platform. Their proactive approach to problem-solving made them a pleasure to work with.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Daniel Rivera</h3>
                    <p className="mb-0 fs-6">IT Manager at GlobalTech Solutions </p>
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
              <p className="fs-6 text-left"> As a startup, we needed a reliable partner to bring our vision to life. They not only developed a user-friendly e-commerce website but also provided invaluable guidance throughout the process. Their commitment to our success was evident every step of the way.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Hannah Bennett</h3>
                    <p className="mb-0 fs-6">Founder of Bennett&apos;s Toys </p>
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
              <p className="fs-6 text-left">The e-commerce platform they built for us has revolutionized our online sales strategy. Their seamless integration of payment gateways and inventory management systems has saved us time and money. Their professionalism and expertise are unmatched in the industry.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
              
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Mark Thompson</h3>
                    <p className="mb-0 fs-6">CFO of Thomson Electronics</p>
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
