import React from "react";
import IndustriesBanner from "../../Component/IndustriesPages/IndustriesBanner";
import Header from "../../../../component/header";
import FooterNew from "../../Component/FooterNew";
import "../../Component/IndustriesPages/Industries.css";
import "../../Component/NewHomePage/NewHome.css";
import IndustriesMonthlyGrowth from "../../Component/IndustriesPages/IndustriesMonthlyGrowth";
import IndustriesHowWork from "../../Component/IndustriesPages/IndustriesHowWork";
import IndustriesGlobal from "../../Component/IndustriesPages/IndustriesGlobal";
import OurRiskManagement from "../../Component/IndustriesPages/OurRiskManagement";
import ProcessWorkingModel from "../../Component/IndustriesPages/ProcessWorkingModel";
import IndustriesTestimonialSection from "../../Component/IndustriesPages/IndustriesTestimonialSection";
import Faqs from "../../Component/NewHomePage/Faqs";

const Howworkdata = [
  {
    id: 1,
    title: "Research-Driven Healthcare Strategy",
    description:
      "We analyze patient behavior, workflows, compliance requirements, and competitor benchmarks to create a healthcare website design that aligns with real patient journeys."
  },
  {
    id: 2,
    title: "Secure & Patient-Centric Design",
    description:
      "Our healthcare web design prioritizes clarity, accessibility, and trust, making it easy for patients to find information, book appointments, and engage confidently."
  },
  {
    id: 3,
    title: "Performance-Focused Development",
    description:
      "We build fast, mobile-first, scalable healthcare websites engineered for uptime, speed, and long-term digital growth."
  },
  {
    id: 4,
    title: "Compliance-Ready Web Architecture",
    description:
      "Every healthcare website design is compliant with data protection standards, accessibility guidelines, and healthcare regulations, ensuring secure platforms that protect patient information."
  },
  {
    id: 5,
    title: "Scalable Growth & Continuous Optimization",
    description:
      "Our web design for healthcare evolves with your organization. Analytics-driven insights continuously enhance patient engagement, conversion, and performance."
  }
];
const riskData = [
  {
    icon: "🛡️",
    title: "Experience-Led Engagement ",
    desc:
      " Intuitive, patient-focused interfaces improve trust, reduce friction, and increase appointments across all digital touchpoints."
  },
  {
    icon: "📊",
    title: "Performance-Driven ROI",
    desc:
      "Analytics and conversion insights turn healthcare websites into growth engines, increasing enquiries, retention, and measurable returns."
  },
  {
    icon: "🔐",
    title: "Trust Through Digital Excellence",
    desc:
      "Professional healthcare website design ensures accessibility, compliance, and credibility, positioning providers as modern, reliable care leaders."
  },
  {
    icon: "⚙️",
    title: "Scalable Digital Transformation",
    desc:
      "Future-ready healthcare web design supports evolving services, growing patient demand, and continuous innovation without disruption."
  }
];
const steps = [
  {
    step: "01",
    title: "Discovery Analysis",
    desc: ["Understanding goals, users, regulations"],
    containerClass: "step_ask",
    connectorClass: "connector_ask"
  },
  {
    step: "02",
    title: "Strategic Planning",
    desc: ["Defining structure, compliance, workflows"],
    containerClass: "step_research",
    connectorClass: "connector_research"
  },
  {
    step: "03",
    title: "UX Architecture",
    desc: ["Designing intuitive patient journeys"],
    containerClass: "step_imagine",
    connectorClass: "connector_imagine"
  },
  {
    step: "04",
    title: "Visual Design",
    desc: ["Building trust-focused healthcare interfaces"],
    containerClass: "step_plan",
    connectorClass: "connector_plan"
  },
  {
    step: "05",
    title: "Secure Development ",
    desc: ["Implementing scalable, compliant systems"],
    containerClass: "step_create",
    connectorClass: "connector_create"
  },
  {
    step: "06",
    title: "Quality Assurance ",
    desc: ["Testing performance, security, usability"],
    containerClass: "step_test",
    connectorClass: "connector_test"
  },
  {
    step: "07",
    title: "Continuous Optimization",
    desc: ["Improving engagement through analytics"],
    containerClass: "step_improve"
    // last step intentionally has no connector
  }
];
const testimonials = [
  {
    id: 1,
    name: "Dr. James Whitmore",
    role: "General Physician",
    date: "May 2024",
    content:
      "Base2Brand delivered an exceptional healthcare website design that reflects patient trust and professionalism. Their expertise improved appointments and overall engagement significantly.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Hospital Operations Manager",
    date: "February 2025",
    content:
      "Our hospital needed a scalable, secure platform. Base2Brand’s healthcare web design improved speed, clarity, and workflows, enhancing patient and staff experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Dental Surgeon",
    date: "January 2024",
    content:
      "Base2Brand created a clean, patient-friendly healthcare website design. It improved online enquiries, credibility, and accessibility across all devices.",
    rating: 5
  },
  {
    id: 4,
    name: "Suresh Iyer",
    role: "Healthcare IT Administrator",
    date: "December 2025",
    content:
      "Security and compliance were critical. Base2Brand built a robust, scalable healthcare website design aligned with data protection standards.",
    rating: 4
  },
  {
    id: 5,
    name: "Dr. Ritu Malhotra",
    role: "Clinical Psychologist",
    date: "November 2023",
    content:
      "The calm, professional healthcare web design Base2Brand created improved engagement and reduced appointment drop-offs effectively.",
    rating: 5
  },
  {
    id: 6,
    name: "Daniel Thompson",
    role: "Diagnostic Center Director",
    date: "November 2023",
    content:
      "Our new healthcare website design modernized our digital presence, increased online bookings, and strengthened brand authority.",
    rating: 4
  }
];
const faqdata = [
  {
    id: 0,
    question: "What makes healthcare web design different from other industries?",
    answer:
      "Healthcare web design requires compliance, data security, accessibility, and patient-focused UX to build trust and meet regulatory requirements."
  },
  {
    id: 1,
    question: "Does Base2Brand specialize in web design for healthcare?",
    answer:
      "Yes, Base2Brand specializes in healthcare web design, creating secure, scalable, and patient-centric websites for clinics, hospitals, and care providers."
  },
  {
    id: 2,
    question: "How does healthcare web design improve patient engagement?",
    answer:
      "A well-designed healthcare website simplifies navigation, enables online bookings, and delivers clear information, encouraging confident patient interaction."
  },
  {
    id: 3,
    question: "Are healthcare websites mobile-friendly?",
    answer:
      "Absolutely. Base2Brand builds mobile-first healthcare websites for seamless performance across smartphones, tablets, and desktops."
  },
  {
    id: 4,
    question: "How does Base2Brand handle data security in healthcare websites?",
    answer:
      "We integrate secure architecture, encrypted forms, and compliance-ready frameworks to protect sensitive patient data in every healthcare website design."
  },
  {
    id: 5,
    question: "Can Base2Brand redesign an existing healthcare website?",
    answer:
      "Yes. We offer healthcare website redesign services to improve performance, usability, security, and SEO while maintaining continuity for existing patients."
  },
  {
    id: 6,
    question: "Will healthcare websites be optimized for search engines?",
    answer:
      "Yes. SEO is part of our healthcare web design process to improve visibility, local search rankings, and patient discovery."
  },
  {
    id: 7,
    question: "How long does a healthcare web design project take?",
    answer:
      "Most healthcare web design projects are completed within weeks, following structured planning, development, testing, and deployment."
  }
];

