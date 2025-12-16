
import Image from "next/image";
import React from "react";
import CountUp, { useCountUp } from "react-countup";
export default function Smfact() {
  return (
    <div className="sm_black_bg pt-lg-4">
      <div className="cus_container_con pt-lg-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-item-center position-relative khaba_img">
            <Image
              data-aos="fade-up"
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_12_1_1_ly21qw.png"
              alt=""
              width={1000}
              height={500}
              className="fact_banner"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex align-item-center">
            <div className="text-start w-100 pt-5 pt-lg-0">
              <h2
                className="banner_text_Quick sm_orange font_500"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Quick
              </h2>
              <h2
                className="sm_banner_text sm_skyblue2 font_700 fact_title_p1"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Facts
              </h2>
              <h2
                className="heading_text_About text-white font_400 fact_title_p2"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                About us
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="fact_rating pt-4 pb-4">
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/6814a15afea82ff3505d163e_shape-2-p-800.avif_neaj9n.png"
          alt=""
          width={1000}
          height={500}
          className="fact_chain_left"
        />
        <div className="cus_container_con">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-xxl-3 mt-lg-4">
              <div className="fact_rating_card">
                <div className="fr_number">
                  <CountUp end={5000} enableScrollSpy />
                  +
                </div>
                <p className="m-0 b2b-text text-center">
                  Social Media Posts in 6 <br /> Months
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 mt-lg-4">
              <div className="fact_rating_card">
                <div className="fr_number">
                  <CountUp end={8} enableScrollSpy />
                  +
                </div>
                <p className="m-0 b2b-text text-center">
                  Years of Design <br /> Experience
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 mt-lg-4 me-1">
              <div className="fact_rating_card">
                <div className="fr_number">
                  <CountUp end={500} enableScrollSpy />
                  +
                </div>
                <p className="m-0 b2b-text text-center">
                  Campaigns <br /> Collaborated
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 mt-lg-4">
              <div className="fact_rating_card">
                <div className="fr_number">
                  <CountUp end={15} enableScrollSpy />
                  +
                </div>
                <p className="m-0 b2b-text text-center">Industries Served</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xxl-3 mt-lg-4">
              <div className="fact_rating_card">
                <div className="fr_number">
                  <CountUp end={100} enableScrollSpy />
                  +
                </div>
                <p className="m-0 b2b-text text-center">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/6814a15afea82ff3505d163e_shape-2-p-800.avif_1_fxnqs4.png"
          alt=""
          width={1000}
          height={500}
          className="fact_chain_right"
        />
      </div>
    </div>
  );
}
