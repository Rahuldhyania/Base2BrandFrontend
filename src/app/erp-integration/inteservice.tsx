"use client";
import React, { useState } from "react";
import Link from "next/link";
import Intebar from "../../../component/integration-component/Intebar";
import Request from "@/app/request-form";
import Image from "next/image";
export default function Inteservice() {
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
  return (
    <div>
      <div className="feature3_inte pt-4 ">
        <h2 className="b2b-heading text-white text-center ps-3 pe-3 pt-3 pb-3">
          Our Custom Shopify Integration Services
        </h2>
        <div className="pt-4">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-3 inte_border_service">
                <div className="service_box_outer_ser inte_border_service2">
                  <div className="works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img ">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_10750149_mlcwxm.webp"
                          alt="Icon"
                          width={2000}
                          height={1000}
                          style={{
                            width: "60px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className="inte_heading1 heading_in_1">
                        Third-Party <br />
                        Integrations
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white inte_work_heading">
                          Without custom integrations, your Shopify store relies
                          heavily on manual processes to manage product updates,
                          orders, and customer data....
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3 inte_border_service">
                <div className="service_box_outer_ser inte_border_service2">
                  <div className="  works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img ">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2103468_p9ghff.webp"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "60px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className=" inte_heading1 heading_in_2">
                        Custom Payment Gateway <br />
                        Integration
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white inte_work_heading">
                          Shipping integration simplifies your store's shipping
                          and logistics with custom integrations for your chosen
                          carrier or fulfillment partner. Our custom
                          integrations ...
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3 inte_border_service">
                <div className="service_box_outer_ser inte_border_service2">
                  <div className="works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img work_img3">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480129_gy72xs.webp"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "60px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className="inte_heading1 heading_in_3">
                        Custom Shipping <br />
                        Integration
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white inte_work_heading">
                          Shipping integration simplifies your store's shipping
                          and logistics with custom integrations for your chosen
                          carrier or fulfillment partner. Our custom
                          integrations ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3  inte_border_service">
                <div className="service_box_outer_ser inte_border_service2">
                  <div className="  works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img ">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/web_1_esayms.webp"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "60px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className=" inte_heading1 heading_in_4">
                        Custom API <br />
                        Integration
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white inte_work_heading">
                          Our custom API integration services enable seamless
                          communication between your Shopify store and external
                          applications or services. We tailor integrations to
                          your...
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3  inte_border_service">
                <div className="service_box_outer_ser inte_border_service2">
                  <div className="works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img work_img3">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_17085827_ej5nso.webp"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "60px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className="inte_heading1 heading_in_5">
                        CRM Integration <br />
                        Service
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white inte_work_heading">
                          With our CRM integration service, we connect your
                          Shopify store to leading CRM platforms, such as
                          Salesforce, HubSpot, or Zoho. This integration helps
                          you manage customer...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*ani,ation faq  */}
      <div className="feature4_inte  pt-5 pb-4">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-start"
                  id="pills-digital"
                  role="tabpanel"
                  aria-labelledby="pills-digital-tab"
                >
                  <h2 className="b2b-heading">
                    Technologies We Use for Custom <br /> Integrations
                  </h2>
                  <p className="b2b-text">
                    At Base2Brand, we stay ahead of the curve by utilizing the
                    latest technologies to build custom solutions for your
                    Shopify store. Here are some of the key technologies we use
                    for Shopify integration service.
                  </p>
                </div>
                <div className="inte_animation_con pb-5 pt-5">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Frame_xxgupz.webp"
                    width={1000}
                    height={500}
                    alt="Faq's Banner"
                    style={{
                      width: "60%"
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-md-5">
              <div
                className="accordion accordion-flush b2b-accordion"
                id="accordionFlushExample1"
              >
                <div className="inte_faq">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed ques_text inte_faq_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse2"
                      aria-expanded="false"
                      aria-controls="flush-collapse2"
                    >
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/laravel-icon-1990x2048-xawylrh0_1_cazz30.webp"
                        alt="Laravel"
                        width={1000}
                        height={500}
                        style={{
                          width: "30px",
                          margin: " 0px 10px"
                        }}
                      />
                      Laravel
                    </button>
                  </h2>
                  <div
                    id="flush-collapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div className="accordion-body">
                      {" "}<p className="faq_inte_text5">
                        We use Laravel for custom Shopify integrations, offering
                        a powerful framework to handle seamless backend
                        operations, real-time data processing, and dynamic
                        content management. Laravel’s flexibility and
                        scalability make it ideal for creating tailored
                        solutions that enhance functionality and deliver a
                        smooth eCommerce experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inte_faq">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed ques_text inte_faq_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse3"
                      aria-expanded="false"
                      aria-controls="flush-collapse3"
                    >
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/why-choose-mern-stack-for-developing-web-apps_1_ehtx9y.webp"
                        alt="Laravel"
                        width={1000}
                        height={500}
                        style={{
                          width: "30px",
                          margin: " 0px 10px"
                        }}
                      />
                      MERN Stack
                    </button>
                  </h2>
                  <div
                    id="flush-collapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div className="accordion-body">
                      <p className="faq_inte_text5">
                        Base2Brand supports various industries, including
                        eCommerce, retail, healthcare, finance, and technology,
                        offering tailored customer support solutions to meet
                        specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inte_faq">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed ques_text inte_faq_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse4"
                      aria-expanded="false"
                      aria-controls="flush-collapse4"
                    >
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/remix-logo-icon_1_iw1kwv.webp"
                        alt="Laravel"
                        width={1000}
                        height={500}
                        style={{
                          width: "30px",
                          margin: " 0px 10px"
                        }}
                      />
                      Remix
                    </button>
                  </h2>
                  <div
                    id="flush-collapse4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div className="accordion-body">
                      <p className="faq_inte_text5">
                        Base2Brand supports various industries, including
                        eCommerce, retail, healthcare, finance, and technology,
                        offering tailored customer support solutions to meet
                        specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inte_faq">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed ques_text inte_faq_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse5"
                      aria-expanded="false"
                      aria-controls="flush-collapse5"
                    >
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/webhook_1_tkuw9n.webp"
                        alt="Laravel"
                        width={1000}
                        height={500}
                        style={{
                          width: "30px",
                          margin: " 0px 10px"
                        }}
                      />
                      APIs & Webhooks
                    </button>
                  </h2>
                  <div
                    id="flush-collapse5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample1"
                  >
                    <div className="accordion-body">
                      <p className="faq_inte_text5">
                        Base2Brand supports various industries, including
                        eCommerce, retail, healthcare, finance, and technology,
                        offering tailored customer support solutions to meet
                        specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Shopify Integrations We Have Worked On */}
      {/* :::::No .3 ::::: */}
      <div className="feature5_inte pt-4">
        <h2 className="b2b-heading text-black text-center pt-3 pb-3">
          Custom Shopify Integrations We Have Worked On
        </h2>
        <div className="pb-4 pt-4">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/uni-commerce">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/01_bnjgiu.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_8_ursfuc.png"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Uni-Commerce <br />
                          Custom Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black inte_work_heading">
                            We have successfully integrated Shopify with
                            Uni-Commerce, enabling seamless synchronization of
                            sales, inventory, and order data.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/odoo">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="  works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/02_zdivpn.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_4_h0xasi.png"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Odoo Custom <br />
                          Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black inte_work_heading">
                            Our team has integrated Shopify with Odoo,
                            optimizing financial management, CRM, and inventory
                            control for smoother operations.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/easy-ecom">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/03_tkrrce.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_getidp.png"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Custom Loop <br />
                          Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black inte_work_heading">
                            Our team has integrated Shopify with Custom Loop,
                            optimizing returns management and enabling an
                            efficient reverse logistics process for businesses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/increff">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/04_whc4tg.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_kpdqxo.png"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Increff Custom <br />
                          Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black  inte_work_heading">
                            Base2Brand has worked on integrating Shopify with
                            Increff, improving supply chain efficiency and
                            inventory accuracy for eCommerce businesses.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/custom-recharge">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="  works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/05_ugawno.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480186_rr4xh9.webp"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Custom Recharge <br />
                          Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black inte_work_heading">
                            Manage your store's backend and frontend on Shopify,
                            streamlining operations, inventory, orders, and
                            analytics efficiently.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <Link href="/orderwise">
                  <div className="service_box_outer_ser2 call_cen_servics">
                    <div className="works-servics-radius_fea">
                      <div className="serviceIcon">
                        <div className="inte_img_con d-flex ">
                          {/* <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/06_mf9rcp.webp"
                          alt="01"
                          width={1000}
                          height={500}
                          style={{
                            width: "120px"
                          }}
                        /> */}
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480202_kqqnwr.png"
                            alt="Icon"
                            width={1000}
                            height={500}
                            style={{
                              width: "90px",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <h3 className="b2b-service-heading text-black inte_heading1">
                          Order Wise <br />
                          Custome Integration
                        </h3>
                        <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                          <p className="sub_text text-black inte_work_heading">
                            Our team has integrated Shopify with Custom Loop,
                            optimizing returns management and enabling an
                            efficient reverse logistics process for businesses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                Book a Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Do You need Custom Integration With Any Platform? */}
      {/* Lower Banner Box */}

      <Intebar bartitle1='Do You need Custom Integration With Any Platform?'
        colorbartitle=" "
        bartitle2=""
        barpara=' Base2Brand is here to help you unlock the power of custom
              integrations. Our expert team is ready to work with you to design
              and implement tailored solutions that will streamline your
              operations, improve customer experiences, and drive business
              growth.'
      />
      {/* Integration Service section */}
      {/* ::::::::::::::::::::::::::: */}
      <div className="feature6_inte pt-3 pb-3">
        <div className="container">
          <h2 className="b2b-heading text-white text-center pt-3 pb-3">
            Why Choose Base2Brand for Shopify <br />
            Integration Services?
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column-before service_hover">
              <div className="hoverGradient blueGD">
                <div className="feature6_con">
                  <div className=" w-100 h-100 d-flex">
                    <span className="arrow-icon-gk callcenarrow">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_8_lcwudh.webp"
                        alt="Icon"
                        width={1000}
                        height={500}
                        className="fe6_img"
                      />
                    </span>
                    <p className="b2b-text mb-4 p-2 ">
                      <span className="fe6_t">Expert Team:</span>
                      Our team consists of highly skilled developers and Shopify
                      experts who understand the ins and outs of custom
                      integrations. We have experience working with a wide range
                      of Shopify stores, from small businesses to large
                      enterprises.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column-before service_hover">
              <div className="hoverGradient blueGD">
                <div className="feature6_con">
                  <div className=" w-100 h-100 d-flex">
                    <span className="arrow-icon-gk callcenarrow">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_10_1_afm0dp.webp"
                        alt="Icon"
                        width={1000}
                        height={500}
                        className="fe6_img"
                      />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds">
                      <span className="fe6_t">Tailored Solutions: </span>
                      We don’t believe in one-size-fits-all solutions. Each
                      Shopify store is unique, and we work closely with you to
                      develop custom integrations that meet your specific
                      business needs
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column-before service_hover">
              <div className="hoverGradient blueGD">
                <div className="feature6_con">
                  <div className=" w-100 h-100 d-flex">
                    <span className="arrow-icon-gk callcenarrow">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/pvsybmohqrb54pitjnjn.webp"
                        alt="Icon"
                        width={1000}
                        height={500}
                        className="fe6_img"
                      />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds">
                      <span className="fe6_t">Seamless Integration: </span>
                      Our integrations are designed to work seamlessly with your
                      existing systems and Shopify store, ensuring minimal
                      disruption to your daily operations.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column-before service_hover">
              <div className="hoverGradient blueGD">
                <div className="feature6_con">
                  <div className=" w-100 h-100 d-flex">
                    <span className="arrow-icon-gk callcenarrow">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_12_hni3kh.webp"
                        alt="Icon"
                        width={1000}
                        height={500}
                        className="fe6_img"
                      />
                    </span>
                    <p className="b2b-text mb-4 p-2 callcenneeds">
                      <span className="fe6_t">End-to-End Support: </span>
                      From initial consultation to post-integration support,
                      Base2Brand provides end-to-end service. We’re here to
                      ensure that your custom integrations continue to perform
                      smoothly long after they’re implemented
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
