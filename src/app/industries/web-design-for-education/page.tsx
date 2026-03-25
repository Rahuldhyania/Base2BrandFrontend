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
    title: "Research-Led Education Strategy",
    description:
      "Our Web design Service for education begins with deep research into student behavior, academic workflows, content needs, and competitor benchmarks to align websites with real learner journeys."
  },
  {
    id: 2,
    title: "Learner-Focused & Accessible Design",
    description:
      "Through our Web design Service for education, we prioritize intuitive navigation, inclusivity, and engagement, making it easy for users to explore courses, access resources, and submit applications."
  },
  {
    id: 3,
    title: "Performance-Oriented Development",
    description:
      "Every Web design Service for education we deliver is optimized for speed, mobile responsiveness, and scalability, ensuring consistent performance even during peak enrollment periods."
  },
  {
    id: 4,
    title: "Compliance-Ready Digital Architecture",
    description:
      "Our Web design Service for education aligns with data protection standards, accessibility guidelines, and institutional policies to create secure and inclusive digital environments."
  },
  {
    id: 5,
    title: "Scalable Growth & Continuous Improvement",
    description:
      "A future-ready Web design Service for education adapts as institutions expand, using analytics-driven insights to continuously enhance engagement and enrollment outcomes."
  }
];
const riskData = [
  {
    icon: "🛡️",
    title: "Engagement-Centered Experiences",
    desc:
      "Student-friendly interfaces increase interaction, trust, and enrollment across all digital channels."
  },
  {
    icon: "📊",
    title: "Performance-Led Growth",
    desc:
      "Data and conversion insights turn education websites into powerful enrollment engines."
  },
  {
    icon: "🔐",
    title: "Credibility Through Digital Excellence",
    desc:
      "Professional design reinforces academic authority, accessibility, and institutional trust."
  },
  {
    icon: "⚙️",
    title: "Future-Ready Foundations",
    desc:
      "Scalable platforms support evolving programs, growing student demand, and emerging learning technologies without disruption."
  }
];
const steps = [
  {
    step: "01",
    title: "Research",
    desc: [
      "Understanding institutional goals, student needs, faculty requirements, and education standards"
    ],
    containerClass: "step_ask",
    connectorClass: "connector_ask"
  },
  {
    step: "02",
    title: "Strategic Planning",
    desc: [
      "Defining site structure, academic workflows, accessibility guidelines, and compliance requirements"
    ],
    containerClass: "step_research",
    connectorClass: "connector_research"
  },
  {
    step: "03",
    title: "UX Architecture",
    desc: [
      "Designing intuitive journeys for students, parents, teachers, and administrators"
    ],
    containerClass: "step_imagine",
    connectorClass: "connector_imagine"
  },
  {
    step: "04",
    title: "Visual Design",
    desc: [
      "Creating engaging, credible, and learner-friendly education interfaces"
    ],
    containerClass: "step_plan",
    connectorClass: "connector_plan"
  },
  {
    step: "05",
    title: "Secure Development ",
    desc: [
      "Building secure, flexible platforms that support learning management systems and future growth"
    ],
    containerClass: "step_create",
    connectorClass: "connector_create"
  },
  {
    step: "06",
    title: "Quality Assurance ",
    desc: [
      "Testing performance, accessibility, usability, and cross-device compatibility"
    ],
    containerClass: "step_test",
    connectorClass: "connector_test"
  },
  {
    step: "07",
    title: "Continuous Optimization",
    desc: [
      "Enhancing engagement, enrolments, and user experience through data-driven insights"
    ],
    containerClass: "step_improve"
    // last step intentionally has no connector
  }
];
const testimonials = [
  {
    id: 1,
    name: "Anurag Mehta",
    role: "School Principal",
    date: "August 2024",
    content:
      "Base2Brand delivered an outstanding web design Service for education, improving our student enquiries and engagement. The platform feels modern, fast, and easy for students, parents, and faculty to navigate seamlessly.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Admissions Manager",
    date: "March 2025",
    content:
      "Our institution saw measurable growth after choosing Base2Brand’s web design Service for education. Admissions workflows became smoother, accessibility improved, and the website now reflects our academic credibility perfectly online.",
    rating: 5
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Academic Coordinator",
    date: "January 2023",
    content:
      "Base2Brand truly understands education platforms. Their web design Service for education helped us boost enrollments, simplify course discovery, and deliver a reliable digital experience across devices effortlessly.",
    rating: 5
  },
  {
    id: 4,
    name: "James Anderson",
    role: "University IT Administrator",
    date: "December 2025",
    content:
      "We partnered with Base2Brand for a web design Service for education and achieved excellent results. The site performance, structure, and user experience exceeded expectations, supporting international student engagement effectively.",
    rating: 4
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Student Success Manager",
    date: "November 2023",
    content:
      "Base2Brand’s web design Service for education transformed our online presence. The design is intuitive, scalable, and visually credible, helping our institution connect better with students globally.",
    rating: 5
  },
  {
    id: 6,
    name: "Daniel Roberts",
    role: "Director of Education Programs",
    date: "July 2024",
    content:
      "Choosing Base2Brand for web design Service for education was a smart decision. Their strategic approach improved enquiries, strengthened trust, and delivered a secure, high-performance education website.",
    rating: 4
  }
];

