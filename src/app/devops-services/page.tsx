

import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Devbanner from "./devbanner";
import "./devops.css";
import Consultation from "./Consultation";
import Chooservices from "./Chooservices";
import DevTools from "./DevTools";
import Intebar from "../../../component/integration-component/Intebar";
import Devbar from "./Devbar";
import Devopsfaq from "./Devopsfaq";
import PageHead from "../../../component/PageHead";
export default function page() {
  const baseURL = "https://base2brand.com/devops-services";
  const wwwURL = "https://www.base2brand.com/devops-services";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "DevOps Consulting & Services | Solutions by Base2Brand",
    description: "Base2Brand offers expert DevOps consulting, services, and solutions to help streamline your business operations and enhance performance with custom DevOps strategies.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Devbanner />
      <div
        style={{
          backgroundColor: "#151A1A"
        }}
        className="pt-5 pb-5 text-center text-sm-start"
      >
        <Consultation
          banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/concept-save-energy.png"
          heading="DevOps has emerged as the foundation of modern software development"
          para="At Base2Brand, we offer comprehensive DevOps development services to help businesses streamline operations, improve system performance, and achieve faster time-to-market. As a leading DevOps service provider, we enable organizations to enhance agility, minimize downtime, and boost collaboration between development and operations teams."
          btnname="Consultation Now"
        />
      </div>
      <div
        style={{
          backgroundColor: "#151A1A"
        }}
      >
        {" "}<Chooservices />
      </div>
      <DevTools />
      <Devbar />
      <Devopsfaq />
      <Footer />
    </div>
  );
}
