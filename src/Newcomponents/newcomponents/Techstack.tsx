"use client";
import React, { useEffect, useRef, useState } from "react";
import SplitText from "../Splittext";
import Image from "next/image";

const techstackdata = [
  {
    id: 1,
    title: "1 - Frontend",
    images: [
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_em2ncz.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_1707481200_kopfsr.webp",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_1707481201_ez2wy5.webp",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_1707481203_hpetvc.webp",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_1707481202_1_uzfnnh.webp",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757310256/base2brand_website/new%20home%20page/Group_1707481204_1_mmkxgp.webp"
    ],
    description:
      "We don't just build front-ends, we craft pixel-perfect playgrounds. React, Angular, you name it, we bend tech to our will, delivering blazing-fast, drop-dead gorgeous digital experiences."
  },
  {
    id: 2,
    title: "2 - Backend",
    images: [
      "https://res.cloudinary.com/driveuyen/image/upload/v1757311891/base2brand_website/new%20home%20page/Group_1707479885_jjhlsl.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757311891/base2brand_website/new%20home%20page/Group_1707479886_any7qp.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757311891/base2brand_website/new%20home%20page/Group_1707479933_dzoitl.png"
    ],
    description:
      "Backend that scales like magic. Node.js, Django, Laravel – we engineer the powerhouse that fuels your product's success."
  },
  {
    id: 3,
    title: "3 - Ecommerce",
    images: [
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312412/base2brand_website/new%20home%20page/Group_1707479047_san69s.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312411/base2brand_website/new%20home%20page/Group_1707479934_mudm5i.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312411/base2brand_website/new%20home%20page/Group_1707479941_xd9kmr.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312411/base2brand_website/new%20home%20page/Group_1707479045_mu65mi.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312411/base2brand_website/new%20home%20page/Group_1707479043_ffnknp.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312411/base2brand_website/new%20home%20page/Group_1707479897_pn4jva.png"
    ],
    description:
      "From Shopify to custom stores – we build ecommerce platforms that sell while you sleep."
  },
  {
    id: 4,
    title: "4 - Framework",
    images: [
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312549/base2brand_website/new%20home%20page/Vector_v065tw.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312545/base2brand_website/new%20home%20page/Vector_1_v98lw9.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312545/base2brand_website/new%20home%20page/Vector_2_nl5phz.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312544/base2brand_website/new%20home%20page/Group_1707479924_geg3js.png",
      "https://res.cloudinary.com/driveuyen/image/upload/v1757312544/base2brand_website/new%20home%20page/Group_1707479943_ppa78z.png"
    ],
    description:
      "Frameworks that accelerate development – Next.js, Nuxt, Express. We make them work for you."
  }
];

export default function Techstack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const containerRef = useRef(null);

  useEffect(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        const rect = container.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const containerTop = scrollTop + rect.top;
        const scrollPosition = scrollTop - containerTop;

        // Calculate which section should be active based on scroll position
        const sectionHeight = window.innerHeight;
        const progress = Math.floor(scrollPosition / sectionHeight);

        // Ensure progress is within bounds
        const newIndex = Math.max(
          0,
          Math.min(techstackdata.length - 1, progress)
        );

        if (newIndex !== activeIndex) {
          setAnimate(false);
          setTimeout(() => {
            setActiveIndex(newIndex);
            setAnimate(true);
          }, 50);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [activeIndex]
  );

  return (
    <div className="new_bg_black" ref={containerRef}>
      {/* Full scrollable wrapper */}
      <div className="new_cus_container">
        <div
          style={{
            height: `${techstackdata.length * 100}vh`,
            position: "relative"
          }}
        >
          {/* Sticky container */}
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
              flexDirection: "column"
            }}
            className="main_tech_stack"
          >
            <h2 className="b2b_sub_title text-white m-0">
              <SplitText text="Tech Stacks We" />
              <br />
              <div className="splittext2">
                <SplitText text="Flex With" />
              </div>
            </h2>
            <div
              className={`w-100 transition-all techstacklower duration-700 ease-in-out ${animate
                ? "animate-fadeIn"
                : "opacity-0"}`}
            >
              <div className="row w-100">
                <div className="col-12 col-lg-5">
                  <h3 className="tech_stack_title text-white">
                    {techstackdata[activeIndex].title}
                  </h3>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="tech_stack_outer">
                    <div className="d-flex align-items-center tech_stack_imgwrap flex-wrap">
                      {techstackdata[activeIndex].images.map((img, i) =>
                        <Image
                          key={i}
                          src={img}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded-xl tech-stack-img"
                        />
                      )}
                    </div>
                    <div className="pt-3">
                      <p className="text-white new_subtitle pt-3">
                        {techstackdata[activeIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
