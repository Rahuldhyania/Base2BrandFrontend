"use client"
import React from "react";
import Channelcard from "./Channelcard";
import Image from "next/image";

export default function Cuschannel() {
  return (
    <div>
      <div style={{
        backgroundImage:
          "urlhttps://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_36_duibhj.webp)",
        position: "relative",
        backgroundRepeat: "round"
      }}
        className='pt-5 pb-5'>
        <div
          className="cus_gardient_upper"
          style={{
            height: "35%",
            top: "0"
          }}
        />
        <div className="container">
          <div className="text-center cus_text_zindex">
            <h2 className="b2b-partners-heading m-0 lh-sm" data-aos="fade-up">
              Types of Customer Support Channels:
            </h2>
            <h2 className="b2b-partners-heading lh-sm" style={{ color: "#7D9BFF" }} data-aos="fade-up">
              Tailored, Fast, and Always Available
            </h2>
            <p className='b2b-text mt-3 mb-0' data-aos="fade-up">
              At Base2Brand, we offer a variety of customer support channels to suit every need. Whether you <br /> prefer direct contact or self-service options, we ensure you have the most convenient and <br /> efficient way to get the help you need.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className='col-md-6 col-xl-4 mt-4' data-aos="fade-up">
              <Channelcard cha_img='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480857_lkefod.png' cha_title='Phone Support' cha_para='Phone support is the most traditional and personal way to resolve complex issues. It’s perfect when you need detailed assistance or when your concern requires an in-depth conversation. Directly speaking with an expert ensures clear communication and faster resolutions for challenging problems.' />
            </div>
            <div className='col-md-6 col-xl-4 mt-4' data-aos="fade-up">
              <Channelcard cha_img='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480858_f5bpdb.png' cha_title='Email Support' cha_para='Email support allows for thoughtful, professional communication that can be referred to later. It ideal for addressing comprehensive queries and maintaining a record of your interactions. This channel ensures that both customers and support teams can review past exchanges for clarity and accuracy.' />
            </div>
            <div className='col-md-6 col-xl-4 mt-4' data-aos="fade-up">
              <Channelcard cha_img='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480859_birvvs.png' cha_title='Live Chat' cha_para='Live chat offers customers immediate assistance with real-time support. It is ideal for resolving simpler issues quickly, offering faster response times than phone or email support. Customers can chat directly with a knowledgeable agent to get instant solutions, improving the overall customer experience.' />
            </div>
            <div className='col-md-6 col-xl-4 mt-4' data-aos="fade-up">
              <Channelcard cha_img='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480860_mshyxf.png' cha_title='Social Media Support' cha_para='Many customers prefer using social media platforms like Twitter or Facebook to reach out for help. Our social media support team monitors these channels closely to address concerns and provide solutions promptly. It’s an efficient way to engage with us wherever you are.' />
            </div>
            <div className='col-md-6 col-xl-4 mt-4' data-aos="fade-up">
              <Channelcard cha_img='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480867_ggp0d1.png' cha_title='Self-Service Options' cha_para='Self-service resources like FAQ pages, knowledge bases, and customer portals allow you to solve common issues independently. This option empowers customers to find answers on their own, anytime, and avoid waiting for direct support.
' />
            </div>
          </div>
        </div>
        <div
          className="cus_gardient_lower"
          style={{
            height: "25%",
            bottom: "0"
          }}
        />
      </div>

      <div className="pt-5 pb-5" style={{ background: "#000000" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading m-0 lh-sm" data-aos="fade-up">
              Our Simplified Customer Service Procedure To
            </h2>
            <h2
              data-aos="fade-up"
              className="b2b-partners-heading lh-sm"
              style={{ color: "#7D9BFF" }}
            >
              Guarantee Fast Resolutions
            </h2>
          </div>
          <div className="row pt-2 pb-4">
            <div className="col-md-4 mt-4" data-aos="fade-up">
              <div className="procedure_inner">
                <div className="pro_img">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw_1.png" alt="" width={1000} height={500} />
                </div>
                <div className="pro_text">
                  <h4 className="b2b-service-heading text-white">Reach Out to Us</h4>
                  <span className="" style={{ color: "#DBDBDB" }}>Contact us via your preferred communication channel. Our support agents are ready to listen and understand your issue.</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4" data-aos="fade-up">
              <div className="procedure_inner">
                <div className="pro_img">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw_1.png" alt="" width={1000} height={500} />
                </div>
                <div className="pro_text">
                  <h4 className="b2b-service-heading text-white">Diagnosis and Resolution</h4>
                  <span className="" style={{ color: "#DBDBDB" }}>Once we gather all the details, we’ll assess and fix the issue quickly, either immediately or by scheduling a deeper investigation.</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4" data-aos="fade-up">
              <div className="procedure_inner">
                <div className="pro_img">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw_1.png" alt="" width={1000} height={500} />
                </div>
                <div className="pro_text">
                  <h4 className="b2b-service-heading text-white">Follow-Up</h4>
                  <span className="" style={{ color: "#DBDBDB" }}>After solving the issue, we follow up to ensure everything is working smoothly and offer advice on preventing similar problems.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
