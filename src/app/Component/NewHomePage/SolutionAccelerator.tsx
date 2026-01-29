import React from "react";

const workProcessSteps = [
  {
    id: 1,
    step: "01",
    title: "AI-Powered Audience Intelligence",
    description:
      "Base2Brand uses AI to analyze user behavior, demographics, and intent across platforms. This helps identify high-value audiences, predict buying patterns, and create targeted strategies that improve engagement, conversions, and long-term brand loyalty across digital channels."
  },
  {
    id: 2,
    step: "02",
    title: "Predictive Performance Marketing",
    description:
      "Our AI models forecast campaign performance before launch by analyzing historical data and market trends. This allows us to optimize budgets, creatives, and channels in advance—reducing wasted spend and maximizing ROI for every digital marketing campaign."
  },
  {
    id: 3,
    step: "03",
    title: "AI-Driven Content Optimization",
    description:
      "We leverage AI to analyze content performance, keyword intent, and engagement signals. This helps us craft SEO-friendly, conversion-focused content that resonates with audiences, ranks better on search engines, and adapts continuously based on real-time performance data."
  },
  {
    id: 4,
    step: "04",
    title: "Smart UI/UX Design Personalization",
    description:
      "Base2Brand applies AI to personalize UI and UX elements based on user behavior. Layouts, CTAs, and navigation adapt dynamically, ensuring each visitor receives an experience optimized for usability, engagement, and conversion across web and mobile platforms."
  },
  {
    id: 5,
    step: "05",
    title: "AI-Assisted Creative Design",
    description:
      "Using AI-powered design tools, we enhance visual consistency, color psychology, and layout efficiency. This accelerates design workflows while maintaining brand identity, helping deliver high-impact creatives, banners, and interfaces faster without compromising quality or originality."
  },
  {
    id: 6,
    step: "06",
    title: "Automated Marketing Funnel Optimization",
    description:
      "AI tracks user journeys across touchpoints to identify drop-offs and opportunities. Base2Brand uses this data to automate funnel improvements, personalize messaging at each stage, and increase lead nurturing efficiency through smarter, data-backed automation."
  },
  {
    id: 7,
    step: "07",
    title: "AI Chatbots & Conversational Interfaces",
    description:
      "We develop AI-driven chatbots that provide instant support, qualify leads, and guide users 24/7. These conversational interfaces improve customer experience, reduce response time, and increase conversions while seamlessly integrating with websites and applications."
  },
  {
    id: 8,
    step: "08",
    title: "Intelligent A/B Testing & CRO",
    description:
      "Base2Brand uses AI to continuously test variations of ads, landing pages, and UI elements. The system automatically identifies winning combinations, accelerates conversion rate optimization, and delivers measurable improvements faster than traditional testing methods."
  },
  {
    id: 9,
    step: "09",
    title: "AI-Enhanced Web & App Development",
    description:
      "Our development team integrates AI for smarter search, recommendations, automation, and scalability. This results in faster-loading, more intelligent applications that adapt to user behavior, enhance performance, and deliver future-ready digital experiences."
  },
  {
    id: 10,
    step: "10",
    title: "Real-Time Analytics & Decision Intelligence",
    description:
      "AI-powered dashboards convert complex data into clear insights. Base2Brand uses real-time analytics to monitor performance, predict trends, and guide strategic decisions—ensuring every marketing, design, and development move is driven by actionable intelligence."
  }
];

const SolutionAccelerator = () => {
  return (
    <div className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="pt-md-4 row">
          <div className="col-12 col-md-6">
            <div className="SolutionAccelerator_leftcontant">
              <h4 className="text-white m-0">Powered by Artificial Intelligence</h4>
              <h3 className="SolutionAccelerator_heading gradient_text pt-3 pt-lg-5">
                AI at the Core of Our Marketing, Development and Design Services
              </h3>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 p-md-5 saright_main">
            {workProcessSteps.map((data, index) =>
              <div className={`${workProcessSteps.length == index+1 ? '' : 'mb-5'}`} key={index}>
                <h2 className="number_heading gradient_text_number">
                  {data.step}
                </h2>

                <div>
                  <h3 className="text-white saright_title">
                    {data.title}
                  </h3>
                  <p className="text-white saright_description">
                    {data.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAccelerator;
