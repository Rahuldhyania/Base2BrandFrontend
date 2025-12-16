"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  animationDelay?: number; // ms delay between letters
  animationType?:
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scale"
    | "rotate";
  threshold?: number;
  duration?: number;
};

export default function SplitText({
  text,
  className,
  animationDelay = 50,
  animationType = "fadeInUp",
  threshold = 0.2,
  duration = 0.5,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // animate jab visible ho
        } else {
          setIsVisible(false); // reset jab bahar jaye
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <>
      <div
        ref={containerRef}
        className={`split-text ${isVisible ? "animate" : ""} ${animationType} ${
          className || ""
        }`}
        style={{
          // @ts-ignore
          "--animation-delay": `${animationDelay}ms`,
          "--animation-duration": `${duration}s`,
        }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="split-letter"
            style={{ animationDelay: `${i * animationDelay}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      <style jsx>{`
        .split-text {
          display: inline-block;
        }

        .split-letter {
          display: inline-block;
          opacity: 0;
          animation-fill-mode: both;
          animation-duration: var(--animation-duration, 0.5s);
          animation-timing-function: ease;
          animation-play-state: paused;
        }

        .split-text.animate .split-letter {
          animation-play-state: running;
        }

        /* Fade In Up */
        .split-text.fadeInUp .split-letter {
          animation-name: fadeInUp;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade In Down */
        .split-text.fadeInDown .split-letter {
          animation-name: fadeInDown;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade In Left */
        .split-text.fadeInLeft .split-letter {
          animation-name: fadeInLeft;
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Fade In Right */
        .split-text.fadeInRight .split-letter {
          animation-name: fadeInRight;
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Scale */
        .split-text.scale .split-letter {
          animation-name: scale;
          transform-origin: center;
        }
        @keyframes scale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Rotate */
        .split-text.rotate .split-letter {
          animation-name: rotate;
          transform-origin: center;
        }
        @keyframes rotate {
          from {
            opacity: 0;
            transform: rotate(180deg);
          }
          to {
            opacity: 1;
            transform: rotate(0);
          }
        }
      `}</style>
    </>
  );
}
