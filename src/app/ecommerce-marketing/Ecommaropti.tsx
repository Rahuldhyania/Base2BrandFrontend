import React from "react";
import Seooptimicard from "../seo-services/Seooptimicard";

function Ecommaropti() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
          Why Choose Us for Your E-Commerce <br /> Marketing Needs?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Tailored Digital Marketing Solutions"
              opticard_para="Every e-commerce business is unique, and so are its marketing needs. Our team creates customized digital marketing solutions that align with your brand’s goals and audience, ensuring your campaigns are impactful and effective."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Transparent and Affordable Pricing"
              opticard_para="We offer competitive and transparent pricing, ensuring that your marketing budget is used efficiently. Our affordable pricing structure gives you access to high-quality digital marketing solutions without breaking the bank."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Data-Driven Insights"
              opticard_para="As a leading e-commerce marketing agency, we rely on data and analytics to drive our strategies. Our insights help us refine campaigns, optimize performance, and deliver better results for your e-commerce business."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Expert Team of E-Commerce Marketers"
              opticard_para="Our team consists of experienced professionals who are experts in e-commerce marketing. From SEO to paid ads, content creation to influencer partnerships, our team has the knowledge and skills to execute successful campaigns."
            />
          </div>
          <div className="col-lg-6">
            {/* 5 */}
            <Seooptimicard
              opticard_title="Proven Success Across Industries"
              opticard_para="We have successfully worked with e-commerce businesses in various industries, from fashion and electronics to health and beauty. No matter your niche, we have the expertise to help you succeed."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommaropti;
