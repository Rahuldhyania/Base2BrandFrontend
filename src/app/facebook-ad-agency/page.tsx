import React from "react";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Metaadsbanner from "./Metaadsbanner";
import Seooffercard from "../seo-services/Seooffercard";
import Adstech from "./Adstech";
import Metaadsopti from "./Metaadsopti";
import Logobar from "../seo-services/Logobar";
import Metaadstextban from "./Metaadstextban";
import Seofooterbar from "../seo-services/Seofooterbar";
import Seofaqs from "../seo-services/Seofaqs";
import Seofooterslider from "../seo-services/Seofooterslider";
import { metaadssliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What are Facebook ad services?",
    faq_answer:
      "Facebook ad services involve creating, managing, and optimizing paid advertising campaigns on Facebook to target specific audiences, enhance engagement, and boost conversions effectively."
  },
  {
    faqid: "2",
    faq_question: " How do Facebook marketing services benefit businesses?",
    faq_answer:
      "Facebook marketing services help businesses increase brand visibility, generate leads, and drive sales by leveraging Facebook’s advanced targeting options and audience insights."
  },
  {
    faqid: "3",
    faq_question: "What does an Instagram advertising agency do?",
    faq_answer:
      "An Instagram advertising agency creates customized campaigns to maximize engagement, generate leads, and improve ROI through strategic and visually appealing Instagram paid ads."
  },
  {
    faqid: "4",
    faq_question: "Can Base2Brand manage both Facebook and Instagram ads?",
    faq_answer:
      "Yes, Base2Brand offers comprehensive Meta ad services, including Facebook ad services and Instagram management service, ensuring seamless marketing on both platforms."
  },
  {
    faqid: "5",
    faq_question: "Why choose a Facebook ads company?",
    faq_answer:
      "A specialized Facebook ads company, like Base2Brand, ensures targeted and optimized campaigns, helping businesses save money while achieving higher conversions and audience reach."
  },
  {
    faqid: "6",
    faq_question: "What are Instagram paid ads?",
    faq_answer:
      "Instagram paid ads are promotional posts created by businesses to reach larger audiences on Instagram, improving visibility, engagement, and brand awareness."
  },
  {
    faqid: "7",
    faq_question: "How do digital marketing Facebook ads improve ROI?",
    faq_answer:
      "Digital marketing Facebook ads use advanced analytics and targeting strategies to optimize campaigns, ensuring higher engagement and conversion rates for a better return on investment."
  },
];
export default function page() {
  const baseURL = "https://base2brand.com/facebook-ad-agency";
  const wwwURL = "https://www.base2brand.com/facebook-ad-agency";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Top Facebook Ad Agency | Expert FB Marketing Services | Base2Brand",
    description:
      "Maximize your brand’s reach with Base2Brand’s Facebook ad agency. Tailored Facebook advertising strategies that drive engagement, leads, and sales for your business.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Metaadsbanner />
      {/* Core section */}
      <div
        className="pt-5 pb-5"
        style={{
          background:
            " #0C0C0C",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              Why Choose Base2Brand?
            </h2>
            <p className="m-0 text-white " data-aos="fade-up">
              As a leading Facebook ads company, we combine creativity and
              data-driven insights to create <br /> powerful digital marketing
              Facebook and Instagram ads.
            </p>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_73_vjz2uz.jpg"
                offer_title="Expertise in Meta Platforms"
                offer_para="Base2Brand excels as a trusted Facebook ads company and Instagram advertising agency, leveraging years of experience to craft high-performing campaigns. Our expertise ensures optimal results from both platforms, maximizing engagement, conversions, and ROI through tailored strategies."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_74_o6g25j.jpg"
                offer_title="Data-Driven Campaigns"
                offer_para="We utilize advanced analytics to guide digital marketing Facebook ads and Instagram paid ads, optimizing campaigns for success. By tracking audience behavior, we refine targeting and reduce ad spend while boosting clicks, ensuring cost-efficient and result-driven advertising solutions."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_75_sfmkej.jpg"
                offer_title="Creative Content Excellence"
                offer_para="Our team designs visually stunning, engaging ads for Facebook marketing services and Instagram advertising. We create content that resonates with your target audience, blending aesthetics and functionality to capture attention and drive measurable results across Meta platforms."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_76_u4rlbc.jpg"
                offer_title="Proven ROI Boost"
                offer_para="Businesses using our Facebook ad services and Instagram management service achieve remarkable ROI. We focus on lead generation, conversions, and brand growth, ensuring your ad budget is invested in strategies that generate tangible, long-term value for your business."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_77_jnuixh.jpg"
                offer_title="Comprehensive Service Suite"
                offer_para="From strategy development to campaign optimization, Base2Brand offers end-to-end services for digital marketing Facebook ads and Instagram paid ads. We handle every aspect of your advertising, so you can focus on growing your business while we drive results."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_78_qsihxw.jpg"
                offer_title="Dedicated Client Support"
                offer_para="Base2Brand prioritizes client success with a dedicated team available to assist with your Facebook ad services and Instagram advertising needs. Our personalized approach ensures your campaigns are aligned with your goals, delivering consistent, impactful outcomes."
              />
            </div>
          </div>
        </div>
      </div>
      <Adstech />
      <Metaadsopti />
      <Logobar />
      <Metaadstextban />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Let Base2Brand Be Your Instagram Advertising Agency"
        seo_footer_bar_title_para="With a proven track record in Instagram advertising and Meta ad services, we help businesses grow their online presence effectively. Contact Base2Brand today to see how we can elevate your marketing campaigns."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={metaadssliderdata} />
      <Footer />
    </div>
  );
}
