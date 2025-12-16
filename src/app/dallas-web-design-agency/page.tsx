import React from "react";
import "../hire-shopify-developer-in-usa/Hire.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
import Hirebanner from "../hire-shopify-developer-in-usa/Hirebanner";
import Benefit from "../hire-shopify-developer-in-usa/Benefit";
import Howbuild from "../hire-shopify-developer-in-usa/Howbuild";
import Endtoend from "../hire-shopify-developer-in-usa/Endtoend";
import Reviewhiredev from "../hire-shopify-developer-in-usa/Reviewhiredev";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
import Hiredeveloperdallas from "./Hiredeveloperdallas";
import PageHead from "../../../component/PageHead";
const reviewdata = [
  {
    id: 1,
    review:
      "“I was amazed at how efficiently this Dallas web design agency captured our brand’s identity. The website looks stunning, runs smoothly, and has improved our customer engagement. Their design and development process was organized, professional, and on time. I’d definitely recommend them to anyone looking to build a powerful online presence.”",
    name: "Emma Roberts",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 2,
    review:
      "“Our experience with this Dallas web design agency has been incredible. From the first consultation to final launch, their team delivered creativity, technical expertise, and clear communication. Our site now loads faster, looks modern, and helps us generate more leads. This agency truly cares about results and client satisfaction.”",
    name: "Jason Patel",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 3,
    review:
      "“As a small retail business, I needed a trusted Dallas web design agency to elevate our online store. They built a beautiful, user-friendly site that reflects our brand perfectly. Their support throughout was timely and helpful. Since launching, our online sales have improved and customer feedback has been overwhelmingly positive.”",
    name: "Michelle Gomez",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 4,
    review:
      "“This Dallas web design agency turned our clunky old website into a sleek, professional platform that’s easy to navigate. The attention to detail, mobile responsiveness, and SEO setup were spot on. We’ve already seen a major uptick in inquiries, and their post-launch support makes them a long-term partner for us.”",
    name: "David Chen",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 5,
    review:
      "“We approached this Dallas web design agency with specific needs for our educational website, and they delivered flawlessly. Their team took time to understand our goals and offered smart solutions. The final result is a modern, engaging site that’s easy for students and parents to use. We couldn’t be happier!”",
    name: "Priya Nair",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 6,
    review:
      "“This Dallas web design agency helped us rebrand and rebuild our real estate website from scratch. They were patient, creative, and technically brilliant. The site is now fully responsive, SEO-friendly, and easy to manage. Our leads have doubled, and clients love the new look. Truly a fantastic agency to work with!”",
    name: "Luke Thompson",
    company: "Dallas",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  }
];
const faqData = [
  {
    question: "What services does your Dallas web design agency offer?",
    answer:
      "Our Dallas web design agency offers web design, development, SEO optimization, branding, and ongoing website maintenance tailored to your business needs."
  },
  {
    question: "How long does a project take with your Dallas web design agency?",
    answer:
      "Timelines vary, but our Dallas web design agency typically completes standard websites within 3–6 weeks, depending on project complexity and requirements."
  },
  {
    question: "Can your Dallas web design agency redesign my existing website?",
    answer:
      "Absolutely! Our Dallas web design agency specializes in redesigning outdated websites to make them modern, responsive, and optimized for better performance."
  },
  {
    question: "Is SEO included in your Dallas web design agency packages?",
    answer:
      "Yes, our Dallas web design agency includes basic SEO setup with every project to help your website rank better on search engines from the start."
  },
  {
    question: "Do I need to be in Dallas to work with your web design agency?",
    answer:
      "No, our Dallas web design agency works with clients nationwide through virtual meetings, emails, and collaborative tools for seamless communication."
  },
  {
    question: "Does your Dallas web design agency build mobile-friendly websites?",
    answer:
      "Yes, every site our Dallas web design agency creates is fully responsive and optimized for performance across all devices, including smartphones and tablets."
  }
];

