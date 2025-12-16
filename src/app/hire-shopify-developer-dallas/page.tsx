import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Hiredubaibanner from "./Hiredubaibanner";
import "../hire-shopify-developer-in-usa/Hire.css";
import "./Hiredubai.css";
import Hiretabsection from "./Hiretabsection";
import Whyb2b from "./Whyb2b";
import Hireprocess from "./Hireprocess";
import Hiredubireview from "./Hiredubaireview";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
import PageHead from "../../../component/PageHead";
const reviewdata = [
  {
    id: 1,
    comment:
      "Base2Brand gave my fashion boutique the online presence it needed. Their Shopify developers in Dallas are talented, fast, and genuinely understand eCommerce. They created a custom design that reflects my brand perfectly. The site loads quickly, looks fantastic on mobile, and helped increase my sales within a month. I highly recommend their team!",
    person_name: "Emily Carter, Boutique Owner",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  },
  {
    id: 2,
    comment:
      "We needed a reliable team for our electronics Shopify store. Base2Brand’s Shopify developers in Dallas delivered above and beyond. From seamless integrations to user-friendly design, everything was handled professionally. The project was completed on time and the results were amazing. They're now our go-to developers for all future Shopify needs.",
    person_name: "Ryan Mitchell, Tech Retailer",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  },
  {
    id: 3,
    comment:
      "Base2Brand built our dream Shopify store from scratch. Their team in Dallas is incredibly responsive, creative, and tech-savvy. Our traffic and conversions have improved significantly. If you’re searching for the best Shopify developers in Dallas, look no further. Their attention to detail and customer-first approach sets them apart.",
    person_name: "Olivia Hayes, Home Decor Seller",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  },
  {
    id: 4,
    comment:
      "I’m beyond impressed with Base2Brand. Their Shopify developers in Dallas helped launch my fitness brand online with a bold, responsive site that customers love. They handled everything from design to functionality, and even gave post-launch support. The team is reliable, creative, and truly understands what sells.",
    person_name: "Marcus James, Fitness Brand Founder",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  },
  {
    id: 5,
    comment:
      "Working with Base2Brand was the best decision for my skincare business. Their Shopify developers in Dallas created a beautiful, mobile-friendly store that speaks to my brand. They took the time to understand my goals and brought them to life flawlessly. I’ve already seen a huge improvement in customer engagement and sales.",
    person_name: "Sophia Nguyen, Skincare Entrepreneur",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  },
  {
    id: 6,
    comment:
      "Base2Brand’s best Shopify developers in Dallas made my coffee subscription business come alive. They built a subscription model that’s easy for customers and simple for us to manage. The store’s functionality is smooth, and the design is clean and engaging. It’s rare to find a team this professional and efficient.",
    person_name: "Daniel Rodriguez, Coffee Subscription Owner",
    reviewfrom:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-partner-white-MIN_g8gs5p.png"
  }
];
const faqData = [
  {
    question: "What services do your Shopify developers in Dallas offer?",
    answer: `Our best Shopify developers in Dallas provide custom theme design, app integration, performance optimization, store setup, and post-launch support for growing eCommerce brands.`
  },
  {
    question: "How experienced is your Shopify development team?",
    answer: `Base2Brand’s team includes expert Shopify developers in Dallas with over 5 years of experience building high-performing, conversion-focused online stores for various industries.`
  },
  {
    question: "Can you redesign an existing Shopify store?",
    answer: `Yes, our Shopify developers in Dallas can refresh your existing store’s design, improve speed, update features, and align it with your brand identity.`
  },
  {
    question: "Do you offer post-launch Shopify support?",
    answer: `Absolutely. Base2Brand provides ongoing Shopify support, updates, and maintenance to ensure your Dallas store stays optimized and running smoothly post-launch.`
  },
  {
    question: "How long does a Shopify project usually take?",
    answer: `Most Shopify development projects by our Dallas team are completed in 2–4 weeks, depending on features, design complexity, and your business needs.`
  },
  {
    question: "Can you help with Shopify app integrations?",
    answer: `Yes, our best Shopify developers in Dallas are skilled in integrating third-party apps for marketing, shipping, inventory, and customer engagement into your Shopify store.`
  }
];

