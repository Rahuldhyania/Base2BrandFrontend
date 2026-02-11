'use client'
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const sloutionData1 = [
  {
    id: 1,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "We deliver scalable e-commerce solutions including store development, payment integration, performance optimization, security, analytics globally.",
    cardLink: ""
  },
  {
    id: 2,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "We provide tailored solutions for beauty brands including e-commerce platforms, CRM systems, inventory management, automation.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Our solutions support fitness businesses with app development, booking systems, data tracking, cloud platforms, engagement.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "We build solutions including AI development, IoT integration, data analytics, automation, cloud infrastructure, and security.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "We create digital solutions for food businesses including POS systems, online ordering, inventory management, automation.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 6,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "We deliver scalable e-commerce solutions including store development, payment integration, performance optimization, security, analytics globally.",
    cardLink: ""
  },
  {
    id: 7,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "We provide tailored solutions for beauty brands including e-commerce platforms, CRM systems, inventory management, automation.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Our solutions support fitness businesses with app development, booking systems, data tracking, cloud platforms, engagement.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "We build solutions including AI development, IoT integration, data analytics, automation, cloud infrastructure, and security.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "We create digital solutions for food businesses including POS systems, online ordering, inventory management, automation.",
    cardLink: ""
  }
];
const sloutionData2 = [
  // {
  //   id: 1,
  //   cardimage: "/newhomepage/Works across channels.webp",
  //   cardTitle: "Works across channels",
  //   carddescription:
  //     "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
  //   cardLink: ""
  // },
  {
    id: 2,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "We build digital platforms for real estate enabling property listings, workflows, automation, analytics, secure integrations.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "We create education platforms supporting e-learning, virtual classrooms, content management, analytics, automation, and cloud access.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "We develop scalable SaaS products with robust architecture, seamless integrations, automation, security layers, performance optimization.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "We design systems for automotive businesses covering diagnostics, fleet management, automation, analytics, and connected operations.",
    cardLink: ""
  },
  {
    id: 6,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "We power travel brands with booking platforms, customer engagement tools, automation, analytics, mobile experiences, scalability.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 7,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "We build digital platforms for real estate enabling property listings, workflows, automation, analytics, secure integrations.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "We create education platforms supporting e-learning, virtual classrooms, content management, analytics, automation, and cloud access.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "We develop scalable SaaS products with robust architecture, seamless integrations, automation, security layers, performance optimization.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "We design systems for automotive businesses covering diagnostics, fleet management, automation, analytics, and connected operations.",
    cardLink: ""
  },
  {
    id: 11,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "We power travel brands with booking platforms, customer engagement tools, automation, analytics, mobile experiences, scalability.",
    cardLink: ""
  }
];
const SolutionsCardsph = () => {
  return (
    <div className="b2b-black-bg py-5">
      <div className="b2b-container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2
                className="b2b-heading text-center text-capitalize"
                data-aos="fade-up"
              >
                Industry-Specific Strategies That Perform
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          centeredSlides={true}
          speed={1000}
          modules={[Autoplay]}
          slidesPerView={1.3}
        >
          {sloutionData1.map((data, index) =>
            <SwiperSlide key={index}>
              <div className="sloutioncard p-3" key={index}>
                <Image
                  src={data.cardimage}
                  alt={data.cardTitle}
                  width={1000}
                  height={500}
                  className="sloutioncardimage"
                />
                <div className="pt-3">
                  <h4 className="sloutiontitle text-white">
                    {data.cardTitle}
                  </h4>

                  <p className="sloutiondescription text-white">
                    {data.carddescription}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="pt-4">
        <Swiper
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          pagination={{
            clickable: true
          }}
          centeredSlides={true}
          speed={1000}
          modules={[Autoplay]}
          slidesPerView={1.3}
          dir="ltr"
        >
          {sloutionData2.map((data, index) =>
            <SwiperSlide key={index}>
              <div className="sloutioncard p-3" key={index}>
                <Image
                  src={data.cardimage}
                  alt={data.cardTitle}
                  width={1000}
                  height={500}
                  className="sloutioncardimage"
                />
                <div className="pt-3">
                  <h4 className="sloutiontitle text-white">
                    {data.cardTitle}
                  </h4>

                  <p className="sloutiondescription text-white">
                    {data.carddescription}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SolutionsCardsph;
