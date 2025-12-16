'use client';

import React from "react";
import Slider from "react-slick";
import './our-project.css';
import Image from "next/image";

const feedbacks = [
  {
    imgSrc: 'https://cdn.shopify.com/s/files/1/0835/6334/8002/files/VIP-logo.png',
    text: 'I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future.',
    name: 'Deepak Dhingra',
    company: 'VIP NUMBER SHOP',
  },
  // {
  //   imgSrc: 'https://res.cloudinary.com/driveuyen/image/upload/v1735207869/base2brand_website/home/Tim_Hildebrand_vljcsq.svg',
  //   text: 'Excellent creatives, excellent ads posted. Highest quality work. Thank you! Already referred them to a friend who owns a marketing agency.',
  //   name: 'Tim Hildebrand ',
  //   company: 'DIG AGENCY',
  // },
  // {
  //   imgSrc: 'https://res.cloudinary.com/driveuyen/image/upload/v1735207931/base2brand_website/home/Askus_Anytime_Limited_aqhnbi.svg',
  //   text: 'Excellent and skilled work and advice. Arti made sure that she understood our requirements and provided consistent feedback and provision as to what was being done and why with worked examples.',
  //   name: 'Owen',
  //   company: 'Askus Anytime Limited',
  // },
  // {
  //   imgSrc: 'https://res.cloudinary.com/driveuyen/image/upload/v1735208913/base2brand_website/home/bxjhsb_ra2ohf.jpg',
  //   text: 'Excellent work! very responsive, reliable and fast! thank you so much for your work!',
  //   name: 'David Mandler',
  //   company: 'CEO & Founder at Vous Music Group Ltd',
  // },
  {
    imgSrc: 'https://cdn.shopify.com/s/files/1/0835/6334/8002/files/just-in-time_kgwkpf_3.webp',
    text: 'Was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.',
    name: 'Frank Quarato',
    company: 'CSEM, Inc.',
  },
  //today
  {
    imgSrc: ' https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dogishuman2.png',
    text: "Working with Base2Brand was fantastic. They optimized our Shopify store, improving both design and functionality. As a result, sales increased, and we saw much better customer engagement. Cart abandonment rates also dropped significantly!",
    name: 'Tamoor',
    company: 'Dog is Human',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cottonprint.png",
    text: "Base2Brand’s work on our Shopify store was exceptional. They optimized the design and functionality, which led to better customer engagement and increased sales. Our cart abandonment rate is much lower, and the overall shopping experience has greatly improved",
    name: 'Palak',
    company: 'Cotton Print Club',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ozpro.png",
    text: "Thanks to Base2Brand, our Shopify store now offers a seamless shopping experience. Their optimizations have led to improved customer satisfaction, higher sales, and reduced cart abandonment. We’re extremely pleased with the outcome!",
    name: 'Fadi',
    company: 'OzPro Building Supplies',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/susana.png",
    text: "Base2Brand revamped our Shopify store, making it more user-friendly and efficient. The enhanced design led to more conversions, and we’ve noticed a significant decrease in cart abandonment. Their work was instrumental in increasing our revenue.",
    name: 'Lily',
    company: 'Susana Monaco',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sinealhome.png",
    text: "Base2Brand’s redesign of our Shopify store has been a game-changer. Their work improved both functionality and user experience, driving more conversions and helping us reduce cart abandonment. We couldn't be happier with the results!",
    name: 'Shuan',
    company: 'Siena Home',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo-teletire.png",
    text: "Base2Brand’s expertise made a real difference for our Shopify store. Their focus on design and functionality gave us a smoother user experience, increasing conversions and significantly improving customer engagement. We’ve seen great results!",
    name: 'Scott',
    company: 'Teletire',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth-local.png",
    text: "Arti and her team went out of the way to help me setup multiple marketing campaigns on Google and Facebook. Great communication throughout the project. Will hire again soon",
    name: 'Sohaib Khan',
    company: 'Growth Local',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/readyhelp.png",
    text: "Arti has been knowledgeble and patien, also flexible with timing and always available. The work she did has been executed perfectly.",
    name: 'Elisa ',
    company: 'Ready help',
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/buy-life.png",
    text: "Excellent creatives, excellent ads posted. Highest quality work. Thank you Arti! Already referred her to a friend who owns a marketing agency",
    name: 'Tim Hildebrand ',
    company: 'Buy Life Insurance For Burial',
  },
];

const reviewSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
};

const FeedbackItem = ({ imgSrc, text, name, company }) => (
  <div className="bg_feedback">
    <div className="mb-3 reviewImgWrap">
      <Image className="name_latter object-fit-none"
        src={imgSrc}
        alt={company}
        width="100"
        height="100"
        // quality="auto" 
        loading="lazy" />
    </div>
    <p className="b2b-text text-left">{text}</p>
    <div className="mt-4 pr-5">
      <div className="feedback_user">
        <h3 className="mb-1">{name}</h3>
        <p className="mb-1">{company}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bgimg_feed1 pt-5">
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-11 col-md-11 col-11 m-auto p-0">
            <div className="text-center">
              <h3 className="b2b-main-heading text-center text-capitalize" data-aos="fade-up">
                Hear From Our Happy Clients
              </h3>
              {/* <img src="/img/underline.png" alt="" className="line_clients" /> */}
            </div>
            <div className="reviewSlider mt-5" data-aos="fade-up" data-aos-delay="500">
              <Slider {...reviewSliderSettings} className="w-100">
                {feedbacks.map((feedback, index) => (
                  <FeedbackItem key={index} {...feedback} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
