'use client'

import React, { useState } from "react";
import Header from '../../component/header';
import Footer from '../../component/footer';
import HomeBanner from './banner-home';
import Projects from '../app/project';
import About from '../app/about';
import Brand from '../app/brand';
import Feedback from '../app/home-review';
import Career from '../app/career';
import Slider from "react-slick";
import VerticalScroll from "./vertical-scroll-sec";
import Request from "./request-form";
import PageHead from "../../component/PageHead";
import Footerbar from "./footerbar";
import Bannerposter from "./Bannerposter";

export default function Home() {
  const baseURL = "https://base2brand.com";
  const wwwURL = "https://www.base2brand.com";

  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Digital Marketing & Web & Mobile App Development Agency",
    description: "Boost your business with our Digital Marketing, Web, and Mobile App Development services. Discover expert solutions tailored to your needs. Contact us!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }

    }, 200);
  };

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
    <>
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />

      <HomeBanner />
      {/* <Bannerposter /> */}
      <div className="bg_home b2b-overflow-hidden" >
       dsasdfsfd
        <Projects />
        <About />
        <Brand heading={"Top Brands We Have Worked With"} color="text-white" />
        <Feedback />
        <Career />
      </div>
      <VerticalScroll />


      <Footer />
      {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
    </>
  )
}
