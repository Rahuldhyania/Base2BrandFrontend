'use client'
import Image from "next/image";
import React from "react";

export default function Result() {
  return (
    <div className="new_bg_black py-10">
      <div className="new_cus_container">
        <h2 className="b2b_sub_title gradient_text text-center m-0 pt-5">
          {/* <SplitText text="What Our" /> */}
          Looking for Results
          <br />
          <div className="splittext2" style={{ fontWeight: "600" }}>
            {/* <SplitText text="Clients Say?" /> */}
            Beyond Limits?
          </div>
        </h2>
      </div>

      <div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_3_mqywa3.png"
          alt=""
          width={1000}
          height={500}
          className="result_banner"
        />
      </div>
    </div>
  );
}
