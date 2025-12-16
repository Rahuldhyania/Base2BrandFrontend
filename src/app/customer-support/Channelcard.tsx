"use client";
import Image from "next/image";
import React from "react";
type channel_card = {
  cha_img: string;
  cha_title: string;
  cha_para: string;
};
const Channelcard = ({ cha_img, cha_title, cha_para }: channel_card) => {
  return (
    <div>
      <div className="ch_card_outer">
        <div
          className="ch_card_inner"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(39,38,38,1) 100%)"
          }}
        >
          <div className="cha_img">
            <Image src={cha_img} alt="" width={1000} height={500} />
          </div>
          <div className="cha_title">
            <h4
              className="b2b-service-heading m-0 pt-3 pb-3"
              style={{ color: "#B6CCFF" }}
            >
              {cha_title}
            </h4>
          </div>
          <div className="cha_para">
            <p className="text-white">
              {cha_para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channelcard;
