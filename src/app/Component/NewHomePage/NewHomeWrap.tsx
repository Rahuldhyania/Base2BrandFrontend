import React from "react";
import "./NewHome.css";
import NewHomeBanner from "./NewHomeBanner";
import ServicesCards from "./ServicesCards";
import SolutionsCards from "./SolutionsCards";
import BringIdeas from "./BringIdeas";
import SolutionAccelerator from "./SolutionAccelerator";
import ProductsBuild from "./ProductsBuild";
import B2bKeysMetric from "./B2bKeysMetric";
import TrustedPartnersBrand from "./TrustedPartnersBrand";
import WhatGet from "./WhatGet";
import Faqs from "./Faqs";
import HaveADream from "./HaveADream";
import LetsBegin from "../LetsBegin";
import HomeFrom from "./HomeFrom";
import FeedBack from "./FeedBack";
import TechnologyStack from "./TechnologyStack";
import FooterNew from "../FooterNew";
import SolutionsCardsph from "./SolutionsCardsph";
const faqdata = [
  {
    id: 0,
    question: "What services does Base2Brand offer?",
    answer:
      "Base2Brand provides end-to-end digital marketing solutions, including social media management, SEO, website development, app development, AR/VR solutions, and branding strategies to help businesses grow and expand globally."
  },
  {
    id: 1,
    question: "Who can benefit from Base2Brand services?",
    answer:
      "Startups, small to medium-sized enterprises, and large businesses can benefit from Base2Brand’s customized digital strategies designed to drive measurable growth, enhance engagement, and strengthen online presence."
  },
  {
    id: 2,
    question: "How does Base2Brand handle app development?",
    answer:
      "Base2Brand develops high-performance mobile and web applications using modern frameworks, managing the complete process from UI/UX design and development to testing and deployment."
  },
  {
    id: 3,
    question: "Does Base2Brand provide SEO and digital marketing services?",
    answer:
      "Yes, Base2Brand specializes in SEO, content marketing, social media campaigns, email marketing, and paid advertising to boost visibility, drive traffic, and deliver measurable results."
  },
  {
    id: 4,
    question: "Can Base2Brand help with branding and design?",
    answer:
      "Absolutely. Base2Brand creates strong brand identities through logo design, visual content, marketing materials, and brand strategy that resonate with the target audience."
  },
  {
    id: 5,
    question: "How does Base2Brand integrate AR and VR solutions?",
    answer:
      "Base2Brand builds immersive AR/VR experiences for marketing, training, and product visualization, combining creativity and technology to deliver engaging interactive solutions."
  },
  {
    id: 6,
    question: "What industries does Base2Brand work with?",
    answer:
      "Base2Brand serves multiple industries including retail, healthcare, education, e-commerce, technology, and manufacturing with industry-specific digital strategies."
  },
  {
    id: 7,
    question: "How can I start working with Base2Brand?",
    answer:
      "You can connect with Base2Brand through the website, email, or phone. After understanding your goals, the team provides a tailored strategy, timeline, and budget to begin collaboration."
  }
];

const NewHomeWrap = () => {
  return (
    <div>
      <NewHomeBanner />
      <ServicesCards />
      <div className="d-none d-md-block">
        <SolutionsCards />
      </div>
      <div className="d-md-none">
        <SolutionsCardsph />
      </div>
      <BringIdeas />  
      <SolutionAccelerator />
      <TechnologyStack />
      <ProductsBuild />
      <B2bKeysMetric /> 
      <TrustedPartnersBrand />
      <WhatGet />
      <FeedBack />
      <Faqs title={"Frequently Asked Questions"} faqdata={faqdata} />
      <HaveADream /> 
      <LetsBegin
        title={"Your project deserves the perfect team. Let’s make it happen."}
        description={
          "Work with experts who deliver custom-built solutions, modern technology, seamless workflows, and dependable engineering designed to turn your vision into reality."
        }
      />
      <HomeFrom />
      <FooterNew /> 
    </div>
  );
};

export default NewHomeWrap;
