"use client";

import React from "react";
import Header from "../../../component/header";

import Footer from "../../../component/footer";
import Scroll from "./Scroll";

// import "./case.css";

import Section_number from "./Section_number";
import PageHead from "../../../component/PageHead";

export default function Case() {
  const baseURL = "https://base2brand.com/case-study";
  const wwwURL = "https://base2brand.com/case-study";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
      title: "Base2Brand:CaseStudies | View CaseStudy Now | Base2Brand India",
      description:
        "Discover Base2Brand India's success through our Casestudies. View our impactful work that drives digital excellence. Explore now to see our achievements!",
      canonical: canonical, // Replace with your page's canonical URL
      image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
    };
  return (
    <div>
      <PageHead PageMeta={PageMeta}/>
      <Header />
      <Scroll />
      <Section_number />
      <Footer />
    </div>
  );
}
