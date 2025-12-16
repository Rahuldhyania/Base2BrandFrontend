
import Image from "next/image";
import React from "react";

type UISercard = {
  card_bg_ing: string;
  card_title: string;
  center_con?: string;
};
const UISercard = ({ card_bg_ing, card_title, center_con }: UISercard) => {
  return (
    <div
      className={`sre_card ${center_con}`}
      style={{ backgroundImage: `url(${card_bg_ing})` }}
    >
      <div className="ser_card_gradient">
        <div className="card_lowerbar">
          <h4 className="text-white">
            {card_title}
          </h4>
          <div className="card_barimg">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_l38uti.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UISercard;
