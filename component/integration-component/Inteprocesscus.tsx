"use client";
import React from "react";
import Image from "next/image";
type Inteprocess = {
  process_t_uppper: string;
  process_t_lower: string;
  process_t1: string;
  process_para1: string;
  process_img1: string;
  process_t2: string;
  process_para2: string;
  process_img2: string;
  process_t3: string;
  process_para3: string;
  process_img3: string;
  process_t4: string;
  process_para4: string;
  process_img4: string;
  process_t5: string;
  process_para5: string;
  process_img5: string;
};
const Inteprocess = ({
  process_t_uppper,
  process_t_lower,
  process_t1,
  process_para1,
  process_img1,
  process_t2,
  process_para2,
  process_img2,
  process_t3,
  process_para3,
  process_img3,
  process_t4,
  process_para4,
  process_img4,
  process_t5,
  process_para5,
  process_img5

}: Inteprocess) => {
  return (
    <div className="processcon pt-3 pb-3">
      <h3 className="inte-sub-heading2 pt-2 ani_process_h3 text-white">
        {process_t_uppper} <br />
        {process_t_lower}
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service_box_outer_pro call_cen_servics">
              <div className="works-servics-radius2">
                <div className="serviceIcon_1">
                  <div className="d-flex inte_hover justify-content-center mb-3">
                    <Image
                      src={process_img1}
                      alt="01"
                      width={1000}
                      height={500}
                      style={{
                        width: "110px"
                      }}
                    />
                  </div>
                  <h3 className="inte_process_h3 text-black inte_heading1">
                    <p className="step-count_inte">
                      <span>01</span>
                    </p>
                    {process_t1}
                  </h3>
                  <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                    <p className="sub_text_process text-white text-center inte_work_heading">
                      {process_para1}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service_box_outer_pro call_cen_servics">
              <div className="  works-servics-radius2">
                <div className="serviceIcon_2">
                  <div>
                    <h3 className="inte_process_h3 text-black inte_heading1">
                      <p className="step-count_inte">
                        <span>02</span>
                      </p>
                      {process_t2}
                    </h3>
                    <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_process text-center text-white  inte_work_heading">
                        {process_para2}
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="justify-content-center inte_hover serviceIcon_2_img d-flex  mt-3">
                    <Image
                      src={process_img2}
                      alt="01"
                      width={1000}
                      height={500}
                      style={{
                        width: "110px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="service_box_outer_pro call_cen_servics">
              <div className="works-servics-radius2">
                <div className="serviceIcon_1">
                  <div className="justify-content-center inte_hover d-flex mb-3">
                    <Image
                      src={process_img3}
                      alt="01"
                      width={1000}
                      height={500}
                      style={{
                        width: "110px"
                      }}
                    />
                  </div>
                  <h3 className="inte_process_h3 text-black inte_heading1 pt-3">
                    <p className="step-count_inte">
                      <span>03</span>
                    </p>
                    {process_t3}
                  </h3>
                  <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                    <p className="sub_text_process text-center text-white  inte_work_heading">
                      {process_para3}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-3">
            <div className="service_box_outer_pro call_cen_servics">
              <div className="works-servics-radius2">
                <div className="serviceIcon_2">
                  <div>
                    <h3 className="inte_process_h3 text-black inte_heading1 pt-3">
                      <p className="step-count_inte">
                        <span>04</span>
                      </p>
                      {process_t4}
                    </h3>
                    <div className="d-flex procus_p_con align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_process procus_p text-center text-white inte_work_heading">
                        {process_para4}
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="justify-content-center inte_hover serviceIcon_2_img d-flex mt-3">
                    <Image
                      src={process_img4}
                      alt="01"
                      width={1000}
                      height={500}
                      style={{
                        width: "110px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-3">
            <div className="service_box_outer_pro call_cen_servics">
              <div className="  works-servics-radius2">
                <div className="serviceIcon_2">
                  <div>
                    <div className="d-flex justify-content-center">
                      <h3 className="inte_process_h3 procus_p text-black inte_heading1 pt-3">
                        <p className="step-count_inte">
                          <span>05</span>
                        </p>
                        {process_t5}
                      </h3>
                    </div>
                    <div className="d-flex procus_p_con align-items-end mt-1 mt-sm-1">
                      <p className="sub_text_process procus_p text-center text-white  inte_work_heading">
                        {process_para5}
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="justify-content-center inte_hover serviceIcon_2_img d-flex mt-3">
                    <Image
                      src={process_img5}
                      alt="01"
                      width={1000}
                      height={500}
                      style={{
                        width: "110px"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inteprocess;
