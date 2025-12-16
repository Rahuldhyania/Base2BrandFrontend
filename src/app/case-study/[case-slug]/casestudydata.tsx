"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { usePathname } from "next/navigation";
import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import "./casesub.css";
import Objective from "../case-component/objective";
import Casefooterlink from "../case-component/case-footer-link";
import PageHead from "../../../../component/PageHead";
import Image from "next/image";
interface CaseStudy {
  id?: number;
  img?: string;
  title?: string;
  des?: string;
  slug?: string;
  button?: string;
  next_link?: string;
  banner_title?: string;
  banner_img?: string;
  about_title?: string;
  about_dis?: string;
  //objective
  objective_title?: string;
  objective_banner?: string;
  dis1?: string;
  dis2?: string;
  dis3?: string;
  dis4?: string;
  dis5?: string;
  dis6?: string;
  arrowobjtive1?: string;
  arrowobjtive2?: string;
  arrowobjtive3?: string;
  arrowobjtive4?: string;
  arrowobjtive5?: string;
  // for goole ads 
  objective_title_google?: string;
  objective_banner_google?: string;
  dis1_google?: string;
  dis2_google?: string;
  dis3_google?: string;
  dis4_google?: string;
  dis5_google?: string;
  dis6_google?: string;
  arrowobjtive1_google?: string;
  arrowobjtive2_google?: string;
  arrowobjtive3_google?: string;
  arrowobjtive4_google?: string;
  arrowobjtive5_google?: string;
  //  // for meta ads 
  objective_title_meta?: string;
  objective_banner_meta?: string;
  dis1_meta?: string;
  dis2_meta?: string;
  dis3_meta?: string;
  dis4_meta?: string;
  dis5_meta?: string;
  dis6_meta?: string;
  arrowobjtive1_meta?: string;
  arrowobjtive2_meta?: string;
  arrowobjtive3_meta?: string;
  arrowobjtive4_meta?: string;
  arrowobjtive5_meta?: string;
  //Challenges
  chall_title?: string;
  chall_banner?: string;
  chall_dis_title1?: string;
  chall_dis1?: string;
  chall_dis_title2?: string;
  chall_dis2?: string;
  chall_dis_title3?: string;
  chall_dis3?: string;
  chall_dis_title4?: string;
  chall_dis4?: string;
  chall_dis_title5?: string;
  chall_dis5?: string;
  challcol4?: string;
  challcol5?: string
  chall_dis_title6?: string
  chall_dis6?: string

  //challenges google
  chall_title_google?: string;
  chall_banner_google?: string;
  chall_dis_title1_google?: string;
  chall_dis1_google?: string;
  chall_dis_title2_google?: string;
  chall_dis2_google?: string;
  chall_dis_title3_google?: string;
  chall_dis3_google?: string;
  chall_dis_title4_google?: string;
  chall_dis4_google?: string;
  chall_dis_title5_google?: string;
  chall_dis5_google?: string;
  challcol4_google?: string;
  challcol5_google?: string

  //challenges meta ads
  //  chall_title_google?: string;
  // chall_banner_google?: string;
  chall_dis_title1_meta?: string;
  chall_dis1_meta?: string;
  chall_dis_title2_meta?: string;
  chall_dis2_meta?: string;
  chall_dis_title3_meta?: string;
  chall_dis3_meta?: string;
  chall_dis_title4_meta?: string;
  chall_dis4_meta?: string;
  chall_dis_title5_meta?: string;
  chall_dis5_meta?: string;
  challcol4_meta?: string;
  challcol5_meta?: string
  //Solution
  sol_title?: string;
  sol_img1?: string;
  sol_dis_title1?: string;
  sol_dis1?: string;
  sol_img2?: string;
  sol_dis_title2?: string;
  sol_dis2?: string;
  sol_img3?: string;
  sol_dis_title3?: string;
  sol_dis3?: string;
  sol_img4?: string;
  sol_dis_title4?: string;
  sol_dis4?: string;
  sol_img5?: string;
  sol_dis_title5?: string;
  sol_dis5?: string;
  sol_img6?: string;
  sol_dis_title6?: string;
  sol_dis6?: string;
  sol_display1?: boolean;
  sol_display2?: boolean;
  //solution google 
  sol_dis_title1_google?: string;
  sol_dis1_google?: string;
  sol_dis_title2_google?: string;
  sol_dis2_google?: string;
  sol_dis_title3_google?: string;
  sol_dis3_google?: string;
  sol_dis_title4_google?: string;
  sol_dis4_google?: string;
  sol_dis_title5_google?: string;
  sol_dis5_google?: string;
  sol_dis_title6_google?: string;
  sol_dis6_google?: string;

  //solution meta 
  sol_dis_title1_meta?: string;
  sol_dis1_meta?: string;
  sol_dis_title2_meta?: string;
  sol_dis2_meta?: string;
  sol_dis_title3_meta?: string;
  sol_dis3_meta?: string;
  sol_dis_title4_meta?: string;
  sol_dis4_meta?: string;
  sol_dis_title5_meta?: string;
  sol_dis5_meta?: string;
  sol_dis_title6_meta?: string;
  sol_dis6_meta?: string;
  // Result
  res_title?: string;
  res_img1?: string;
  res_color_title1?: string;
  res_dis1?: string;
  res_img2?: string;
  res_color_title2?: string;
  res_dis2?: string;
  res_img3?: string;
  res_color_title3?: string;
  res_dis3?: string;
  res_img4?: string;
  res_color_title4?: string;
  res_dis4?: string;
  res_img5?: string;
  res_color_title5?: string;
  res_dis5?: string;
  res_display1?: boolean;
  res_display2?: boolean;
  loria_banner?: boolean;

  //result google 
  res_color_title1_google?: string;
  res_dis1_google?: string;
  res_color_title2_google?: string;
  res_dis2_google?: string;
  res_color_title3_google?: string;
  res_dis3_google?: string;
  res_color_title4_google?: string;
  res_dis4_google?: string;
  res_color_title5_google?: string;
  res_dis5_google?: string;
  //result meta 
  res_color_title1_meta?: string;
  res_dis1_meta?: string;
  res_color_title2_meta?: string;
  res_dis2_meta?: string;
  res_color_title3_meta?: string;
  res_dis3_meta?: string;
  res_color_title4_meta?: string;
  res_dis4_meta?: string;
  res_color_title5_meta?: string;
  res_dis5_meta?: string;

