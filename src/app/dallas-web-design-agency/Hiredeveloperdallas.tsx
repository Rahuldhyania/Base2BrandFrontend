import React from "react";
import Hiredevelopercomponent from "../hire-shopify-developer-in-usa/Hiredevelopercomponent";

export default function Hiredeveloperdallas() {
  return (
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 pt-1 lg:pt-auto py-5">
        <div className="row">
          <div>
            <div className="row hire_developer_upper">
              <div className="col-12 col-lg-7">
                <div className="row hire_developer_upper_row1">
                  <div className="col-12 col-md-6 mt-4 lg:mt-0">
                    <Hiredevelopercomponent
                      hiredevcount="02"
                      hiredevheading="User-Focused Design Approach"
                      hiredevtext=" At Dallas web design agency, every design decision is driven by user experience principles, ensuring websites are intuitive, engaging, and easy to navigate."
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-4 lg:mt-0">
                    <Hiredevelopercomponent
                      hiredevcount="01"
                      hiredevheading="Proven Track Record"
                      hiredevtext="Dallas web design agency has a history of delivering visually stunning and high-performing websites that align with business goals and user expectations."
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="p-4 pt-0 lg:pt-auto text-center text-lg-end">
                  <h2 className="hire_banner_subheading text-white">
                    Top Reasons to Choose <br />
                    <span className="text_hire_green">Base2brand</span>
                  </h2>
                  <p className="b2b-title-text text-white">
                    Our approach is rooted in strategy, innovation, and
                    measurable performance that helps your business grow smarter
                    and faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 lg:pt-4">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-4 mt-4 lg:mt-0">
                <Hiredevelopercomponent
                  hiredevcount="03"
                  hiredevheading="Customized Web Solutions"
                  hiredevtext="Dallas web design agency creates fully tailored solutions, adapting to each brand’s unique identity, target audience, and industry-specific needs for maximum online impact."
                />
              </div>
              <div className="col-12 col-md-6 col-xl-4 mt-4 lg:mt-0">
                <Hiredevelopercomponent
                  hiredevcount="04"
                  hiredevheading="Mobile-Responsive Expertise"
                  hiredevtext=" Their team ensures every website functions perfectly on all devices, enhancing user engagement and conversions through responsive, mobile-first design practices."
                />
              </div>
              <div className="col-12 col-md-6 col-xl-4 mt-4 lg:mt-0 ">
                <Hiredevelopercomponent
                  hiredevcount="05"
                  hiredevheading="SEO-Optimized Design"
                  hiredevtext=" Beyond just beautiful visuals, Dallas web design agency builds websites optimized for search engines, helping businesses gain visibility and rank higher online."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

