"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../hire-shopify-developer-in-australia/components/HeroSection";
import ServicesSection from "../hire-shopify-developer-in-australia/components/ServicesSection";
import WhyChooseSection from "../hire-shopify-developer-in-australia/components/WhyChooseSection";
import Hirestep from "../hire-shopify-developer-in-australia/components/Hirestep";
import Hireausreview from "../hire-shopify-developer-in-australia/components/Hireausreview";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import "../hire-shopify-developer-in-australia/Hireaustralia.css";
import "../hire-shopify-developer-in-usa/Hire.css";
import "../hire-shopify-developer-dallas/Hiredubai.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import PageHead from "../../../component/PageHead";
interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

interface Developer {
  name: string;
  experience: string;
  specialties: string[];
  image: string;
  rating: number;
}
interface PageProps {
  title?: string;
  description?: string;
  features?: ServiceFeature[];
  developers?: Developer[];
  heroImage?: string;
  stats?: {
    projects: string;
    rating: string;
    support: string;
  };
}

const defaultFeatures: ServiceFeature[] = [
  {
    title: "Store Setup & Custom Development",
    description:
      "Launch your online store with confidence. When you hire Shopify experts Brisbane, you get tailored Shopify development aligned with your business goals, industry standards, and customer needs.",
    icon: "🛒"
  },
  {
    title: "Theme Customization & UX/UI Design",
    description:
      "Deliver a stunning and seamless shopping experience. Our Shopify designers in Brisbane craft responsive, mobile-first themes that reflect your brand and keep customers engaged.",
    icon: "🎨"
  },
  {
    title: "App Integration & Custom Features",
    description:
      "From loyalty apps to ERP connections, we handle third-party integrations and build custom functionalities. Hire Shopify experts Brisbane to scale your store with precision and performance.",
    icon: "🔧"
  },
  {
    title: "SEO & Sales Conversion Strategies",
    description:
      "Boost traffic and conversions with Shopify-specific SEO strategies. Our Brisbane experts optimize product listings, meta tags, and site architecture for better rankings and higher sales.",
    icon: "📈"
  },
  {
    title: "Platform Migration to Shopify",
    description:
      "Move your store to Shopify effortlessly. Our team ensures a smooth transition with zero downtime or data loss. Hire Shopify experts Brisbane to manage the migration safely and efficiently.",
    icon: "🔄"
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Keep your store in peak condition. With proactive support, bug fixes, and performance tuning, our Brisbane team ensures your Shopify store stays optimized and competitive.",
    icon: "🛠️"
  }
];

const faqData = [
  {
    question: "Why should I hire Shopify experts Brisbane for my online store?",
    answer:
      "Hiring Shopify experts Brisbane ensures local support, tailored solutions, and faster turnaround for your eCommerce development needs."
  },
  {
    question: "How do I hire Shopify experts Brisbane for a redesign project?",
    answer:
      "You can hire Shopify experts Brisbane through our simple three-step process: Search, Interview, and Hire for customized redesign services."
  },
  {
    question: "Are there affordable options to hire Shopify experts Brisbane?",
    answer:
      "Yes, you can hire Shopify experts Brisbane at various budget levels based on your project requirements, scope, and business goals."
  },
  {
    question: "Can I hire Shopify experts Brisbane for ongoing maintenance?",
    answer:
      "Absolutely! Many businesses hire Shopify experts Brisbane for long-term maintenance and support to ensure smooth store operations and updates."
  },
  {
    question:
      "How experienced are the professionals when I hire Shopify experts Brisbane?",
    answer:
      "When you hire Shopify experts Brisbane, you get seasoned professionals with hands-on experience across different industries and complex Shopify customizations."
  },
  {
    question: "What is the response time if I hire Shopify experts Brisbane?",
    answer:
      "You can expect fast communication and 24/7 support when you hire Shopify experts Brisbane from our trusted and responsive team."
  }
];

