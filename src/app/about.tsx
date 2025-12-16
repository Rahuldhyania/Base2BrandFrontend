'use client';
import React, { useState } from "react";
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup';
import Request from "./request-form";
import './our-project.css'
// import { Player } from "@lottiefiles/react-lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";

const images = {
  frontend: [
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/html.svg", alt: "HTML", width: 50, height: 50, text: "At our company, we leverage cutting-edge technologies for front-end development to deliver seamless user experiences. From React to Angular, our team ensures fast, responsive, and visually stunning websites and applications.", },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/csslogo.svg", alt: "CSS", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/angularlogo.svg", alt: "Angular", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/JSlogo.svg", alt: "JavaScript", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/reactlogo.svg", alt: "React", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480015_nbc1c9.svg", alt: "Flutter", width: 50, height: 50 },
  ],
  backend: [
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/php_grv0hr.svg", alt: "PHP", width: 50, height: 50, text: "Our backend development utilizes the latest technologies and robust architectures to ensure secure, scalable, and high-performing applications, providing seamless data management and optimized server performance." },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/nodejs_vzki5i.svg", alt: "Node.js", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/jsbackend_xo39ci.svg", alt: "JavaScript Backend", width: 50, height: 50 },
  ],
  ecommerce: [
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify_ztvvyu.svg", alt: "Shopify", width: 50, height: 50, text: 'We build dynamic e-commerce platforms using advanced tools, enabling smooth transactions, secure payment gateways, and user-friendly interfaces that drive online sales and enhance customer experiences.' },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/woocemerse_uvlwes.svg", alt: "WooCommerce", width: 50, height: 50 },

    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emet_e3svbz.svg", alt: "Emet", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/wordpress_dcdx7h.svg", alt: "WordPress", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopifyplus_og8ekr.svg", alt: "Shopify Plus", width: 50, height: 50 },
  ],
  framework: [
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/net_g4posx.svg", alt: ".NET", width: 50, height: 50, text: "With expertise in modern frameworks like .Net, Laravel, and Node.js, we develop flexible, reliable, and maintainable applications tailored to meet your specific business needs." },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/f1_kfw75d.svg", alt: "Framework 1", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/firebase_gh65he.svg", alt: "Firebase", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/codeintiger_lwvxzh.svg", alt: "CodeIgniter", width: 50, height: 50 },
    { src: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cakephp_s9as6h.svg", alt: "CakePHP", width: 50, height: 50 },
  ]
};



