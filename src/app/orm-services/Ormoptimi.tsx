import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Ormoptimi() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
          Why Choose Us as Your Online Reputation <br /> Management Agency?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Tailored ORM Services"
              opticard_para="We create personalized online reputation management services India for businesses of all sizes. Whether you’re a startup or an established enterprise, we ensure your brand’s online image remains impeccable."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Transparent Reporting"
              opticard_para="We provide detailed insights into your campaigns. As a trusted ORM agency, we keep you informed about every step of the reputation management process."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Proactive Approach"
              opticard_para="Our ORM agency takes a proactive stance, addressing issues before they escalate. We safeguard your reputation with consistent monitoring and timely action."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Experience Across Industries"
              opticard_para="Our online reputation management agency has worked with clients in diverse sectors, including healthcare, technology, and retail, delivering proven results."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ormoptimi;
