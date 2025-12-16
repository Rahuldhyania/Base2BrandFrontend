"use client";
import React, { useState, useEffect } from "react";
import SplitText from "../Splittext";
import Faqcard from "./Faqcard";
import { motion } from "framer-motion";

 const reviews = [
    {
      client_company: "VIP NUMBER SHOP",
      client_review:
        "I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future.",
      clinet_name: "Deepak Dhingra 1",
    },
    {
      client_company: "CSEM, INC.",
      client_review:
        "It was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.",
      clinet_name: "Frank Quarato 2",
    },
    {
      client_company: "CSEM, INC.",
      client_review:
        "It was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.",
      clinet_name: "Frank Quarato 3",
    },
    {
      client_company: "VIP NUMBER SHOP",
      client_review:
        "I had the pleasure of working with an excellent and fully professional team comprising of Arti Bhatia, Ajay Kumar, Rakesh Kumar, and Aashu. They have delivered outstanding work, and I look forward to working with them in the future.",
      clinet_name: "Deepak Dhingra 4",
    },
    {
      client_company: "CSEM, INC.",
      client_review:
        "It was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.",
      clinet_name: "Frank Quarato 5",
    },
    {
      client_company: "CSEM, INC.",
      client_review:
        "It was good to collaborate and discuss innovative ideas. Was a very fair and pleasurable experience dealing with the team and we look forward to working together again soon.",
      clinet_name: "Frank Quarato 6",
    },
  ];

export default function Faqnew() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="new_bg_black py-10 cursor-none">
      <div className="new_cus_container overflow-hidden">
        <h2 className="b2b_sub_title gradient_text text-white m-0 pt-5">
          {/* <SplitText text="What Our" /> */}
          What Our
          <br />
          <div className="splittext2">
            {/* <SplitText text="Clients Say?" /> */}
            Clients Say?
          </div>
        </h2>

        <div className="pt-5">
          <motion.div
            className="faq_slider_outer pt-5 mt-10"
            drag="x"
            dragConstraints={{ left: -1500, right: 0 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.div
              className="faq_slider_inner flex gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
            >
              {[...reviews, ...reviews].map((item, i) => (
                <Faqcard
                  key={i}
                  client_company={item.client_company}
                  client_review={item.client_review}
                  clinet_name={item.clinet_name}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Cursor DRAG Button */}
      {/* {hovered && (
        <div
          className="fixed z-50 pointer-events-none px-6 py-3 rounded-full 
                     bg-gradient-to-r from-blue-300 to-blue-600 
                     text-black font-semibold shadow-lg flex items-center justify-center
                     transition-opacity duration-200 sdfsdfsdfs"
          style={{
            top: mousePos.y + 10, // cursor ke thoda neeche
            left: mousePos.x + 10, // cursor ke thoda right
            transform: "translate(-50%, -50%)",
          }}
        >
          DRAG
        </div>
      )} */}
    </div>
  );
}