export default function Homeabout() {

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
  useCountUp({
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
    end: 0
  });

  const [activeTab, setActiveTab] = useState('frontend'); // State for active tab


  const renderText = (category) => (
    images[category].map(({ text }, index) => (
      <>
        {text}
      </>


    ))
  );


  const renderImages = (category) => (
    images[category].map(({ src, alt, width, height }, index) => (
      <div key={index} className="p-0 m-1 col ph_align_tec_icon" >
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    ))
  );

  return (

    <>


      <div className="blackGradient b2b-brands-wrap ">

        <div className="b2b-container-lg py-md-5 py-sm-1 py-1" data-aos="fade-up" data-aos-delay="300">
          <div className="col-md-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <h2 className="b2b-main-heading">Technology Stack We Use</h2>
              {/* <img src="/img/underline.png" alt="" className="line_technology" /> */}
            </div>
            <h3 className="b2b-title-text">We use cutting-edge technologies to craft fully automated solutions</h3>
          </div>
          <div className="row pt-4" data-aos="fade-up" data-aos-delay="300">
            <div className="btn-col col-lg-5">
              <div className="nav flex-column nav-pills me-3 gap-lg-4 gap-md-4 gap-2 gap-md-3 btn-col" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                {Object.keys(images).map((key) => (
                  <button
                    key={key}
                    className={`nav-link  ${key === activeTab ? `${key}-active` : ''}`}
                    id={`v-pills-${key}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#v-pills-${key}`}
                    type="button"
                    role="tab"
                    aria-controls={`v-pills-${key}`}
                    aria-selected={key === activeTab}
                    onClick={() => setActiveTab(key)}

                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="contant-col col-lg-7" >
              <div className="tab-content" id="v-pills-tabContent">
                {Object.keys(images).map((key) => (
                  <div
                    key={key}
                    className={`tab-pane fade ${key === activeTab ? 'show active' : ''}`}
                    id={`v-pills-${key}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${key}-tab`}
                  >
                    <p className="col-12 b2b-sub-text aos-init aos-animate pt-lg-2 pt-2">
                      {renderText(key)}
                    </p>
                    <div className="row row-cols-lg-4 row-cols-3 justify-content-center justify-content-lg-start pt-lg-2 pt-2 gap-4">
                      {renderImages(key)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="radialGradient">
        <div className="b2b-container-lg">
          <div className='progress-column b2b-achievements'>

            <div className='row'>
              <div className='col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                <h2 className='text-center b2b-sub-heading-bold ttext-capitalize' data-aos="fade-up">Our Achievements &amp; Milestones</h2>
                <p className='b2b-text text-center ' data-aos="fade-up">Explore our company&apos;s remarkable achievements, milestones, and records that showcase our success and expertise</p>
              </div>
            </div>

            <div className='b2b-container-lg' data-aos="fade-up">
              <div className='row progress-count d-flex flex-wrap justify-content-between'>
                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap '>
                    <div>
                      <Image alt="" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_wa4fzh_1.svg"
                        width="37" height="50" /></div>
                    <div className='ms-2 w-100'>
                      <h2 className='text-white text-start ps-2'><CountUp end={6} enableScrollSpy />
                        +</h2>
                      <p className='text-white text-start  ps-2'>Years of IT Industury</p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                    <div><Image alt="" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_xjnb1o.svg" width="50" height="50" /></div>
                    <div className='ms-2 w-100'>
                      <h2 className='text-white text-start ps-2'><CountUp end={423} enableScrollSpy />+</h2>
                      <p className='text-white text-start ps-2'>Successfull Project</p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                    <div className="our_team_svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 20 20">
                        <rect width="20" height="20" fill="none" />
                        <path fill="#B6CCFF" d="M8.5 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M10 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-11 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0M5 15l.1-.002q.103.509.304.975A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.129a2.24 2.24 0 0 0-.365 1H3.25a.25.25 0 0 0-.25.25V13a2 2 0 0 0 2 2m8.975-6c-.116-.57-.62-1-1.225-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 4.25 3.992a5.5 5.5 0 0 1-.665-1.02A3 3 0 0 1 7 14V9.25A.25.25 0 0 1 7.25 9zm1.011 0h1.764a.25.25 0 0 1 .25.25v.35q.538.276 1 .657V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1m-.486 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 2a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                    <div className='ms-2 w-100'>
                      <h2 className='text-white text-start ps-2'><CountUp end={45} enableScrollSpy  />+</h2>
                      <p className='text-white text-start ps-2'>Our Team</p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                    <div><Image alt="" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon4_ckyn0a.svg" width="43" height="50" /></div>
                    <div className='ms-2 w-100'>
                      <h2 className='text-white text-start ps-2'><CountUp end={363} enableScrollSpy />+</h2>
                      <p className='text-white text-start  ps-2'>Happy Client</p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                    <div><Image alt="" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_ucbth3.svg" width="50" height="50" /></div>
                    <div className='ms-2 w-100'>
                      <h2 className='text-white text-start ps-2'><CountUp end={350} enableScrollSpy />+</h2>
                      <p className='text-white text-start  ps-2'>Website Designed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b2b-container-lg">
        <div className="row align-items-center row-reverse-mb mt-3 mb-md-5 mb-1">
          <div className="col-lg-6 col-md-12 col-12 text-white order-md-2 order-sm-2 order-xs-2 order-2 mt-md-5" data-aos="fade-up">
            <h2 className="b2b-main-heading  text-capitalize">Have A Dream ? <br /> We Have A Team!</h2>
            <p className="b2b-sub-text" >At our place, we have a stellar team of experts dedicated to bringing your vision to life. With extensive experience and a deep understanding of diverse industries, our team is equipped to handle any challenge that comes our way.</p>
            <p className="b2b-sub-text">Throughout the project, we prioritize clear communication and transparency, guiding you through every step and addressing any doubts or questions that may arise. Despite our high-quality services, we remain committed to offering competitive pricing to ensure accessibility for businesses of all sizes.</p>
            <p className="b2b-sub-text">Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to each new endeavor, guaranteeing exceptional results that exceed expectations.</p>

          </div>
          <div className="col-lg-6 col-md-12 col-12 text-center mb-5 mb-md-0 order-md-3 order-sm-3 order-xs-3 order-3" data-aos="fade-up">

            <Player
              src='/json/home-page/lottie animation.json'
              loop
              autoplay
              className="dream_img"
            />
          </div>
          <div className="col-lg-8 col-md-12 col-12 mb-5 mb-md-0 order-lg-3 order-md-1 order-sm-1 order-xs-1 order-1" data-aos="fade-up">
            <h3 className="b2b-sub-text b2b-lightBlue-text">Our client list includes:</h3>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="check_list b2b-text"><Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg" width="14" height="11" style={{ maxWidth: "14px" }} className=' check_icon me-2' alt="" />  Startups due to our cost-effectiveness</div>
              <div className="check_list b2b-text"><Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg" width="14" height="11" style={{ maxWidth: "14px" }} className=' check_icon me-2' alt="" />  Corporates due to our reliability and scalability</div>
              <div className="check_list b2b-text"><Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg" width="14" height="11" style={{ maxWidth: "14px" }} className=' check_icon me-2' alt="" />  Industries due to our expertise and versatility</div>



            </div>
            <button className="b2b-btn b2b-btn-sm mt-4 m-0" onClick={toggleModal}> Let’s Discuss Your Project
            </button>
          </div>

        </div>
        {showModal &&
          <Request
            onCloseModal={toggleModal}
          />
        }
      </div>


    </>
  );
}
