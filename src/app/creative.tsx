'use client'
import { useEffect } from 'react';

import React from "react";   
// Blur problem when use cdn url
import Graphic1 from '../../public/graphics/step1.png';       
import Graphic2 from '../../public/graphics/step2.png';       
import Graphic3 from '../../public/graphics/step3.png';       
import Graphic4 from '../../public/graphics/step4.png';       
import Graphic5 from '../../public/graphics/step5.png';       
import Graphic6 from '../../public/graphics/step6.png';       
import Graphic7 from '../../public/graphics/step7.png';       
import Graphic8 from '../../public/graphics/step8.png';       
import Graphic9 from '../../public/graphics/step9.png';       
//

export default function Creative() {
 
    useEffect(() => {
        const processSections = document.querySelectorAll(".process_row");
        const headerSection = document.querySelector("header");
        const headerHeight = headerSection.offsetHeight;
    
        if (!processSections) {
          console.error("Element with class 'processSections' not found");
          return;
        }
    
        const handleScroll = () => {
          const clientHeight = document.documentElement.clientHeight;

          processSections.forEach(processSection => {
            const processSectionY = processSection.getBoundingClientRect().y;
            
            if (clientHeight > processSectionY && processSectionY <= (headerHeight + 140)) {
                processSection.classList.add("active_row");
            }else{
                processSection.classList.remove("active_row");
            }
          });

        
         
        };
    
        document.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>  
    <div className="p-md-5 p-3 process_steps" data-aos="fade-up" > 
          <div className="b2b-container-lg"> 
            <div className="row text-white justify-content-center">
              <div className="col-md-12 mx-auto text-center">
                <h2 className="b2b-heading" data-aos="fade-up" data-aos-delay="300">Our Process of Bringing Your Vision to Life</h2>
                <h3 className="b2b-heading mt-5" data-aos="fade-up" data-aos-delay="300">Our <span className='b2b-primary-text'>process</span></h3>
              </div>
            </div>
            <span className='mobileSectionNav'><span className='dotNavrap'><span className='dotNav'></span></span></span>
            <div className="row gap-4 justify-content-center align-items-center  process_row odd-row first-row ">
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Initial Consultation</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Gather client requirements, goals, and brand identity. Understand target audience. Clarify project scope and objectives through comprehensive discussion.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src={Graphic1.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
            </div> 

            <div className="row gap-4 justify-content-center align-items-center process_row even-row">
                <div className='col-md-5'>
                    <img src={Graphic2.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Research and Analysis</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Analyze market, competitors, and user preferences. Identify trends and pain points. Use insights to inform design strategy and solutions.</p>
                    </div>
              </div>
              
            </div> 

            <div className="row  gap-4 justify-content-center align-items-center process_row odd-row">
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Concept Development</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Brainstorm design ideas. Sketch multiple concepts exploring layouts, color schemes, typography, and imagery. Align with client preferences.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src={Graphic3.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
            </div> 

            <div className="row gap-4 justify-content-center align-items-center process_row even-row">
                <div className='col-md-5'>
                    <img src={Graphic4.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Wireframing And<br />Prototyping</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Create wireframes to outline interface structure and user flow. Develop interactive prototypes to simulate user interactions and test usability.</p>
                    </div>
              </div>
              
            </div> 

            <div className="row gap-4 justify-content-center align-items-center process_row odd-row">
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Design Iteration</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Refine design based on client feedback and user testing. Iterate to improve usability, aesthetics, and overall user experience.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src={Graphic5.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
            </div> 

            <div className="row gap-4 justify-content-center align-items-center process_row even-row">
                <div className='col-md-5'>
                    <img src={Graphic7.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Visual Design</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Develop visual elements—color, typography, icons, imagery—consistent with client branding. Create visually appealing designs resonating with the target audience.</p>
                    </div>
              </div>
              
            </div> 

            <div className="row  gap-4 justify-content-center align-items-center process_row odd-row">
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">UI Development</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Translate finalized design into functional user interfaces. Utilize design tools or coding languages ensuring compatibility across devices and screen sizes.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src={Graphic6.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
            </div> 

            <div className="row  gap-4 justify-content-center align-items-center process_row even-row">
                <div className='col-md-5'>
                    <img src={Graphic8.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Testing and Quality Assurance</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Conduct thorough testing to identify bugs and usability issues. Ensure design consistency across devices, browsers, and operating systems.</p>
                    </div>
              </div>
              
            </div> 

            <div className="row gap-4 justify-content-center align-items-center process_row odd-row last-row">
                <div className='col-md-5'>
                    <div className='textWrap'>
                        <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">Delivery and Feedback</h2>
                        <p className='text-white b2b-text' data-aos="fade-up" data-aos-delay="300">Present final design for client review and approval. Provide documentation and assets for implementation. Gather feedback for future refinements.</p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src={Graphic9.src} alt=""  data-aos="fade-up" data-aos-delay="300"/>
                </div>
            </div> 

          </div>
        </div>
    
</>
)
}