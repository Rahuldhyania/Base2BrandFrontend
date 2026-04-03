// app/sitemap-static.xml/route.js
export async function GET() {
  const baseUrl = "https://www.base2brand.com";

  const staticUrls = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/team`,
    `${baseUrl}/career`,
    `${baseUrl}/services`,
    `${baseUrl}/digital-marketing`,
    `${baseUrl}/graphic`,
    `${baseUrl}/e-commerce`,
    `${baseUrl}/web-application`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/blog`,
    `${baseUrl}/contact-us`,
    `${baseUrl}/ai-services`,
    `${baseUrl}/app-development`,
    `${baseUrl}/back-office-services`,
    `${baseUrl}/case-study`,
    `${baseUrl}/content-writing-services`,
    `${baseUrl}/conversion-rate-optimization-services`,
    `${baseUrl}/custom-app-development-for-shopify`,
    `${baseUrl}/custom-recharge`,
    `${baseUrl}/custom-shopify-checkout-development`,
    `${baseUrl}/customer-support`,
    `${baseUrl}/devops-services`,
    `${baseUrl}/digitai-markating`,
    `${baseUrl}/disclaimer`,
    `${baseUrl}/easy-ecom`,
    `${baseUrl}/ecommerce-marketing`,
    `${baseUrl}/email-marketing-services`,
    `${baseUrl}/erp-integration`,
    `${baseUrl}/facebook-ad-agency`,
    `${baseUrl}/google-ads-services`,
    `${baseUrl}/hire-shopify-developers`,
    `${baseUrl}/hire-shopify-theme-developers`,
    `${baseUrl}/increff`,
    `${baseUrl}/mobile-application`,
    `${baseUrl}/odoo`,
    `${baseUrl}/orderwise`,
    `${baseUrl}/orm-services`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/seo-services`,
    `${baseUrl}/shopify-app-development-services`,
    `${baseUrl}/shopify-experts-developers`,
    `${baseUrl}/shopify-integration-with-erp`,
    `${baseUrl}/shopify-store-migration-services`,
    `${baseUrl}/shopify-theme-development-services`,
    `${baseUrl}/shopify-website-development-company-chandigarh`,
    `${baseUrl}/shopify-website-development-company-india`,
    `${baseUrl}/social-media-services`,
    `${baseUrl}/terms-of-service`,
    `${baseUrl}/underconstrution`,
    `${baseUrl}/uni-commerce`,
    `${baseUrl}/youtube`,
    `${baseUrl}/youtube-marketing`,
    `${baseUrl}/hire-shopify-experts-in-india`,
    `${baseUrl}/shopify-agency-in-india`,
    `${baseUrl}/shopify-development-company-india`,
    `${baseUrl}/ui-ux-services`
  ];

  const urls = staticUrls
    .map(
      page => `
    <url>
      <loc>${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
     <priority>0.7</priority>
    </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls}
     
   </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" }
  });
}
