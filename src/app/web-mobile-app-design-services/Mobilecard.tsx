"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Mobilecard() {
  return (
    <div style={{ background: "#0b0c17" }}>
      <div>
        <Marquee>
          <div className="sm_banner_text" style={{ color: "#5C616B" }}>
            {` `} rom Idea to Interface . F{" "}
          </div>
        </Marquee>
      </div>
      <div className="pt-lg-5">
        <div className="row w-lg-100  w_ph_row" style={{ width: "100%" }}>
          <div className="col-12 col-lg-6">
            <div className="interface_mobile_con intermobile1">
              <div className="ani_mobile_card">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cccc_3_xbevev.webp"
                  alt="*"
                  width={10000}
                  height={500}
                  className="water_banner_left"
                />

                <div className="rotated_mobile">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sssssssssssssss_1_fqjahu.webp"
                    alt="*"
                    width={10000}
                    height={500}
                  />
                </div>
              </div>
              <div className="ani_mobile_card">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cccc_3_xbevev.webp"
                  alt="*"
                  width={10000}
                  height={500}
                  className="water_banner_left"
                />
                <div className="rotated_mobile">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/vncmm_1_dtqctr.webp"
                    alt="*"
                    width={10000}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="interface_mobile_con intermobile2">
              <div className="ani_mobile_card ani_mobile_card_right">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cccc_4_gadloc.webp"
                  alt="*"
                  width={10000}
                  height={500}
                  className="water_banner_left"
                />

                <div className="rotated_mobile_right">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Untitled-1-Recovered_1_myte0m.webp"
                    alt="*"
                    width={10000}
                    height={500}
                  />
                </div>
              </div>
              <div className="ani_mobile_card ani_mobile_card_right">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cccc_4_gadloc.webp"
                  alt="*"
                  width={10000}
                  height={500}
                  className="water_banner_left"
                />
                <div className="rotated_mobile_right">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xczvj_1_gqz109.webp"
                    alt="*"
                    width={10000}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
