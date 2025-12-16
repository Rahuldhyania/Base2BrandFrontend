import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import BlogListing from "../blog-listing";
import "../../blog/blog.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Reduced cache time for faster updates - can be invalidated on-demand via API
export const revalidate = 60; // 1 minute instead of 1 hour

const BASE_URL = "https://www.base2brand.com";

interface Blog {
  pageTitle: string;
  slugUrl: string;
  pageDescription: string;
  imageUrl: string;
  heading: string;
  description: string;
}

async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(
      `https://adminbackend.base2brand.com/api/B2Badmin/blogs/slug/${slug}`,
      { 
        next: { 
          revalidate, 
          tags: [
            `blog-page`,
            `blog-page:${slug}`
          ] 
        } 
      }
    );
    if (res.status === 404) return null;
    if (!res.ok) return null;
    const data = await res.json();
    return data.blog as Blog | null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    // Fetch all blogs with a high limit to get all static paths
    const res = await fetch(
      "https://adminbackend.base2brand.com/api/B2Badmin/blogs?page=1&limit=500",
      { 
        next: { revalidate },
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    if (!res.ok) return [];
    const result = await res.json();
    const blogs = result?.blogs || [];
    
    return blogs.map((blog: any) => ({
      "blog-slug": blog.slugUrl || blog._id,
    }));
  } catch {
    return [] as { [key: string]: string }[];
  }
}

export async function generateMetadata(
  { params }: { params: { "blog-slug": string } }
): Promise<Metadata> {
  const slug = params["blog-slug"];
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    return { 
      robots: { index: false, follow: true },
      title: "Blog Not Found",
    };
  }

  // Use the slug from params (which comes from URL) for canonical URL
  // This ensures consistency with the actual URL structure
  const canonical = `${BASE_URL}/blog/${slug}`;

  const title = blog.pageTitle || blog.heading || "Base2Brand Blog";
  const description = blog.pageDescription || blog.description?.replace(/<[^>]*>/g, '').substring(0, 160) || "";
  const image = blog.imageUrl || `${BASE_URL}/img/portfolio/b1.png`;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        { 
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
    },
  };
}

export default async function BlogDetail(
  { params }: { params: { "blog-slug": string } }
) {
  const slug = params["blog-slug"];
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="bgblack">
        <div className="container-fluid p-5 pb-5">
          <div className="row text-white mb-5 pb-5 justify-content-center g-0 g-lg-0 g-xl-5">
            <div className="col-md-9 mb-4">
              <div className="blog_section bg-dark">
                <img 
                  className="blogs w-100" 
                  src={blog.imageUrl} 
                  alt={blog.heading || "Blog"} 
                />
                <div className="p-4 pb-3 bgblack">
                  <h1 className="blog_desc mb-2">{blog.heading}</h1>
                  <div 
                    className="title_description blog_detail_description" 
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <BlogListing />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
