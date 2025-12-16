"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../../component/header";
import radialLeft from "../../../public/img/radial-left.svg";
import radialBg from "../../../public/img/radial_bg.svg";
import Typewriter from "typewriter-effect";
import Footer from "../../../component/footer";
import "./portfolio.css";
import Request from "../request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";

export default function Portfolio() {

  const baseURL = "https://base2brand.com/portfolio";
  const wwwURL = "https://www.base2brand.com/portfolio";
  let canonical = '';
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Our Work | View Portfolio Now | Base2Brand India ",
    description: "Discover Base2Brand India's success through our portfolio. View our impactful work that drives digital excellence. Explore now to see our achievements!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        const modalBody = document.querySelector(".request-form");
        if (modalBody) {
          modalBody.classList.add("transformAnim");
        }
      }, 200);
    }
  }, [showModal]);
  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />
      <div
        className="service-banner pt-5 pb-5 b2b-black-bg"
        style={{
          backgroundImage: `url(${radialBg.src})`,
          backgroundRepeat: "no-repeat",
          paddingTop: "1rem",
          position: "relative",
          alignItems: "center",
          display: "flex"
        }}
      >
        <div className="container mx-auto pt-sm-5 pb-sm-5">
          <div className="row flex-wrap align-items-center m-auto">
            <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up">
              <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">
                Explore <span style={{ color: "#EF6B19" }}>Our Portfolio:</span> <br /> Where Creativity Meets <br />  Excellence!
              </h1>
              <p className="text-white col-12 col-sm-12 col-md-10">
                Discover how our tailored solutions have transformed businesses across various industries. Explore real-world case studies that showcase our expertise, innovative strategies, and measurable results, helping clients achieve their goals and drive long-term success.
              </p>
              <div className="service-btn d-flex flex-wrap mt-3 w-100">
                <button
                  className="b2b-btn b2b-btn-lg m-0"
                  onClick={toggleModal}
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center portfolio_old_banner"
              data-aos="fade-up"
            >
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480291_de3tss.png" alt="" width={1000} height={500} />
            </div>
          </div>
        </div>
        <div className="portfolio_new_banner">
          <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480291_de3tss.png" alt="" width={1000} height={500} />
        </div>
      </div>
      <div className="b2b-black-bg">
        {/* <div className="py-5">
          <div className="w-100">
            <div className="col-md-6 text-center text-white mt-5 m-auto mb-5 px-5">
              <h1 className="text-uppercase b2b-heading">Welcome to our Portfolio</h1>
              <p className="mb-5 mt-4 army">What sets us apart is the inspiring, creative people behind us; they are the soul of our company. Here, we proudly display the results of our hard work and dedication.</p>
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">Request a Quote</button>
            </div>
          </div>
        </div> */}

        <div
          className="work-gallery"
          style={{
            backgroundImage: `url(${radialLeft.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-100 pt-3">
            <div className="col-md-7 text-center text-white mt-5 m-auto px-5">
              <h2 className="text-capitalize b2b-heading">
                Featuring our expertise in an impressive work gallery
              </h2>
            </div>
            <div className="col-12">
              <div className="container p-4">
                <ul
                  className="nav nav-pills mb-3 caseTabs justify-content-center gap-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active btn_portfolio"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Web Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Mobile App Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      Graphics
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-email-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-email"
                      type="button"
                      role="tab"
                      aria-controls="pills-email"
                      aria-selected="false"
                    >
                      Email
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  {/* All */}
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row mt-5 justify-content-center all">
                      {[
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w1.6cc94a45_yrrwfq.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w2.582d4b54_nbhozv.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w3.bc424845_nxt3vt.png",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w4.11ee9424_m1ub53.png",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w6.8f6864fb_f1pute.jpg", //5
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w5.49d60a7b_icjdfw.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w5.49d60a7b_icjdfw.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w11.1730e71b_jcpozf.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w10.08262a38_jb1jju.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w9.2b6a985f_cqmxmm.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w8.c0b5aff7_zrkqtj.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w8.c0b5aff7_zrkqtj.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w13.cd8ea8af_vtj7nn.jpg",
                        // mobile app
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/SHABAD_GURU_mhi3ta.jpg", //14 
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/SUPER_STORE_y4gnnu.jpg",//15
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/FEATHERS_s8kagn.jpg",//16
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/WARLEY_FOOD_SERVICE_anqp54.webp",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/APPCARTIFY_qg8xj4.webp", //18
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/WISHAAN_zvodep.jpg",

                        // graphics
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g1.68da7f87_qdhfsq.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g2.d405cb3a_b8mk4z.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g3.48870ce8_eo7tmy.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/grill_father_1.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/techcity.72c172fa_hpfmdv_1.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/KRISTUDY-PORTFOLIO-DEShjIGN-_pku73w.jpg",
                        //  email
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar6_t0asll.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar5_wg1flu.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar2_ehwwgn.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar4_tcp44e.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar3_dfvd6g.jpg",
                        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar1_uhsqtg.jpg",
                      ].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                          <div className="case_box">
                            <Image
                              src={image}
                              alt=""
                              // onClick={() => openImageInNewTab(image)}
                              width={1000}
                              height={500}
                            />
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>
                  {/* web design  */}
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row mt-5 justify-content-center Web Design">
                      {[
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w1.6cc94a45_yrrwfq.jpg",
                          blank_image: "https://www.behance.net/gallery/162722983/Laundry-Detergent-Website"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w2.582d4b54_nbhozv_1.jpg",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w3.bc424845_nxt3vt.png",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w4.11ee9424_m1ub53.png",
                          blank_image: "https://www.behance.net/gallery/162724385/Supplement-Website"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w6.8f6864fb_f1pute.jpg",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w12.1cfa578c_yo93ic.jpg",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w13.cd8ea8af_vtj7nn_1.jpg",
                          blank_image: "https://www.behance.net/gallery/119422781/Beverage-website-design"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w7.611c9335_aseuzf.jpg",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w8.c0b5aff7_zrkqtj.jpg",
                          blank_image: "https://www.behance.net/gallery/124060965/Product-website"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w9.2b6a985f_cqmxmm_1.jpg",
                          blank_image: "https://www.behance.net/gallery/162721769/Product-website-Design"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w10.08262a38_jb1jju_1.jpg",
                          blank_image: ""
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/w11.1730e71b_jcpozf_1.jpg",
                          blank_image: ""
                        }

                      ].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                          <div className="case_box">
                            <Image
                              src={image.image}
                              alt=""
                              // onClick={() => openImageInNewTab(image.blank_image)}
                              width={1000}
                              height={500}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* mobile app design  */}
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row mt-5 justify-content-center Mobile-App-Design">
                      {[
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/SHABAD_GURUn_fbed2t.jpg", //shbadguru
                          link: "https://www.behance.net/gallery/220028381/Shabad-Guru-Mobile-App"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/SUPER_STORiE_orucaq.jpg", //warley red
                          link: "https://www.behance.net/gallery/220028673/Warley-SuperStore"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/FEATHERiS_k1rkkm.jpg", //feathers
                          link: "https://www.behance.net/gallery/219909657/Feathers"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/FEATHERiS_k1rkkm.jpg", //warley green 
                          link: "https://www.behance.net/gallery/219909407/WARLEY-FOOD-SERVICE"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/APPCiARTIFY_mhcrtg.webp",  //appcartify
                          link: "https://www.behance.net/gallery/220011387/App-cartify"
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/WISHAiN_wwg46s.jpg", //wishaan
                          link: "https://www.behance.net/gallery/220011225/Wishaan-Mobile-app"
                        },

                      ].map((image, index) => (
                        <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                          <div className="case_box">
                            <Image
                              src={image.image}
                              alt=""
                              onClick={() => openImageInNewTab(image.link)}
                              width={1000}
                              height={500}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* graphics */}
                  <div
                    className="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                  >
                    <div className="row mt-5 justify-content-center">
                      {[
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g1.68da7f87_qdhfsq.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/210577795/App-Cartify-Portfolio-Design",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g2.d405cb3a_b8mk4z.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/210522577/Hannasleep-Designing-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/g3.48870ce8_eo7tmy_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/210712031/Dura-Craft-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/grill_father_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/210578549/The-Grill-Father-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/techcity.72c172fa_hpfmdv_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/210579311/Tech-City-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/KRISTUDY-PORTFOLIO-DEShjIGN-_pku73w_1.jpg",
                          blank_image: "https://www.behance.net/gallery/219909129/Kristudy-Portfolio",
                        },

                      ].map((image, index) => {


                        if ([0, 1, 2, 3, 4].includes(index)) {


                          return (
                            <>
                              <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                                <div className="case_box">
                                  <Image
                                    className="text-white rounded"
                                    src={image.image}
                                    alt={`Image ${index + 1}`}
                                    onClick={() => openImageInNewTab(image.blank_image)}
                                    width={1000}
                                    height={500}
                                  />
                                </div>
                              </div>
                            </>
                          );
                        }

                        // If index is not in [0, 1, 2, 3, 4]
                        return (
                          <>
                            <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                              <div className="case_box">
                                <img
                                  className="text-white rounded"
                                  src={image.image}
                                  alt={`Image ${index + 1}`}
                                  // onClick={() => openImageInNewTab(image.blank_image)}
                                  onClick={() => {
                                    // if (typeof image.blank_image === "object" && "src" in image.blank_image) {
                                    openImageInNewTab(image.blank_image); // Safe access
                                    // } 
                                  }}
                                />
                              </div>
                            </div>
                          </>
                        );
                      })};


                    </div>
                  </div>
                  {/* email */}
                  <div
                    className="tab-pane fade"
                    id="pills-email"
                    role="tabpanel"
                    aria-labelledby="pills-email-tab"
                  >
                    <div className="row mt-5 justify-content-center">
                      {[
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar6_t0asll_1.jpg",
                          blank_image: "https://www.behance.net/gallery/221897683/VIP-Email-Marketing-Portfolio",
                        },

                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar5_wg1flu_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/221947203/LAB-X-Email-Marketing-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar2_ehwwgn_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/221896217/Rolly-Receipt-Email-Marketing-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar4_tcp44e_1.jpg",
                          blank_image: "https://www.behance.net/gallery/221895937/Hours-Email-Marketing-Portfolio",
                        },

                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar3_dfvd6g_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/221895727/DEBRAS-Email-Marketing-Portfolio",
                        },
                        {
                          image: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/emailmar1_uhsqtg_1.jpg",
                          blank_image:
                            "https://www.behance.net/gallery/221898105/BARBELL-Email-Marketing-Portfolio",
                        },

                      ].map((image, index) => {


                        if ([0, 1, 2, 3, 4].includes(index)) {


                          return (
                            <>
                              <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                                <div className="case_box">
                                  <Image
                                    className="text-white rounded"
                                    src={image.image}
                                    alt={`Image ${index + 1}`}
                                    onClick={() => openImageInNewTab(image.blank_image)}
                                    width={1000}
                                    height={500}
                                  />
                                </div>
                              </div>
                            </>
                          );
                        }

                        // If index is not in [0, 1, 2, 3, 4]
                        return (
                          <>
                            <div className="col-md-6 mb-5" data-aos="fade-up" key={index}>
                              <div className="case_box">
                                <img
                                  className="text-white rounded"
                                  src={image.image}
                                  alt={`Image ${index + 1}`}
                                  // onClick={() => openImageInNewTab(image.blank_image)}
                                  onClick={() => {
                                    // if (typeof image.blank_image === "object" && "src" in image.blank_image) {
                                    openImageInNewTab(image.blank_image); // Safe access
                                    // } 
                                  }}
                                />
                              </div>
                            </div>
                          </>
                        );
                      })};


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
