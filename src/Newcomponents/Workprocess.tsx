"use client";
import React, { useEffect, useState, useRef } from "react";
import SplitText from "./Splittext";
import "./Workprocess.css";
import Image from "next/image";
const steps = [
  { id: 1, title: "Research", subtitle: "Plan Brand Growth1" },
  { id: 2, title: "Planning", subtitle: "Plan Brand Growth2" },
  { id: 3, title: "Design", subtitle: "Plan Brand Growth3" },
  { id: 4, title: "Development", subtitle: "Plan Brand Growth4" },
  { id: 5, title: "Testing", subtitle: "Plan Brand Growth5" },
  { id: 6, title: "Launch", subtitle: "Plan Brand Growth6" }
];

const stepPositionsOnPath = [0.19, 0.33, 0.44, 0.58, 0.7, 0.82];

const StepMarker = () =>
  <Image
    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481204_lncrxz.png"
    alt=""
    width={1000}
    height={500}
    className="w-auto"
  />;

const ActiveStepMarker = () =>
  <Image
    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481202_qli2na.png"
    alt=""
    width={1000}
    height={500}
    className="w-auto"
  />;

export default function WorkingProcess() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [rectstate, setRect] = useState<number | null>(null);
  const activeMobileStep = Math.min(
    Math.floor(progress * steps.length),
    steps.length - 1
  );

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      var rect = container.getBoundingClientRect();
      const { top, height } = rect;
      setRect(rect.y);
      const viewportHeight = window.innerHeight;
      const scrollableHeight = height - viewportHeight;
      const currentProgress = Math.max(0, -top / scrollableHeight);
      setProgress(Math.min(currentProgress, 1));
      const threshold = 0.009;
      let newActiveIndex: number | null = null;
      for (let i = 0; i < stepPositionsOnPath.length; i++) {
        if (currentProgress >= stepPositionsOnPath[i] - threshold) {
          newActiveIndex = i;
        }
      }
      setActiveStepIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);

    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => {
      // console.log("Updated rectstate:", rectstate);
    },
    [rectstate]
  );

  useEffect(
    () => {
      if (!pathRef.current) return;
      const point = getPointAtProgress(progress);
      // console.log("kjas", point);
    },
    [progress]
  );

  const getPointAtProgress = (p: number) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    return path.getPointAtLength(p * pathLength);
  };

  const movingDotPosition = getPointAtProgress(progress);
  return (
    <div>
      <div className="position-relative">
        <section className="process-section">
          {/* Mobile Version */}
          <div className="mobile-container">
            <div className="mobile-steps">
              <div className="mobile-line" />
              <div
                className="mobile-progress-line"
                style={{ height: `${progress * 100}%` }}
              />
              {steps.map((step, index) =>
                <div
                  key={step.id}
                  className={`mobile-step ${index === activeMobileStep
                    ? "active"
                    : ""}`}
                >
                  <div className="mobile-step-dot" />
                  <div className="mobile-step-title">
                    {step.title}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Version */}
          <div ref={containerRef} className="desktop-container">
            <div className="sticky-wrapper ">
              {rectstate < 0
                ? <div
                  className={`animation-canvas ${rectstate < 0
                    ? "animate-in"
                    : ""}`}
                >
                  <div className="svg-layer">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 1200 600"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        ref={pathRef}
                        d="M-50 400 C 50 200, 250 450, 450 350 S 600 130, 800 200 S 1200 50, 1250 50"
                        stroke="rgba(100, 100, 255, 0.5)"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <circle
                        cx={movingDotPosition.x}
                        cy={movingDotPosition.y}
                        r="8"
                        fill="#4A00E0"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="content-layer">
                    {stepPositionsOnPath.map((pos, index) => {
                      var point = getPointAtProgress(pos);
                      const isActive = index === activeStepIndex;
                      return (
                        <div
                          key={steps[index].id}
                          className="step-marker-group"
                          style={{
                            left: `${point.x / 1200 * 100}% `,
                            top: `${point.y / 600 * 100}%`
                          }}
                        >
                          <div className="progress_lenceimg">
                            {isActive ? <ActiveStepMarker /> : <StepMarker />}
                          </div>

                          <div
                            className="step-label"
                            style={{
                              background: isActive
                                ? "linear-gradient(256deg, rgba(40, 83, 255, 1) -6%, rgba(154, 209, 252, 1) 83%, rgb(253 253 253) 98%)"
                                : "#262626",
                              color: isActive ? "black" : "white",
                              borderColor: isActive ? "white" : "black",
                              transition: "all 0.5s"
                            }}
                          >
                            {steps[index].title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                : null}

              <div className="process_section_outer new_bg_black">
                <div className="new_cus_container">
                  <h2 className="b2b_sub_title text-white gradient_text m-0">
                    {/* <SplitText text="The Glow-Up " />
                    <br />
                    <SplitText text="Journey" /> */}
                    The Glow-Up
                    <br />
                    Journey
                  </h2>

                  <div className="text-end">
                    <h2 className="main_header_text text-white wave-text">
                      {activeStepIndex !== null && steps[activeStepIndex]
                        ? <SplitText
                          text={steps[activeStepIndex].subtitle}
                          key={activeStepIndex}
                          duration={0.1}
                        />
                        : null}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
