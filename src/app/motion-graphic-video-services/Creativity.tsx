
import Image from "next/image";
import React from "react";

export default function Creativity() {
  return (
    <div className="pt-md-5 pt-3 pb-md-5">
      <div className="text-center overflow-hidden">
        <h2 className="sm_heading_text sm_orange  font_700">
          Where Creativity
        </h2>
        <h2 className="text-white cool_subheading_text2 font_500">
          Moves Your
        </h2>

        <h2 className="sm_skyblue font_700 motion_text">
          <div className="motion_text_floting_left">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480934_otw3wu.webp"
              alt=""
              width={10000}
              height={500}
            />
          </div>
          Bran<span className="brand_d">d
            <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Mask_group_hic98y.png"
              alt=""
              width={10000}
              height={500}
              className="brand_d_img"
            />
          </span>
          <div className="motion_text_floting_right">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480936_epe6df.webp"
              alt=""
              width={10000}
              height={500}
            />
          </div>
        </h2>
      </div>
    </div>
  );
}