  // meta title
  meta_title?: string;
  meta_dis?: string;
  // slution
  solutionclass?: string;
  resultclass?: string;
  solutioncol6?: string;
  // clinet review footer section
  clientreview?: string;
  clientreviewdisplay?: string;
  //last three case study pages 
  clickablecase?: string,
  email_mar?: string
}
const obj: CaseStudy[] = [
  // VIP Number Shop
  {
    clickablecase: "block",
    resultclass: "4",
    solutionclass: "4",
    id: 1,
    slug: "vip-number-shop",
    img: "case/Vip.png",
    title:
      "VIP Number Shop - SEO/Google Ads/ Meta Ads/ SMM/ Influencer Collaboration / ASO",
    des:
      "By combining SEO, social media marketing, paid ads, influencer campaigns, and push notifications, VIP Number Shop successfully increased..",
    button: "Read case study",
    next_link: "/Vip",
    //banner data
    banner_title:
      "Maximizing Sales of VIP Mobile Numbers Through Multi-Channel Digital Marketing",
    banner_img:
      " https://cdn.shopify.com/s/files/1/0835/6334/8002/files/objective_qep6jx.webp",
    about_title: "About VIP Number Shop",
    about_dis:
      "VIP Number Shop specializes in selling premium VIP mobile numbers, which are highly sought after for their unique combinations and associations with luck, prestige, and status. Catering to both individuals and businesses, VIP Number Shop provides a curated selection of exclusive mobile numbers that offer symbolic and marketing value. Their offerings are aimed at people seeking status symbols and businesses looking to leverage memorable phone numbers for brand recall and marketing purposes.",
    //bojective data
    objective_title:
      "The primary objective for VIP Number Shop was to expand their customer base and boost sales of their VIP mobile numbers. Specifically, they aimed to:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/objective_qep6jx.webp",
    dis1: "Increase organic traffic and search rankings through SEO efforts.",
    dis2: "Drive engagement and inquiries through social media platforms.",
    dis3: "Maximize conversions with paid advertising on Meta and Google.",
    dis4:
      "Utilize influencer marketing to expand brand awareness among key demographics",
    dis5:
      "Leverage mobile app push notifications to increase VIP number purchases",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    //objective google ads 
    dis1_google: "Increase sales through targeted Google Ads campaigns.",
    dis2_google: "Optimize conversion tracking for accurate data and better campaign performance.",
    dis3_google:
      "Improve audience engagement to boost return on ad spend (ROAS).",
    dis4_google: "Strengthen brand awareness and trust by showcasing product quality and craftsmanship.",
    objective_banner_google: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb.png",
    arrowobjtive1_google: "/detailpage/li.png",
    arrowobjtive2_google: "/detailpage/li.png",
    arrowobjtive3_google: "/detailpage/li.png",
    arrowobjtive4_google: "/detailpage/li.png",
    //objective meta ads 
    dis1_meta: "Maximize conversions with paid advertising on Meta.",
    dis2_meta: "Expand brand visibility among luxury buyers interested in exclusive mobile numbers.",
    dis3_meta: "Retarget potential customers who previously visited the site but didn’t convert.",
    objective_banner_meta: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb.png",
    arrowobjtive1_meta: "/detailpage/li.png",
    arrowobjtive2_meta: "/detailpage/li.png",
    arrowobjtive3_meta: "/detailpage/li.png",
    // Challenge
    chall_title:
      "VIP Number Shop operates in a niche market, where customers may not always be actively searching for VIP mobile numbers. This posed several challenges",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Frame_2_vimxu1.svg",

    chall_dis_title1: "Niche Audience Targeting",
    chall_dis1:
      "Reaching potential buyers who understand the value of VIP numbers and are willing to invest in them",
    chall_dis_title2: "Standing Out in a Competitive Market",
    chall_dis2:
      "Differentiating VIP Number Shop from competitors in the mobile number industry",
    chall_dis_title3: "Converting Traffic into Sales",
    chall_dis3:
      "Despite a significant interest in VIP mobile numbers, the challenge was converting that interest into purchases",
    chall_dis_title4: "Multi-Channel Consistency",
    chall_dis4:
      "Ensuring a seamless, consistent message across SEO, paid ads, social media, influencer campaigns, and mobile app notifications to create a unified brand experience",
    //chall meta
    chall_dis_title1_meta: "Converting Traffic into Sales",
    chall_dis1_meta:
      "Despite a significant interest in VIP mobile numbers, the challenge was converting that interest into purchases.",
    chall_dis_title2_meta: "Multi-Channel Consistency",
    chall_dis2_meta:
      "Ensuring a seamless, consistent message across SEO, paid ads, social media, influencer campaigns, and mobile app notifications to create a unified brand experience.",
    chall_dis_title3_meta: "Audience Segmentation",
    chall_dis3_meta:
      "Identifying and segmenting different buyer personas for better targeting and engagement.",
    chall_dis_title4_meta: "Multi-Channel Consistency",
    chall_dis4_meta:
      "Ensuring a seamless, consistent message across SEO, paid ads, social media, influencer campaigns, and mobile app notifications to create a unified brand experience",
    //chall google
    chall_dis_title1_google: "Converting Traffic into Sales",
    chall_dis1_google:
      "Despite a significant interest in VIP mobile numbers, the challenge was converting that interest into purchases.",
    chall_dis_title2_google: "Multi-Channel Consistency",
    chall_dis2_google:
      "Ensuring a seamless, consistent message across SEO, paid ads, social media, influencer campaigns, and mobile app notifications to create a unified brand experience.",
    chall_dis_title3_google: "High Competition on Keywords",
    chall_dis3_google:
      " Competing with established brands bidding on the same high-value keywords.",
    chall_dis_title4_google: "",
    chall_dis4_google:
      "",
    //Solution
    sol_title:
      "To address VIP Number Shop's challenges, we implemented a focused, multi-channel approach",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "SEO Optimization: ",
    sol_dis1:
      "Targeted keywords like 'VIP mobile numbers' were incorporated into the website, alongside technical improvements for better rankings.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "Social Media Marketing: ",
    sol_dis2:
      "Engaging posts on Facebook, Instagram, and Twitter highlighted the exclusivity of VIP numbers, using strategic hashtags to boost reach and engagement.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Paid Ads (Meta & Google): ",
    sol_dis3:
      "Highly targeted ads promoted the benefits of owning VIP numbers, driving qualified traffic to the website and boosting conversions.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico4.7f04745c_yjc55e.png",
    sol_dis_title4: "SEO Optimization: ",
    sol_dis4:
      "Collaborating with luxury lifestyle influencers helped promote VIP Number Shop, creating trust and expanding brand awareness.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico5.1dd4efb4_qunngb.png",
    sol_dis_title5: "Mobile App Push Notifications: ",
    sol_dis5:
      "Personalized push notifications encouraged app users to explore and complete purchases, improving customer retention.",
    sol_display1: false,
    sol_display2: false,
    //solution google
    sol_dis_title1_google: "Account Restructuring: ",
    sol_dis1_google:
      "Highly targeted ads promoted the benefits of owning VIP numbers, driving qualified traffic to the website and boosting conversions.",
    sol_dis_title2_google: "Conversion Tracking Optimization: ",
    sol_dis2_google:
      "Implemented ad extensions such as site links, callouts, and structured snippets to provide more information and encourage clicks.",
    sol_dis_title3_google: "Improved Ad Creatives: ",
    sol_dis3_google:
      "Used geo-targeting to focus on regions with higher interest in VIP numbers, maximizing ad spend efficiency.",
    sol_dis_title4_google: "Backlink Building: ",
    sol_dis4_google:
      "We implemented a backlink strategy, targeting high-authority sites for link-building opportunities. This significantly boosted the brand’s domain authority, signaling to search engines that DuraCrafts Furniture was a credible source.",
    sol_dis_title5_google: "Refined Targeting: ",
    sol_dis5_google:
      "The targeting strategy was revamped to focus on customers who were actively searching for furniture in Melbourne. We also targeted users who had shown interest in similar products, creating custom audiences that were more likely to convert.",
    sol_dis_title6_google: "Optimized Campaign Settings: ",
    sol_dis6_google:
      "We adjusted campaign settings to ensure ads were shown at the right time of day, targeting the optimal audience, and using bidding strategies that maximized return on investment.",
    //solution meta
    sol_dis_title1_meta: "",
    sol_dis1_meta:
      "Highly targeted ads promoted the benefits of owning VIP numbers, driving qualified traffic to the website and boosting conversions.",
    sol_dis_title2_meta: "",
    sol_dis2_meta:
      "Retargeting ads were used to re-engage visitors who abandoned the cart or showed interest in VIP numbers.",
    sol_dis_title3_meta: "",
    sol_dis3_meta:
      "Lookalike audiences were created to target similar high-intent buyers based on previous customer profiles",
    sol_dis_title4_meta: "Seasonal and Promotional Offers: ",
    sol_dis4_meta:
      "We launched limited-time promotions such as Summer Sales, Black Friday Sales, and other seasonal offers. These generated excitement and urgency among customers, boosting both online and offline sales.",
    sol_dis_title5_meta: "Video Ads for Trust Building: ",
    sol_dis5_meta:
      " To establish credibility, we created video ads showing the physical store, product demonstrations, and the brand’s commitment to quality. These videos reassured potential customers that DuraCrafts Furniture offered high-quality, durable furniture made in Australia.",
    sol_dis_title6_meta: "Optimized Campaign Settings: ",
    sol_dis6_meta:
      "We adjusted campaign settings to ensure ads were shown at the right time of day, targeting the optimal audience, and using bidding strategies that maximized return on investment.",
    //result
    res_title:
      "The multi-channel marketing strategy for VIP Number Shop delivered impressive results, leading to substantial growth in sales and brand awareness. Key outcomes include",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Increase_yvf36i.svg",
    res_color_title1: "155% increase in organic traffic",
    res_dis1:
      "due to improved search engine rankings, particularly for competitive keywords like 'VIP mobile numbers'.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_fa3qld.svg",
    res_color_title2: "125% growth in social media",
    res_dis2:
      " engagement and a significant rise in inquiries through Facebook and Instagram.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/improvement_cu5uli.svg",
    res_color_title3: "120% improvement in conversion rates",
    res_dis3:
      "from paid ads on Meta and Google, with a marked reduction in cost-per-click (CPC).",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sales_rgknlr.svg",
    res_color_title4: "300% higher sales",
    res_dis4:
      "attributed to influencer marketing campaigns that connected VIP Number Shop to a luxury-seeking audience.",
    res_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/25_increase_hifpmn.svg",
    res_color_title5: "155% increase",
    res_dis5:
      "In customer retention through personalized mobile app push notifications, which resulted in more repeat purchases.",
    res_display1: false,
    res_display2: false,
    //result google 
    res_color_title1_google: "5X ROAS",
    res_dis1_google:
      "30% improvement in conversion rates from paid ads on Google, with a marked reduction in cost-per-click (CPC).",
    res_color_title2_google: "200% Increase in Sales",
    res_dis2_google:
      "40% increase in click-through rates (CTR) due to well-optimized ad copy and extensions.",
    res_color_title3_google: "Increased Sales and Conversions",
    res_dis3_google:
      "20% boost in revenue from high-intent search queries, contributing to overall sales growth.",
    res_color_title4_google: "Brand Awareness and Trust",
    res_dis4_google:
      "The Google Ads strategy effectively built brand awareness, increased trust among potential customers, and highlighted quality and craftsmanship.",
    //result meta 
    res_color_title1_meta: "Brand Visibility",
    res_dis1_meta:
      "30% improvement in conversion rates from paid ads on Meta, with a marked reduction in cost-per-click (CPC).",
    res_color_title2_meta: "Increased Foot Traffic",
    res_dis2_meta:
      "35% increase in retargeted customer conversions through dynamic product ads.",
    res_color_title3_meta: "Sales Growth",
    res_dis3_meta:
      "25% growth in brand visibility among high-income demographics interested in VIP numbers.",
    res_color_title4_meta: "Trust and Customer Confidence",
    res_dis4_meta:
      " With the video ads and authentic content, customers felt more confident purchasing furniture online, knowing they were dealing with a reputable brand.",
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "VIP Number Shop | 360° Digital Marketing Case Study",
    meta_dis:
      "Explore how VIP Number Shop boosted its online presence with 360° digital marketing strategies. Explore the case study for proven results and insights."
  },
  //Loria Medical
  {
    resultclass: "4",
    solutionclass: "3",
    id: 2,
    slug: "loria-medicals",
    img: "case/loria.png",
    title: "Loria Medical- Meta Ads",
    des:
      "The Partnership Between Loria Medical and our Meta Ads Campaign Strategy resulted in increased Visibility and tangible Growth in Patient Consultations..",
    button: "Read case study",
    next_link: "/loria-Medical",
    //banner data
    banner_title:
      "Started from Scratch: From Zero to 300+ Quality Leads in a Month with Meta Ads",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/banner_rlwxmo.webp",
    about_title: "About Loria Medical",
    about_dis:
      "Loria Medical, led by Dr. Victor Loria, is a pioneer in non-surgical male enhancement procedures. With over two decades of expertise, Dr. Loria specializes in permanent filler treatments and lengthening procedures. To expand its patient base and enhance brand awareness, Loria Medical turned to a targeted Meta Ads strategy to generate high-quality leads while navigating advertising regulations in the sensitive medical field.",
    //bojective data
    objective_title:
      "The primary objective of the Meta Ads campaign and generate more qualified leads, and enhance brand awareness for their revolutionary male enhancement procedures. Specifically, Dr. Loria wanted to:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/objective_1_ebqnix.webp",
    dis1:
      "Establish a strong social media presence through an optimized Facebook account.",
    dis2:
      "Increase brand awareness and educate potential patients about non-surgical enhancement procedures.",
    dis3:
      "Generate high-quality leads for consultations with Dr. Loria.",
    dis4:
      "Build trust by sharing patient testimonials and positive reviews.",
    // dis5:"Optimize advertising spend to maximize return on investment (ROI).",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    // Challenge
    chall_title:
      "Male enhancement is a sensitive and highly competitive market. Marketing for medical procedures, particularly those related to male health, presents unique challenges, including:",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/banana_1_omrntq.png",

    chall_dis_title1: "Sensitive subject matter",
    chall_dis1:
      "Marketing male enhancement procedures required a professional and discreet approach to engage potential clients while maintaining credibility and trust.",
    chall_dis_title2: "Ad Regulations & Compliance",
    chall_dis2:
      "Meta’s strict policies on medical advertising led to frequent ad rejections, making it difficult to communicate the benefits of the procedures effectively.",
    chall_dis_title3: "Targeting the Right Audience",
    chall_dis3:
      "Reaching men aged 30-60 who were actively interested in male enhancement while ensuring privacy and discretion required precise audience segmentation.",
    chall_dis_title4: "Account Disabling & Communication Hurdles",
    chall_dis4:
      "Meta initially disabled the ad account, requiring extensive back-and-forth with support to ensure compliance and regain access.",
    //Solution
    sol_title:
      "We developed a comprehensive strategy to overcome these challenges and meet Loria Medical's goals. The approach included",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Creative Ad Copy & Compliant Messaging: ",
    sol_dis1:
      "Crafted professional, informative, and policy-compliant ads emphasizing the safety, effectiveness, and long-term benefits of Loria Medical’s treatments.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "A/B Testing for Optimization: ",
    sol_dis2:
      "Continuously tested various ad creatives, including testimonials, educational posts, and before-and-after visuals, to determine what resonated most with the audience.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Lead Generation Forms: ",
    sol_dis3:
      "Integrated direct lead forms within Meta Ads to streamline the consultation booking process and improve conversion rates.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico4.7f04745c_yjc55e.png",
    sol_dis_title4: "Targeted Audience Segmentation: ",
    sol_dis4:
      " Utilized advanced audience targeting techniques to reach potential clients based on demographics, interests, and online behavior, ensuring higher engagement and quality leads.",
    sol_display1: true,
    sol_display2: false,
    //result
    res_title:
      "Our Meta Ads campaign delivered outstanding results for Loria Medical, significantly boosting brand visibility and lead generation. The key outcomes were",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/magnet_jznxvv.png",
    res_color_title1: "50% Increase in Consultation Bookings:",
    res_dis1:
      "Within three months, the campaign drove a substantial rise in appointment requests, including inquiries for the new lengthening procedures.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shuffle_pgebbx.png",
    res_color_title2: "30% Reduction in Cost-Per-Lead (CPL):",
    res_dis2:
      " Efficient targeting and continuous ad optimization resulted in a significantly lower CPL.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/save_rxz0lm.png",
    res_color_title3: "Above-Average Click-Through Rate (CTR):",
    res_dis3:
      " Engaging content and precisely targeted ads led to high engagement levels, surpassing industry benchmarks.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sales_rgknlr.svg",
    res_color_title4: "15% higher sales",
    res_display1: false,
    res_display2: false,
    //loria_banner
    loria_banner: true,
    // meta title and description
    meta_title: "Loria Medical | Meta Ads Case Study | Zero to 300+ Leads",
    meta_dis:
      "See how Loria Medical generated 300+ leads using Meta Ads. Learn the strategy behind this successful campaign and how it drove business growth."
  },
  //The Grill father
  {
    resultclass: "3",
    solutionclass: "3",
    id: 3,
    slug: "case-grill",
    img: "case/grill.png",
    title: "The Grill Father- Google Ads/ Meta Ads/ SMM / SEO",
    des:
      "By implementing a cohesive digital marketing strategy that included social media marketing, SEO, local SEO, and paid ads...",
    button: "Read case study",
    next_link: "/grill",
    //banner data
    banner_title:
      "Boosting The Grill Father's Burger Sales through Targeted Digital Marketing",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/banner_1_pbbljw.webp",
    about_title: "About The Grill Father",
    about_dis:
      "The Grill Father is a popular burger joint in the UK known for its gourmet burgers and vibrant brand. With a strong local presence, The Grill Father sought to expand its reach, increase online orders, and enhance its overall brand visibility through digital marketing. The restaurant needed a strategy that combined social media marketing, website SEO, local SEO, and paid ads to attract more customers.",
    //ojective data
    objective_title:
      "The main goal for The Grill Father was to increase online and in-store sales by improving their online visibility. Specifically, they aimed to:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/objective_2_nsq6wf.webp",
    dis1: "Boost brand awareness and engagement on social media.",
    dis2: "Improve organic website traffic through SEO optimization.",
    dis3: "Drive more local foot traffic through local SEO.",
    dis4: "Increase conversions using targeted paid ads.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    // Challenge
    chall_title:
      "The Grill Father faced several challenges:",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/challenge_1_tlpquq.svg",

    chall_dis_title1: "High Competition",
    chall_dis1:
      "The UK burger market is saturated, making it difficult to stand out and attract attention online",
    chall_dis_title2: "Local Reach",
    chall_dis2:
      "The Grill Father needed to increase visibility within their local area, particularly among potential customers searching for nearby food options.",
    chall_dis_title3: "Driving Traffic",
    chall_dis3:
      "Despite a well-established local presence, there was a need to translate online engagement into both physical visits and online orders",
    chall_dis_title4: "Brand Consistency",
    chall_dis4:
      "The Grill Father’s online presence lacked uniformity across its digital platforms. Their brand personality was not being consistently communicated across social media, the website, and Google My Business, creating a fragmented customer experience.",
    chall_dis_title5: "Limited Analytics and Insights ",
    chall_dis5: "The restaurant did not have an in-depth understanding of how well their digital marketing efforts were performing. Without proper analytics tracking, it was challenging to optimize campaigns, measure success, and improve the customer journey.",
    //Solution
    sol_title:
      "We employed a streamlined digital marketing strategy for The Grill Father:",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Social Media Marketing: ",
    sol_dis1: "Created engaging posts on Instagram and Facebook to showcase their unique burgers and brand personality, driving customer engagement.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "Website SEO: ",
    sol_dis2:
      " Optimized the site for keywords like “best burgers in the UK,” improving search rankings and online visibility.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Local SEO: ",
    sol_dis3:
      " Enhanced their Google My Business listing and used location-specific keywords to attract nearby customers.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico4.7f04745c_yjc55e.png",
    sol_dis_title4: "Paid Ads: ",
    sol_dis4:
      "Launched targeted Google and Meta ads to promote special offers, driving both online orders and in-store visits.",
    sol_display1: true,
    sol_display2: false,
    //result
    res_title:
      "The digital marketing strategy delivered exceptional results for The Grill Father",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increase_1_chx9po.png",
    res_color_title1: "40% increase",
    res_dis1:
      "In social media engagement, with significant growth in followers and post interactions.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_1_dyuwzd.png",
    res_color_title2: "50% growth",
    res_dis2: "In organic website traffic, driven by improved SEO efforts.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/rise_tjwtcu.png",
    res_color_title3: "30% rise",
    res_dis3:
      " in local foot traffic due to enhanced local SEO and optimized Google My Business listings.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/boost_jfcv2w.png",
    res_color_title4: "25% boost",
    res_dis4:
      "In online orders and in-store visits, thanks to targeted paid ad campaigns and effective promotions.",
    res_display1: true,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "The Grill Father | 360° Digital Marketing Case Study",
    meta_dis:
      "Discover how The Grill Father enhanced its online presence with 360° digital marketing. Read the case study for successful strategies and growth outcomes."
  },
  //Smart Pet Depot
  {
    resultclass: "3",
    solutionclass: "3",
    id: 4,
    slug: "smart-pet",
    img: "case/Pet.png",
    title: " Pet Depot / SHOPIFY",
    des:
      "Smart Pet Depot successfully enhanced its online presence and significantly increased sales through a well-rounded digital marketing...",
    button: "Read case study",
    next_link: "/smartPet",
    //banner data
    banner_title:
      "Elevating Smart Pet Depot’s Sales with Integrated Digital Marketing Strategies",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Banner_1_1_e0pp1k.webp",
    about_title: "About Smart Pet Depot",
    about_dis:
      "Smart Pet Depot is a leading retailer specializing in pet accessories and products. Catering to a diverse range of pet owners, the store offers high-quality items from food and toys to grooming supplies. As the pet industry continues to grow, Smart Pet Depot sought to enhance its online presence and increase sales through effective digital marketing strategies.",
    //ojective data
    objective_title:
      "The primary goal for Smart Pet Depot was to increase brand awareness and drive sales both online and in-store. Specific objectives included:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/objective_1_1_grtfgj.webp",
    dis1: "Growing social media engagement and followers.",
    dis2: "Improving website traffic and search engine rankings through SEO.",
    dis3:
      "Increasing visibility in local searches to attract nearby customers.",
    dis4: "Boosting sales through targeted paid advertising.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    // Challenge
    chall_title: "Smart Pet Depot faced several challenges:",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/challenge_2_xhrpzx.png", //hello//

    chall_dis_title1: "High Competition",
    chall_dis1:
      "The pet accessories market is saturated, making it difficult to stand out among numerous competitors",
    chall_dis_title2: "Limited Online Visibility",
    chall_dis2:
      "While the store had a loyal local customer base, its online presence needed improvement to reach a broader audience",
    chall_dis_title3: "Driving Conversions",
    chall_dis3:
      "There was a need to convert website visitors into paying customers, both for online orders and in-store visits",
    //Solution
    sol_title:
      "We implemented a comprehensive digital marketing strategy tailored to Smart Pet Depot's needs",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Social Media Marketing: ",
    sol_dis1:
      "We developed engaging content for platforms like Instagram and Facebook, featuring pet products and customer testimonials. Interactive posts and promotions helped build a community of pet lovers.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "Website SEO: ",
    sol_dis2:
      "The website was optimized for relevant keywords like “pet accessories online” and “best pet products.” Technical improvements were made to enhance site speed and user experience.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Local SEO: ",
    sol_dis3:
      "We optimized Smart Pet Depot’s Google My Business listing and implemented location-based keywords to improve visibility in local searches and attract customers from the surrounding area.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico4.7f04745c_yjc55e.png",
    sol_dis_title4: "Paid Ads: ",
    sol_dis4:
      "Targeted Google and social media ad campaigns were launched, promoting seasonal sales and best-selling products to drive traffic and boost conversions.",
    sol_display1: true,
    sol_display2: false,
    //result
    res_title:
      "The digital marketing efforts yielded impressive results for Smart Pet Depot",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increase_3_rtbtbv.svg",
    res_color_title1: "35% increase",
    res_dis1:
      "In social media engagement, with significant growth in followers and post interactions.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_3_nhqoux.svg",
    res_color_title2: "45% growth",
    res_dis2: "In organic website traffic due to improved SEO strategies.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/50increase_1_abqfcd.png",
    res_color_title3: "50% increase ",
    res_dis3:
      "In local visibility, attracting more customers from nearby neighborhoods.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/rise_2_eyr2dh.png;",
    res_color_title4: "30% rise",
    res_dis4:
      "In online sales and in-store visits, driven by targeted paid advertising campaigns.",
    res_display1: true,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Smart Pet Depot | 360° Digital Marketing Case Study",
    meta_dis:
      "Learn how Smart Pet Depot leveraged 360° digital marketing to boost brand awareness and sales. Read the case study for effective strategies and results."
  },
  //TechCity
  {
    resultclass: "4",
    solutionclass: "4",
    id: 5,
    slug: "tech-city",
    img: "case/techcity.png",
    title: "TechCity / PHP",
    des:
      "TechCity successfully enhanced its online presence and attracted more customers with our comprehensive...",
    button: "Read case study",
    next_link: "/techcity",
    //banner data
    banner_title:
      "Amplifying TechCity’s Digital Presence with Targeted Digital Marketing Strategies",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Banner_2_gtpv9t.webp",
    about_title: "About TechCity",
    about_dis:
      "TechCity is a reputable mobile phone repair service provider known for its reliable and efficient solutions. Offering a range of services, including screen replacements, battery replacements, and software repairs, TechCity caters to a diverse clientele in the local community. To strengthen its online presence and attract more customers, TechCity sought a comprehensive digital marketing approach.",
    //ojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/obj_oatx3s.webp",
    dis1: "Enhancing brand awareness and visibility in the local market.",
    dis2: "Increasing organic website traffic through improved SEO.",
    dis3: "Engaging more effectively with customers on social media platforms.",
    dis4: "Driving more foot traffic and inquiries through local SEO efforts.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    // Challenge
    chall_title: "TechCity faced several challenges",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/challenge_3_rql30h.svg",

    chall_dis_title1: "Poorly Optimized GMB Profiles ",
    chall_dis1:
      "The multiple GMB profiles lacked consistent information and were not fully optimized for local SEO.",
    chall_dis_title2: "Missing Keywords ",
    chall_dis2:
      "The website did not feature strategically placed keywords, which hurt its search engine rankings.",
    chall_dis_title3: "Inconsistent Posting Practices ",
    chall_dis3:
      "Without a clear posting strategy, the GMB profiles lacked fresh, relevant content, leading to decreased customer interaction.",
    chall_dis_title4: "Lack of Local Citations ",
    chall_dis4: "TechCity was not consistently listed in local directories, which contributed to its weak local SEO presence. The absence of these citations hindered the business’s ability to improve its local search ranking.",
    chall_dis_title5: "High Local Competition ",
    chall_dis5: " The local phone repair market was highly competitive, with multiple businesses vying for visibility and customer attention. Without a strong online presence, TechCity was getting lost in the crowd. ",
    //Solution
    sol_title:
      "To address these challenges, we developed a focused digital marketing strategy for TechCity",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Social Media Marketing: ",
    sol_dis1:
      " We created engaging content for platforms such as Facebook and Instagram, showcasing repair services, customer testimonials, and special promotions. Regular posts and interactive content helped build a community of tech enthusiasts.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "Website SEO: ",
    sol_dis2:
      "The website was optimized for relevant keywords, including “mobile phone repair,” “screen replacement,” and “TechCity repairs.” Improvements were made to the website’s structure and content to enhance its search engine ranking.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Local SEO: ",
    sol_dis3:
      "We optimized TechCity’s Google My Business listing, ensuring accurate information and encouraging customer reviews. Local keywords were incorporated to boost visibility in local search results.",
    sol_display1: false,
    sol_display2: false,
    //result
    res_title:
      "The strategic digital marketing initiatives delivered remarkable results for TechCity",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_4_dcpbks.png",
    res_color_title1: "40% increase ",
    res_dis1:
      "In social media engagement, resulting in a larger follower base and higher interaction rates.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_4_dcpbks.png",
    res_color_title2: "50% growth",
    res_dis2:
      "In organic website traffic, driven by effective SEO strategies and improved keyword targeting.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/60increase_hj3ep5.svg",
    res_color_title3: "60% increase",
    res_dis3:
      "In local search visibility, leading to more inquiries and foot traffic from the surrounding community.",
    res_display1: false,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Techcity Repair t | 360° Digital Marketing Case Study",
    meta_dis:
      "See how Techcity Repair boosted local visibility and attracted more customers with effective local SEO strategies. Read the case study for proven results."
  },
  // Siena Home
  {
    resultclass: "3",
    solutionclass: "3",
    id: 6,
    slug: "siena-home",
    img: "case/home.png",
    title: "Siena Home / SHOPIFY",
    des:
      "Through strategic SEO efforts, Siena Homes successfully enhanced its online presence in the highly competitive home décor...",
    button: "Read case study",
    next_link: "/siena",
    //banner data
    banner_title:
      "Transforming Spaces and Search Rankings: SEO Success for Siena Homes",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/banner_3_khccuc.webp",
    about_title: "About Siena Home",
    about_dis:
      "Siena Homes is a premier online retailer specializing in home décor, furniture, rugs, and other interior design essentials. With a commitment to quality and style, Siena Homes caters to customers looking to elevate their living spaces. Despite having a beautiful collection, the company faced challenges in attracting sufficient online traffic and visibility.",
    //ojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/obj_oatx3s.webp",
    dis1:
      "Boosting organic website traffic by attracting more visitors to the site through search engines, with the goal of increasing sales for their wide range of home décor, furniture, and rugs. This involved driving targeted traffic that is more likely to convert into paying customers.",
    dis2:
      "Improving search engine rankings for high-impact and relevant keywords within the competitive home décor and furniture industry. By ranking higher for terms like 'luxury home décor' and 'modern furniture,' Siena Homes aimed to increase their visibility and outshine competitors.",
    dis3:
      "Enhancing online visibility to position Siena Homes as a trusted and leading destination for stylish, high-quality home products. By building a stronger online presence, the brand sought to become top-of-mind for customers seeking home décor and furniture solutions.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    // Challenge
    chall_title: "Siena Homes faced several challenges",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Challenge_4_ufc4xe.svg",

    chall_dis_title1: "Highly Competitive Market",
    chall_dis1:
      "The home decor and furniture industry is saturated with large, well-established players dominating search results, making it difficult for Siena Homes to compete",
    chall_dis_title2: "Low Keyword Ranking",
    chall_dis2:
      "The website had limited visibility on search engines, with many relevant keywords either ranking poorly or not at all",
    chall_dis_title3: "Under-Optimized Content",
    chall_dis3:
      "The website lacked the necessary SEO optimization, including meta tags, headings, and keyword-rich content, which are crucial for improving rankings",
    //Solution
    sol_title:
      "To address these challenges, we implemented a comprehensive SEO strategy",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Keyword Research and Optimization: ",
    sol_dis1:
      "We conducted thorough keyword research to identify the most relevant and high-volume keywords for home décor, furniture, and rugs. These keywords were strategically integrated into the website’s content, meta descriptions, and headers.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "On-Page SEO Improvements: ",
    sol_dis2:
      "We optimized Siena Homes' website by enhancing title tags, meta descriptions, and alt text for images. We also restructured internal linking and improved the user experience to make the site more SEO-friendly.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.fee6743b_kdlnvo.png",
    sol_dis_title3: "Content Creation: ",
    sol_dis3:
      "To support SEO efforts, we developed high-quality blog content focused on home décor trends, furniture buying guides, and styling tips. This content was crafted to attract traffic and engage customers.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico4.7f04745c_yjc55e.png",
    sol_dis_title4: "Technical SEO Fixes: ",
    sol_dis4:
      "We ensured the website's speed, mobile responsiveness, and structured data were optimized to improve rankings and user experience.",
    sol_display1: true,
    sol_display2: false,
    //result
    res_title:
      "The SEO campaign delivered significant improvements for Siena Homes",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/boost_jfcv2w.png",
    res_color_title1: "40% increase ",
    res_dis1:
      "In organic traffic within the first three months, resulting in a consistent stream of visitors to the website.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/rise_tjwtcu.png",
    res_color_title2: "Top 10 rankings",
    res_dis2:
      "For high-priority keywords like “luxury home décor,” “modern furniture,” and “designer rugs.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_1_dyuwzd.png",
    res_color_title3: "50% growth",
    res_dis3:
      "In website engagement, with visitors spending more time exploring the product pages and blog content.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increase_3_rtbtbv_2.svg",
    res_color_title4: "Notable boost",
    res_dis4:
      "In sales conversions from organic search traffic, contributing to a higher overall revenue.",
    res_display1: true,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    clientreview: "The SEO strategy for Siena Homes successfully increased organic traffic, improved keyword rankings, and enhanced online visibility. With a 40% traffic boost, higher search rankings, and increased engagement, Siena Homes secured its position as a top destination for stylish home décor, driving notable growth in sales and revenue.",
    clientreviewdisplay: "block",
    // meta title and description
    meta_title:
      "Siena Design | SEO Case Study | 350% Increased Organic Traffic",
    meta_dis:
      "Explore how Siena Design achieved a 350% increase in organic traffic with expert SEO strategies. Read the case study for impactful results and insights"
  },
  // Healthy Bedrooms
  {
    clickablecase: "block",
    resultclass: "3",
    solutionclass: "4",
    id: 7,
    slug: "healthy-bedrooms",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Rest Easy with Targeted SEO and Google Ads: Boosting Sales for Healthy Bedroom",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_abbwzk.png",
    about_title: "About Healthy Bedroom",
    about_dis:
      "Healthy Bedroom is a luxury retailer specializing in premium mattresses designed to promote better sleep and overall well-being. Known for its high-quality products, Healthy Bedroom targets customers who prioritize comfort and health in their sleep environment.",
    //bojective data
    objective_title: "The primary objectives for Healthy Bedroom were:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Objective_2_1_slcgqp.webp",
    dis1:
      "Increase online sales of luxury mattresses through improved visibility and targeted traffic.",
    dis2:
      "Boost organic search rankings for key product-related terms in the competitive luxury bedding market.",
    dis3:
      "Strengthen brand authority by establishing Healthy Bedroom as a trusted source for premium, health-focused mattresses.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    //objective google ads 
    dis1_google: "Leverage Google Ads to capture highly motivated, purchase-ready customers and drive immediate conversions.",
    dis2_google: "Maximize return on ad spend (ROAS) by focusing on high-intent keywords and optimizing bidding strategies.",
    dis3_google:
      "Reduce cost per click (CPC) while maintaining or improving conversion rates.",
    objective_banner_google: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/202_5_1_opuysm.png",
    arrowobjtive1_google: "/detailpage/li.png",
    arrowobjtive2_google: "/detailpage/li.png",
    arrowobjtive3_google: "/detailpage/li.png",
    // Challenge
    chall_title: "Healthy Bedroom faced several challenges",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Challenges_vqmu1l.svg",
    chall_dis_title1: "Highly Competitive Market",
    chall_dis1:
      "The luxury mattress industry is filled with established brands dominating both organic and paid search results, making it difficult to stand out",
    chall_dis_title2: "Low Brand Awareness",
    chall_dis2:
      "Despite offering premium products, Healthy Bedroom lacked strong brand recognition, limiting its ability to compete with larger, well-known brands",
    chall_dis_title3: "Limited Keyword Coverage",
    chall_dis3:
      "The website was not fully optimized for critical high-intent search terms, reducing its ability to capture relevant traffic.",
    //challenge_google 
    chall_dis_title1_google: "Underperforming Google Ads Campaigns",
    chall_dis1_google:
      "Previous attempts at Google Ads had delivered poor results, with high costs per click (CPC) and low conversion rates.",
    chall_dis_title2_google: "Ineffective Ad Copy and Targeting",
    chall_dis2_google:
      "TPrior campaigns failed to highlight the unique health benefits of Healthy Bedroom’s mattresses and did not resonate with the target audience",
    chall_dis_title3_google: "Budget Efficiency",
    chall_dis3_google:
      "The ad spend was not optimized, leading to high acquisition costs without corresponding returns.",
    //Solution
    sol_title:
      "To address these challenges, we developed a focused digital marketing strategy for Healthy Bedrooms",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico1.38b6e372_r84hvf.png",
    sol_dis_title1: "Comprehensive Website SEO Overhaul:",
    sol_dis1:
      "We conducted in-depth keyword research and optimized Healthy Bedroom’s website with relevant search terms like 'luxury mattresses,' 'organic mattresses,' and 'best mattress for health.'",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico2.5996297f_ailshk.png",
    sol_dis_title2: "On-Page Optimization:",
    sol_dis2:
      "We implemented improvements to meta tags, headings, and content to better align with search engine algorithms.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/callneedsico3.webp",
    sol_dis_title3: "Content Strategy:",
    sol_dis3:
      "We developed high-quality blog content addressing common customer concerns and questions, positioning Healthy Bedroom as an authority in luxury bedding.",
    sol_display1: false,
    sol_display2: false,
    //solution google
    sol_dis_title1_google: "Targeted Google Ads Campaign: ",
    sol_dis1_google:
      "We restructured the existing Google Ads campaigns, focusing on high-intent keywords such as 'organic mattresses,' 'luxury mattress online,' and 'best mattress for back support.",
    sol_dis_title2_google: "Optimized Ad Copy: ",
    sol_dis2_google:
      "We refined the ad messaging to emphasize the unique health benefits of Healthy Bedroom’s mattresses, appealing to health-conscious buyers.",
    sol_dis_title3_google: "Audience Segmentation: ",
    sol_dis3_google:
      " Detailed audience segmentation and bid strategies were implemented to target purchase-ready customers while reducing unnecessary ad spend.",
    sol_dis_title4_google: "Landing Page Optimization: ",
    sol_dis4_google:
      "We created dedicated landing pages that aligned with ad content, ensuring a seamless and conversion-optimized user experience.",

    //result
    res_title:
      "The SEO campaign delivered significant improvements for healthy Bedrooms Homes",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increase_4_mqaffi.svg",
    res_color_title1: "35% increase",
    res_dis1:
      "In organic traffic, with a noticeable boost in search engine rankings for key mattress-related terms.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Increase_yvf36i_1.svg",
    res_color_title2: "40% increase",
    res_dis2:
      "In average time on site, reflecting better user engagement with optimized content.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/growth_2_jeuqgg.svg",
    res_color_title3: "25% growth",
    res_dis3:
      "In overall online sales, driven by a combination of improved SEO visibility and higher search rankings.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/25_increase_hifpmn_1.svg",
    res_color_title4: "Enhanced brand ",
    res_dis4:
      "Recognition as more customers discovered Healthy Bedroom through organic searches.",
    res_display1: true,
    res_display2: false,

    //result google 
    res_color_title1_google: "50% improvement ",
    res_dis1_google: " In Google Ads conversion rates, while reducing the cost per click (CPC) by 20%.",
    res_color_title2_google: "30% increase",
    res_dis2_google: "In click-through rates (CTR) due to more compelling ad copy and better audience targeting.",
    res_color_title3_google: "25% growth",
    res_dis3_google: " In overall online sales, driven by a combination of improved ad relevance and landing page performance.",
    res_color_title4_google: "Higher ROAS",
    res_dis4_google: "With a notable reduction in acquisition costs and more efficient use of the ad budget.",
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Healthy Bedroom | Hastens Mattress Online Sale Case Study",
    meta_dis:
      "Explore how Healthy Bedroom drove online sales of Hastens Mattresses with targeted strategies. Read the case study for insights into successful e-commerce tactics."
  },
  //zoom-auto-car-rental
  {
    resultclass: "4",
    solutionclass: "3",
    id: 8,
    slug: "zoom-auto-car-rental",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Zoom Auto Car Rentals Drives Business Growth and Brand Awareness with Targeted Meta Ads",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_jl8xhk.png",
    about_title: "Client Overview",
    about_dis:
      "Zoom Auto Car Rentals is a newly established car rental service that aims to offer customers an easy and reliable solution for renting vehicles. With no prior digital marketing experience, the company faced challenges in gaining visibility and trust in a competitive market. They sought to leverage Meta ads to build their brand and drive business growth.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Objective_2_1_slcgqp.webp",

    dis1:
      "Lead Generation: The primary goal was to generate high-quality leads by attracting potential customers who were actively looking for reliable car rental services. This was crucial for building a customer base and driving bookings.",
    dis2:
      "Brand Awareness: Zoom Auto Car Rentals aimed to create a strong presence in a crowded market, raising awareness of their brand among potential customers who were unaware of their services. Establishing recognition would be key to gaining a competitive edge.",
    dis3:
      "Get More Business: Ultimately, the objective was to increase bookings and revenue by converting the leads and awareness generated from the campaigns into tangible business growth",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    // Challenge
    chall_title: "Zoom Auto Car Rental faced several challenges",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_atsxbh.jpg",
    chall_dis_title1: "No Previous Ad Experience",
    chall_dis1:
      "Zoom Auto Car Rentals had never run paid advertisements before, making it challenging to develop an effective strategy and understand which ads would resonate best with their target audience.",
    chall_dis_title2: "Lack of Social Media Presence",
    chall_dis2:
      "The company had no social media presence, limiting their ability to build credibility, engage with potential customers, or create organic awareness for the brand.",
    chall_dis_title3: "Absence of Customer Data",
    chall_dis3:
      "With no prior customer data, it was difficult to implement targeted ads and accurately gauge what would drive the highest-quality leads.",
    chall_dis_title4: "Competitive Market",
    chall_dis4:
      "The car rental industry is highly competitive, with established brands already having a strong foothold in the market. Standing out and getting noticed was a significant challenge.",
    chall_dis_title5: "Quality and Trust Issues",
    chall_dis5:
      "As a new brand, Zoom Auto Car Rentals had to overcome trust and quality concerns from potential customers who were unfamiliar with the company and its services.",
    //Solution

    sol_title:
      "To overcome the challenges and meet the objectives, we implemented the following strategies:",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Social Media Awareness: ",
    sol_dis1:
      "We created engaging social media posts aimed at introducing the brand and its services, establishing Zoom Auto Car Rentals as a reliable service in the market.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "Interest-Based Ads: ",
    sol_dis2:
      "We ran targeted interest-based Meta ads to attract high-quality leads, focusing on individuals likely to need car rental services.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "A/B Testing of Ad Graphics and Services: ",
    sol_dis3:
      "Different types of ad creatives and service offerings were tested to find the most effective approach for engaging potential customers.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Constant Feedback Loop",
    sol_dis4:
      "We maintained continuous feedback with the sales team regarding the quality of leads, optimizing the ads regularly to improve lead conversion rates.",
    sol_display1: true,
    sol_display2: false,
    //result
    res_title:
      "The results showed a constant increase in performance over time",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_15308508_ttvtfo.png",
    res_color_title1: "Lead Generation",
    res_dis1:
      "There was a steady and significant rise in the number of leads generated, with a notable increase in the quality of leads reaching out for services",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_14978564_wajpxw.png",
    res_color_title2: "Brand Awareness",
    res_dis2:
      "As the ad campaigns progressed, brand recognition grew considerably, with more users becoming aware of Zoom Auto Car Rentals.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_3281323_zbnzxt.png",
    res_color_title3: "Business Growth",
    res_dis3:
      "The campaigns directly contributed to an increase in bookings and overall business, proving that strategic Meta ads could effectively target and convert leads.",
    res_display1: false,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    clientreview:
      "Through these efforts, Zoom Auto Car Rentals achieved consistent growth in all areas, including a higher return on ad spend (ROAS), improved brand visibility, and a stronger presence in the competitive car rental market.",
    clientreviewdisplay: "block",
    // meta title and description
    meta_title: "Zoom Auto Car Rentals: How Meta Ads Supercharged Bookings | Base2Brand",
    meta_dis:
      "See how Base2Brand's targeted Meta Ads campaigns helped Zoom Auto Car Rentals double their bookings, increase customer inquiries, and achieve higher engagement with car rental ads."
  },
  // metal press
  {
    resultclass: "4",
    solutionclass: "4",
    id: 9,
    slug: "metal-press",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title: "Dominating Industrial Machinery Market, How Metal Press Achieved Top Search Rankings Through SEO & Strategic Backlinking",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_1_dhccwg.png",
    about_title: "About Metal Press",
    about_dis:
      "Metal Press, a business offering industrial machinery products, aimed to expand its presence in the highly competitive USA and Canadian markets. Despite having a strong product lineup, its new website struggled to gain visibility on search engines. Ranking beyond the top 50 results, Metal Press faced intense competition and required a robust SEO strategy to break into the first page.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/303_1_yoov0h.png",
    dis1: "Boost website visibility in searches.",
    dis2: "Achieve top rankings for keywords.",
    dis3: "Dominate competitive search results.",
    dis4: "Rank higher in USA and Canada.",
    dis5: "Improve SEO for product keywords.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    // Challenge
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_33_ls1ibo.png",

    chall_dis_title1: "Low Website Visibility",
    chall_dis1:
      "Being a new website, Metal Press lacked strong domain authority, which hindered its ranking potential.",
    chall_dis_title2: "High Competition",
    chall_dis2:
      "Competing against established industrial machinery brands made ranking on the first page a difficult task.",
    chall_dis_title3: "Lack of Keyword Optimization",
    chall_dis3:
      "The website had minimal keyword-focused content, making it difficult for search engines to recognize relevant queries.",
    chall_dis_title4: "Weak Backlink Profile",
    chall_dis4:
      "The absence of authoritative backlinks negatively impacted the website’s credibility and SEO performance.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Audit & Keyword Research: ",
    sol_dis1:
      "A comprehensive audit of all three websites was conducted to identify SEO gaps, particularly on product pages. In-depth keyword research was carried out to find high-value keywords related to the client’s products, ensuring they were strategically mapped to the relevant pages.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "On-Page SEO Optimization: ",
    sol_dis2:
      "To improve rankings, meta descriptions, title tags, and H1 tags were optimized with relevant keywords. Content was refined for clarity and keyword placement. Internal linking was implemented to enhance website structure, navigation, and overall search engine visibility.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "Content Strategy: ",
    sol_dis3:
      "Recognizing the power of content marketing, blog posts were suggested and implemented, focusing on industry-specific topics. These articles targeted long-tail keywords, positioning the websites as authoritative sources in their respective niches.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Backlink Strategy: ",
    sol_dis4:
      "To increase domain authority, outreach efforts were initiated to secure high-quality backlinks from niche-related websites. Guest posts, article submissions, and collaborations with industry influencers played a crucial role in strengthening the websites’ online credibility.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Industry Outreach",
    sol_dis5:
      "By reaching out to relevant industry platforms, partnerships were formed to boost visibility and attract organic traffic. These outreach efforts also facilitated the acquisition of authoritative backlinks, further enhancing search rankings.",
    sol_display1: true,
    sol_display2: true,
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_14151121_p4rba5.png",
    res_color_title1: "Traffic Surge",
    res_dis1:
      "The website witnessed a significant increase in organic traffic, leading to higher engagement.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_12768476_vvectt.png",
    res_color_title2: "Top 3 Ranking",
    res_dis2:
      "Achieved top 3 rankings for multiple targeted keywords across USA and Canada.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_17248020_gw419s.png",
    res_color_title3: "First-Page Rankings",
    res_dis3:
      "Successfully moved from top 50 to first-page rankings for highly competitive industrial machinery keywords.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_11182611_gpwe1y.png",
    res_color_title4: "Increased Lead Conversions",
    res_dis4:
      "Higher search rankings resulted in more inquiries and customer conversions.",
    res_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2896830_k1zejk.png",
    res_color_title5: "Enhanced Domain Authority",
    res_dis5:
      "Strong backlink strategy improved the website’s credibility and authority in the industry.",
    res_display1: true,
    res_display2: true,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Healthy Bedroom | Hastens Mattress Online Sale Case Study",
    meta_dis:
      "Explore how Healthy Bedroom drove online sales of Hastens Mattresses with targeted strategies. Read the case study for insights into successful e-commerce tactics.",
    clientreview:
      "Metal Press’s rapid growth in search engine rankings highlights the power of strategic SEO implementation and backlink building. Through keyword optimization, content refinement, and authoritative link-building strategies, the company transformed its online visibility, attracting  more qualified leads and increasing sales opportunities in the competitive industrial machinery market.",
    clientreviewdisplay: "block"
  },
  // vis learning
  {
    resultclass: "3",
    solutionclass: "4",
    id: 10,
    slug: "vis-learning",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title: "Generating 15,000+ Student Leads for VIS Learning",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_2_mzpllz.png",
    about_title: "Client Overview",
    about_dis:
      "VIS Learning is a leading education consultancy dedicated to helping international students pursue higher education in Australia. Their services include student admission assistance, visa guidance, health insurance, skills assessments, and professional year programs. Despite their expertise, VIS Learning faced challenges in generating leads and increasing enrollments due to high competition and a lack of awareness among potential students.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/d608c2d4-f3e3-4776-921b-720e7484b590_1_ldvcfd.png",
    dis1: "Generate a high volume of quality leads for student admissions",
    dis2: "Improve online visibility and engagement through digital marketing",
    dis3: "Lower cost per lead (CPL) to increase ROI",
    dis4: "Strengthen brand presence in the education consultancy industry",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    // Challenge
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_34_rngwsr.png",
    chall_dis_title1: "Low Lead Volume",
    chall_dis1:
      "VIS Learning struggled to attract enough prospective students despite offering valuable educational services.",
    chall_dis_title2: "High Competition",
    chall_dis2:
      "The education consultancy market is saturated, with many agencies targeting the same audience, making it difficult to stand out.",
    chall_dis_title3: "Audience Awareness Gap",
    chall_dis3:
      "Many students were unaware of the benefits of professional year programs, visa assistance, and the admission support offered by VIS Learning, leading to missed opportunities.",
    chall_dis_title4: "Inefficient Lead Nurturing",
    chall_dis4:
      "A lack of structured follow-up strategies meant that many interested leads were lost due to ineffective engagement.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Targeted Google & Meta Ads: ",
    sol_dis1:
      "We launched highly targeted ad campaigns on Google and Meta, focusing on keywords like “Study in Australia” and “Student Visa Assistance.” Engaging ad copies with strong CTAs helped attract students actively searching for study abroad opportunities.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "High-Converting Landing Pages: ",
    sol_dis2:
      "Optimized landing pages were designed for different courses and visa programs, ensuring seamless navigation. Testimonials and student success stories built trust, while streamlined inquiry forms and CTAs improved user experience, increasing engagement and driving higher conversion rates.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "SEO & Content Marketing: ",
    sol_dis3:
      "We implemented an SEO-driven content strategy, publishing informative blogs and guides on studying in Australia. By targeting high-intent keywords and securing authoritative backlinks, we improved search engine rankings and increased organic traffic to VIS Learning’s website.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "WhatsApp & Email Nurturing: ",
    sol_dis4:
      "Automated follow-up sequences via WhatsApp and email kept leads engaged. Personalized messages provided course details, visa updates, and exclusive offers, improving response rates and successfully converting more prospective students into actual enrollments for Australian universities.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Influencer & Community Engagement",
    sol_dis5:
      "We collaborated with student influencers and education communities, leveraging Instagram reels and YouTube videos to enhance brand visibility. Engaging with student forums and online groups helped establish credibility, generating more inquiries through organic social media outreach.",
    sol_img6:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title6: "Performance Tracking & Optimization",
    sol_dis6:
      "Using Google Analytics and Meta Ads Manager, we continuously monitored and optimized campaigns. A/B testing of ad creatives, targeting strategies, and landing pages helped reduce cost per lead while maximizing conversions, ensuring sustainable growth in student enrollments.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "block",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_18584676_hr8pln.png",
    res_color_title1: "15,000+ Qualified Leads",
    res_dis1:
      "Through a well-executed digital marketing strategy, we successfully generated over 15,000 high-quality leads, connecting VIS Learning with students actively seeking higher education opportunities in Australia.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_18419992_wjynak.png",
    res_color_title2: "35% Lower Cost Per Lead",
    res_dis2:
      "By continuously optimizing campaigns and refining audience targeting, we significantly reduced the cost per lead by 35%, ensuring maximum efficiency and better return on investment.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_11021943_djxoxd.png?",
    res_color_title3: "Higher Course Enrollments",
    res_dis3:
      "The surge in qualified leads translated into increased student inquiries and admissions, directly boosting enrollments for various courses and visa programs offered by VIS Learning.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2720573_tdemnr.png",
    res_color_title4: "Stronger Brand Awareness",
    res_dis4:
      "Our strategic campaigns positioned VIS Learning as a trusted education consultancy, increasing brand recognition among international students and reinforcing its credibility in the competitive education sector.",
    res_display1: true,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "VIS Learning Meta Ads & Social Media Case Study | Base2Brand",
    meta_dis:
      "See how Base2Brand leveraged Meta Ads and social media strategies to boost VIS Learning's brand awareness, increase course enrollments, and engage a wider audience effectively.",
    clientreview:
      "By leveraging targeted digital marketing, content creation, and lead nurturing strategies, VIS Learning successfully generated over 15,000 leads. This case study showcases the power of a structured approach in boosting student enrollments and business growth.",
    clientreviewdisplay: "block"
  },
  // ehis-school
  {
    resultclass: "3",
    solutionclass: "4",
    id: 11,
    slug: "ehis-school",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Transforming Education with Strategic Digital Marketing: EHIS School Case Study",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_2_mzpllz_1.png",
    about_title: "About EHIS School",
    about_dis:
      "EHIS School is a prestigious educational institution known for its commitment to holistic development and academic excellence. Despite its strong curriculum and state-of-the-art facilities, the school faced challenges in attracting new admissions and building brand awareness. This case study explores how EHIS School leveraged strategic digital marketing to overcome these obstacles, boost lead quality, and significantly enhance its brand presence.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/macbookproiphone13mockup1fp_1_fyjhza.png",
    dis1:
      "Boost brand awareness for EHIS School, positioning it as a premier educational institution.",
    dis2:
      "Attract high-quality admission leads by targeting parents seeking top-tier education.",
    dis3:
      "Maximize return on investment with optimized ad spending strategies.",
    dis4:
      "Engage prospective parents with compelling messaging that highlights educational excellence.",
    dis5:
      "Maintain a competitive edge through strategic digital marketing and audience targeting.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    // Challenge
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/macbookproiphone13mockup1fp_1_fyjhza.png",
    chall_dis_title1: "No New Admissions and Low Brand Awareness",
    chall_dis1:
      "EHIS School struggled to attract new students due to limited brand visibility and ineffective marketing strategies.",
    chall_dis_title2: "Weak Messaging",
    chall_dis2:
      "Existing campaigns lacked compelling messaging that resonated with the target audience, resulting in low engagement.",
    chall_dis_title3: "Low-Quality Leads",
    chall_dis3:
      "The school’s marketing efforts generated irrelevant leads, failing to convert into actual admissions.",
    chall_dis_title4: "Ineffective Ad Targeting",
    chall_dis4:
      "The school's marketing efforts lacked precision in audience targeting, which led to ad exposure to irrelevant groups, further diluting the chances of conversion into actual admissions.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Advanced Enhanced Conversions: ",
    sol_dis1:
      "We implemented advanced enhanced conversions for accurate tracking, enabling a better understanding of customer journeys and behaviors.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "In-Depth Keyword Research and Ad Structuring: ",
    sol_dis2:
      "We conducted comprehensive keyword research to identify high-intent search terms. Ad groups were structured effectively, ensuring relevant ads reached the right audience at the right time.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "Targeted Campaigns for High-Quality Leads: ",
    sol_dis3:
      "Strategic Google Ads campaigns were launched, specifically targeting parents and guardians actively searching for premium educational institutions. This approach significantly improved lead quality.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Engaging and Relevant Ad Copy: ",
    sol_dis4:
      "Compelling ad copy was crafted to resonate with parents' concerns, such as academic excellence, holistic development, and state-of-the-art facilities. This effectively differentiated EHIS School from competitors.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Continuous Optimization and Tracking: ",
    sol_dis5:
      "We continuously monitored campaign performance, optimizing bids and ad placements for maximum ROI. Advanced tracking allowed us to measure lead quality and conversion rates accurately.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "none",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_1389181_dh3eyd.png",
    res_color_title1: "Increased Brand Awareness",
    res_dis1:
      "The strategic Google Ads campaigns effectively enhanced brand recognition, establishing EHIS School as a prominent name in the education sector.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_7202291_b7xz5n.png",
    res_color_title2: "Boost in High-Quality Leads",
    res_dis2:
      "The targeted campaigns generated over 30 high-quality leads, significantly increasing the chances of conversion to actual admissions.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_11182611_gpwe1y_1.png",
    res_color_title3: "Improved Lead Relevance and Engagement",
    res_dis3:
      "By refining messaging and targeting, the campaigns attracted relevant leads, with parents actively exploring admission details and school programs.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_17321247_kvuzoj.png",
    res_color_title4: "Enhanced Admissions and Brand Presence",
    res_dis4:
      "The strategic approach successfully boosted the school’s admissions, solidifying EHIS School’s position as a trusted educational institution.",
    res_display1: true,
    res_display2: false,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "EHIS School Google Ads & Meta Ads Case Study | Base2Brand",
    meta_dis:
      "Explore how Base2Brand boosted EHIS School’s online presence and student inquiries through optimized Google Ads and Meta Ads campaigns, driving quality leads and higher engagement.",
    clientreview:
      "EHIS School’s remarkable journey from low brand awareness to a significant increase in high-quality leads showcases the power of strategic digital marketing. By leveraging advanced Google Ads techniques and enhancing audience engagement, EHIS School not only improved its lead quality but also established itself as a leading educational institution in a competitive market.",
    clientreviewdisplay: "block"
  },
  // warley superstore
  {
    resultclass: "4",
    solutionclass: "4",
    id: 12,
    slug: "warley-superstore",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Boosted Local Visibility, Enhanced Engagement, and Increased Foot Traffic with Expert Local SEO and GMB Optimization!",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_2_mzpllz_2.png",
    about_title: "About Warley Store",
    about_dis:
      "Warley Store is a well-established superstore based in Australia, providing a wide range of products to its local customers. Despite having a strong physical presence, the store faced challenges with its digital visibility, especially in terms of its Google My Business (GMB) profile.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_37_wuy9o2.png",
    dis1: "Improve GMB ranking to increase online visibility.",
    dis2: "Drive more local foot traffic to the store.",
    dis3:
      "Build a stronger online presence for the business in local searches.",
    dis4: "Attract more customer interactions through GMB profile engagement.",
    dis5: "Enhance overall local SEO to outperform competitors in the area.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    // Challenge
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_36_u1twzp.png",
    chall_dis_title1: "Low GMB Ranking",
    chall_dis1:
      "The store was ranked poorly on local search results, limiting its exposure and customer reach.",
    chall_dis_title2: "Inconsistent Profile Management",
    chall_dis2:
      "The store’s GMB profile was not regularly updated, which led to missed opportunities for engagement.",
    chall_dis_title3: "Improper Listing Practices",
    chall_dis3:
      "The store had not optimized its GMB profile for local SEO, which impacted its ability to attract customers in the area.",
    chall_dis_title4: "Low Profile Activity",
    chall_dis4:
      "There was little to no interaction with the GMB profile, resulting in a lack of engagement from potential customers.",
    chall_dis_title5: "High Competition in the Local Market",
    chall_dis5:
      "Warley Store faced stiff competition from other local businesses, making it harder to stand out in search results.",
    chall_dis_title6: "No Website for Additional SEO Support",
    chall_dis6: "The absence of a website made it challenging to support the GMB profile with further SEO efforts, limiting overall search engine visibility.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "GMB Audit: ",
    sol_dis1:
      "We started by conducting a comprehensive audit of Warley Store’s GMB profile to identify gaps in optimization. The audit revealed areas for improvement such as missing information, incorrect categories, and inadequate updates.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "Daily Updates: ",
    sol_dis2:
      "To keep the profile active and engaging, we implemented a daily posting strategy, sharing updates about special offers, new products, and promotions. These posts helped increase engagement and visibility on the GMB profile.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "Business Listings: ",
    sol_dis3:
      "We created and optimized local citations across various local directories. This helped improve the store’s online presence and local SEO ranking, further boosting its visibility in local search results.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Content Strategy: ",
    sol_dis4:
      "We developed a content strategy focusing on GMB posts, Q&A updates, and customer reviews. Encouraging positive reviews and responding to customer inquiries boosted Warley Store's reputation and engagement with prospective customers.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Competitor Analysis: ",
    sol_dis5:
      "We performed an analysis of nearby competitors and adjusted Warley Store’s strategy accordingly. By identifying strengths and weaknesses in competitor profiles, we enhanced Warley Store's GMB profile to be more competitive.",
    sol_img6:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title6: "Profile Optimization: ",
    sol_dis6:
      "We updated the business categories, services, and attributes of the GMB profile for higher relevance. This made the profile more aligned with the store’s offerings and optimized for local searches.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "block",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_27_ocjgnl.png",
    res_color_title1: "Interactions",
    res_dis1:
      "User engagement on the GMB profile doubled, with more people interacting with posts, viewing the store’s services, and reading reviews.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_28_imfpai.png",
    res_color_title2: "Ranking",
    res_dis2:
      "The store achieved the #1 position for local search, making it the first business potential customers see when searching for relevant products.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_29_twzsbb.png",
    res_color_title3: "Monthly Interactions",
    res_dis3:
      "Engagement with the GMB profile skyrocketed to over 2,000 interactions per month, showing a clear improvement in customer interest and activity.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_30_zfswno.png",
    res_color_title4: "Calls",
    res_dis4:
      "The store generated more than 200 calls per month through its GMB profile, directly contributing to more customer inquiries and potential sales.",
    res_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_31_jpbz7n.png",
    res_color_title5: "Store Visits",
    res_dis5:
      "The store saw a consistent increase in foot traffic, with over 2,000 direction requests monthly, resulting in more physical store visits and conversions.",
    res_display1: true,
    res_display2: true,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Warley Store Local SEO Case Study | Base2Brand",
    meta_dis:
      "See how Base2Brand’s Local SEO strategy brought Warley Store significant results, with double the phone calls and increased in-store visits, boosting foot traffic and sales.",
    clientreview:
      "Warley Store's transformation through strategic Google My Business optimization showcases the power of effective digital marketing in boosting local visibility and driving foot traffic. By implementing a robust GMB optimization strategy, including daily updates, business listings, and competitor analysis, Warley Store was able to improve its ranking, engagement, and overall customer interactions, positioning itself as a top contender in a competitive market.",
    clientreviewdisplay: "block"
  },
  // duracrafts-furniture
  {
    clickablecase: "block",
    resultclass: "3",
    solutionclass: "4",
    id: 13,
    slug: "duracrafts-furniture",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Driving Sales and Brand Awareness through Strategic Digital Marketing Techniques",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480243_rlyet8.png",
    about_title: "About DuraCrafts Furniture",
    about_dis:
      "DuraCrafts Furniture is a new, high-quality furniture brand that specializes in offering premium, handcrafted pieces for modern homes. Based in Melbourne, the company prides itself on providing durable, stylish furniture that combines comfort with sophistication. With a sole physical location, DuraCrafts Furniture faced significant challenges in marketing its products and reaching potential customers effectively. This case study highlights how DuraCrafts Furniture overcome its challenges through a tailored digital marketing strategies, focusing on increasing online visibility, driving sales, and building customer trust in a competitive market.",
    //bojective data
    objective_title: "The primary objectives for Duracrafts Furniture were:",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb_1.png",
    dis1: "Increase online visibility to ensure DuraCrafts Furniture ranks for key furniture-related keywords.",
    dis2: "Improve search engine rankings to appear at the top of search results for quality furniture.",
    dis3:
      "Drive organic traffic to the website, reaching a larger audience of potential customers.",
    dis4: "Convert organic website traffic into buyers by optimizing the website’s user experience.",
    dis5: "Optimize on-page SEO elements, including target keywords, meta tags, and image alt texts.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    //objective google ads 
    dis1_google: "Increase sales through targeted Google Ads campaigns.",
    dis2_google: "Optimize conversion tracking for accurate data and better campaign performance.",
    dis3_google:
      "Improve audience engagement to boost return on ad spend (ROAS).",
    dis4_google: "Strengthen brand awareness and trust by showcasing product quality and craftsmanship.",
    objective_banner_google: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb_1.png",
    arrowobjtive1_google: "/detailpage/li.png",
    arrowobjtive2_google: "/detailpage/li.png",
    arrowobjtive3_google: "/detailpage/li.png",
    arrowobjtive4_google: "/detailpage/li.png",
    //objective meta ads 
    dis1_meta: "Meta Ads were used to spread awareness about DuraCrafts Furniture’s products, showcasing the authenticity, craftsmanship, and value of the brand.",
    dis2_meta: " Ads on Facebook and Instagram were designed to attract users to the website and encourage them to make purchases.",
    dis3_meta: "Location-based ads were used to drive traffic to DuraCrafts Furniture’s physical store, promoting exclusive in-store offers and events to encourage visits.",
    objective_banner_meta: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb_1.png",
    arrowobjtive1_meta: "/detailpage/li.png",
    arrowobjtive2_meta: "/detailpage/li.png",
    arrowobjtive3_meta: "/detailpage/li.png",
    // Challenge 1
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_37_d7uz2w.png",
    chall_dis_title1: "New Website with No SEO Optimization",
    chall_dis1:
      "DuraCrafts Furniture started with a brand-new website, with no existing SEO efforts in place. This meant there was no organic traffic, rankings, or domain authority.",
    chall_dis_title2: "Zero Traffic and Rankings",
    chall_dis2:
      "As a new business, the website had no online presence, which made it challenging to stand out in a highly competitive furniture market.",
    chall_dis_title3: "Low Domain Authority",
    chall_dis3:
      "Without backlinks or established credibility, the brand lacked authority, which negatively impacted its ability to rank higher on search engines.",
    challcol5: "none",
    challcol4: "none",
    //challenge_google 
    chall_dis_title1_google: "Low Sales and Poor Ad Performance",
    chall_dis1_google:
      "Initially, the Google Ads account was misconfigured, which led to low-quality conversions and poor sales performance.",
    chall_dis_title2_google: "Incorrect Conversion Tracking",
    chall_dis2_google:
      "The absence of accurate conversion tracking resulted in poor data, which made it difficult to optimize campaigns and gauge success.",
    chall_dis_title3_google: "Audience Engagement Issues",
    chall_dis3_google:
      "The lack of effective engagement with audiences meant that potential customers weren’t connecting with the ads, leading to fewer conversions and a lower return on ad spend (ROAS).",
    //challenge_meta 
    chall_dis_title1_meta: "New Brand in a Competitive Market",
    chall_dis1_meta:
      "As a new entrant in the furniture market, DuraCrafts Furniture had to compete against established brands with larger budgets and better brand recognition.",
    chall_dis_title2_meta: "Limited Physical Store Visits",
    chall_dis2_meta:
      "With a single location, the brand struggled to generate foot traffic and get local customers to visit the store.",
    chall_dis_title3_meta: "High-Value Furniture Products",
    chall_dis3_meta:
      "Furniture is a high-value purchase, and many customers were hesitant to make a decision without experiencing the products firsthand.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Competitor Research: ",
    sol_dis1:
      "We conducted in-depth competitor research to analyze successful strategies used by similar brands. By identifying gaps in their SEO efforts, we developed a strategy to outperform them.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "Keyword Mapping: ",
    sol_dis2:
      "We meticulously mapped long-tail, high-volume, and low-difficulty keywords that aligned with each page’s purpose and the search intent of customers. These keywords were strategically placed across product pages, category pages, and blog content to attract relevant traffic.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "On-Page SEO Optimization: ",
    sol_dis3:
      "To ensure that DuraCrafts Furniture’s pages were fully optimized, we adjusted meta tags, titles, H1 tags, and alt text for images. This provided a clear signal to search engines about the relevance of the content.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Backlink Building: ",
    sol_dis4:
      "We implemented a backlink strategy, targeting high-authority sites for link-building opportunities. This significantly boosted the brand’s domain authority, signaling to search engines that DuraCrafts Furniture was a credible source.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Local SEO Strategy: ",
    sol_dis5:
      "Given that DuraCrafts Furniture operates in Australia, we focused on local SEO. This included optimizing for location-based searches and claiming and optimizing the Google My Business (GMB) profile.",
    sol_img6:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title6: "Content Strategy: ",
    sol_dis6:
      "We published relevant, high-quality content such as blog posts, product descriptions, and guides that catered to the target audience’s search intent. This helped improve organic rankings and build trust with potential customers.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "block",

    //solution google
    sol_dis_title1_google: "Account Restructuring: ",
    sol_dis1_google:
      " We restructured the Google Ads account by organizing campaigns based on product categories, geographical areas, and customer intent. This helped us fine-tune targeting and maximize ad effectiveness.",
    sol_dis_title2_google: "Conversion Tracking Optimization: ",
    sol_dis2_google:
      "Proper conversion tracking was set up to monitor key actions such as purchases, form submissions, and phone calls. This enabled data-driven optimization and better decision-making.",
    sol_dis_title3_google: "Improved Ad Creatives: ",
    sol_dis3_google:
      "We updated ad creatives to make them more visually appealing and aligned with the brand’s identity. The ads now showcased real product images and promoted the brand’s unique selling points, such as high-quality materials and craftsmanship.",
    sol_dis_title4_google: "Backlink Building: ",
    sol_dis4_google:
      "We implemented a backlink strategy, targeting high-authority sites for link-building opportunities. This significantly boosted the brand’s domain authority, signaling to search engines that DuraCrafts Furniture was a credible source.",
    sol_dis_title5_google: "Refined Targeting: ",
    sol_dis5_google:
      "The targeting strategy was revamped to focus on customers who were actively searching for furniture in Melbourne. We also targeted users who had shown interest in similar products, creating custom audiences that were more likely to convert.",
    sol_dis_title6_google: "Optimized Campaign Settings: ",
    sol_dis6_google:
      "We adjusted campaign settings to ensure ads were shown at the right time of day, targeting the optimal audience, and using bidding strategies that maximized return on investment.",

    //solution google
    sol_dis_title1_meta: "Awareness Campaigns: ",
    sol_dis1_meta:
      "We ran awareness campaigns to generate traffic on the website and social media profiles. These campaigns targeted potential customers interested in premium-quality furniture and promoted the unique aspects of the brand, such as craftsmanship and style.",
    sol_dis_title2_meta: "Physical Location Ads: ",
    sol_dis2_meta:
      " We ran ads targeting users near the store, offering special discounts to drive foot traffic. Additionally, we used offline marketing such as flyers to further promote the in-store experience.",
    sol_dis_title3_meta: "CBO & ABO Campaigns: ",
    sol_dis3_meta:
      "We tested multiple audience segments using both Campaign Budget Optimization (CBO) and Ad Set Budget Optimization (ABO) to determine the most responsive audience. The campaigns focused on the best-selling products to attract more conversions.",
    sol_dis_title4_meta: "Seasonal and Promotional Offers: ",
    sol_dis4_meta:
      "We launched limited-time promotions such as Summer Sales, Black Friday Sales, and other seasonal offers. These generated excitement and urgency among customers, boosting both online and offline sales.",
    sol_dis_title5_meta: "Video Ads for Trust Building: ",
    sol_dis5_meta:
      " To establish credibility, we created video ads showing the physical store, product demonstrations, and the brand’s commitment to quality. These videos reassured potential customers that DuraCrafts Furniture offered high-quality, durable furniture made in Australia.",
    sol_dis_title6_meta: "Optimized Campaign Settings: ",
    sol_dis6_meta:
      "We adjusted campaign settings to ensure ads were shown at the right time of day, targeting the optimal audience, and using bidding strategies that maximized return on investment.",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_1968568_fvnhss.png",
    res_color_title1: "400 clicks/month",
    res_dis1:
      "Website traffic surged from zero to 400 clicks per month within two months.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2631088_ktmacp.png",
    res_color_title2: "27,000 impressions/month",
    res_dis2:
      "Impressions grew from zero to 27,000 per month, indicating increased content visibility.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_1674969_ma2ktu.png",
    res_color_title3: "Domain Authority 10",
    res_dis3:
      "Domain authority increased from zero to 10, improving search engine rankings.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2282580_yibj1n.png",
    res_color_title4: "Top 15-20 rankings",
    res_dis4:
      "Improved keyword rankings, moving from no rankings to top 15-20 positions, enhancing visibility.",
    res_display1: true,
    res_display2: false,
    //result google 
    res_color_title1_google: "5X ROAS",
    res_dis1_google:
      "The Google Ads campaign delivered a remarkable 5X return on ad spend, substantially improving profitability for the brand.",
    res_color_title2_google: "200% Increase in Sales",
    res_dis2_google:
      "Sales doubled after implementing optimized targeting and refined campaign settings, driving higher conversion rates.",
    res_color_title3_google: "Increased Sales and Conversions",
    res_dis3_google:
      " With accurate data, optimized campaigns, and enhanced targeting, DuraCrafts Furniture experienced a significant uptick in sales and conversion rates.",
    res_color_title4_google: "Brand Awareness and Trust",
    res_dis4_google:
      "The Google Ads strategy effectively built brand awareness, increased trust among potential customers, and highlighted quality and craftsmanship.",
    //result meta 
    res_color_title1_meta: "Brand Visibility",
    res_dis1_meta:
      "Through Facebook and Instagram ads, DuraCrafts Furniture gained significant visibility, with increased social media engagement and brand recognition.",
    res_color_title2_meta: "Increased Foot Traffic",
    res_dis2_meta:
      "The combination of location-based ads and in-store promotions resulted in a noticeable increase in physical store visits.",
    res_color_title3_meta: "Sales Growth",
    res_dis3_meta:
      "The ads drive traffic to the website, converting more visitors into buyers, and contributing to a higher conversion rate and overall sales growth.",
    res_color_title4_meta: "Trust and Customer Confidence",
    res_dis4_meta:
      " With the video ads and authentic content, customers felt more confident purchasing furniture online, knowing they were dealing with a reputable brand.",
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Duracraft Furniture SEO & Ads Case Study | Base2Brand",
    meta_dis:
      "See how Base2Brand helped Duracraft Furniture grow their online presence with expert SEO, Meta Ads, and Google Ads strategies, increasing traffic and sales.",
    clientreview:
      "Warley Store's transformation through strategic Google My Business optimization showcases the power of effective digital marketing in boosting local visibility and driving foot traffic. By implementing a robust GMB optimization strategy, including daily updates, business listings, and competitor analysis, Warley Store was able to improve its ranking, engagement, and overall customer interactions, positioning itself as a top contender in a competitive market.",
    clientreviewdisplay: "none"
  },
  // barbell
  {
    clickablecase: "none",
    resultclass: "4",
    solutionclass: "4",
    id: 14,
    slug: "barbell",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Transforming Strength with Innovation: Discover Barbell 2.0 – Powered by Strategic Google Ads",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_2_mzpllz_3.png",
    about_title: "About Barbell 2.0",
    about_dis:
      "Barbell 2.0 is an innovative, high-end barbell brand known for its advanced technology and exceptional durability. Designed for serious fitness enthusiasts and professional athletes, Barbell 2.0 offers a premium experience with enhanced grip, stability, and safety features. This case study explores how Barbell 2.0 leveraged a targeted Google Ads strategy to build brand awareness, drive sales, and gain customer trust, ultimately carving out its space in a saturated market.",
    //bojective data
    objective_title: "The primary objectives for Barbell 2.0 Were",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/202_5_1_opuysm_1.png",
    dis1: "Build brand awareness for Barbell 2.0 among fitness enthusiasts and professional athletes.",
    dis2: "Drive traffic to the website, particularly from users with high purchase intent.",
    dis3:
      "Increase online sales, achieving a consistent revenue stream of $3K–$5K per month.",
    dis4: "Establish credibility and trust for a premium product with a higher price point.",
    dis5: "Optimize ad spend to maximize return on investment (ROI).",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    //objective google ads 
    dis1_google: "Build brand awareness for Barbell 2.0 among fitness enthusiasts and professional athletes.",
    dis2_google: "Drive traffic to the website, particularly from users with high purchase intent.",
    dis3_google:
      "Increase online sales, achieving a consistent revenue stream of $3K–$5K per month.",
    dis4_google: "Establish credibility and trust for a premium product with a higher price point.",
    dis5_google: "Optimize ad spend to maximize return on investment (ROI).",
    objective_banner_google: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/202_5_1_opuysm_1.png",
    arrowobjtive1_google: "/detailpage/li.png",
    arrowobjtive2_google: "/detailpage/li.png",
    arrowobjtive3_google: "/detailpage/li.png",
    arrowobjtive4_google: "/detailpage/li.png",
    arrowobjtive5_google: "/detailpage/li.png",
    //objective meta ads 
    dis1_meta: "Meta Ads were used to spread awareness about DuraCrafts Furniture’s products, showcasing the authenticity, craftsmanship, and value of the brand.",
    dis2_meta: " Ads on Facebook and Instagram were designed to attract users to the website and encourage them to make purchases.",
    dis3_meta: "Location-based ads were used to drive traffic to DuraCrafts Furniture’s physical store, promoting exclusive in-store offers and events to encourage visits.",
    objective_banner_meta: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/22_1_xcgrpb_1.png",
    arrowobjtive1_meta: "/detailpage/li.png",
    arrowobjtive2_meta: "/detailpage/li.png",
    arrowobjtive3_meta: "/detailpage/li.png",
    // Challenge
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/susinesswoman-holding-chess-figure-her-hands-smart-moves-strategy-business_s3vtrr.png",
    chall_dis_title1: "New Brand with Zero Awareness",
    chall_dis1:
      "Barbell 2.0 faced challenges as a new fitness brand with no visibility. Customers were hesitant to trust a premium product from an unknown name.",
    chall_dis_title2: "High Price Point",
    chall_dis2:
      "Barbell 2.0’s advanced features came at a higher cost than traditional barbells. Convincing price-sensitive customers of its unique value was challenging.",
    chall_dis_title3: "Competitive Market",
    chall_dis3:
      "Competing in the crowded fitness industry was tough, with established brands dominating searches. Barbell 2.0 needed a strategic approach to stand out.",
    chall_dis_title4: "Lack of Customer Trust",
    chall_dis4:
      "Being a new brand, Barbell 2.0 struggled to gain trust. Without customer reviews, proving the product’s durability and innovation was difficult.",

    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Enhanced Website UI/UX: ",
    sol_dis1:
      "We optimized the website for a seamless shopping experience. Improved site speed, engaging product pages with detailed descriptions, and strategically placed CTAs significantly boosted user engagement and purchase conversions.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "Strategic Google Ads Campaigns: ",
    sol_dis2:
      "We launched highly targeted Google Ads campaigns, guiding customers from awareness to purchase. Remarketing ads effectively re-engaged visitors, driving conversions with compelling offers and limited-time discounts.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "Audience Targeting and Segmentation: ",
    sol_dis3:
      "We meticulously segmented audiences by fitness interests and demographics. By targeting fitness enthusiasts, professional athletes, and home gym owners, we ensured ads reached those most likely to buy.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "High-Quality, Engaging Visuals: ",
    sol_dis4:
      "We used high-resolution images and engaging videos showcasing Barbell 2.0’s advanced features. Visually appealing ads built strong brand credibility and attracted fitness-focused customers effectively.",
    sol_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "Ad Copy Optimization: ",
    sol_dis5:
      "We crafted compelling ad copy directly addressing customer needs like durability and enhanced grip. Emphasizing Barbell 2.0’s unique features effectively differentiated it from competitors, boosting conversions.",
    sol_img6:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title6: "Conversion Tracking and Optimization: ",
    sol_dis6:
      "Comprehensive conversion tracking identified top-performing ads and customer behaviors. We optimized bids, adjusted ad placements, and allocated budgets effectively, maximizing ROI and ensuring successful campaign performance.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "block",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_4721635_pbxkoj.png",
    res_color_title1: "Increased Brand Awareness",
    res_dis1:
      "Strategic Google Ads campaigns significantly boosted brand recognition. Thousands of impressions increased visibility, effectively introducing Barbell 2.0 to its target audience.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_26_aof70e.png",
    res_color_title2: "Boost in Website Traffic and Engagement",
    res_dis2:
      "Website traffic surged, with increased page views and longer session durations. Visitors actively explored product details, demonstrating heightened interest and engagement.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_15740431_gnsq3q.png",
    res_color_title3: "Sales Growth from $0 to $3K–$5K per Month",
    res_dis3:
      "Barbell 2.0 achieved consistent monthly sales growth, reaching $3K to $5K. This success showcased effective brand positioning in a competitive market.",
    res_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_2896830_1_yajcfw.png",
    res_color_title4: "Improved Conversion Rate",
    res_dis4:
      "Remarketing strategies and optimized UI/UX enhanced the conversion rate. Returning visitors confidently completed purchases, driving higher sales and customer satisfaction.",
    res_img5:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_12447498_fqy1nl.png",
    res_color_title5: "Established Brand Credibility and Trust",
    res_dis5:
      "High-quality visuals and targeted messaging communicated Barbell 2.0’s premium value. This effectively built trust, overcoming the challenges of a new brand.",
    res_display1: true,
    res_display2: true,
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Barbell 2.0 Google Ads & Meta Ads Case Study | Base2Brand",
    meta_dis:
      "Learn how Base2Brand improved Barbell 2.0's advertising performance using targeted Google Ads and Meta Ads campaigns, driving higher engagement and sales.",
    clientreview:
      "Barbell 2.0’s journey from zero brand awareness to consistent monthly sales is a testament to the power of strategic digital marketing techniques. By leveraging Google Ads and enhancing the user experience, Barbell 2.0 was able to build brand recognition, drive traffic, and establish itself as a trusted player in the competitive fitness equipment market.",
    clientreviewdisplay: "block"
  },
  //rolly-receipts
  {
    clickablecase: "block",
    resultclass: "4",
    solutionclass: "4",
    id: 15,
    slug: "rolly-receipts",
    img: "case/healthyBedrooms.jpg",
    title: "Healthy Bedrooms / PHP",
    des:
      "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
    button: "Read case study",
    next_link: "/healthyBedrooms",
    //banner data
    banner_title:
      "Fueling Website Traffic and B2B Growth with Strategic SEO Solutions and Innovative Email Marketing!",
    banner_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480085_2_mzpllz_4.png",
    about_title: "About Rolly Receipt ",
    about_dis:
      "Rolly Receipt is a U.S.-based company specializing in eco-friendly, smokeable receipt paper, primarily serving bakery shops and other businesses. Their mission is to reduce waste by offering sustainable alternatives to traditional receipt paper. In addition, Rolly Receipt provides Smokeable Receipt ATMs, Eco-Friendly ATMs, and Smokeable Receipt Credit Card Processing, helping businesses enhance their sustainability efforts while offering unique, environmentally conscious solutions to customers.",
    //bojective data
    objective_title: "",
    objective_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/78_4_lwszyd.png",
    dis1: "Increase organic traffic by optimizing on-page SEO and targeting high-conversion keywords.",
    dis2: "Enhance website visibility on search engines through targeted link-building strategies.",
    dis3:
      "Improve keyword rankings for product-based searches to attract qualified leads.",
    dis4: "Boost local search presence to drive foot traffic and increase business conversions.",
    dis5: "Optimize content for both users and search engines, improving engagement and site authority.",
    arrowobjtive1: "/detailpage/li.png",
    arrowobjtive2: "/detailpage/li.png",
    arrowobjtive3: "/detailpage/li.png",
    arrowobjtive4: "/detailpage/li.png",
    arrowobjtive5: "/detailpage/li.png",
    //objective meta ads 
    dis1_meta: "Drive B2B growth by reaching a wider audience through personalized email campaigns",
    dis2_meta: "Increase brand awareness of Rolly Receipts’ eco-friendly, smokeable receipt paper.",
    dis3_meta: "Boost conversions by educating businesses on the benefits of sustainable receipt solutions.",
    dis4_meta: "Expand reach across the U.S. by targeting industry-specific segments with tailored email content.",
    dis5_meta: "Enhance customer retention with automated, personalized follow-ups and offers.",
    objective_banner_meta: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/78_4_lwszyd.png",
    arrowobjtive1_meta: "/detailpage/li.png",
    arrowobjtive2_meta: "/detailpage/li.png",
    arrowobjtive3_meta: "/detailpage/li.png",
    arrowobjtive4_meta: "/detailpage/li.png",
    arrowobjtive5_meta: "/detailpage/li.png",
    // Challenge 
    chall_title: "",
    chall_banner:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/targeting-business-concept-businessman-touch-red-arrow-dart-virtual-target-dartboard-executive-marketing-investment-goal-target-business-investment-concept-mini-home_klrg92.png",
    chall_dis_title1: "SEO Unfriendly Website",
    chall_dis1:
      "The website wasn’t optimized for search engines, leading to poor rankings.",
    chall_dis_title2: "Low Traffic & Visibility",
    chall_dis2:
      "With minimal traffic, Rolly Receipts’ website was not showing up for key product searches.",
    chall_dis_title3: "Poor Ranking for Product Searches",
    chall_dis3:
      "The website’s pages did not rank for crucial product-based keywords related to eco-friendly and smokeable receipt paper.",

    //challenge_meta 
    chall_dis_title1_meta: "Low Brand Awareness",
    chall_dis1_meta:
      "Although the product was innovative, many potential business customers were unaware of its existence.",
    chall_dis_title2_meta: "Long Sales Cycle",
    chall_dis2_meta:
      " In B2B, the decision-making process is typically longer and requires more nurturing.",
    chall_dis_title3_meta: "Product Education",
    chall_dis3_meta:
      "Educating businesses about the unique benefits of smokeable receipts and eco-friendly alternatives was key for conversions.",
    //Solution

    sol_title: "",
    sol_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title1: "Keyword Mapping: ",
    sol_dis1:
      "We began with thorough keyword research for every page of the website. Relevant keywords were mapped to each page to ensure proper integration into the content. These keywords focused on product features and the eco-friendly aspect of Rolly Receipts' offerings.",
    sol_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title2: "On-Page SEO Optimization: ",
    sol_dis2:
      "The website’s on-page elements were optimized to be SEO-friendly. This included adjusting meta tags, titles, H1 tags, and content to improve relevance and readability for both search engines and visitors.",
    sol_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title3: "Off-Page SEO: ",
    sol_dis3:
      "To build authority and credibility, we implemented an off-page SEO strategy. This involved posting articles on external websites, writing blogs, and securing high-quality backlinks to drive traffic and improve rankings.",
    sol_img4:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title4: "Content Strategy: ",
    sol_dis4:
      "SEO-optimized content was created, focusing on Rolly Receipts' unique products and their benefits. The content highlighted long-tail keywords that targeted specific business industries such as cafes, retail stores, and eco-conscious businesses.",
    sol_img5: "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5: "A/B Testing & Continuous Optimization",
    sol_dis5:
      "Continuous optimization was key to maximizing campaign success. We tested subject lines, email designs, CTA placements, and send times to improve open rates, click-through rates, and conversions. A/B testing allowed us to refine campaigns for better results.",
    sol_display1: true,
    sol_display2: true,
    solutioncol6: "none",
    //solution email
    sol_dis_title1_meta: "Building a High-Quality Email List",
    sol_dis1_meta:
      "We segmented the audience by industry, focusing on dispensaries, vape shops, health food stores, and coffee shops. Lead magnets like free samples and eBooks encouraged sign-ups, with a double opt-in process ensuring a high-quality subscriber list.",
    sol_dis_title2_meta: "Personalization & Segmentation ",
    sol_dis2_meta:
      "Emails were personalized according to business type, such as dispensaries and coffee shops, showcasing how Rolly Receipts' products addressed their specific needs. Subscribers were segmented by engagement levels and regional needs to ensure relevant, targeted messaging for each audience.",
    sol_dis_title3_meta: "Content That Educates and Converts",
    sol_dis3_meta:
      "Our emails combined product education with compelling messaging. We emphasized the eco-friendly nature, cost savings, and uniqueness of smokeable receipts. Success stories and limited-time offers, like free samples and discounts, helped increase engagement and drive conversion.",
    sol_dis_title4_meta: "Automated Drip Campaigns",
    sol_dis4_meta:
      "We set up multi-step workflows to nurture leads and boost conversions. Welcome series emails introduced the brand and mission, while lead nurturing followed up with interested businesses. Cart abandonment emails reminded users to complete requests or purchases.",
    // sol_img5:"https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480006_1_uyzosw.png",
    sol_dis_title5_meta: "A/B Testing & Continuous Optimization",
    sol_dis5_meta:
      "Continuous optimization was key to maximizing campaign success. We tested subject lines, email designs, CTA placements, and send times to improve open rates, click-through rates, and conversions. A/B testing allowed us to refine campaigns for better results.",
    sol_dis_title6_meta: "Optimized Campaign Settings: ",
    sol_dis6_meta:
      "We adjusted campaign settings to ensure ads were shown at the right time of day, targeting the optimal audience, and using bidding strategies that maximized return on investment.",
    //result
    res_title: "",
    res_img1:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_18254675_oqfcnt.png",
    res_color_title1: "Ranking Success",
    res_dis1:
      " Rolly Receipts achieved a top 1 ranking for many of their product-based keywords, significantly improving visibility.",
    res_img2:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_989298_sulxuu.png",
    res_color_title2: "Increased Traffic",
    res_dis2:
      "The website saw a sharp increase in clicks and impressions, indicating growing interest and visibility.",
    res_img3:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/fi_12001952_j7sa9z.png",
    res_color_title3: "Ongoing Optimization",
    res_dis3:
      "Our continued SEO efforts ensured that rankings were maintained and further optimized for additional keywords.",
    res_display1: false,
    res_display2: false,
    //result meta 
    res_color_title1_meta: "Revenue Generation",
    res_dis1_meta:
      "The email marketing campaigns generated millions of dollars in revenue.",
    res_color_title2_meta: "Nationwide Expansion",
    res_dis2_meta:
      "Rolly Receipts went from being a regional business to having a presence in all 50 states.",
    res_color_title3_meta: "High Engagement",
    res_dis3_meta:
      " Average open rates exceeded 40%, with click-through rates of 15-20%.",
    res_color_title4_meta: "Trust and Customer Confidence",
    res_dis4_meta:
      " With the video ads and authentic content, customers felt more confident purchasing furniture online, knowing they were dealing with a reputable brand.",
    //loria_banner
    loria_banner: false,
    // meta title and description
    meta_title: "Rolly Receipts Email Marketing & SEO Case Study | Base2Brand",
    meta_dis:
      "See how Base2Brand transformed Rolly Receipts’ online presence by driving targeted traffic and increasing customer engagement with powerful SEO and email marketing strategies.",
    clientreview:
      "Barbell 2.0’s journey from zero brand awareness to consistent monthly sales is a testament to the power of strategic digital marketing techniques. By leveraging Google Ads and enhancing the user experience, Barbell 2.0 was able to build brand recognition, drive traffic, and establish itself as a trusted player in the competitive fitness equipment market.",
    clientreviewdisplay: "none"
  },
];

