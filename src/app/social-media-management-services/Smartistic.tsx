"use clinet"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Smartistic(): JSX.Element {
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
    <div>
      <div className="artistic_container">
        <div className="container pt-5 pb-5">
          <div className="text-center pt-lg-5 pb-lg-5">
            <h2 className="cool_subheading_text2 sm_orange font_600" data-aos="fade-up">
              Custom & <span className="sm_skyblue"> Artistic Designs </span>
            </h2>
            <h2 className="cool_subheading_text2 text-white font_500" data-aos="fade-up">
              for Your Social Media Success
            </h2>

            <p className="m-0 b2b-text" data-aos="fade-up">
              Our designs are not just about looking good; they’re about helping
              you achieve your goals. With a unique blend of artistry and
              strategy, we provide creative social media post design solutions
              that ensure your brand stands out and stays top of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="poster_card sm_black_bg">
        <div ref={animatedBarRef} className="cus_container pt-lg-5 pb-lg-5">
          <div className="row justify-content-center mt-5 poster_card_width">
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card1">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_2_scn4ez.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card2">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_xrqvsw.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 me-1  ${isActive ? "poster_card_ani" : ""}`}>
              <div className="sm_poster_cardimg smp_card3">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card4">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_5_llgidz.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card5">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_djkxsw.png" alt="" width={1000} height={500} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center poster_card_width">
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card1">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_dhefwt.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card2">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_1_vkzdse.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 me-1  ${isActive ? "poster_card_ani" : ""}`}>
              <div className="sm_poster_cardimg smp_card3">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_2_d35fwt.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card4">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_vdsamo.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card5">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_4_dvszpi.png" alt="" width={1000} height={500} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5 poster_card_width">
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card1">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_6_p03qef.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4  ${isActive ? "poster_card_ani" : ""}`} >
              <div className="sm_poster_cardimg smp_card2">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_cblqjb.png" alt="" width={1000} height={500} />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xxl-3 mt-4 me-1  ${isActive ? "poster_card_ani" : ""}`}>
              <div className="sm_poster_cardimg smp_card3">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_hxefem.png" alt="" width={1000} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
