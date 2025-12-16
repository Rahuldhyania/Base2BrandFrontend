'use client'

import React from "react";
import stack from "../../../public/social/behance.png";
import stack1 from "../../../public/social/dribbble.png";
import stack2 from "../../../public/social/instagram.png";
import stack3 from "../../../public/social/linkedin.png";
import stack4 from "../../../public/social/pinterest.png";
import stack5 from "../../../public/social/snapchat.png";
import stack6 from "../../../public/social/t.png";
import stack7 from "../../../public/social/telegram.png";
import stack8 from "../../../public/social/vimeo.png";
import Image from "next/image";


export default function Technologystack() {

    return (
        <>
            <div className="container-fluid p-5 mb-5">
                <div className="row">
                    <div className="col-md-12 text-center text-white mb-5" data-aos="fade-up">
                        <h2>Technology Stack</h2>
                    </div>
                    <div className="col borderStack">
                        <img src={stack8.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack6.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack4.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack2.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <Image width={1000} height={500} src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/youtube_qaldpb.png" alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack1.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack7.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack5.src} alt="" />
                    </div>
                    <div className="col borderStack">
                        <img src={stack3.src} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
