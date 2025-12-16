import React from 'react'
import PageHead from "../../../component/PageHead";
function page() {
  const baseURL = "https://base2brand.com/shopify-development-company-india";
  const wwwURL = "https://www.base2brand.com/shopify-development-company-india";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Shopify Development Company India | Shopify Website Developer India",
    description: "Base2Brand is a leading Shopify development company in India, providing expert website development, customizations, and scalable e-commerce solutions for growth.",
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
