import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import UlUXbanner from "./UlUXbanner";
import "./uiux.css";
import UImarquee from "./UImarquee";
import Uiservices from "./Uiservices";
import Vesion from "./Vesion";
import Uiuxgrow from "./Uiuxgrow";
import Uiuxteam from "./Uiuxteam";
import Uifaqs from "./Uifaqs";
import Uiclient from "./Uiclient";
import Uiuxform from "./Uiuxform";
import PageHead from "../../../component/PageHead";
import "../web-mobile-app-design-services/webmobile.css";
const faqsdata = [
  {
    id: 1,
    faqQuestion: "What is the difference between UI and UX design?",
    faqAnswer: "UI is about how things look, UX is about how things work.",
    idname: 10
  },
  {
    id: 2,
    faqQuestion: "What is the typical process for UI/UX design projects?",
    faqAnswer:
      "We follow research, wireframes, prototypes, user testing, and final designs.",
    idname: 11
  },
  {
    id: 3,
    faqQuestion: "Why is UI/UX design important for my business?",
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
    faqQuestion: "What tools do you use for UI/UX design?",
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
  const baseURL = "https://base2brand.com/ui-ux-services";
  const wwwURL = "https://www.base2brand.com/ui-ux-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "UI/UX Design Services | Expert User Interface & Design | Base2Brand",
    description:
      "Base2Brand provides the best UI/UX design services to create engaging, intuitive interfaces that enhance user experience, design and drive business growth.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <UlUXbanner />
      <UImarquee />
      <Uiservices />
      <Vesion />
      <Uiuxgrow />
      <Uiuxteam />
      <Uifaqs faqs={faqsdata} />
      <Uiclient />
      <Uiuxform />
      <Footer />
    </div>
  );
}