const Pagecase: React.FC = () => {
  const [titles, setTitles] = useState(false)
  const pathname = usePathname();
  const parts = pathname.split("/");
  const slug = parts.pop() || "";
  var data = obj.find(p => p.slug === slug);
  console.log(" Case study Slug:", data.slug);
  useEffect(() => {
    const allowedPaths = [
      '/case-study/zoom-auto-car-rental',
      '/case-study/vis-learning',
      '/case-study/ehis-school',
      '/case-study/warley-superstore'
    ];

    if (allowedPaths.includes(pathname)) {
      setTitles(true);
    } else {
      setTitles(false);
    }
  }, [pathname]);
  const baseURL = `https://base2brand.com/${data.slug}`;
  const wwwURL = `https://base2brand.com/${data.slug}`;
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: data.meta_title,
    description: data.meta_dis,
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  if (!data) {
    return <div style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
        <div className="spinner-border" role="status">
        </div>
        <span className="" style={{ marginLeft: "10px" }}> Loading...</span>
      </div></div>;
  }
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      {/* Banner Section */}
      <div
        className={`bannerSection case_study_banner_padding position-relative ${pathname ==
          "/case-study/loria-medicals"
          ? "case_study_banner_padding2"
          : ""}`}
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container pt-2">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="case_banner">
                {data.banner_title}
              </div>
            </div>
            <div className="col-md-6 pb-5 pt-5 d-flex justify-content-center">
              <Image
                src={data.banner_img}
                alt="banner"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About title and discription */}
      <div className="col-md-12 mx-auto pt-4 pb-4 text-center text-white check about_dis_bg">
        <div className="about_loria_underline text-center width_90" data-aos="fade-up">
          <h1 className="b2b-sub-heading_loria-bold text-uppercase about_heading">
            {data.about_title}
          </h1>
        </div>
        <p className="about_para width_70" data-aos="fade-up">
          {data.about_dis}
        </p>
      </div>
      {/* objective section */}
      {data.clickablecase === "block" ?
        <>
          <div className="container-fluid custom_pt objective_black_bg position-sticky poppins custom_padding pt-5 pb-5" >
            <ul
              className="nav nav-pills mb-3 caseTabs justify-content-center gap-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active btn_portfolio"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  SEO
                </button>
              </li>
              {pathname === "/case-study/rolly-receipts" ?
                "" :
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link btn_portfolio"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Google Ads
                  </button>
                </li>
              }
              {
                pathname === "/case-study/healthy-bedrooms" ?
                  " " :
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      {pathname === "/case-study/rolly-receipts" ?
                        "Email Marketing" :
                        "Meta Ads"
                      }
                    </button>
                  </li>
              }
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {/* SCO */}
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab">
                <div>
                  {/* objective */}
                  <div className="main_objective_con container position-sticky">
                    <div className="objective_content" data-aos="fade-up">
                      <div className="vip_obj_section">
                        <h2 className="objh2_"> {titles == true ? "What the Client Wanted?" : "Objectives"}</h2>
                      </div>

                      <p className="objective_main_title poppins">
                        {data.objective_title}
                      </p>

                      <ul className="vip_ul">
                        <Objective
                          objtive_arrow={data.arrowobjtive1}
                          discription={data.dis1}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive2}
                          discription={data.dis2}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive3}
                          discription={data.dis3}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive4}
                          discription={data.dis4}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive5}
                          discription={data.dis5}
                        />
                      </ul>
                    </div>
                    <div className="objective_banner_con" data-aos="fade-up">
                      <div className="objective_banner">
                        <Image
                          src={data.objective_banner}
                          className="img_obj_inner"
                          alt=""
                          width={1000}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Challenges */}
                  <div
                    className="container-fluid  objective_black_bg pt-5 pb-5 position-sticky poppins"
                    style={{
                      background:
                        "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
                    }}
                  >
                    <div className=" challenge_box  ">
                      <div className="challenge_tdis_section " data-aos="fade-up">
                        <h2 className="challenge_title">Challenges We Confront</h2>
                      </div>
                      <p className="mx-auto challenge_para " data-aos="fade-up">
                        {data.chall_title}
                      </p>
                      <div className="container vip_img_data row mx-auto pt-3 pb-3">
                        <div className="col-xs-12 col-md-6 col-lg-6 chall_banner p-0" data-aos="fade-up">
                          <Image
                            className={
                              data.slug === "vip-number-shop" ||
                                data.slug === "loria-medical"
                                ? "vip_cus_banner"
                                : "1564"
                            }
                            src={data.chall_banner}
                            alt="challenges"
                            width={1000}
                            height={500}
                          />
                        </div>

                        <div className="col-xs-12 col-md-6 col-lg-6 chall_ul p-0" data-aos="fade-up">
                          <ul className="ul_challenge ">
                            <li className="challenge_dis_title mt-0 ">
                              {data.chall_dis_title1}
                            </li>
                            <li className=" challenge_dis ">
                              {data.chall_dis1}
                            </li>
                            <li className=" challenge_dis_title ">
                              {data.chall_dis_title2}
                            </li>
                            <li className=" challenge_dis ">
                              {data.chall_dis2}
                            </li>
                            <li className=" challenge_dis_title ">
                              {data.chall_dis_title3}
                            </li>
                            <li className=" challenge_dis ">
                              {data.chall_dis3}
                            </li>
                            {data.challcol4 === "none" ?
                              "" :
                              <>
                                <li className=" challenge_dis_title">
                                  {data.chall_dis_title4}
                                </li>
                                <li className=" challenge_dis ">
                                  {data.chall_dis4}
                                </li>
                              </>
                            }
                            {data.challcol5 === "none" ?
                              "" :
                              <>
                                <li className=" challenge_dis_title">
                                  {data.chall_dis_title5}
                                </li>
                                <li className=" challenge_dis ">
                                  {data.chall_dis5}
                                </li>
                              </>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* solution */}
                  <div className="objective_black_bg pt-5 pb-5 Solution_section poppins">
                    <div className="container">
                      <div className="container-fluid  solution_part_heading p-0">
                        <div className="vip_soluiton_section text-center">
                          <h2 className=" solution_title_h2" data-aos="fade-up"> {titles == true ? "Strategy Implemented" : "Solutions"} </h2>
                        </div>
                        <p className="mx-auto challenge_para " data-aos="fade-up">
                          {data.sol_title}
                        </p>
                      </div>
                      <div className="row w-100 all_solutions m-auto justify-content-center ">
                        <div
                          className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0 `}
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img1}
                              alt={data.sol_dis_title1}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title1}
                              </span>
                              {data.sol_dis1}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img2}
                              alt={data.sol_dis_title2}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title2}
                              </span>
                              {data.sol_dis2}
                            </p>
                          </div>
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-delay="500"
                          className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img3}
                              alt={data.sol_dis_title3}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title3}
                              </span>
                              {data.sol_dis3}
                            </p>
                          </div>
                        </div>
                        {data.sol_display1 == false
                          ? ""
                          : <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                          >
                            <div className="solution_inner_container">
                              <Image
                                src={data.sol_img4}
                                alt={data.sol_dis_title4}
                                width={1000}
                                height={500}
                              />
                              <p className="solution_dis_p">
                                <span className="solution_dis_span">
                                  {data.sol_dis_title4}
                                </span>
                                {data.sol_dis4}
                              </p>
                            </div>
                          </div>}
                        {data.sol_display2 == false
                          ? ""
                          : <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                          >
                            <div className="solution_inner_container">
                              <Image
                                src={data.sol_img5}
                                alt={data.sol_dis_title5}
                                width={1000}
                                height={500}
                              />
                              <p className="solution_dis_p">
                                <span className="solution_dis_span">
                                  {data.sol_dis_title5}
                                </span>
                                {data.sol_dis5}
                              </p>
                            </div>
                          </div>}
                        {data.solutioncol6 == "block"
                          ? <div
                            className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                            data-aos="fade-up"
                            data-aos-delay="800"
                          >
                            <div className="solution_inner_container">
                              <Image
                                src={data.sol_img6}
                                alt={data.sol_dis_title6}
                                width={1000}
                                height={500}
                              />
                              <p className="solution_dis_p">
                                <span className="solution_dis_span">
                                  {data.sol_dis_title6}
                                </span>
                                {data.sol_dis6}
                              </p>
                            </div>
                          </div>
                          : ""}
                      </div>
                    </div>
                  </div>
                  {/* Results section */}
                  <div
                    className="Final_section pt-5 pb-5 poppins"
                    style={{
                      background:
                        "linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)"
                    }}
                  >
                    <div className="container">
                      <div className="loria_heading text-center" data-aos="fade-up">
                        <h2 className="final_sec_title"> {titles == true ? "The Final Results with Us" : "Results"}</h2>
                      </div>
                      <p className="mx-auto challenge_para" data-aos="fade-up">
                        {data.res_title}
                      </p>
                      <div className="row w-100  m-auto justify-content-center case_row_gap">
                        <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0 `} data-aos="fade-up" data-aos-delay="300">
                          <div className="final_container red_grad">
                            <Image
                              src={data.res_img1}
                              alt={data.res_color_title1}
                              width={2000}
                              height={1000}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title1}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis1}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="400">
                          <div className="final_container sky_grad">
                            <Image
                              src={data.res_img2}
                              alt={data.res_color_title2}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title2}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis2}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="500" >
                          <div className="final_container purple_grad">
                            <Image
                              src={data.res_img3}
                              alt={data.res_color_title3}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title3}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis3}
                              </p>
                            </div>
                          </div>
                        </div>
                        {data.res_display1 == false
                          ? ""
                          :
                          <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="600">
                            <div className="final_container yellow_grad">
                              <Image
                                src={data.res_img4}
                                alt={data.res_color_title4}
                                width={1000}
                                height={500}
                              />
                              <div className="vip_images_child_desc ">
                                <h5 className="final_color_title">
                                  {data.res_color_title4}
                                </h5>
                                <p className="final_dis">
                                  {data.res_dis4}
                                </p>
                              </div>
                            </div>
                          </div>}
                        {data.res_display2 == false
                          ? ""
                          :
                          <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="700">
                            <div className="final_container green_grad">
                              <Image
                                src={data.res_img5}
                                alt={data.res_color_title5}
                                width={1000}
                                height={500}
                              />
                              <div className="vip_images_child_desc ">
                                <h5 className="final_color_title">
                                  {data.res_color_title5}
                                </h5>
                                <p className="final_dis">
                                  {data.res_dis5}
                                </p>
                              </div>
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* Google Ads */}
              <div
                className="tab-pane fade show"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab">
                <div>
                  <div className="main_objective_con container position-sticky">
                    <div className="objective_content" data-aos="fade-up">
                      <div className="vip_obj_section">
                        <h2 className="objh2_"> {titles == true ? "What the Client Wanted?" : "Objectives"}</h2>
                      </div>

                      <p className="objective_main_title poppins">
                        {data.objective_title}
                      </p>

                      <ul className="vip_ul">
                        <Objective
                          objtive_arrow={data.arrowobjtive1_google}
                          discription={data.dis1_google}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive2_google}
                          discription={data.dis2_google}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive3_google}
                          discription={data.dis3_google}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive4_google}
                          discription={data.dis4_google}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive5_google}
                          discription={data.dis5_google}
                        />
                      </ul>
                    </div>
                    <div className="objective_banner_con" data-aos="fade-up">
                      <div className="objective_banner">
                        <Image
                          src={data.objective_banner_google}
                          className="img_obj_inner"
                          alt=""
                          width={1000}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container-fluid  objective_black_bg pt-5 pb-5 position-sticky poppins"
                  style={{
                    background:
                      "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
                  }}
                >
                  <div className=" challenge_box  ">
                    <div className="challenge_tdis_section ">
                      <h2 className="challenge_title">Challenges We Faced</h2>
                    </div>
                    <p className="mx-auto challenge_para " data-aos="fade-up">
                      {data.chall_title}
                    </p>
                    <div className="container vip_img_data row mx-auto pt-3 pb-3">
                      <div className="col-xs-12 col-md-6 col-lg-6 chall_banner p-0" >
                        <Image
                          className={
                            data.slug === "vip-number-shop" ||
                              data.slug === "loria-medical"
                              ? "vip_cus_banner"
                              : "1564"
                          }
                          src={data.chall_banner}
                          alt="challenges"
                          width={1000}
                          height={500}
                        />
                      </div>

                      <div className="col-xs-12 col-md-6 col-lg-6 chall_ul p-0">
                        <ul className="ul_challenge ">
                          <li className="challenge_dis_title mt-0 ">
                            {data.chall_dis_title1_google}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis1_google}
                          </li>
                          <li className=" challenge_dis_title ">
                            {data.chall_dis_title2_google}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis2_google}
                          </li>
                          <li className=" challenge_dis_title ">
                            {data.chall_dis_title3_google}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis3_google}
                          </li>
                          {data.challcol4 === "none" ?
                            "" :
                            <>
                              <li className=" challenge_dis_title">
                                {data.chall_dis_title4_google}
                              </li>
                              <li className=" challenge_dis ">
                                {data.chall_dis4_google}
                              </li>
                            </>
                          }
                          {data.challcol5 === "none" ?
                            "" :
                            <>
                              <li className=" challenge_dis_title">
                                {data.chall_dis_title5_google}
                              </li>
                              <li className=" challenge_dis ">
                                {data.chall_dis5_google}
                              </li>
                            </>
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* solution */}
                <div className="objective_black_bg pt-5 pb-5 Solution_section poppins">
                  <div className="container">
                    <div className="container-fluid  solution_part_heading p-0">
                      <div className="vip_soluiton_section text-center">
                        <h2 className=" solution_title_h2" data-aos="fade-up"> {titles == true ? "Strategy Implemented" : "Solutions"} </h2>
                      </div>
                      <p className="mx-auto challenge_para " data-aos="fade-up">
                        {data.sol_title}
                      </p>
                    </div>
                    <div className="row w-100 all_solutions m-auto justify-content-center ">
                      <div
                        className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0 `}
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img1}
                            alt={data.sol_dis_title1}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title1_google}
                            </span>
                            {data.sol_dis1_google}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img2}
                            alt={data.sol_dis_title2}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title2_google}
                            </span>
                            {data.sol_dis2_google}
                          </p>
                        </div>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img3}
                            alt={data.sol_dis_title3}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title3_google}
                            </span>
                            {data.sol_dis3_google}
                          </p>
                        </div>
                      </div>
                      {data.sol_display1 == false
                        ? ""
                        : <div
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img4}
                              alt={data.sol_dis_title4}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title4_google}
                              </span>
                              {data.sol_dis4_google}
                            </p>
                          </div>
                        </div>}
                      {data.sol_display2 == false
                        ? ""
                        : <div
                          data-aos="fade-up"
                          data-aos-delay="700"
                          className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img5}
                              alt={data.sol_dis_title5}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title5_google}
                              </span>
                              {data.sol_dis5_google}
                            </p>
                          </div>
                        </div>}
                      {data.solutioncol6 == "block"
                        ? <div
                          className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                          data-aos="fade-up"
                          data-aos-delay="800"
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img6}
                              alt={data.sol_dis_title6}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title6_google}
                              </span>
                              {data.sol_dis6_google}
                            </p>
                          </div>
                        </div>
                        : ""}
                    </div>
                  </div>
                </div>
                {/* Results section */}
                <div
                  className="Final_section pt-5 pb-5 poppins"
                  style={{
                    background:
                      "linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)"
                  }}
                >
                  <div className="container">
                    <div className="loria_heading text-center" data-aos="fade-up">
                      <h2 className="final_sec_title"> {titles == true ? "The Final Results with Us" : "Results"}</h2>
                    </div>
                    <p className="mx-auto challenge_para" data-aos="fade-up">
                      {data.res_title}
                    </p>
                    <div className="row w-100  m-auto justify-content-center case_row_gap">
                      <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0 `} data-aos="fade-up" data-aos-delay="300">
                        <div className="final_container red_grad">
                          <Image
                            src={data.res_img1}
                            alt={data.res_color_title1}
                            width={2000}
                            height={1000}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title1_google}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis1_google}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="400">
                        <div className="final_container sky_grad">
                          <Image
                            src={data.res_img2}
                            alt={data.res_color_title2}
                            width={1000}
                            height={500}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title2_google}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis2_google}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="500" >
                        <div className="final_container purple_grad">
                          <Image
                            src={data.res_img3}
                            alt={data.res_color_title3}
                            width={1000}
                            height={500}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title3_google}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis3_google}
                            </p>
                          </div>
                        </div>
                      </div>
                      {data.res_display1 == false
                        ? ""
                        :
                        <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="600">
                          <div className="final_container yellow_grad">
                            <Image
                              src={data.res_img4}
                              alt={data.res_color_title4}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title4_google}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis4_google}
                              </p>
                            </div>
                          </div>
                        </div>}
                      {data.res_display2 == false
                        ? ""
                        :
                        <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="700">
                          <div className="final_container green_grad">
                            <Image
                              src={data.res_img5}
                              alt={data.res_color_title5}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title5_google}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis5_google}
                              </p>
                            </div>
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
              {/* Meta Ads */}
              <div
                className="tab-pane fade show"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab">
                <div>
                  <div className="main_objective_con container position-sticky">
                    <div className="objective_content" data-aos="fade-up">
                      <div className="vip_obj_section">
                        <h2 className="objh2_"> {titles == true ? "What the Client Wanted?" : "Objectives"}</h2>
                      </div>

                      <p className="objective_main_title poppins">
                        {data.objective_title}
                      </p>

                      <ul className="vip_ul">
                        <Objective
                          objtive_arrow={data.arrowobjtive1_meta}
                          discription={data.dis1_meta}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive2_meta}
                          discription={data.dis2_meta}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive3_meta}
                          discription={data.dis3_meta}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive4_meta}
                          discription={data.dis4_meta}
                        />
                        <Objective
                          objtive_arrow={data.arrowobjtive5_meta}
                          discription={data.dis5_meta}
                        />
                      </ul>
                    </div>
                    <div className="objective_banner_con" data-aos="fade-up">
                      <div className="objective_banner">
                        <Image
                          src={data.objective_banner_meta}
                          className="img_obj_inner"
                          alt=""
                          width={1000}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container-fluid  objective_black_bg pt-5 pb-5 position-sticky poppins"
                  style={{
                    background:
                      "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
                  }}
                >
                  <div className=" challenge_box  ">
                    <div className="challenge_tdis_section ">
                      <h2 className="challenge_title">Challenges</h2>
                    </div>
                    <p className="mx-auto challenge_para " data-aos="fade-up">
                      {data.chall_title}
                    </p>
                    <div className="container vip_img_data row mx-auto pt-3 pb-3">
                      <div className="col-xs-12 col-md-6 col-lg-6 chall_banner p-0" >
                        <Image
                          className={
                            data.slug === "vip-number-shop" ||
                              data.slug === "loria-medical"
                              ? "vip_cus_banner"
                              : "1564"
                          }
                          src={data.chall_banner}
                          alt="challenges"
                          width={1000}
                          height={500}
                        />
                      </div>

                      <div className="col-xs-12 col-md-6 col-lg-6 chall_ul p-0">
                        <ul className="ul_challenge ">
                          <li className="challenge_dis_title mt-0 ">
                            {data.chall_dis_title1_meta}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis1_meta}
                          </li>
                          <li className=" challenge_dis_title ">
                            {data.chall_dis_title2_meta}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis2_meta}
                          </li>
                          <li className=" challenge_dis_title ">
                            {data.chall_dis_title3_meta}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis3_meta}
                          </li>
                          {data.challcol4 === "none" ?
                            "" :
                            <>
                              <li className=" challenge_dis_title">
                                {data.chall_dis_title4_meta}
                              </li>
                              <li className=" challenge_dis ">
                                {data.chall_dis4_meta}
                              </li>
                            </>
                          }
                          {data.challcol5 === "none" ?
                            "" :
                            <>
                              <li className=" challenge_dis_title">
                                {data.chall_dis_title5_meta}
                              </li>
                              <li className=" challenge_dis ">
                                {data.chall_dis5_meta}
                              </li>
                            </>
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* solution */}
                <div className="objective_black_bg pt-5 pb-5 Solution_section poppins">
                  <div className="container">
                    <div className="container-fluid  solution_part_heading p-0">
                      <div className="vip_soluiton_section text-center">
                        <h2 className=" solution_title_h2" data-aos="fade-up"> {titles == true ? "Strategy Implemented" : "Solutions"} </h2>
                      </div>
                      <p className="mx-auto challenge_para " data-aos="fade-up">
                        {data.sol_title}
                      </p>
                    </div>
                    <div className="row w-100 all_solutions m-auto justify-content-center ">
                      <div
                        className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0 `}
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img1}
                            alt={data.sol_dis_title1}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title1_meta}
                            </span>
                            {data.sol_dis1_meta}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img2}
                            alt={data.sol_dis_title2}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title2_meta}
                            </span>
                            {data.sol_dis2_meta}
                          </p>
                        </div>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                      >
                        <div className="solution_inner_container">
                          <Image
                            src={data.sol_img3}
                            alt={data.sol_dis_title3}
                            width={1000}
                            height={500}
                          />
                          <p className="solution_dis_p">
                            <span className="solution_dis_span">
                              {data.sol_dis_title3_meta}
                            </span>
                            {data.sol_dis3_meta}
                          </p>
                        </div>
                      </div>
                      {data.sol_display1 == false
                        ? ""
                        : <div
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img4}
                              alt={data.sol_dis_title4}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title4_meta}
                              </span>
                              {data.sol_dis4_meta}
                            </p>
                          </div>
                        </div>}
                      {data.sol_display2 == false
                        ? ""
                        : <div
                          data-aos="fade-up"
                          data-aos-delay="700"
                          className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img5}
                              alt={data.sol_dis_title5}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title5_meta}
                              </span>
                              {data.sol_dis5_meta}
                            </p>
                          </div>
                        </div>}
                      {data.solutioncol6 == "block"
                        ? <div
                          className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                          data-aos="fade-up"
                          data-aos-delay="800"
                        >
                          <div className="solution_inner_container">
                            <Image
                              src={data.sol_img6}
                              alt={data.sol_dis_title6}
                              width={1000}
                              height={500}
                            />
                            <p className="solution_dis_p">
                              <span className="solution_dis_span">
                                {data.sol_dis_title6_meta}
                              </span>
                              {data.sol_dis6_meta}
                            </p>
                          </div>
                        </div>
                        : ""}
                    </div>
                  </div>
                </div>
                {/* Results section */}
                <div
                  className="Final_section pt-5 pb-5 poppins"
                  style={{
                    background:
                      "linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)"
                  }}
                >
                  <div className="container">
                    <div className="loria_heading text-center" data-aos="fade-up">
                      <h2 className="final_sec_title"> {titles == true ? "The Final Results with Us" : "Results"}</h2>
                    </div>
                    <p className="mx-auto challenge_para" data-aos="fade-up">
                      {data.res_title}
                    </p>
                    <div className="row w-100  m-auto justify-content-center case_row_gap">
                      <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0 `} data-aos="fade-up" data-aos-delay="300">
                        <div className="final_container red_grad">
                          <Image
                            src={data.res_img1}
                            alt={data.res_color_title1}
                            width={2000}
                            height={1000}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title1_meta}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis1_meta}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="400">
                        <div className="final_container sky_grad">
                          <Image
                            src={data.res_img2}
                            alt={data.res_color_title2}
                            width={1000}
                            height={500}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title2_meta}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis2_meta}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="500" >
                        <div className="final_container purple_grad">
                          <Image
                            src={data.res_img3}
                            alt={data.res_color_title3}
                            width={1000}
                            height={500}
                          />
                          <div className="vip_images_child_desc ">
                            <h5 className="final_color_title">
                              {data.res_color_title3_meta}
                            </h5>
                            <p className="final_dis">
                              {data.res_dis3_meta}
                            </p>
                          </div>
                        </div>
                      </div>
                      {data.res_display1 == false
                        ? ""
                        :
                        <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="600">
                          <div className="final_container yellow_grad">
                            <Image
                              src={data.res_img4}
                              alt={data.res_color_title4}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title4_meta}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis4_meta}
                              </p>
                            </div>
                          </div>
                        </div>}
                      {data.res_display2 == false
                        ? ""
                        :
                        <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="700">
                          <div className="final_container green_grad">
                            <Image
                              src={data.res_img5}
                              alt={data.res_color_title5}
                              width={1000}
                              height={500}
                            />
                            <div className="vip_images_child_desc ">
                              <h5 className="final_color_title">
                                {data.res_color_title5_meta}
                              </h5>
                              <p className="final_dis">
                                {data.res_dis5_meta}
                              </p>
                            </div>
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
        :
        <>
          <div className="container-fluid custom_pt objective_black_bg position-sticky poppins custom_padding pt-5 pb-5" >
            <div className="main_objective_con container position-sticky">
              <div className="objective_content" data-aos="fade-up">
                <div className="vip_obj_section">
                  <h2 className="objh2_"> {titles == true ? "What the Client Wanted?" : "Objectives"}</h2>
                </div>

                <p className="objective_main_title poppins">
                  {data.objective_title}
                </p>

                <ul className="vip_ul">
                  <Objective
                    objtive_arrow={data.arrowobjtive1}
                    discription={data.dis1}
                  />
                  <Objective
                    objtive_arrow={data.arrowobjtive2}
                    discription={data.dis2}
                  />
                  <Objective
                    objtive_arrow={data.arrowobjtive3}
                    discription={data.dis3}
                  />
                  <Objective
                    objtive_arrow={data.arrowobjtive4}
                    discription={data.dis4}
                  />
                  <Objective
                    objtive_arrow={data.arrowobjtive5}
                    discription={data.dis5}
                  />
                </ul>
              </div>
              <div className="objective_banner_con" data-aos="fade-up">
                <div className="objective_banner">
                  <Image
                    src={data.objective_banner}
                    className="img_obj_inner"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid  objective_black_bg pt-5 pb-5 position-sticky poppins"
            style={{
              background:
                "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
            }}
          >
            <div className=" challenge_box  ">
              <div className="challenge_tdis_section " data-aos="fade-up">
                <h2 className="challenge_title">Challenges</h2>
              </div>
              <p className="mx-auto challenge_para " data-aos="fade-up">
                {data.chall_title}
              </p>
              <div className="container vip_img_data row mx-auto pt-3 pb-3">
                <div className="col-xs-12 col-md-6 col-lg-6 chall_banner p-0" data-aos="fade-up">
                  <Image
                    className={
                      data.slug === "vip-number-shop" ||
                        data.slug === "loria-medical"
                        ? "vip_cus_banner"
                        : "1564"
                    }
                    src={data.chall_banner}
                    alt="challenges"
                    width={1000}
                    height={500}
                  />
                </div>

                <div className="col-xs-12 col-md-6 col-lg-6 chall_ul p-0" data-aos="fade-up">
                  <ul className="ul_challenge ">
                    <li className="challenge_dis_title mt-0 ">
                      {data.chall_dis_title1}
                    </li>
                    <li className=" challenge_dis ">
                      {data.chall_dis1}
                    </li>
                    <li className=" challenge_dis_title ">
                      {data.chall_dis_title2}
                    </li>
                    <li className=" challenge_dis ">
                      {data.chall_dis2}
                    </li>
                    <li className=" challenge_dis_title ">
                      {data.chall_dis_title3}
                    </li>
                    <li className=" challenge_dis ">
                      {data.chall_dis3}
                    </li>
                    {data.challcol4 === "none" ?
                      "" :
                      <>
                        <li className=" challenge_dis_title">
                          {data.chall_dis_title4}
                        </li>
                        <li className=" challenge_dis ">
                          {data.chall_dis4}
                        </li>
                      </>
                    }
                    {data.challcol5 === "none" ?
                      "" :
                      <>
                        <li className=" challenge_dis_title">
                          {data.chall_dis_title5}
                        </li>
                        <li className=" challenge_dis ">
                          {data.chall_dis5}
                        </li>
                      </>
                    }
                    {
                      pathname === "/case-study/warley-superstore" ?
                        <>
                          <li className=" challenge_dis_title">
                            {data.chall_dis_title6}
                          </li>
                          <li className=" challenge_dis ">
                            {data.chall_dis6}
                          </li>
                        </> :
                        ""
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="objective_black_bg pt-5 pb-5 Solution_section poppins">
            <div className="container">
              <div className="container-fluid  solution_part_heading p-0">
                <div className="vip_soluiton_section text-center">
                  <h2 className=" solution_title_h2" data-aos="fade-up">{titles == true ? "Strategy Implemented" : "Solutions"} </h2>
                </div>
                <p className="mx-auto challenge_para " data-aos="fade-up">
                  {data.sol_title}
                </p>
              </div>
              <div className="row w-100 all_solutions m-auto justify-content-center ">
                <div
                  className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0 `}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img1}
                      alt={data.sol_dis_title1}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title1}
                      </span>
                      {data.sol_dis1}
                    </p>
                  </div>
                </div>
                <div
                  className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img2}
                      alt={data.sol_dis_title2}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title2}
                      </span>
                      {data.sol_dis2}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img3}
                      alt={data.sol_dis_title3}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title3}
                      </span>
                      {data.sol_dis3}
                    </p>
                  </div>
                </div>
                {data.sol_display1 == false
                  ? ""
                  : <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                  >
                    <div className="solution_inner_container">
                      <Image
                        src={data.sol_img4}
                        alt={data.sol_dis_title4}
                        width={1000}
                        height={500}
                      />
                      <p className="solution_dis_p">
                        <span className="solution_dis_span">
                          {data.sol_dis_title4}
                        </span>
                        {data.sol_dis4}
                      </p>
                    </div>
                  </div>}
                {data.sol_display2 == false
                  ? ""
                  : <div
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                  >
                    <div className="solution_inner_container">
                      <Image
                        src={data.sol_img5}
                        alt={data.sol_dis_title5}
                        width={1000}
                        height={500}
                      />
                      <p className="solution_dis_p">
                        <span className="solution_dis_span">
                          {data.sol_dis_title5}
                        </span>
                        {data.sol_dis5}
                      </p>
                    </div>
                  </div>}
                {data.solutioncol6 == "block"
                  ? <div
                    className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div className="solution_inner_container">
                      <Image
                        src={data.sol_img6}
                        alt={data.sol_dis_title6}
                        width={1000}
                        height={500}
                      />
                      <p className="solution_dis_p">
                        <span className="solution_dis_span">
                          {data.sol_dis_title6}
                        </span>
                        {data.sol_dis6}
                      </p>
                    </div>
                  </div>
                  : ""}
              </div>
            </div>
          </div>
          {/* Results section */}
          <div
            className="Final_section pt-5 pb-5 poppins"
            style={{
              background:
                "linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)"
            }}
          >
            <div className="container">
              <div className="loria_heading text-center" data-aos="fade-up">
                <h2 className="final_sec_title"> {titles == true ? "The Final Results with Us" : "Results"}</h2>
              </div>
              <p className="mx-auto challenge_para" data-aos="fade-up">
                {data.res_title}
              </p>
              <div className="row w-100  m-auto justify-content-center case_row_gap">
                <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0 `} data-aos="fade-up" data-aos-delay="300">
                  <div className="final_container red_grad">
                    <Image
                      src={data.res_img1}
                      alt={data.res_color_title1}
                      width={2000}
                      height={1000}
                    />
                    <div className="vip_images_child_desc ">
                      <h5 className="final_color_title">
                        {data.res_color_title1}
                      </h5>
                      <p className="final_dis">
                        {data.res_dis1}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="400">
                  <div className="final_container sky_grad">
                    <Image
                      src={data.res_img2}
                      alt={data.res_color_title2}
                      width={1000}
                      height={500}
                    />
                    <div className="vip_images_child_desc ">
                      <h5 className="final_color_title">
                        {data.res_color_title2}
                      </h5>
                      <p className="final_dis">
                        {data.res_dis2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`pointer col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="500" >
                  <div className="final_container purple_grad">
                    <Image
                      src={data.res_img3}
                      alt={data.res_color_title3}
                      width={1000}
                      height={500}
                    />
                    <div className="vip_images_child_desc ">
                      <h5 className="final_color_title">
                        {data.res_color_title3}
                      </h5>
                      <p className="final_dis">
                        {data.res_dis3}
                      </p>
                    </div>
                  </div>
                </div>
                {data.res_display1 == false
                  ? ""
                  :
                  <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="600">
                    <div className="final_container yellow_grad">
                      <Image
                        src={data.res_img4}
                        alt={data.res_color_title4}
                        width={1000}
                        height={500}
                      />
                      <div className="vip_images_child_desc ">
                        <h5 className="final_color_title">
                          {data.res_color_title4}
                        </h5>
                        <p className="final_dis">
                          {data.res_dis4}
                        </p>
                      </div>
                    </div>
                  </div>}
                {data.res_display2 == false
                  ? ""
                  :
                  <div className={`pointer  col-lg-${data.resultclass} col-md-6 col-sm-12 div_solution p-0`} data-aos="fade-up" data-aos-delay="700">
                    <div className="final_container green_grad">
                      <Image
                        src={data.res_img5}
                        alt={data.res_color_title5}
                        width={1000}
                        height={500}
                      />
                      <div className="vip_images_child_desc ">
                        <h5 className="final_color_title">
                          {data.res_color_title5}
                        </h5>
                        <p className="final_dis">
                          {data.res_dis5}
                        </p>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </>
      }



      {/* Solution section */}
      {/* <div className="objective_black_bg pt-5 pb-5 Solution_section poppins">
        <div className="container">
          <div className="container-fluid  solution_part_heading p-0">
            <div className="vip_soluiton_section text-center">
              <h2 className=" solution_title_h2" data-aos="fade-up"> Solutions</h2>
            </div>
            <p className="mx-auto challenge_para " data-aos="fade-up">
              {data.sol_title}
            </p>
          </div>
          <div className="row w-100 all_solutions m-auto justify-content-center ">
            <div
              className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0 `}
               data-aos="fade-up"
               data-aos-delay="300"
            >
              <div className="solution_inner_container">
                <Image
                  src={data.sol_img1}
                  alt={data.sol_dis_title1}
                  width={1000}
                  height={500}
                />
                <p className="solution_dis_p">
                  <span className="solution_dis_span">
                    {data.sol_dis_title1}
                  </span>
                  {data.sol_dis1}
                </p>
              </div>
            </div>
            <div
              className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
               data-aos="fade-up"
               data-aos-delay="400"
            >
              <div className="solution_inner_container">
                <Image
                  src={data.sol_img2}
                  alt={data.sol_dis_title2}
                  width={1000}
                  height={500}
                />
                <p className="solution_dis_p">
                  <span className="solution_dis_span">
                    {data.sol_dis_title2}
                  </span>
                  {data.sol_dis2}
                </p>
              </div>
            </div>
            <div
             data-aos="fade-up"
             data-aos-delay="500"
              className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
            >
              <div className="solution_inner_container">
                <Image
                  src={data.sol_img3}
                  alt={data.sol_dis_title3}
                  width={1000}
                  height={500}
                />
                <p className="solution_dis_p">
                  <span className="solution_dis_span">
                    {data.sol_dis_title3}
                  </span>
                  {data.sol_dis3}
                </p>
              </div>
            </div>
            {data.sol_display1 == false
              ? ""
              : <div
               data-aos="fade-up"
               data-aos-delay="600"
                  className={`hoverGradient blueGD pointer border_right border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img4}
                      alt={data.sol_dis_title4}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title4}
                      </span>
                      {data.sol_dis4}
                    </p>
                  </div>
                </div>}
            {data.sol_display2 == false
              ? ""
              : <div
               data-aos="fade-up"
               data-aos-delay="700"
                  className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img5}
                      alt={data.sol_dis_title5}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title5}
                      </span>
                      {data.sol_dis5}
                    </p>
                  </div>
                </div>}
            {data.solutioncol6 == "block"
              ? <div
                  className={`hoverGradient blueGD pointer border_bottom col-lg-${data.solutionclass} col-md-6 col-sm-12 div_solution p-0`}
                   data-aos="fade-up"
                   data-aos-delay="800"
                >
                  <div className="solution_inner_container">
                    <Image
                      src={data.sol_img6}
                      alt={data.sol_dis_title6}
                      width={1000}
                      height={500}
                    />
                    <p className="solution_dis_p">
                      <span className="solution_dis_span">
                        {data.sol_dis_title6}
                      </span>
                      {data.sol_dis6}
                    </p>
                  </div>
                </div>
              : ""}
          </div>
        </div>
      </div> */}

      {/*Lower Section*/}
      {pathname === "/case-study/loria-medicals"
        ? <div className="loria_banner">
          <div className="upper_banner container">
            <img
              src="/detailpage/data1.svg"
              alt="data1"
              className="_l_banner_img1"
            />
            <img src="/detailpage/data2.png" alt="data2" className="img2" />
          </div>

          <div className="bgblack container">
            <div className="loria_post text-center">
              <div className="final_sec_title  pt-2 pb-2">Ad Graphics</div>
            </div>
            <div className="posts row">
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad1.png" alt="Graphics" />
              </div>
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad2.png" alt="Graphics" />
              </div>
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad3.png" alt="Graphics" />
              </div>
            </div>
            <div className="loria_post text-center">
              <div className="final_sec_title pt-2 pb-2">
                Social media posts
              </div>
            </div>
            <div className="posts row">
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad4.png" alt="media" />
              </div>
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad5.png" alt="media" />
              </div>
              <div className="post_img col-lg-4 col-md-6 col-sm-12">
                <img src="/detailpage/ad6.png" alt="media" />
              </div>
            </div>
          </div>
        </div>
        : ""}
      {/* client review footer */}
      {data.clientreviewdisplay == "block"
        ? <div className="pt-5 pb-5" style={{ background: "#1F222F" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <p className="challenge_dis_title text-center m-0">
                  {data.clientreview}
                </p>
              </div>
            </div>
          </div>
        </div>
        : ""}
      {/* Number footer */}
      <div className="Final_section pt-3">
        <div className="b2b-container-lg">
          <div className=" b2b-achievements">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto">
                <h2 className="text-center b2b-sub-heading-bold ttext-capitalize" data-aos="fade-up">
                  500+ Stores And 250+ People Build Better Business Experiences
                  With Base2Brand!
                </h2>
              </div>
            </div>

            <div className="b2b-container-lg">
              <div className="row progress-count d-flex flex-wrap justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap ">
                    <div className="ms-2 w-100" data-aos="fade-up" data-aos-delay="300">
                      <h2 className="text-white text-center text_dynamic">
                        <CountUp end={80} enableScrollSpy />M +
                      </h2>
                      <p className="text-white text-center">
                        Media Spend Managed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap">
                    <div className="ms-2 w-100" data-aos="fade-up" data-aos-delay="400">
                      <h2 className="text-white text-center text_dynamic">
                        <CountUp end={5} enableScrollSpy />+
                      </h2>
                      <p className="text-white text-center">Year in Market</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap">
                    <div className="ms-2 w-100" data-aos="fade-up" data-aos-delay="500">
                      <h2 className="text-white text-center  text_dynamic">
                        <CountUp end={80} enableScrollSpy />+
                      </h2>
                      <p className="text-white text-center">
                        Result Driven Professional
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap">
                    <div className="ms-2 w-100" data-aos="fade-up" data-aos-delay="600">
                      <h2 className="text-white text-center text_dynamic">
                        <CountUp end={100} enableScrollSpy />+
                      </h2>
                      <p className="text-white text-center">Websites Built</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Casefooterlink />
      <Footer />
    </div>
  );
};

export default Pagecase;
