"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import HeroSection from "../hire-shopify-developer-in-australia/components/HeroSection";
import ServicesSection from "../hire-shopify-developer-in-australia/components/ServicesSection";
import WhyChooseSection from "../hire-shopify-developer-in-australia/components/WhyChooseSection";
import Hirestep from "../hire-shopify-developer-in-australia/components/Hirestep";
import Hireausreview from "../hire-shopify-developer-in-australia/components/Hireausreview";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";

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
    title: "Store Setup & Development",
    description:
      "Get your online store up and running with ease. Our Shopify experts in Chicago specialize in building high-performing Shopify websites tailored to your brand's needs, industry trends, and conversion goals.",
    icon: "🔍"
  },
  {
    title: "Theme Customization & UX Design",
    description:
      "Create a seamless shopping experience with engaging, mobile-responsive designs. The Shopify experts in Chicago ensure every visual element enhances usability and supports your brand identity.",
    icon: "💰"
  },
  {
    title: "Shopify App Integration",
    description:
      "Whether it’s loyalty programs, advanced search, or ERP sync, our Shopify experts in Chicago handle third-party app integrations and develop custom features to boost your store's performance and scalability.",
    icon: "📱"
  },
  {
    title: "SEO & Conversion Optimization",
    description:
      "Drive more traffic and sales with our Shopify-specific SEO tactics. Our Shopify experts in Chicago optimize everything from product pages to meta tags, ensuring your store ranks and converts.",
    icon: "✍️"
  },
  {
    title: "Migration to Shopify",
    description:
      "Switch platforms smoothly with zero data loss or downtime. Our Shopify experts in Chicago make the entire migration process secure, efficient, and tailored to your store’s structure.",
    icon: "📧"
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "Stay ahead with regular updates, bug fixes, and performance tuning. With Shopify experts in Chicago by your side, your store remains reliable and growth-ready 24/7.",
    icon: "🎨"
  }
];
const faqData = [
  {
    question: "How do I find reliable Shopify experts in Chicago?",
    answer: `Use our 3-step process to connect with verified Shopify experts in Chicago quickly.`
  },
  {
    question:
      "Are your Shopify experts in Chicago available for custom builds?",
    answer: `Yes, they offer theme development, app setup, and full custom solutions.`
  },
  {
    question: "What industries do your Shopify experts in Chicago serve?",
    answer: `They serve fashion, electronics, health, beauty, and more.`
  },
  {
    question: "Can I interview the Shopify experts in Chicago before hiring?",
    answer: `Yes, you can interview and test each expert to ensure a fit.`
  },
  {
    question:
      "Do Shopify experts in Chicago offer support after project completion?",
    answer: `Absolutely, post-launch support and maintenance are available.`
  },
  {
    question: "How long does it take to match with Shopify experts in Chicago?",
    answer: `You can connect with the right expert in under 24 hours.`
  }
];
const reviewdata = [
  {
    id: 1,
    comment:
      "I was amazed by the professionalism of the Shopify experts in Chicago. They redesigned my store in record time and boosted my sales significantly. Highly recommended!",
    person_name: "Sarah M., Chicago",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 2,
    comment:
      "Hiring Shopify experts in Chicago was the best decision I made. Their understanding of Shopify's backend and design tools is truly unmatched. I’m beyond satisfied!",
    person_name: "James R., Naperville",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 3,
    comment:
      "From theme customization to app integration, these Shopify experts in Chicago handled everything smoothly. Their communication was clear and turnaround time was impressive. Great service!",
    person_name: "Emily T., Evanston",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 4,
    comment:
      "As a new business owner, I needed guidance. The Shopify experts in Chicago not only built my store but also advised me on best practices. Fantastic!",
    person_name: "Michael D., Schaumburg",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 5,
    comment:
      "I had tried freelancers before, but the Shopify experts in Chicago gave me real peace of mind. Reliable, professional, and fast—they're my go-to team now!",
    person_name: "Olivia B., Oak Park",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 6,
    comment:
      "Our conversion rate jumped after working with Shopify experts in Chicago. Their attention to detail, design aesthetics, and technical skills truly stand out. 100% satisfied!",
    person_name: "Ethan W., Aurora",
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
    icon: "🇦🇺",
    title: "Local Chicago Expertise",
    description:
      "As trusted Shopify experts in Chicago, we understand the regional market, timezone dynamics, and the business culture unique to the Windy City giving your store a home-field advantage."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    description:
      "With 150+ successful Shopify projects under our belt, our Shopify experts in Chicago consistently deliver measurable outcomes and long-term client success stories."
  },
  {
    icon: "⚡",
    title: "Fast & Agile Delivery",
    description:
      "We follow an agile development model that ensures fast turnarounds without sacrificing quality. Our Shopify experts in Chicago prioritize speed, functionality, and smooth rollouts."
  },
  {
    icon: "🔒",
    title: "Security-First Approach",
    description:
      "Our Shopify experts in Chicago follow industry-leading security standards and comply with U.S. data privacy regulations to keep your business and customer data safe and secure."
  }
];
export default function Chicago({
  features = defaultFeatures,
  heroImage = "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/pexels-photo-3183150.jpg",
  stats = defaultStats
}: PageProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <HeroSection
        title="Hire Expert Shopify Developers in<span class='text_hire_green'>  Chicago  </span>"
        description="Transform your eCommerce vision into reality with top-tier Shopify experts in Chicago. Our team delivers fully customized online stores, seamless integrations, and speed-optimized solutions that drive conversions and long-term business growth.Request a Quote"
        heroImage={heroImage}
        stats={stats}
      />
      <ServicesSection
        features={features}
        curent_pagename="Your eCommerce Success"
      />
      <WhyChooseSection items={whychoose} />
      <Hirestep
        title={`Click, Match, Hire Shopify Experts in Chicago
          <p>
            <span className="text_hire_green">
              Simple 3-Step Process
            </span>
          </p>`}
      />
      <Hireausreview reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
    </div>
  );
}
