"use client";
import React from "react";
type reviewhiredev = {
  reviewdata?: any;
};

const Reviewhiredev = ({ reviewdata }: reviewhiredev) => {
  return (
    <div className="bg_blue_left">
      <div className="cus_container max_w_1920  py-5">
        <div className="text-center py-4">
          <h2 className="hire_banner_subheading text-white">
            What Our <span className="text_hire_green">Clients</span> Have to
            Say
          </h2>
        </div>

        <div className="row">
          {reviewdata.map((ListItem, index) =>
            <div key={index} className="hire_review_card col-12 col-md-6 col-lg-4">
              <div className="b2b-text text-white hire_review_textreview">
                {ListItem.review}
              </div>
              <div className="hire_review_detail text-white">
                <div>
                  {/* <Image 
                      src=https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
                      alt="Client Image"
                      width={100}
                      height={100}
                      className="hire_review_person"
                      /> */}
                  <h3 className="reviewname">
                    {ListItem.name.charAt(0)}
                  </h3>
                </div>
                <div>
                  <h4 className="hire_review_person_name text_hire_green">{ListItem.name}</h4>
                  <p className="b2b-text text-white m-0">
                    {ListItem.company}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Reviewhiredev;
