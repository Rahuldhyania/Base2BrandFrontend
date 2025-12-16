import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seofooterslider from "../seo-services/Seofooterslider";
import "../seo-services/seonew.css";
import "../devops-services/devops.css";
import Emailmar from "./Emailmar";
import Bannercard from "../seo-services/Bannercard";
import Seooffercard from "../seo-services/Seooffercard";
import Logobar from "../seo-services/Logobar";
import Emailimp from "./Emailimp";
import Emailopti from "./Emailopti";
import Seofooterbar from "../seo-services/Seofooterbar";
import Seofaqs from "../seo-services/Seofaqs";
import { emailsliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What makes your email marketing services in India unique?",
    faq_answer:
      "Our personalized campaigns, advanced analytics, and experienced team ensure maximum engagement and ROI for your business across industries."
  },
  {
    faqid: "2",
    faq_question: "How does your email marketing company in India improve conversions?",
    faq_answer:
      "We focus on audience segmentation, compelling content, and A/B testing to deliver targeted messages that drive higher open and click-through rates."
  },
  {
    faqid: "3",
    faq_question: "Can you manage email campaigns for large businesses?",
    faq_answer:
      "Yes, our email marketing agency in India provides scalable solutions, catering to businesses of all sizes with tailored strategies to meet their goals."
  },
  {
    faqid: "4",
    faq_question: "Do you offer email automation services?",
    faq_answer:
      "Absolutely! Our services include creating automated workflows, drip campaigns, and personalized triggers for efficient lead nurturing and customer engagement."
  },
  {
    faqid: "5",
    faq_question: "How do you track the success of email campaigns?",
    faq_answer:
      "We provide detailed performance analytics, tracking open rates, click-through rates, and conversions to measure campaign effectiveness and refine strategies."
  },
  {
    faqid: "6",
    faq_question: "Is email marketing cost-effective for small businesses?",
    faq_answer:
      "Yes, our affordable email marketing services India help small businesses achieve significant results with budget-friendly pricing and high ROI strategies"
  },
  {
    faqid: "7",
    faq_question: "Which industries do you serve as an email marketing company in India?",
    faq_answer:
      "We cater to e-commerce, SaaS, real estate, healthcare, and more, providing tailored solutions for diverse industry needs."
  },
];
export default function page() {
  const baseURL = "https://base2brand.com/email-marketing-services";
  const wwwURL = "https://www.base2brand.com/email-marketing-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Email Marketing Services | Top Email Marketing Agency | Base2Brand",
    description:
      "Grow your business with expert email marketing services. Base2Brand offers tailored strategies, consulting, and management for effective email marketing campaigns.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Emailmar /> {/*Banner*/}
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
              Why Choose Our Email Marketing Services in India?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 1 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_38_cmqohb.png"
                card_title="Proven Expertise"
                card_para="Our email marketing agency in India has helped numerous clients achieve significant engagement and conversions. Over 80% of our clients see a measurable boost in open and click-through rates within the first three months."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 2 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_19_qbnhwj.png"
                card_title="Custom Campaign Strategies"
                card_para="We design campaigns tailored to your brand's voice and goals, ensuring that your audience connects with your message. Whether you’re looking for promotions, newsletters, or drip campaigns, we’ve got you covered."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 3 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_6_6_c8apj4.png"
                card_title="Advanced Tools and Analytics"
                card_para="We use state-of-the-art tools to create, manage, and track campaigns. From segmentation to advanced reporting, our services provide deep insights into customer behavior"
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              {/* 4 */}
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_8_a4mkqk.png"
                card_title="Experienced Team"
                card_para="Our team of experts combines creativity and technical know-how to craft compelling campaigns. As a trusted email marketing agency in India, we leverage years of experience to deliver unparalleled results."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Core section */}
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
              Our Core Email Marketing Services
            </h2>
          </div>
          <div className="row justify-content-center seo_core_con">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_48_roklqq.jpg"
                offer_title="Campaign Strategy and Design"
                offer_para="Craft visually appealing and engaging emails that resonate with your audience. As a top email marketing company in India, we focus on creating content that drives action."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_49_rnzdmf.jpg"
                offer_title="Audience Segmentation"
                offer_para="Target the right audience with precision. Our email marketing agency in India uses advanced segmentation techniques to personalize campaigns for maximum impact."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/businessman-working-laptop-concept-concept_atvqfl.jpg"
                offer_title="Automation and Drip Campaigns"
                offer_para="Automate your workflows for efficiency. We set up drip campaigns that nurture leads and keep your audience engaged over time."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_46_njhreq.jpg"
                offer_title="A/B Testing"
                offer_para="Test various email elements to determine what works best. From subject lines to CTAs, our A/B testing strategies ensure continuous improvement."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/businessman-working-bar_hgg5fq.jpg"
                offer_title="Performance Analytics"
                offer_para="Track your campaigns with detailed insights. Our email marketing services India include comprehensive reports to help you measure success and refine strategies."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_47_keycgs.jpg"
                offer_title="Integration with CRM"
                offer_para="Seamlessly connect your email campaigns with your CRM system. This integration ensures consistent communication and better lead management."
              />
            </div>
          </div>
        </div>
      </div>
      <Logobar />
      <Emailimp />
      <Emailopti />
      <Seofooterbar
        seo_footer_bar_btn="Request A Quote"
        seo_footer_bar_title="Ready to Transform Your Email Campaigns?"
        seo_footer_bar_title_para="Whether you’re new to email marketing or looking to revamp your strategy, our email marketing company in India can help. With a focus on delivering value and results, we’re your go-to email marketing agency in India. Contact us today and take the first step toward creating impactful campaigns with the best email marketing services India has to offer."
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={emailsliderdata} />
      <Footer />
    </div>
  );
}
