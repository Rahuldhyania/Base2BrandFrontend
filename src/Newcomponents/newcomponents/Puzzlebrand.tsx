"use client";
import React, { useState, useEffect, useRef } from "react";
import SplitText from "../Splittext";
import Image from "next/image";

export default function Puzzlebrand() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOverTarget, setDragOverTarget] = useState(null);
  const [isDropped, setIsDropped] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const offsetsRef = useRef({});

  const imagesdata = [
    {
      id: 1,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481206_wjah1h.png",
      class: "cus_row1 cus_col1"
    },
    {
      id: 2,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481207_khgnfu.png",
      class: "cus_row1 cus_col2"
    },
    {
      id: 3,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481208_an8mu1.png",
      class: "cus_row1 cus_col3"
    },
    {
      id: 4,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481209_wunenb.png",
      class: "cus_row1 cus_col4"
    },
    {
      id: 5,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481210_sbod4g.png",
      class: "cus_row1 cus_col5"
    },
    {
      id: 6,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481230_kk3azr.png",
      class: "cus_row2 cus_col1"
    },
    {
      id: 7,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481229_zhf6ii.png",
      class: "cus_row2 cus_col2"
    },
    {
      id: 8,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059082/base2brand_website/new%20home%20page/Group_1707481228_zi2wq4.png",
      class: "cus_row2 cus_col3"
    },
    {
      id: 9,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059081/base2brand_website/new%20home%20page/Group_1707481232_tt4dfg.png",
      class: "cus_row2 cus_col4"
    },
    {
      id: 10,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059081/base2brand_website/new%20home%20page/Group_1707481226_yhjey9.png",
      class: "cus_row2 cus_col5"
    },
    {
      id: 11,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481225_ngrazo.png",
      class: "cus_row3 cus_col1"
    },
    {
      id: 12,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481224_yk8zrc.png",
      class: "cus_row3 cus_col2"
    },
    {
      id: 0,
      brandlogo: !isDropped
        ? "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481224_1_h3b0vt.png"
        : "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481233_2_uxy30l.png",
      class: "cus_row3 cus_col3"
    },
    {
      id: 13,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481232_1_jswizh.png",
      class: "cus_row3 cus_col4"
    },
    {
      id: 14,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481221_ioealh.png",
      class: "cus_row3 cus_col5"
    },
    {
      id: 15,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481216_ubbb8h.png",
      class: "cus_row4 cus_col1"
    },
    {
      id: 16,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481217_mr9du8.png",
      class: "cus_row4 cus_col2"
    },
    {
      id: 17,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481218_wtxifw.png",
      class: "cus_row4 cus_col3"
    },
    {
      id: 18,
      brandlogo:
        "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481220_kpyzsl.png",
      class: "cus_row4 cus_col4"
    },
    {
      id: 19,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059082/base2brand_website/new%20home%20page/Group_1707481219_djplzw.png",
      class: "cus_row4 cus_col5"
    },
    {
      id: 20,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757060441/base2brand_website/new%20home%20page/Group_1707481215_hlptas.png",
      class: "cus_row5 cus_col1"
    },
    {
      id: 21,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059081/base2brand_website/new%20home%20page/Group_1707481232_tt4dfg.png",
      class: "cus_row5 cus_col2"
    },
    {
      id: 22,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059081/base2brand_website/new%20home%20page/Group_1707481212_tvcejw.png",
      class: "cus_row5 cus_col3"
    },
    {
      id: 23,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059081/base2brand_website/new%20home%20page/Group_1707481211_bvdjbu.png",
      class: "cus_row5 cus_col4"
    },
    {
      id: 24,
      brandlogo:
        "https://res.cloudinary.com/driveuyen/image/upload/v1757059082/base2brand_website/new%20home%20page/Group_1707481220_kpyzsl.png",
      class: "cus_row5 cus_col5"
    }
  ];

  // Assign offsets
  useEffect(() => {
    const newOffsets = {};
    const centerRow = 3;
    const centerCol = 3;

    imagesdata.forEach(data => {
      if (data.id !== 0) {
        const row = parseInt(data.class.match(/row(\d+)/)[1]);
        const col = parseInt(data.class.match(/col(\d+)/)[1]);

        let offsetX = 0,
          offsetY = 0;

        if (row < centerRow) offsetY = -(200 + Math.random() * 4000);
        if (row > centerRow) offsetY = 200 + Math.random() * 4000;
        if (col < centerCol) offsetX = -(200 + Math.random() * 4000);
        if (col > centerCol) offsetX = 200 + Math.random() * 4000;

        newOffsets[data.id] = { x: offsetX, y: offsetY };
      }
    });
    offsetsRef.current = newOffsets;
  }, []);

  // Scroll progress calc
  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.querySelector(".sticky-anim-wrapper");
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Kitna scroll hua hai wrapper ke andar
      let progress = (windowHeight - rect.top) / (rect.height - windowHeight);

      // normalize karo 0 se 1 ke beech
      progress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag handlers
  const handleDragStart = e => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "dragging-puzzle-piece");
  };
  const handleDragEnd = () => setIsDragging(false);
  const handleDragOver = (e, itemId) => {
    e.preventDefault();
    if (itemId === 0) setDragOverTarget(itemId);
  };
  const handleDragLeave = () => setDragOverTarget(null);
  const handleDrop = (e, itemId) => {
    e.preventDefault();
    setDragOverTarget(null);
    if (itemId === 0) setIsDropped(true);
  };

  return (
    <div className="new_bg_black position-relative  pt-5">
      <div className="new_cus_container  pt-5">
        <h2 className="b2b_sub_title gradient_text text-white pt-5 m-0">
          {/* <SplitText text="Shaping the Puzzle " /> */}
          Shaping the Puzzle
          <div className="splittext2" ref={containerRef}>
            {/* <SplitText text="of Top Brands" /> */}
            of Top Brands
          </div>
        </h2>

        <div className="sticky-anim-wrapper">
          <div className="sticky-inner">
            {/* {!isDropped &&
              <div
                className="drap_drop"
                draggable={true}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                  cursor: isDropped ? "default" : "grab",
                  opacity: isDragging ? 0.5 : 1
                }}
              >
                <Image
                  src="https://res.cloudinary.com/driveuyen/image/upload/v1757069525/base2brand_website/new%20home%20page/Group_1707481233_2_uxy30l.png"
                  alt="brand logo"
                  width={1000}
                  height={500}
                  className="w-auto draggable-piece"
                />
              </div>} */}

            <div className="new_brand_logo_outer container">
              {imagesdata.map((data, index) => {
                const offset = offsetsRef.current[data.id] || { x: 0, y: 0 };
                const translateX = offset.x * (1 - scrollProgress);
                const translateY = offset.y * (1 - scrollProgress);

                return (
                  <div
                    key={index}
                    className={`new_brand_logo ${data.class} ${isDragging
                      ? "drag-active"
                      : ""} ${dragOverTarget === data.id ? "drag-over" : ""}`}
                    style={{
                      transform: `translate(${translateX}px, ${translateY}px)`,
                      transition: "transform 0.2s linear",
                      zIndex: `${100 - index}`
                    }}
                    onDragOver={e => handleDragOver(e, data.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={e => handleDrop(e, data.id)}
                  >
                    <Image
                      src={data.brandlogo}
                      alt="brand logo"
                      width={1000}
                      height={500}
                    />
                    {data.id === 0 &&
                      isDragging &&
                      <div className="drop-zone-indicator">
                        {dragOverTarget === 0 ? "Drop here!" : "Drop target"}
                      </div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CSS inside same file */}
      <style jsx>{`
        .sticky-anim-wrapper {
          position: relative;
          height: 210vh; /* 2x viewport height */
        }
        .sticky-inner {
          position: sticky;
          top: 0;
          height: 100vh; /* lock kar dega 1 viewport ke liye */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .draggable-piece:active {
          cursor: grabbing;
        }
        .new_brand_logo.drag-active {
          transition: opacity 0.2s ease;
        }
        .new_brand_logo.drag-over {
          background-color: rgba(255, 255, 255, 0.1);
          border: 2px dashed #fff;
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
        .drop-zone-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .new_brand_logo {
          position: relative;
          transition: transform 0s linear;
        }
        .new_brand_logo.drag-over .drop-zone-indicator {
          opacity: 1;
        }
        .new_brand_logo_outer {
          display: flex;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: auto;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
