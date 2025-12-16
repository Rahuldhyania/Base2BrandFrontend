"use client";
import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Callcenterbanner from "../../../component/call-center/callcenterbanner";
import Callcenterworks from "../../../component/call-center/callcenterworks";
import Callcenservices from "../../../component/call-center/callcenservices";
import Callcenterneeds from "../../../component/call-center/callcenterneeds";
import Callcenteraward from "../../../component/call-center/callcenaward";
import Callcenquestion from "../../../component/call-center/callcenquestion";
import PageHead from "../../../component/PageHead";
import Customerslider from "../../../component/call-center/Customerslider";
function page() {
  const baseURL = "https://base2brand.com/customer-support";
  const wwwURL = "https://www.base2brand.com/customer-support";
  let canonical = "";
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: " Customer Support Services | Base2Brand Infotech",
    description:
      "Reach Base2Brand for expert customer support in India. Quick help with all your service needs.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png" // Replace with your image URL for sharing
  };

  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Callcenterbanner />
      <Callcenterworks />
      {/* <Customerslider/> */}
      <Callcenservices />
      <Callcenterneeds/>
      <Callcenteraward/>
      <Callcenquestion />
      {/* <Callcenreview/> */}
      <Footer />
    </div>
  );
}

export default page;
