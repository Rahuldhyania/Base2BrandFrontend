import React from "react";
type faqdata = {
  datamap: any;
  inte_faq_title:string,
  faq_last:string
};
const faqdata = ({ datamap,inte_faq_title,faq_last }: faqdata) => {
  return (
    <div className="inte_FAQ" style={{background:"#B6CCFF"}}>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mt-5">
              <h2
                className="text-white b2b-main-heading inte_faqh2 text-center"
              >
                {inte_faq_title}
                <span className="colorbartitle">{faq_last}</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-12 m-auto pb-5">
            <div
              className="accordion accordion-flush b2b-accordion"
              id="accordionFlushExample3"
            >
              {datamap.map((item, index) =>
                  <div
                   key={index}
                    className="accordion-item inte_faq_con2"
                  >
                    <h2 className="accordion-header fs-4">
                      <button
                        className="accordion-button collapsed intefaq_btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={item.databstarget}
                        aria-expanded="false"
                        aria-controls={item.divid}
                      >
                        {item.FAQquestion}
                      </button>
                    </h2>
                    <div
                      id={item.divid}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample3"
                    >
                      <div className="accordion-body">
                        <p className="intefaq_p">
                          {item.FAQanswer}
                        </p>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faqdata;
