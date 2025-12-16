import "../../src/app/services/services2.css";
import React from "react";
import callico1 from "../../public/img/callneedsico1.png";
import callico2 from "../../public/img/callneedsico2.png";
import callico3 from "../../public/img/callneedsico3.png";
import callico4 from "../../public/img/callneedsico4.png";
import callico5 from "../../public/img/callneedsico5.png";
import "./callcenter.css";
import Link from "next/link";
export default function WebApplication() {
  return (
    <div className="main_needs">
      <div className="container  pd-3  main_needs_inner ">
        <div className="row  justify-content-center pb-lg-5 pb-sm-0">
          <div className="col-lg-8 pt-5">
            <div className="text-center needs_heading ">
              <h2
                className="b2b-main-heading text-center capmton  justify-content-center cs_ph_heading"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Why Choose Base<span className="b2b_2">2</span>Brand For Your <br /> Customer Support Needs?
              </h2>
              {/* <h2
                className="b2b-main-heading text-center mb-4 capmton cs_ph_heading"
                data-aos="fade-up"
                data-aos-delay="300"
              >
               
              </h2> */}
            </div>
          </div>
          <div className="col-lg-10 w-100 ">
            <div className="row footer-menue justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-12 hoverGradient blueGD column-before"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 d-flex p-2 pb-4">
                    <span className="arrow-icon-gk callcenarrow">
                      <img src={callico1.src} alt="" className="callarrow" />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds capmton">
                      {/* <div className="callneeds_inner">Professional & Experienced Team: </div>  */}
                      At Base2Brand, we pride ourselves on having a highly
                      skilled and experienced team ready to handle all aspects
                      of customer interaction. Our agents are trained to provide
                      the highest level of professionalism and attention to
                      detail.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 hoverGradient blueGD column-before"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 d-flex p-2 pb-4">
                    <span className="arrow-icon-gk callcenarrow">
                      <img src={callico2.src} alt="" className="callarrow" />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds capmton">
                      {/* <div className="callneeds_inner">Cost-Effective Solutions: </div>  */}
                      We offer cost- effective customer support services
                      tailored to your business needs. With flexible pricing
                      options, we ensure you get the best value without
                      compromising on quality.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 hoverGradient blueGD column-before"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 d-flex p-2 pb-4">
                    <span className="arrow-icon-gk callcenarrow">
                      <img src={callico3.src} alt="" className="callarrow" />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds capmton">
                      {/* <div className="callneeds_inner">24/7 Availability:</div> */}
                      We understand that customer needs don’t stop, which is why
                      we offer 24/7 customer support services. Whether you
                      operate globally or need after-hours support, we’re here
                      to assist whenever you need us.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-3 hoverGradient blueGD column-before"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 d-flex p-2 pb-4">
                    <span className="arrow-icon-gk callcenarrow">
                      <img src={callico4.src} alt="" className="callarrow" />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds capmton">
                      {/* <div className="callneeds_inner">Scalable Services:</div> */}
                      As your business grows, so As your business grows, so do
                      your customer service needs. Base2Brand provides scalable
                      customer support solutions that adapt to your evolving
                      business requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-3 hoverGradient blueGD column-before"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 d-flex p-2 pb-4">
                    <span className="arrow-icon-gk callcenarrow">
                      <img src={callico5.src} alt="" className="callarrow" />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds capmton">
                      {/* <div className="callneeds_inner">Seamless Integration:</div> */}
                      Our customer support servic integrate smoothly with your
                      existing CRM systems, ensuring that all customer
                      information is accessible and up-to-date for a seamless
                      experience.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-sm-12 col-md-12 pt-lg-5 pb-lg-5 p-4 ps-0 pe-0 text-center d-flex align-items-center order-md-2 order-1 d-flex justify-content-center"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="aboutHeader aos-init aos-animate " data-aos="fade-up">
          <h1 className="b2b-heading capmton">Get Started Today</h1>
          <p className="b2b-text col-lg-8 m-auto get_text p-2 pt-pb-0 ">
            Ready to take your customer service to the next level? Contact
            Base2Brand to learn more about how our Customer Support services can
            enhance your customer experience. Whether you need full-time
            support, after-hours assistance, or occasional service, we’re here
            to help.
          </p>
          <div className="mt-lg-4 mt-md-3 mt-2 text-center">
            {/* <Link href="/customer-portform"> */}
            <button className="b2b-btn b2b-btn-sm">Get a Free Demo </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
