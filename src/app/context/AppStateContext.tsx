"use client";

import React, { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect } from 'react';

interface AppStateContextType {
  blogsRoute: boolean;
  setBlogsRoute: Dispatch<SetStateAction<boolean>>;
  currentUrl: string;
  setCurrentUrl: Dispatch<SetStateAction<string>>;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogsRoute, setBlogsRoute] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    const ns = "http://www.w3.org/2000/svg";
    const markers = document.querySelectorAll(".handdrawn");

    markers.forEach((marker) => {
      if (!(marker instanceof HTMLElement)) return; // Ensure marker is an HTMLElement

      const element = marker as HTMLElement;
      const svg = createSVG(ns, element.offsetWidth, element.offsetHeight * 2);
      const path = createPath(ns);

      svg.appendChild(path);
      element.appendChild(svg);

      const pathString = generateCirclePath();
      const pathLength = 1000 * getPathLength(path, pathString);

      path.setAttribute("stroke-dasharray", pathLength.toString());
      path.setAttribute("stroke-dashoffset", pathLength.toString());
      path.style.visibility = "hidden";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animatePath(path);
          } else {
            resetPath(path, pathLength);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
    });

    function createSVG(ns: string, width: number, height: number): SVGSVGElement {
      const svg = document.createElementNS(ns, "svg") as SVGSVGElement;

      Object.assign(svg.style, {
        width: `100%`,
        height: `${height}px`,
        transform: `scale(${(1.6 * width) / height}, 1)`,
        position: "absolute",
        top: "-50%",
        left: "0",
        right: "0",
        margin: "0",
        pointerEvents: "none",
        zIndex: "0",
      });

      svg.setAttribute("viewBox", "-1 -1 2 2");
      return svg;
    }

    function createPath(ns: string): SVGPathElement {
      // Explicitly cast `path` to `SVGPathElement`
      const path = document.createElementNS(ns, "path") as SVGPathElement;

      Object.assign(path.style, {
        transition: "stroke-dashoffset 2s linear",
        strokeWidth: "1",
        stroke: "#9588E8",
        fill: "none",
        strokeLinecap: "round",
      });

      path.setAttribute("pathLength", "100");
      path.setAttribute("vector-effect", "non-scaling-stroke");
      return path;
    }

    function generateCirclePath(): string {
      const c = 0.551915024494,
        β = Math.atan(c),
        d = Math.sqrt(c * c + 1);
      let r = 0.9,
        θ = ((150 + Math.random() * 40) * Math.PI) / 180;
      let path = `M${r * Math.sin(θ)} ${r * Math.cos(θ)} C${d * r * Math.sin(θ + β)} ${d * r * Math.cos(θ + β)}`;

      for (let i = 0; i < 4; i++) {
        θ += (Math.PI / 2) * (1 + 0.05 + Math.random() * 0.25);
        r *= 1 + (-0.15 + Math.random() * 0.2);
        path += ` ${i ? "S" : ""}${d * r * Math.sin(θ - β)} ${d * r * Math.cos(θ - β)} ${r * Math.sin(θ)} ${r * Math.cos(θ)}`;
      }
      return path;
    }

    function getPathLength(path: SVGPathElement, d: string): number {
      path.setAttribute("d", d);
      return path.getTotalLength();
    }

    function animatePath(path: SVGPathElement): void {
      path.style.visibility = "visible";
      requestAnimationFrame(() => (path.style.strokeDashoffset = "0"));
    }

    function resetPath(path: SVGPathElement, length: number): void {
      path.style.strokeDashoffset = length.toString(); // Convert the number to a string
      path.style.visibility = "hidden";
    }
    
  }, []);

  return (
    <AppStateContext.Provider value={{ blogsRoute, setBlogsRoute, currentUrl, setCurrentUrl }}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext };
