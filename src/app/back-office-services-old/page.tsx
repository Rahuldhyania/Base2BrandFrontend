import React from "react";
import "./backoffice.css";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Baoffbanner from "./Baoffbanner";
import Baoffsec2 from "./Baoffsec2";
import Baoffservices from "./Baoffservices";
import Backoffsercard from "./Backoffsercard";
import Baofftrustserve from "./Baofftrustserve";
import Baofftools from "./Baofftools";
import Baoffclinet from "./Baoffclinet";
import PageHead from "../../../component/PageHead";
function page() {

  const baseURL = "https://base2brand.com/back-office-services";
  const wwwURL = "https://www.base2brand.com/back-office-services";
  let canonical = '';
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Back Office Customer Support - Services - Tool | Base2Brand",
    description: "Base2Brand offers expert back office customer support services to streamline your operations. Improve service quality & productivity. Contact us for tailored solutions!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <div style={{ overflow: "hidden" }}>
        <Baoffbanner />
        <Baoffsec2 />
        <Baoffservices />
        <Baofftrustserve />
        <Baofftools />
        <Baoffclinet />
      </div>
      <Footer />
    </div>
  );
}

export default page;
