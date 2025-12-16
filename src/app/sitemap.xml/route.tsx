// export async function GET(req) {
//   // List of URLs to be included in the sitemap
//   const staticUrls = [
//     // Main Pages
//     "https://www.base2brand.com/",
//     "https://www.base2brand.com/about",
//     "https://www.base2brand.com/team",
//     "https://www.base2brand.com/career",
//     "https://www.base2brand.com/services",
//     "https://www.base2brand.com/digital-marketing",
//     "https://www.base2brand.com/graphic",
//     "https://www.base2brand.com/e-commerce",
//     "https://www.base2brand.com/web-application",
//     "https://www.base2brand.com/portfolio",
//     "https://www.base2brand.com/blog",
//     "https://www.base2brand.com/contact-us",
//     "https://www.base2brand.com/ai-services",
//     "https://www.base2brand.com/app-development",
//     "https://www.base2brand.com/back-office-services",
//     "https://www.base2brand.com/case-study",
//     "https://www.base2brand.com/content-writing-services",
//     "https://www.base2brand.com/conversion-rate-optimization-services",
//     "https://www.base2brand.com/custom-app-development-for-shopify",
//     "https://www.base2brand.com/custom-recharge",
//     "https://www.base2brand.com/custom-shopify-checkout-development",
//     "https://www.base2brand.com/customer-support",
//     "https://www.base2brand.com/devops-services",
//     "https://www.base2brand.com/digitai-markating",
//     "https://www.base2brand.com/disclaimer",
//     "https://www.base2brand.com/easy-ecom",
//     "https://www.base2brand.com/ecommerce-marketing",
//     "https://www.base2brand.com/email-marketing-services",
//     "https://www.base2brand.com/erp-integration",
//     "https://www.base2brand.com/facebook-ad-agency",
//     "https://www.base2brand.com/google-ads-services",
//     "https://www.base2brand.com/hire-shopify-developers",
//     "https://www.base2brand.com/hire-shopify-theme-developers",
//     "https://www.base2brand.com/increff",
//     "https://www.base2brand.com/mobile-application",
//     "https://www.base2brand.com/odoo",
//     "https://www.base2brand.com/orderwise",
//     "https://www.base2brand.com/orm-services",
//     "https://www.base2brand.com/privacy-policy",
//     "https://www.base2brand.com/seo-services",
//     "https://www.base2brand.com/shopify-app-development-services",
//     "https://www.base2brand.com/shopify-experts-developers",
//     "https://www.base2brand.com/shopify-integration-with-erp",
//     "https://www.base2brand.com/shopify-store-migration-services",
//     "https://www.base2brand.com/shopify-theme-development-services",
//     "https://www.base2brand.com/shopify-website-development-company-chandigarh",
//     "https://www.base2brand.com/shopify-website-development-company-india",
//     "https://www.base2brand.com/social-media-services",
//     "https://www.base2brand.com/terms-of-service",
//     "https://www.base2brand.com/underconstrution",
//     "https://www.base2brand.com/uni-commerce",
//     "https://www.base2brand.com/youtube",
//     "https://www.base2brand.com/youtube-marketing",
//     "https://www.base2brand.com/hire-shopify-experts-in-india",
//     "https://www.base2brand.com/shopify-agency-in-india",
//     "https://www.base2brand.com/shopify-development-company-india"
//   ];

//   const fetchDynamicUrls = async (url) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();

//       let mappedData;
//       // Process different data types depending on the API
//       mappedData = result?.blogs?.map(
//         (item) => `https://www.base2brand.com/blog/${item.slugUrl}`
//       );
//       console.log("mappedData",);
      
//       return mappedData;
//     } catch (error) {
//       console.error(`Failed to fetch from ${url}:`, error);
//       return [];
//     }
//   };
//   // Fetch dynamic URLs from APIs
//   const blogUrls = await fetchDynamicUrls(
//     "https://adminbackend.base2brand.com/api/B2Badmin/blogs?page=1&limit=500"
//   );

//   const urls = [...staticUrls, ...blogUrls];

//   // Build the XML for the sitemap
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${urls
//           .map((url) => {
//             return `
//           <url>
//             <loc>${url}</loc>
//             <lastmod>${new Date().toISOString()}</lastmod>
//             <changefreq>daily</changefreq>
//             <priority>0.7</priority>
//           </url>
//         `;
//           })
//           .join("")}
//       </urlset>`;

//   // Return the sitemap as an XML response   
//   return new Response(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }
// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://www.base2brand.com";

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${baseUrl}/api/base2brand-web-urls</loc>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/api/base2brand-blogs</loc>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/api/base2brand-service-pages</loc>
      </sitemap>
    </sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: { "Content-Type": "application/xml" },
  });
}
