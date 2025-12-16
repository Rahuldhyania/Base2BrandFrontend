"use client";

import React from "react";
import name from "../../../public/img/name.png";
import "../our-project.css";

export default function ResourceFeedback() {
  return (
    <>
      {/* <div className="bgimg" style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundSize: 'cover',  
      position: 'relative',
    }}> */}
      <div className="bgimg_feed1">
        <div className="container-fluid">
          <div className="row text-white">
            <div className="col-md-12 p-0">
              <h3 className="feedback_heading mb-4 text-center fs-1">
                What Our <strong>Clients</strong> Say
              </h3>
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                            <div className="d-flex flex-wrap justify-content-start gap-10"></div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-left">
                                {" "}
                                Base2Brand exceeded our expectations! Their
                                team&apos;s professionalism and expertise made
                                the entire outsourcing process seamless. They
                                delivered a flawless website that perfectly
                                captured our brand identity.{" "}
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Emma Davis</h3>
                                  <p className="mb-0 fs-6">
                                    Social Media Manager
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                            <div className="d-flex flex-wrap justify-content-start gap-10"></div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                {" "}
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-left">
                                Impressed with Base2Brand attention to detail
                                and proactive communication. They transformed
                                our vision into a stunning website,
                                demonstrating their commitment to excellence and
                                client satisfaction.
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Alex Patel</h3>
                                  <p className="mb-0 fs-6">
                                    Small Business Owner{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-left">
                                Base2Brand exceptional technical proficiency and
                                creative flair truly set them apart. They
                                brought our website to life with innovative
                                design elements and intuitive functionality.
                                Highly recommended!
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Rachel Miller</h3>
                                  <p className="mb-0 fs-6">
                                    Marketing Director{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            <h2 className="feedback_heading mb-4 text-center">
                              Client Testimonials
                            </h2>
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                {" "}
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-left">
                                Working with Base2Brand was a game-changer for
                                our business. Their responsive approach, coupled
                                with their strategic insights, resulted in a
                                website that not only looks great but also
                                drives conversions.
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Ryan Taylor</h3>
                                  <p className="mb-0 fs-6">CEO </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                {" "}
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-left">
                                Base2Brand collaborative approach and commitment
                                to quality were evident throughout the project.
                                They listened to our needs, provided valuable
                                suggestions, and delivered a website that
                                exceeded our expectations.
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Samantha Clark</h3>
                                  <p className="mb-0 fs-6">Event Planner </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="p-5 Mainslide">
                      <div className="container">
                        <div className="row pl-5 pr-5">
                          <div
                            className="col-md-12 position-relative"
                            data-aos="fade-left"
                          >
                            {/* <p>Read what our clients have to say! Their feedback speaks volumes about our dedication to excellence. From prompt communication to stellar results, our clients consistently praise our commitment to quality and satisfaction. Check out their testimonials to learn more about their experiences working with us!</p> */}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <div className="col-md-12" data-aos="fade-right">
                            <div className="bg_feedback">
                              <div className="mb-3">
                                {" "}
                                <img
                                  className="name_latter"
                                  src={name.src}
                                  alt="Product"
                                />
                              </div>
                              <p className="fs-6 text-center">
                                Base2Brand expertise in web development is
                                unmatched. They navigated complex challenges
                                with ease, delivering a robust and scalable
                                solution that has significantly enhanced our
                                online presence. Thank you for your outstanding
                                work!
                              </p>
                              <div className="d-flex justify-content-end mt-4">
                                <div className="feedback_user ml-3">
                                  <h3 className="mb-0 fs-6">Daniel Wong</h3>
                                  <p className="mb-0 fs-6">Startup Founder</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
