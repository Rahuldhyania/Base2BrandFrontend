'use client'


import Brand1 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand22_jgpbah.png";
import Brand2 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand21_w3c4f6.png";
import Brand3 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand20_byncov.png";
import Brand4 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand19_asxyje.png";
import Brand5 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand18_hoo311.png";
import Brand6 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand17_hamhar.png";
import Brand7 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand16_znnhnp.png";
import Brand8 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand15_kzscyr.png";
import Brand9 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand14_olheu1.png";
import Brand10 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand13_rxhfcu.png";
import Brand11 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand12_p5bug2.png";
import Brand12 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand11_jenf3t.png";
import Brand13 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand10_ffefor.png";
import Brand14 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand9_two4e9.png";
import Brand15 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand8_cmflwc.png";
import Brand16 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand7_o25bg6.png";
import Brand17 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand6_frkcmb.png";
import Brand18 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand5_zavc0h.png";
import Brand19 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand5_zavc0h.png";
import Brand20 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand3_zfhrbt.png";
import Brand21 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand2_bjoyct.png";
import Brand22 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand1_shqgr5.png";
import Brand23 from "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand9_two4e9.png";
import Slider from "react-slick";
import Image from "next/image";
import '../our-project.css'


interface BrandProps {
  heading?: string;
  bgcolor?: string;
  color?: string;
}

export default function BrandsLogos({ heading, bgcolor, color }: BrandProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        className={`w-100 b2b-brands-wrap radialGradient ${bgcolor === 'b2b-gray-bg' ? 'b2b-white-bg' : 'BG-RED '
          }`}
      >
        <div className="container-fluid p-0">
          <div className="b2b-container-lg">
            <h3
              className={`gk-heading-bold text-center text-uppercase ${color ? color : 'text-white'
                }`}
              data-aos="fade-up"
            >
              {heading}
            </h3>
          </div>
          <div className="logo_brand" data-aos="fade-up" data-aos-delay="300">
            <Slider {...settings} className="w-100">
              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand22_jgpbah.png" alt="Logo" width="220" height="100" />
              </div>
              <div>

                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand21_w3c4f6.png" alt="Logo" width="220" height="100" />
              </div>

              <div>


                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand20_byncov.png" alt="Logo" width="220" height="100" />
              </div>

              <div>

                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand19_asxyje.png" alt="Logo" width="220" height="100" />
              </div>

              <div>

                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand18_hoo311.png" alt="Logo" width="220" height="100" />
              </div>


              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand17_hamhar.png" alt="Logo" width="220" height="100" />
              </div>


              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand16_znnhnp.png" alt="Logo" width="220" height="100" />
              </div>


              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand15_kzscyr.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand14_olheu1.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand13_rxhfcu.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand12_p5bug2.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand11_jenf3t.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand10_ffefor.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand9_two4e9.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand8_cmflwc.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand7_o25bg6.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand6_frkcmb.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand5_zavc0h.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand4_l5qbgj.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand3_zfhrbt.png" alt="Logo" width="220" height="100" />
              </div>

              <div>

                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand2_bjoyct.png" alt="Logo" width="220" height="100" />
              </div>

              <div>

                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand1_shqgr5.png" alt="Logo" width="220" height="100" />
              </div>

              <div>
                <Image
                  className="logo_brands"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/brand23_aovhzz.png" alt="Logo" width="220" height="100" />
              </div>


            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
