import React from 'react'
import PageHead from "../../../component/PageHead";
function page() {
  const baseURL = "https://base2brand.com/hire-shopify-developers";
  const wwwURL = "https://www.base2brand.com/hire-shopify-developers";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Shopify Development Company | Hire Expert Shopify Developers Mohali",
    description: "Looking for a reliable Shopify development company in Mohali? Hire expert Shopify developers at Base2Brand to build, optimize, and scale your e-commerce store with custom solutions.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <div style={{height:"100vh"}}>
      {/* <Collectiion/> */}
      <iframe
        src="https://shopify-base2brand.vercel.app"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
    </>
  )
}

export default page
