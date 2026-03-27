"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export const BlogCardSkeleton = () => {
  return (
    <div className="row align-items-center blogcard_container p-2 mb-3 skeleton-card">
      <div className="col-12 col-md-6">
        <div className="skeleton skeleton-image" />
      </div>

      <div className="col-12 col-md-6 ps-4">
        <div className="skeleton skeleton-title mb-3" />
        <div className="skeleton skeleton-text mb-2" />
        <div className="skeleton skeleton-text mb-2" />
        <div className="skeleton skeleton-button mt-3" />
      </div>
    </div>
  );
};
export const BlogCard = ({
  blog_image,
  blog_heading,
  blog_description,
  page_slug
}) => {
  return (
    <Link href={`/blog/${page_slug}`}>
      <div className="row align-items-center blogcard_container px-2 mb-3">
        <div className="col-12 col-md-6">
          <Image
            src={blog_image}
            alt=""
            width={1000}
            height={500}
            className="blog_image"
          />
        </div>

        <div className="col-12 col-md-6 ps-4">
          <h5 className="blogcard_heading text-white">
            {blog_heading}
          </h5>

          <p
            className="blogcard_description"
            dangerouslySetInnerHTML={{ __html: blog_description }}
          />

          <div className="pt-1">

            <button className="b2b-btn b2b-btn-sm m-0 py-2 px-4">
              Discover More
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none" className="ms-2">
                <path d="M11.3407 0C11.3407 0.479307 12.0368 1.19504 12.7415 1.79579C13.6476 2.57095 14.7303 3.24728 15.9715 3.7634C16.9023 4.15034 18.0305 4.52177 18.9385 4.52177M18.9385 4.52177C18.0305 4.52177 16.9013 4.8932 15.9715 5.28013C14.7303 5.79691 13.6476 6.47323 12.7415 7.2471C12.0368 7.8485 11.3407 8.56552 11.3407 9.04354M18.9385 4.52177H5.34058e-05" stroke="white" strokeWidth="0.684805" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export const FeaturedSkeleton = () => {
  return (
    <div className="feature_outer skeleton-feature">
      <div className="feature_outer_img">
        <div className="skeleton skeleton-feature-img" />
      </div>

      <div className="div-2-outer">
        <div className="skeleton skeleton-feature-date mb-2" />
        <div className="skeleton skeleton-feature-title" />
      </div>
    </div>
  );
};


const Getblogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState(null);
  const [showfeature, setShofeature] = useState(3)
  // console.log("category", category);

  const [categoryCounts, setcategoryCounts] = useState(null);
  const itemsPerPage = 20;

  
  useEffect(
    () => {
      const fetchblogs = async () => {
        try {
          setLoading(true);
          let res;
          if (search.trim()) {
            res = await axios.get(
              "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/search",
              {
                params: {
                  query: search,
                  page: currentPage,
                  limit: itemsPerPage,
                },
              }
            );

            setBlogData(res?.data?.blogs || []);
            setTotalPages(res?.data?.totalPages || 0);
          } else {
            res = await axios.get(
              "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/category",
              {
                params: {
                  categoriesType: category,
                  page: currentPage,
                  limit: itemsPerPage,
                },
              }
            );

            setBlogData(res?.data?.blogs || []);
            setTotalPages(res?.data?.totalPages || 0);
            setcategoryCounts(res?.data?.categoryCounts || []);
          }
        } catch (error) {
          console.log(error);
          setBlogData([]);
        } finally {
          setLoading(false);
        }
      };

      fetchblogs();
    },
    [currentPage, category, search]
  );
  const featuredBlogs = blogData.filter(item => item.featured);
  const getPagination = (currentPage, totalPages) => {
    const pages = [];
    const visible = totalPages > 4 ? 4 : totalPages;

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages - 1, start + visible - 1);

    if (currentPage <= 2) {
      start = 1;
      end = visible;
    }

    if (currentPage >= totalPages - 2) {
      start = totalPages - visible;
      end = totalPages - 1;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };
  
 

  return (
    <div className="row blog_outer_main">
      <div className="col-12 col-lg-8 py-4 m-auto">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))
        ) : (
          blogData.map((item, index) => (
            <BlogCard
              key={index}
              blog_image={item.imageUrl}
              blog_heading={item.heading}
              blog_description={item.pageDescription}
              page_slug={item.slugUrl}
            />
          ))
        )}
        {!loading && blogData.length === 0 && (
          <p className="text-center text-white mt-4">
            No blogs found 🔍
          </p>
        )}
        {blogData.length > 0 && (
          <div className="pt-4">
            <div className="d-flex gap-2 align-items-center justify-content-center text-white">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(p => p - 1)
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                ‹
              </button>

              {getPagination(currentPage, totalPages).map(page =>
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className={
                    currentPage === page ? "active_blogpage" : "unactive_blogpage"
                  }
                >
                  {page}
                </button>
              )}

              {currentPage < totalPages - 3 && <span>...</span>}

              <button
                onClick={() => {
                  setCurrentPage(totalPages);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={
                  currentPage === totalPages
                    ? "active_blogpage"
                    : "unactive_blogpage"
                }
              >
                {totalPages}
              </button>

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(p => p + 1)
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="col-12 col-lg-4 py-4 relative">
        <NewsletterForm />
        <div className="left_sticky pt-3">
          <div className="d-flex align-items-center blog_search_outer">
            <input
              type="text"
              name=""
              id=""
              className="blog_search"
              placeholder="Search Articles"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setCurrentPage(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            <div className="blog_searchouter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M6.23406 0.576294C5.11504 0.576294 4.02114 0.908123 3.09071 1.52982C2.16027 2.15152 1.43509 3.03516 1.00686 4.069C0.578623 5.10285 0.466578 6.24046 0.684889 7.33798C0.9032 8.43551 1.44206 9.44364 2.23333 10.2349C3.0246 11.0262 4.03274 11.565 5.13026 11.7834C6.22779 12.0017 7.3654 11.8896 8.39924 11.4614C9.43309 11.0332 10.3167 10.308 10.9384 9.37754C11.5601 8.4471 11.892 7.35321 11.892 6.23418C11.8919 4.73365 11.2957 3.2946 10.2347 2.23356C9.17365 1.17252 7.7346 0.576389 6.23406 0.576294Z"
                  stroke="white"
                  strokeWidth="1.15254"
                  strokeMiterlimit="10"
                />
                <path
                  d="M10.4539 10.4554L14.4053 14.4069"
                  stroke="white"
                  strokeWidth="1.15254"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-3 Featured_outer">
            <h3 className="Featured_title">Featured</h3>

            <div className="pt-2">
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <FeaturedSkeleton key={i} />
                ))
              ) : (
                featuredBlogs.slice(0, showfeature).map((item, index) => {
                  const formattedDate = new Date(item.createdAt).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    }
                  );
                  return (


                    <div className="feature_outer" key={index}>
                      <div className="feature_outer_img">
                        <Image
                          src={item.imageUrl}
                          alt="blog image"
                          width={1000}
                          height={500}
                          className="feature_image"
                        />
                      </div>

                      <div className="div-2-outer">
                        <div className="update_date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M8.09864 0C6.49688 0 4.93109 0.474977 3.59928 1.36487..."
                              fill="white"
                              fillOpacity="0.5"
                            />
                          </svg>
                          {formattedDate}
                        </div>

                        <Link
                          href={`/blog/${item.slugUrl}`}
                        >
                          <h4 className="feature_title line-clamp-2">
                            {item.heading}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}

              {
                showfeature.length <= 0 || showfeature.length > featuredBlogs && (
                  <p className="text-center text-white text-underline pt-2 m-0">
                    <span className=""
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShofeature(showfeature + 3)}
                    >
                      Show More...
                    </span>
                  </p>
                )
              }

            </div>
          </div>

          <div className="px-3 Featured_outer">
            <h3 className="Featured_title">Categories</h3>

            <div className="pt-2 grid-cols-3">
              <div className={` Categories_tab text-center ${category === null ? 'Categories_tab_active text-white' : 'text-black'}`}
                onClick={() => setcategory(null)}
              >
                All
              </div>
              {
                categoryCounts?.map((item, index) => {
                  if (item.category === 'Uncategorized' || item.category === 'null') { return null };
                  const active = category == item.category
                  return (
                    <div 
                    className={` Categories_tab text-center ${active ? 'Categories_tab_active text-white' : 'text-black'}`}
                    key={index} 
                    onClick={() =>{
                       setcategory(item.category)
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                      {item.category}
                    </div>)
                })
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Getblogs;
