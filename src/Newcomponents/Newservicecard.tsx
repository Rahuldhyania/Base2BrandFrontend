"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

type ServiceCardProps = {
  backgroundColor: string;
  title: string;
  routing?: string;
};

export default function Newservicecard({
  backgroundColor,
  title,
  routing
}: ServiceCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-800px", "100px", "-600px"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100px", "0px", "-100px"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    // <Link href={routing}>
    <motion.div
      ref={ref}
      style={{
        background: backgroundColor,
        x,
        y,
        scale,
        opacity,
        borderRadius: "20px",
        cursor: "pointer "
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1]
      }}
      className="new_services_card_outer text-center"
    >
      <h2 className="services_card_title">
        {title}
      </h2>
    </motion.div>
    // </Link>
  );
}

{/* <div className="pt-5">
          <ServicesSection />
          <div className="row">
                <Serviceimagecard 
               banner_image="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/filters_quality_80_bsntfu.webp"
               banner_title="Shopify Development"
               polygun0=" polygon(
                 533.118px 50.0531px,
                 932.88px 254.106px,
                 1066px 1009.5px,
                 0px 909.5px
               )"
               polygun100=" polygon(
                0.3525px 5.0745px,
                100vw 10.149px,
                100vw 1009.5px,
                0px 1009.5px
               )"
            />
           
              <Serviceimagecard 
               banner_image="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/filters_quality_80_bsntfu.webp"
               banner_title="Web Development"
               polygun0=" polygon(
                 632.118px 50.0531px,
                1232.88px 1254.106px,
                 1066px 1009.5px,
                 0px 909.5px
               )"
               polygun100=" polygon(
                0.3525px 5.0745px,
                100vw 10.149px,
                100vw 1009.5px,
                0px 1009.5px
               )"
            />
         
          </div>
          
        </div> */}     