'use client'

import React from "react"; 
import s1 from '../../public/img/s1.png';  
import s2 from '../../public/img/s2.png';  
import s3 from '../../public/img/s3.png';  
import s4 from '../../public/img/s4.png';  
import s5 from '../../public/img/s5.png';  
import s6 from '../../public/img/s6.png';  

export default function Service() {

  return (
    <>  
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="heading font-light">Our Services</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s1.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">Digital Marketing</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s2.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">E-commerce</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s3.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">Graphic Design</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s4.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">Web Development</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s5.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">Resources</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>


          <div className="col-md-4 mb-4">
            <div className="service_box">
              <img src={s6.src} alt="Digital Marketing" />
              <div className="desc_box p-3">
                <h5 className="mt-4 mb-3 font-light">App Development</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text...</p>
                <a >Read More <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></a>
              </div> 
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
