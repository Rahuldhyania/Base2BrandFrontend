import React from 'react'
import PageHead from "../../../component/PageHead";
function page() {
  const baseURL = "https://base2brand.com/shopify-website-development-company​-chandigarh";
  const wwwURL = "https://www.base2brand.com/shopify-website-development-company​-chandigarh";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Hire Shopify Development Company in Chandigarh | Base2Brand",
    description: "Hire expert Shopify developers in Chandigarh to build a high-performing online store tailored to your business needs with Base2Brand's development services.",
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
