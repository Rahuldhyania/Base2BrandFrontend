"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../../sidebar";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);

interface BlogData {
  _id?: string;
  heading: string;
  description: string;
  imageUrl?: string;
  pageTitle: string;
  pageDescription: string;
  slugUrl: string;
  status: boolean;
  category:string;
  featured:boolean
}

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams(); // Get dynamic ID from URL
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/${id}`
          );
          setBlogData(response.data.blog);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching blog data:", error);
          setIsLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlogData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleEditorChange = (value: string) => {
    setBlogData((prev) => (prev ? { ...prev, description: value } : null));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData((prev) => (prev ? { ...prev, status: e.target.checked } : null));
  };
  const handleFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData((prev) => (prev ? { ...prev, featured: e.target.checked } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!blogData || !id) return;

    const formData = new FormData();
    formData.append("heading", blogData.heading);
    formData.append("description", blogData.description);
    formData.append("pageTitle", blogData.pageTitle);
    formData.append("pageDescription", blogData.pageDescription);
    formData.append("slugUrl", blogData.slugUrl);
    formData.append('category',blogData.category)
    formData.append("status", blogData.status.toString());
    formData.append("featured", blogData.featured.toString());
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      
      // Revalidate cache immediately for updated blog (no secret needed for internal route)
      try {
        await axios.post("/api/revalidate-blog", {
          slug: blogData.slugUrl,
        }, {
          withCredentials: true, // Send cookies for authentication
        });
      } catch (revalidateError) {
        // console.log("Revalidation failed (non-critical):", revalidateError);
      }
      
      alert("Blog updated successfully");
      router.push("/admin/adminBlog"); // Redirect back to the table page
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Error updating blog");
    }
  };

  // Custom image handler for Quill editor - uploads to server instead of base64
  const imageHandler = useCallback(function(this: any) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    const quill = this.quill; // 'this' is the toolbar instance, this.quill gives us the editor

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const formData = new FormData();
          formData.append("image", file);

          // Upload image to server
          const response = await axios.post(
            "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/upload-editor-image",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          // Get the image URL from response
          const imageUrl = response.data.url;

          // Insert the image at cursor position
          if (quill) {
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, "image", imageUrl);
            quill.setSelection(range.index + 1);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("Failed to upload image. Please try again.");
        }
      }
    };
  }, []);

  // Custom toolbar for Quill editor with custom image handler
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] },  { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        ["link", "blockquote"], 
        [{ 'color': [] }, { 'background': [] }],
        [{ align: [] }],
        ["image"], // Button to insert image
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), [imageHandler]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
 
  return (

    <div className="sidebar__with__data">
    <div className="side__bar">
      <Sidebar />
    </div>
    <div className="main__page__content mt-5">
    
    <div className="container">
      <div className="bg__heading_admin">
      <h2 className="title">Edit Blog</h2>
      </div>
      <div className="table-responsive overlap__header editForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Heading</label>
          <input
            type="text"
            name="heading"
            value={blogData?.heading || ""}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-2">
          <label>Content</label>
          <ReactQuill
            forwardedRef={quillRef}
            value={blogData?.description || ""}
            onChange={handleEditorChange}
            modules={modules}
            theme="snow"
          />
        </div>
        <div className="form-group mb-2">
          <label>Image</label>
          <input
            type="file"
            onChange={handleFileChange} 
            className="form-control"
          />
                {blogData?.imageUrl ? (
          <div className="image-preview">
            <img
              src={blogData?.imageUrl}
              alt="Current Blog Image" 
              className="blog-image-preview"
            />
          </div>
        ) : (
          <p>No image selected</p>
        )}
        </div>
        <div className="form-group mb-2">
          <label>Page Title</label>
          <input
            type="text"
            name="pageTitle"
            value={blogData?.pageTitle || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>Page Description</label>
          <textarea
            name="pageDescription"
            value={blogData?.pageDescription || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label>Slug URL</label>
          <input
            type="text"
            name="slugUrl"
            value={blogData?.slugUrl || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
          <div className="form-group mb-2">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={blogData?.category || ""}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="form-group mb-2">
          <div className="d-flex gap-2 align-items-center">
          <input id="status" name='status'
            type="checkbox"
            checked={blogData?.status || false}
            onChange={handleStatusChange}
          />
          <label htmlFor="status" className="check__box">Status</label>

          </div>
        </div>
          <div className="form-group mb-2">
          <div className="d-flex gap-2 align-items-center">
          <input id="featured" name='featured'
            type="checkbox"
            checked={blogData?.featured || false}
            onChange={handleFeaturedChange}
          />
          <label htmlFor="featured" className="check__box">featured</label>

          </div>
        </div>
        <div className="form-footer">
          <button type="submit" className="btn-create">
            Update Blog
          </button>
        </div>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
}
