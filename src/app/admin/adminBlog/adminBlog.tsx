"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Modal from "../adminModal/Modal";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface BlogData {
  id?: string;
  heading: string;
  description: string;
  createdAt:string;
  image?: File | null;
  imageUrl?: string;
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  slugUrl: string;
  status: boolean;
}

export default function AdminBlog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogData[]>([]);



  const [selectedData, setSelectedData] = useState<BlogData>({
    heading: "",
    description: "",
    image: null,
    pageTitle: "",
    createdAt:'',
    pageDescription: "",
    pageUrl: "",
    slugUrl: "",
    status: false,
  });
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dateRange = startDate && endDate
        ? `${startDate.toLocaleDateString('en-GB')} to ${endDate.toLocaleDateString('en-GB')}`
        : "";

        const response = await axios.get(
          "https://adminbackend.base2brand.com/api/B2Badmin/blogs/search",
          {
            params: {
              query: searchTerm,         // Search query
              page: currentPage,         // Current page number
              limit: itemsPerPage,       // Number of items per page
              dateRange: dateRange,      // Date range filter
            },
          }
        );
       
        setBlogs(response.data.blogs);
        setTotalBlogs(response.data.totalBlogs);
        const totalPages = Math.ceil(response.data.totalBlogs / itemsPerPage);
        setTotalPages(totalPages);

      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert('No blogs found matching the criteria.')
      }
    };

    fetchBlogs();
  }, [currentPage, searchTerm, startDate, endDate]);

  const handleOpenModal = () => {
    setSelectedData({
      heading: "",
      description: "",
      createdAt:'',
      image: null,
      pageTitle: "",
      pageDescription: "",
      pageUrl: "",
      slugUrl: "",
      status: false,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSelectedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditorChange = (value: string) => {
    setSelectedData((prevState) => ({ ...prevState, description: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedData((prevState) => ({
        ...prevState,
        image: e.target.files[0],
      }));
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedData((prevState) => ({
      ...prevState,
      status: e.target.checked,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("heading", selectedData.heading);
      formData.append("description", selectedData.description);
      formData.append("pageTitle", selectedData.pageTitle);
      formData.append("pageDescription", selectedData.pageDescription);
      formData.append("pageUrl", selectedData.pageUrl);
      formData.append("slugUrl", selectedData.slugUrl);
      formData.append("status", selectedData.status.toString());
      if (selectedData.image) {
        formData.append("image", selectedData.image);
      }

      // Create new blog
      const createResponse = await axios.post(
        "https://adminbackend.base2brand.com/api/B2Badmin/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      // Revalidate cache immediately for new blog (no secret needed for internal route)
      try {
        await axios.post("/api/revalidate-blog", {
          slug: selectedData.slugUrl,
        }, {
          withCredentials: true, // Send cookies for authentication
        });
      } catch (revalidateError) {
        console.log("Revalidation failed (non-critical):", revalidateError);
      }
      
      alert("Blog created successfully");

      handleCloseModal();
      const response = await axios.get(
        "https://adminbackend.base2brand.com/api/B2Badmin/blogs"
      );
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Error submitting the form");
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://adminbackend.base2brand.com/api/B2Badmin/blogs/${id}`
        );
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
        Swal.fire("Error!", "Failed to delete the blog.", "error");
      }
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };



 

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

    console.log('snfosnfoern',blogs);
    
  // Custom toolbar for Quill editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] },  { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "blockquote"], 
      [{ 'color': [] }, { 'background': [] }],
      [{ align: [] }],
      ["image"], // Button to insert image
    ],
  };

  const renderBlogs = () => {
    if (blogs.length === 0) {
      return <p className="text-center mt-5">Loading blogs...</p>;
    }

    return (
      <div className="table-responsive overlap__header">
        <table className="table">
          <thead>
            <tr>
              <th>Created At</th>
              <th>Heading</th>
              <th>Page Title</th>
              <th>Status</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="table-row">
                 
                <td>
                  <div style={{ width:'115px'}}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  </td>
                <td>{blog.heading}</td>
                <td>{blog.pageTitle}</td>
                <td>{blog.status ? "Active" : "Inactive"}</td>
                <td>
                  {blog.imageUrl ? (
                    <img
                      src={`${blog.imageUrl}`}
                      alt={blog.heading}
                      width="100"
                      className="blog__img"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td>
                  <div className="blog_desc">
                    {blog.description.replace(/<[^>]*>/g, "")}
                  </div>
                </td>
                <td className="actions">
                  <div className="d-flex">
                    <button
                      onClick={() =>
                        router.push(`/admin/adminBlog/${blog.id}`)
                      }
                      className="btn-edit-admin"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id!)}
                      className="btn-delete-admin"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


   

  return (
    <>
      <div className="container-fluid mb-4">
        <div className="d-flex justify-content-between align-items-center bg__heading_admin">
          <h2 className="title">Blogs</h2>
          <div className="d-flex align-items-center gap-3">
        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center position-relative">
          {/* <i className="fa fa-search search-icon"></i> */}
          <input
            type="search"
            className="form-control"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Date Range Picker */}
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          isClearable
          placeholderText="Select date range"
          className="form-control"
        />
          <button onClick={handleOpenModal} className="btn-create">
            Create new
          </button>
       
        </div>
        </div>
        {renderBlogs()}
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="modal-title">Create New Blog</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-4 mb-2">
            <label>Heading</label>
            <input
              type="text"
              name="heading"
              className="form-control"
              value={selectedData.heading}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label>Content</label>
            {/* <ReactQuill
              value={selectedData.description}
              onChange={handleEditorChange}
              theme="snow"
            /> */}
            <ReactQuill
            value={selectedData?.description || ""}
            onChange={handleEditorChange}
            modules={modules}
            theme="snow"
          />
          </div>
          <div className="form-group mb-2">
            <label>Featured Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Page Title</label>
            <input
              type="text"
              name="pageTitle"
              className="form-control"
              value={selectedData.pageTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Page Description</label>
            <textarea
              name="pageDescription"
              className="form-control"
              value={selectedData.pageDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label>Page Keyword</label>
            <input
              type="text"
              name="pageUrl"
              className="form-control"
              value={selectedData.pageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Slug Url</label>
            <input
              type="text"
              name="slugUrl"
              className="form-control"
              value={selectedData.slugUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-2 d-flex align-items-center justify-content-between mt-3">
            <div className="d-flex gap-2 align-items-center">
              <input
                type="checkbox"
                id="status"
                name="status"
                checked={selectedData.status}
                onChange={handleStatusChange}
              />
              <label htmlFor="status" className="check__box">
                Status
              </label>
            </div>
            <button type="submit" className="btn-create">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