const benefitdata = [
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2835578_xkglqj.png",
    benefitcard_title: "Custom Website Design",
    benefit_desc:
      "We craft visually engaging, brand-focused websites tailored to your business goals, ensuring a seamless blend of creativity, functionality, and responsive performance across all devices."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/6601840_pzfwsb.png",
    benefitcard_title: "UX/UI Design",
    benefit_desc:
      "Dallas web design agency designs intuitive user experiences and clean interfaces that improve customer engagement, drive conversions, and reflect your brand identity across web and mobile platforms."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3045679_laosgn.png",
    benefitcard_title: "Responsive Web Design",
    benefit_desc:
      "Our designed websites automatically adapt to all screen sizes, providing optimal viewing on desktops, tablets, and smartphones, enhancing usability and retaining your audience anywhere."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/824088-200_gr4wuc.png",
    benefitcard_title: "Website Redesign",
    benefit_desc:
      "We modernize outdated websites with fresh visuals, better structure, and improved functionality to align with current trends and elevate user engagement and brand credibility."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2344541_enmkqx.png",
    benefitcard_title: "Landing Page Design",
    benefit_desc:
      "We create conversion-focused landing pages with compelling visuals and strategic call-to-actions that increase leads, product sales, and marketing campaign success rates."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/849945_c1ntzn.png",
    benefitcard_title: "Wireframing & Prototyping",
    benefit_desc:
      "We provide detailed wireframes and clickable prototypes to visualize layout, structure, and user flow before development, ensuring design alignment with client goals and user expectations."
  }
];

export default function page() {
  const baseURL = "https://base2brand.com/dallas-web-design-agency";
  const wwwURL = "https://www.base2brand.com/dallas-web-design-agency";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Top Dallas Web Design Agency | Best Web Design Agency | Base2Brand",
    description:
      "Base2Brand is a leading web design agency in Dallas, specializing in custom websites, responsive design, and intuitive UX/UI. Get your free consultation today!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Hirebanner
        bannertoptitle1="Boost Your Digital Presence with"
        bannertoptitle2="Stunning Web Designs"
        bannerHeading="Web Design <span class='text_hire_primary'>  UI/UX | </span> <br/> <span class='text-black'>   Creative Direction</span>"
        bannerSubHeading="At our Dallas web design agency, we don't just build websites, we craft digital experiences that captivate users and convert visitors. Our expert design team focuses on clean layouts, intuitive navigation, and seamless UI/UX to bring your vision to life."
        bannerImage="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/hero-img_ls4uqo.jpg"
        bannerList1="Mobile-First Design"
        bannerList2="Conversion-Focused UI"
        bannerList3="Brand-Centric Visuals"
        bannerList4="Wireframes to Final UI"
        bannerList5="Prototypes for Real-Time Experience"
      />
      <Benefit
        benefit_title={`Core Services Offered by Our Dallas Web Design Agency`}
        benefit_desc="Make the Smart Choice with Base2Brand"
        benefitdata={benefitdata}
      />
      <Howbuild
        title={`How <span class="text_hire_green"> Dallas Web Design </span> Agency Builds Beautiful Websites?`}
        description={`We follow a streamlined process to create visually striking, user-friendly websites that align with your brand and drive <br/> real results. Here’s how our <strong> Dallas web design </strong> agency works:`}
      />
      <Hiredeveloperdallas />
      <Endtoend
        title={`Serving 30+ Industries with 500+ Successful Projects – <br/> <span class="text_hire_green"> Dallas </span> Web Design Agency`}
        description1={`At our Dallas web design agency, we proudly offer web design services across 30+ diverse industries, including healthcare, real estate, eCommerce, education, and finance. With over 500 successful projects delivered, we understand the unique needs of every business sector. `}
        description2={`Our team customizes designs that align with your brand’s vision and audience expectations. Whether you're a startup or an enterprise, our Dallas web design agency ensures your online presence stands out with performance-driven and aesthetically appealing websites tailored to your industry goals.`}
      />
      <Reviewhiredev reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
