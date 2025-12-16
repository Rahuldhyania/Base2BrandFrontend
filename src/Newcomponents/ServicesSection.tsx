"use client";
import React from "react";
import Newservicecard from "./Newservicecard";

export default function ServicesSection() {
  const services = [
    {
      title: "Shopify Development",
      backgroundColor: "#A9BFFF",
      routing: "/hire-shopify-developers"
    },
    {
      title: "Digital Marketing",
      backgroundColor: "#CFC9FB",
      routing: "/digital-marketing"
    },
    {
      title: "Ecommerce Development",
      backgroundColor: "#A9BFFF",
      routing: "/e-commerce"
    },
    {
      title: "Graphic & UI/UX Designing",
      backgroundColor: "#CFC9FB",
      routing: "/ui-ux-services"
    },
    {
      title: "Web Development",
      backgroundColor: "#A9BFFF",
      routing: "/web-application"
    },
    {
      title: "Mobile App Development",
      backgroundColor: "#CFC9FB",
      routing: "/app-development"
    }
  ];

  return (
    <div className="relative min-h-[300vh]">
      <div className="service_card_sticky  flex flex-col items-center gap-10">
        {services.map((service, i) =>
          <div key={i} className="h-[100vh] flex items-center justify-center">
            <Newservicecard {...service} />
          </div>
        )}
      </div>
    </div>
  );
}
