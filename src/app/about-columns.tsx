'use client'

import React from "react"; 
import About3 from "../../public/about-img/about3.png"
import About4 from "../../public/about-img/about4.png"
import About5 from "../../public/about-img/about5.png"
import About6 from "../../public/about-img/about6.png"
export default function home() {
   
  return (
    <>  
        <div className="p-4 pb-5 pt-0 text-white">  
                    {/* <h1 className="text-center font-light fs-2 mb-5"> Reasons to collaborate with Base2Brand</h1> */}
                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3">
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-8 web-head">MISSION</h3>
                            <p className="digital-para">Our mission is to create innovative products and hand-over excellency with constant emphasis on process quality, consumer satisfaction and transparency.
                             <br/><br/>
                            We aim to become a remarkable institution by providing premier IT-based services and solutions to establishments worldwide. Our commitment extends to fostering a culture of creativity, adaptability, and sustainability, ensuring our offerings not only meet but exceed the evolving needs of our clients. With integrity as our cornerstone, we strive to forge enduring partnerships grounded in mutual trust and respect, driving progress and prosperity on a global scale.</p>
                        </div>
                    </div>

                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-6 justify-content-end d-flex flex-wrap" >
                        <img src={About3.src} alt=""/>
                    </div>
                </div>
                </div>
                    <div className="bg-gray p-4">
                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3 text-white"  >
                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                        <img src={About4.src} className="w-75" alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-6" >
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-8 web-head">VISION</h3>
                            <p className="digital-para">The vision in your mind is the future you wish to achieve! The vision of the company is to provide high-quality services to our global clients.
                            <br/><br/>
                            Our vision encompasses innovative advancements in technology, leveraging cutting-edge tools and methodologies to deliver unparalleled value and transformative solutions. With a focus on continuous improvement and client-centricity, we aim to set new benchmarks in the industry, empowering businesses to thrive in the digital age.</p>
                        </div>
                    </div> 
                </div>
                </div>
                   <div className="p-4 pb-5 pt-0 text-white">   
                <div className="justify-content-between d-flex flex-wrap align-items-center mb-3 text-white">
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-6" >
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            <h3 className="mb-2 font-light fs-8 web-head">VALUES</h3>
                            <p className="digital-para">The strengths of any organization lie in the values they uphold. We believe that quality should be maintained while meeting deadlines. Hence, our USP is delivering quality services within the deadlines!
                            <br/><br/>
                            As a company, we strive to do business with moral correctness, integrity, and a sincere heart for others. Thus, here at Base2Brand, we work towards nurturing and empowering them at every stage!
                            <br/><br/>
                            Furthermore, our dedication to transparency and open communication fosters trust and collaboration, enabling us to forge lasting partnerships built on mutual respect and shared success. At Base2Brand, we are committed to continuous learning and innovation, driving excellence in everything we do.
                            </p>
                        </div>
                    </div>

                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-6 justify-content-end d-flex flex-wrap"  >
                        <img src={About5.src} alt=""/>
                    </div>
                </div>
                </div>
                <div className="bg-gray pr-5 pl-5"> 
                <div className="justify-content-between align-items-center d-flex flex-wrap text-white">
                    <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-center d-flex flex-wrap">
                        <img src={About6.src} className="w-75" alt=""/>
                    </div>
                    <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-8 founder-bg bg-gray p-2">
                        <div className="d-flex flex-wrap justify-content-start align-items-center bg_gray_about">
                            <h3 className="mb-2 font-light fs-8 web-head">Our Founder</h3>
                            <p className="digital-para">Base2Brand Infotech was founded by Ms.Arti Bhatia. With more than a decade of experience in the IT industry, she founded Base2Brand in 2020. With a handful of team members, she achieved the milestones that motivated her to grow business and provide career advancement opportunities.
                            <br/><br/>
                            Base2Brand is a team of creative and great minds that resonate and find solutions to all the challenges and hardships they face in their jobs. Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience. We can help you build a sustainable, meaningful relationship with your clients.
                            <br /><br />
                            Our approach is tailored to meet the unique needs of each client, ensuring maximum satisfaction and measurable results. With our expertise, you can trust us to take your business to the next level and achieve your goals.
                            </p>
                        </div>
                    </div> 
                </div> 
                </div> 

    </>
  )
}
