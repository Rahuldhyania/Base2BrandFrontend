"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
type seo_footer_sliedr = {
  seo_sliderdata: any
}
const Seofooterslider = ({ seo_sliderdata }: seo_footer_sliedr) => {
  const [slideitem, setSlideItem] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSlideItem(1);
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
    <div
      style={{
        background:
          " linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h2 className="b2b-partners-heading">Customer Reviews</h2>
        </div>
        <div className="pt-3">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            speed={1000}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={slideitem}
          >
            {seo_sliderdata?.map((data, index) =>
              <SwiperSlide key={index}>
                <div className="seo_sllider_container">
                  <div className="seo_slider_inner">
                    <div className="sslider_con1">
                      <div className="seo_cus_img">
                        <p style={{ background: data.cus_name_color }}>{data.cus_name}</p>
                      </div>
                      <div className="seo_cus_namedigi">
                        <p className="m-0 text-white">
                          {data.cusname}
                        </p>
                        <span className="m-0">
                          {data.cusdegi}
                        </span>
                      </div>
                    </div>
                    <div className="sslider_con2">
                      <div className="cus_rating">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480822_m41uuf.png"
                          alt=""
                          width={1000}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="sslider_con3">
                      <p className="m-0 text-white banner_card_p">
                        {data.cusreview}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}


export default Seofooterslider;