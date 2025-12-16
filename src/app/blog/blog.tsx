"use client";
import radialBg from "../../../public/img/radial_bg.svg";
import { useContext, useEffect, useState } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./blog.css";
import { usePathname, useRouter } from "next/navigation";
import awwor from "../../../public/img/arrow.svg";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import { AppStateContext } from "../context/AppStateContext";
// import BlogDetail from "../../blog-detail/page";
import PageHead from '../../../component/PageHead';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import LoaderComponent from "../Loading/LoaderComponent";
import Request from "../request-form";

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

function Home() {
  const { blogsRoute, setBlogsRoute } = useContext(AppStateContext);
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

  // const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://adminbackend.base2brand.com/api/B2Badmin/blogs', {
          params: {
            page: currentPage,   // Send current page
            limit: itemsPerPage  // Send items per page
          }
        });
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

    // const handlePopState = () => {
    //   handleUrlChange(data);
    // };

    // Check if window is defined (useful when working with SSR)
    // if (typeof window !== "undefined") {
    //   window.addEventListener('popstate', handlePopState);

    //   return () => {
    //     window.removeEventListener('popstate', handlePopState);
    //   };
    // }
  }, [blogsRoute, currentPage]);  // Dependencies

  const handleImageClick = (id: string, slugUrl: string) => {
    // Navigate using the Next.js router
    router.push(`/blog/${slugUrl}`);
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    }, 200);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const baseURL = "https://base2brand.com/blog";
  const wwwURL = "https://www.base2brand.com/blog";

  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Latest Insights | Stay Updated with Our Blog | Read More",
    description: "Stay updated with the latest insights on digital marketing and web development. Read Base2Brand India blog for expert advice Dive in now!",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };

  const renderBlogs = () => {
    if (data.length === 0) {
      return (
        <div>
          <LoaderComponent />
        </div>
      );
    }

    return data.map((blog) => (
      <div key={blog._id} className="col-12 col-sm-6 mb-sm-4 mb-4 col-md-6 col-lg-6 col-xl-4">
        <div className="blog_section bg-dark h-100" onClick={() => handleImageClick(blog._id, blog.slugUrl)}>
          <img className="blog" src={blog.imageUrl} alt="Blog" />
          <div className="p-4 pb-3 position-relative" style={{ background: "#1F222F" }}>
            <h1 className="blog_desc mb-2 blog-title text-white">
              {blog.heading.split(" ").slice(0, 10).join(" ")}
              {blog.heading.split(" ").length > 10 ? "..." : ""}
            </h1>
            <div className="mt-4 mb-2 btn-ab">
              <button
                className="b2b-btn b2b-btn-sm  m-0"
                onClick={() => handleImageClick(blog._id, blog.slugUrl)}
              >
                View Detail
                <Image className="awwow" src={awwor} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />
      <div className="service-banner " style={{
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#111616"
      }}>

        <div className="container mx-auto">
          <div className="row flex-wrap align-items-center m-auto">
            <div className="col-12 col-sm-12 col-md-7" data-aos="fade-up">
              <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Our Recent Blogs </h1>
              <p className="text-white col-12 col-sm-12 col-md-10">The latest in IT Trends, Strategies and Tips.</p>
              <div className="service-btn d-flex flex-wrap mt-3 w-100">

                <button className="b2b-btn b2b-btn-lg m-0"  onClick={toggleModal}>Request a Quote</button>

              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up">
              <Player
                src='/json/Blogs banner.json'
                loop
                autoplay
                className="animated-imgs animated-banner-img"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid p-5 pb-5">
          <div className="row text-white mb-5 pb-5">

            {renderBlogs()}

            <div className='center_pagination'>
              <Stack spacing={2} alignItems="center">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  size="large"
                />
              </Stack>
            </div>
          </div>
          <Footer />
        </div>
         {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </>
  );
}

export default Home;
