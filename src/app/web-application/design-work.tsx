'use client'
import React, { useState } from "react";
import "./web.css";

import system_website from '../../../public/web-app/system_website.png';

import Request from "../request-form";
import Image from "next/image";


export default function DesignWork() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }

    }, 200);
  };

  return (
    <>

      <div className="py-lg-5 py-3 interfaceWrap mt-lg-4 mt-md-3 mt-2" data-aos="fade-up" >
        <div className="b2b-container-lg">
          <div className="row">
            <div className="col-lg-12 mb-5">
              <div className="text-center">
                <h2 className="text-center mb-3 b2b-heading" data-aos="fade-up" data-aos-delay="300">
                  Our Developers are Proficient in Each Interface of a Website Development  </h2>

              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-7 mx-sm-auto mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="hoverGradient blueGD withGray">
                <div className="cell-wrap b2b-gray-bg text-center">
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/develop_cuiw9s.png"
                    className="imgIcon"
                    alt="" />
                  <h3>Front-end <br /> Development </h3>
                  <p className="b2b-text letterSpacing-1 mb-0">Craft intuitive interfaces, captivating designs, and seamless navigation for engaging user experiences on websites and applications.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-7 mx-sm-auto mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="hoverGradient blueGD withGray">
                <div className="cell-wrap b2b-gray-bg text-center">
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/backend_gvscdw.png"
                    className="imgIcon"
                    alt="" />
                  <h3>Back-end <br /> Development </h3>
                  <p className="b2b-text letterSpacing-1 mb-0">Build robust, scalable, and secure server-side solutions, optimizing performance and data processing for reliable digital operations.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-7 mx-sm-auto mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="hoverGradient blueGD withGray">
                <div className="cell-wrap b2b-gray-bg text-center">
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/admin-panel_cp1tsu.png"
                    className="imgIcon"
                    alt="" />
                  <h3>Admin Panel <br /> Development </h3>
                  <p className="b2b-text letterSpacing-1 mb-0">Develop intuitive tools for managing websites and applications, empowering administrators with efficient content control and system oversight.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="py-md-5 py-4 b2b-gray-bg" data-aos="fade-up">
        <div className="b2b-container-lg">
          <div className="row align-items-center">
            <div className="col-md-5 mb-md-0 mb-4">
              <img className="w-100" src={system_website.src} alt="" data-aos="fade-up" data-aos-delay="300" />
            </div>
            <div className="col-md-7 text-white">
              <h2 className="b2b-heading mb-3" data-aos="fade-up" data-aos-delay="300">Why Does Your Business <br />Need a Website?</h2>
              <p className="b2b-text-sm" data-aos="fade-up" data-aos-delay="300">In today&apos;s digital landscape, a website serves as your business virtual storefront, accessible to potential customers 24/7. It establishes credibility, expands market reach, and facilitates customer engagement. A well-designed website showcases your brand, offers valuable information, and converts visitors into loyal customers, driving growth and fostering lasting relationships.</p>
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0 mt-3" data-aos="fade-up" data-aos-delay="300">Request a Quote</button>
            </div>

          </div>
        </div>
      </div>
      <div className="w-100 py-md-5 py-4" data-aos="fade-up">
        <div className="b2b-container-lg">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="text-center">
                <h3 className="b2b-heading text-center" data-aos="fade-up" data-aos-delay="300">Web Development Services We Offer</h3>

              </div>
              <p className="b2b-text text-center letterSpacing-1" data-aos="fade-up" data-aos-delay="300">We cater to our client&apos;s unique and diverse business requirements with our end-to-end web development services. Design responsive web apps that work perfectly on desktops, tablets, and smartphones.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6 col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="deliverable-step-outer">
                <div className="deliverable-step">
                  <div className="deliverable-icon">
                    <div className="deliverable-icon-bg">
                      <Image width="100"
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_kkitqj.svg"
                        alt="" />
                    </div>
                  </div>
                  <div className="deliverable-content">
                    <h2 className="b2b-sub-heading">Website Development</h2>
                    <p className="b2b-text letterSpacing-1">Crafted from scratch, our custom websites are tailored to your unique business needs, ensuring a personalized online presence that resonates with your audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="deliverable-step-outer">
                <div className="deliverable-step">
                  <div className="deliverable-icon">
                    <div className="deliverable-icon-bg">
                      <Image
                        width="100"
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_lim3t7.png" alt="" />
                    </div>
                  </div>
                  <div className="deliverable-content">
                    <h2 className="b2b-sub-heading">Responsive Web Design</h2>
                    <p className="b2b-text letterSpacing-1">With our responsive web design expertise, your website will adapt flawlessly to various devices and screen sizes, providing an optimal viewing experience for every visitor.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="deliverable-step-outer">
                <div className="deliverable-step">
                  <div className="deliverable-icon">
                    <div className="deliverable-icon-bg">
                      <Image
                        width="100"
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon3_pajfhh.png" alt="" />
                    </div>
                  </div>
                  <div className="deliverable-content">
                    <h2 className="b2b-sub-heading">Ecommerce Development</h2>
                    <p className="b2b-text letterSpacing-1">We create dynamic online stores with seamless navigation, secure payment gateways, and intuitive product management systems to empower your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="deliverable-step-outer">
                <div className="deliverable-step">
                  <div className="deliverable-icon">
                    <div className="deliverable-icon-bg">
                      <Image
                        width="100"
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon4_arc27z.png" alt="" />
                    </div>
                  </div>
                  <div className="deliverable-content">
                    <h2 className="b2b-sub-heading">CMS Development</h2>
                    <p className="b2b-text letterSpacing-1">Our CMS solutions offer user-friendly interfaces for effortless content creation, editing, and publishing, enabling you to maintain a dynamic and engaging online presence with ease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="300">
              <div className="deliverable-step-outer">
                <div className="deliverable-step">
                  <div className="deliverable-icon">
                    <div className="deliverable-icon-bg">
                      <Image
                        width="100"
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_iztf6c.png" alt="" />
                    </div>
                  </div>
                  <div className="deliverable-content">
                    <h2 className="b2b-sub-heading">Web Application Development</h2>
                    <p className="b2b-text letterSpacing-1">Our web applications are designed to streamline processes, enhance user engagement, and drive efficiency, leveraging cutting-edge technologies to deliver intuitive and scalable solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="py-md-5 py-4 b2b-gray-bg" data-aos="fade-up">
        <div className="b2b-container-lg">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <h2 className="b2b-sub-heading mb-3" data-aos="fade-up" data-aos-delay="300">More About Custom <br />Website Development</h2>
              <p className="b2b-text-sm letterSpacing-1" data-aos="fade-up" data-aos-delay="300">Custom website development crafts unique, brand-tailored sites, bypassing templates for precise alignment with your objectives. This approach allows for unlimited creativity, specialized features, and optimal user experience, driving standout online presence and business growth. With advanced functionalities and search engine optimization, your website stands out, effectively meeting business goals in the digital realm.</p>
              <p className="b2b-text-sm letterSpacing-1" data-aos="fade-up" data-aos-delay="300">Our custom approach integrates advanced functionalities and SEO, ensuring your website&apos;s prominence and effectiveness in achieving business objectives in the digital realm.</p>

            </div>
            <div className="col-md-6 text-white">
              <div className="accordion accordion-flush b2b-accordion about-accordion" id="accordionFlushExample">
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="accordion-header fs-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-1" aria-expanded="false" aria-controls="flush-collapse-abt-1">
                      UI/UX Designers
                    </button>
                  </h2>
                  <div id="flush-collapse-abt-1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><p className=" letterSpacing-1">Our UI/UX designers create custom websites by focusing on optimizing user experience through intuitive navigation and aesthetic appeal. They align functionalities with client goals, integrating user research, wireframing, prototyping, and testing to ensure engaging digital experiences for target audiences.</p></div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300" >
                  <h2 className="accordion-header fs-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-2" aria-expanded="false" aria-controls="flush-collapse-abt-2">
                      Front-end Developers
                    </button>
                  </h2>
                  <div id="flush-collapse-abt-2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><p className=" letterSpacing-1">Team of front-end developers at Base2Brand enhance user experience by translating UI/UX designs into interactive web interfaces. They utilize languages like HTML, CSS, and JavaScript to ensure responsiveness, accessibility, and seamless functionality across various devices and browsers.</p></div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="accordion-header fs-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-3" aria-expanded="false" aria-controls="flush-collapse-abt-3">
                      Back-end Developers
                    </button>
                  </h2>
                  <div id="flush-collapse-abt-3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><p className=" letterSpacing-1">To create a custom website, our back-end developers focus on server-side operations and database management to ensure the functionality and performance of websites and applications. They use languages like Python, PHP, Ruby, or Java to handle data storage, security, and server logic.</p></div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300" >
                  <h2 className="accordion-header fs-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-abt-4" aria-expanded="false" aria-controls="flush-collapse-abt-4">
                      Full-Stack Developers
                    </button>
                  </h2>
                  <div id="flush-collapse-abt-4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><p className=" letterSpacing-1">Our full-stack developers are proficient in both front-end and back-end technologies, enabling them to oversee entire web development projects. They handle client-side and server-side tasks, ensuring cohesive integration and optimal performance across all aspects of digital solutions.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-md-5 py-3 whyChooseWrap" data-aos="fade-up" >
        <div className="b2b-container-lg">
          <div className="row">
            <div className="col-md-8 text-center m-auto" >
              <h3 className='b2b-partners-heading' data-aos="fade-up" data-aos-delay="300">Why Choose Us?</h3>

              <p className="text-white b2b-text letterSpacing-1" data-aos="fade-up" data-aos-delay="300">Choose us for web development Service because we offer tailored solutions that align with your unique business goals. Our experienced team ensures top-notch quality, timely delivery, and ongoing support.</p>
            </div>
            <div className="col-lg-10 m-auto">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons4_nc7f2i_2.svg" className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Team of Experts</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">Years of experience and skilled professionals ensure diverse expertise in web development, guaranteeing precision and excellence throughout your project&apos;s execution.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons1_ndphnj.svg" className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Custom Solutions</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">We understand that every business is unique. Our custom solutions are tailored to your specific needs, ensuring that your website reflects your brand identity and meets your objectives perfectly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons2_puef6c.svg" className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Responsive Design</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">Our websites are designed to adapt seamlessly to different devices and screen sizes, providing an optimal user experience for visitors regardless of how they access your site.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons3_rmv67y.svg" className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Quality Assurance</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">Rigorous testing ensures flawless website functionality, delivering a smooth, error-free user experience through integrated quality assurance procedures in our development process.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons4_nc7f2i_3.svg " className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Communication</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">We prioritize clear and transparent communication, keeping you informed every step of the way and ensuring your feedback is incorporated into the final product.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD withGray">
                    <div className="cell-wrap b2b-gray-bg">
                      <Image
                        width='100'
                        height="100"
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icons5_obkhhi.svg" className="imgIcon" alt="" />
                      <div className="ps-4">
                        <h3>Customer Satisfaction</h3>
                        <p className="b2b-text letterSpacing-1 mb-0">Our ultimate goal is your satisfaction. We exceed expectations by delivering high-quality, innovative solutions that not only meet but surpass your requirements, ensuring a positive experience working with us.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
    </>
  )
}