
import Image from "next/image";
import React from "react";

const card_data = [
  {
    id: 1,
    card_title: "UX Research",
    card_des:
      "Understanding your users is the foundation of all web design services. We conduct thorough research to understand your audience’s behaviors, needs, and preferences, creating designs that are not only visually appealing but user-centric and functional.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480917_jat0ew.webp"
  },
  {
    id: 2,
    card_title: "Information Architecture",
    card_des:
      "A well-structured website is the backbone of great design. Our web design & development services focus on organizing content in a way that ensures a smooth, easy navigation experience, helping users find what they need with ease.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480918_y5k4of.webp"
  },

  {
    id: 3,
    card_title: "UX Design",
    card_des:
      "Good design isn’t just about looks; it’s about creating an intuitive, enjoyable experience. Our UX design process for website design services ensures that your site is easy to navigate, accessible, and optimized for users, leading to higher engagement and conversions.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480919_1_vkmn1y.webp"
  },
  {
    id: 4,
    card_title: "Brand Identity",
    card_des:
      "Your website or mobile app is an extension of your brand. We collaborate closely with you to ensure that your app design services and web design services accurately reflect your brand’s identity, values, and vision, leaving a lasting impression on visitors and users alike.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480920_iao94e.webp"
  },
  {
    id: 5,
    card_title: "UI Design",
    card_des:
      "Great design needs to be visually appealing. Our team of mobile app designers focuses on creating clean, modern, and intuitive interfaces that enhance the user experience, making your website or app more engaging and effective.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480921_t5xxvb.webp"
  },
  {
    id: 6,
    card_title: "Usability Testing",
    card_des:
      "We don’t just design; we test. Our web design & development services include extensive usability testing to identify any roadblocks or usability issues before launch, ensuring a smooth user experience that encourages users to stay and convert.",
    card_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480922_klvn1e.webp"
  }
];
export default function Webservicescard() {
  return (
    <div className="cus_container_con pt-4 pb-5">
      <div className="text-center">
        <h2 className="cool_subheading_text2 text-white">
          Our <span className="sm_skyblue">Web & Mobile App Design</span>{" "}
          Services
        </h2>
        <p className="m-0 mt-3 b2b-text">
          Our web mobile app design services focus on delivering seamless and{" "}
          intuitive experiences for mobile and <br /> web users, ensuring your
          platform stands out on any device.
        </p>
      </div>

      <div className="row pt-4">
        {card_data.map((data, index) =>
          <div className="col-12 col-lg-6 mt-4" key={index}>
            <div className="webcard">
              <div className="webcard_child1">
                <h2 className="text-black">
                  {data.card_title}
                </h2>
                <p className="m-0 b2b-text mt-3 text-black">
                  {data.card_des}
                </p>
              </div>
              <div className="webcard_child2">
                <Image
                  src={data.card_img}
                  alt=""
                  width={10000}
                  height={500}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
