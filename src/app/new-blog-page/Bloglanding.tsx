"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Bloglanding() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://adminbackend.base2brand.com/api/B2Badmin/blogs?page=1&limit=500`,
        );
        const blogsData = response.data.blogs;
        setdata(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const getblog = () => {
    if (data.length === 0) {
      return <div></div>
    }
    return data.slice(1, data.length).map((blog, index) =>
      <div key={index}>
        <Link href={`/blog/${blog.slugUrl}`}>
          <div className="featured_outer">
            <div className="featured_inner">
              <div className="featured_img">
                <img src={blog.imageUrl} alt="" />
              </div>
              <div className="featured_text">
                <div className="new_blog_title">
                  <p className="m-0">
                    {blog.heading.split(" ").slice(0, 10).join(" ")}
                    {blog.heading.split(" ").length > 10 ? "..." : ""}
                  </p>
                </div>
                <div className="new_blog_des_home">
                  <span dangerouslySetInnerHTML={{ __html: blog?.description }}></span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div>
      {/*Featured Articles */}
      <div style={{ backgroundColor: "#1F222F" }}>
        <div className="pt-5 pb-5 container">
          <h2 className="blog_desc blog-title text-white">Featured Articles</h2>
          <div className="row">
            <div className="col-lg-6">
              {data.length === 0 ?
                <div className="text-end text-white">
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
                :
                data.slice(0, 1).map((blog, index) =>
                  <Link href={`/blog/${blog.slugUrl}`} key={index}>
                    <div key={index} className="new_blog_card_outer">
                      <div className="new_blog_card">
                        <div className="new_blog_img">
                          <img src={blog.imageUrl} alt="blog" />
                        </div>
                        <div className="new_blog_title">
                          <p className="m-0">{blog.heading}</p>
                        </div>
                        <div className="new_blog_des_home line2ellips">
                          <span dangerouslySetInnerHTML={{ __html: blog?.description }}></span>
                        </div>
                        <div className="new_blog_read_more">
                          Read More
                          <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480351_ioyjip.png" alt=" " width={1000} height={500} />
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
            </div>
            <div className="col-lg-6">
              <div className={`${data.length === 0 ? 'featured_left2' : "featured_left"} `}>
                {getblog()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
