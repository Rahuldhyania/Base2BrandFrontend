// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Mainnewhome from "./Mainnewhome";

// function Smoothscroll() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const requestRef = useRef<number | null>(null);
//   const currentY = useRef(0);
//   const targetY = useRef(0);
//   const [speed] = useState(0.08); // constant speed now

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     const smoothScroll = () => {
//       targetY.current = window.pageYOffset;
//       currentY.current += (targetY.current - currentY.current) * speed;
//       wrapper.style.transform = `translate3d(0, -${currentY.current}px, 0)`;
//       requestRef.current = requestAnimationFrame(smoothScroll);
//     };

//     requestRef.current = requestAnimationFrame(smoothScroll);

//     return () => {
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current);
//       }
//       wrapper.style.transform = "";
//     };
//   }, [speed]);

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       .page-wrapper {
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         will-change: transform;
//       }
//     `;
//     document.head.appendChild(style);

//     const calculateHeight = () => {
//       const wrapper = wrapperRef.current;
//       if (wrapper) {
//         const height = wrapper.scrollHeight;
//         document.body.style.height = `${height}px`;
//       }
//     };

//     requestAnimationFrame(calculateHeight);

//     window.addEventListener("resize", calculateHeight);
//     window.addEventListener("load", calculateHeight);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", calculateHeight);
//       window.removeEventListener("load", calculateHeight);
//       document.body.style.height = "";
//     };
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);

//   return (
//     <div>
//       {/* <div className="page-wrapper" ref={wrapperRef}> */}
//         <Mainnewhome />
//       {/* </div> */}
//     </div>
//   );
// }

// export default Smoothscroll;
