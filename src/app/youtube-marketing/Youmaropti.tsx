import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Youmaropti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
          Why Choose Us as Your YouTube Channel <br /> Management Agency?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Tailored YouTube Marketing Services"
              opticard_para="We create personalized YouTube marketing services for businesses of all sizes, ensuring your YouTube channel thrives in today’s competitive market."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Expertise Across Industries"
              opticard_para="Our YouTube marketing agency has worked with diverse sectors, including fashion, tech, and education, helping brands grow their online presence."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Data-Driven Decisions"
              opticard_para="We use real-time data to optimize your campaigns. As a trusted YouTube marketing agency, we refine strategies for maximum results."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Transparent Reporting"
              opticard_para="We believe in transparency. Our YouTube marketing agency provides in-depth performance reports, giving you a clear view of your channel’s success."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youmaropti;
