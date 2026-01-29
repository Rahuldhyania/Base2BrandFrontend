"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import Image from "next/image";
import Link from "next/link";
const testimonials = [
  {
    id: 1,
    name: "Deepak Dhingra",
    designation: "CEO, Founder",
    company: "VIP NUMBER SHOP",
    companyUrl: "https://www.vipnumbershop.com/",
    companylogo: "/newhomepage/viplogo.avif",
    country: "India",
    flag: "Ind",
    image: "/newhomepage/Darrin Lipscomb.webp",
    content:
      "I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future."
  },
  {
    id: 2,
    name: "Frank Quarato",
    designation: "Marketing Manager",
    company: "CSEM, INC.",
    companyUrl: "eurolinx",
    companylogo: "/newhomepage/Ferretly.webp",
    country: "Australia",
    flag: "🇦🇺",
    image: "/newhomepage/Daniel Bertuccio.webp",
    content:
      "Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon."
  },
  {
    id: 3,
    name: "Darrin Lipscomb",
    designation: "CEO, Founder",
    company: "Ferrety",
    companyUrl: "ferrety",
    companylogo: "/newhomepage/Ferretly.webp",
    country: "United States",
    flag: "🇺🇸",
    image: "/newhomepage/Darrin Lipscomb.webp",
    content:
      "We are a software startup and using Devbox allowed us to get an MVP to market faster and less cost than trying to build and fund an R&D team initially. Communication was excellent with Devbox. This is a top notch firm."
  },
  {
    id: 4,
    name: "Daniel Bertuccio",
    designation: "Marketing Manager",
    company: "Eurolinx",
    companyUrl: "eurolinx",
    companylogo: "/newhomepage/Ferretly.webp",
    country: "Australia",
    flag: "🇦🇺",
    image: "/newhomepage/Daniel Bertuccio.webp",
    content:
      "Their level of understanding detail, and work ethic was great. We had 2 designers, 2 developers, PM and QA specialist. I am extremely satisfied with the end deliverables. Devbox Software was always on time during the process."
  }
];

const FeedBack = () => {
  const swiperRef = useRef(null);
  return (
    <div className="px-3 b2b-black-bg py-5">
      <div
        className="row px-md-3 px-xl-5  mx-auto"
        style={{
          maxWidth: "1920px"
        }}
      >
        <h2 className="b2b-heading text-capitalize">
          Hear From Our Happy Clients
        </h2>

        <div className="pt-5">
          <div className="relative">
            <Swiper
              onSwiper={swiper => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              speed={800}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false
              // }}
              pagination={{
                el: ".custom-pagination",
                clickable: true
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next"
              }}
              spaceBetween={30}
              breakpoints={{
                320: { slidesPerView: 1 },
                1024: { slidesPerView: 2 }
              }}
            >
              {testimonials.map((data, index) =>
                <SwiperSlide className="" key={index}>
                  <div className="row">
                    <div className="col-4 col-md-5">
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={1000}
                        height={500}
                        className="feedback_profile"
                      />
                    </div>
                    <div className="col-8 col-md-7 pe-xl-5 feedbackrowright">
                      <div className="feedbackrow1">
                        <div
                          className="bg-white p-2"
                          style={{ borderRadius: "12px" }}
                        >
                          <Image
                            src={data.companylogo}
                            alt=""
                            width={1000}
                            height={500}
                            className="feedback_companylogo"
                          />
                        </div>

                        <span className="text-white">
                          {data.country}
                        </span>
                      </div>

                      <div>
                        <div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={48}
                              height={48}
                              viewBox="0 0 17 16"
                              fill="none"
                            >
                              <path
                                d="M4.16992 8C4.18034 7.58333 4.21159 7.21354 4.26367 6.89062C4.31576 6.56771 4.4043 6.28125 4.5293 6.03125C4.61263 5.88542 4.71159 5.75521 4.82617 5.64062C4.94076 5.52604 5.0918 5.42188 5.2793 5.32812C5.4668 5.23438 5.71419 5.15625 6.02148 5.09375C6.32878 5.03125 6.70638 5 7.1543 5V3C6.92513 3 6.70378 3.00781 6.49023 3.02344C6.27669 3.03906 6.07096 3.0625 5.87305 3.09375C5.60221 3.13542 5.3444 3.19271 5.09961 3.26562C4.85482 3.33854 4.62305 3.42708 4.4043 3.53125C4.0293 3.71875 3.70638 3.94531 3.43555 4.21094C3.16471 4.47656 2.94596 4.77083 2.7793 5.09375C2.53971 5.53125 2.38086 6.00521 2.30273 6.51562C2.22461 7.02604 2.18034 7.52083 2.16992 8H2.1543V13H7.1543V8H4.16992ZM11.1699 8C11.1699 7.83333 11.1751 7.67448 11.1855 7.52344C11.196 7.3724 11.2116 7.22917 11.2324 7.09375C11.2637 6.88542 11.3027 6.69271 11.3496 6.51562C11.3965 6.33854 11.4564 6.17708 11.5293 6.03125C11.6126 5.88542 11.7116 5.75521 11.8262 5.64062C11.9408 5.52604 12.0918 5.42188 12.2793 5.32812C12.4668 5.23438 12.7142 5.15625 13.0215 5.09375C13.3288 5.03125 13.7064 5 14.1543 5V3C13.6022 3 13.0996 3.04427 12.6465 3.13281C12.1934 3.22135 11.7793 3.35417 11.4043 3.53125C11.248 3.60417 11.0996 3.6875 10.959 3.78125C10.8184 3.875 10.6855 3.97917 10.5605 4.09375C10.3939 4.23958 10.2454 4.39583 10.1152 4.5625C9.98503 4.72917 9.87305 4.90625 9.7793 5.09375C9.62305 5.38542 9.50065 5.69271 9.41211 6.01562C9.32357 6.33854 9.26367 6.66667 9.23242 7C9.21159 7.16667 9.19596 7.33333 9.18555 7.5C9.17513 7.66667 9.16992 7.83333 9.16992 8H9.1543V8.70312C9.1543 8.73438 9.1543 8.76302 9.1543 8.78906C9.1543 8.8151 9.1543 8.84375 9.1543 8.875V13H14.1543V8H11.1699Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <p className="feedback_content text-white">
                            {data.content}
                          </p>
                        </div>
                        <div className="pt-4">
                          <h5 className="text-white">
                            {data.name}
                          </h5>
                          <span className="feedback_designation">
                            {data.designation} at{" "}
                            <Link href={data.companyUrl} target="_blank">
                              {data.company}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>

            <div className="pt-3 custom_navpag">
              <div className="custom-pagination" />
              <div className="d-flex gap-3">
                <div className="custom-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <rect
                      x={0.5}
                      y={0.5}
                      width={49}
                      height={49}
                      rx={24.5}
                      stroke="#BBBDBE"
                    />
                    <path
                      d="M25 31.6602L26.1719 30.4883L21.5234 25.8398H31.6602V24.1602H21.5234L26.1914 19.5117L25 18.3398L18.3398 25L25 31.6602Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="custom-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <rect
                      x={0.5}
                      y={0.5}
                      width={49}
                      height={49}
                      rx={24.5}
                      stroke="#BBBDBE"
                    />
                    <path
                      d="M25 31.6602L23.8281 30.4883L28.4766 25.8398H18.3398V24.1602H28.4766L23.8086 19.5117L25 18.3398L31.6602 25L25 31.6602Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
