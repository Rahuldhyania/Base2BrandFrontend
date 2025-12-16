"use client";

import React, { useEffect, useRef, useState } from "react";
import SplitText from "./Splittext";
import { scale } from "framer-motion";
import Image from "next/image";

const imagedata = [
  {
    id: 1,
    banner_link:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481306_myvb2j.webp",
    service_name: "Shopify Store",
    service_name_lowerpart: "Development"
  },
  {
    id: 2,
    banner_link:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481307_zkxtkn.webp",
    service_name: "Mobile App",
    service_name_lowerpart: "Development"
  },
  {
    id: 3,
    banner_link:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481308_atg0bu.webp",
    service_name: "Digital ",
    service_name_lowerpart: "Marketing"
  },
  {
    id: 4,
    banner_link:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481309_radpde.webp",
    service_name: "Ecommerce ",
    service_name_lowerpart: "Development"
  },
  {
    id: 5,
    banner_link:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481311_npgivt.webp",
    service_name: "Graphic & UI/UX ",
    service_name_lowerpart: "Designing"
  }
];

export default function ImageScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showtext, setshowtext] = useState(false);
  // Configurable max scale
  const MAX_SCALE = 1.85;

  useEffect(() => {
    const container = containerRef.current;
    const bgEl = bgRef.current;
    if (!container || !bgEl) return;

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>(
        ".slideranimated_image_outer_inner"
      )
    );

    const totalSlides = slides.length;
    const sectionHeight = window.innerHeight * (totalSlides + 2); // +1 extra for bg scaling
    container.style.height = `${sectionHeight}px`;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = container.offsetTop;
      const progress = (scrollY - sectionTop) / window.innerHeight;

      // --- Stage 1: Background scaling ---
      if (progress >= 0 && progress <= 1) {
        // progress 0 → 1 = scale 1 → MAX_SCALE
        const scale = 1 + (MAX_SCALE - 1) * progress;
        bgEl.style.transform = `scale(${scale})`;
        bgEl.style.transformOrigin = "center center";
        // hide slides during bg scaling
        slides.forEach(slide => {
          slide.style.transform = "scale(1,0)";
        });
        return; // stop here until bg fully scaled
      }

      // --- Stage 2: Normal slides animation (after bg scale complete) ---
      const adjustedProgress = progress - 1; // shift progress after bg scaling

      slides.forEach((slide, index) => {
        let firstSlideScaleY = 0;
        const slideProgress = adjustedProgress - index;

        if (slideProgress >= 0 && slideProgress <= 1) {
          const scaleY = Math.min(1, Math.max(0, slideProgress));
          slide.style.transformOrigin = "bottom";
          slide.style.transform = `scale(1, ${scaleY}) translate3d(0px,0px,0px)`;
          slide.style.zIndex = `${100 - index}`;
          if (scaleY >= 0.1) {
            setActiveIndex(index);
            setshowtext(true);
          } else {
            setshowtext(false);
          }
        } else if (slideProgress > 1) {
          const translateProgress = Math.min(1, slideProgress - 1);
          const translateY = -100 * translateProgress;
          slide.style.transformOrigin = "100% 100%";
          slide.style.transform = `translate(0%, ${translateY}%) translate3d(0px,0px,0px)`;
        } else {
          slide.style.transformOrigin = "bottom";
          slide.style.transform = "scale(1,0)";
        }
      });
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <section ref={containerRef} className="slider_section pt-5">
      <div className="slideranimated_image_outer">
        {imagedata.map((data, index) =>
          <div className="slideranimated_image_outer_inner" key={index}>
            <Image
              src={data.banner_link}
              alt=""
              width={10000}
              height={500}
              className="slideranimated_image"
            />
          </div>
        )}

        <div className="text_image_animation text-start">
          {showtext
            ?
            <>
              <h2 className="b2b_sub_title text-white">
                <span>
                  <SplitText
                    key={activeIndex}
                    text={imagedata[activeIndex].service_name}
                    className=" text-white"
                  />
                  {/* {imagedata[activeIndex].service_name} */}
                </span>
              </h2>
              <h2 className="b2b_sub_title text-white">
                <span>
                  <SplitText
                    key={activeIndex}
                    text={imagedata[activeIndex].service_name_lowerpart}
                    className=" text-white"
                  />
                  {/* {imagedata[activeIndex].service_name_lowerpart} */}
                </span>
              </h2>
            </>
            : null}
        </div>

        {/* Background image scaling container */}
        <div
          ref={bgRef}
          className="service_scroll_bg_image"
          style={{
            backgroundImage:
              "url(https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_139_vtzkyq.webp)",
            transform: "scale(1.0)"
          }}
        />
      </div>

      <style jsx>{`
        .slider_section {
          position: relative;
          width: 100%;
        }
        .slideranimated_image_outer {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }
        .slideranimated_image_outer_inner {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.1s;
        }
        .slideranimated_image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .text_image_animation {
          position: absolute;
          top: 50%;
          left: 5%;
          text-align: center;
        }
        .service_scroll_bg_image {
          position: absolute;
          inset: 0;
          transform: scale(1.0);
          background-size: cover;
          background-position: center;
          z-index: -1;
          transition: transform 0.4s linear;
        }
      `}</style>
    </section>
  );
}
