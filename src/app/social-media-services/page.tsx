import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seofooterslider from "../seo-services/Seofooterslider";
import Socmedbanner from "./Socmedbanner";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Seofaqs from "../seo-services/Seofaqs";
import Seofooterbar from "../seo-services/Seofooterbar";
import Socmedimp from "./Socmedimp";
import Socmedopti from "./Socmedopti";
import { socmedsliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What are social media marketing services?",
    faq_answer:
      "Social media marketing services involve creating strategies to boost brand awareness, drive engagement, and increase conversions through platforms like Facebook, Instagram, and LinkedIn."
  },
  {
    faqid: "2",
    faq_question: "How does a social media marketing agency help businesses?",
    faq_answer:
      "A social media marketing agency crafts tailored campaigns, optimizes ads, and delivers analytics, helping businesses enhance their online presence and achieve measurable growth."
  },
  {
    faqid: "3",
    faq_question: "What do social media management services include?",
    faq_answer:
      "Social media management services encompass content creation, scheduling, monitoring, responding to audience interactions, and optimizing strategies for better engagement and conversions."
  },
  {
    faqid: "4",
    faq_question: "What are the benefits of social media advertising services?",
    faq_answer:
      "Social media advertising services provide precise targeting, measurable ROI, and increased visibility, allowing businesses to reach their ideal audience effectively and at scale."
  },
  {
    faqid: "5",
    faq_question: "Why choose a social media management company?",
    faq_answer:
      "A social media management company provides expertise, tailored strategies, and data-driven solutions to ensure your brand thrives on digital platforms, saving time and resources."
  },
  {
    faqid: "6",
    faq_question: "How much do social media management services cost?",
    faq_answer:
      "Costs vary based on service scope, but our social media management agency offers affordable, transparent pricing, ensuring maximum value for your investment."
  },
  {
    faqid: "7",
    faq_question: "How do I measure the success of social media services?",
    faq_answer:
      "Success is measured using analytics like engagement rates, reach, impressions, click-through rates, and conversions, all provided in detailed performance reports."
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/social-media-services";
  const wwwURL = "https://www.base2brand.com/social-media-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Expert Social Media Management Services | Base2Brand",
    description:
      "Transform your brand with Base2Brand’s expert social media management services. Increase engagement, reach, and results with our tailored strategies.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Socmedbanner />
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
              Why Choose Our Social Media Marketing Services?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 1 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_38_cmqohb.png"
                card_title="Proven Expertise"
                card_para="With years of experience, our social media management company has helped countless businesses succeed online. From startups to established enterprises, we craft customized campaigns that align with your brand’s unique voice and goals. Our expertise ensures your business stands out in a crowded marketplace."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 2 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_19_qbnhwj.png"
                card_title="Customized Strategies"
                card_para="We understand that every business is unique, and so are its social media needs. Our social media management agency creates tailored strategies to connect with your target audience effectively. Whether it’s engaging content, data-driven campaigns, or influencer partnerships, we’ve got you covered."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 3 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_6_c8apj4.png"
                card_title="Advanced Advertising Services"
                card_para="Our social media advertising services are designed to maximize your ROI. From precise targeting to creative ad design, we ensure your paid campaigns deliver exceptional results. With our social media ad services, your brand reaches the right audience at the right time."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 4 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_8_a4mkqk.png"
                card_title="Expert Team of Social Media Specialists"
                card_para="Our team of seasoned experts combines creativity with technical know-how to craft impactful campaigns. As a leading social media service provider, we continuously optimize strategies to ensure your brand remains relevant and engaging."
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
              Our Core Social Media Marketing Services
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_50_upgnal.jpg"
                offer_title="Social Media Strategy and Planning"
                offer_para="Every successful campaign begins with a solid plan. Our social media management agency works closely with you to define clear objectives, identify target audiences, and select the most effective platforms. From Facebook to Instagram, LinkedIn to TikTok, we’ve got it all covered."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_51_vvbtpf.jpg"
                offer_title="Content Creation and Curation"
                offer_para="Engaging content is at the heart of successful social media campaigns. Our social media management company produces visually appealing posts, videos, and stories that resonate with your audience, ensuring your brand stays top-of-mind."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_52_hx9g3t.jpg"
                offer_title="Social Media Advertising Services"
                offer_para="Boost your brand’s reach with our social media advertising services. We create targeted ad campaigns that deliver measurable results, from driving website traffic to generating leads. With our expertise in social media ad services, your business gains maximum exposure and engagement."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_53_xmlj9l.jpg"
                offer_title="Influencer Marketing"
                offer_para="Expand your reach with trusted influencers. Our social media management agency connects your brand with relevant influencers to promote your products authentically, building credibility and trust with your audience."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_54_mrzi5y.jpg"
                offer_title="Analytics and Reporting"
                offer_para="Data-driven insights are key to optimizing campaigns. Our social media management services include detailed performance tracking, helping you measure success and refine strategies. Metrics like engagement rates, click-through rates, and conversion rates provide a clear picture of your ROI."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Socmedimp />
      <Socmedopti />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Ready to Elevate Your Social Media Presence?"
        seo_footer_bar_title_para="Contact us today to learn how our social media marketing services can transform your business. As a leading social media management company, we’re here to help you navigate the complexities of digital marketing and achieve measurable success."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={socmedsliderdata} />
      <Footer />
    </div>
  );
}
