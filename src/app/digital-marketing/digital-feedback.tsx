'use client'

import React from "react"; 
import banner from '../../../public/img/feedback-banner.png';        
import name from '../../../public/img/name.png';        
import blog3 from '../../../public/img/blog3.png';        
import '../our-project.css';

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
     <div id="carouselExampleDark" className="carousel carousel-dark slide" > 
       <div className="carousel-inner">
        <div className="carousel-item active"  > 
        <div className="p-5 Mainslide">
          <div className="container">
         <div className="row pl-5 pr-5">
          <div className="col-md-12 position-relative" data-aos="fade-left">
          
            {/* <p>Know what clients are saying about our services through their insightful reviews. Gain valuable insights into their experiences, satisfaction levels, and results achieved. Let their feedback guide your decision-making process as you explore the potential of partnering with us</p> */}
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
              <p className="fs-6 text-left">Base2Brand&apos;s expertise transformed our digital presence. Their tailored strategies boosted our brand visibility and drove impressive ROI. Highly recommend their services!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">John Smith</h3>
                    <p className="mb-0 fs-6">Entrepreneur</p>
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
              <p className="fs-6 text-left">Base2Brand&apos;s personalized approach exceeded my expectations. Their team&apos;s dedication and creativity helped my business thrive online. Truly grateful for their support!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">               
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Priya Patel</h3>
                    <p className="mb-0 fs-6">Small Business Owner</p>
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
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Base2Brand&apos;s innovative strategies propelled our online sales. Their transparent communication and results-driven approach made them invaluable partners. Trustworthy and highly recommended!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Rajesh Kumar</h3>
                    <p className="mb-0 fs-6">E-commerce Entrepreneur</p>
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
              <p className="fs-6 text-left">Base2Brand&apos;s content writing service elevated my health awareness website&apos;s presence on Google. Their team&apos;s attention to detail and commitment to quality surpassed my expectations. Exceptional work every time!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5"> 
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Sarah Johnson</h3>
                    <p className="mb-0 fs-6">Health Coach </p>
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
              <p className="fs-6 text-left">Base2Brand&apos;s social media optimization took my online presence to new heights. Their strategic insights and engaging content strategy helped me connect with my audience on a deeper level.</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">Ananya Singh</h3>
                    <p className="mb-0 fs-6">Fashion Blogger </p>
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
          <div className="col-md-12 position-relative" data-aos="fade-left">          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
          <div className="col-md-12" data-aos="fade-right">
            <div className="bg_feedback">
              <div className="mb-3"><img className="name_latter" src={name.src} alt="Product" /></div>
              <p className="fs-6 text-left">Base2Brand&apos;s SEO expertise transformed my website&apos;s visibility. Their tailored approach and consistent results have significantly boosted my lead generation. A game-changer for my business!</p>
                <div className="d-flex justify-content-end mt-4">
                <div className="right d-flex align-items-center text-right pr-5">
                  <div className="feedback_user ml-3">
                    <h3 className="mb-0 fs-6">David Thompson</h3>
                    <p className="mb-0 fs-6">Real Estate Agent</p>
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
