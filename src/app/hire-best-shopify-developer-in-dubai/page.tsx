import React from "react";
import "../top-digital-marketing-agency-la/Hire.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import PageHead from "../../../component/PageHead";
import Hiretalkform from "../hire-shopify-developer-in-australia/components/Hiretalkform";
import Hirebanner from "../top-digital-marketing-agency-la/Hirebanner";
import Benefit from "../top-digital-marketing-agency-la/Benefit";
import Howbuild from "../top-digital-marketing-agency-la/Howbuild";
import Hiredeveloper from "../top-digital-marketing-agency-la/Hiredeveloper";
import Endtoend from "../top-digital-marketing-agency-la/Endtoend";
import Reviewhiredev from "../top-digital-marketing-agency-la/Reviewhiredev";
import Hirefaq from "../hire-shopify-developer-in-usa/Hirefaq";
const reviewdata = [
  {
    id: 1,
    review:
      "“I wanted a professional Shopify store for my clothing brand, and Base2Brand exceeded expectations. If you want real results, definitely hire shopify developers dubai for fast, reliable, and innovative eCommerce solutions.”",
    name: "Ahmed",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 2,
    review:
      "“My online boutique needed customization, and Base2Brand handled everything smoothly. They listened carefully to my needs. I recommend anyone planning growth to hire shopify developers dubai because they truly understand the local market and international standards.”",
    name: "Fatima",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 3,
    review:
      "“Expanding my electronic accessories store required expertise. Base2Brand made the entire process simple and efficient. To achieve great results, it’s wise to hire shopify developers dubai, as they deliver quality and scalable eCommerce solutions every time.”",
    name: "Saeed",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 4,
    review:
      "“From store setup to integrating apps, Base2Brand delivered excellent service. Their Shopify experts are detail-oriented and ensure everything runs perfectly. For anyone serious about online success, you must hire shopify developers dubai for the best experience.”",
    name: "Mariam",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  },
  {
    id: 5,
    review:
      "“I struggled with conversions until Base2Brand optimized my Shopify store. The results were immediate. If you want a smooth journey in eCommerce, I strongly recommend you hire shopify developers dubai for professional solutions tailored to your business.”",
    name: "Rashid",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8_3727759a-48b5-4641-9154-c82eb37e56cd.webp"
  },
  {
    id: 6,
    review:
      "“Base2Brand transformed my small store into a full-featured Shopify business. Their dedication and creativity impressed me. If you’re planning to succeed online, the smartest decision is to hire shopify developers dubai for efficient and customized solutions.”",
    name: "Noor",
    company: "Dubai",
    image:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xezra.jpg.pagespeed.ic.47Sjy_uN93_mjsmr8.webp"
  }
];

const faqData = [
  {
    question: "Why should I hire Shopify developers Dubai for my store?",
    answer:
      "When you hire Shopify developers Dubai, you get tailored solutions. Many businesses hire Shopify developers Dubai to enhance performance. Experienced experts ensure seamless results, so always hire Shopify developers Dubai."
  },
  {
    question: "Can I hire Shopify developers Dubai for custom features?",
    answer:
      "Absolutely! You can hire Shopify developers Dubai for custom features. Businesses hire Shopify developers Dubai to design unique apps. Always hire Shopify developers Dubai to achieve advanced functionality for your store."
  },
  {
    question: "How cost-effective is it to hire Shopify developers Dubai?",
    answer:
      "Many businesses hire Shopify developers Dubai for affordability. When you hire Shopify developers Dubai, you save time and money. Entrepreneurs regularly hire Shopify developers Dubai because of long-term cost benefits."
  },
  {
    question: "Do businesses often hire Shopify developers Dubai for theme customization?",
    answer:
      "Yes! Businesses hire Shopify developers Dubai for theme customization. When you hire Shopify developers Dubai, your site stands out. Professionals ensure unique designs, making it wise to hire Shopify developers Dubai."
  },
  {
    question: "Why is it smart to hire Shopify developers Dubai for ongoing support?",
    answer:
      "Companies hire Shopify developers Dubai for reliable support. When you hire Shopify developers Dubai, they maintain updates. Most store owners prefer to hire Shopify developers Dubai for seamless operations."
  },
  {
    question: "Should I hire Shopify developers Dubai for integrations?",
    answer:
      "Definitely! Many hire Shopify developers Dubai for third-party integrations. When you hire Shopify developers Dubai, you unlock advanced functionality. That’s why businesses continue to hire Shopify developers Dubai."
  }
];

