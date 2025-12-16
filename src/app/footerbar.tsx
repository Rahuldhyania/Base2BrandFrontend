import React from "react";
import Slider from "react-slick";

import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Footerbar() {
  const path = usePathname();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="p-3 logo-slider z-index-4 b2b-black-bg">
        <div className="col-md-12 text-center pt-4">
          <h3 className="b2b-partners-heading">
            Our Trusted Partners Collaborate Seamlessly To Drive Mutual Success
          </h3>
        </div>
        <div className="b2b-container-lg">
          <Slider {...settings} className="w-100">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo6_pdrvad.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo3_sr1vyn.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo1_fityqe.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo7_vofbro.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo6_pdrvad.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo3_sr1vyn.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo1_fityqe.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo7_vofbro.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/iso-logo_al1xmo.png"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />

            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/adob.png?"
              className="social_logo"
              priority
              alt=""
              // quality="auto"
              width={1000}
              height={100}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
