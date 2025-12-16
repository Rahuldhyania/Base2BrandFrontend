'use client'

import React from "react"; 
import Utube1 from "../../public/youtube-img/youtube1.png"
import Utube2 from "../../public/youtube-img/youtube2.png"
import Utube3 from "../../public/youtube-img/youtube3.png"
import Utube4 from "../../public/youtube-img/youtube4.png"
import Utube5 from "../../public/youtube-img/youtube5.png"
import Utube6 from "../../public/youtube-img/youtube6.png"
export default function home() {
   
  return (
    <>  
        <div className="container pb-5"> 
            <div className="row process bg-gray text-white mb-5 justify-content-center px-5 pb-5"> 
                        <div className="col-md-12">
                        <h1 className=" font-light fs-2 mb-5">How Do We Grow Your YouTube Videos?</h1> 
                        </div>
                    <div className="ser-digital-col col-md-6 mb-5">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-4 web-head">Channel Creation and Optimization</h3>
                            <p className="digital-para">Our team specializes in crafting visually appealing YouTube channels tailored to your content. Whether you&apos;re starting fresh or seeking to enhance an existing channel, we optimize layout, branding, and navigation for maximum viewer engagement. Let us transform your YouTube presence into a captivating platform that elevates your videos and captivates your audience.</p>
                        </div>
                    </div>

                    <div className="ser-digital col-md-6 mb-5">
                        <img src={Utube1.src} alt=""/>
                    </div> 

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-md-6">
                        <img src={Utube1.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-md-6 pb-5"> 
                            <h3 className="mb-2 font-light fs-4 web-head">Video Optimization</h3>
                            <p className="digital-para">Video optimization is essential for maximizing visibility and engagement on platforms like YouTube. We employ strategic techniques to enhance your videos discoverability, including keyword-rich titles, descriptions, and tags. Optimizing thumbnails and metadata ensures your content stands out in search results and draws viewers to click. Additionally, we analyze audience insights and trends to tailor optimization strategies, helping your videos reach the right audience and achieve greater success.</p>
                         
                    </div> 
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-md-6 pb-5"> 
                            <h3 className="mb-2 font-light fs-4 web-head">Keyword Strategy</h3>
                            <p className="digital-para">We help you find the right words that people use to search for videos like yours. By figuring out these keywords, we make sure more people can find and watch your videos. It like choosing the perfect key to unlock your video potential and get it seen by the right audience. With our help, your videos can reach more people and make a bigger impact online.</p>
                         
                    </div>

                    <div className="ser-digital col-md-6">
                        <img src={Utube3.src} alt=""/>
                    </div>
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-md-6">
                        <img src={Utube4.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-md-6 pb-5"> 
                            <h3 className="mb-2 font-light fs-4 web-head">Social Engagement Strategy</h3>
                            <p className="digital-para">We build the perfect strategy to identify the right distribution channel for your videos to reduce the investment & improve playback performance. Our strategies are proven to provide the best results in the form of Views and Subscribers on our customer YouTube channels.</p>
                         
                    </div> 
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-md-6 pb-5"> 
                            <h3 className="mb-2 font-light fs-4 web-head">Viewer Engagement</h3>
                            <p className="digital-para">We focus on enhancing viewer engagement on your YouTube videos. Through strategic optimization of titles, descriptions, and thumbnails, we captivate audiences and encourage interaction. By analyzing audience insights and trends, we tailor engagement strategies to resonate with your viewers, fostering meaningful connections and driving increased likes, comments, and shares. </p>
                         
                    </div>

                    <div className="ser-digital col-md-6">
                        <img src={Utube5.src} alt=""/>
                    </div>
                </div>

                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital col-md-6">
                        <img src={Utube6.src} alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5"> 
                            <h3 className="mb-2 font-light fs-4 web-head">Competitive Analysis</h3>
                            <p className="digital-para">In the realm of YouTube videos, competitor analysis is essential for gaining a competitive edge. We delve into your competitors video content, analyzing factors like topics, presentation style, and audience engagement. By uncovering their strengths and weaknesses, we equip you with valuable insights to refine your own video strategy. Leveraging this knowledge, we help you stand out, attract more viewers, and establish a stronger presence in your niche.</p>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}
