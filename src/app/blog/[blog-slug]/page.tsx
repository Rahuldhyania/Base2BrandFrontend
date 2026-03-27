export const revalidate = 60; 
export const dynamicParams = true;
import Header from "../../../../component/header";
import Footer from "../../../../component/footer";
import BlogListing from "../blog-listing";
import "../../blog/blog.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewblogDetail from "./NewblogDetail";


const BASE_URL = "https://www.base2brand.com";

interface Blog {
  id : Number ;
  pageTitle: string;
  slugUrl: string;
  pageDescription: string;
  imageUrl: string;
  heading: string;
  description: string;
  createdAt: string;
  blogViews : Number ;
}

async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(
      `https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/slug/${slug}`,
     {
       cache: "no-store"
     } 
    );
    console.log(res, 'fjnsdjfbsdkj');
    
    if (res.status === 404) return null;
    if (!res.ok) return null;
    const data = await res.json();
    return data.blog as Blog | null;
  } catch {
    return null;
  }
}

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(
//       "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs?page=1&limit=500",
//       {
//         next: { revalidate },
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       }
//     );
//     if (!res.ok) return [];
//     const result = await res.json();
//     const blogs = result?.blogs || [];

//     return blogs.map((blog: any) => ({
//       "blog-slug": blog.slugUrl || blog._id,
//     }));
//   } catch {
//     return [] as { [key: string]: string }[];
//   }
// }

export async function generateMetadata(
  { params }: { params: { "blog-slug": string } }
): Promise<Metadata> {
  const slug = params["blog-slug"];
  const blog = await getBlogBySlug(slug);
   console.log(blog , 'blogblog');
   
  if (!blog) {
    return {
      robots: { index: false, follow: true },
      title: "Blog Not Found",
    };
  }
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
  // console.log(blog , 'blog blog');
  
  if (!blog) {
    notFound();
  }
    console.log('hello');
  return (
    <>
      <Header />
      <div className="bgblack">
        <div className="py-md-5">
          <NewblogDetail 
           updatedAt={blog.createdAt}
           heading={blog.heading} 
           description={blog.description}
           id={blog.id}
           blogViews={blog.blogViews}
           />
        </div>
      </div>
      <Footer />
    </>
  );
}
