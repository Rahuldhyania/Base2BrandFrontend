import React from "react";
import "../Component/B2bautomation/Automation.css";
import "../Component/NewHomePage/NewHome.css";
import Header from "../../../component/header";
import FooterNew from "../Component/FooterNew";
import AutomationBanner from "../Component/B2bautomation/AutomationBanner";
import AutomationPricing from "../Component/B2bautomation/AutomationPricing";
import AutomationStats from "../Component/B2bautomation/AutomationStats";
import WhyChooseB2bAutomation from "../Component/B2bautomation/WhyChooseB2bAutomation";
import AutomationForm from "../Component/B2bautomation/AutomationForm";
import PlatformMatrix from "../Component/B2bautomation/AutomationPlatformMatrix";
import LetsBegin from "../Component/LetsBegin";
import Faqs from "../Component/NewHomePage/Faqs";


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
const page = () => {
  return (
    <div>
      <Header />
      <AutomationBanner 
       title={'B2B Wholesale Automation: <br/> <span class="gradient_text"> Eliminate Manual Order Processing Without Enterprise Platform Costs </span>'}
       description={'Mid-market wholesale distributors lose operational efficiency to manual order processing and pricing reconciliation. SAAS Integrator automates tier pricing, credit enforcement, and order synchronization between your ERP and e-commerce platforms—reducing fulfillment cycle time while eliminating pricing errors that compromise customer relationships.'}
       topbar_title={"The Shopify Plus Alternative for Mid-Market Wholesalers"}
      />
      <AutomationPricing  
       title={`B2B TIER PRICING AUTOMATION`}
       description={`Customer-specific rates without manual updates. Streamline your wholesale operations with automated pricing and order management.`}
      />
      <AutomationStats />
      <WhyChooseB2bAutomation />
      <AutomationForm />
      <PlatformMatrix />
      <LetsBegin  
        title={'Deploy B2B Wholesale Automation'}
        description={'Product data, pricing, customer information, and inventory levels maintained in single system of record—automatic synchronization ensures consistency across all customer touchpoints.'}
      />
      <Faqs title={"Frequently Asked Questions"} faqdata={faqdata} />
      <FooterNew />
    </div>
  );
};

export default page;
