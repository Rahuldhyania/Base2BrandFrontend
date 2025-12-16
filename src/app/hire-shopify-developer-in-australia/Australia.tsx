"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import Hireausreview from "./components/Hireausreview";
import Hirestep from "./components/Hirestep";
import Hiretalkform from "./components/Hiretalkform";

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
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's visibility with our advanced SEO strategies, targeting high-intent keywords to drive consistent, organic traffic and long-term search engine ranking success.",
    icon: "🔍"
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Maximize ROI with precision-targeted PPC campaigns across Google and social platforms, managed by certified experts focused on conversions, not just clicks.",
    icon: "💰"
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your brand presence and engagement across Instagram, Facebook, LinkedIn, and more with custom content, community management, and data-driven social ad strategies.",
    icon: "📱"
  },
  {
    title: "Content Marketing",
    description:
      "Engage and convert your audience through impactful blogs, landing pages, and visuals crafted to educate, inspire, and boost SEO performance.",
    icon: "✍️"
  },
  {
    title: "Email Marketing",
    description:
      "Automate lead nurturing and drive customer retention through beautifully designed, segmented email campaigns that deliver real results with measurable engagement and ROI.",
    icon: "📧"
  },
  {
    title: "Branding and Creative Design",
    description:
      "From logos to ad creatives, we design bold, brand-aligned visuals and messaging that resonate across channels and enhance your brand’s identity and recall.",
    icon: "🎨"
  }
];

const faqData = [
  {
    question: "What makes you the Best Advertising Agency in Dubai?",
    answer: `We deliver measurable results, creative campaigns, and tailored strategies that help brands thrive in Dubai’s competitive and evolving digital landscape.`
  },
  {
    question: "Do you offer social media marketing services?",
    answer: `Yes, as the Best Advertising Agency in Dubai, we create impactful social media strategies that boost brand visibility, engagement, and conversions across all platforms.`
  },
  {
    question: "How quickly can I see campaign results?",
    answer: `The Best Advertising Agency in Dubai focuses on fast, data-driven performance, and most clients start seeing measurable results within the first 4–6 weeks.`
  },
  {
    question: "What industries do you serve?",
    answer: `As the Best Advertising Agency in Dubai, we serve various industries including fashion, real estate, food, fitness, and more with tailored advertising solutions.`
  },
  {
    question: "Do you provide performance tracking?",
    answer: `Absolutely. The Best Advertising Agency in Dubai offers detailed campaign analytics and performance reports to ensure transparency and continuous improvement of results.`
  },
  {
    question: "Can startups work with the Best Advertising Agency in Dubai?",
    answer: `Yes, we support startups with budget-friendly, growth-focused strategies, making us the Best Advertising Agency in Dubai for businesses at every stage.`
  }
];
const reviewdata = [
  {
    id: 1,
    comment:
      "Partnering with the Best Advertising Agency Dubai was a game-changer. Their strategic planning, creative execution, and timely communication helped us increase online sales by 45%. Their understanding of the local market is unmatched. Highly recommend them to any brand looking to grow fast in the UAE. ",
    person_name: "Sarah Thompson",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 2,
    comment:
      "We’ve worked with many marketing firms, but none matched the quality of service we received from the Best Advertising Agency Dubai. Their team delivered a lead-gen campaign that exceeded our expectations. Our cost per lead dropped by 38% within the first month. A true marketing powerhouse.",
    person_name: "Ahmed Raza",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 3,
    comment:
      "From influencer campaigns to Google ads, this team does it all — and exceptionally well. The Best Advertising Agency Dubai helped us grow our following and achieve consistent engagement. Our ROI doubled in just 3 months. Their dedication and creativity are second to none.",
    person_name: "Priya Mehta",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 4,
    comment:
      "The Best Advertising Agency Dubai helped us scale our online store with targeted campaigns and audience segmentation. Their transparent reporting and data-driven strategies made a huge difference. We saw a 60% boost in sales and impressive brand awareness across the UAE market.",
    person_name: "James O’Connor",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 5,
    comment:
      "After switching to the Best Advertising Agency Dubai, our restaurant’s digital presence transformed completely. Online reservations, engagement, and Google reviews skyrocketed. They truly understand how to connect with a local audience while keeping branding consistent. A smart choice for any business in Dubai.",
    person_name: "Fatima Al-Mansoori",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 6,
    comment:
      "Working with the Best Advertising Agency Dubai brought clarity and creativity to our campaigns. From social media to email marketing, they handled everything with excellence. Our class bookings grew by over 70% in two months. If you're looking for results, this is the team to trust.",
    person_name: "Mark Davidson",
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
    title: "Local UAE Expertise",
    description:
      "Deep understanding of the Dubai market, cultural trends, and business environment sets us apart as the Best Advertising Agency Dubai businesses trust."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    description:
      "We’ve delivered 150+ high-impact advertising campaigns with real results — proof of why we’re the Best Advertising Agency Dubai companies rely on."
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Our agile team ensures campaigns go live quickly without compromising quality, creativity, or strategy."
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    description:
      "We follow strict compliance with UAE advertising laws and ensure data privacy and brand safety at every step."
  }
];
export default function Australia({
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
        title="Hire the Best Advertising Agency in<span class='text_hire_green'>  Dubai  </span>"
        description="Transform your brand's digital presence with Dubai's leading advertising experts. At Base2Brand, we offer innovative strategies, captivating campaigns, and measurable results designed to take your business to the next level. "
        heroImage={heroImage}
        stats={stats}
      />
      <ServicesSection features={features} curent_pagename=" Business Growth" />
      <WhyChooseSection items={whychoose} />
      <Hirestep
        title={`Click, Match, Launch Your Campaign
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
