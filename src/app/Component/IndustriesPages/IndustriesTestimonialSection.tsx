"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechNova Solutions",
      date: "March 2024",
      content:
        "The attention to detail and strategic approach delivered exceptional ROI. Their expertise in Shopify development is unparalleled in the industry.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Director, Digital Innovations",
      date: "February 2024",
      content:
        "From concept to launch, the team delivered excellence at every stage. Our conversion rates improved dramatically and customer satisfaction is at an all-time high.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Founder, UrbanStyle Co.",
      date: "January 2024",
      content:
        "Working with this team transformed our e-commerce platform. The results exceeded all expectations and our revenue grew by 300% in just 6 months.",
      rating: 5
    },
    {
      id: 4,
      name: "Robert Wilson",
      role: "Head of E-commerce",
      date: "December 2023",
      content:
        "Their innovative solutions and technical expertise helped us scale our operations seamlessly. A truly professional partnership.",
      rating: 4
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Marketing Director",
      date: "November 2023",
      content:
        "The team's dedication and problem-solving skills are remarkable. They delivered beyond our requirements and timelines.",
      rating: 5
    }
  ];

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
    <section className="testimonial_slider_section b2b-black-bg py-5">
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
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="testimonial_swiper"
          >
            {testimonials.map((testimonial, index) =>
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
