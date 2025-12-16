'use client'
import { useEffect } from 'react';

import React from "react";   

import Client1 from '../../public/clients/client1.png';
import Client2 from '../../public/clients/client2.png';
import Client3 from '../../public/clients/client3.png';
import Client4 from '../../public/clients/client4.png';
import Client5 from '../../public/clients/client5.png';
import Client6 from '../../public/clients/client6.png';
import Client7 from '../../public/clients/client7.png';
import Client8 from '../../public/clients/client8.png';
import Client9 from '../../public/clients/client9.png';
import Client10 from '../../public/clients/client10.png';
import Client11 from '../../public/clients/client11.png';
import Client12 from '../../public/clients/client12.png';
export default function Client() {
 
  

  return (
    <>  
    <div className="p-5 client"> 
            <div className="graphic-ser-head text-white text-center" >
                <h1>OUR CLIENTS</h1>
            </div>
            <div className="row client-box mt-5 align-items-center justify-content-center">
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client1.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client2.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client3.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client4.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client5.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client6.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client7.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client8.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client9.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client10.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"    >
                    <img src={Client11.src} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 d-flex justify-content-center"   >
                    <img src={Client12.src} alt="" />
                </div>
            </div>
    </div>
</>
)
}