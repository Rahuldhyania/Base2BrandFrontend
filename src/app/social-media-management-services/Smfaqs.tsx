"use client";

import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    faqQuestion: "What is social media design, and why is it important?",
    faqAnswer: "UI is about how things look, UX is about how things work.",
    idname: 10
  },
  {
    id: 2,
    faqQuestion: "How does your social media graphic design process work?",
    faqAnswer:
      "We follow research, wireframes, prototypes, user testing, and final designs.",
    idname: 11
  },
  {
    id: 3,
    faqQuestion: "What makes your social media design agency unique?",
    faqAnswer:
      "It improves customer satisfaction, usability, and conversion rates.",
    idname: 12
  },
  {
    id: 4,
    faqQuestion: "Can you work with our existing brand guidelines?",
    faqAnswer: "Yes, we integrate and enhance your existing brand identity.",
    idname: 13
  },
  {
    id: 5,
    faqQuestion: "Why should I choose your social media design company?",
    faqAnswer: "We use Figma, Sketch, Adobe XD, and other modern design tools.",
    idname: 14
  },
  {
    id: 6,
    faqQuestion: "Do you provide a brand style guide?",
    faqAnswer:
      "Yes, we create comprehensive style guides for consistent branding.",
    idname: 15
  }
];

export default function Smfaqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle function for opening and closing the FAQ
  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="ui_bg">
      <div className="cus_container_con pt-5 pb-5">
        <h2 className="cool_subheading_text2  text-white text-center" data-aos="fade-up">
          <span className="">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_zgsd3z.svg"
              alt=""
              width={1000}
              height={500}
              style={{
                width: "45px"
              }}
            />
          </span>{" "}
          Frequently Asked <span className="ui_skyblue"> Questions!</span>
        </h2>
        <div className="ui_faq_sec">
          <div className="row" data-aos="fade-up">
            {faqs.map((data, index) =>
              <div className="col-12 col-lg-6 animation_delay" key={data.id}>
                <div className="accordion-item border-0 mt-3 uiux_faqs">
                  <h2
                    className="accordion-header p_uifaq"
                    id={`flush-heading${data.idname}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      onClick={() => toggleAccordion(index)} // Toggle on click
                    >
                      <h5 className="grow_faq_title">
                        {data.faqQuestion}
                      </h5>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${data.idname}`}
                    className={`accordion-collapse collapse ${activeIndex ===
                      index
                      ? "show"
                      : ""}`}
                    aria-labelledby={`flush-heading${data.idname}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body pt_ui_faqupper">
                      <span className="b2b-text text-white">
                        {data.faqAnswer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
