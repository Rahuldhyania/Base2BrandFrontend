import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Googleadsopti() {
  return (
    <div
      className="pt-5 pb-5"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.9527993081998425) 0%, rgba(34,24,83,1) 100%)"
      }}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            Why Choose Base2Brand for <br /> Your Campaigns?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Proven Expertise"
              opticard_para="With years of experience, our Google AdWords agency delivers consistent results."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Creative Excellence"
              opticard_para="Eye-catching, engaging ads that drive conversions."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Tailored Campaigns"
              opticard_para="We design strategies that align with your business goals."
            />
          </div>
          <div className="col-lg-6">
            {/*4 */}
            <Seooptimicard
              opticard_title="Data-Driven Insights"
              opticard_para="Our Google Ads management services are guided by analytics for optimal outcomes."
            />
          </div>
          <div className="col-lg-6">
            {/* 5 */}
            <Seooptimicard
              opticard_title="Dedicated Support"
              opticard_para="A reliable Google advertising company that prioritizes your success."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Googleadsopti;
