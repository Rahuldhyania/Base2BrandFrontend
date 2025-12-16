"use client";
import React from "react";
import "./smservices.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Smbanner from "./Smbanner";
import Smservicesfact from "./Smservices";
import Smfact from "./Smfact";
import Smdessec from "./Smdessec";
import Smanibar from "./Smanibar";
import Smartistic from "./Smartistic";
import Uiuxteam from "../ui-ux-services/Uiuxteam";
import Uiclient from "../ui-ux-services/Uiclient";
import "../ui-ux-services/uiux.css";
import Uiuxform from "../ui-ux-services/Uiuxform";
import PageHead from "../../../component/PageHead";
import "../socialmediamain.css";
import "../web-mobile-app-design-services/webmobile.css"
import Uifaqs from "../ui-ux-services/Uifaqs";
const faqs = [
  {
    id: 1,
    faqQuestion: "What is social media design, and why is it important?",
    faqAnswer: "UI is about how things look, UX is about how things work.",
    idname: 10
  },
  {
    id: 2,
    faqQuestion: "How does your social media graphic design process work?",
    faqAnswer:
      "We follow research, wireframes, prototypes, user testing, and final designs.",
    idname: 11
  },
  {
    id: 3,
    faqQuestion: "What makes your social media design agency unique?",
    faqAnswer:
      "It improves customer satisfaction, usability, and conversion rates.",
    idname: 12
  },
  {
    id: 4,
    faqQuestion: "Can you work with our existing brand guidelines?",
    faqAnswer: "Yes, we integrate and enhance your existing brand identity.",
    idname: 13
  },
  {
    id: 5,
    faqQuestion: "Why should I choose your social media design company?",
    faqAnswer: "We use Figma, Sketch, Adobe XD, and other modern design tools.",
    idname: 14
  },
  {
    id: 6,
    faqQuestion: "Do you provide a brand style guide?",
    faqAnswer:
      "Yes, we create comprehensive style guides for consistent branding.",
    idname: 15
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/social-media-management-services";
  const wwwURL = "https://www.base2brand.com/social-media-management-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Expert Social Media Management Services | Social Media Services",
    description:
      "Transform your brand with Base2Brand’s expert social media management services. Increase engagement, reach, and results with our tailored strategies.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Smbanner />
      <Smservicesfact />
      <Smfact />
      {/* <Smdessec/> */}
      <Smanibar />
      <Smartistic />
      <Uiuxteam />
      <Uifaqs faqs={faqs}/>
      <Uiclient />
      <Uiuxform />
      <Footer />
    </div>
  );
}
