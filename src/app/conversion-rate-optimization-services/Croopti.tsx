import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Croopti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            We Are The Professional Conversion <br /> Rate Optimization Company
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Customized Approach"
              opticard_para="We understand that every business is unique. Our team designs custom CRO strategies tailored to your specific goals, ensuring measurable and impactful results."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Dedicated CRO Specialists"
              opticard_para="Our team of experts brings years of expertise and innovative thinking to the table, helping your website achieve peak performance."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Actionable Insights"
              opticard_para="Our conversion optimization services are rooted in data analysis. By tracking performance and leveraging insights, we continuously refine your website to achieve optimal conversions."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Comprehensive Optimization"
              opticard_para="From understanding user behavior to implementing advanced testing strategies, we provide all-encompassing CRO solutions to drive meaningful results for your business."
            />
          </div>
          <div className="col-lg-6">
            {/* 5 */}
            <Seooptimicard
              opticard_title="Affordable and Transparent Pricing"
              opticard_para="Our affordable conversion rate optimization services deliver exceptional value while maintaining complete transparency. We ensure you know exactly how your investment contributes to your success."
            />
          </div>
          <div className="col-lg-6">
            <Seooptimicard
              opticard_title="Proven Success Stories"
              opticard_para="Our proven track record of helping businesses across various industries achieve higher conversions and better ROI speaks for itself. Partner with us to unlock the full potential of your website."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Croopti;
