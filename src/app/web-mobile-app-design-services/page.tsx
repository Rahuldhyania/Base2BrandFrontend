import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Webbanner from "./Webbanner";
import "./webmobile.css";
import "../socialmediamain.css";
import "../social-media-management-services/smservices.css";
import "../ui-ux-services/uiux.css";
import Webservices from "./Webservices";
import Webcool from "./Webcool";
import Interface from "./Interface";
import Mobilecard from "./Mobilecard";
import Techniques from "./Techniques";
import Webwow from "./Webwow";
import Uiuxteam from "../ui-ux-services/Uiuxteam";
import Uiclient from "../ui-ux-services/Uiclient";
import Uiuxform from "../ui-ux-services/Uiuxform";
import PageHead from "../../../component/PageHead";
import Uifaqs from "../ui-ux-services/Uifaqs";
const faqsdata = [
  {
    id: 1,
    faqQuestion: "What makes your web and mobile app design service different?",
    faqAnswer: "Our designs are customized to meet your brand's unique needs, ensuring a blend of aesthetics, functionality, and user experience.",
    idname: 10
  },
  {
    id: 2,
    faqQuestion: "Do you offer responsive web design?",
    faqAnswer:
      "Yes, all of our websites are designed to be fully responsive, ensuring they work perfectly on both desktop and mobile devices.",
    idname: 11
  },
  {
    id: 3,
    faqQuestion: "How long does the design process take?",
    faqAnswer:
      "The design process typically takes 2 to 3 weeks, depending on the complexity and features required for your project.",
    idname: 12
  },
  {
    id: 4,
    faqQuestion: "Can you help redesign an existing website or app?",
    faqAnswer: "Absolutely! We specialize in redesigning and improving existing websites and apps to enhance usability and modernize their look and feel.",
    idname: 13
  },
  {
    id: 5,
    faqQuestion: "Do you offer ongoing maintenance for apps and websites?",
    faqAnswer: "Yes, we offer ongoing maintenance and updates to ensure your web and mobile app remain functional and secure",
    idname: 14
  },
  {
    id: 6,
    faqQuestion: "What is your pricing model for web and app design services?",
    faqAnswer:
      "Our pricing is based on the complexity of the project. We offer competitive rates and can provide a detailed quote after discussing your needs.",
    idname: 15
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/web-mobile-app-design-services";
  const wwwURL = "https://www.base2brand.com/web-mobile-app-design-services";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  console.log("isUsingWWWisUsingWWW");
  const PageMeta = {
    title: "Web & Mobile App Design Services for Businesses | Base2Brand",
    description:
      "Boost your business with Base2Brand web and mobile app design services. Custom, responsive designs crafted to the improve user experience and increase conversions.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta}/>
      <Header />
      <Webbanner />
      <Webservices />
      <Webcool />
      <Interface />
      <Mobilecard />
      <Techniques />
      <Webwow />
      <Uiuxteam />
      <Uifaqs faqs={faqsdata} />
      <Uiclient />
      <Uiuxform />
      <Footer />
    </div>
  );
}
