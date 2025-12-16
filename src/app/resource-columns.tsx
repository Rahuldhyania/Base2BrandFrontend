'use client'

import React from "react"; 
import Order1 from "../../public/youtube-img/order1.png"
import Order2 from "../../public/youtube-img/order2.png"
import ResourceImg from "../../public/resources/resource-bg.png"
export default function home() {
   
  return (
    <>  
        <div className="container-fluid py-0 py-md-5 pb-5"> 
            <div className="row resource text-white mb-5 justify-content-center pt-5 px-3 px-md-5"> 
                <div className="resource-col col-12 col-sm-12 col-md-12 col-lg-6 pb-5">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h1 className="text-left col-12 col-sm-8 mb-5">Benefits of Outsourcing Web Development to Us</h1>
                        <ul className="order-list d-flex flex-wrap p-0 position-relative">
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order1.src} alt=""/>
                            <span>Access to specialized skills and expertise.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Cost efficiency through competitive pricing models.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Focus on core business activities and strategies.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Faster time-to-market for digital products.</span></li>
                            <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-4"><img src={Order2.src} alt=""/>
                            <span>Scalability and flexibility to adapt to needs.</span></li>
                        </ul>
                    </div>
                </div>

                <div className="resource-col col-12 col-sm-12 col-md-12 col-lg-6" data-aos="flip-left">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <p className="text-left">We&apos;ve been entrusted by businesses of all sizes, from budding entrepreneurs to established corporations, to deliver top-notch web development solutions. Our track record speaks volumes, demonstrating our ability to cater to diverse needs and exceed expectations consistently.</p>
                        <img className="w-100" src={ResourceImg.src} alt="" />
                    </div>
                </div>    


      



            </div>
        </div> 
    </>
  )
}
