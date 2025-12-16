"use client";
import React, { useEffect, useRef, useState } from "react";
import SplitText from "../Splittext";
import Image from "next/image";
const teamsdata = [
  {
    id: 1,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_7_qhp5oj.png",
    empname: "Vineet k.rana"
  },
  {
    id: 2,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_8_n0pg9j.png",
    empname: "Nasir"
  },
  {
    id: 3,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42693_rfbjng.png",
    empname: "Rishabh Dixit"
  },
  {
    id: 4,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_9_cet1zm.png",
    empname: "ambalika"
  },
  {
    id: 5,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_3_xxv3df.png",
    empname: "diksha"
  },
  {
    id: 6,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_4_wwii2v.png",
    empname: "Jagtar singh"
  },
  {
    id: 7,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_6_xa2dif.png",
    empname: "Abhishek Thakur"
  },
  {
    id: 8,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_2_ajs39i.png",
    empname: "Abhishek"
  },
  {
    id: 9,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_5_hvm02g.png",
    empname: "Babli"
  }
];
const teamsdatalower = [
  {
    id: 1,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_7_qhp5oj.png",
    empname: "Vineet k.rana"
  },
  {
    id: 2,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_8_n0pg9j.png",
    empname: "Nasir"
  },
  {
    id: 3,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42693_rfbjng.png",
    empname: "Rishabh Dixit"
  },
  {
    id: 4,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_9_cet1zm.png",
    empname: "ambalika"
  },
  {
    id: 5,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_3_xxv3df.png",
    empname: "diksha"
  },
  {
    id: 6,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_4_wwii2v.png",
    empname: "Jagtar singh"
  },
  {
    id: 7,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_6_xa2dif.png",
    empname: "Abhishek Thakur"
  },
  {
    id: 8,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_2_ajs39i.png",
    empname: "Abhishek"
  },
  {
    id: 9,
    empimage:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42613_5_hvm02g.png",
    empname: "Babli"
  }
];
export default function Newteamscroll() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolled = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height - windowHeight), 0),
        1
      );

      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={containerRef}
      style={{
        height: "400vh",
        position: "relative"
      }}
      className="new_bg_black"
    >
      <div
        className="main_team_section new_cus_container"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "black"
          //   transition: "all 0.3s ease-in-out"
        }}
      >
        {/* Upper row */}
        <div
          className="team_section_upper d-flex"
          style={{
            position: "absolute",
            top: "10%",
            // right: `${-180 + progress * 220}%`,
            transform: `translateX(${-4 + progress * -30}%)`,
            display: "flex",
            gap: "20px",
            transition: "all 0.5s",
            width: "400%",
            justifyContent: "end"
          }}
        >
          {teamsdata.map(item =>
            <div key={item.id}>
              <Image
                src={item.empimage}
                alt={item.empname}
                width={1000}
                height={500}
                className="emp_image"
              />
              <p className="text-white empname">
                {item.empname}
              </p>
            </div>
          )}
        </div>
        <div className=" pt-5">
          <h2 className="b2b_sub_title gradient_text text-center text-white m-0">
            {/* <SplitText text="A Team Built To" /> */}
            A Team Built To
            <br />
            <div className="splittext2">
              {/* <SplitText text="Build Your Success." /> */}
              Build Your Success.
            </div>
          </h2>
        </div>
        {/* Lower row */}
        <div
          className="team_section_lower d-flex"
          style={{
            position: "absolute",
            bottom: "7%",
            // left: `${-180 + progress * 220}%`,
            transform: `translateX(${4 + progress * 30}%)`,
            display: "flex",
            gap: "20px",
            transition: "all 0.5s",
            width: "400%"
          }}
        >
          {teamsdatalower.map(item =>
            <div key={item.id}>
              <Image
                src={item.empimage}
                alt={item.empname}
                width={1000}
                height={500}
                className="emp_image"
              />
              <p className="text-white">
                {item.empname}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
