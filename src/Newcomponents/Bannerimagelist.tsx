'use client'
import React from 'react';
import Image from 'next/image';

const imagedata = [
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png"
];

const HalfRoundedImageList = () => {
  return (
    <div className="container">
      <div className="curved-image-list">
        {imagedata.map((data, index) => (
          <div key={index} className="image-item">
            <div className="image-wrapper">
              <Image
                src={data}
                alt={`Technology ${index + 1}`}
                width={40}
                height={40}
                className="tech-image"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        .header p {
          color: #666;
          font-size: 1.1rem;
        }
        
        .curved-image-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 600px;
          position: relative;
          padding: 2rem 0;
        }
        
        .image-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem;
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .image-item:hover {
          transform: translateY(-5px);
        }
        
        .image-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e6e6e6;
          padding: 8px;
          transition: all 0.3s ease;
        }
        
        .image-wrapper:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          border-color: #4f46e5;
        }
        
        .tech-image {
          border-radius: 50%;
          object-fit: contain;
        }
        
        .label {
          position: absolute;
          bottom: -25px;
          background: #4f46e5;
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }
        
        /* Curved layout positioning */
        .curved-image-list .image-item:nth-child(1) {
          transform: translate(0, 0);
        }
        
        .curved-image-list .image-item:nth-child(2) {
          transform: translate(0, 20px);
        }
        
        .curved-image-list .image-item:nth-child(3) {
          transform: translate(0, 40px);
        }
        
        .curved-image-list .image-item:nth-child(4) {
          transform: translate(0, 60px);
        }
        
        .curved-image-list .image-item:nth-child(5) {
          transform: translate(0, 80px);
        }
        
        .curved-image-list .image-item:nth-child(6) {
          transform: translate(0, 100px);
        }
        
        .curved-image-list .image-item:nth-child(7) {
          transform: translate(0, 80px);
        }
        
        .curved-image-list .image-item:nth-child(8) {
          transform: translate(0, 60px);
        }
        
        .curved-image-list .image-item:nth-child(9) {
          transform: translate(0, 40px);
        }
        
        .curved-image-list .image-item:nth-child(10) {
          transform: translate(0, 20px);
        }
        
        .curved-image-list .image-item:nth-child(11) {
          transform: translate(0, 0);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .curved-image-list {
            max-height: none;
            flex-wrap: nowrap;
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 3rem;
          }
          
          .image-item {
            flex: 0 0 auto;
          }
          
          /* Reset transforms for mobile */
          .curved-image-list .image-item {
            transform: none !important;
            margin: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HalfRoundedImageList;