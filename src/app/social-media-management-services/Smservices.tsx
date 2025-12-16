
import Image from "next/image";
import React from "react";

export default function Smservicesfact() {
  return (
    <div className="position-relative">
      <div className="black_sm_gradient" style={{ height: "120px", top: "-100px" }}>

      </div>
      <div className="sm_black_bg">
        <div className="cus_container">
          <div className="sm_services_poster">
            <div className="bg_poster_line_outer">
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480861_3_mjojei.png" alt="" width={1000} height={500} />
            </div>
            <div className="row pt-lg-5 pb-5 top-0 w-100 bg_poster_line">
              <div className="col-12 col-lg-6 pt-lg-5 pb-lg-5 d-flex justify-content-center" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_1_xmjftr.png"
                  alt=""
                  width={1000}
                  height={500}
                  className="services_poster"
                />
              </div>
              <div className="col-12 col-lg-6 pt-lg-5 pb-lg-5 mt-4 mt-lg-0 d-flex align-items-center" data-aos="fade-up">
                <div className="text-start">
                  <div className="position-relative">
                    <h2 className="sm_heading_text sm_orange font_700">
                      Social Media <br />
                      <span className="text-white font_500">Graphic Design</span>
                    </h2>
                    <h2 className="sm_banner_text sm_skyblue font_800">
                      Services
                    </h2>
                    <p className="m-0 b2b-text">
                      Elevate your brand’s digital presence with stunning,
                      impactful <br /> designs that captivate and engage your
                      audience.
                    </p>
                    <Image
                      data-aos="fade-up-right"
                      data-aos-duration="1000"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_ygbspz.png"
                      alt=""
                      width={1000}
                      height={500}
                      className="share_arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wanna see more? */}
        <div className="cus_container pt-lg-5 pb-5">
          <div className="text-center">
            <h2 className="cool_subheading_text2 sm_skyblue" data-aos="fade-up">
              Wanna see more?
            </h2>
            <p className="m-0 b2b-text" data-aos="fade-up">
              And many more works, experiments and Designs are <br /> on Behance
              profile.
            </p>
            <div className="pt-4 position-relative" data-aos="fade-up">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_2_gtsy7w.png"
                alt=""
                width={1000}
                height={500}
                className="behance_left_flowting"
              />
              <a href="https://www.behance.net/base2brand" target="_blank">
                <button className="sm_btn b2b-btn b2b-btn-sm m-0">
                  See more on Behance
                </button>
              </a>
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_1_hzsv6z.png"
                alt=""
                width={1000}
                height={500}
                className="behance_right_flowting"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