const page = () => {
  return (
    <div>
      <Header />
      <IndustriesBanner
        title={"Web Design for Healthcare Industry"}
        description={
          "Base2Brand offers professional healthcare web design, delivering secure, user-friendly websites that build patient trust, enhance engagement, and support compliance for clinics, hospitals, and care providers. Our healthcare website design solutions are tailored to meet the unique needs of the healthcare industry."
        }
      />
      <IndustriesMonthlyGrowth
        title={"Digital Growth That Builds Patient Trust"}
        description_left={
          "With Base2Brand’s web design for healthcare, you can achieve measurable improvements in patient engagement, enquiries, and online bookings. Our strategic healthcare web design focuses on security, accessibility, and operational efficiency, providing real-time performance insights."
        }
        btnname={"Discover Our Solutions"}
        tagname={'Patient Enquiries'}
        YourProfit={"+32%"}
        growth={" +18%"}
        description_right={
          "A well-designed healthcare website design strengthens credibility, simplifies patient journeys, and ensures compliance. Base2Brand creates scalable, performance-driven digital platforms that help healthcare providers grow confidently."
        }
      />
      <IndustriesHowWork
        title={
          ' How <span class="gradient_text">  Healthcare Digital  </span> Growth Works with <span class="gradient_text"> Base2brand?</span>'
        }
        description={
          "Effective web design for healthcare must support patients, caregivers, and internal teams seamlessly. Base2Brand follows a proven, structured approach to healthcare web design, ensuring reliability, compliance, and measurable growth."
        }
        maindata={Howworkdata}
      />
      <IndustriesGlobal
        title={"Healthcare at Global Digital Scale"}
        description={
          "The global digital healthcare market is expanding rapidly as patients increasingly rely on online platforms for care access."
        }
        market_cap={"$10T+"}
        market_cap_des={
          "driven by digital transformation and patient-first technology."
        }
        base2brand_cap={"$95M+ "}
        base2brand_cap_des={
          " revenue enabled through secure, scalable, conversion-focused healthcare web design."
        }
      />
      <OurRiskManagement
        title={"Our Healthcare Web Design Value Approach"}
        description={
          "Strategic healthcare web design transforms how healthcare providers engage patients, streamline operations, and generate measurable returns. Every platform we build enhances outcomes, efficiency, and long-term digital ROI."
        }
        btnname={"Discover Our Solutions"}
        maindata={riskData}
      />
      <ProcessWorkingModel
        title={"Our Healthcare Web Design Process Model"}
        stepdata={steps}
      />
      <IndustriesTestimonialSection testimonials={testimonials} />
      <Faqs title={"Frequently Asked Questions"} faqdata={faqdata} />
      <FooterNew />
    </div>
  );
};

export default page;
