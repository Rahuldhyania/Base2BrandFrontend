"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import "../blog/blog.css";
import { log } from "console";

interface BlogItem {
  _id: string;
  heading: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  slugUrl: string;
  articleData: any;
}

function BlogDetail() {
  const [data, setData] = useState<BlogItem[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [blogId, setBlogId] = useState(null);
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  // console.log(data, 'datadatadatadatadatadatadata111111111');

  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  useEffect(
    () => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(
            "https://adminbackend.base2brand.com/api/B2Badmin/blogs",
            {
              params: {
                page: currentPage, // Send current page
                limit: itemsPerPage // Send items per page
              }
            }
          );
          const blogsData = response.data.blogs;
          const totalBlogs = response.data.totalBlogs;
          setData(blogsData);
          setTotalBlogs(totalBlogs);

          // Calculate total pages based on totalBlogs and itemsPerPage
          const totalPages = Math.ceil(totalBlogs / itemsPerPage);
          setTotalPages(totalPages);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };

      fetchBlogs();
    },
    [currentPage]
  ); // Dependencies

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handleImageClick = (id: string, slugUrl: string) => {
    // Navigate using the Next.js router
    router.push(`/blog/${slugUrl}`);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }
    }, 500);
  };
  return (
    <>
      {data.map(blog =>
        <div className="listing mb-3">
          <div
            className="blog_section_resent d-flex pb-3 border-bottom"
            onClick={() => handleImageClick(blog._id, blog.slugUrl)}
          >
            <img className="blog_recent" src={blog.imageUrl} alt="Blog" />
            <div className="event_blog pr-2">
              <p className="blog_descs mb-0 p-2">
                {blog.heading}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="center_pagination">
        <Stack spacing={2} alignItems="center" className="my-3">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </>
  );
}

export default BlogDetail;
