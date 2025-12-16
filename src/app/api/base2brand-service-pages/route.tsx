// app/sitemap-blogs.xml/route.js
export async function GET() {
  const baseUrl = "https://www.base2brand.com";

  // Helper function to fetch blog slugs
  const fetchBlogUrls = async () => {
    try {
      const response = await fetch(
        "https://adminbackend.base2brand.com/api/B2Badmin/page/getall",
        { next: { revalidate: 60 } } // cache control for Next.js
      );
      const result = await response.json();

      return result.data.map(
        (item) => `${baseUrl}/services/${item.pageSlug}`
      ) || [];
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return [];
    }
  };

  // Get dynamic blog URLs
  const blogUrls = await fetchBlogUrls();

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogUrls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