const faqdata = [
  {
    id: 0,
    question: "What does a web design Service for education include?",
    answer:
      "A web design Service for education includes research, UX design, development, accessibility optimization, compliance alignment, performance testing, and continuous improvement tailored for academic institutions and learners."
  },
  {
    id: 1,
    question: "Which education institutions can use this service?",
    answer:
      "Our web design Service for education supports schools, colleges, universities, training institutes, and edtech platforms seeking scalable, secure, and student-focused digital solutions worldwide."
  },
  {
    id: 2,
    question: "How does web design improve student enrollment?",
    answer:
      "A strategic web design Service for education enhances usability, builds trust, simplifies admissions, and improves visibility, leading to higher student enquiries and enrollment conversions."
  },
  {
    id: 3,
    question: "Is the education website mobile-friendly?",
    answer:
      "Yes, every web design Service for education we deliver is fully responsive, ensuring smooth access across smartphones, tablets, and desktops for all users."
  },
  {
    id: 4,
    question: "Does the service support accessibility standards?",
    answer:
      "Our web design Service for education follows accessibility best practices, ensuring inclusive experiences for diverse learners, including those using assistive technologies."
  },
  {
    id: 5,
    question: "Can the website scale as the institution grows?",
    answer:
      "Absolutely. Our web design Service for education is built on scalable architecture, supporting new programs, increased traffic, and advanced learning technologies seamlessly."
  },
  {
    id: 6,
    question: "How long does an education website project take?",
    answer:
      "Timelines vary, but most web design Service for education projects are completed within defined milestones, balancing speed, quality, and institutional requirements effectively."
  },
  {
    id: 7,
    question: "Why choose Base2Brand for education web design?",
    answer:
      "Base2Brand combines strategy, performance, and compliance in every web design Service for education, delivering measurable growth, strong credibility, and long-term digital success."
  }
];


const page = () => {
  return (
    <div>
      <Header />
      <IndustriesBanner
        title={"Web Design Service for Education"}
        description={
          "Base2Brand provides a specialized web design Service for education institutions seeking to build modern, engaging, and secure digital platforms. Our solutions are crafted to support schools, colleges, universities, and edtech providers."
        }
      />
      <IndustriesMonthlyGrowth
        title={"Digital Growth That Enhances Learning Experiences"}
        description_left={
          "With Base2Brand’s web design Service for education, institutions achieve measurable growth in student engagement, admission enquiries, and online registrations. Our design approach focuses on usability, accessibility, and performance, ensuring smooth experiences for students, parents, and educators while delivering actionable digital insights."
        }
        btnname={"Discover Our Solutions"}
        tagname={"Student Enquiries:"}
        YourProfit={"+35%"}
        growth={"Enrollment Conversions: +20%"}
        description_right={
          "A professionally executed web design Service for education improves trust, simplifies access to academic information, and supports long-term digital learning goals. Base2Brand builds scalable platforms that help education providers grow confidently in competitive markets."
        }
      />
      <IndustriesHowWork
        title={
          ' How <span class="gradient_text">Education Digital </span> Growth Works with <span class="gradient_text"> Base2brand?</span>'
        }
        description={
          "An effective Web design Service for education must seamlessly support learners, faculty members, and administrators. Base2Brand follows a structured, results-driven methodology to deliver clarity, compliance, and sustainable digital growth."
        }
        maindata={Howworkdata}
      />
      <IndustriesGlobal
        title={"Education at a Global Digital Scale"}
        description={
          "The education sector continues to adopt digital platforms as students increasingly rely on online systems for learning, admissions, and academic support."
        }
        market_cap={"$8T+"}
        market_cap_des={
          "driven by online learning platforms, virtual classrooms, and education technology innovation."
        }
        base2brand_cap={"$64.7M+"}
        base2brand_cap_des={
          "in institutional growth enabled through scalable, high-performance education web solutions."
        }
      />
      <OurRiskManagement
        title={"Our Education Web Design Value Approach"}
        description={
          "A strategic Web design Service for education transforms how institutions attract students, deliver academic content, and achieve measurable results. Each platform we build focuses on outcomes, efficiency, and long-term digital value."
        }
        btnname={"Discover Our Solutions"}
        maindata={riskData}
      />
      <ProcessWorkingModel
        title={"Our Education Web Design Process Model"}
        stepdata={steps}
      />
      <IndustriesTestimonialSection testimonials={testimonials} />
      <Faqs title={"Frequently Asked Questions"} faqdata={faqdata} />
      <FooterNew />
    </div>
  );
};

export default page;
