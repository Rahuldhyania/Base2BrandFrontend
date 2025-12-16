"use client";
import React from 'react'
import "./Section_number.css"
import CountUp from 'react-countup'; 
export default function Section_number() {
  return (
   <>
    
 <div className="radialGradient">
      <div className="b2b-container-lg"> 
          <div className='progress-column b2b-achievements'>
          
            <div className='row'>
                <div className='col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                  <h2 className='text-center b2b-sub-heading-bold ttext-capitalize' data-aos="fade-up">500+ Stores And 250+ People Build Better Business Experiences With Base2Brand!</h2>
                  
                </div>
            </div>
            
            <div className='b2b-container-lg'>
              <div className='row progress-count d-flex flex-wrap justify-content-center'>
                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap '>
                   
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center text_dynamic'>80M</h2>
                        <p className='text-white text-center'>Media Spend Managed</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center text_dynamic'><CountUp end={5} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Year in Market</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center  text_dynamic'><CountUp end={80} enableScrollSpy/>+</h2>
                        <p className='text-white text-center'>Result Driven Professional</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                     
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center text_dynamic'><CountUp end={100} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Websites Built</p>
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
