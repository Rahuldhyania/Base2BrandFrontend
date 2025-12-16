"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../hire-shopify-developer-in-australia/Hireaustralia.css";
import "../top-digital-marketing-agency-la/Hire.css";
import "../hire-shopify-developer-dallas/Hiredubai.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";

import Hirefaq from "../top-digital-marketing-agency-la/Hirefaq";
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

interface PageProps {
  features?: ServiceFeature[];
  heroImage?: string;
  stats?: {
    projects: string;
    rating: string;
    support: string;
  };
}

// --- Services Section Data ---
const defaultFeatures: ServiceFeature[] = [
  {
    title: "Keyword Research and Strategy",
    description:
      "As the best SEO agency in Dubai, we craft targeted keyword strategies that align with your business goals and drive high-quality organic traffic.",
    icon: "🔑"
  },
  {
    title: "On-Page SEO Optimization",
    description:
      "We ensure all on-page elements like meta tags, headers, and content are optimized for search engines, reinforcing our reputation as the best SEO agency in Dubai.",
    icon: "📄"
  },
  {
    title: "Technical SEO",
    description:
      "From site speed to mobile responsiveness, our experts fix technical issues to improve rankings, showcasing the expertise of the best SEO agency in Dubai.",
    icon: "⚙️"
  },
  {
    title: "Link Building Services",
    description:
      "We build high-authority backlinks through ethical strategies, improving domain credibility and traffic—just one more reason we’re considered the best SEO agency in Dubai.",
    icon: "🔗"
  },
  {
    title: "Local SEO",
    description:
      "Get found by nearby customers with localized SEO tactics that optimize your Google Business Profile and increase visibility within your city or service area.",
    icon: "📍"
  },
  {
    title: "SEO Content Creation",
    description:
      "Our team produces compelling, keyword-rich content that ranks and converts. We combine creativity with SEO science to support long-term digital growth for your brand.",
    icon: "✍️"
  }
];


// --- Why Choose Us ---
const whychoose = [
  {
    icon: "🇦🇪",
    title: "Local Dubai Market Expertise",
    description:
      "We understand the Dubai business landscape, cultural nuances, and regional search behavior giving your website the local edge it needs to stand out."
  },
  {
    icon: "🏆",
    title: "Proven SEO Success",
    description:
      "With over 150+ successful campaigns, the best SEO agency in Dubai delivers measurable results, higher rankings, and satisfied clients across multiple industries."
  },
  {
    icon: "⚡",
    title: "Fast Results & ROI",
    description:
      "Our agile SEO strategies ensure you see visible improvements quickly, without compromising long-term growth and quality."
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    description:
      "We follow best-in-class security protocols and strictly adhere to UAE digital and privacy regulations, keeping your business protected at every stage."
  }
];

// --- Reviews ---
const reviewdata = [
  {
    id: 1,
    comment:
      "The results were beyond my expectations. The Best SEO Agency in Dubai helped my website rank on page one within three months. Exceptional team and strategic insights!",
    person_name: "Fatima Al Zahra",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 2,
    comment:
      "I’ve worked with multiple SEO firms, but none matched the transparency and dedication of the Best SEO Agency in Dubai. Highly recommended for real, lasting results.",
    person_name: "Omar Siddiqui",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 3,
    comment:
      "They understood my brand’s voice and audience perfectly. The Best SEO Agency in Dubai gave my e-commerce business the visibility it desperately needed. Traffic has doubled!",
    person_name: "Layla Khan",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 4,
    comment:
      "Professional, fast, and result-oriented. The Best SEO Agency in Dubai took care of every detail and helped us grow our leads by over 60% in 4 months.",
    person_name: "Ahmed Mansoor",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 5,
    comment:
      "The Best SEO Agency in Dubai completely transformed our online reach. Their on-page and technical SEO skills are world-class. We saw massive ranking improvements very quickly.",
    person_name: "Mariam Sheikh",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  },
  {
    id: 6,
    comment:
      "From day one, their process was well-structured and strategic. The Best SEO Agency in Dubai helped us dominate Google for our niche. Worth every penny!",
    person_name: "Yasir Qureshi",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/upwork_mu8qe5.svg"
  }
];


// --- FAQs ---
const faqData = [
  {
    question: "What makes you the Best SEO Agency in Dubai?",
    answer:
      "We deliver proven, data-driven SEO strategies, transparent reporting, and consistent results, making us the top choice in Dubai."
  },
  {
    question: "How long until I see SEO results?",
    answer:
      "Most clients see measurable improvements within 3 to 6 months with continuous SEO efforts."
  },
  {
    question: "Do you offer local SEO services in Dubai?",
    answer:
      "Yes, we specialize in optimizing your online presence for Dubai-based audiences and local searches."
  },
  {
    question: "Can you improve my existing SEO strategy?",
    answer:
      "Absolutely! We audit, refine, and enhance your SEO plan for better ROI and rankings."
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "While no one can guarantee #1, our strategies significantly improve your chances of ranking on the first page."
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve e-commerce, healthcare, real estate, technology, and more—adapting strategies for every niche."
  }
];

const defaultStats = {
  projects: "200+",
  rating: "4.9★",
  support: "24/7"
};

export default function Page({
  features = defaultFeatures,
  heroImage = "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/pexels-photo-3184465.jpg",
  stats = defaultStats
}: PageProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Header />
      <HeroSection
        title="Best SEO Agency in <span class='text_hire_green'> Dubai </span> That Delivers Real Results, Not Just Promises"
        description="Our Dubai-based SEO agency helps businesses grow online visibility, increase traffic, and generate leads through data-driven, proven SEO strategies."
        heroImage={heroImage}
        stats={stats}
      />
      <ServicesSection
        features={features}
        curent_pagename="Top SEO Services Offered by the Best SEO Agency in Dubai"
      />
      <WhyChooseSection items={whychoose} />
      <Hirestep
        title={`Click, Match, Boost Your Rankings
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
