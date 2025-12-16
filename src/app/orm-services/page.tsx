import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seofooterslider from "../seo-services/Seofooterslider";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Ormbanner from "./Ormbanner";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Ormimp from "./Ormimp";
import Ormoptimi from "./Ormoptimi";
import Seofooterbar from "../seo-services/Seofooterbar";
import Seofaqs from "../seo-services/Seofaqs";
import { ormsliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What are online reputation management services?",
    faq_answer:
      "Online reputation management services focus on improving your brand's image by managing reviews, addressing negative feedback, and enhancing online visibility."
  },
  {
    faqid: "2",
    faq_question: "Why do I need ORM services in India?",
    faq_answer:
      "ORM services in India help businesses maintain a positive reputation, build trust, and improve customer engagement, ultimately increasing your brand’s credibility and revenue."
  },
  {
    faqid: "3",
    faq_question: "How does an online reputation agency work?",
    faq_answer:
      "An online reputation agency monitors your brand's online presence, handles reviews, manages crises, and implements strategies to enhance your overall reputation."
  },
  {
    faqid: "4",
    faq_question: "What industries benefit from ORM services India?",
    faq_answer:
      "Businesses across industries like healthcare, e-commerce, hospitality, and education benefit from ORM services India, improving their online visibility and customer loyalty."
  },
  {
    faqid: "5",
    faq_question: "How long does ORM take to show results?",
    faq_answer:
      "Our online reputation management agency delivers visible results in 2–3 months by continuously refining strategies to enhance your brand’s online presence."
  },
  {
    faqid: "6",
    faq_question: "Are ORM services India affordable for small businesses?",
    faq_answer:
      "Yes, our online reputation management services in India offer budget-friendly packages designed to meet the needs of small and medium-sized businesses."
  },
  {
    faqid: "7",
    faq_question: "What metrics are tracked in ORM campaigns?",
    faq_answer:
      "Our ORM agency tracks sentiment analysis, brand mentions, engagement rates, and search engine visibility to measure the effectiveness of reputation management strategies."
  },
];
export default function page() {
  const baseURL = "https://base2brand.com/orm-services";
  const wwwURL = "https://www.base2brand.com/orm-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Effective Online Reputation Management Services | Base2Brand",
    description:
      "Protect and enhance your brand's image with Base2Brand’s ORM services. Expert strategies to manage online reputation and build trust with your audience.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Ormbanner />
      {/* Services section */}
      <div
        className="pt-5 pb-5"
        style={{
          background: "#0C0C0C"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              Why Choose Our Online Reputation Management Agency?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 1 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_38_cmqohb.png"
                card_title="Proven Expertise"
                card_para="Our online reputation agency has helped businesses across industries maintain a positive image online. Through tailored ORM services, we ensure your brand garners trust and stands out in a competitive market."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 2 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_19_qbnhwj.png"
                card_title="Customized ORM Services in India"
                card_para="We design strategies to align with your goals. Our online reputation management services in India focus on proactive monitoring, customer engagement, and reputation repair based on data-driven insights."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 3 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_6_c8apj4.png"
                card_title="Advanced Monitoring Tools"
                card_para="Leverage our ORM services India for real-time tracking of brand mentions across platforms. We identify potential threats and respond effectively to maintain your positive reputation."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 4 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_8_a4mkqk.png"
                card_title="Expert Team of ORM Specialists"
                card_para="Our ORM agency combines experience and technical expertise to manage and elevate your online presence, safeguarding your brand’s credibility and value."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Core section  */}
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
              Our Core ORM Services in India
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_64_lqht8u.jpg"
                offer_title="Reputation Strategy and Planning"
                offer_para="Our online reputation management services help define your brand image, plan strategic responses, and select effective solutions for reputation enhancement. We align your goals with actionable steps to maintain a positive online presence."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/data-analysis-team-professionals-collaborating-business-intelligence_bl0r2y.png"
                offer_title="Monitoring and Response Management"
                offer_para="Our online reputation management agency continuously monitors reviews, social media mentions, and online forums. We respond promptly to negative content and ensure your brand remains favorably perceived."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_65_ein4rp.jpg"
                offer_title="Content Creation and Promotion"
                offer_para="Our online reputation agency creates high-quality, positive content that reflects your brand values. From articles to social media posts, we enhance your visibility and suppress negative narratives."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/mobile-app-customer-reviews-locationbased-services-global-navigation-business-ratings_o5ymtq.jpg"
                offer_title="Review Management Services"
                offer_para="As part of our ORM services India, we help you gather authentic positive reviews and handle negative feedback professionally. This builds trust and enhances your customer relationships."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_66_kctil5.jpg"
                offer_title="Analytics and Reporting"
                offer_para="Track your reputation management success with actionable insights. Our ORM services in India provide metrics such as sentiment analysis, brand mentions, and engagement, helping you refine strategies."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Ormimp />
      <Ormoptimi />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Ready to Protect Your Brand’s Reputation?"
        seo_footer_bar_title_para="Contact us today to learn how our online reputation management services in India can safeguard your brand’s image. Let our online reputation management agency guide you through the complexities of ORM services and help you achieve lasting success."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={ormsliderdata} />
      <Footer />
    </div>
  );
}
