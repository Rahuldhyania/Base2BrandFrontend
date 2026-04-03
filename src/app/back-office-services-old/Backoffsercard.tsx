"use client"
import Image from "next/image";
import React from "react";
type Backoffsercard = {
  flex_reverse?: string
  drop_shadow?: string
  card_title: string
  card_para: string
  card_title_img: string
  card_banner: string
};
const Backoffsercard = ({ flex_reverse, card_title, card_para, card_title_img, card_banner, drop_shadow }: Backoffsercard) => {
  return (
    <div className="baoff_service_card">
      <div className="cus_container">
        <div className={`row ${flex_reverse} ph_card`}>
          <div className="col-12 col-lg-6 d-flex  mt-4 mt-lg-0">
            <div className="card_text_con">
              <h2 className="b2b-heading baoff_card_title" style={{ color: "#175CD3" }}>
                {card_title}

                <Image
                  src={card_title_img}
                  alt=""
                  width={1000}
                  height={500}
                />
              </h2>
              <p className="b2b-text text-black">
                {card_para}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="baoff_banner">
              <Image
                src={card_banner}
                className={drop_shadow}
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backoffsercard
