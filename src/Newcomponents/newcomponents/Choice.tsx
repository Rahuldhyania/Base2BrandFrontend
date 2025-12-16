import React from "react";
import SplitText from "../Splittext";

export default function Choice() {
  return (
    <div className="new_bg_black">
      <div className="pt-5 new_cus_container position-relative">
        <div className=" pb-5">
          <h2 className="b2b_sub_title gradient_text text-white m-0">
            {/* <SplitText text="The Choice Is Clear" /> */}
             The Choice Is Clear
          </h2>
        </div>

        <div className="choice_card choice_card1" style={{ background: "#E5E5E5" }}>
          <div className="new_cus_container">
            <div className="row chooice_outer">
              <div className="col-12 col-lg-5 my-auto">
                <div className="d-flex gap-5">
                  <span className="new_subtitle ">01)</span>
                  <h4 className="m-0 choice_title text-black">
                    Turn Ideas <br />
                    Into Impact
                  </h4>
                </div>
              </div>
              <div className="col-12 col-lg-7 my-auto">
                <p className="text-black new_subtitle m-0">
                  Why settle for ordinary when you can have extraordinary? We
                  transform wild concepts into jaw-dropping results, making your
                  brand louder, prouder, and unforgettable everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="choice_card choice_card2" style={{ background: "#B6CCFF" }}>
          <div className="new_cus_container">
            <div className="row chooice_outer">
              <div className="col-12 col-lg-5 my-auto">
                <div className="d-flex gap-5">
                  <span className="new_subtitle ">01)</span>
                  <h4 className="m-0 choice_title text-black">
                    Turn Ideas <br />
                    Into Impact
                  </h4>
                </div>
              </div>
              <div className="col-12 col-lg-7 my-auto">
                <p className="text-black new_subtitle m-0">
                  Why settle for ordinary when you can have extraordinary? We
                  transform wild concepts into jaw-dropping results, making your
                  brand louder, prouder, and unforgettable everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="choice_card choice_card3" style={{ background: "#010101" }}>
          <div className="new_cus_container">
            <div className="row chooice_outer">
              <div className="col-12 col-lg-5 my-auto">
                <div className="d-flex gap-5">
                  <span className="new_subtitle text-white">01)</span>
                  <h4 className="m-0 choice_title text-white">
                    Turn Ideas <br />
                    Into Impact
                  </h4>
                </div>
              </div>
              <div className="col-12 col-lg-7 my-auto">
                <p className="text-white new_subtitle m-0">
                  Why settle for ordinary when you can have extraordinary? We
                  transform wild concepts into jaw-dropping results, making your
                  brand louder, prouder, and unforgettable everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
