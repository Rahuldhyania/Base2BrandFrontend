import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Socmedopti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            Why Choose Us as Your Social Media <br /> Management Agency?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Tailored Social Media Marketing Services"
              opticard_para="We craft strategies that align with your business goals, ensuring impactful campaigns. From startups to large enterprises, our social media management agency caters to businesses of all sizes."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Expertise Across Industries"
              opticard_para="Our social media marketing agency has successfully worked with brands in diverse industries, including fashion, technology, healthcare, and more. Whatever your niche, we have the expertise to help you succeed."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Data-Driven Decision Making"
              opticard_para="As a trusted social media service provider, we leverage data and analytics to optimize campaigns. Our insights help us refine strategies, ensuring maximum impact and ROI."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Transparent Reporting"
              opticard_para="We believe in transparency. Our social media management services include detailed performance reports, keeping you informed every step of the way."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socmedopti;
