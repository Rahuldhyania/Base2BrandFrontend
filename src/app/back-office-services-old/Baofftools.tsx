"use client";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    tool_title: "Affordable Pricing",
    tool_para:
      "We offer cost-effective back office support services tailored to your business size and needs. Our pricing ensures you get maximum value without compromising on service quality or efficiency."
  },
  {
    id: 2,
    tool_title: "High-Quality Services",
    tool_para:
      "Our commitment to delivering accurate, efficient, and professional back office support helps your business run smoothly. We maintain high standards across all operations to ensure consistent service excellence."
  },
  {
    id: 3,
    tool_title: "Timely and Accurate Reporting",
    tool_para:
      "Stay informed with clear, detailed, and punctual reports. We provide insights on performance, trends, and customer behavior to help you make smart, data-driven decisions at the right time."
  },
  {
    id: 4,
    tool_title: "Experienced and Dedicated Team",
    tool_para:
      "Our skilled support team brings years of industry experience, deep domain knowledge, and a passion for customer success. We treat your business like our own—with care and dedication."
  },
  {
    id: 5,
    tool_title: "Excellent Customer Service",
    tool_para:
      "We prioritize your satisfaction through proactive communication, fast responses, and issue resolution. Our team goes the extra mile to ensure a smooth, stress-free experience for both you and your customers."
  },
  {
    id: 6,
    tool_title: "Flexible and Scalable Solutions",
    tool_para:
      "Our back office support services are designed to grow with your business. Whether you're scaling up or pivoting, we adapt quickly to meet your evolving needs without disrupting your workflow."
  }
];

export default function Baofftools() {
  return (
    <div>
      <div className="pt-5 pb-lg-5" style={{ background: "rgba(26, 27, 37, 1)" }}>
        <div className="container pt-lg-5">
          <div className="pt-lg-5 tool_ph">
            <div className="text-center position-relative pb-lg-5 tool_ph_inner">
              <div className="tool_icon_img tool_icon_img1">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479253_1_llbmza.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="tool_icon_img tool_icon_img2">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/whatsapp.webp"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="tool_icon_img tool_icon_img3">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479250_bc1vx3.webp"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="tool_icon_img tool_icon_img4">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479249_pj5vrd.webp"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="tool_icon_img tool_icon_img5">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479251_fqkdda.webp"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="tools_text">
                <h2 className="b2b-heading baoff_text_ph">
                  <span className="b2b_2color handdrawn">
                    Back Office Support Tools
                  </span>{" "}
                  <br />
                  We Can Work With
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-12 col-lg-6 col-xl-4 mt-lg-5 tools_card_outer">
              <div className="tools_card">
                <div className="tools_inner_card">
                  <h5 className="b2b-service-heading text-white">
                    Customer Relationship <br /> Management (CRM) <br />{" "}
                    Software
                  </h5>
                  <div className="tools_ul_list pt-3">
                    {[
                      "Salesforce",
                      "HubSpot CRM",
                      "Zoho CRM",
                      "Microsoft Dynamics 365",
                      "Pipedrive",
                      "Monday Sales CRM"
                    ].map(data =>
                      <div className="tools_li text-white text-sub-new">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_1_tsflll.png"
                          alt=""
                          width={1000}
                          height={500}
                        />
                        {data}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mt-lg-5 tools_card_outer">
              <div className="tools_card">
                <div className="tools_inner_card">
                  <h5 className="b2b-service-heading text-white">
                    Help Desk and Ticketing <br /> Software
                  </h5>
                  <div className="tools_ul_list pt-3">
                    {[
                      "Zendesk",
                      "Freshdesk",
                      "Help Scout",
                      "Zoho Desk",
                      "Jira Service Management",
                      "Kayako"
                    ].map(data =>
                      <div className="tools_li text-white text-sub-new">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_1_tsflll.png"
                          alt=""
                          width={1000}
                          height={500}
                        />
                        {data}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mt-lg-5 tools_card_outer">
              <div className="tools_card">
                <div className="tools_inner_card">
                  <h5 className="b2b-service-heading text-white">
                    Live Chat and Messaging <br /> Software
                  </h5>
                  <div className="tools_ul_list pt-3">
                    {[
                      "Intercom",
                      "Live Chat",
                      "Drift",
                      "Tawk.to",
                      "Crisp",
                      "WhatsApp",
                      "Business API"
                    ].map(data =>
                      <div className="tools_li text-white text-sub-new">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_1_tsflll.png"
                          alt=""
                          width={1000}
                          height={500}
                        />
                        {data}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pt-5 pb-5"
        style={{ background: "rgba(29, 26, 51)" }}
      >
        <div className="b2b-container-lg">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="tool_text_con">
                <div className="text">
                  <h2 className="b2b-heading trust_title_img baoff_text_ph">
                    <span className="b2b_2color handdrawn">
                      Top Reasons To Choose {" "}
                    </span>{" "}<br />
                    Our
                    Back Office Support <br />
                    Service
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_cecqso.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </h2>
                </div>
              </div>
              <div className="choose_banner pt-5">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480426_coaucb.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
            </div>
            <div className="col-12 col-lg-7 mt-5 mt-lg-0">
              <div className="border_con">
                {data.map((data, index) =>
                  <div className="tool_text_bar" key={index}>
                    <div className="tool_number">
                      <div
                        className={`${data.id !== 6 ? "tool_border" : ""}`}
                      />
                      <p className="text-black b2b-text">
                        {data.id}
                      </p>
                    </div>
                    <div>
                      <h3 className="b2b_tool_heading b2b_voilet">
                        {data.tool_title}
                      </h3>
                      <p className="b2b-text" style={{ color: "#ACACAC" }}>
                        {data.tool_para}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Let's Talk */}
      <div className="overflow-hidden pt-5 pb-5" style={{ background: "#7D9BFF" }}>
        <div className="pb-5 pt-5 position-relative " >
          <div className="baoff_talk_left_img" />
          <div className="text-center b2b-container-lg">
            <h2 className="b2b-heading baoff_text_ph">
              <span className="handdrawn handdrawn_orange">Let’s Talk</span> {" "}
              <span className="text-black font-weight-normal">
                Support That Actually <br /> Supports You
              </span>
            </h2>
            <p className="b2b-text text-black">
              At Base2Brand, we make sure every call, every message, and every
              order is handled with care and <br /> precision. We bring together
              technology and human touch to give your customers the experience{" "}
              <br /> they expect—while freeing you to focus on what you do best:
              growing your business.
            </p>
          </div>
          <div className="baoff_talk_right_img" />
        </div>
      </div>
    </div>
  );
}
