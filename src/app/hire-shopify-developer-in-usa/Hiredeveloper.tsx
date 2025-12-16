import React from "react";
import Hiredevelopercomponent from "./Hiredevelopercomponent";

export default function Hiredeveloper() {
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
                      hiredevheading="Channel-Specific Expertise"
                      hiredevtext="From SEO and Google Ads to Meta campaigns, LinkedIn, email, and content — each channel is managed by a dedicated specialist, ensuring maximum effectiveness."
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-4 lg:mt-0">
                    <Hiredevelopercomponent
                      hiredevcount="01"
                      hiredevheading="Tailored Strategy, Not Templates"
                      hiredevtext="Every business is different, and so is our approach. We craft custom strategies that align with your goals, industry, and audience for targeted impact."
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
                  hiredevheading="Transparent Execution"
                  hiredevtext="We believe in clarity. Every step of your campaign is tracked and visible — from keyword performance to creative impact, you’ll always know what’s working."
                />
              </div>
              <div className="col-12 col-md-6 col-xl-4 mt-4 lg:mt-0">
                <Hiredevelopercomponent
                  hiredevcount="04"
                  hiredevheading="Data-Driven Optimization"
                  hiredevtext="We continuously analyze, adapt, and optimize to drive better results. Expect more qualified leads, lower CPA, and higher ROI with every campaign cycle."
                />
              </div>
              <div className="col-12 col-md-6 col-xl-4 mt-4 lg:mt-0 ">
                <Hiredevelopercomponent
                  hiredevcount="05"
                  hiredevheading="Collaborative Partnership"
                  hiredevtext="We work with you, not just for you. Think of us as an extension of your team — proactive, responsive, and always focused on your growth."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
