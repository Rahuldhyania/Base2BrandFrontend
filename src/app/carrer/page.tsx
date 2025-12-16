"use client";

import React from "react";
import Header from "../../../component/header";
import blog from "../../../public/img/blog.png";
import carrer from "../../../public/img/carrer.png";
import carrer1 from "../../../public/img/carrer2.png";
import check from "../../../public/img/check.png";
import Typewriter from "typewriter-effect";
import Footer from "../../../component/footer";
import "./carrer.css";
import "../quote.css";
import { useState } from "react";
import Request from "../request-form";

export default function Carrer() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };
  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };
  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };
  return (
    <>
      <Header />
      <div className="bgblack">
        <div
          className="  pt-5"
          style={{
            backgroundImage: `url(${blog.src})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            paddingBottom: "3rem",
          }}
        >
          <div className="row w-100 pl-5">
            <div className="col-md-12 text-center text-white mt-5">
              <Typewriter
                options={{
                  strings: ["Career"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="mb-5 mt-4 army">
                Base2Brand, where innovation meets opportunity. Join us as we
                pioneer the future of IT together.
              </p>
            </div>
          </div>
        </div>

        <section className="carrer_section p-4">
          <div className="row w-100 justify-content-center text-center text-white">
            <div className="col-md-12 mb-5">
              <h1 className="base_logo">
                Why <b>Base2Brand?</b>
              </h1>
              <p>
                Join Base2Brand for innovative projects, collaborative culture,
                continuous learning, impactful work, supportive environment,
                growth opportunities, and a chance to make a real difference in
                the world of technology.
              </p>
            </div>
            <div className="col-md-4">
              <img src={carrer.src} className="carrer_icon" alt="" />
              <h2 className="car_desc">Balancing Fun with Productivity</h2>
              <p>
                Creating a vibrant workplace where productivity meets enjoyment
              </p>
            </div>
            <div className="col-md-4">
              <img src={carrer1.src} className="carrer_icon" alt="" />
              <h2 className="car_desc">Collaborative Environment</h2>
              <p>Our teamwork makes innovation flourish</p>
            </div>
          </div>
        </section>

        <div className="container career-container">
          <div className="text-center text-white mt-5">
            <h3>Open Positions</h3>
            <p className="mb-5">
              Check Out Our Open Positions: Your Next Career Opportunity Awaits!
              Explore diverse roles and join us in shaping the future of
              technology. Unlock your potential with Base2Brand today.
            </p>
          </div>
          <div className="bg-black rounded p-4 mb-4 shadow">
            <div className="open_box d-flex justify-content-between align-items-center ">
              <div className="pos">
                <h2 className="ui_ux">UI/UX Designer</h2>
                <div className="feature_b2b d-flex flex-wrap">
                  <ul className="pl-0 mb-0">
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Create wireframes, prototypes, and mockups to
                        communicate design concepts effectively and iterate
                        based on feedback.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Design intuitive and visually appealing user interfaces
                        for web and mobile applications, ensuring seamless user
                        experiences.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Work closely with developers to ensure designs are
                        implemented accurately and efficiently, maintaining
                        design integrity throughout the development process.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Continuously iterate on designs based on user feedback,
                        usability testing results, and data analysis to optimize
                        user engagement and satisfaction.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded p-4 mb-4 shadow">
            <div className="open_box d-flex justify-content-between align-items-center ">
              <div className="pos">
                <h2 className="ui_ux">Video Editor</h2>
                <div className="feature_b2b">
                  <ul className="pl-0 mb-0">
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      {" "}
                      <p>
                        Edit raw footage into engaging video content, ensuring
                        high-quality output that aligns with project objectives
                        and brand standards.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      {" "}
                      <p>
                        Incorporate visual effects, graphics, and animations as
                        needed to enhance the overall production value and
                        communicate key messages effectively.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      {" "}
                      <p>
                        Work closely with clients to understand their vision and
                        feedback, and make necessary revisions to video edits to
                        meet their expectations and requirements.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Manage video assets, including organizing files,
                        maintaining a library of footage and graphics, and
                        ensuring proper version control.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded p-4 mb-4 shadow">
            <div className="open_box d-flex justify-content-between align-items-center ">
              <div className="pos">
                <h2 className="ui_ux mb-4">Shopify Developer</h2>
                <div className="feature_b2b">
                  <ul className="pl-0 mb-0">
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Develop and customize Shopify themes and templates to
                        create visually appealing and user-friendly online
                        stores that meet client specifications and brand
                        requirements.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Implement and configure Shopify apps and plugins to
                        extend platform functionality and enhance the overall
                        shopping experience for customers.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Troubleshoot and debug technical issues, such as code
                        errors and compatibility issues, and implement solutions
                        to ensure smooth operation and functionality of Shopify
                        stores.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Collaborate with design and marketing teams to integrate
                        branding elements, graphics, and promotional content
                        into Shopify stores, ensuring a cohesive and engaging
                        user experience.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded p-4 mb-4 shadow">
            <div className="open_box d-flex justify-content-between align-items-center ">
              <div className="pos">
                <h2 className="ui_ux mb-4">Business Development Executive</h2>
                <div className="feature_b2b">
                  <ul className="pl-0 mb-0">
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Develop and maintain relationships with prospects and
                        clients, understanding their needs and challenges, and
                        presenting tailored solutions to address them.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Collaborate with internal teams, including sales,
                        marketing, and product development, to develop
                        customized proposals and presentations.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      {" "}
                      <p>
                        Identify and research potential clients and market
                        segments, building a strong pipeline of leads and
                        opportunities for business growth.
                      </p>
                    </li>
                    <li className="d-flex flex-wrap align-items-start mb-2">
                      <p>
                        Track and analyze sales performance metrics, such as
                        conversion rates and revenue growth.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 quote" data-aos="zoom-in">
          <div className="quote-box text-white text-center">
            <h1 className="mb-3">Let&apos;s Get to Work</h1>
            {/* <p className='mb-4'>Ready to reach your business goals, faster? Drop us a line today.</p> */}
            <button
              type="button"
              className="btn btn-outline-primary m-auto ps-5 pe-5"
              onClick={toggleModal}
            >
              Join Us
            </button>
          </div>
        </div>

        <Footer />
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
