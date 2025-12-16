import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Googleadsbanner from "./Googleadsbanner";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Seooffercard from "../seo-services/Seooffercard";
import Seofooterbar from "../seo-services/Seofooterbar";
import Googleadsopti from "./Googleadsopti";
import Googleadstextban from "./Googleadstextban";
import Logobar from "../seo-services/Logobar";
import Seofaqs from "../seo-services/Seofaqs";
import Seofooterslider from "../seo-services/Seofooterslider";
import { googleadssliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What services does Base2Brand provide as a Google Ads service provider?",
    faq_answer:
      "Base2Brand offers comprehensive Google AdWords services, including keyword research, campaign optimization, analytics tracking, and Google Ads management services to ensure maximum ROI."
  },
  {
    faqid: "2",
    faq_question: "How can Google AdWords marketing services help my business grow?",
    faq_answer:
      "Our Google AdWords agency designs data-driven campaigns to improve visibility, increase engagement, and generate leads, delivering measurable growth for businesses of all sizes."
  },
  {
    faqid: "3",
    faq_question: "Why should I choose Base2Brand as my Google Ads company?",
    faq_answer:
      "As a trusted Google advertising company, we combine creativity with advanced analytics to create high-performing campaigns that drive conversions and maximize ROI."
  },
  {
    faqid: "4",
    faq_question: "What industries does your Google Ads agency specialize in?",
    faq_answer:
      "Base2Brand provides tailored Google advertising services for industries like eCommerce, healthcare, education, retail, and more, ensuring campaigns align with specific business goals."
  },
  {
    faqid: "5",
    faq_question: "How do your Google Ads management services improve campaign performance?",
    faq_answer:
      "We utilize audience behavior tracking, advanced targeting tools, and regular performance analysis to optimize campaigns, ensuring cost-effective Google AdWords marketing services."
  },
  {
    faqid: "6",
    faq_question: "Can Base2Brand help with Google Ads for small businesses?",
    faq_answer:
      "Absolutely! Our Google AdWords agency specializes in crafting campaigns for small businesses, focusing on affordable solutions that deliver high returns on ad spend."
  },
  {
    faqid: "7",
    faq_question: "How soon can I see results from your Google advertising services?",
    faq_answer:
      "While results vary, our clients typically see improvements in click-through rates and conversions within the first month of using our Google AdWords services."
  },
];
export default function page() {
  const baseURL = "https://base2brand.com/google-ads-services";
  const wwwURL = "https://www.base2brand.com/google-ads-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Top Google Ads Agency for Results-Driven Campaigns | Base2Brand",
    description:
      "Partner with Base2Brand, a leading Google Ads agency. Our tailored Google advertising services drive qualified traffic, increase conversions, and maximize ROI.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Googleadsbanner />
      {/* Core section */}
      <div
        className="pt-5 pb-5"
        style={{
          background: " #0C0C0C",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              What Makes Base2Brand the Best Google Ads Agency?
            </h2>
            <p className="m-0 text-white " data-aos="fade-up">
              As a top-rated Google Ads company, from Google AdWords marketing
              services to full-scale Google Ads management <br /> services, we
              focus on helping you achieve your marketing goals with precision
              and impact.
            </p>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_81_mhmpij.jpg"
                offer_title="Strategic Management for Maximum ROI"
                offer_para="Base2Brand excels in creating and managing high-performing campaigns. Our Google Ads management services include everything from keyword research to campaign optimization, ensuring your ads reach the right audience at the right time."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/graph-arrow-virtual-screen-with-computer-laptop-desk-business-investment-growth-analysis-chart-increase-revenue-concept_bi1jtv.jpg"
                offer_title="Google Ads Service Backed by Data"
                offer_para="We believe in data-driven advertising. By leveraging advanced analytics, we continuously optimize your Google Ads campaigns. Our service improves click-through rates (CTR) by 30% on average while reducing cost-per-click (CPC), ensuring your budget delivers the best results."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_82_lctq1m.jpg"
                offer_title="Creative and Engaging Ad Campaigns"
                offer_para="At Base2Brand, creativity meets functionality. Our team designs visually captivating and persuasive ads that resonate with your target audience. Whether it’s display ads or video campaigns, our Google ads service ensures your message stands out and drives action."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_83_sczztc.jpg"
                offer_title="Full-Service Solutions"
                offer_para="Base2Brand is more than a Google Ads company—we’re your partner in growth. Our Google Ads agency handles every aspect of your campaigns, from strategy development to execution and optimization. With our Google Ads management services, you can focus on your business while we deliver exceptional results."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_84_pokjxe.jpg"
                offer_title="Tailored Strategies for Every Business"
                offer_para="No two businesses are the same, and neither are our campaigns. Our Google Ads services are customized to meet your unique needs, whether it’s generating leads, boosting sales, or building brand awareness. Trust Base2Brand, the Google ads company that puts your success first."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_85_r7jgr4.jpg"
                offer_title="Advanced Targeting for Precise Results"
                offer_para="Reach your ideal audience with pinpoint accuracy. As a leading Google advertising company, we use advanced targeting tools to connect your brand with customers most likely to convert. Our Google Ads service ensure your message reaches the right people, driving measurable business growth."
              />
            </div>
          </div>
        </div>
      </div>
      <Seofooterbar
        seo_footer_bar_title="Your Partner for Long-Term Success"
        seo_footer_bar_title_para="Businesses partnering with Base2Brand achieve significant improvements in ROI and sustained growth. Our Google Ads marketing service focuses on generating long-term value, from increased brand visibility to higher conversions. With Base2Brand, success is more than a goal—it’s a guarantee."
        seo_footer_bar_btn="Request A Quote"
      />
      <Logobar />
      <Googleadsopti />
      <Googleadstextban />
      <Seofooterbar
        seo_footer_bar_title="Ready to Boost Your Sales with Google Ads?"
        seo_footer_bar_title_para="Don’t miss out on the power of expert Google advertising services. Let Base2Brand be your Google Ads agency and take your campaigns to the next level. Contact us today to start your journey to success!"
        seo_footer_bar_btn="Request A Quote"
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={googleadssliderdata} />
      <Footer />
    </div>
  );
}
