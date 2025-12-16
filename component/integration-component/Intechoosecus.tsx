"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
type Intechoosecus = {
  choosetitle: string,
  demotitle: string,
  choose_t_para: string
  // 1....
  choose_img1: string,
  choose_t1: string,
  choose_para1: string
  // 2....
  choose_img2: string,
  choose_t2: string,
  choose_para2: string
  // 3....
  choose_img3: string,
  choose_t3: string,
  choose_para3: string
  // 4....
  choose_img4: string,
  choose_t4: string,
  choose_para4: string
  // 5....
  choose_img5: string,
  choose_t5: string,
  choose_para5: string
  // 6....
  choose_img6?: string,
  choose_t6?: string,
  choose_para6?: string
}
const Intechoosecus = ({ choosetitle, demotitle, choose_t_para,
  choose_img1, choose_t1, choose_para1,
  choose_img2, choose_t2, choose_para2,
  choose_img3, choose_t3, choose_para3,
  choose_img4, choose_t4, choose_para4,
  choose_img5, choose_t5, choose_para5,
  choose_img6, choose_t6, choose_para6,
}: Intechoosecus) => {
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
    <div className="feature5_inte_com pt-4">
      <h2 className="inte-sub-heading2 inte_choose_h2 text-black ps-3 pe-3">
        Why Choose <span className='b2b_inte_com inte_com_blue'>Base<span className='b2b_2'>2</span>Brand</span> for <span className='inte_com_blue'>{choosetitle}</span> {demotitle} Integration?
      </h2>
      <div className="title_dis_choose d-flex justify-content-center">
        <p className='sub_text text-black inte_dis_choose_p'>
          {choose_t_para}
        </p>
      </div>
      <div className="pb-4 pt-4">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-2 works-servics-radi2us choose_outer">
              <div className="service_box_outer call_cen_servics">
                <div className="works-servics-radius">
                  <div className="serviceIcon">
                    <div className="inte_img_choose d-flex ">
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
                        src={choose_img1}
                        alt="Icon"
                        width={1000}
                        height={500}
                        style={{
                          width: "90px",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <h3 className="inte_choose_h3 text-center text-black inte_heading1 pt-3">
                      {choose_t1}
                    </h3>
                    <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_choose text-center text-black inte_work_heading">
                        {choose_para1}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 works-servics-radius2 choose_outer">
              <div className="service_box_outer call_cen_servics">
                <div className="  works-servics-radius">
                  <div className="serviceIcon">
                    <div className="inte_img_choose d-flex ">
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
                        src={choose_img2}
                        alt="Icon"
                        width={1000}
                        height={500}
                        style={{
                          width: "90px",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <h3 className="inte_choose_h3 text-center text-black inte_heading1 pt-3">
                      {choose_t2}
                    </h3>
                    <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_choose text-black text-center inte_work_heading">
                        {choose_para2}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 works-servics-radi2us choose_outer">
              <div className="service_box_outer call_cen_servics">
                <div className="works-servics-radius">
                  <div className="serviceIcon">
                    <div className="inte_img_choose d-flex ">
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
                        src={choose_img3}
                        alt="Icon"
                        width={1000}
                        height={500}
                        style={{
                          width: "90px",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <h3 className="inte_choose_h3 text-center text-black inte_heading1 pt-3">
                      {choose_t3}
                    </h3>
                    <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_choose text-center text-black inte_work_heading">
                        {choose_para3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 works-servics-radius2 choose_outer">
              <div className="service_box_outer  call_cen_servics">
                <div className="works-servics-radius">
                  <div className="serviceIcon">
                    <div className="inte_img_choose d-flex ">
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
                        src={choose_img4}
                        alt="Icon"
                        width={1000}
                        height={500}
                        style={{
                          width: "90px",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <h3 className="inte_choose_h3 text-center text-black inte_heading1 pt-3">
                      {choose_t4}
                    </h3>
                    <div className="d-flex justify-content-between text-center align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_choose text-black inte_work_heading">
                        {choose_para4}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2 works-servics-radius2 choose_outer">
              <div className="service_box_outer call_cen_servics">
                <div className="  works-servics-radius">
                  <div className="serviceIcon">
                    <div className="inte_img_choose  d-flex ">
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
                        src={choose_img5}
                        alt="Icon"
                        width={1000}
                        height={500}
                        style={{
                          width: "90px",
                          objectFit: "contain"
                        }}
                      />
                    </div>
                    <h3 className="inte_choose_h3 text-black text-center inte_heading1 pt-3">
                      {choose_t5}
                    </h3>
                    <div className="d-flex justify-content-between text-center align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_choose text-black inte_work_heading">
                        {choose_para5}
                        <br />
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
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}

export default Intechoosecus
