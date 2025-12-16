import React from "react";
type seo_faqs = {
  seo_faqs_data: any;
};
const Seofaqs = ({ seo_faqs_data }: seo_faqs) => {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="text-center">
        <h2 className="b2b-partners-heading" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="accordion accordion-flush b2b-accordion col-lg-10"
            id="accordionFlushExample"
          >
            {seo_faqs_data.map((data, index) =>
              <div className="accordion-item" data-aos="fade-up" key={index}>
                <h2 className="accordion-header fs-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${data.faqid}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${data.faqid}`}
                  >
                    {data.faq_question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${data.faqid}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      {data.faq_answer}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seofaqs;
