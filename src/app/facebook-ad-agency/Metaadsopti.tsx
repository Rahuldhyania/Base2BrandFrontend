import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Metaadsopti() {
  return (
    <div className="pt-5 pb-5" style={{ 
      background: "linear-gradient(90deg, rgba(0,0,0,0.9527993081998425) 0%, rgba(34,24,83,1) 100%)"}}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            Proven Impact of Facebook and Instagram Ads
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="79% of internet users have made a purchase influenced by a Facebook ad."
              opticard_para=""
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Instagram users are 58% more likely to engage with Instagram paid ads than other platforms."
              opticard_para=""
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Businesses investing in Facebook ad services see higher ROI compared to traditional advertising."
              opticard_para=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metaadsopti;
