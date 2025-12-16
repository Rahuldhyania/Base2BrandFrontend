import React from "react";
import Seooptimicard from "./Seooptimicard";

function Seootima() {
  return (
    <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            We Are The Professional Search Engine <br /> Optimization Company
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* 1 */}
            <Seooptimicard
              opticard_title="Personalized Strategies"
              opticard_para="Every business has unique goals, and we understand that one size doesn’t fit all. Our SEO company crafts personalized strategies tailored to meet your specific objectives, ensuring your campaign delivers measurable results that resonate with your business goals."
            />
          </div>
          <div className="col-lg-6">
            {/* 2 */}
            <Seooptimicard
              opticard_title="Data-Driven Results"
              opticard_para="Our search engine optimization services are rooted in data. With in-depth analytics, regular performance tracking, and actionable insights, we refine your strategy continuously. This ensures that every effort contributes to better visibility, higher rankings, and meaningful engagement for your brand."
            />
          </div>
          <div className="col-lg-6">
            {/* 3 */}
            <Seooptimicard
              opticard_title="Affordable and Transparent Pricing"
              opticard_para="We believe in delivering top-tier SEO services without breaking your budget. Our affordable pricing structure, coupled with complete transparency, ensures you know exactly where your investment goes and the value it brings to your business growth."
            />
          </div>
          <div className="col-lg-6">
            {/* 4 */}
            <Seooptimicard
              opticard_title="Dedicated SEO Experts"
              opticard_para="Our team of SEO specialists brings years of expertise and innovation to the table. With their skills, you gain access to cutting-edge techniques and industry best practices that maximize your website’s potential and deliver consistent success."
            />
          </div>
          <div className="col-lg-6">
            {/* 5 */}
            <Seooptimicard
              opticard_title="Holistic Approach"
              opticard_para="As a search engine optimization service provider company, we take a comprehensive approach to optimization. From keyword research and on-page SEO to technical audits and link-building strategies, we provide all professional SEO services to ensure your website performs at its best across all search engines."
            />
          </div>
          <div className="col-lg-6">
            <Seooptimicard
              opticard_title="Proven Client Success"
              opticard_para="Our track record speaks for itself. We’ve helped numerous businesses across various industries achieve top rankings, increased traffic, and better conversions. Partner with us to experience the difference that a results-driven SEO agency can make for your business."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seootima;
