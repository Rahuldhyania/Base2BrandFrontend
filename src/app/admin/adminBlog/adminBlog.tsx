"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
  useMemo,
  useCallback,
} from "react";
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

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  { ssr: false }
);

interface BlogData {
  id?: string;
  heading: string;
  description: string;
  createdAt: string;
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
  const quillRef = useRef<any>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogData[]>([]);

  const [selectedData, setSelectedData] = useState<BlogData>({
    heading: "",
    description: "",
    image: null,
    pageTitle: "",
    createdAt: "",
    pageDescription: "",
    pageUrl: "",
    slugUrl: "",
    status: false,
  });

  const [blogs, setBlogs] = useState<BlogData[]>([]);

  // ========= CONFIG =========
  const UPLOAD_EDITOR_IMAGE_URL =
    "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/upload-editor-image";

  // NOTE: Agar tumhare backend me ye endpoint nahi hai, to bhi koi issue nahi hoga (catch me ignore hai).
  // If you have a correct endpoint for "content paste log", replace this URL:
  const PASTE_LOG_URL =
    "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/paste-log";

  // ========= FETCH BLOGS =========
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dateRange =
          startDate && endDate
            ? `${startDate.toLocaleDateString(
                "en-GB"
              )} to ${endDate.toLocaleDateString("en-GB")}`
            : "";

        const response = await axios.get(
          "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/search",
          {
            params: {
              query: searchTerm,
              page: currentPage,
              limit: itemsPerPage,
              dateRange,
            },
          }
        );

