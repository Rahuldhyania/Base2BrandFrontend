"use client"
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
export default function Adstech() {
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
    <div>
      <div
        className="pt-5 pb-5"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.9527993081998425) 0%, rgba(34,24,83,1) 100%)"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-sub-heading" data-aos="fade-up">
              Our Meta Ads Strategies Drive Results with Precision <br />{" "}
              Targeting Techniques
            </h2>
            <p className="m-0 text-white" data-aos="fade-up">
              Our Facebook ad services ensure your business reaches the right
              audience at the right time. With advanced targeting <br /> tools, we
              optimize your budget, achieving a significant return on ad spend for
              most clients. Rely on the best fb ads <br /> company to deliver
              measurable growth.
            </p>
          </div>
          <div className="row justify-content-center pt-2">
            <div className="col-xl-3 col-lg-6 mt-4" data-aos="fade-up">
              <div className="tech_inner text-center">
                <p className="dev_choose_t1" style={{ color: "#ed8f03" }}>
                  Transform Your Ad Strategy with Base2Brand
                </p>
                <span className="banner_card_p text-white">
                  Maximize ROI with our Facebook ad services. As the leading fb
                  ads company, we deliver precision targeting for 3x returns on ad
                  spend.
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-4" data-aos="fade-up">
              <div className="tech_inner text-center">
                <p className="dev_choose_t1" style={{ color: "#ed8f03" }}>
                  Reach, Engage, Convert with Meta Ads
                </p>
                <span className="banner_card_p text-white">
                  Base2Brand’s advanced targeting tools ensure your campaigns hit
                  the right audience. Trust our Facebook marketing services to
                  drive measurable business growth.
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 mt-4" data-aos="fade-up">
              <div className="tech_inner text-center">
                <p className="dev_choose_t1" style={{ color: "#ed8f03" }}>
                  Results That Matter with Base2Brand
                </p>
                <span className="banner_card_p text-white">
                  Experience 3x returns with our data-driven Facebook ad services.
                  Partner with the fb ads company trusted for precision targeting
                  and optimized ad performance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
        <div className="container">
          <div className="row">
            <div className="tech_img_text_con row">
              <div className="col-lg-6 ads_text" data-aos="fade-up">
                <div className="text-start">
                  <h2 className="b2b-partners-heading">
                    Instagram Advertising: Elevate <br /> Your Social Game
                  </h2>
                  <p className="m-0 text-white">
                    Our Instagram ad agency transforms your Instagram presence with effective campaigns. We design attention-grabbing Instagram paid ads to drive traffic and engagement, increasing brand awareness by up to 60% in key demographics.
                  </p>
                  <div className="mt-4">
                    <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>Request A Quote</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ads_banner" data-aos="fade-up">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_79_oirdlt.jpg" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className="tech_img_text_con tech_img_text_con_2 row pt-5">
              <div className="col-lg-6 ads_text" data-aos="fade-up">
                <div className="text-start">
                  <h2 className="b2b-partners-heading">
                    Data-Driven Success with Digital <br /> Marketing Facebook Ads
                  </h2>
                  <p className="m-0 text-white">
                    Our Facebook marketing services leverage analytics to continuously optimize your campaigns. We use insights to increase click-through rates (CTR) by 35% and reduce cost-per-click (CPC) by 20% on average. Your growth is our priority.
                  </p>
                  <div className="mt-4">
                    <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>Request A Quote</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ads_banner" data-aos="fade-up">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_80_bcu5lu.jpg" alt="" width={1000} height={500} />
              </div>
            </div>
          </div>
        </div>
        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </div>
  );
}
