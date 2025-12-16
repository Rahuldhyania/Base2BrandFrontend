"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

const SwiperCarousel = () => {
  const clientData = [
    {
      cusreview:
        "Base2Brand transformed our website completely. Their UI/UX design skills are exceptional!",
      cli_img:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_35_bqs6wa.png",
      cli_name: "John Smith",
      cli_deg: "CEO, TechCorp"
    },
    {
      cusreview:
        "The mobile app they designed increased our user engagement by 300%. Highly recommended!",
      cli_img:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_37_q8dpxu.png",
      cli_name: "Sarah Johnson",
      cli_deg: "Marketing Director"
    },
    {
      cusreview:
        "Professional team with creative solutions. Delivered beyond our expectations.",
      cli_img:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_38_mrj33y.png",
      cli_name: "Michael Brown",
      cli_deg: "Product Manager"
    }
  ];

  return (
    <div className="testimonial-container">
      <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".testimonial-button-next",
          prevEl: ".testimonial-button-prev"
        }}
      >
        {clientData.map((data, index) =>
          <SwiperSlide key={index}>
            <div className="client_ui_container pb-5">
              <div className="ui_clinet_rating pt-1">
                <Image
                  src={data.cli_img}
                  alt="5-star rating"
                  width={150}
                  height={30}
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <div className="testimonial-button-prev" />
      <div className="testimonial-button-next" />
    </div>
  );
};

export default SwiperCarousel;
