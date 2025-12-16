"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
export default function Intefeature() {
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
      <div className="feature1_inte pt-4 pb-4">
        <h2 className="b2b-heading cross_title text-white text-center pt-3 pb-3">
          What If Your Store is Without Custom <br /> Integration Feature?
        </h2>
        <div className="pb-4 pt-4">
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_fea image_hover call_cen_servics">
                  <div className="works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img ">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480106_deahn3.png"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "90px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className="inte_heading1">
                        Increased Manual <br />
                        Effort
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white mt-2 inte_work_heading">
                          Without custom integrations, your Shopify store relies
                          heavily on manual processes to manage product updates,
                          orders, and customer data. This can lead to
                          time-consuming workflows, human errors, and
                          inefficiencies, ultimately slowing down your
                          operations and impacting productivity.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_fea image_hover call_cen_servics">
                  <div className="  works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img ">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480104_dxwaku.png"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "90px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className=" inte_heading1">
                        Limited Functionality and <br />
                        Scalability
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white mt-2 inte_work_heading">
                          Default Shopify apps and features often have
                          limitations in terms of functionality and scalability.
                          Without custom integration, your store may struggle to
                          meet evolving business needs, hindering your ability
                          to adapt as you scale or expand into new markets.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_fea image_hover mb-0 call_cen_servics">
                  <div className="works-servics-radius_fea">
                    <div className="serviceIcon">
                      <div className="works_img work_img3">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480101_mnsune.png"
                          alt="Icon"
                          width={1000}
                          height={500}
                          style={{
                            width: "90px",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                      <h3 className="inte_heading1">
                        Disconnected Systems and Poor Data Flow
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-white mt-2 inte_work_heading">
                          Without custom integration, your Shopify store may
                          struggle with disconnected systems like CRM, ERP, and
                          accounting software. This leads to fragmented data,
                          inefficient workflows, delays, duplicate entries, and
                          missed insights, ultimately impacting customer
                          experience and operational efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cross_image">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480141_qjuci8.webp"
            alt="cross"
            width={1000}
            height={500}
            className="crossimg"
          />
        </div>
      </div>
      {/* 2nd conatainer */}
      <div className="feature2_inte pt-4">
        <h2 className="b2b-heading cross_title text-black text-center pt-3 pb-3">
          Benefits of Custom Shopify Integration
        </h2>
        <div className="pb-4 pt-4">
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_6_qeyipd.webp"
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
                        Scalability
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          As your business grows, your Shopify store needs to
                          grow with it. Custom integrations allow your store to
                          scale seamlessly, ensuring that you can handle
                          increased traffic, more orders, and a growing product
                          catalog without sacrificing performance.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_7_gfsusa.webp"
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
                        Improved Efficiency
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          Automating processes like order fulfillment, inventory
                          tracking, and customer communications reduces manual
                          effort and the potential for errors. This improves
                          overall efficiency, allowing you to focus on strategic
                          business goals rather than repetitive tasks.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_3_jq7occ.webp"
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
                        Order and Inventory Sync
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          Order and inventory sync are key benefits of Shopify
                          custom integrations, ensuring seamless synchronization
                          of order data and stock levels across multiple
                          systems. This integration automates order processing,
                          updates inventory in real-time, and enhances
                          efficiency, accuracy, and overall business
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_10_gn1idw.webp"
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
                        Real Time User Experience
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          Real-time user experience is vital in eCommerce, and
                          Shopify custom integrations enhance this by offering
                          seamless, interactive features. These integrations
                          ensure instant updates on inventory, pricing, and
                          order status, improving customer satisfaction and
                          engagement.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_1_dyrmvw.webp"
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
                        Managing from one platform
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          Manage both your store's backend and frontend from a
                          single platform with Shopify. Streamline operations,
                          update product listings, track inventory, process
                          orders, and monitor analytics effortlessly, all while
                          providing a seamless and efficient shopping experience
                          for your customers.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="service_box_outer_ben call_cen_servics">
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
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_2_aodxz2.webp"
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
                        Less Manual Effort
                      </h3>
                      <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                        <p className="sub_text text-black inte_work_heading">
                          Shopify custom integrations help reduce manual effort
                          by automating repetitive tasks like inventory updates,
                          order processing, and customer communication. This
                          automation saves time, minimizes human error, and
                          allows you to focus on growing your business while
                          maintaining efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                Book a Free Demo
              </button>
            </div>
          </div>
        </div>
        <div className="write_image">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480140_rnwcen.webp"
            alt="cross"
            width={1000}
            height={500}
            className="crossimg"
          />
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
