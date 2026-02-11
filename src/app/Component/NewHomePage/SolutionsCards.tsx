"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const sloutionData1 = [
  {
    id: 1,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "We deliver scalable e-commerce solutions including store development, payment integration, performance optimization, security, analytics globally.",
    cardLink: ""
  },
  {
    id: 2,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "We provide tailored solutions for beauty brands including e-commerce platforms, CRM systems, inventory management, automation.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Our solutions support fitness businesses with app development, booking systems, data tracking, cloud platforms, engagement.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "We build solutions including AI development, IoT integration, data analytics, automation, cloud infrastructure, and security.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "We create digital solutions for food businesses including POS systems, online ordering, inventory management, automation.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 6,
    cardimage: "/newhomepage/E-commerce.webp",
    cardTitle: "E-commerce",
    carddescription:
      "We deliver scalable e-commerce solutions including store development, payment integration, performance optimization, security, analytics globally.",
    cardLink: ""
  },
  {
    id: 7,
    cardimage: "/newhomepage/Beauty & Personal Care.webp",
    cardTitle: "Beauty & Personal Care",
    carddescription:
      "We provide tailored solutions for beauty brands including e-commerce platforms, CRM systems, inventory management, automation.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Fitness & Wellness.webp",
    cardTitle: "Fitness & Wellness",
    carddescription:
      "Our solutions support fitness businesses with app development, booking systems, data tracking, cloud platforms, engagement.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/AI & IOT.webp",
    cardTitle: "AI & IOT",
    carddescription:
      "We build solutions including AI development, IoT integration, data analytics, automation, cloud infrastructure, and security.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/Food & Beverage.webp",
    cardTitle: "Food & Beverage",
    carddescription:
      "We create digital solutions for food businesses including POS systems, online ordering, inventory management, automation.",
    cardLink: ""
  }
];
const sloutionData2 = [
  // {
  //   id: 1,
  //   cardimage: "/newhomepage/Works across channels.webp",
  //   cardTitle: "Works across channels",
  //   carddescription:
  //     "Easily integrate your AI Agent with various platforms like Slack, WhatsApp, and web widgets.",
  //   cardLink: ""
  // },
  {
    id: 2,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "We build digital platforms for real estate enabling property listings, workflows, automation, analytics, secure integrations.",
    cardLink: ""
  },
  {
    id: 3,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "We create education platforms supporting e-learning, virtual classrooms, content management, analytics, automation, and cloud access.",
    cardLink: ""
  },
  {
    id: 4,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "We develop scalable SaaS products with robust architecture, seamless integrations, automation, security layers, performance optimization.",
    cardLink: ""
  },
  {
    id: 5,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "We design systems for automotive businesses covering diagnostics, fleet management, automation, analytics, and connected operations.",
    cardLink: ""
  },
  {
    id: 6,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "We power travel brands with booking platforms, customer engagement tools, automation, analytics, mobile experiences, scalability.",
    cardLink: ""
  },
  //copy for marquee issue
  {
    id: 7,
    cardimage: "/newhomepage/Real Estate.webp",
    cardTitle: "Real Estate",
    carddescription:
      "We build digital platforms for real estate enabling property listings, workflows, automation, analytics, secure integrations.",
    cardLink: ""
  },
  {
    id: 8,
    cardimage: "/newhomepage/Education & E-learning.webp",
    cardTitle: "Education & E-learning",
    carddescription:
      "We create education platforms supporting e-learning, virtual classrooms, content management, analytics, automation, and cloud access.",
    cardLink: ""
  },
  {
    id: 9,
    cardimage: "/newhomepage/SaaS.webp",
    cardTitle: "SaaS",
    carddescription:
      "We develop scalable SaaS products with robust architecture, seamless integrations, automation, security layers, performance optimization.",
    cardLink: ""
  },
  {
    id: 10,
    cardimage: "/newhomepage/Automotive.webp",
    cardTitle: "Automotive",
    carddescription:
      "We design systems for automotive businesses covering diagnostics, fleet management, automation, analytics, and connected operations.",
    cardLink: ""
  },
  {
    id: 11,
    cardimage: "/newhomepage/Travel & Tourism.webp",
    cardTitle: "Travel & Tourism",
    carddescription:
      "We power travel brands with booking platforms, customer engagement tools, automation, analytics, mobile experiences, scalability.",
    cardLink: ""
  }
];
const SolutionsCards = () => {
  const [showMarquee, setShowMarquee] = useState(false);
  const [speed, setSpeed] = useState(30);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const speedRef = useRef(speed);

  useEffect(() => {
    setTimeout(() => setShowMarquee(true), 2000);
  }, []);

  // Function to handle when dragging starts (for mouse or touch)
  const handleDragStart = e => {
    dragging.current = true;
    lastX.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragEnd = () => {
    dragging.current = false;
  };

  const handleDragMove = e => {
    if (dragging.current) {
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaX = currentX - lastX.current;
      lastX.current = currentX;

      const newSpeed = Math.max(
        10,
        Math.min(100, speedRef.current - deltaX / 100)
      );
      setSpeed(newSpeed);
      speedRef.current = newSpeed;
    }
  };

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
      {showMarquee
        ? <div className="pt-5">
            <div
              className="marquee-container"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchEnd={handleDragEnd}
              onMouseMove={handleDragMove}
              onTouchMove={handleDragMove}
              style={{ cursor: "grab" }}
            >
              <Marquee speed={speed} gradient={false}>
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
              <div
                className="marquee-container"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                style={{ cursor: "grab" }}
              >
                <Marquee speed={speed} direction="right">
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
        : null}
    </div>
  );
};

export default SolutionsCards;