        setBlogs(response.data.blogs);
        setTotalBlogs(response.data.totalBlogs);
        const totalPages = Math.ceil(response.data.totalBlogs / itemsPerPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("No blogs found matching the criteria.");
      }
    };

    fetchBlogs();
  }, [currentPage, searchTerm, startDate, endDate]);

  // ========= HELPERS =========
  const handleOpenModal = () => {
    setSelectedData({
      heading: "",
      description: "",
      createdAt: "",
      image: null,
      pageTitle: "",
      pageDescription: "",
      pageUrl: "",
      slugUrl: "",
      status: false,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

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
        image: e.target.files![0],
      }));
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedData((prevState) => ({
      ...prevState,
      status: e.target.checked,
    }));
  };

  const getEditor = () => quillRef.current?.getEditor?.();

  const getEditorHtml = () => {
    const editor = getEditor();
    if (!editor) return selectedData.description || "";
    return editor.root?.innerHTML || selectedData.description || "";
  };

  const safePasteLog = async (type: "text" | "image") => {
    try {
      await axios.post(PASTE_LOG_URL, {
        type,
        at: new Date().toISOString(),
      });
    } catch {
      // ignore (non-critical)
    }
  };

  const uploadAndGetUrl = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(UPLOAD_EDITOR_IMAGE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.url as string;
  };

  const insertImageAtCursor = (imageUrl: string) => {
    const editor = getEditor();
    if (!editor) return;

    const range = editor.getSelection(true) || {
      index: editor.getLength(),
      length: 0,
    };
    editor.insertEmbed(range.index, "image", imageUrl);
    editor.setSelection(range.index + 1, 0);
  };

  // Convert dataURL -> File (for fallback submit cleanup)
  const dataUrlToFile = async (
    dataUrl: string,
    filenameBase = "editor-image"
  ) => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const mime = blob.type || "image/png";
    const ext = mime.split("/")[1] || "png";
    return new File([blob], `${filenameBase}.${ext}`, { type: mime });
  };

  // Fallback: if any base64 still exists in content at submit time
  const uploadInlineImagesAndReplace = async (html: string) => {
    const editor = getEditor();

    const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const matches = Array.from((html || "").matchAll(imgSrcRegex));
    let base64Srcs = matches
      .map((m) => m[1])
      .filter((src) => src?.startsWith("data:image/"));

    if (base64Srcs.length === 0 && editor) {
      const delta = editor.getContents();
      const deltaImages: string[] = [];

      delta.ops?.forEach((op: any) => {
        if (op?.insert?.image && typeof op.insert.image === "string") {
          const src = op.insert.image;
          if (src.startsWith("data:image/")) deltaImages.push(src);
        }
      });

      base64Srcs = deltaImages;
    }

    if (!base64Srcs.length) return html;

    let updatedHtml = html;

    for (let i = 0; i < base64Srcs.length; i++) {
      const src = base64Srcs[i];
      try {
        const file = await dataUrlToFile(src, `editor-image-${Date.now()}-${i}`);
        const imageUrl = await uploadAndGetUrl(file);

        updatedHtml = updatedHtml.split(src).join(imageUrl);

        if (editor) {
          const range = editor.getSelection(true) || { index: 0, length: 0 };
          const contents = editor.getContents();
          let index = 0;

          contents.ops?.forEach((op: any) => {
            if (op.insert?.image === src) {
              editor.deleteText(index, 1);
              editor.insertEmbed(index, "image", imageUrl);
            }
            index += typeof op.insert === "string" ? op.insert.length : 1;
          });

          editor.setSelection(range.index, range.length);
          updatedHtml = editor.root.innerHTML;
        }
      } catch (err) {
        console.error("Inline image upload failed:", err);
      }
    }

    return updatedHtml;
  };

  // ========= ✅ PASTE / DROP REAL-TIME HANDLERS =========
  useEffect(() => {
    if (!quillRef.current) return;

    const editor = getEditor();
    if (!editor) return;

    const root = editor.root as HTMLElement;

    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) {
        // still hit "text paste" log if you want
        await safePasteLog("text");
        return;
      }

      // Detect image in clipboard
      let hasImage = false;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.includes("image")) {
          hasImage = true;
          break;
        }
      }

      // If image paste -> prevent base64, upload, insert URL
      if (hasImage) {
        e.preventDefault();
        await safePasteLog("image");

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (!item.type.includes("image")) continue;

          const file = item.getAsFile();
          if (!file) continue;

          try {
            const imageUrl = await uploadAndGetUrl(file);
            insertImageAtCursor(imageUrl);
          } catch (err) {
            console.error("paste image upload failed:", err);
            alert("Image upload failed");
          }
        }
        return;
      }

      // Normal text paste -> allow default but hit api
      await safePasteLog("text");
    };

    const handleDrop = async (e: DragEvent) => {
      const files = e.dataTransfer?.files;
      if (!files || files.length === 0) return;

      const imageFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        if (f && f.type && f.type.startsWith("image/")) imageFiles.push(f);
      }

      if (imageFiles.length === 0) return;

      e.preventDefault();
      await safePasteLog("image");

      for (let i = 0; i < imageFiles.length; i++) {
        try {
          const imageUrl = await uploadAndGetUrl(imageFiles[i]);
          insertImageAtCursor(imageUrl);
        } catch (err) {
          console.error("drop image upload failed:", err);
          alert("Image upload failed");
        }
      }
    };

    const handleDragOver = (e: DragEvent) => {
      // allow dropping into editor
      if (e.dataTransfer) e.preventDefault();
    };

    root.addEventListener("paste", handlePaste as any);
    root.addEventListener("drop", handleDrop as any);
    root.addEventListener("dragover", handleDragOver as any);

    return () => {
      root.removeEventListener("paste", handlePaste as any);
      root.removeEventListener("drop", handleDrop as any);
      root.removeEventListener("dragover", handleDragOver as any);
    };
  }, []);

  // ========= SUBMIT =========
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Always take latest HTML directly from editor
      const editorHtml = getEditorHtml();

      // Safety fallback: upload any leftover base64 and replace
      const cleanedDescription = await uploadInlineImagesAndReplace(editorHtml);

      formData.append("heading", selectedData.heading);
      formData.append("description", cleanedDescription);
      formData.append("pageTitle", selectedData.pageTitle);
      formData.append("pageDescription", selectedData.pageDescription);
      formData.append("pageUrl", selectedData.pageUrl);
      formData.append("slugUrl", selectedData.slugUrl);
      formData.append("status", selectedData.status.toString());

      if (selectedData.image) {
        formData.append("image", selectedData.image);
      }

      await axios.post("https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Revalidate cache
      try {
        await axios.post(
          "/api/revalidate-blog",
          { slug: selectedData.slugUrl },
          { withCredentials: true }
        );
      } catch (revalidateError) {
        console.log("Revalidation failed (non-critical):", revalidateError);
      }

      alert("Blog created successfully");
      handleCloseModal();

      const response = await axios.get(
        "https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs"
      );
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Error submitting the form");
    }
  };

  // ========= DELETE =========
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
          `https://admin.b2bcampus.com/api/v2/api/B2Badmin/blogs/${id}`
        );
        Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
        Swal.fire("Error!", "Failed to delete the blog.", "error");
      }
    }
  };

  const handlePageChange = (_event: any, value: number) => setCurrentPage(value);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // ========= QUILL TOOLBAR IMAGE (as-is) =========
  const imageHandler = useCallback(function (this: any) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    const quill = this.quill;

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const imageUrl = await uploadAndGetUrl(file);

        if (quill) {
          const range = quill.getSelection(true) || {
            index: quill.getLength(),
            length: 0,
          };
          quill.insertEmbed(range.index, "image", imageUrl);
          quill.setSelection(range.index + 1, 0);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link", "blockquote"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );

  // ========= RENDER =========
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
            {blogs.map((blog) => (
              <tr key={blog.id} className="table-row">
                <td>
                  <div style={{ width: "115px" }}>
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
                      onClick={() => router.push(`/admin/adminBlog/${blog.id}`)}
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
            <div className="search-bar d-flex align-items-center position-relative">
              <input
                type="search"
                className="form-control"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

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
            <ReactQuill
              forwardedRef={quillRef}
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
