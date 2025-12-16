"use client";
import React, { useEffect, useState } from "react";
import "./Circularicons.css";
import Image from "next/image";

const NaturalCurvedIcons = () => {
  const icons = [
    {
      id: 1,
      name: "Shopify",
      bgColor: "#96bf47",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481103_hekfjp.png"
    },
    {
      id: 2,
      name: "Android",
      bgColor: "#3ddc84",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481096_1_surouj.png"
    },
    {
      id: 3,
      name: "React",
      bgColor: "#61dafb",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481094_zjo4fw.png"
    },
    {
      id: 4,
      name: "Node.js",
      bgColor: "#68a063",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481100_ibozdr.png"
    },
    {
      id: 5,
      name: "IoT",
      bgColor: "#ff6b6b",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481092_zhaoja.png"
    },
    {
      id: 6,
      name: "AI",
      bgColor: "#4ecdc4",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481095_smtjrs.png"
    },
    {
      id: 7,
      name: "AI",
      bgColor: "#4ecdc4",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481101_qu403c.png"
    },
    {
      id: 8,
      name: "AI",
      bgColor: "#4ecdc4",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481091_yanty4.png"
    },
    {
      id: 9,
      name: "AI",
      bgColor: "#4ecdc4",
      imagelink:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481093_lbzuo0.png"
    }
  ];

  const [radiusvalue, setradiusvalue] = useState(0);
  const [centerXvalue, setcenterXvalue] = useState(-200);
  const [centerYvalue, setcenterYvalue] = useState(300);
  const [startAnglevalue, setstartAnglevalue] = useState(-50);
  const [endAnglevalue, setendAnglevalue] = useState(50);

  const applyResizeValues = () => {
    if (window.innerWidth < 1380) {
      setradiusvalue(270);
      setcenterXvalue(-100);
      setcenterYvalue(200);
      setstartAnglevalue(-45);
      setendAnglevalue(45);
    } else if (window.innerWidth < 1660) {
      setradiusvalue(300);
      setcenterXvalue(-150);
      setcenterYvalue(230);
      setstartAnglevalue(-45);
      setendAnglevalue(45);
    } else if (window.innerWidth < 1840) {
      setradiusvalue(340);
      setcenterXvalue(-180);
      setcenterYvalue(280);
      setstartAnglevalue(-45);
      setendAnglevalue(45);
    } else if (window.innerWidth < 2000) {
      setradiusvalue(340);
      setcenterXvalue(-200);
      setcenterYvalue(300);
      setstartAnglevalue(-45);
      setendAnglevalue(45);
    }
    else {
      setradiusvalue(350);
      setcenterXvalue(-200);
      setcenterYvalue(330);
      setstartAnglevalue(-50);
      setendAnglevalue(50);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      applyResizeValues();
    }, 1500);

    window.addEventListener("resize", applyResizeValues);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", applyResizeValues);
    };
  }, []);

  const radius = radiusvalue;
  const centerX = centerXvalue;
  const centerY = centerYvalue;
  const startAngle = startAnglevalue;
  const endAngle = endAnglevalue;
  const step = (endAngle - startAngle) / (icons.length - 1);

  return (
    <div className="circular-icons-container" data-aos="fade-up">
      {icons.map((icon, i) => {
        const angle = (startAngle + step * i) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <div
            key={icon.id}
            className="circular-icon"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transition: "all 1s ease-in-out"
            }}
          >
            <Image
              src={icon.imagelink}
              alt={icon.name}
              width={1000}
              height={500}
              className="circular_icon_img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default NaturalCurvedIcons;
