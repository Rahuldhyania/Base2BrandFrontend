import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Motionbanner from "./Motionbanner";
import "../socialmediamain.css";
import "../web-mobile-app-design-services/webmobile.css";
import "../ui-ux-services/uiux.css";
import "../social-media-management-services/smservices.css";
import "./motion.css";
import Motionfactcard from "./Motionfactcard";
import Creative from "./Creative";
import Motionchoose from "./Motionchoose";
import Uiuxteam from "../ui-ux-services/Uiuxteam";
import Uiclient from "../ui-ux-services/Uiclient";
import Uiuxform from "../ui-ux-services/Uiuxform";
import PageHead from "../../../component/PageHead";
import Uifaqs from "../ui-ux-services/Uifaqs";
const faqsdata = [
  {
    id: 1,
    faqQuestion: "What are motion graphics services?",
    faqAnswer: "Motion graphics services involve creating animated visuals that combine text, graphics, and effects to convey a message, ideal for promotions, presentations, or storytelling.",
    idname: 10
  },
  {
    id: 2,
    faqQuestion: "What does a motion graphics designer do?",
    faqAnswer:
      "A motion graphics designer creates engaging animations and graphics that bring ideas to life, focusing on branding, advertisements, and storytelling through motion.",
    idname: 11
  },
  {
    id: 3,
    faqQuestion: "Are custom motion graphics design services available?",
    faqAnswer:
      "Yes, we offer custom motion graphics design services tailored to your unique branding needs, ensuring high-quality and impactful animations.",
    idname: 12
  },
  {
    id: 4,
    faqQuestion: "What is the difference between 2D and 3D motion graphics animation services?",
    faqAnswer: "2D animations are flat and simple, ideal for explainer videos, while 3D motion graphics animation services add depth for immersive visuals like product demos.",
    idname: 13
  },
  {
    id: 5,
    faqQuestion: "Why choose professional motion graphics companies?",
    faqAnswer: "Professional motion graphics companies provide expertise, cutting-edge tools, and high-quality animations that effectively communicate your brand message and engage your audience.",
    idname: 14
  },
  {
    id: 6,
    faqQuestion: "Can motion graphics design services improve user engagement?",
    faqAnswer:
      "Absolutely! Motion graphic designs captivate audiences, making complex ideas easier to understand and boosting engagement in advertisements, presentations, and user interfaces.",
    idname: 15
  }
];
export default function page() {
    const baseURL = "https://base2brand.com/motion-graphic-video-services";
  const wwwURL = "https://www.base2brand.com/motion-graphic-video-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  console.log("isUsingWWWisUsingWWW");
  const PageMeta = {
    title: "Motion Graphic Video Services | Graphics Design | Base2Brand",
    description:
      "Base2Brand offers motion graphic video services to create stunning animations that captivate your audience and communicate your brand message with impacts.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Motionbanner />
      <Motionfactcard />
      <Creative />
      <Motionchoose />
      <Uiuxteam />
      <Uifaqs faqs={faqsdata}/>
      <Uiclient />
      <Uiuxform />
      <Footer />
    </div>
  );
}
