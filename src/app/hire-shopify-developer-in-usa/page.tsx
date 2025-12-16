import React from "react";
import "./Hire.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Hirebanner from "./Hirebanner";
import Benefit from "./Benefit";
import Howbuild from "./Howbuild";
import Hiredeveloper from "./Hiredeveloper";
import Endtoend from "./Endtoend";
import Reviewhiredev from "./Reviewhiredev";
import Hirefaq from "./Hirefaq";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
const reviewdata = [
  {
    id: 1,
    review:
      "“Base2Brand is hands down the top digital marketing agency LA businesses need. They understood our goals and delivered incredible ROI. We’ve worked with others, but no one comes close to this top digital marketing agency LA. Their strategic mindset and attention to detail helped us grow beyond expectations. Highly recommend to any serious brand!”",
    name: "Sarah Mitchell",
    company: "Los Angeles",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 2,
    review:
      "“We partnered with Base2Brand and saw immediate improvements. As the top digital marketing agency LA offers, their team is unmatched. Their insights, communication, and execution were flawless. It’s rare to find a top digital marketing agency LA that delivers on every promise. If you want real results, this is the team to trust.”",
    name: "Jason Reed",
    company: "Santa Monica",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 3,
    review:
      "“I was skeptical at first, but Base2Brand proved they’re the top digital marketing agency LA businesses rely on. They built a solid strategy and executed it with precision. You don’t find a top digital marketing agency LA with such dedication and expertise every day. Truly a game-changer for our growth journey.”",
    name: "Amanda Collins",
    company: "Pasadena",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 4,
    review:
      "“Working with Base2Brand has been a pleasure. They are the top digital marketing agency LA entrepreneurs talk about for good reason. Results were consistent and communication was smooth. If you're looking for the top digital marketing agency LA to scale your brand with integrity and impact, look no further — they deliver.”",
    name: "David Brooks",
    company: "Burbank",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 5,
    review:
      "“Base2Brand delivered exceptional results within months. This top digital marketing agency LA understood our niche, tailored our campaigns, and drove real traffic and conversions. We've worked with others, but this top digital marketing agency LA is in a league of its own. Reliable, innovative, and ROI-focused — exactly what we needed.”",
    name: "Melissa Torres",
    company: "Glendale",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 6,
    review:
      "“The Base2Brand team went above and beyond. They’re not just another agency — they’re the top digital marketing agency LA has for growth-focused brands. We’ve seen better leads, lower costs, and stronger visibility. When you need a top digital marketing agency LA that actually performs, this team should be your first call.”",
    name: "Brian Carter",
    company: "Long Beach",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  }
];

