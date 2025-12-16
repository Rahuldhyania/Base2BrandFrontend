import React from 'react'
import PageHead from "../../../component/PageHead";
function page() {
  const baseURL = "https://base2brand.com/custom-app-development-for-shopify";
  const wwwURL = "https://www.base2brand.com/custom-app-development-for-shopify";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Custom App Development for Shopify | Expert App Services",
    description: "Unlock powerful custom app development for Shopify. Our expert Shopify app development services offer tailored solutions to enhance your eCommerce store's functionality.",
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
