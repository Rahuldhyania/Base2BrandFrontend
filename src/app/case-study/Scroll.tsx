"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import radialBg from "../../../public/img/radial_bg.svg";
import "./Scroll.css";
import Request from "../request-form";
import PageHead from "../../../component/PageHead";
import Image from "next/image";

export default function Portfolio() {
  const obj = [
    // vip number shop
    {
      id: "1",
      slug: "vip-number-shop",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vip_t47sjh.png",
      title: "VIP Number Shop - SEO/Google Ads/ Meta Ads/ SMM/ Influencer Collaboration / ASO",
      des: "By combining SEO, social media marketing, paid ads, influencer campaigns, and push notifications, VIP Number Shop successfully increased..",
      button: "Read case study",
      next_link: "/Vip",
    },
    // loria-medicals
    {
      id: 2,
      slug: "loria-medicals",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/loria_hawsgb.png",
      title: "Loria Medical- Meta Ads",
      des: "The Partnership Between Loria Medical and our Meta Ads Campaign Strategy resulted in increased Visibility and tangible Growth in Patient Consultations..",
      button: "Read case study",
      next_link: "/loria-medical",
    },
    // Grill Father
    {
      id: 3,
      slug: "case-grill",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/grill_xpz9ue.png",
      title: "The Grill Father- Google Ads/ Meta Ads/ SMM / SEO",
      des: "By implementing a cohesive digital marketing strategy that included social media marketing, SEO, local SEO, and paid ads...",
      button: "Read case study",
      next_link: "/grill",
    },
    // Smart Pet Depot
    {
      id: 4,
      slug: "smart-pet",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Pet_a862id.png",
      title: "Pet Depot / SHOPIFY",
      des: "Smart Pet Depot successfully enhanced its online presence and significantly increased sales through a well-rounded digital marketing...",
      button: "Read case study",
      next_link: "/smartPet",
    },
    // TechCity
    {
      id: 5,
      slug: "tech-city",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/about-us-cta-image_1_xlvpbc.jpg",
      title: "TechCity / PHP",
      des: "TechCity successfully enhanced its online presence and attracted more customers with our comprehensive...",
      button: "Read case study",
      next_link: "/techcity",
    },
    // Siena Home
    {
      id: 6,
      slug: "siena-home",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/246894596_1019309298914602_3981009996604212220_n_auto_x2_0601e31a-48b7-4147-b7c5-f38c909a334b3_1_1024x1024_dlzcez.jpg",
      title: "Siena Home / SHOPIFY",
      des: "Through strategic SEO efforts, Siena Homes successfully enhanced its online presence in the highly competitive home décor...",
      button: "Read case study",
      next_link: "/siena",
    },
    // Healthy Bedrooms
    {
      id: 7,
      slug: "healthy-bedrooms",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/hero-banner-3_ayfgqp.jpg",
      title: "Healthy Bedrooms / PHP",
      des: "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
      button: "Read case study",
      next_link: "/healthyBedrooms",
    },
    // Metal Press
    {
      id: 8,
      slug: "metal-press",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/post_1_15_grkdlo.jpg",
      title: "Metal Press / Wordpress",
      des: "We are a different type of manufacturing company. We provide a comprehensive line of products and we can work with you to customize them to your specific needs....",
      button: "Read case study",
      next_link: "/not-found"
    },
    // Zoom auto car rental
    {
      id: 9,
      slug: "zoom-auto-car-rental",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480276_ozci7l.jpg",
      title: "Zoom Auto Car Rrental / -",
      des: "Zoom Auto Car Rentals is a newly established car rental service that aims to offer customers an easy and reliable solution for renting vehicles....",
      button: "Read case Study",
      next_link: "/not-found"
    },
    // VIS learning
    {
      id: 10,
      slug: "vis-learning",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/downtown-sydney-skyline-australia-twilight_vpla4v.jpg",
      title: "VIS Learning / Wordpress",
      des: "VIS Learning is a leading education consultancy dedicated to helping international students pursue higher education in Australia....",
      button: "Read case Study",
      next_link: "/not-found"
    },
    // Ehis school
    {
      id: 11,
      slug: "ehis-school",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_28_l3jqea.jpg",
      title: "EHIS School / Wordpress",
      des: "EHIS School is a prestigious educational institution known for its commitment to holistic development and academic excellence. ...",
      button: "Read case Study",
      next_link: "/not-found"
    },
    // Warley superstore
    {
      id: 12,
      slug: "warley-superstore",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_29_walb8n.jpg",
      title: "Warley Superstore / Shopify",
      des: "Warley Store is a well-established superstore based in Australia, providing a wide range of products to its local customers....",
      button: "Read case Study",
      next_link: "/not-found"
    },
    // Duracrafts furniture
    {
      id: 13,
      slug: "duracrafts-furniture",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_30_wqczpt.jpg",
      title: "Duracrafts Furniture / Shopify",
      des: "DuraCrafts Furniture is a new, high-quality furniture brand that specializes in offering premium, handcrafted pieces for modern homes...",
      button: "Read case Study",
      next_link: "/not-found"
    },
    // Barbell
    {
      id: 14,
      slug: "barbell",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_31_fe3dhs.jpg",
      title: "Barbell 2.0 / Shopify",
      des: "Barbell 2.0 is an innovative, high-end barbell brand known for its advanced technology and exceptional durability. ...",
      button: " Read case Study",
      next_link: "/not-found"
    },
    // Rolly Receipts
    {
      id: 15,
      slug: "rolly-receipts",
      img: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_32_aqmwis.jpg",
      title: "Rolly Receipts / Wordpress",
      des: "Rolly Receipt is a U.S.-based company specializing in eco-friendly, smokeable receipt paper, primarily serving bakery shops and other businesses...",
      button: "Read case Study",
      next_link: "/not-found"
    }
  ];

  const PageMeta = {
    title: "CaseStudies | View CaseStudy Now | Base2Brand India ",
    description:
      "Discover Base2Brand India's success through our Casestudies. View our impactful work that drives digital excellence. Explore now to see our achievements!",
    image: "/img/portfolio/b1.png", // Fix image path
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (showModal) {
      const modalBody = document.querySelector(".request-form");
      if (modalBody) {
        modalBody.classList.add("transformAnim");
      }
    }
  }, [showModal]);

  return (
    <>
      <PageHead PageMeta={PageMeta} />

      <div
        className="service-banner b2b-black-bg poppins"
        style={{
          backgroundImage: `url(${radialBg.src})`,
          backgroundRepeat: "no-repeat",
          paddingTop: "1rem",
        }}
      >
        <div className="service-banner case_main_banner  position-relative">
          <div className="container mx-auto d-flex align-items-center h-100">
            <div className="row  d-flex flex-wrap align-items-center m-auto">
              <div className="case_left_banner">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_136_ifgsle.png" alt="" width={1000} height={500} />
              </div>
              <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center ">
                <div className="col-12 col-sm-12 col-md-8 text-center">
                  <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold">
                    Real Results, Proven Success <br />
                    <span style={{ color: "#EF6B19" }}> Case Studies</span> That Inspire Growth
                  </h1>
                  <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                    Explore our diverse range of projects, each showcasing our dedication, creativity, and expertise in delivering exceptional results tailored to our clients' needs. From innovative designs to cutting-edge solutions, we bring ideas to life with precision, passion, and a commitment to excellence.
                  </p>
                  <div className="service-btn d-flex justify-content-center  flex-wrap mt-3 w-100">
                    <button
                      onClick={toggleModal}
                      className="b2b-btn b2b-btn-sm m-0"
                    >
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
              <div className="case_right_banner">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_141_qknwk3.png" alt="" width={1000} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work_bg ">
        <div className="work-gallery ">
          <div className="w-100 pt-1 ">
            <div className="col-md-7 text-center text-white mt-5 m-auto px-5 ">
              <h2 className="text-capitalize b2b-heading">
                Developing Custom, Scalable, And Next-Generation Mobile Apps
              </h2>
            </div>
            <div className="col-12 ">
              <div className="container">
                <div className="tab-content text-light" id="pills-tabContent">
                  <div className="tab-pane fade show active " id="pills-home">
                    <div className="row mt-5  justify-content-center  all  ">
                      {obj.map((data, index) => (
                        <div key={data.id} className="item col-sm-12 col-md-6 col-lg-3 col-xl-4 mb-5" data-aos="fade-up">
                          <Link href={`/case-study/${data.slug}`} passHref>
                            <div className="item_main hoverGradient blueGD">
                              <Image src={data.img} alt={data.title} width={1000} height={500} />
                              <div className="img_des">
                                <h3 className="title_obj case_title hover_impact">{data.title}</h3>
                                <p className="title_obj_des">{data.des}</p>
                                <div className="button">
                                  <button className="parent hover_impact">
                                    {data.button}
                                    <span className="button_arrow">
                                      <svg xmlns="http://www.w3.org/2000/svg" height="21" width="21">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 6)">
                                          <path d="m8.5 7.5v-7h-7" />
                                          <path d="m8.5.5-8 8" />
                                        </g>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
