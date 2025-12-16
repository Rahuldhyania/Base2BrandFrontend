import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Aibanner from "./Aibanner";
import "../devops-services/devops.css";
import Aiservices from "./Aiservices";
import Aibar from "./Aibar";
import Consultation from "../devops-services/Consultation";
import Aisulution from "./Aisulution";
import Aibar2 from "./Aibar2";
import Aifaq from "./Aifaq";
import PageHead from "../../../component/PageHead";
export default function page() {
  const baseURL = "https://base2brand.com/ai-services";
  const wwwURL = "https://www.base2brand.com/ai-services";

  // // Check if the current URL includes 'www'
  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "AI Services | AI Solutions Provider | Base2Brand",
    description: "Explore AI services and solutions from Base2Brand. We offer innovative AI services to enhance business performance with cutting-edge technology and tailored solutions.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <Aibanner />
      <Aiservices />
      <Aibar />
      <div
        className="pt-5 pb-5 text-center text-sm-start"
        style={{ background: "#1F222F" }}>
        <Consultation
          banner="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/aigrowth.png"
          heading="AI Adoption: The Future of Business Growth"
          para="The demand for AI services is growing rapidly, with 90% of top-performing companies investing in AI solutions to drive innovation. As businesses continue to embrace AI, the need for expert consulting in artificial intelligence is more critical than ever. Our AI consultancy services empower organizations to leverage AI effectively, ensuring long-term success and adaptability in a fast-evolving digital landscape."
          btnname="Get Free Consultation"
        />
      </div>
      <Aisulution />
      <Aibar2 />
      <Aifaq />
      <Footer />
    </div>
  );
}
