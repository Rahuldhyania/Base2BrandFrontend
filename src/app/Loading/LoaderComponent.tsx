'use client'
import React from "react";

const LoaderComponent = () => (
  <>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .loader-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #000000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    `}</style>
    <div className="backdrop text-center pb-5 d-flex align-items-center justify-content-center">
      <div className="loader-spinner" role="status" aria-label="Loading"></div>
    </div>
  </>
);

export default LoaderComponent;
