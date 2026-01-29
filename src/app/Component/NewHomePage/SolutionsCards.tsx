import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const sloutionData1 = [
  {
    id: 1,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "Engage users globally with seamless language detection and translation.",
    cardLink: ""
  },
  {
    id: 2,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "Engage users globally with seamless language detection and translation.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 6,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "Engage users globally with seamless language detection and translation.",
    cardLink: ""
  },
  {
    id: 7,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "Engage users globally with seamless language detection and translation.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  }
];
const sloutionData2 = [
  {
    id: 1,
    cardimage: "/newhomepage/Works across channels.webp",
    cardTitle: "Works across channels",
    carddescription: "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
    cardLink: ""
  },
  {
    id: 2,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  },
  {
    id: 6,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 7,
    cardimage: "/newhomepage/Works across channels.webp",
    cardTitle: "Works across channels",
    carddescription: "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or unauthorized requests.",
    cardLink: ""
  },
  {
    id: 11,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  },
  {
    id: 12,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "Your AI Agent ensures the utmost safety by refusing sensitive or  unauthorized requests.",
    cardLink: ""
  }
];
const SolutionsCards = () => {
  return (
    <div className="b2b-black-bg py-5">
      <div className="b2b-container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2
                className="b2b-heading text-center text-capitalize"
                data-aos="fade-up"
              >
                Industry-Specific Strategies That Perform
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div>
          <Marquee>
            {sloutionData1.map((data, index) =>
              <div className="sloutioncard p-3" key={index}>
                <Image
                  src={data.cardimage}
                  alt={data.cardTitle}
                  width={1000}
                  height={500}
                  className="sloutioncardimage"
                />
                <div className="pt-3">
                  <h4 className="sloutiontitle text-white">
                    {data.cardTitle}
                  </h4>

                  <p className="sloutiondescription text-white">
                    {data.carddescription}
                  </p>
                </div>
              </div>
            )}
          </Marquee>
        </div>
        <div className="pt-3">
          <Marquee direction="right">
            {sloutionData2.map((data, index) =>
              <div className="sloutioncard p-3" key={index}>
                <Image
                  src={data.cardimage}
                  alt={data.cardTitle}
                  width={1000}
                  height={500}
                  className="sloutioncardimage"
                />
                <div className="pt-3">
                  <h4 className="sloutiontitle text-white">
                    {data.cardTitle}
                  </h4>

                  <p className="sloutiondescription text-white">
                    {data.carddescription}
                  </p>
                </div>
              </div>
            )}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SolutionsCards;
