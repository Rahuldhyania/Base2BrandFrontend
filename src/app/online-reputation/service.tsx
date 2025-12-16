'use client'

import React from "react";
import service1 from '../../../public/online/service.png';
import service2 from '../../../public/online/service1.png';
import service3 from '../../../public/online/service2.png';
import lines from '../../../public/online/lines.png';
import '../online-reputation/online.css'
export default function service() {

    return (
        <> 
            <div className="bg-black">
                <div className="container-fluid p-5">
                    <div className="row">
                       
                      <div className="col-md-5">
                        <img src={service1.src} alt="" className="service_img w-50 m-auto" />
                        <div className="service_text text-white mb-5">
                            <h3 className="text_primary">Online Reputation Management <br /> Services Can Increase Your Profits</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                        </div>
                        <img src={service3.src} alt="" className="service_img  m-auto w-50" />

                      </div>
                      <div className="col-md-2 mob-none">
                        <img src={lines.src} alt="" className="lineImg w-25 m-auto" />
                      </div>
                      <div className="col-md-5">
                      <div className="service_texts text-white">
                            <h3 className="text_primary">Build Trust Among Your Customers with <br /> Online Reputation Management Services</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                            </div>
                            <img src={service2.src} alt="" className="service_img service_text w-50" />
                            <div className="service_text text-white">
                            <h3 className="text_primary">Professional Online Reputation <br /> Management Company</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                            </div>
                      </div>
                    </div>
                </div>
            </div>

        </>
    )
}
