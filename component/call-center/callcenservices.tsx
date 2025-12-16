import React from "react";
import rowimg1 from "../../public/img/img-row1.png";
import rowimg2 from "../../public/img/img-row2.png";
import rowimg3 from "../../public/img/img-row3.png";
import rowimg4 from "../../public/img/img-row4.png";
import rowimg5 from "../../public/img/img-row5.png";
import rowimg6 from "../../public/img/img-row6.png";
import imgempty from "../../public/img/emptyimg.png";
function callcenservices() {
  return (
    <div className="main_call_services">
      <div className="pt-3 pt-md-4 pb-2 pb-md-3 w-100">
        <div className="b2b-container-lg">
          <div className="row ">
            <div className="col-md-12 ">
              <h2
                className="b2b-heading text-center  services-heading"
                data-aos="fade-up"
               >
                <span className="works-services-heading b2b-main-heading cs_ph_heading">
                  Our Customer Support Services
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-5 pb-3 pt-0 ps-0 pe-0 w-100 d-flex flex-wrap align-items-end align-items-sm-start">
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">Customer Support & Inquiries </div>
            Our trained professionals assist with customer inquiries, providing
            accurate and timely responses. We ensure each call is handled with
            care, ensuring a smooth, pleasant experience for every customer.
            <br />
          </p>
        </div>
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">Technical Support</div>
            For businesses needing technical assistance, we offer expert
            support. Our skilled agents troubleshoot issues, guide users through
            processes, and ensure complete customer satisfaction, resolving
            technical concerns effectively.
            <br />
          </p>
        </div>
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">Order Processing & Follow-up </div>
            We ensure prompt, accurate order processing, handling each step with
            efficiency. Our team also follows up with customers, keeping them
            informed about delivery status, providing updates and tracking.
            <br />
          </p>
        </div>

        <div
          className="call_services_banner d-flex justify-content-center"
          data-aos="fade-up"
        >
          {/* design for desktop */}
          <div className="services_img_con d-flex services_img_con_disktop pt-4 pb-5 justify-content-center">
            {/* <div className="img_first_child col-sm-4 col-md-3 col-lg-3 d-flex align-items-start justify-content-lg-end justify-content-center ps-2 pe-2">
                            <img src={rowimg1.src} alt="" />
                        </div> */}
            <div className="img_row  col-sm-8 col-md-9 col-lg-11">
              <div className="img_row_upper ps-5 d-flex justify-content-between pb-4">
                <div className="img_row_img ">
                  <img src={rowimg1.src} alt="" />
                </div>
                <div className="img_row_img ">
                  <img src={rowimg2.src} alt="" />
                </div>
                <div className="img_row_img ">
                  <img src={rowimg3.src} alt="" />
                </div>
                <div className="empty">
                  <img src={imgempty.src} alt="" />
                </div>
              </div>
              <div className="img_row_lower d-flex justify-content-between">
                <div className="empty">
                  <img src={imgempty.src} alt="" />
                </div>
                <div className="img_row_img ">
                  <img src={rowimg4.src} alt="" />
                </div>
                <div className="img_row_img ">
                  <img src={rowimg5.src} alt="" />
                </div>
                <div className="img_row_img ">
                  <img src={rowimg6.src} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* design for mobile and ipad  */}
          <div className="services_con_mobile-ipad">
            <div
              className="call_services_banner d-flex flex-wrap justify-content-center pt-4 pb-4"
              data-aos="fade-up"
            >
              <ul className="list-order d-flex flex-wrap justify-content-center phone_img_con">
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg1.src} alt="" />
                </li>
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg2.src} alt="" />
                </li>
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg3.src} alt="" />
                </li>
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg4.src} alt="" />
                </li>
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg5.src} alt="" />
                </li>
                <li className="img_mobile d-flex justify-content-center col-md-4 w-md-25 col-lg-4 ">
                  <img src={rowimg6.src} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">
              Lead Generation & Sales Support{" "}
            </div>
            Our customer support team generates quality leads by reaching out to
            prospects, qualifying them, and scheduling appointments. We also
            offer sales support to help convert these leads into long-term
            customers.
            <br />
          </p>
        </div>
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">Appointment Scheduling </div>
            Base2Brand offers expert appointment scheduling services. Our agents
            manage all details, ensuring customers receive timely reminders and
            excellent service, making the process smooth for businesses and
            clients.
            <br />
          </p>
        </div>
        <div
          className="call_services col-lg-4 col-md-6 pe-0"
          data-aos="fade-up"
        >
          <p className="b2b-text mb-4 p-2 w-100 call_srvices_text callcenneeds capmton">
            <div className="callneeds_inner">Surveys & Feedback</div>
            Our customer support team conducts surveys to collect valuable
            feedback from customers. This helps improve products, services, and
            overall customer satisfaction, ensuring your business strategies
            align with customer needs.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default callcenservices;
