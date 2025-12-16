"use client";
import Image from "next/image";
import React from "react";

const techniques = [
  {
    number: 1,
    title: "Custom Design",
    description:
      "We understand that no two businesses are the same. That’s why our website design services are fully customizable, ensuring that your website or app is tailored to your unique business needs.",
  },
  {
    number: 2,
    title: "Mobile-First Design",
    description:
      "With more than 60% of global web traffic coming from mobile devices, mobile-first design is crucial. Our app design company prioritizes mobile responsiveness to ensure your platform performs optimally on any device.",
  },
  {
    number: 3,
    title: "Grid-Based Layouts",
    description:
      "Our design experts use grid-based layouts to ensure your site or app has a clean, structured design. This makes navigation easier and enhances overall user experience across devices.",
  },
  {
    number: 4,
    title: "Scalable Vector Graphics",
    description:
      "We use scalable vector graphics (SVGs) to maintain image quality across all screen sizes, ensuring that your mobile application design services and web design services remain sharp and professional on any device.",
  },
  {
    number: 5,
    title: "Flexible Typography",
    description:
      "Typography is a key element in any design. We use flexible typography to ensure that your content is legible and looks great on every device, improving readability and user engagement.",
  },
  {
    number: 6,
    title: "A/B Testing",
    description:
      "We perform A/B testing to continually improve design elements, ensuring that your mobile app design services and web design services are optimized for better performance and higher conversion rates.",
  },
];

export default function Techniques() {
  return (
    <div className="dotted_bg pb-5">
      <div className="cus_container_con pb-5">
        <div className="text-center">
          <h2 className="cool_subheading_text2 text-white">
            Our Techniques to Create{" "}
            <span className="sm_skyblue">
              Responsive <br /> Web Designs
            </span>
          </h2>
          <p className="m-0 b2b-text ">
            Our web design & development services focus on ensuring that your
            website looks<br /> and functions beautifully on all devices, from
            smartphones to desktops.
          </p>
        </div>
      </div>

      <div className="cus_container_con main_webslider_con mt-4 position-relative">
        <div className="webslider_border position-relative">
          {techniques.map((item) => (
            <div className="main_webslider_con_inner" key={item.number}>
              <div className="webslider_blue m-4">
                <div className="main_text pt-5 pb-5">
                  <div className="d-flex position-relative">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Ellipse_7282_ovlxql.webp"
                      alt=""
                      width={1000}
                      height={300}
                      className="clunting_bg m-auto"
                    />
                    <div className="webslider_number">{item.number}</div>
                  </div>
                  <div className="pt-4 d-flex">
                    <h2 className="webslider_heading m-auto">{item.title}</h2>
                  </div>
                  <div className="pt-4 text-center">
                    <p className="m-0 b2b-text text-black techcard_p">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-5 d-flex justify-content-center">
                    <div className="blue_line_bar" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="webslider_cartoon">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fun-cartoon-casual-character_1_q6wyi7.png"
            alt="cartoon"
            width={10000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
