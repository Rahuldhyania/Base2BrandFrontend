"use client";
import React, { useEffect, useRef, useState } from "react";
import "./StickyTextExpander.css";

type TextExpanderProps = {
  text: string;
  subtitle: string;
};

export default function StickyTextExpander({ text, subtitle }: TextExpanderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const headingWords = text.split(" ");
  const subtitleWords = subtitle.split(" ");
  const totalWords = headingWords.length + subtitleWords.length;

  useEffect(() => {
    const calculateProgress = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Total scrollable distance of the container
      const scrollable = container.height - windowHeight;

      // How much has been scrolled through the container
      const scrolled = Math.min(Math.max(-container.top, 0), scrollable);

      // Normalize (0 → 1)
      const ratio = scrollable > 0 ? scrolled / scrollable : 0;
      setProgress(ratio);
    };

    const onScroll = () => requestAnimationFrame(calculateProgress);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calculateProgress);
    calculateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  // Words to reveal based on progress
  const wordsToShow = Math.floor(progress * totalWords);

  const headingVisible = headingWords
    .slice(0, Math.min(wordsToShow, headingWords.length))
    .join(" ");
  const subtitleVisible =
    wordsToShow > headingWords.length
      ? subtitleWords.slice(0, wordsToShow - headingWords.length).join(" ")
      : "";

  const bgWidth = `${progress * 100 || 0.0001}%`;

  return (
    <div className="preview" ref={containerRef}>
      <div className="preview-sticky" ref={stickyRef}>
        <div className="preview__wrap">
          <div className="preview__bg" style={{ width: bgWidth }} />
          <div className="preview_text_bg">
            <h2
              className="main_header_text preview_text newgradient_text"
              dangerouslySetInnerHTML={{
                __html: `LET'S EXPLORE ${headingVisible}`,
              }}
            />
            <p
              className="new_subtitle preview_text newgradient_text"
              dangerouslySetInnerHTML={{ __html: subtitleVisible }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
