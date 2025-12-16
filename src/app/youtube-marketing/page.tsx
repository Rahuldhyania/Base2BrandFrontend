import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seofooterslider from "../seo-services/Seofooterslider";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Youmarbanner from "./Youmarbanner";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Youmarimp from "./Youmarimp";
import Youmaropti from "./Youmaropti";
import Seofooterbar from "../seo-services/Seofooterbar";
import Seofaqs from "../seo-services/Seofaqs";
import { ytmarsliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question:
      "What makes your YouTube marketing agency different from others?",
    faq_answer:
      "Social media marketing services involve creating strategies to boost brand awareness, drive engagement, and increase conversions through platforms like Facebook, Instagram, and LinkedIn."
  },
  {
    faqid: "2",
    faq_question: "Do you offer YouTube channel management services?",
    faq_answer:
      "Yes, our YouTube channel management agency provides end-to-end solutions, from content creation and optimization to growth strategies and performance tracking. We ensure your YouTube channel remains active and engaging."
  },
  {
    faqid: "3",
    faq_question: "How do you optimize YouTube videos for maximum reach?",
    faq_answer:
      "We optimize your YouTube channel by focusing on titles, descriptions, tags, and thumbnails. Additionally, we analyze audience insights and trends to ensure your content reaches the right viewers."
  },
  {
    faqid: "4",
    faq_question: "How can YouTube marketing boost my business?",
    faq_answer:
      "With YouTube marketing services, your brand gains visibility, engagement, and higher conversion rates. Videos are one of the most powerful tools for customer decision-making, making YouTube marketing essential for growth."
  },
  {
    faqid: "5",
    faq_question: "Do you provide analytics and performance reports?",
    faq_answer:
      "Yes, our YouTube marketing agency provides comprehensive analytics and performance reports. We track metrics such as views, engagement, and subscriber growth to refine strategies and maximize ROI."
  },
  {
    faqid: "6",
    faq_question:
      "Can your YouTube marketing services help with paid advertising?",
    faq_answer:
      "Absolutely! Our YouTube marketing services include creating targeted ad campaigns designed to increase brand awareness, drive traffic, and improve conversion rates."
  },
  {
    faqid: "7",
    faq_question: "How do I get started with your YouTube marketing services?",
    faq_answer:
      "Getting started is simple! Contact us today to discuss your goals, and our YouTube marketing agency will create a tailored strategy to help grow your digital marketing YouTube channel and deliver results."
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/youtube-marketing";
  const wwwURL = "https://www.base2brand.com/youtube-marketing";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Top YouTube Marketing Services | Base2Brand",
    description:
      "Boost your brand with Base2Brand’s YouTube marketing services. Drive engagement, increase views, and grow your channel with expert YouTube marketing strategies.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Youmarbanner />
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
              Why Choose Our YouTube Marketing Agency?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 1 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_38_cmqohb.png"
                card_title="Proven Expertise"
                card_para="Our YouTube marketing agency has helped brands maximize their reach and engagement. With tailored strategies, we ensure your content stands out and attracts loyal subscribers."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 2 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_19_qbnhwj.png"
                card_title="Customized YouTube Marketing Services"
                card_para="We design strategies that align with your goals. Our YouTube marketing agency creates content, runs targeted ads, and optimizes channel growth based on data-driven insights."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 3 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_6_c8apj4.png"
                card_title="Advanced Advertising Services"
                card_para="Leverage our YouTube marketing services for ad campaigns that reach the right audience at the right time. We optimize ad targeting to maximize your ROI and engagement."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 4 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_8_a4mkqk.png"
                card_title="Expert Team of YouTube Specialists"
                card_para="Our YouTube channel management agency combines creativity and technical expertise to optimize your YouTube presence, keeping your content fresh and engaging"
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
              Our Core YouTube Marketing Services
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/online-movie-streaming-with-smartphone-young-man-watching-movie-mobile-phone_1_kxusnb.jpg"
                offer_title="YouTube Strategy and Planning"
                offer_para="Our YouTube marketing agency helps define your target audience, plan content, and select the right promotion strategies. We ensure your channel’s growth aligns with your business objectives."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_55_ju8vmt.jpg"
                offer_title="Content Creation and Optimization"
                offer_para="Our digital marketing YouTube channel experts create engaging videos, optimize titles, descriptions, and thumbnails to enhance visibility and attract subscribers. Quality content is the key to success."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_56_clptku.jpg"
                offer_title="YouTube Advertising Services"
                offer_para="Maximize reach with YouTube marketing services that include precise ad targeting, creative ad design, and budget-friendly campaigns to boost your brand awareness."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_57_ct9qfw.jpg"
                offer_title="Influencer Marketing"
                offer_para="We connect your brand with top influencers, promoting your YouTube content. This builds trust and authenticity, expanding your reach within your niche audience."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_59_gaatml.jpg"
                offer_title="Analytics and Reporting"
                offer_para="Track the success of your YouTube marketing agency campaigns. We provide metrics such as views, engagement rates, and subscriber growth, helping you understand your ROI and refine strategies."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Youmarimp />
      <Youmaropti />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Ready to Elevate Your YouTube Channel?"
        seo_footer_bar_title_para="Contact us today to learn how our YouTube marketing agency India can help you grow your YouTube channel. We’re here to help you navigate the complexities of YouTube marketing and achieve real success."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={ytmarsliderdata} />
      <Footer />
    </div>
  );
}
