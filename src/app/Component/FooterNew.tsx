"use client";
import React, { useState } from "react";
import FooterLinks from "../../../component/footer-links";
import Link from "next/link";
import FooterBottom from "../../../component/footer-bottom";
import Image from "next/image";
import "./NewHomePage/NewHome.css";
const FooterData = [
  {
    id: 1,
    listTitle: "Digital Marketing",
    linkList: [
      { label: "Media Buyer", href: "/media-buyer" },
      { label: "Content Writing", href: "/content-writing-services" },
      { label: "Google Ads (PPC)", href: "/google-ads-services" },
      { label: "YouTube Marketing", href: "/youtube-marketing" },
      { label: "Search Engine Optimization", href: "/seo-services" },
      { label: "Social Media Optimization", href: "/social-media-services" },
      { label: "Online Reputation Management", href: "/orm-services" }
    ]
  },
  {
    id: 2,
    listTitle: "Graphic Design",
    linkList: [
      { label: "Branding & Identity", href: "/graphic" },
      {
        label: "Website & App Design",
        href: "/web-mobile-app-design-services"
      },
      { label: "Motion Graphics", href: "/motion-graphic-video-services" },
      {
        label: "Social Media Design",
        href: "/social-media-management-services"
      },
      { label: "2D & Infographic Design", href: "/graphic" }
    ]
  },
  {
    id: 3,
    listTitle: "Web/Mobile Development",
    linkList: [
      { label: "Remix Framework", href: "/web-application" },
      { label: "Laravel Development", href: "/web-application" },
      { label: "MEAN Stack Development", href: "/web-application" },
      { label: "ASP.NET Development", href: "/web-application" },
      { label: "MERN Stack Development", href: "/web-application" },
      { label: "Native IOS and Android", href: "/web-application" },
      { label: "Hybrid Apps Development", href: "/web-application" }
    ]
  },
  {
    id: 4,
    listTitle: "Ecommerce Development",
    linkList: [
      { label: "Shopify Theme Development", href: "/shopify" },
      { label: "Woo Commerce Development", href: "/e-commerce" },
      { label: "Magento Development", href: "/e-commerce" },
      { label: "Big Commerce Development", href: "/e-commerce" },
      { label: "Open Cart Development", href: "/e-commerce" },
      { label: "Shopify App Development", href: "/shopify" }
    ]
  },
  {
    id: 5,
    listTitle: "Next-Gen Services",
    linkList: [
      { label: "DevOps Services", href: "/devops-services" },
      { label: "AI Services", href: "/ai-services" },
      { label: "IOT (Internet Of Things)", href: "/iot-services" },
      { label: "Metaverse", href: "/metaverse" },
      { label: "Blockchain", href: "/blockchain" },
      { label: "Gaming", href: "/gaming" }
    ]
  },
  {
    id: 6,
    listTitle: "Quick/Other Links",
    linkList: [
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Blogs", href: "/blog" },
      { label: "Career", href: "/career" },
      { label: "Hire Resources", href: "/underconstrution" },
      { label: "Case Studies", href: "/case-study" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookies Policy", href: "/cookies-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "/refund-policy" }
    ]
  }
];

const socialMediaList = [
  {
    socialmedianame: "Instagram",
    account_link: "https://www.instagram.com/techbase2brand/"
  },
  {
    socialmedianame: "LinkedIn",
    account_link: "https://in.linkedin.com/company/techbase2brand"
  },
  {
    socialmedianame: "Youtube",
    account_link: "https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q"
  },
  {
    socialmedianame: "Facebook",
    account_link: "https://www.facebook.com/TechBase2Brand/"
  }
];
const FooterNew = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      className="mx-2 mb-2 mainfooternew"
      style={{ backgroundImage: "url(/newhomepage/newfooterbg.webp)" }}
    >
      <div className="xxl_container pb-3 pb-md-5 pt-4 pt-md-5">
          <div className="mb-4 footerMenu d-flex d-md-none">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo.e9cf2080_1_egmydg.png"
                alt=""
                width={1000}
                height={500}
                className="newfooterlogo"
              />
            </div>
        <div className="row">
          {FooterData.map((data, index) =>
            <div className="col-12 col-md-4 col-lg footernewCard" key={index}>
              <h6
                className="footernew_title text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion(index)}
              >
                {data.listTitle}
                <span className="d-md-none">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h6>

              <ul
                className={`footernew_list ${activeIndex === index
                  ? "show"
                  : ""}`}
              >
                {data.linkList.map((item, i) =>
                  <li className="my-2 my-md-3" key={i}>
                    <Link href={item.href} className="footernew_text">
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="pt-3">
          <div className="d-flex flex-wrap gap-2 gap-md-3">
            {socialMediaList.map((a, i) =>
              <div className="d-flex gap-2 gap-md-3 align-items-center" key={i}>
                <Link className="social_text" href={a.account_link} target="_blank">
                  {a.socialmedianame}
                </Link>
                {i + 1 == socialMediaList.length
                  ? null
                  : <span className="iconblue" />}
              </div>
            )}
          </div>
        </div>
        <div className="main_footer py-3 py-md-5 mt-3 mt-md-5">
          <div className="row d-flex flex-wrap align-items-start row-gap-5">
            <div className="mb-sm-0 mb-4 footerMenu d-none d-md-flex">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo.e9cf2080_1_egmydg.png"
                alt=""
                width={1000}
                height={500}
                className="newfooterlogo"
              />
            </div>
            <div className="mb-sm-0 mb-4 footerMenu">
              <h6 className="text-white footernew_title">Working Hours:</h6>
              <ul className="mb-0">
                <li>Mon-Fri: 10 Am- 07 Pm</li>
                <li>Sat-Sun: Holiday</li>
              </ul>
            </div>
            <div className="mb-sm-0 mb-4 footerMenu">
              <h6 className="text-white footernew_title">
                India (headquarter){" "}
              </h6>
              <ul className="mb-0">
                <li>
                  F-209, Sector 74, Mohali, 160074 <br />
                  IND{" "}
                  <a className="text-white" href="tel:+91-9872487850">
                    +91 9872487850
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-sm-0 mb-4 footerMenu">
              <h6 className="text-white footernew_title">USA</h6>
              <ul className="mb-0">
                <li>
                  7311 Gladys Ave El Cerrito CA 94530, <br />
                  USA,{" "}
                  <a className="text-white" href="tel:+1-720-903-5933">
                    +1 720 9035933
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-sm-0 mb-4 footerMenu">
              <h6 className="text-white footernew_title">UK</h6>
              <ul className="mb-0">
                <li>
                  UK
                  <a className="text-white" href="tel:+447441913940">
                    {" "}+44 7441913940
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          <p className="m-0 text-white">
            © {new Date().getFullYear()}{" "}
            <Link href={"/"} className="cursor-pointer text-white">
              {" "}base2brand.com.{" "}
            </Link>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
