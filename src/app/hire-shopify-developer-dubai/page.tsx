import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "../hire-shopify-developer-in-usa/Hire.css";
import "../hire-shopify-developer-dallas/Hiredubai.css";
import Hiredubaibanner from "../hire-shopify-developer-dallas/Hiredubaibanner";
import Whyb2b from "../hire-shopify-developer-dallas/Whyb2b";
import Hiretabsection from "../hire-shopify-developer-dallas/Hiretabsection";
import Hireprocess from "../hire-shopify-developer-dallas/Hireprocess";
import Hiredubaireview from "../hire-shopify-developer-dallas/Hiredubaireview";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import PageHead from "../../../component/PageHead";
const reviewdata = [
  {
    id: 1,
    comment:
      "Partnering with the best Shopify developers in Dubai transformed our online store. From performance tweaks to checkout enhancements, their team delivered beyond expectations. Sales have noticeably improved since the revamp.",
    person_name: "Ayesha K",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  },
  {
    id: 2,
    comment:
      "We had tried multiple freelancers before, but none matched the professionalism of the best Shopify developers in Dubai. They understood our niche, fixed our mobile issues, and got us ranking on Google.",
    person_name: "Omar S",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  },
  {
    id: 3,
    comment:
      "As a growing fashion brand, we needed custom features that Shopify didn’t offer out of the box. The best Shopify developers in Dubai built tailored solutions that made us stand out.",
    person_name: "Fatima R",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  },
  {
    id: 4,
    comment:
      "Working with the best Shopify developers in Dubai was the smartest business decision we made this year. Their clear communication, technical expertise, and SEO improvements made a massive difference.",
    person_name: "Mohammed Z",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  },
  {
    id: 5,
    comment:
      "Our store was slow, unoptimized, and barely converting. The best Shopify developers in Dubai restructured everything—now we load faster, look sharper, and sell more. Highly recommended!",
    person_name: "Leila M",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  },
  {
    id: 6,
    comment:
      "We needed a reliable team for our electronics Shopify store. Base2Brand’s Shopify developers in Dallas delivered above and beyond. From seamless integrations to user-friendly design, everything was handled professionally.",
    person_name: "Ryan Mitchell",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p_1.png"
  }
];
const faqData = [
  {
    question: "What makes you the best Shopify developers in Dubai?",
    answer: `We combine certified expertise, years of experience, and a proven track record of successful Shopify projects tailored for businesses in Dubai and beyond.`
  },
  {
    question: "Do the best Shopify developers in Dubai work with existing stores?",
    answer: `Yes! Whether it’s performance upgrades, redesigns, or adding new features, the best Shopify developers in Dubai specialize in improving existing stores.`
  },
  {
    question: "How long does it take the best Shopify developers in Dubai to build a store?",
    answer: `Depending on complexity, store builds can take 2–6 weeks. Our best Shopify developers in Dubai ensure timely delivery without compromising quality.`
  },
  {
    question: "Can the best Shopify developers in Dubai help with SEO and speed optimization?",
    answer: `Absolutely. From loading speed to on-page SEO, the best Shopify developers in Dubai optimize every element to boost rankings and performance.`
  },
  {
    question: "Do you offer post-launch support?",
    answer: `Yes, the best Shopify developers in Dubai provide ongoing maintenance, support, and improvements to ensure your store stays updated and competitive.`
  },
  {
    question: "Are consultations with the best Shopify developers in Dubai free?",
    answer: `Yes! We offer a free consultation call to discuss your goals and show how the best Shopify developers in Dubai can help you scale your store.`
  }
];
const hireprocessdata = [
  {
    process_title: "Schedule Your Free Strategy Session",
    process_description:
      "Start your eCommerce journey by booking a complimentary consultation with the best Shopify developers in Dubai. This no-pressure call is your first step toward understanding how we can bring your vision to life with expert planning and execution."
  },
  {
    process_title: "Custom Project Blueprint",
    process_description:
      "Our team of best Shopify developers in Dubai will dive deep into your goals—whether it's a new store setup, revamping your existing website, or solving technical challenges. We build a custom roadmap aligned with your business strategy, growth targets, and timeline."
  },
  {
    process_title: "Flawless Execution & On-Time Launch",
    process_description:
      "Once your plan is approved, the best Shopify developers in Dubai get to work. From UX/UI design to app integrations and performance enhancements, every task is handled with precision to ensure your store launches smoothly—on schedule and without compromise."
  },
  {
    process_title: "Clear Communication & Progress Reports",
    process_description:
      "Transparency is key. That’s why the best Shopify developers in Dubai keep you informed with regular updates and detailed reports. You’ll always know where your project stands, what’s been delivered, and what’s next on the agenda."
  }
];
const tabContent = [
  {
    title: "Slow-Loading Storefront",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "A sluggish Shopify store is a silent sales killer. When your pages load slowly, potential customers drop off fast.",
    sollution_content:
      "As the best Shopify developers in Dubai, we optimize every inch of your store—compressing images, refining code, and implementing CDN and caching strategies. The result? A blazing-fast store that keeps visitors engaged and ready to buy."
  },
  {
    title: "Poor Mobile Experience",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "Over 75% of online shopping happens on mobile. A poorly optimized mobile layout can cost you revenue.",
    sollution_content:
      "Our Dubai-based Shopify experts craft fully responsive themes designed to deliver seamless mobile shopping. From intuitive navigation to fast-loading product pages, we ensure your store impresses on every screen size."
  },
  {
    title: "Unoptimized Checkout Process",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "Abandoned carts are often caused by lengthy or confusing checkout steps.",
    sollution_content:
      "The best Shopify developers in Dubai know that conversion starts at checkout. We streamline your checkout with intuitive flows, one-page setups, and diverse payment options like Apple Pay, Shop Pay, and more—reducing friction and increasing sales."
  },
  {
    title: "Lack of SEO Visibility",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "If customers can’t find you on Google, you’re leaving money on the table.",
    sollution_content:
      "Our Shopify SEO specialists in Dubai optimize your entire store—from technical SEO and meta tags to structured data and page speed. As the best Shopify developers in Dubai, we ensure your products reach high-intent audiences who are ready to convert."
  },
  {
    title: "Design That Doesn’t Convert",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "A pretty design that doesn’t convert is just decoration.",
    sollution_content:
      "At Base2Brand, we pair UI/UX strategy with performance-driven design. As the best Shopify developers in Dubai, we focus every design element on guiding users toward a purchase—creating storefronts that are beautiful, intuitive, and built for growth."
  },
  {
    title: "Limited Custom Features",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_2.webp",
    challage_content:
      "Generic Shopify features can limit innovation and growth.",
    sollution_content:
      "Need subscription models, product configurators, or ERP integration? No problem. The best Shopify developers in Dubai build tailored apps and features that match your business model—enhancing your store’s functionality and scalability."
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/hire-shopify-developer-dubai";
  const wwwURL = "https://www.base2brand.com/hire-shopify-developer-dubai";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Hire Shopify Developers in Dubai | Shopify Development Dubai",
    description:
      "Hire top Shopify developers in Dubai from Base2Brand. Custom themes, app integrations, performance optimization, & expert support launch your store. Today consultation!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Hiredubaibanner
        bannerimage="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/monochrome-view-world-heritage-location-travel-destination_zoxmcg_1.webp"
        pagetitle={` Top  <br />
                Rated Shopify <br />
                Experts in <br />
                <span class="text_hire_green">Dubai</span>`}
        pagedescription="Looking to scale your eCommerce business? Our Dubai-based Shopify developers craft high-performing, visually engaging, and conversion-optimized online stores tailored to your goals."
      />
      <Whyb2b
        whytitle={`<span  class="text_hire_green"> 100+ </span> Bespoke Shopify Stores Delivered with <span  class="text_hire_primary">  98%  </span>Client Satisfaction Across the <span  class="text_hire_green"> UAE </span>`}
        whydescription1="At Base2Brand, we’re proud to be among the top-rated Shopify development companies in Dubai. Known for our ability to blend aesthetics with advanced functionality, we help businesses from ambitious startups to established retail brands build online stores that convert."
        whydescription2="As trusted Shopify developers in Dubai, our team is skilled in delivering custom eCommerce solutions that are fast, secure, mobile-friendly, and SEO-ready. From store setup and theme customization to third-party integrations and performance tuning, we ensure every store we create reflects your brand identity and drives measurable results."
      />
      <Hiretabsection
        tabtitle={`From Lag-Free Browsing to High-Converting Design — Trust the Best <span class="text_hire_primary"> Shopify Developers </span> in Dubai to Elevate Your Store`}
        tabcontent={tabContent}
      />
      <Hireprocess
        hireprocessdata={hireprocessdata}
        hireprocesstitle={`Launch and Grow Your Shopify Store with the <br/> Best Shopify Developers in <span class="text_hire_green">Dubai</span> </p>`}
      />
      <Hiredubaireview reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
