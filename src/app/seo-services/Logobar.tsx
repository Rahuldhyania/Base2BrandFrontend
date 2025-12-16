"use client";
import React, { useState } from "react";

import Image from "next/image";
const logosdata = [
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Grillfather.png", //1
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/beyondskin.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cottonprint.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/CDRM.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Burger.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Miracle.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/whishan.png", // 10
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/oiktrix.png",
  // "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/oiktrix.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/lab.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dynamo.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/voriagh.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/kairos.png", //15
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/littleoak.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/metalpess.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/taogroup.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/vipnumber.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ross.png", //20
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/gleefull.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ozpro.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/nanny.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/thynk-care.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/rktaxi.png", //25
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/PRECIOUS.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/surelevel.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dogishuman.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sinealhome.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/imgsdigital.png", //30
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sadhguru.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/auto.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/warley.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/truvita.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/psychly.png", //5
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/healthybedroom.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/healthybedroom.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo-teletire.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/aexonic.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/buymutcoins.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/vyatra.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/hanna.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/groovo.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/PlantClub.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sleepy.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dino.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/barbell.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Elevar_Logo.png"
];

export default function Logobar() {
  const [showlogo, setshowlogo] = useState(18);
  const loadmoreitems = () => {
    setshowlogo(prevVisible => prevVisible + 20);
  };
  return (
    <div
      className="pt-5 pb-5"
      style={{
        background:
          "#0C0C0C"
      }}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading">Top Brands We Have Worked With</h2>
        </div>
        <div className="logo_conatiner_seo seo_active_des pt-3">
          {logosdata.map((data, index) =>
            <div className="seo_logo" key={index} data-aos="fade-up">
              <Image src={data} alt="" width={1000} height={500} />
            </div>
          )}
        </div>
        {/* for mobile  */}
        <div className="logo_conatiner_seo seo_active_ph  pt-3">
          {logosdata.slice(0, showlogo).map((data, index) =>
            <div className="seo_logo" key={index} data-aos="fade-up">
              <Image src={data} alt="" width={1000} height={500} />
            </div>
          )}
        </div>
        {/* load more only for mobile */}
        {showlogo < logosdata.length
          ? <div className="load_more_seo seo_active_ph">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fe--arrow-down_1_ixjzjv_1.svg"
              alt=""
              width={1000}
              height={500}
              onClick={loadmoreitems}
            />
          </div>
          : ""}
      </div>
    </div>
  );
}
