"use client"
import React from "react";
import Header from "../../../component/header";
import Intebanner from "./intebanner";
import Footer from "../../../component/footer";
import Intefeature from "./intefeature";
import Integrationform from "./integrationform";
import Inteservice from "./inteservice";
import Intefaqs from "./intefaqs";
import Intecombanner from "../../../component/integration-component/Intecombanner";
import PageHead from "../../../component/PageHead";
import Intefooterlink from "./inte-footer-link";

export default function page() {
  const baseURL = "https://base2brand.com/erp-integration";
  const wwwURL = "https://www.base2brand.com/erp-integration";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Base2Brand: Top ERP Integration Service Provider in India",
    description:
      "Base2Brand is a leading ERP integration service provider in India, offering expert solutions to optimize business operations, enhance efficiency, and ensure seamless system integration",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta}/>
      <Header />
      <Intebanner />
      <Intefeature />
      <Integrationform />
      <Inteservice />
      <Intefaqs />
      {/* <Intefooterlink/> */}
      <Footer />
    </div>
  );
}
