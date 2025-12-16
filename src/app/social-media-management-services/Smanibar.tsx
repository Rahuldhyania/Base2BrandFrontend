"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Smanibar(): JSX.Element {
  const animatedBarRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = animatedBarRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  return (
    <div className="des_sec_bg">
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h2 className="b2b-heading">
            <span className="sm_skyblue"> Captivate Your Audience </span> with
            Creative Social <br /> Media Post Designs
          </h2>
          <p className="m-0 b2b-text">
            In today&apos;s fast-paced digital world, a strong and captivating social
            media presence is essential. Our social media graphic design
            services are tailored to create dynamic and engaging content for
            your audience. Whether it&apos;s an eye-catching post, a compelling
            banner, or a powerful story design, our creative team will deliver
            visuals that resonate with your audience and reflect your brand’s
            unique voice.
          </p>
          <div className="d-flex justify-content-center position-relative pt-4 pb-4">
            <Image
              data-aos="fade-up"
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_oiiwdf.png"
              alt=""
              width={1000}
              height={500}
              className="des_flot_left"
            />
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_9_nkeg0b.png"
              alt=""
              width={1000}
              height={500}
              className="des_aroww"
            />
            <Image
              data-aos="fade-up"
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_1_fjelca.png"
              alt=""
              width={1000}
              height={500}
              className="des_flot_right"
            />
          </div>
          <h2 className="b2b-heading sm_skyblue">Expertise in Every Pixel</h2>
          <p className="m-0 b2b-text">
            As a leading Social Media Design Company, we understand the
            importance of crafting designs that not only look stunning but also
            drive engagement. From social media creative design to optimized
            post designs, we help your brand stand out across all platforms. Our
            team specializes in creating visually compelling content that
            encourages interactions, boosts likes, and garners shares.
          </p>
        </div>
      </div>
      <div className="sm_black_b">
        <div className="container pb-5">
          <div className="text-center pb-4">
            <h2 className="b2b-heading">
              Our Social Media{" "}
              <span className="sm_skyblue">
                {" "}Graphic <br /> Design Services{" "}
              </span>
            </h2>
            <p className="m-0 b2b-text">
              We offer comprehensive social media design services that cater to
              every business need, ensuring <br /> that your online presence is
              not only beautiful but effective. Our offerings include
            </p>
          </div>

          <div
            ref={animatedBarRef}
            className={`animated_bar p-5 mt-3 ${isActive
              ? "animated_fact_bar"
              : ""}`}
          >
            <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Untitled-1_1_1_skvwwl.png" alt=""
              width={1000} height={500} className={`seating_boy ${isActive ? "seating_boy_animation" : ""}`} />
            <div className="ani_bar_con">
              <div className="ani_bar ani_trs_bar1 sm_orange_bg b2b-text">
                Animated Social Media Content
              </div>
              <div className="ani_bar ani_trs_bar2 sm_skyblue_bg_lite b2b-text">
                Ad Creative Design
              </div>
            </div>

            <div className="ani_bar_con mt-4">
              <div className="ani_bar ani_trs_bar3 sm_skyblue_bg b2b-text">
                Creative Social Media Post Design
              </div>
              <div className="ani_bar ani_trs_bar4 sm_skyblue_bg b2b-text">
                Banner Design for Social Media
              </div>
              <div className="ani_bar ani_trs_bar5 sm_skyblue_bg b2b-text">
                Custom Infographics
              </div>
            </div>

            <div className="ani_bar_con mt-4">
              <div className="ani_bar ani_trs_bar6 sm_skyblue_bg_lite b2b-text">
                Platform-Specific Graphics
              </div>
              <div className="ani_bar ani_trs_bar7 sm_orange_bg b2b-text">
                Story and Carousel Design
              </div>
            </div>
          </div>
        </div>
        <div className="sm_needs pt-0 pt-md-5 pb-5">
          <div className="cus_container">
            <div className="row">
              <div className="col-12 col-xl-6 position-relative">
                <div className="text-start">
                  <h2 className="cool_subheading_text2 text-white">
                    Why Choose Us for Your <br />
                    <span className="sm_skyblue">
                      {" "}Social Media Design Needs?
                    </span>
                  </h2>
                </div>
                <div className="pt-3 pt-lg-3 sm_scoll_banner">
                  <div className="needs_text_card">
                    <h2 className="needs_title sm_skyblue">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/button_arrow_zjvccz.png"
                        alt=""
                        width={1000}
                        height={500}
                        className="needs_arow"
                      />
                      Custom Designs for Every Brand
                    </h2>
                    <p className="m-0 b2b-text">
                      We focus on creating bespoke designs that align with your
                      brand’s voice, audience, and objectives, ensuring a personal
                      touch with every post.
                    </p>
                  </div>
                  <div className="needs_text_card mt-4">
                    <h2 className="needs_title sm_skyblue">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/button_arrow_zjvccz_1.png"
                        alt=""
                        width={1000}
                        height={500}
                        className="needs_arow"
                      />
                      Experienced Social Media Designers
                    </h2>
                    <p className="m-0 b2b-text">
                      Our team consists of skilled designers with years of experience in creating engaging content for various social platforms, ensuring a high-quality result every time.
                    </p>
                  </div>
                  <div className="needs_text_card mt-4">
                    <h2 className="needs_title sm_skyblue">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/button_arrow_zjvccz.png"
                        alt=""
                        width={1000}
                        height={500}
                        className="needs_arow"
                      />
                      End-to-End Social Media Design Services
                    </h2>
                    <p className="m-0 b2b-text">
                      From creating individual posts to complete social media campaigns, we offer a full suite of advertise graphic design services to meet your marketing needs.
                    </p>
                  </div>
                  <div className="needs_text_card mt-4">
                    <h2 className="needs_title sm_skyblue">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/button_arrow_zjvccz.png"
                        alt=""
                        width={1000}
                        height={500}
                        className="needs_arow"
                      />
                      Affordable Pricing Options
                    </h2>
                    <p className="m-0 b2b-text">
                      We believe in delivering top-notch designs at a price that suits your budget, without compromising on quality.
                    </p>
                  </div>
                  <div className="needs_text_card mt-4">
                    <h2 className="needs_title sm_skyblue">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/button_arrow_zjvccz.png"
                        alt=""
                        width={1000}
                        height={500}
                        className="needs_arow"
                      />
                      Fast Turnaround Time
                    </h2>
                    <p className="m-0 b2b-text">
                      We understand the fast-paced nature of social media and deliver designs in a timely manner to keep your campaigns on track.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 d-flex mt-4 mt-lg-0">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/service_image_ndqmdz.png" alt=""
                  width={1000} height={500} className="needs_banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