const reviewdata = [
  {
    id: 1,
    comment:
      "I was looking to revamp my online clothing store and decided to hire Shopify experts Brisbane. The team was efficient, creative, and delivered everything on time. My sales have gone up significantly, and the store looks fantastic. I’d highly recommend them to anyone wanting to upgrade their Shopify store.",
    person_name: "Emily Thompson",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 2,
    comment:
      "I needed help with a custom feature for my eCommerce store and chose to hire Shopify experts Brisbane. Their expertise and communication were excellent throughout the project. They understood my vision clearly and turned it into a functional, high-performing site. I’m very satisfied with the final result.",
    person_name: "Jacob Harris",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 3,
    comment:
      "Choosing to hire Shopify experts Brisbane was the best decision for my skincare business. The team built a fast, responsive, and beautiful website. They even handled the third-party integrations flawlessly. Their support after launch was amazing too. I now have a site that truly reflects my brand.",
    person_name: "Olivia Martin",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 4,
    comment:
      "I was overwhelmed by the setup process until I decided to hire Shopify experts Brisbane. They made everything seamless—from theme customization to product setup. My website now runs smoothly and professionally. Their 24/7 support and prompt communication really made a difference in getting everything live quickly.",
    person_name: "Liam Anderson",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 5,
    comment:
      "I wanted a clean, modern online store with subscription features. I chose to hire Shopify experts Brisbane and they exceeded expectations. Their design and development skills are top-tier, and they knew exactly what would appeal to my target audience. The results have been outstanding for my sales and user experience.",
    person_name: "Charlotte Nguyen",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 6,
    comment:
      "After months of struggling with low conversions, I decided to hire Shopify experts Brisbane. They analyzed my store, fixed performance issues, and redesigned key elements. Within weeks, I saw a measurable improvement in engagement and revenue. Their strategic thinking and execution are worth every dollar.",
    person_name: "Noah Campbell",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  }
];

const defaultStats = {
  projects: "150+",
  rating: "4.9★",
  support: "24/7"
};
const whychoose = [
  {
    icon: "BR",
    title: "Local Brisbane Expertise",
    description:
      "When you hire Shopify experts Brisbane, you gain professionals who understand the local market, timezone needs, and business culture ensuring perfect alignment with your goals."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    description:
      "With over 150 successful Shopify projects, our Brisbane team delivers measurable outcomes and long-term client satisfaction every step of the way."
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Our agile process guarantees speed without compromising quality. Hire Shopify experts Brisbane to launch or scale your store quickly and effectively."
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    description:
      "We prioritize best security practices and full compliance with Australian data and privacy laws giving your store the safety and trust it needs to grow."
  }
];
export default function Page({
  features = defaultFeatures,
  heroImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  stats = defaultStats
}: PageProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  const baseURL = "https://base2brand.com/hire-shopify-experts-brisbane";
  const wwwURL = "https://www.base2brand.com/hire-shopify-experts-brisbane";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Hire Shopify Experts in Brisbane | Shopify Development in Brisbane ",
    description:
      "Looking to hire Shopify experts in Brisbane? Base2Brand specializes in custom Shopify store development, theme customization, & app integrations. Boost your online sales",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <HeroSection
        title="Hire Expert Shopify Developers <span class='text_hire_green'>  Brisbane  </span>"
        description="Bring your eCommerce vision to life with our top-rated Shopify experts in Brisbane. We specialize in building fully customized Shopify stores, seamless third-party integrations, and lightning-fast performance that boosts conversions and fuels long-term growth."
        heroImage={heroImage}
        stats={stats}
      />
      <ServicesSection
        features={features}
        curent_pagename=" Your eCommerce Success in Brisbane"
      />
      <WhyChooseSection items={whychoose} />
      <Hirestep
        title={`Click, Match, Hire Shopify Experts in Brisbane
          <p>
          <span class="text_hire_green">
              Simple 3-Step Process
            </span>
          </p>`}
      />
      <Hireausreview reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
