"use clinet";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/modules";

import Image from "next/image";

function Carousel3DSwiper() {
  const bannerarry = [
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_djkxsw.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_xrqvsw.png",
    // "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_5_llgidz.png",
    // copy for slider
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_djkxsw.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_xrqvsw.png",
    // "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_5_llgidz.png",
    // copy for slider
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_djkxsw.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_xrqvsw.png",
    // "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_5_llgidz.png",
    // copy for slider
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_8_djkxsw.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_7_xrqvsw.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    // "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_3_zrednt.png",
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Border_5_llgidz.png"
  ];

  const [slideitem, setSlideItem] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(2);
      } else if (window.innerWidth < 1025) {
        setSlideItem(2);
      } else if (window.innerWidth < 1400) {
        setSlideItem(2);
      } else {
        setSlideItem(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="cus_container">
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        speed={1000}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slideitem}
        coverflowEffect={{
          rotate: 10,
          stretch: 5,
          depth: 200,
          modifier: 2
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {bannerarry.map((data, index) =>
          <SwiperSlide key={index}>
            <div>
              <Image src={data} alt="*" width={10000} height={300} />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default Carousel3DSwiper;
