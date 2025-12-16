// app/sitemap-blogs.xml/route.js
export async function GET() {
  const baseUrl = "https://www.base2brand.com";

  // Helper function to escape special XML characters
  const escapeXml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  };

  // Fetch all blogs
  const fetchBlogUrls = async () => {
    try {
      const response = await fetch(
        "https://adminbackend.base2brand.com/api/B2Badmin/blogs?page=1&limit=500",
        { next: { revalidate: 60 } }
      );
      const result = await response.json();

      return (
        result?.blogs?.map((item) => `${baseUrl}/blog/${item.slugUrl}`) || []
      );
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return [];
    }
  };

  const blogUrls = await fetchBlogUrls();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogUrls
      .map(
        (url) => `
      <url>
        <loc>${escapeXml(url)}</loc>
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
