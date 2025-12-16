import React from "react";
import Reviewcard from "./Reviewcard";
export default function Cusreview() {
  return (
    <div
      className="pt-5 pb-5"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_36_duibhj.webp)",
        backgroundColor: "#000000",
        // backgroundSize: "contain",
        position: "relative",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="cus_gardient_upper"
        style={{
          height: "55%",
          top: "0",
          zIndex: "1"
        }}
      />
      <div className="container">
        <div className="text-center cus_text_zindex cysview_heading">
          <h2 className="b2b-partners-heading m-0 lh-sm" data-aos="fade-up">
            What Do Customers Say
          </h2>
          <h2
            className="b2b-partners-heading lh-sm"
            style={{ color: "#7D9BFF" }}
            data-aos="fade-up"
          >
            About Our Support Service?
          </h2>
        </div>
        <div className="review_col_container re_cus_con_dt row pt-3">
          <div className="review_col col-xl-4">
            <div className="marque_scroll">
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_mzvtep.png"
                  re_user="Emily W. – Marketing Manager"
                  re_para="Michael and the team at Base2Brand are exceptional. Their support was fast, reliable, and effective. They went above and beyond to ensure our systems were running smoothly. Truly impressed!"
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_6_zmvkx0.png"
                  re_user="John D. – IT Specialist "
                  re_para="Base2Brand's customer support is outstanding! Their team, especially Sarah, solved my complex issue quickly and professionally. The 24/7 availability and clear communication made all the difference. Highly recommended!"
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_mzvtep.png"
                  re_user="Emily W. – Marketing Manager"
                  re_para="Michael and the team at Base2Brand are exceptional. Their support was fast, reliable, and effective. They went above and beyond to ensure our systems were running smoothly. Truly impressed!"
                />
              </div>
            </div>
          </div>
          <div className="review_col  col-xl-4">
            <div className=" marque_scroll2">
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_2_jhzpix.png"
                  re_user="Ryan P. – Small Business Owner "
                  re_para="I reached out to Base2Brand for urgent support. Tom’s response was immediate, and he resolved the issue with great efficiency. It's rare to find such reliable, on-demand support!"
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_3_uzudpr.png"
                  re_user="Claire M. – Operations Director"
                  re_para="Laura and her team at Base2Brand provided incredible support! They tailored solutions to our business needs and helped us avoid potential IT issues. Professional, friendly, and knowledgeable. Very happy!"
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_2_jhzpix_1.png"
                  re_user="Ryan P. – Small Business Owner "
                  re_para="I reached out to Base2Brand for urgent support. Tom’s response was immediate, and he resolved the issue with great efficiency. It's rare to find such reliable, on-demand support!"
                />
              </div>
            </div>
          </div>
          <div className="review_col col-xl-4">
            <div className="marque_scroll">
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
                  re_user="Mark T. – Software Developer"
                  re_para="Base2Brand’s support team is top-notch! Jessica and Ryan tackled my technical problem with precision and speed. Their customer-first approach really sets them apart. They truly care about delivering results."
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
                  re_user="Matt S. – Entrepreneur"
                  re_para="I’ve had great experiences with Base2Brand’s customer service. Sarah and Claire made it easy to get answers, and they were always responsive and friendly. Fast solutions, and great communication!"
                />
              </div>
              <div className="col-md-6 col-xl-12 mt-4">
                <Reviewcard
                  re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
                  re_user="Mark T. – Software Developer"
                  re_para="Base2Brand’s support team is top-notch! Jessica and Ryan tackled my technical problem with precision and speed. Their customer-first approach really sets them apart. They truly care about delivering results."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="review_col_container re_cus_con_ph row pt-3">
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_mzvtep.png"
              re_user="Emily W. – Marketing Manager"
              re_para="Michael and the team at Base2Brand are exceptional. Their support was fast, reliable, and effective. They went above and beyond to ensure our systems were running smoothly. Truly impressed!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_6_zmvkx0.png"
              re_user="John D. – IT Specialist "
              re_para="Base2Brand's customer support is outstanding! Their team, especially Sarah, solved my complex issue quickly and professionally. The 24/7 availability and clear communication made all the difference. Highly recommended!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_mzvtep.png"
              re_user="Emily W. – Marketing Manager"
              re_para="Michael and the team at Base2Brand are exceptional. Their support was fast, reliable, and effective. They went above and beyond to ensure our systems were running smoothly. Truly impressed!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_2_jhzpix.png"
              re_user="Ryan P. – Small Business Owner "
              re_para="I reached out to Base2Brand for urgent support. Tom’s response was immediate, and he resolved the issue with great efficiency. It's rare to find such reliable, on-demand support!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_3_uzudpr.png"
              re_user="Claire M. – Operations Director"
              re_para="Laura and her team at Base2Brand provided incredible support! They tailored solutions to our business needs and helped us avoid potential IT issues. Professional, friendly, and knowledgeable. Very happy!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_2_jhzpix_1.png"
              re_user="Ryan P. – Small Business Owner "
              re_para="I reached out to Base2Brand for urgent support. Tom’s response was immediate, and he resolved the issue with great efficiency. It's rare to find such reliable, on-demand support!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
              re_user="Mark T. – Software Developer"
              re_para="Base2Brand’s support team is top-notch! Jessica and Ryan tackled my technical problem with precision and speed. Their customer-first approach really sets them apart. They truly care about delivering results."
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
              re_user="Matt S. – Entrepreneur"
              re_para="I’ve had great experiences with Base2Brand’s customer service. Sarah and Claire made it easy to get answers, and they were always responsive and friendly. Fast solutions, and great communication!"
            />
          </div>
          <div className="col-md-6 col-xl-12 mt-4" data-aos="fade-up">
            <Reviewcard
              re_name="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480824_5_mobbxa_1.png"
              re_user="Mark T. – Software Developer"
              re_para="Base2Brand’s support team is top-notch! Jessica and Ryan tackled my technical problem with precision and speed. Their customer-first approach really sets them apart. They truly care about delivering results."
            />
          </div>
        </div>
      </div>
      <div
        className="cus_gardient_lower"
        style={{
          height: "35%",
          bottom: "0"
        }}
      />
    </div>
  );
}
