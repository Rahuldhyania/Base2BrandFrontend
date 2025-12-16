"use client";
import Image from "next/image";
import React, { useState } from "react";

// Define the type for FAQ item
type FAQItem = {
  id: number;
  faqQuestion: string;
  faqAnswer: string;
  idname: number;
};

// Define the props for the component
type UifaqsProps = {
  faqs: FAQItem[];
};

export default function Uifaqs({ faqs }: UifaqsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg_blue_left">
      <div className="cus_container_con pt-5 pb-5">
        <h2 className="cool_subheading_text2 text-white text-center" data-aos="fade-up">
          <span>
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_s5nblc.svg"
              alt=""
              width={1000}
              height={300}
              style={{ width: "46px" }}
            />
          </span>{" "}
          Frequently Asked <span className="ui_skyblue"> Questions!</span>
        </h2>

        <div className="ui_faq_sec">
          <div className="row" data-aos="fade-up">
            {faqs.map((data, index) => (
              <div className="col-12 col-lg-6 animation_delay" key={data.id}>
                <div className="accordion-item border-0 mt-3 uiux_faqs">
                  <h2 className="accordion-header p_uifaq" id={`flush-heading${data.idname}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5 className="grow_faq_title text-white">{data.faqQuestion}</h5>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${data.idname}`}
                    className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""
                      }`}
                    aria-labelledby={`flush-heading${data.idname}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body pt_ui_faqupper">
                      <span className="b2b-text text-white">{data.faqAnswer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
