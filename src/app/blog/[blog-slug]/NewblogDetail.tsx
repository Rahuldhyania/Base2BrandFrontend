"use client";
import React, { useEffect, useState } from "react";
import "../blognew.css";
import BlogDetailFrom from "./BlogDetailFrom";
import Newcrmform from "@/app/Newcrmform";
import bluebg from "../../../../public/blognew/bluegradientbg.webp";
import Request from "../../request-form";
import GetblogBlogdetail from "../GetblogBlogdetail";
import CountUp from "react-countup";

export const CalendarIcon = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_24_3122)">
      <path
        d="M5.3335 1.33334V4.00001"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6665 1.33334V4.00001"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.66666H14"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_3122">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>;
export const TimeIcon = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_24_3130)">
      <path
        d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4V8L10.6667 9.33333"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_3130">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>;
export const EyeIcon = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
export const HeartIcon = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M12.6668 9.33333C13.6602 8.36 14.6668 7.19333 14.6668 5.66667C14.6668 4.69421 14.2805 3.76158 13.5929 3.07394C12.9053 2.38631 11.9726 2 11.0002 2C9.82683 2 9.00016 2.33333 8.00016 3.33333C7.00016 2.33333 6.1735 2 5.00016 2C4.0277 2 3.09507 2.38631 2.40744 3.07394C1.7198 3.76158 1.3335 4.69421 1.3335 5.66667C1.3335 7.2 2.3335 8.36667 3.3335 9.33333L8.00016 14L12.6668 9.33333Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
export const HeartIconFill = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="#000"
  >
    <path
      d="M12.6668 9.33333C13.6602 8.36 14.6668 7.19333 14.6668 5.66667C14.6668 4.69421 14.2805 3.76158 13.5929 3.07394C12.9053 2.38631 11.9726 2 11.0002 2C9.82683 2 9.00016 2.33333 8.00016 3.33333C7.00016 2.33333 6.1735 2 5.00016 2C4.0277 2 3.09507 2.38631 2.40744 3.07394C1.7198 3.76158 1.3335 4.69421 1.3335 5.66667C1.3335 7.2 2.3335 8.36667 3.3335 9.33333L8.00016 14L12.6668 9.33333Z"
      stroke="#99A1AF"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
export const ShareIcon = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_24_3154)">
      <path
        d="M12 5.33334C13.1046 5.33334 14 4.43791 14 3.33334C14 2.22877 13.1046 1.33334 12 1.33334C10.8954 1.33334 10 2.22877 10 3.33334C10 4.43791 10.8954 5.33334 12 5.33334Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.6667C13.1046 14.6667 14 13.7712 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7712 10.8954 14.6667 12 14.6667Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.72656 9.00668L10.2799 11.66"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2732 4.34L5.72656 6.99333"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_3154">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>;

export const BlogDetailBanner = ({ updatedAt, heading, blogid, blogViews }) => {
  const storageKey = `blog-like-${blogid}`;
  const [like, setLike] = useState(false);
  const [readingTime, setReadingtime] = useState(0);
  const [view, setView] = useState(0);
  useEffect(
    () => {
      const savedLike = localStorage.getItem(storageKey);
      if (savedLike !== null) {
        setLike(JSON.parse(savedLike));
      }
    },
    [storageKey]
  );
  function formatViews(blogViews: number): string {
    if (blogViews < 1000) {
      return blogViews.toString();
    }

    const value = blogViews / 1000;

    return `${parseFloat(value.toFixed(1))}k`;
  }

  const handleLike = () => {
    const newLike = !like;
    setLike(newLike);
    localStorage.setItem(storageKey, JSON.stringify(newLike));
  };
  console.log("blogViews", blogViews);

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: heading,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled", err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      // alert("Link copied to clipboard");
    }
  };

  useEffect(() => {
    const readingtime = Math.floor(Math.random() * (12 - 8 + 1)) + 8;
    setReadingtime(readingtime);
    const viewcount = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    setView(viewcount);
  }, []);
  
  return (
    <div className="px-3 px-md-5  blogdetail_heading_outer">
      <h3 className="blogdetail_heading text-white">
        {heading}
      </h3>
      <div className="pt-3 d-flex gap-3">
        <div className="d-flex gap-2">
          <CalendarIcon />
          <p className="text_gray m-0">
            {new Date(updatedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric"
            })}
          </p>
        </div>
        <div className="d-flex gap-2">
          <CalendarIcon />
          <p className="text_gray m-0">
            {readingTime} min read
          </p>
        </div>
        <div className="d-flex gap-2">
          <EyeIcon />
          <p className="text_gray m-0">
            {formatViews(1000 + blogViews)} views
          </p>
        </div>
      </div>
      <div className="pt-3 d-flex gap-3">
        <div
          className={`d-flex align-items-center gap-2 py-2 px-3 ${like
            ? "banner_lowertagactive"
            : "banner_lowertag"}`}
          onClick={handleLike}
        >
          {like ? <HeartIconFill /> : <HeartIcon />}
          <p className={`${like ? "text-black m-0" : "text_gray m-0"}`}>Like</p>
        </div>
        <div
          className="d-flex align-items-center gap-2 py-2 px-3 banner_lowertag"
          onClick={handleShare}
        >
          <ShareIcon />
          <p className="text_gray m-0">Share</p>
        </div>
      </div>
    </div>
  );
};
const NewblogDetail = ({ updatedAt, heading, description, id, blogViews }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };

  return (
    <div className="py-3">
      <div className="blog_detail_container">
        <BlogDetailBanner
          updatedAt={updatedAt}
          heading={heading}
          blogid={id}
          blogViews={blogViews}
        />
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="px-md-4 pt-5">
              <div
                className="title_description blog_detail_description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div
              className="overallcard"
              style={{ backgroundImage: `url(${bluebg.src})` }}
            >
              <div className="row gap-y-3">
                <div className="col-12 col-md-6 col-lg-4 text-center  ">
                  <div className="text-center overallbox ">
                    <h4 className="blogdetaillower_heading text-white">
                      <CountUp end={500} enableScrollSpy />+
                    </h4>
                    <p className="fs-6 text-white">Companies Transformed</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 text-center  ">
                  <div className="text-center overallbox ">
                    <h4 className="blogdetaillower_heading text-white">
                      <CountUp end={98} enableScrollSpy />%
                    </h4>
                    <p className="fs-6 text-white">Client Satisfaction</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 text-center  ">
                  <div className="text-center overallbox ">
                    <h4 className="blogdetaillower_heading text-white">
                      <CountUp end={24} enableScrollSpy />/<CountUp end={7} enableScrollSpy />
                    </h4>
                    <p className="fs-6 text-white">Expert Support</p>
                  </div>
                </div>
              </div>
              <p className="py-4 fs-5 text-center text-white">
                Join the brands already working with Base2Brand
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="b2b-btn b2b-btn-sm m-0"
                  onClick={toggleModal}
                >
                  {" "}Request a Quote{" "}
                </button>
              </div>
            </div>
            <div>
              <GetblogBlogdetail />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="pt-5 detailcrmleftfrom">
              <Newcrmform />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
};

export default NewblogDetail;
