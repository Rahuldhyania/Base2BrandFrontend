import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Emailopti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            We Are The Best Email Marketing <br /> Company in India
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Customized Campaigns"
              opticard_para="We believe every business is unique. Our tailored approach ensures your campaigns align with your brand’s goals and values."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Experienced Specialists"
              opticard_para="Our team comprises some of the best email providers in India, ensuring your campaigns are in expert hands."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Data-Driven Insights"
              opticard_para="As a leading email marketing agency in India, we rely on data to create impactful campaigns. Our insights lead to smarter strategies and better results."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Proven Results Across Industries"
              opticard_para="From e-commerce to SaaS, our track record speaks for itself. Partner with us and watch your email campaigns thrive."
            />
          </div>
          <div className="col-lg-6">
            {/* 5 */}
            <Seooptimicard
              opticard_title="Transparent Process"
              opticard_para="With affordable pricing and clear communication, our email marketing services India ensure complete transparency throughout your journey."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emailopti;
