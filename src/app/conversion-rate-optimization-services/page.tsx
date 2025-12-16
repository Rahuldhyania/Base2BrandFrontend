import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Crobanner from "./Crobanner";
import "../seo-services/seonew.css";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Seoimportant from "./Seoimportant";
import "../devops-services/devops.css";
import Croopti from "./Croopti";
import Seofaqs from "../seo-services/Seofaqs";
import Seofooterslider from "../seo-services/Seofooterslider";
import { scrosersliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What is Conversion Rate Optimization (CRO)?",
    faq_answer:
      "CRO is the process of improving your website to turn visitors into customers by enhancing design, user experience, and call-to-action effectiveness."
  },
  {
    faqid: "2",
    faq_question: "Why do I need conversion rate optimization services?",
    faq_answer:
      "CRO helps maximize your existing traffic, improves user engagement, and increases ROI by turning more visitors into loyal customers without additional ad spend."
  },
  {
    faqid: "3",
    faq_question: "How long does CRO take to show results?",
    faq_answer:
      "Results vary by project, but many businesses see measurable improvements in conversions within 3-6 months of implementing optimized strategies."
  },
  {
    faqid: "4",
    faq_question: "What industries benefit from CRO?",
    faq_answer:
      "All industries can benefit, including e-commerce, healthcare, SaaS, and finance. CRO focuses on user behavior, ensuring improved conversions across diverse markets."
  },
  {
    faqid: "5",
    faq_question: "Do you provide reports on CRO progress?",
    faq_answer:
      "Yes, we provide detailed reports, including performance metrics, insights, and actionable recommendations, ensuring complete transparency throughout the optimization process"
  },
  {
    faqid: "6",
    faq_question: "How does CRO differ from SEO?",
    faq_answer:
      "SEO drives traffic to your website, while CRO focuses on converting that traffic into leads, customers, or sales, improving your overall ROI"
  },
  {
    faqid: "7",
    faq_question: "Can CRO help with mobile users?",
    faq_answer:
      "Absolutely. Our conversion optimization services include mobile optimization to enhance user experience and drive conversions across all devices, especially for mobile-dominant audiences"
  },
]
export default function page() {
  const baseURL = "https://base2brand.com/conversion-rate-optimization-services";
  const wwwURL = "https://www.base2brand.com/conversion-rate-optimization-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Conversion Rate Optimization Services | Top CRO Agency | Base2Brand",
    description:
      "Boost revenue with expert Conversion Rate Optimization services. Base2Brand’s CRO agency drives results with proven strategies for better conversions.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Crobanner />
      {/* CRO Services */}
      <div
        className="pt-5 pb-5"
        style={{
          background: "#0C0C0C"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              Why Choose Our CRO Services?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_12_egxynz.svg"
                card_title="Proven Track Record"
                card_para="Over 75% of our clients have experienced a significant increase in conversions within three months, delivering measurable improvements in revenue and engagement."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480431_1_gc0uid.png"
                card_title="Tailored Strategies"
                card_para="We craft personalized CRO strategies that align with your business goals and customer needs, ensuring every step is focused on driving conversions."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480432_if12wm.png"
                card_title="Expert Team"
                card_para="Our team of conversion optimization specialists boasts years of experience, leveraging proven industry best practices to deliver unparalleled results."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480438_ojgtmj.png"
                card_title="Advanced Tools and Analytics"
                card_para="We use state-of-the-art CRO tools and data-driven insights to identify user behavior, analyze website performance, and implement effective optimization strategies."
              />
            </div>
          </div>
        </div>
      </div>
      {/* CRO Offring */}
      <div
        className="pt-5 pb-5"
        style={{
          background:
            " linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              Our Core CRO Offerings
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 1 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_38_hedvhp.jpg"
                offer_title="User Behavior Analysis"
                offer_para="Gain valuable insights into how visitors interact with your website. We analyze heatmaps, session recordings, and user journeys to identify pain points and uncover conversion opportunities."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 2 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_39_sbyhk9.jpg"
                offer_title="Landing Page Optimization"
                offer_para="Create high-performing landing pages that captivate users and drive action. Our conversion optimization experts optimize design, content, and CTAs to boost engagement and conversion rates."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 3 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_40_dkb9ll.jpg"
                offer_title="A/B Testing"
                offer_para="Test and refine elements of your website with precision. From headlines to layouts, our A/B testing strategies ensure that every change contributes to improved performance."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 4 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_41_l2bl8s.jpg"
                offer_title="Conversion Funnel Optimization"
                offer_para="Minimize drop-offs and guide users seamlessly through your sales funnel. By optimizing each stage, we ensure a smooth journey that leads to higher conversions."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 5 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/businessman-corporate-development-financial-success-graph-digital-marketing-sale-analysis_ycfwda.jpg"
                offer_title="Mobile CRO"
                offer_para="Optimize your website for mobile users to ensure an exceptional experience across devices. Our conversion optimization services enhance responsiveness, speed, and usability for on-the-go visitors."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              {/* 6 */}
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_42_yghfxy.jpg"
                offer_title="E-commerce Optimization"
                offer_para="Turn browsers into buyers with targeted CRO strategies. We enhance product pages, streamline checkout processes, and ensure your online store drives consistent sales."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Seoimportant />
      <Croopti />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={scrosersliderdata} />
      <Footer />
    </div>
  );
}
