"use client";
import Image from "next/image";
import React from "react";

type review = {
  reviewdata: any;
};
const Hireausreview = ({ reviewdata }: review) => {
  return (
    <div className="bg-white">
      <div className="cus_container max_w_1920 py-5">
        <div className="text-center">
          <h2 className="hire_banner_subheading text-black">Client Testimonials</h2>
        </div>
        <div className="pt-4 row">
          {reviewdata.map((item, index) =>
            <div
              className="col-12 col-md-6 col-xl-4 hire_dubai_review_outer mt-3"
              key={index}
            >
              <div className="hire_dubai_review_inner_aus">
                <div className="b2b-text text-black hire_dubai_review_inner_comment">
                  “ {item.comment} ”
                </div>
                <div className="hire_dubai_lower_review">
                  <p className="b2b-title-text m-0 text_hire_primary fw-semibold">
                    {item.person_name}
                  </p>
                  <Image
                    src={item.reviewfrom}
                    alt=""
                    height={500}
                    width={1000}
                    className="hire_dubai_reviewfrom_aus"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hireausreview;
