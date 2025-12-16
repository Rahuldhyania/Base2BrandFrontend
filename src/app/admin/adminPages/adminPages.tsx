import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

const AdminPages = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await axios.get(`https://adminbackend.base2brand.com/api/B2Badmin/page/getall`);

      if (response.data && response.data.data) {
        const allPages = response.data.data;

        setPages(allPages);

        // totalPages calculate karo
        setTotalPages(Math.ceil(allPages.length / itemsPerPage));
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
    }
  };

  const handleDelete = async (id) => {
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
        await axios.delete(`https://adminbackend.base2brand.com/api/B2Badmin/page/delete/${id}`);
        Swal.fire("Deleted!", "Your page has been deleted.", "success");

        const updatedPages = pages.filter((page) => page._id !== id);
        setPages(updatedPages);
        setTotalPages(Math.ceil(updatedPages.length / itemsPerPage));
        fetchPages();
      } catch (error) {
        console.error("Error deleting page:", error);
        Swal.fire("Error!", "Failed to delete the page.", "error");
      }
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderPages = () => {
    if (pages.length === 0) {
      return <p className="text-center mt-5">Loading pages...</p>;
    }

    // Pagination ke liye slice
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPages = pages.slice(startIndex, endIndex);

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Created At</th>
              <th>Page Name</th>
              <th>SEO Title</th>
              <th>Status</th>
              <th>Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPages.map((page) => (
              <tr key={page._id} className="table-row">
                <td>
                  <div style={{ width: "115px" }}>
                    {new Date(page?.createdAt).toLocaleDateString()}
                  </div>
                </td>
                <td>{page?.pageName}</td>
                <td>{page?.seoPageTitle}</td>
                <td>{page?.status ? "Active" : "Inactive"}</td>
                <td>{page?.pageSlug}</td>
                <td className="actions">
                  <div className="d-flex">
                    <button
                      onClick={() => router.push(`/admin/adminPages/${page.id}`)}
                      className="btn-edit-admin"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
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
          <h2 className="title">Pages</h2>
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => router.push(`/admin/adminPages/adminPageCreate`)}
              className="btn-create"
            >
              Create new
            </button>
          </div>
        </div>
        {renderPages()}
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
      </div>
    </>
  );
};

export default AdminPages;

