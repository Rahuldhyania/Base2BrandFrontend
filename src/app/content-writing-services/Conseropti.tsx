import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Conseropti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            Why Choose Us as Your Content <br /> Writing Agency?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Tailored Solutions"
              opticard_para="Our content writing company provides personalized services for businesses of all sizes. Whether you need SEO content writing services or website content writing, we’ve got you covered."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Proactive Approach"
              opticard_para="We take a proactive stance, creating content that anticipates audience needs. Our website content writers craft messaging that resonates and drives action."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Industry Experience"
              opticard_para="Our content writing agency has worked with clients across industries, including healthcare, technology, and retail, delivering the best web content writing services tailored to diverse needs."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Transparent Reporting"
              opticard_para="Our online reputation management agency has worked with clients in diverse sectors, including healthcare, technology, and retail, delivering proven results."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conseropti;
