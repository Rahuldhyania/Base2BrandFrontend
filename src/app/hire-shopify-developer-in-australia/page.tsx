import React from "react";
import Australia from "./Australia";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./Hireaustralia.css";
import "../hire-shopify-developer-in-usa/Hire.css"
import "../hire-shopify-developer-dallas/Hiredubai.css"
import PageHead from "../../../component/PageHead";
export default function page() {
  const baseURL = "https://base2brand.com/hire-shopify-developer-in-australia";
  const wwwURL = "https://www.base2brand.com/hire-shopify-developer-in-australia";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Best Advertising Agency Dubai | Advertising Agency Dubai",
    description:
      "Base2Brand is a trusted advertising agency in Dubai, specialized in targeted ad strategies & engaging campaigns that deliver ROI. Let’s craft your next success story.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta}/>
      <Header />
      <Australia />
      <Footer />
    </div>
  );
}
