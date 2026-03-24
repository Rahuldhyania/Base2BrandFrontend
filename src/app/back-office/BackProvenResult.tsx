"use client";

import { memo, useEffect, useRef, useState } from 'react';

interface BackProvenResultProps {
  title?: string;
}

const provenResult = [
  { id: 1, number: 99.9, label: "99.9", title: "Data Security Uptime" },
  { id: 2, number: 92,   label: "92",   title: "Customer Satisfaction Rate" },
  { id: 3, number: 48,   label: "48",   title: "Improvement in Issue Resolution Rate" },
  { id: 4, number: 35,   label: "35",   title: "Average Reduction in Response Time" },
];

const RADIUS = 85;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ANIMATION_DURATION = 1800;

interface RingProps {
  number: number;
  label: string;
  title: string;
  delay: number;
}

const Ring = ({ number, label, title, delay }: RingProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const offset = CIRCUMFERENCE - (number / 100) * CIRCUMFERENCE;
            setTimeout(() => {
              if (circleRef.current) {
                circleRef.current.style.strokeDashoffset = String(offset);
              }
            }, delay);

            const isDecimal = label.includes(".");
            let startTime: number | null = null;
            let rafId: number;

            setTimeout(() => {
              const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min(
                  (timestamp - startTime) / ANIMATION_DURATION,
                  1
                );
                const eased = 1 - Math.pow(1 - progress, 4);
                const current = eased * number;

                setDisplayValue(
                  isDecimal
                    ? current.toFixed(1)
                    : Math.floor(current).toString()
                );

                if (progress < 1) {
                  rafId = requestAnimationFrame(step);
                } else {
                  setDisplayValue(label);
                  cancelAnimationFrame(rafId);
                }
              };
              rafId = requestAnimationFrame(step);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [number, label, delay]);

  return (
    <div data-aos="fade-up" data-aos-duration="500" className="proven-item" ref={wrapRef}>
      <div className="ring-wrap">
        <svg width="200" height="200" viewBox="0 0 200 200"style={{ transform: "rotate(-90deg)" }}>
          <circle cx="100" cy="100" r={RADIUS} fill="none"stroke="#2a2550"strokeWidth="12"/>
          <circle ref={circleRef} cx="100" cy="100" r={RADIUS} fill="none" stroke="#b39ddb" strokeWidth="12" strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE} style={{ transition: `stroke-dashoffset ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,}}/>
        </svg>

        <div className="ring-number">
          <span className="ring-value">{displayValue}%</span>
        </div>
      </div>

      {title && <p className="ring-label">{title}</p>}
    </div>
  );
};

const BackProvenResult = ({ title }: BackProvenResultProps) => {
  return (
    <div className="back-proven-result">
      <div className="b2b-container-lg">
        {title && <h2 data-aos="fade-up" data-aos-duration="500">{title.split(' ').map((word,index)=>(
         <span
            key={index}
            className={index === 1 || index === 5 ? 'highlighttext' : 'normaltext'}>
            {word}{index < title.split(' ').length - 1 ? ' ' : ''}
          </span>
        ))}</h2>}
        <div className="proven-result-wr">
          {provenResult.map((item, index) => (
            <Ring 
              key={item.id}
              number={item.number}
              label={item.label}
              title={item.title}
              delay={200 + index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(BackProvenResult);