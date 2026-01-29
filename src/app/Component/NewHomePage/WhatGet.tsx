import Image from "next/image";
import React from "react";

const whatgetData = [
  {
    id: 1,
    title: "Measurable Business Growth",
    description: `With data-driven strategies and AI-powered solutions, Base2Brand helps you achieve measurable growth across digital channels. From increasing website traffic to boosting conversions and revenue, every action is designed to maximize your business impact and long-term success.`
  },
  {
    id: 2,
    title: "Strong Brand <br/> Presence",
    description: `We craft cohesive branding and digital experiences that make your business stand out. By combining design, marketing, and technology, Base2Brand ensures your brand communicates a clear, professional, and memorable identity that resonates with your target audience.`
  },
  {
    id: 3,
    title: "Scalable Digital <br/> Solutions",
    description: `Our solutions are built to grow with your business. From websites and apps to marketing automation and AI-driven tools, Base2Brand delivers flexible, scalable platforms that adapt to your evolving needs, ensuring efficiency and seamless performance at every stage.`
  },
  {
    id: 4,
    title: "Innovation-Driven <br/> Results",
    description: `Base2Brand leverages the latest technologies, including AI, AR/VR, and automation, to deliver innovative solutions. By applying forward-thinking strategies and cutting-edge tools, we help your business stay ahead of trends, outperform competitors, and achieve exceptional digital outcomes.`
  }
];
const WhatGet = () => {
  return (
    <div className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="text-center pb-5">
          <h2
            className="b2b-heading text-center text-capitalize"
            data-aos="fade-up"
          >
            What You’ll Achieve with Base2Brand
          </h2>
        </div>
      </div>
      <div className="whatget_main">
        <Image
          src={"/newhomepage/whatgetbgimage1.webp"}
          alt="#"
          width={1000}
          height={500}
          className=""
        />

        <div className="whatget_main_text row">
          {whatgetData.map((data, index) =>
            <div className="col-12 col-md-6 col-lg-3 whatgetCard" key={index}>
              <div className="whatgetCardinner">
                <h2 className="number_heading text-white">
                  0{data.id}
                </h2>

                <h2
                  className="text-white pt-3 whatgetCardheading"
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />

                <p className="whatgetCarddescription text-white pt-3">
                  {data.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatGet;
