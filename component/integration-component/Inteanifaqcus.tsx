"use client"
import React from 'react'
import Image from 'next/image';
type anifaq_titleupper = {
  anifaq_titleupper: string
  anifaq_titlelower: string
  anifaq_banner: string
  // 1...anifaq
  anifaq_t1: string, anifaq_para1: string,
  // 2...anifaq
  anifaq_t2: string, anifaq_para2: string,
  // 3...anifaq
  anifaq_t3: string, anifaq_para3: string,
  // 4...anifaq
  anifaq_t4: string, anifaq_para4: string,
  // 5...anifaq
  anifaq_t5: string, anifaq_para5: string,
}
const Inteanifaqcus = ({ anifaq_titleupper, anifaq_titlelower, anifaq_banner,
  // 1...anifaq
  anifaq_t1, anifaq_para1,
  // 2...anifaq
  anifaq_t2, anifaq_para2,
  // 3...anifaq
  anifaq_t3, anifaq_para3,
  // 4...anifaq
  anifaq_t4, anifaq_para4,
  // 5...anifaq
  anifaq_t5, anifaq_para5,
}: anifaq_titleupper) => {
  return (
    <div className="feature4_inte_com  pt-5 pb-4">
      <h3 className='inte-sub-heading2 pt-2 ani_faq_h3 text-white'>
        {anifaq_titleupper} <br />
        {anifaq_titlelower}
      </h3>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center pt-2 pb-4">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center pt-4 pb-4">
            <Image
              src={anifaq_banner}
              alt='Banner'
              width={1000}
              height={500}
              className='ani_faq_banner'
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-md-5" id="WEB">
            <div
              className="accordion accordion-flush b2b-accordion"
              id="accordionFlushExample"
            >
              <div className="inte_faq_com">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ques_text inte_faq_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse31"
                    aria-expanded="false"
                    aria-controls="flush-collapse31"
                  >
                    {anifaq_t1}
                  </button>
                </h2>
                <div
                  id="flush-collapse31"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {" "}<p className="anifaq_inte_text">
                      {anifaq_para1}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inte_faq_com">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ques_text inte_faq_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse32"
                    aria-expanded="false"
                    aria-controls="flush-collapse32"
                  >
                    {anifaq_t2}
                  </button>
                </h2>
                <div
                  id="flush-collapse32"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="anifaq_inte_text">
                      {anifaq_para2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inte_faq_com">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ques_text inte_faq_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse33"
                    aria-expanded="false"
                    aria-controls="flush-collapse33"
                  >
                    {anifaq_t3}
                  </button>
                </h2>
                <div
                  id="flush-collapse33"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="anifaq_inte_text">
                      {anifaq_para3}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inte_faq_com">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ques_text inte_faq_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse34"
                    aria-expanded="false"
                    aria-controls="flush-collapse34"
                  >
                    {anifaq_t4}
                  </button>
                </h2>
                <div
                  id="flush-collapse34"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="anifaq_inte_text">
                      {anifaq_para4}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inte_faq_com">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed ques_text inte_faq_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse35"
                    aria-expanded="false"
                    aria-controls="flush-collapse35"
                  >
                    {anifaq_t5}
                  </button>
                </h2>
                <div
                  id="flush-collapse35"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p className="anifaq_inte_text">
                      {anifaq_para5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inteanifaqcus
