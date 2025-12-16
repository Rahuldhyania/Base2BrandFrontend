"use client";
import React from 'react';
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Intecombanner from '../../../component/integration-component/Intecombanner';
import Intebar from '../../../component/integration-component/Intebar';
import Intechoose from '../../../component/integration-component/Intechoose';
import Inteanifaq from '../../../component/integration-component/Inteanifaq';
import Inteprocess from '../../../component/integration-component/Inteprocess';
import Intebarlower from '../../../component/integration-component/Intebarlower';
import InteFaq from '../../../component/integration-component/InteFaq';
import PageHead from '../../../component/PageHead';
import Intefooterlink from '../erp-integration/inte-footer-link';
const FAQdata = [
  {
    id: 1,
    FAQquestion: "What is Shopify integration with Uni-Commerce?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse1",
    databstarget: "#flush-collapse1",
  },
  {
    id: 2,
    FAQquestion: "How does Uni-Commerce improve inventory management on Shopify?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse2",
    databstarget: "#flush-collapse2",
  },
  {
    id: 3,
    FAQquestion: "Can Uni-Commerce integration support multi-channel sales?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse3",
    databstarget: "#flush-collapse3",
  },
  {
    id: 4,
    FAQquestion: "What customization options are available for Shopify-Uni-Commerce integration?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse4",
    databstarget: "#flush-collapse4",
  },
  {
    id: 5,
    FAQquestion: "How long does Shopify-Uni-Commerce integration take?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse5",
    databstarget: "#flush-collapse5",
  },
  {
    id: 6,
    FAQquestion: "Will the integration affect my existing Shopify operations?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse6",
    databstarget: "#flush-collapse6",
  },
  {
    id: 7,
    FAQquestion: "Do I need technical expertise for Shopify-Uni-Commerce integration?",
    FAQanswer: "Shopify integration with Uni-Commerce connects your Shopify store to Uni-Commerce, enabling seamless management of orders, inventory, and operations from a single platform.",
    divid: "flush-collapse7",
    databstarget: "#flush-collapse7",
  },
];
export default function UniCommerce() {
  const baseURL = "https://base2brand.com/uni-commerce";
  const wwwURL = "https://www.base2brand.com/uni-commerce";
  let canonical = "";
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  console.log('isUsingWWWisUsingWWW')
  const PageMeta = {
    title: "Uni-Commerce Integration with Shopify | Base2Brand",
    description: "Base2Brand offers expert Uni-Commerce integration services with Shopify, including custom API integration and platform solutions to streamline your business operations.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />
      <div className="odoo_banner">
        <Intecombanner Intecomtitle1="Uni-Commerce" banner_text_color="" color_text="" last_text='' Intecomtitle2="Custom Integration" Intecompara="Streamline Your Shopify Store with  Expert Uni-Commerce Integration 
       Simplify Operations, Sync Inventory, and Drive Efficiency from a Single Platform!"
          text_banner_img="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Uni-commerce_4_hl6ocb.webp"
          Intecombannerimg='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480149_3_hev5yt.webp'
        />
      </div>
      <Intebar bartitle1='Shopify Development with '
        colorbartitle='Uni-Commerce '
        bartitle2='Integration Service'
        barpara='At Base2Brand, we specialize in Shopify development and have demonstrated expertise in Uni-Commerce integration. Our team has successfully worked on projects involving Shopify Uni-Commerce integration, ensuring seamless operations for e-commerce businesses. With our knowledge and experience, we can help your store achieve optimal efficiency through effective Uni-Commerce integration services.`'
      />
      <Intechoose
        choosetitle='Uni-Commerce' demotitle=''
        choose_t_para="Base2Brand offers end-to-end Uni-Commerce integration services, ensuring your Shopify store runs smoothly with Uni-Commerce. Here’s what we provide:"
        // 1....
        choose_img1='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_5_iylxa2.webp'
        choose_t1='Order Syncing'
        choose_para1='Our Unicommerce integration service ensures seamless order syncing, enabling real-time updates across your Shopify store and backend systems for efficient order management.'
        // 2....
        choose_img2='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_4_1_r0g0ia.webp'
        choose_t2='Inventory Syncing'
        choose_para2='Keep your stock accurate with our Unicommerce integration. Sync inventory levels in real time to avoid overselling and ensure a smooth customer experience.'
        // 3....
        choose_img3='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_1_uefcwr.webp'
        choose_t3='Order Fulfilment'
        choose_para3='Streamline your order fulfillment process with Unicommerce integration. Automate tasks like picking, packing, and shipping for faster delivery and satisfied customers.'
        // 4....
        choose_img4='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_7_zoppsp.webp'
        choose_t4='Product Syncing'
        choose_para4='Manage your product catalog effortlessly with Unicommerce integration. Sync product data across platforms for consistent and up-to-date listings.'
        // 5....
        choose_img5='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_8_1_ghnxdi.webp'
        choose_t5='Order Returns Management'
        choose_para5='Simplify returns with our Unicommerce integration. Automate return requests and manage reverse logistics efficiently for hassle-free customer service.'
        // 6....
        choose_img6='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_10_2_zviis4_1.webp'
        choose_t6='Order Delivery Management'
        choose_para6='Optimize delivery operations with Unicommerce integration. Track shipments, manage carriers, and ensure timely delivery to delight your customers.'
      />
      <Inteanifaq anifaq_titleupper='Key Benefits of Our Uni-Commerce System' anifaq_titlelower='Integration Service'
        anifaq_banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480153_1_ulqppb.webp"
        // 1...
        anifaq_t1='Simplified Operations with Uni-Commerce Integration'
        anifaq_para1='Base2Brand ensures streamlined operations by integrating Uni-Commerce with your Shopify store. Manage orders, inventory, and fulfillment efficiently from a single platform, reducing complexity while boosting productivity and accuracy.'
        //  2...
        anifaq_t2='Improved Inventory Management'
        anifaq_para2='Base2Brand ensures streamlined operations by integrating Uni-Commerce with your Shopify store. Manage orders, inventory, and fulfillment efficiently from a single platform, reducing complexity while boosting productivity and accuracy.'
        // 3...
        anifaq_t3='Custom Solutions for Your Business'
        anifaq_para3='Base2Brand ensures streamlined operations by integrating Uni-Commerce with your Shopify store. Manage orders, inventory, and fulfillment efficiently from a single platform, reducing complexity while boosting productivity and accuracy.'
        // 4...
        anifaq_t4='Seamless Functionality for E-Commerce Success'
        anifaq_para4='Base2Brand ensures streamlined operations by integrating Uni-Commerce with your Shopify store. Manage orders, inventory, and fulfillment efficiently from a single platform, reducing complexity while boosting productivity and accuracy.'
      />
      <Inteprocess process_t_uppper="Our Proven Process Step-by-Step" process_t_lower="Integration"
        //  1...
        process_img1='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_6_fz1mog.webp'
        process_t1='Assessment'
        process_para1='We analyze your Shopify store to understand your operational needs'
        //  2...
        process_img2='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_2_iashze.webp'
        process_t2='Planning'
        process_para2='We create a tailored strategy using advanced Uni-Commerce platform solutions'
        //  3...
        process_img3='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_4_2_qxrcnz.webp'
        process_t3='Execution'
        process_para3='Our team expertly implements integration for real-time sync'
        //  4...
        process_img4='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_2_cex5gw.webp'
        process_t4='Testing'
        process_para4='Rigorous testing ensures error-free, seamless functionality'
      />
      <Intebarlower
        bartitlelower='Let Base2Brand Simplify Your E-commerce Operations'
        barparalower='By choosing our Uni-Commerce integration services, you’re partnering with experts committed to delivering tailored solutions for your Shopify store. Our proficiency in Shopify development and Uni-Commerce integration ensures your e-commerce business operates efficiently on a unified platform.'
      />
      <InteFaq inte_faq_title="FAQs on Shopify Integration with " faq_last='Uni-Commerce' datamap={FAQdata} />
      <Intefooterlink />
      <Footer />
    </div>
  )
}
