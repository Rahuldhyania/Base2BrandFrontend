import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Seobanner from "./Seobanner";
import "../devops-services/devops.css";
import "./seonew.css";
import Bannercard from "./Bannercard";
import Reviewbar from "./Reviewbar";
import Seoform from "./Seoform";
import Logobar from "./Logobar";
import Seooffercard from "./Seooffercard";
import Seomidbar from "./Seomidbar";
import Seootima from "./Seootima";
import Seostep from "./Seostep";
import Seofooterslider from "./Seofooterslider";
import Seofooterbar from "./Seofooterbar";
import Seofaqs from "./Seofaqs";
import Link from "next/link";
import { seosersliderdata } from "../ratings/Rating";
import PageHead from "../../../component/PageHead";
const faqs = [
  {
    faqid: "1",
    faq_question: "What is SEO, and why is it important?",
    faq_answer:
      "SEO (Search Engine Optimization) improves your website’s visibility in search engines. It helps attract organic traffic and boosts your online presence."
  },
  {
    faqid: "2",
    faq_question: "How long does an SEO provider company take to show results?",
    faq_answer:
      "Typically, you’ll see noticeable improvements within 1 to 3 months of working with a professional SEO company."
  },
  {
    faqid: "3",
    faq_question: "Do you provide local SEO services?",
    faq_answer:
      "Yes, we specialize in local SEO to help businesses rank higher in location-specific searches."
  },
  {
    faqid: "4",
    faq_question: "Can an SEO service provider help my e-commerce site?",
    faq_answer:
      "Absolutely, Our e-commerce SEO services are designed to enhance product visibility and drive sales."
  },
  {
    faqid: "5",
    faq_question: "How do I track the progress of my SEO campaign?",
    faq_answer:
      "We provide detailed monthly reports and analytics to keep you informed of your campaign’s progress."
  },
  {
    faqid: "6",
    faq_question: "What makes your SEO agency different from others?",
    faq_answer:
      "Our focus on personalized strategies, transparency, and measurable results sets us apart."
  },
  {
    faqid: "7",
    faq_question: "Are your SEO services affordable?",
    faq_answer:
      "Yes, our SEO service provider packages are tailored to fit various budgets without compromising qualit."
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/seo-services";
  const wwwURL = "https://www.base2brand.com/seo-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Best SEO Services & Agency | Boost Traffic & Rankings | Base2Brand",
    description:
      "Looking for top SEO services? Base2Brand is the best SEO company offering expert SEO marketing, SEO consulting, and tailored strategies to boost your traffic, rankings, and revenue. Contact us today for professional SEO solutions.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Seobanner />
      <div
        className="pt-5 pb-5"
        style={{
          background: "#0C0C0C"
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              Why Choose Our SEO Services?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_1_svorkz.svg"
                card_title="Proven Track Record"
                card_para="Over 80% of our clients achieve top 10 rankings within six months, thanks to our data-driven approach. We focus on delivering sustainable growth by optimizing websites for long-term success, ensuring your business stays ahead of the competition."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_12_egxynz_1.svg"
                card_title="Custom Strategies"
                card_para="We don’t believe in one-size-fits-all solutions. Our SEO experts analyze your industry, target audience, and competition to craft a personalized strategy. Whether you need local SEO, eCommerce SEO, or enterprise solutions, we tailor our approach to your goals."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_10_dhqwmh.svg"
                card_title="Expert Team"
                card_para="Our SEO agency consists of certified professionals with years of experience in digital marketing. With deep expertise in search algorithms, keyword research, and technical SEO, our team helps businesses grow their online visibility and attract high-quality traffic."
              />
            </div>
            <div className="col-md-6 col-xl-3 mt-4">
              <Bannercard
                card_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_11_bdsf9c.svg"
                card_title="Cutting-Edge Tools"
                card_para=" We leverage advanced SEO tools and analytics to track performance, identify opportunities, and optimize your online presence for maximum results. From AI-driven keyword research to competitor analysis, we use the best technology to enhance your rankings."
              />
            </div>
          </div>
        </div>
      </div>
      <Reviewbar />
      <Seoform />
      <Logobar />
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
              Our Core SEO Offerings
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_25_ipbtr7.jpg"
                offer_title="On-Page SEO"
                offer_para="Optimize your website's structure, content, and HTML elements to align with search engine algorithms. By enhancing meta tags, headers, and keyword placement, our search engine optimization services company ensures your site achieves maximum visibility, driving more organic traffic and improving user engagement."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/seo-essentials-maximizing-blog-impact-online-realm_mcguf0.jpg"
                offer_title="Off-Page SEO"
                offer_para="Boost your website's authority with high-quality backlinks from trusted sources. Our off-page SEO services focus on link building, social signals, and brand mentions, helping your site rank higher while establishing credibility and trust within your target audience."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_26_nxd8mw.jpg"
                offer_title="Technical SEO"
                offer_para="Ensure your website operates flawlessly for both users and search engines. From fixing crawl errors to improving site speed and mobile-friendliness, our technical SEO services create a seamless experience while optimizing your site's performance for search engine crawlers."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_27_s10vpi.jpg"
                offer_title="Local SEO"
                offer_para="Maximize your business’s reach within your community by optimizing for local search. We refine your Google My Business profile, local keywords, and citation consistency, helping drive foot traffic and elevate your presence in location-based searches."
              />
            </div>
            <div className="col-md-6 col-xl-4 mt-4">
              <Seooffercard
                offer_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ecommerce-concept-with-laptop-with-cart_zf9h4u.jpg"
                offer_title="E-commerce SEO"
                offer_para="Transform your online store into a sales powerhouse with tailored SEO strategies. From optimizing product pages to enhancing site navigation, we ensure your e-commerce platform ranks high, attracts shoppers, and converts visitors into loyal customers."
              />
            </div>
          </div>
        </div>
      </div>
      <Seomidbar />
      <Seootima />
      <Seostep />
      <Seofooterbar
        seo_footer_bar_title="Get an SEO Proposal from Our Experts for Your Website"
        seo_footer_bar_title_para="Looking to improve your website’s rankings and drive more organic traffic? Our SEO experts will analyze your site, identify opportunities, and craft a tailored strategy to boost your online presence. Get a detailed SEO proposal with actionable insights to help your business grow. Let’s optimize your website for success—request your free SEO proposal today!"
        seo_footer_bar_btn="Book Your Audit Today"
      />
      <Seofaqs seo_faqs_data={faqs} />
      <Seofooterslider seo_sliderdata={seosersliderdata} />
      <div className="pt-5 pb-5" style={{ background: "#0C0C0C" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center" data-aos="fade-up">
                <h2 className="b2b-partners-heading">
                  Take Your Business to the Next Level
                </h2>
                <p className="text-white">
                  Partner with our professional search engine optimization
                  company to transform your digital presence. Whether you’re
                  looking for web SEO services, local SEO, or advanced
                  e-commerce optimization, we have the expertise to deliver
                  results. Contact us today and let the best search engine
                  optimization agency guide you to success!
                </p>
                <div className="d-flex justify-content-center" data-aos="fade-up">
                  <Link href="/contact-us">
                    <button className="b2b-btn b2b-btn-sm m-0">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
