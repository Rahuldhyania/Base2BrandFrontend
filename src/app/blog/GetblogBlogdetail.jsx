"use client";
import React, { useEffect, useRef, useState } from "react";
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


const GetblogBlogdetail = () => {
    const [blogData, setBlogData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [category, setcategory] = useState(null);
    const [showfeature, setShofeature] = useState(3)
    console.log("category", category);
    const blogSectionRef = useRef(null);
    const [categoryCounts, setcategoryCounts] = useState(null);
    const itemsPerPage = 7;
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
        <div className="pt-3 pt-md-5" ref={blogSectionRef}>
            <h3 className="blogdetail_heading text-white pt-3">Continue Reading</h3>
            <div className="row blog_outer_main">
                <div className="col-12 py-md-4 m-auto">
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
                                        blogSectionRef.current?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
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
                                            blogSectionRef.current?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
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
                                        blogSectionRef.current?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
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
                                        blogSectionRef.current?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetblogBlogdetail;

