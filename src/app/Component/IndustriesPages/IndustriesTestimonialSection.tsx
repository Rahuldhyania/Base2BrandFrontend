"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsdata = [
  {
    id: 1,
    name: "Dr. James Whitmore",
    role: "General Physician",
    date: "May 2024",
    content:
      "Base2Brand delivered an exceptional healthcare website design that reflects patient trust and professionalism. Their expertise improved appointments and overall engagement significantly.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Hospital Operations Manager",
    date: "February 2025",
    content:
      "Our hospital needed a scalable, secure platform. Base2Brand’s healthcare web design improved speed, clarity, and workflows, enhancing patient and staff experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Dental Surgeon",
    date: "January 2024",
    content:
      "Base2Brand created a clean, patient-friendly healthcare website design. It improved online enquiries, credibility, and accessibility across all devices.",
    rating: 5
  },
  {
    id: 4,
    name: "Suresh Iyer",
    role: "Healthcare IT Administrator",
    date: "December 2025",
    content:
      "Security and compliance were critical. Base2Brand built a robust, scalable healthcare website design aligned with data protection standards.",
    rating: 4
  },
  {
    id: 5,
    name: "Dr. Ritu Malhotra",
    role: "Clinical Psychologist",
    date: "November 2023",
    content:
      "The calm, professional healthcare web design Base2Brand created improved engagement and reduced appointment drop-offs effectively.",
    rating: 5
  },
  {
    id: 6,
    name: "Daniel Thompson",
    role: "Diagnostic Center Director",
    date: "November 2023",
    content:
      "Our new healthcare website design modernized our digital presence, increased online bookings, and strengthened brand authority.",
    rating: 4
  }
];
interface Testimonial  {
  testimonials? : any
}
const TestimonialSlider = ({testimonials}:Testimonial) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);


  const handleSwiperInit = swiper => {
    swiperRef.current = swiper;

    setTimeout(() => {
      if (prevRef.current && nextRef.current && paginationRef.current) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.params.pagination.el = paginationRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }, 100);
  };

  return (
    <section className="testimonial_slider_section b2b-black-bg pb-5 pt-md-5">
      <div className="xxl_container py-4">
        <div className="slider_header">
          <h2 className="SolutionAccelerator_heading text-white">
            Client <span className="gradient_text"> Testimonial</span>
          </h2>
        </div>

        <div className="slider_wrapper pt-5">
          <Swiper
            modules={[Navigation, Pagination,Autoplay ]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            onSwiper={handleSwiperInit}
            breakpoints={{
              900: {
                slidesPerView: 2
              },
             1280: {
                slidesPerView: 3
              }
            }}
            className="testimonial_swiper"
          >
            {(testimonials || testimonialsdata).map((testimonial, index) =>
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial_slide">
                  <div className="slide_top_decoration">
                    <div className="slide_top_icon">
                      {index + 1}
                    </div>
                    <div className="slide_top_glow" />
                  </div>

                  <div className="slide_header">
                    <div className="client_info">
                      <div className="client_avatar">
                        <div className="avatar_initials">
                          {testimonial.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        {/* <div className="avatar_halo"></div> */}
                      </div>
                      <div className="client_details">
                        <h3 className="client_name">
                          {testimonial.name}
                        </h3>
                        <p className="client_role">
                          {testimonial.role}
                        </p>
                        <div className="client_date">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slide_quote_container">
                    <div className="quote_icon_left">"</div>
                    <div className="slide_content">
                      <p className="testimonial_content">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="quote_icon_right">"</div>
                  </div>

                  <div className="slide_footer">
                    <div className="rating_container">
                      <div className="rating_stars">
                        {[...Array(testimonial.rating)].map((_, i) =>
                          <span key={i} className="star">
                            ★
                          </span>
                        )}
                      </div>
                      <div className="rating_label">
                        {testimonial.rating}/5 Rating
                      </div>
                    </div>

                    <div className="slide_corner_badge">
                      <svg
                        width="20"
                        height="20" 
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="slide_bottom_ornament" />
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          <div className="slider_controls">
            <div className="controls_middle">
              <div className="swiper-pagination-custom" ref={paginationRef} />
            </div>
            <div className="d-flex gap-3">
              <button
                className="swiper-button-prev-custom"
                ref={prevRef}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="swiper-button-next-custom"
                ref={nextRef}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
