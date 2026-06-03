'use client'

import React, { useState, ChangeEvent } from "react";
import Image from 'next/image';
import radialRight from '../../public/img/radial-right.svg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';


export default function BackOurGlobal() {

    return (
        <div className="back-our-global">
            <div className="footer-map">
                <div className="container">
                    <h2 className='' data-aos="fade-up">Our <span>global presence</span></h2>
                    <div className="mapWrapper mapWrapper-lg">
                        <Image className="m-auto" data-aos="fade-up" data-aos-duration="500" src="/back-offce-img/map-back-image.png" width="890" height="480" alt="Map" />
                        <div className="address1">
                            <span data-tooltip-id="my-tooltip-1" className="addressDot"></span>
                        </div>
                        <Tooltip
                            id="my-tooltip-1"
                            className="tooltipText"
                            place="top"
                            html="<p class='tooltipTitle'>USA</p>
                                        7311 Gladys Ave El Cerrito CA 94530,<br/> USA, +1 720 9035933"
                        />
                        <div className="address2" data-aos="zoom-in" data-aos-delay="700">
                            <span data-tooltip-id="my-tooltip-2" className="addressDot"></span>
                        </div>

                        <Tooltip
                            id="my-tooltip-2"
                            className="tooltipText"
                            place="top"
                            html="<p class='tooltipTitle'>Uk</p>
                                        
                                        UK +44 7441913940"
                        />
                        <div className="address3" data-aos="zoom-in" data-aos-delay="800">
                            <span data-tooltip-id="my-tooltip-3" className="addressDot"></span>
                        </div>
                        <Tooltip
                            id="my-tooltip-3"
                            className="tooltipText"
                            place="top"
                            html="<p class='tooltipTitle'>India (headquarter) </p>
                                        F-209, Industrial area Phase 8-B,<br />
                                        Sector 74, Mohali, 160074 +91 7889101844"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}