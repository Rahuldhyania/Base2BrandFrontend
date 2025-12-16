import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Chicago from "./Chicago";
import "../hire-shopify-developer-in-australia/Hireaustralia.css";
import "../hire-shopify-developer-in-usa/Hire.css";
import "../hire-shopify-developer-dallas/Hiredubai.css";
import PageHead from "../../../component/PageHead";
export default function page() {
  const baseURL = "https://base2brand.com/shopify-experts-in-chicago";
  const wwwURL = "https://www.base2brand.com/shopify-experts-in-chicago";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Hire Expert Shopify Developers in Chicago | Base2Brand",
    description:
      "Get top-quality Shopify development in Chicago with Base2Brand. From theme customization to app inte. and performance optimization, our experts will help scale online store.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta}/>
      <Header />
      <Chicago />
      <Footer />
    </div>
  );
}