const hireprocessdata = [
  {
    process_title: "Book a Free Consultation Call",
    process_description: "Kick off your project by booking a no-obligation consultation with the Best Shopify Developers in Dallas. This call allows us to understand your goals, assess your needs, and determine the right roadmap for success."
  },
  {
    process_title: "Detailed Project Planning",
    process_description: "In this step, our team dives deep into your Shopify project vision. Whether you’re launching a new store, upgrading features, or resolving performance issues, our Best Shopify Developers in Dallas tailor the strategy to meet your business objectives."
  },
  {
    process_title: "Execution & Timely Delivery ",
    process_description: "Once your plan is finalized, our certified developers begin building, customizing, or optimizing your store. From design to integrations, every phase is handled by the Best Shopify Developers in Dallas guaranteeing quality execution and on-time delivery."
  },
  {
    process_title: "Transparent Reporting",
    process_description: "Stay in the loop with consistent updates. We provide comprehensive reports on progress, performance, and timelines so you’re always informed. Trust the Best Shopify Developers in Dallas to deliver both results and transparency."
  },
]
const tabContent = [
  {
    title: "Slow-Loading Storefront",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "A laggy Shopify store can hurt your user experience and lead to high bounce rates and lost sales. Customers expect your pages to load fast—every second counts.",
    sollution_content:
      "We optimize your store’s code, images, and app usage to boost performance. Our developers implement advanced caching and CDN strategies, ensuring lightning-fast load times across all devices"
  },
  {
    title: "Poor Mobile Experience",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "With over 70% of eCommerce traffic coming from mobile devices, a clunky mobile interface can sink your sales.",
    sollution_content:
      "We design and develop responsive Shopify themes that look stunning and function perfectly on all screen sizes. Your mobile users will enjoy smooth navigation, easy checkout, and fast loading."
  },
  {
    title: "Unoptimized Checkout Process",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "Cart abandonment often spikes due to confusing or lengthy checkout experiences.",
    sollution_content:
      "We simplify your checkout process by customizing your theme, integrating Shopify’s one-page checkout, and adding payment flexibility like Shop Pay, PayPal, and Apple Pay to boost conversions."
  },
  {
    title: "Lack of SEO Visibility",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "Without solid SEO, your store won’t appear in front of the right audience—no matter how good your products are.",
    sollution_content:
      "Our Shopify SEO experts optimize everything from meta tags to site structure and schema. We help your store climb search rankings and attract qualified, high-intent traffic."
  },
  {
    title: "Design That Doesn’t Convert",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "A beautiful site that doesn’t drive sales is just a pretty picture. Design must be strategic.",
    sollution_content:
      "We blend UX/UI strategy with Shopify best practices to create storefronts that don’t just look good, they convert. Every element is focused on guiding users toward a sale."
  },
  {
    title: "Limited Custom Features",
    banner_image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group-1000004440_pyhfh0_1.webp",
    challage_content:
      "Out-of-the-box Shopify features might not fit your unique business needs or product types.",
    sollution_content:
      "We build custom Shopify apps, features, and API integrations to match your exact goals—whether it’s a product configurator, subscription service, or custom shipping logic."
  }
];
export default function page() {
  const baseURL = "https://base2brand.com/hire-shopify-developer-dallas";
  const wwwURL = "https://www.base2brand.com/hire-shopify-developer-dallas";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Hire Shopify Developers in Dallas | Base2Brand",
    description:
      "Looking to scale your eCommerce business? Hire certified Shopify developers in Dallas from Base2Brand. 100+ successful stores built. Free consultation available.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Hiredubaibanner
        bannerimage="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2110_cnw08w.jpg"
        pagetitle={` Hire  <br />
                The Best Shopify <br />
                Developers in <br />
                <span class="text_hire_green">Dallas</span> `}
        pagedescription=" Build your dream online store with expert Shopify developers in
                Dallas, custom solutions, seamless performance, and unmatched
                eCommerce success await."/>
      <Whyb2b
        whytitle={`Over <span class="text_hire_green"> 100+</span> Custom
                Shopify Stores Built and
                <span class="text_hire_green"> 98% </span>Client
                Satisfaction Across Texas`}
        whydescription1="We are proud to be recognized as the leading Shopify development company in Dallas. At Base2Brand, we blend cutting-edge design with seamless functionality to build online stores that don’t just look great, they perform. Whether you're a local boutique or an enterprise brand, we build Shopify websites that drive traffic, boost conversions, and fuel business growth."
        whydescription2="Our Dallas-based Shopify experts specialize in crafting custom eCommerce experiences that are responsive, user-friendly, and optimized for search engines. With every build, we ensure your online store runs smoothly across all devices, integrates easily with payment systems and apps, and meets your customers’ expectations.
        "
      />
      <Hiretabsection tabtitle={` From store speed to checkout glitches, Our certified <span class="text_hire_primary">Shopify experts </span> tackle it all`}
        tabcontent={tabContent} />
      <Hireprocess hireprocessdata={hireprocessdata} hireprocesstitle={`Get Your Shopify Store Built And Scaled <p> By <span class="text_hire_green"> Certified Experts</span> </p>`} />
      <Hiredubireview reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
