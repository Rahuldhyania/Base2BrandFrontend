import React, { useMemo } from "react";
import Link from "next/link";

type Props = {
  btnname: string;
  color: string;
  hovercolor: string;
  pagelink?: string;
  background?: string;
  arrow?: boolean;
};

export default function Newbutton({
  btnname,
  color,
  hovercolor,
  pagelink,
  background,
  arrow
}: Props) {
  const uniqueClassName = useMemo(() => {
    return `animated-button-${Math.random().toString(36).substring(2, 9)}`;
  }, []);

  const buttonStyles = useMemo(() => {
    const bgColor = background ? background : "inherit";
    
    return `
      .${uniqueClassName} {
        position: relative;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px 36px;
        border: 4px solid;
        border-color: transparent;
        font-size: 16px;
        background-color: ${bgColor};
        border-radius: 100px;
        font-weight: 600;
        color: ${color};
        box-shadow: 0 0 0 2px ${bgColor};
        cursor: pointer;
        overflow: hidden;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .${uniqueClassName} svg {
        position: absolute;
        width: 24px;
        fill: ${color};
        z-index: 9;
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .${uniqueClassName} .arr-1 {
        right: 16px;
      }

      .${uniqueClassName} .arr-2 {
        left: -25%;
      }

      .${uniqueClassName} .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        background-color: ${color};
        border-radius: 50%;
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .${uniqueClassName} .text {
        position: relative;
        z-index: 1;
        transform: translateX(-12px);
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .${uniqueClassName}:hover {
        box-shadow: 0 0 0 12px transparent;
        color: #212121;
        border-radius: 12px;
        padding:10px 36px;
        border-color: ${hovercolor};
      }

      .${uniqueClassName}:hover .arr-1 {
        right: -25%;
      }

      .${uniqueClassName}:hover .arr-2 {
        left: 16px;
      }

      .${uniqueClassName}:hover .text {
        transform: translateX(12px);
        color: ${hovercolor} !important;
      }

      .${uniqueClassName}:hover svg {
        fill: ${hovercolor};
      }

      .${uniqueClassName}:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px ${color};
      }

      .${uniqueClassName}:hover .circle {
        width: 220px;
        height: 220px;
        opacity: 1;
      }
      @media screen and (max-width:1660px){
           .${uniqueClassName} {
             padding: 4px 24px;
             font-size: 13px;
           }
          .${uniqueClassName} svg
            {
              width:18px;
            }
          .${uniqueClassName}:hover {
            padding: 5px 20px;  
          }
      }
    `;
  }, [color, hovercolor, background, uniqueClassName]);

  const buttonContent = useMemo(() => (
    <>
      <svg
        viewBox="0 0 24 24"
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="text">
        {btnname}
      </span>
      <span className="circle" />
      {arrow && (
        <svg
          viewBox="0 0 24 24"
          className="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      )}
    </>
  ), [btnname, arrow]);

  return (
    <div>
      <style>{buttonStyles}</style>
      {pagelink ? (
        <Link href={pagelink}>
          <button className={uniqueClassName}>
            {buttonContent}
          </button>
        </Link>
      ) : (
        <button className={uniqueClassName}>
          {buttonContent}
        </button>
      )}
    </div>
  );
}