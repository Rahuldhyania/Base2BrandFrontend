import React from 'react'
import Pagecase from './casestudydata';
import PageHead from "../../../../component/PageHead";
export default function page() {
  const baseURL = "https://base2brand.com/case-study";
  const wwwURL = "https://www.base2brand.com/case-study";
  
  // // Check if the current URL includes 'www'
  let canonical = ''; 
  if (typeof window !== "undefined") {
  const isUsingWWW = window.location.href.includes("www.");
   canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta={
    title:"CaseStudies | View CaseStudy Now | Base2Brand India",
    description:"Discover Base2Brand India's success through our Casestudies. View our impactful work that drives digital excellence. Explore now to see our achievements!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <div>
      <PageHead PageMeta={PageMeta} />
      <Pagecase/>
    </div>
  )
}
