"use client";
import "./Servicespages.css";
import React from "react";
import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import PageHead from "../../../../component/PageHead";
import Hiredubaibanner from "./components/Hiredubaibanner";
import Whyb2b from "./components/Whyb2b";
import Hiretabsection from "./components/Hiretabsection";
import Hireprocess from "./components/Hireprocess";
import Hiredubaireview from "./components/Hiredubaireview";
import Hiretalkform from "./components/Hiretalkform";
import Hirefaq from "./components/Hirefaq";

function Dynamicservicepage({ serverData, slug }) {
  const data = serverData; 

  const baseURL = `https://base2brand.com/services/${slug}`;
  const wwwURL = `https://www.base2brand.com/services/${slug}`;

  const getCanonicalUrl = () => {
    if (typeof window === "undefined") {
      return baseURL; 
    }

    const currentUrl = window.location.href;
    return currentUrl.split('?')[0].split('#')[0];
  };

  const PageMeta = {
    title: data?.data?.seoPageTitle,
    description: data?.data?.pageKeywords,
    canonical: getCanonicalUrl(), 
    image: "/img/portfolio/b1.png",
  };

  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Header />

      {data && data?.data ? (
        <div>
          <Hiredubaibanner
            bannerimage={data.data.heroSection.backgroundImage}
            pagetitle={data.data.heroSection.title}
            pagedescription={data.data.heroSection.description}
            right_banner={data.data.heroSection.topImage}
          />
          <Whyb2b
            whytitle={data.data.aboutSection.title}
            whydescription={data.data.aboutSection.description}
            whybanner={data.data.aboutSection.image}
          />
          <Hiretabsection
            tabtitle={data.data.challengesSection.title}
            tabcontent={data.data.challengesSection.items}
          />
          <Hireprocess
            hireprocessdata={data.data.processSection.steps}
            hireprocesstitle={data.data.processSection.title}
          />
          <Hiredubaireview reviewdata={data.data.testimonialsSection.testimonials} />
          <Hiretalkform bannerimage={data.data.heroSection.topImage} />
          <Hirefaq faqData={data.data.faqSection.faqs} />
        </div>
      ) : (
        <div className="d-flex bg_blue_right justify-content-center align-items-center" style={{ height: "40vh" }}>
          <div className="spinner-border text-white" role="status" />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dynamicservicepage;