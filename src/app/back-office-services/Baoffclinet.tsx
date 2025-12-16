"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
const sliderData = [
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_6_iiednj.png",
    c_name: "Thompson ",
    c_degi: "Private Healthcare Clinic Manager",
    c_para: "Managing a busy clinic means every second counts, and Base2Brand truly came through for us. They took over our customer support services for our software, handling every query with speed, accuracy, and professionalism. Their team made a real difference in how smoothly our operations run. Truly grateful and highly recommended!"
  },
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_7_nwemxt.png",
    c_name: "Jake Miller",
    c_degi: "Accounting Firm Owner",
    c_para: "During tax season, I receive a high volume of technical queries from my customers, and Base2Brand's customer support team has been a lifesaver. Their efficiency and reliability have made a huge difference in managing client support during the busiest time of the year."
  },
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_9_dqmehk.png",
    c_name: "Olivia Harris ",
    c_degi: "Real Estate Agency",
    c_para: "Handling real estate queries can get overwhelming, but Base2Brand’s back office support team makes it seamless. They’re quick, reliable, and understand the technical side well. Their assistance has truly improved how I manage client requests and listings"
  },
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_10_kcyouv.png",
    c_name: "Michael Carter",
    c_degi: "Tech Start-up Founder",
    c_para: "Customer inquiries on my website can pile up fast, but Base2Brand’s back office support team helped me handle them with speed and precision. Their responsiveness and expertise even helped turn those inquiries into valuable leads."
  },
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_8_s7itqm.png",
    c_name: "Williams",
    c_degi: "Beauty Product Retailer",
    c_para: "I was having trouble managing customer orders on my store website, but Base2Brand stepped in and handled it like pros. They were attentive, quick to act, and genuinely supportive. As a beauty product seller, their help kept my customers satisfied—and me stress-free"
  },
  {
    c_img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_13_uihcce.png",
    c_name: "Charlotte Evans",
    c_degi: "Event Planner ",
    c_para: "I had several queries about scheduling and managing client bookings, and the back office support system was amazing. They responded quickly, explained everything clearly, and really understood my needs as an event planner. Their help made my workflow so much smoother!"
  }
]
export default function Baoffclinet() {

  return (
    <div>
      {/* Client Testimonial */}
      <div className='pt-5 pb-5' style={{ backgroundColor: "#1f1a38", position: "relative" }}>
        <div className="client_left_side">
          <div className="c_left_inner">
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_18_xw5g2i.png'
              alt=''
              width={1000}
              height={500}
            />
            <div className="client_left_img1 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_10_kcyouv.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
            <div className="client_left_img2 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_13_uihcce.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
            <div className="client_left_img3 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_6_iiednj.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-heading trust_title_img">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_87_oq4pbm.png'
                alt=''
                width={1000}
                height={500}
              />
              Client <span className='b2b_2color handdrawn'>Testimonials</span>
            </h2>
          </div>

          <div className="slider_section">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true,
              }}
              speed={1000}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
            >
              {sliderData?.map((data, index) =>
                <SwiperSlide key={index}>
                  <div className='clinet_container'>
                    <div className='clinet_con_inner'>
                      <div className="clinet_upper">
                        <div className="slider_cotss">
                          <Image
                            src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480406_eqiuov.png'
                            alt=''
                            width={1000}
                            height={500}
                          />
                        </div>
                        <div className="client_img_ph">
                          <div className="clinet_img">
                            <Image
                              src={data.c_img}
                              alt=''
                              width={1000}
                              height={500}
                            />
                          </div>
                          <div className="clinet_name_degi">
                            <h4 className='text-white'>{data.c_name}</h4>
                            <p style={{ color: "#C7C5C5" }}>{data.c_degi}</p>
                          </div>
                        </div>
                      </div>
                      <div className="clinet_lower pt-4">
                        <div className="line_container">
                          <hr />
                        </div>
                        <div className="clinet_para_con b2b-text text-white">
                          {data.c_para}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
        <div className="client_right_side">
          <div className="c_right_inner">
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_19_kh3sym.png'
              alt=''
              width={1000}
              height={500}
            />
            <div className="client_right_img1 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_9_dqmehk.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
            <div className="client_right_img2 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_8_s7itqm.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
            <div className="client_right_img3 client_floting_img">
              <Image
                src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_7_nwemxt.png'
                alt=''
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Scale section */}
      <div className='pt-5 pb-5' style={{ backgroundColor: "#1f1a38" }}>
        <div className="scale_bg_img">
          <div className="text-center">
            <h2 className="baoff_cus_heading">
              <span className="b2b_2color cus_fontw_title">
                Ready to scale your <span className='handdrawn handdrawn_white'>business</span> <br />
              </span>
              <span className="baoff_bar_heading">
                <span className='text-white'>with</span> <span className='b2b_voilet'> smart back office <br /> customer support?</span>
              </span>

            </h2>
          </div>
          <div className="mt-5 text-center cacle_title_img position-relative">
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_jxgwo4.png'
              alt=''
              width={1000}
              height={500}
              className='baoff_cruve_arrow'
            />
            <Link href='/contact-us'>
              <button className='b2b-btn b2b-btn-sm m-0'>Let’s connect today</button>
            </Link>
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_dh6hjf.png'
              alt=''
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
