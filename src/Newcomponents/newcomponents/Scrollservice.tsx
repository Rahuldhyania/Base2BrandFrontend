"use client";
import React, { useRef, useState, useEffect } from "react";
import "./Scrollservice.css";

const servicelist = [
  {
    service_title: "Shopify Store Development"
  },
  {
    service_title: "AI Development"
  },
  {
    service_title: "IOT (Internet Of Things)"
  },
  {
    service_title: "Mobile App Development"
  },
  {
    service_title: "Digital Marketing"
  },
  {
    service_title: "Graphic & UI/UX Designing"
  },
  {
    service_title: "Content Marketing"
  },
  {
    service_title: "Gaming/Metaverse"
  },
  {
    service_title: "Blockchain"
  },
  {
    service_title: "Web Development"
  },
  {
    service_title: "DevOps Services"
  },
  {
    service_title: "Ecommerce Development"
  },
  {
    service_title: "Back Office Services"
  }
];

export default function Scrollservice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const itemCount = servicelist.length;

  // Dynamically set container height based on item count
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.height = `${window.innerHeight}px`; // only 1 screen high
    }
  }, []);

  return (
    <div className="new_bg_black scroll_service" ref={sectionRef}>
      <div className="scroll-wrapper">
        <div className="new_cus_container h-100 position-relative">
          <h2 className="b2b_sub_title text-white gradient_text m-0 pt-5">
            Our Services
          </h2>

          <div className="service_container">
            {servicelist.map((item, index) => {
              let className = "service_text";
              if (index === currentIndex) className += " current";
              else if (index === currentIndex - 1) className += " previous";
              else if (index === currentIndex + 1) className += " next";
              else className += " hidden";

              return (
                <div key={index} className={className}>
                  <h2
                    className={`scroll_service_title text-white m-0 ${index ===
                    currentIndex
                      ? "gradient_text"
                      : ""}`}
                  >
                    <span
                      className={`scroll_service_index ${index === currentIndex
                        ? "sub_gradient_text"
                        : ""}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    {item.service_title}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Right Side Vertical Slider */}
          <div className="right_scrollbar">
            <div className="slider-container">
              <input
                type="range"
                min={0}
                max={itemCount - 1}
                step={1}
                value={itemCount - 1 - currentIndex} // reverse for top→bottom
                onChange={e =>
                  setCurrentIndex(itemCount - 1 - Number(e.target.value))}
                className="vertical-slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
