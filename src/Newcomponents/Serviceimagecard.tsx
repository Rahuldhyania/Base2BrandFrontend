"use client";
import React from "react";
import SplitText from "./Splittext";
import Image from "next/image";


type servicecard = {
  banner_image?: string;
  banner_title?: string;
  polygun0?: string;
  polygun100?: string;
};

const Serviceimagecard = ({
  banner_image,
  banner_title,
  polygun0,
  polygun100
}: servicecard) => {
  return (
    <div className="new_bg_bla">
      <div className="content_wrapper">
        <div className="tWrap rotatexWrap">
          <div className="rotateX custome_scrolinage box img_container">
            <Image
              src={banner_image}
              alt={banner_title}
              width={1000}
              height={500}
            />
            <div className="image_position">
              <h2 className="main_header_text text-white">
                <span className="gradient_text">
                  <SplitText
                    text={banner_title}
                    duration={1.0}
                    className="gradient_text text-white"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img_container {
          position: relative;
        }
        .box {
          animation: revealClip linear both;
          animation-timeline: view();
          animation-range: entry 0% cover 50%;
          opacity: 0;
            transition: all 0.8s ease-in-out;
        }
        @keyframes revealClip {
          0% {
            clip-path: ${polygun0};
            opacity: 1;
            transform: translateY(200px) rotateY(42deg);
          }
          100% {
            clip-path: ${polygun100};
            opacity: 1;
            transform: translateY(200px) rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Serviceimagecard;
