"use client";
import React, { useEffect, useRef, useState } from "react";
import SplitText from "../Splittext";

const services = [
  { id: 1, title: "UI/UX Design" },
  { id: 2, title: "API Integration" },
  { id: 3, title: "Mobile App Creation" },
  { id: 4, title: "Market Research" },
  { id: 5, title: "Graphic Design" },
  { id: 6, title: "Motion Graphics" },
  { id: 7, title: "Optimize The Budget" },
  { id: 8, title: "Animation And 3D" },
  { id: 9, title: "Logo" },
  { id: 10, title: "Social Media Management" },
  { id: 11, title: "Content Marketing" },
  { id: 12, title: "Branding" },
  { id: 13, title: "Digital Advertising" },
  { id: 14, title: "Print Design" },
  { id: 15, title: "And Mooooooore" }
];

export default function Servicestab() {
  const triggerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(-1);
  const revealOrder = useRef([]);

  useEffect(() => {
    const lastIndex = services.length - 1;
    const others = services.map((_, i) => i).slice(0, -1);

    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }

    revealOrder.current = [...others, lastIndex];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalHeight = rect.height - windowHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
        const progress = scrolled / totalHeight;
        const totalCards = services.length;
        const count = Math.ceil(progress * totalCards) - 1;

        setVisibleCount(count);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="new_bg_black">
      <div className="new_cus_container pt-5">
        <div
          className="servicecard_wrapper justify-content-center"
          ref={wrapperRef}
        >
          <div className="servicecard_tab_outerupper sticky">
            <h2 className="b2b_sub_title gradient_text text-white">
              {/* <SplitText text="Everything Your" /> */}
              Everything Your
              <div className="splittext2" ref={triggerRef}>
                {/* <SplitText text="Brand Needs" /> */}
                Brand Needs
              </div>
            </h2>
            <div className="servicecard_tab_outer container">
              {services.map((data, index) => {
                const orderIndex = revealOrder.current.indexOf(index);
                return (
                  <div
                    key={index}
                    className={`servicecard_tab ${orderIndex !== -1 &&
                    orderIndex <= visibleCount
                      ? "show"
                      : ""}`}
                  >
                    {data.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
