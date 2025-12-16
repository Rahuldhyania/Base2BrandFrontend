import React from 'react'
import PageHead from "../../../component/PageHead";
function page() {
  const baseURL = "https://base2brand.com/hire-shopify-experts-in-india";
  const wwwURL = "https://www.base2brand.com/hire-shopify-experts-in-india";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Hire Shopify Experts in India | Shopify Experts India | Base2Brand",
    description: "Hire top Shopify experts in India with Base2Brand company for custom store development, theme customization, & seamless Shopify solutions that boost sales growth.",
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
