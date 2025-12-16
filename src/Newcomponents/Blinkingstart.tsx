'use client'
import React, { useEffect } from 'react';

interface StarProps {
  width: string;  // Dynamic width of the star
  height: string; // Dynamic height of the star
  fadeInDelay: number; // Delay before the star fades in
}

const BlinkingStars: React.FC<StarProps> = ({ width, height, fadeInDelay }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const stars = document.querySelectorAll('.star');

      stars.forEach((star) => {
        star.classList.add('scale-rotate');
        setTimeout(() => {
          star.classList.remove('scale-rotate');
          star.classList.add('twinkle');
        }, 1000); 

        setTimeout(() => {
          star.classList.add('fade-out');
          setTimeout(() => {
            star.classList.remove('fade-out');
            star.classList.add('fade-in-reverse');
          }, 1500); 
        }, fadeInDelay); 
      });
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="star mainstart" style={{ width, height }}></div>

      <style jsx>{`
        body {
          background: black;
        }

        h1 {
          color: white;
          font-size: 72px;
          padding: 25px 0 0 100px;
          font-family: helvetica;
          font-weight: 100;
        }

        .header {
          position: relative;
          height: 100vh;
        }

        .star {
          position: absolute;
          background: url(https://mtedwards.s3.amazonaws.com/sparkle.png) no-repeat;
          background-size: contain;
          opacity: 0;
          transition: opacity 1s ease, transform 2s ease; /* Transition for opacity and transform */
        }

        /* Dynamic width and height for each star */
        .mainstart {
          top: 46px;
          left: 162px;
        }

        /* First blink: scale from 0 and rotate */
        .scale-rotate {
          transform: scale(0) rotate(30deg); /* Initial scale and rotation */
          opacity: 1;
        }

        /* Twinkling effect */
        .twinkle {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          transition: scale 2s ease, opacity 2s ease; /* Smooth scaling and opacity transition */
        }

        /* Reverse fade-in after fade-out */
        .fade-in-reverse {
          opacity: 1;
          transform: scale(0.8) rotate(-15deg); /* Reverse scale and rotation for fade-in */
          transition: opacity 1.5s ease, transform 1.5s ease;
        }

        /* Fade out before reappearing */
        .fade-out {
          opacity: 0;
          transform: scale(0) rotate(45deg); /* Shrink and rotate when fading out */
          transition: opacity 1.5s ease, transform 1.5s ease; /* Fade and reverse scale/rotation */
        }
      `}</style>
    </div>
  );
};

export default BlinkingStars;
