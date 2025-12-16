import React from "react";
import Marquee from "react-fast-marquee";

export default function UImarquee() {
  return (
    <div className="ui_mq_bgcon_outer ui_bg">
      <div className="pt-5 pb-5 ui_mq_bgcon">
        <div className="ui_marquee_con">
          <div>
            <Marquee>
              <span className="ui_border_text_white ui_cus_heading">
                Designer · Premiere Pro · Figma · Photoshop · Illustrator ·
                Canva · Designer · Premiere Pro · Figma · Photoshop ·
                Illustrator · Canva ·{" "}
              </span>
            </Marquee>
          </div>
          <div>
            <Marquee>
              <span className="ui_cus_heading lite_white">
                Video Edit · UI/UX · Banner Design · Logo Design · Video Edit ·
                UI/UX · Banner Design · Logo Design ·{" "}
              </span>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
