"use client";
import Image from "next/image";
import React from "react";

type review = {
  reviewdata: any;
};
const Hiredubaireview = ({ reviewdata }: review) => {
  return (
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 py-5">
        <div className="text-center">
          <h2 className="hire_banner_subheading text-white">
            Client Testimonials
          </h2>
        </div>
        <div className="pt-4 row">
          {reviewdata.map((item, index) =>
            <div
              className="col-12 col-md-6 col-xl-4 hire_dubai_review_outer mt-3"
              key={index}
            >
              <div className="hire_dubai_review_inner">
                <div className="b2b-text hire_dubai_review_inner_comment">
                  “ {item.comment ? item.comment : item.name} ”
                </div>
                <div className="hire_dubai_lower_review">
                  <p className="b2b-text m-0 text_hire_green fw-semibold">
                    {item.person_name ? item.person_name : item.testimonial}
                  </p>
                  <Image
                    src={
                      item.reviewfrom
                        ? item.reviewfrom
                        : "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
                    }
                    alt=""
                    height={500}
                    width={1000}
                    className="hire_dubai_reviewfrom"
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

export default Hiredubaireview;
