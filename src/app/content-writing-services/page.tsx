import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seofooterslider from "../seo-services/Seofooterslider";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Conserbanner from "./Conserbanner";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Conserimp from "./Conserimp";
import Conseropti from "./Conseropti";
import Seofooterbar from "../seo-services/Seofooterbar";
import Seofaqs from "../seo-services/Seofaqs";
import { contentsliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What are content writing services?",
    faq_answer:
      "Content writing services involve creating engaging, SEO-optimized content for websites, blogs, and marketing materials to boost brand visibility and audience engagement."
  },
  {
    faqid: "2",
    faq_question: "Do you offer SEO and content writing services?",
    faq_answer:
      "Yes, we specialize in SEO content writing services, ensuring your content is optimized for search engines while remaining engaging and informative."
  },
  {
    faqid: "3",
    faq_question: "How do I hire a website content writer?",
    faq_answer:
      "Social media management services encompass content creation, scheduling, monitoring, responding to audience interactions, and optimizing strategies for better engagement and conversions."
  },
  {
    faqid: "4",
    faq_question: "Are your content writing services customizable?",
    faq_answer:
      "Absolutely! Our content writing company designs solutions based on your goals, target audience, and industry, providing fully tailored and impactful content."
  },
  {
    faqid: "5",
    faq_question: "Can you handle bulk content writing projects?",
    faq_answer:
      "Yes, our team of professional writers and editors can efficiently manage bulk content writing projects while maintaining quality and timely delivery."
  },
  {
    faqid: "6",
    faq_question: "Do you provide samples of your content writing services?",
    faq_answer:
      "Yes, we’re happy to share samples of our best website content writing services to help you evaluate our quality and style."
  },
  {
    faqid: "7",
    faq_question: "What types of content do you create?",
    faq_answer:
      "We create blogs, articles, web pages, product descriptions, and more, offering comprehensive SEO and content writing services for all business needs."
  }
];

export default function page() {
  const baseURL = "https://base2brand.com/content-writing-services";
  const wwwURL = "https://www.base2brand.com/content-writing-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Professional Content Writing Services | Base2Brand",
    description:
      "Get high-quality, SEO-friendly content from Base2Brand’s expert writers. Boost your website’s engagement and SEO with our top content writing agency services.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Conserbanner />
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
              Why Choose Our Content Writing Company?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 1 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_38_cmqohb_1.png"
                card_title="Proven Expertise"
                card_para="Our content writing company has helped businesses across industries communicate effectively. With tailored content writing services, we deliver compelling narratives that resonate with your target audience and amplify your brand’s voice."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 2 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_19_qbnhwj.png"
                card_title="Customized Content Writing"
                card_para="We understand that every business is unique. Our content writing agency designs personalized strategies for website content writing, SEO content writing services, and more, aligning with your goals to maximize impact."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 3 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_6_c8apj4.png"
                card_title="SEO Optimized Writing"
                card_para="Leverage our expertise in SEO content writing services to boost your online visibility. Our website content writers create optimized content that ranks high in search results and drives organic traffic."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 4 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_8_a4mkqk.png"
                card_title="Expert Team of Content Writers"
                card_para="Our content writing agency boasts a team of skilled professionals experienced in crafting diverse content. From blogs to web copy, we deliver the best website content writing services tailored to your industry."
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
              Our Core Content Writing Services
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_69_u2rkyk.jpg"
                offer_title="Content Strategy and Planning"
                offer_para="Our content writing services help you define your messaging, plan strategic content, and create an impactful presence online. We align our strategies with your brand’s goals to achieve measurable results."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/woman-analyzing-data-laptop_jwhtj3.jpg"
                offer_title="SEO Content Writing Services"
                offer_para="We specialize in creating keyword-rich content that improves search rankings. Our SEO and content writing services enhance visibility and drive traffic to your website with quality, optimized content."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_70_jnmkhj.jpg"
                offer_title="Website Content Writing"
                offer_para="As part of our best web content writing services, we craft engaging and conversion-focused website content. Our website content writers ensure your site communicates effectively with your audience."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_71_o9de9h.jpg"
                offer_title="Professional Copywriting Services"
                offer_para="We offer high-quality copywriting services, delivering compelling content for websites, ads, blogs, and more. Our writing drives conversions, strengthens your brand, and connects with your target audience effectively."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_72_nq5otw.jpg"
                offer_title="Social Media Content Writing"
                offer_para="We offer expert social media content writing services, crafting engaging posts tailored to your brand's voice, increasing engagement, and boosting online visibility."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Conserimp />
      <Conseropti />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Ready to Elevate Your Content Strategy?"
        seo_footer_bar_title_para="Contact us today to discover how our content writing services can transform your brand’s online presence. Let our content writing agency guide you with expert website content writers and SEO content writing services for lasting success."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={contentsliderdata} />
      <Footer />
    </div>
  );
}
