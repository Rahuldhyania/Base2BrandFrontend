"use client";
import React, { useEffect, useRef } from "react";
import SplitText from "../Splittext";
import Newbutton from "../Newbutton";
import Image from "next/image";

export default function Aboutus() {
  const stickyWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame to avoid multiple calculations
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smooth 60fps animations
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!stickyWrapperRef.current || !imageRef.current) return;

        const wrapper = stickyWrapperRef.current;
        const image = imageRef.current;
        const rect = wrapper.getBoundingClientRect();

        // Animation and delay durations
        const animationDuration = window.innerHeight;
        const delayDuration = window.innerHeight;
        const totalStickyDuration = animationDuration + delayDuration;

        const stickyStart = 0;
        const stickyEnd = wrapper.clientHeight - window.innerHeight;

        if (rect.top <= stickyStart && rect.top >= -stickyEnd) {
          // We are in the sticky section
          wrapper.classList.add("is-sticky");

          // Calculate scroll progress ONLY for the animation part
          const progress = Math.min(
            1,
            Math.max(0, -rect.top / animationDuration)
          );

          if (progress < 1) {
            const startWidth = 45;
            const endWidth = 100;
            const starttransfrom = 0;
            const endtransfrom = 23;
            // Add easing function for smoother animation
            const easedProgress = easeInOutCubic(progress);
            const currentWidth =
              startWidth + (endWidth - startWidth) * easedProgress;
            const currenttransfrom =
              starttransfrom + (endtransfrom - starttransfrom) * easedProgress;
            console.log("sjdfisdfsd", currenttransfrom);

            // Use transform and width together for smoother animation
            image.style.width = `${currentWidth}%`;
            image.style.transform = `translateY(${currenttransfrom}%)`;
            // Add will-change for better performance
            image.style.willChange = "width, transform";
          } else {
            // Once progress is 1, keep the width at 100%
            image.style.width = "100%";
            image.style.willChange = "auto";
            image.style.transform = "translateY(15%)";
          }
        } else if (rect.top > stickyStart) {
          // We are before the sticky section
          wrapper.classList.remove("is-sticky");
          image.style.width = "45%";
          image.style.willChange = "auto";
          image.style.transform = "translateY(0%)";
        } else {
          // We are after the sticky section
          wrapper.classList.remove("is-sticky");
          image.style.width = "100%";
          image.style.willChange = "auto";
          image.style.transform = "translateY(15%)";
        }

        lastScrollPositionRef.current = window.scrollY;
      });
    };

    // Easing function for smoother animation
    const easeInOutCubic = t => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Add passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set correct state
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="new_bg_black">
      <div className="new_cus_container py-5">
        <div className="pt-5">
          <h2 className="b2b_sub_title text-white gradient_text m-0 pt-5">
            {/* <SplitText text="The Agency Where" duration={0.5} />
            <SplitText text="Creativity Meets" duration={0.5} />
            <SplitText text="Technology." duration={0.5} /> */}
            The Agency Where
            <br />
            Creativity Meets
            <br />
            Technology.
          </h2>
        </div>

        <div className="row pt-5">
          <div className="col-12 col-xl-6" />
          <div className="col-12 col-xl-6">
            <p className="new_subtitle text-white">
              Base2Brand crafts digital brilliance globally. As a
              Shopify-certified team since 2020, we build intuitive websites,
              smart apps, seamless integrations, and data-driven marketing—all
              backed by a 4.9 client rating and trusted by 200+ brands.
              Let&apos;s code your growth together.
            </p>
            <div>
              <Newbutton
                btnname="About us"
                color="#000"
                background="#fff"
                hovercolor="#fff"
                arrow={true}
              />
            </div>
          </div>
        </div>

        <div className="sticky-wrapper" ref={stickyWrapperRef}>
          <div className="row rowno_two">
            <div className="col-12 d-flex align-items-center justify-content-start">
              <Image
                ref={imageRef}
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3cb6e5be780693117fb29d801fb850dfbc2f9d9b_rhzksu.webp"
                alt="about us banner"
                width={1920}
                height={1080}
                className="new_aoutus_banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
