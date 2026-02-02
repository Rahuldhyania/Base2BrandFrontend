import React from "react";
import IndustriesBanner from "../Component/IndustriesPages/IndustriesBanner";
import Header from "../../../component/header";
import FooterNew from "../Component/FooterNew";
import "../Component/IndustriesPages/Industries.css";
import "../Component/NewHomePage/NewHome.css";
import IndustriesMonthlyGrowth from "../Component/IndustriesPages/IndustriesMonthlyGrowth";
import IndustriesHowWork from "../Component/IndustriesPages/IndustriesHowWork";
import IndustriesGlobal from "../Component/IndustriesPages/IndustriesGlobal";
import OurRiskManagement from "../Component/IndustriesPages/OurRiskManagement";
import ProcessWorkingModel from "../Component/IndustriesPages/ProcessWorkingModel";
import IndustriesTestimonialSection from "../Component/IndustriesPages/IndustriesTestimonialSection";
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

const Howworkdata = [
  {
    id: 1,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 2,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 3,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 4,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  },
  {
    id: 5,
    title: "Professionally Managed Investment Pool",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam nemo quam nesciunt ipsum dolor quia nostrum porro hic. Quibusdam a neque sapiente nulla doloribus et consectetur inventore reprehenderit corporis?"
  }
];
const riskData = [
  {
    icon: "🛡️",
    title: "Proactive Risk Detection",
    desc:
      "Identifying potential threats early through predictive insights and strategic monitoring."
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc:
      "Leveraging real-time analytics to reduce uncertainty and optimize performance."
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    desc:
      "Ensuring enterprise-grade security aligned with global compliance standards."
  },
  {
    icon: "⚙️",
    title: "Operational Resilience",
    desc:
      "Building scalable systems that adapt to change while maintaining stability."
  }
];
const page = () => {
  return (
    <div>
      <Header />
      <IndustriesBanner
        title={"E-commerce Business with Base2brand"}
        description={
          "In Shopify development services, we don't just meet expectations we exceed them. With a proven track record of success, we outperform in every aspect of Shopify development."
        }
      />
      <IndustriesMonthlyGrowth
        title={
          " Monthly returns between <span class='text-green'>10%</span> and <span class='text-green'>12%</span>"
        }
        description_left={
          "Stay ahead with real-time market insights and trending stocks curated for you.Stay ahead with real-time market insights and trending stocks curated for you.Stay ahead with"
        }
        btnname={"Discover Our Solutions"}
        YourProfit={"$563.40"}
        growth={"+2.80%"}
        description_right={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Temporibus nesciunt sint omnis, nihil quo molestiae vero. Dolor quo aut numquam quaerat error consequatur accusamus unde distinctio dicta fugiat voluptate, inventore omnis magni quis laboriosam rerum esse dignissimos atque? Ratione, nemo dignissimos! Explicabo, similique. Assumenda quisquam corporis delectus expedita."
        }
      />
      <IndustriesHowWork
        title={
          ' How <span class="gradient_text"> E-commerce </span> Business Works with <span class="gradient_text"> Base2brand?</span>'
        }
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur vitae deserunt ratione, quo illo adipisci quas nobis non nesciunt explicabo mollitia provident, veritatis beatae sapiente, officia cupiditate quasi voluptatibus."
        }
        maindata={Howworkdata}
      />
      <IndustriesGlobal
        title={"E-commerce at Global Scale"}
        description={
          "The global e-commerce industry has crossed <strong> $23 Trillion</strong>, redefining how brands sell, scale, and expand worldwide. Base2Brand actively contributes by delivering scalable, high-conversion e-commerce solutions trusted by growing and enterprise businesses."
        }
        market_cap={"$23T+"}
        market_cap_des={
          "A rapidly expanding global digital commerce ecosystem."
        }
        base2brand_cap={"$95M+"}
        base2brand_cap_des={
          " Revenue enabled through scalable commerce solutions."
        }
      />
      <OurRiskManagement
        title={"Our Risk Management Philosophy"}
        description={
          "Risk intelligence is embedded into every decision we make, helping businesses scale securely and sustainably."
        }
        btnname={"Discover Our Solutions"}
        maindata={riskData}
      />
      <ProcessWorkingModel />
      <IndustriesTestimonialSection />
      <Faqs title={"Frequently Asked Questions"} faqdata={faqdata} />
      <FooterNew />
    </div>
  );
};

export default page;
