"use client"

import React from "react";
import Animation2d from './Animation2d';
import CountUp, { useCountUp } from 'react-countup';
import Image from "next/image";

const motioncardData = [
  {
    factnumber: 500,
    factcard_title: "Projects successfully delivered"
  },
  {
    factnumber: 100,
    factcard_title: "Client Satisfaction Rate"
  },
  {
    factnumber: 500,
    factcard_title: "Client Collaborations"
  },
  {
    factnumber: 15,
    factcard_title: "Industries Served"
  },
  {
    factnumber: 8,
    factcard_title: "Years of expertise"
  }
];
export default function Motionfactcard() {
  return (
    <div className="dotted_bg">
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <h2 className="sm_heading_text sm_orange  font_700">
            Quick Facts <span className="sm_skyblue"> About Us </span>
          </h2>
        </div>
        <div className="motionfactcard row justify-content-center">
          {motioncardData.map((data, index) =>
            <div className="col-12 col-lg-6 col-xxl-4 mt-4" key={index}>
              <div className="mainfact_card">
                <div className="mainfact_card_upper">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/view-3d-animated-cartoon-bird_sspxr5.webp"
                    alt="*"
                    width={10000}
                    height={500}
                  />
                  <div className="factnumber_outer">
                    <h2 className="fact_card_title sm_skyblue">
                      <CountUp end={data.factnumber} enableScrollSpy />{'+'}
                    </h2>
                  </div>
                </div>
                <div className="mainfact_card_lower">
                  <div className="fact_card_text">
                    {data.factcard_title}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Animation2d />
    </div>
  );
}