const faqData = [
  {
    question: "What makes Base2Brand the top digital marketing agency LA offers?",
    answer: "Our tailored strategies, expert team, and consistent ROI make us the top digital marketing agency LA businesses trust for real growth."
  },
  {
    question: "Do you serve businesses outside Los Angeles?",
    answer: "Yes, although we’re the top digital marketing agency LA brands rely on, we successfully serve clients nationwide across various industries and niches."
  },
  {
    question: "How quickly can I see results with your services?",
    answer: "As the top digital marketing agency LA companies choose, we typically deliver visible improvements in traffic, engagement, and leads within the first 30 days."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We’re the top digital marketing agency LA-wide because we serve all industries—eCommerce, tech, real estate, healthcare, and more—with proven, data-driven strategies."
  },
  {
    question: "Is there a minimum contract period with your services?",
    answer: "No long-term lock-ins. As the top digital marketing agency LA trusts, we focus on performance—clients stay because of results, not contracts."
  },
  {
    question: "What digital marketing services do you offer?",
    answer: "The top digital marketing agency LA offers SEO, PPC, content, email, and more—fully customized to drive results for your unique business goals."
  }
];
const benefitdata = [
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2835578_xkglqj.png",
    benefitcard_title: "SEO Optimization",
    benefit_desc:
      "Our team ensures your website ranks on top. As the top digital marketing agency LA businesses trust, we deliver proven SEO strategies tailored to your niche."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/6601840_pzfwsb.png",
    benefitcard_title: "Social Media Marketing",
    benefit_desc:
      "We create compelling campaigns that drive engagement and conversions. Count on the top digital marketing agency LA entrepreneurs prefer for strategic brand visibility."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3045679_laosgn.png",
    benefitcard_title: "Content Marketing",
    benefit_desc:
      "From blogs to sales pages, we craft high-performing content. Base2Brand, the top digital marketing agency LA brands rely on, turns words into growth."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/824088-200_gr4wuc.png",
    benefitcard_title: "PPC Advertising",
    benefit_desc:
      "Maximize ROI with precision-targeted Google & Meta ads. As a top digital marketing agency LA companies choose, we deliver high-impact ad performance."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2344541_enmkqx.png",
    benefitcard_title: "E-commerce Marketing",
    benefit_desc:
      "Grow your online store with our proven digital strategies. LA’s top digital marketing agency ensures traffic, leads, and scalable sales for e-commerce brands."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/849945_c1ntzn.png",
    benefitcard_title: "Analytics & Reporting",
    benefit_desc:
      "We believe in full transparency and results you can track. That’s why Base2Brand is recognized as the top digital marketing agency LA clients recommend."
  }
];

export default function page() {
  return (
    <div>
      <Header />
      <Hirebanner
        bannertoptitle1="Custom Digital Marketing Solutions –"
        bannertoptitle2="With Award-Winning Marketing Experts"
        bannerHeading="Hire Top Digital Marketing Agency in <span class='text_hire_primary'> USA –</span>  <span class='text-black'> Base2Brand</span>"
        bannerSubHeading="Partner with Base2Brand and watch your business grow through data-driven marketing strategies. Since 2013, we’ve helped brands boost visibility, traffic, and revenue with our tailored digital marketing expertise."
        bannerImage="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/hero-img_ls4uqo.jpg"
        bannerList1="<strong>2K+</strong>  Successful Campaigns Executed Across Industries"
        bannerList2="<strong>$100 Million+</strong>  Revenue Boosted via Our Marketing Strategies (Yearly)"
        bannerList3="<strong>5 Million+</strong> Users Reached Through Our Performance Marketing Efforts"
        bannerList4="<strong>1M+</strong> Monthly Leads Generated for Our Clients"
        bannerList5="<strong>80%</strong> Avg. ROI Growth with Our SEO, PPC, Social, and Content Marketing"
      />
      <Benefit
        benefit_title={`Digital Marketing Services We Offer in
          <span class="text_hire_green"> LA</span>`}
        benefit_desc="Make the Smart Choice with Base2Brand"
        benefitdata={benefitdata}
      />
      <Howbuild title={` How We Market
            <span class="text_hire_green"> Shopify Stores</span> That
            Convert`}
        description=" At Base2Brand — the top digital marketing agency LA brands trust —
            we design Shopify stores that look great and drive sales."
      />
      <Hiredeveloper />
      <Endtoend title={`  Providing end-to-end
            <span class="text_hire_primary">
              Digital Marketing<br /> Services Across All Industries
            </span>`}
        description1={` Base2Brand provides complete digital marketing services across
                all industries, helping brands increase visibility, generate
                leads, and drive conversions. From eCommerce and education to
                healthcare, real estate, and finance, our team crafts
                platform-specific strategies that speak directly to your
                audience.`}
        description2={`We manage and scale campaigns on Google, Meta, LinkedIn, and
                more, delivering data-backed results that matter. Our clients
                typically see up to 3x more qualified traffic and 40% higher
                lead conversions within just 90 days. Whether you're a startup
                building your online presence or an established brand expanding
                into new markets, Base2Brand builds performance-driven
                strategies that evolve with your business.`}
      />
      <Reviewhiredev reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