const benefitdata = [
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2835578_xkglqj.png",
    benefitcard_title: "Shopify Store Setup",
    benefit_desc:
      "We offer end-to-end Shopify store setup, from theme installation to payment gateways. Our professionals ensure your store runs smoothly, making it easier to launch your business online successfully."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/6601840_pzfwsb.png",
    benefitcard_title: "Custom Theme Development",
    benefit_desc:
      "Our team designs and develops fully customized Shopify themes tailored to your brand identity. With unique layouts and responsive design, your store stands out, attracting customers and boosting sales effectively."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3045679_laosgn.png",
    benefitcard_title: "Shopify App Development",
    benefit_desc:
      "We specialize in developing custom Shopify apps that extend your store’s functionality. From integrations to automation, our apps solve real challenges and help scale businesses with innovative, user-friendly features."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/824088-200_gr4wuc.png",
    benefitcard_title: "Shopify SEO & Marketing",
    benefit_desc:
      "Boost your online presence with our Shopify SEO and marketing strategies. We optimize your store for higher search rankings, driving organic traffic, increasing visibility, and converting more visitors into loyal customers."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/2344541_enmkqx.png",
    benefitcard_title: "Migration to Shopify",
    benefit_desc:
      "Seamlessly migrate from WooCommerce, Magento, or any platform to Shopify. We ensure zero data loss, maintain product integrity, and deliver a hassle-free transition so your store continues operating smoothly."
  },
  {
    logo:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/849945_c1ntzn.png",
    benefitcard_title: "Ongoing Shopify Support",
    benefit_desc:
      "Our job doesn’t end after launch. With dedicated Shopify support, we handle updates, bug fixes, and feature enhancements. You can always hire Shopify developers Dubai for long-term assistance and growth."
  }
];

export default function page() {
  //   const baseURL = "https://base2brand.com/top-digital-marketing-agency-la";
  //   const wwwURL = "https://www.base2brand.com/top-digital-marketing-agency-la";
  //   let canonical = "";
  //   if (typeof window !== "undefined") {
  //     const isUsingWWW = window.location.href.includes("www.");
  //     canonical = isUsingWWW ? wwwURL : baseURL;
  //   }
  //   const PageMeta = {
  //     title: "Top Digital Marketing Agency in LA | Base2Brand",
  //     description:
  //       "Looking for a top-tier digital marketing agency in Los Angeles? Base2Brand delivers SEO, PPC, social media, & performance-driven campaigns tailored to your growth goals.",
  //     canonical: canonical,
  //     image: "/img/portfolio/b1.png"
  //   };
  return (
    <div>
      {/* <PageHead PageMeta={PageMeta} /> */}
      <Header />
      <Hirebanner
        bannertoptitle1="Custom Shopify Development Solutions –"
        bannertoptitle2="With Award-Winning E-Commerce Experts"
        bannerHeading="Hire Shopify Developers in  <span class='text_hire_primary'> Dubai – </span>  <span class='text-black'> Base2Brand</span>"
        bannerSubHeading="Partner with Base2Brand and transform your online store with tailored Shopify development solutions. Since 201, we’ve helped businesses across industries build powerful, scalable, and conversion-focused e-commerce stores that drive growth and sales."
        bannerImage="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/hero-img_ls4uqo.jpg"
        bannerList1="<strong>1.5K+</strong>  Shopify Stores Designed & Developed Worldwide"
        bannerList2="<strong>$200 Million+</strong> Revenue Generated for Our Clients Through Shopify Solutions"
        bannerList3="<strong>3 Million+</strong> Monthly Shoppers Engaged via Our Optimized Online Stores"
        bannerList4="<strong>800k</strong>  Monthly Leads Driven Through Seamless E-Commerce Experiences"
        bannerList5="<strong>90%</strong> Client Retention Rate with Our High-Performance Shopify Strategies"
      />
      <Benefit
        benefit_title={`Shopify Services We Offer in  
          <span class="text_hire_green"> Dubai</span>`}
        benefit_desc="Hire Shopify developers Dubai, our expert team ensures seamless solutions with proven results."
        benefitdata={benefitdata}
      />
      <Howbuild
        title={` How We Deliver  
            <span class="text_hire_green"> Shopify </span> Development That Scales?`}
        description="At Base2Brand, we build, customize, and scale Shopify stores that are optimized for growth. If you’re looking to hire Shopify developers Dubai, our proven process ensures your online business thrives."
      />
      <Hiredeveloper />
      <Endtoend
        title={`  Providing end-to-end
            <span class="text_hire_primary">
             Shopify Development <br/> Services Across All Industries
            </span>`}
        description1={`Base2Brand offers complete Shopify development services across all industries, helping brands build powerful online stores, boost sales, and deliver seamless customer experiences. From fashion and beauty to healthcare, real estate, and technology, our Shopify experts create tailored solutions that align with your business goals and audience needs.`}
        description2={`We specialize in designing, developing, and scaling Shopify stores with performance-driven strategies that maximize ROI. Businesses that hire Shopify developers Dubai from Base2Brand typically see up to 3x more online sales and 45% faster store load speeds, resulting in stronger conversions and customer retention.`}
      />
      <Reviewhiredev reviewdata={reviewdata} />
      <Hiretalkform />
      <Hirefaq faqData={faqData} />
      <Footer />
    </div>
  );
}
