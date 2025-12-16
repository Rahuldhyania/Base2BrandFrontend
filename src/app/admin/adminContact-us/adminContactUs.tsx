'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import Modal from '../adminModal/Modal'; // Adjust the path if needed
 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface ContactData {
  _id?: string; // Optional property
  name: string;
  email: string;
  country: string;
  mobileNo: string;
  companyName: string;
  service: string;
  createdAt:string;
  comment: string;
}

export default function AdminContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);  // Track selected rows for export
  
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedData, setSelectedData] = useState<ContactData>({
    name: '',
    email: '',
    country: '',
    mobileNo: '',
    companyName: '',
    createdAt:'',
    service: '',
    comment: ''
  });
  const [contacts, setContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    fetchContacts();
  }, [currentPage, searchTerm, startDate, endDate]);

  const fetchContacts = async () => {
    try {
      const dateRange = startDate && endDate
      ? `${startDate.toLocaleDateString('en-GB')} to ${endDate.toLocaleDateString('en-GB')}`
      : "";
      
      const response = await axios.get('https://adminbackend.base2brand.com/api/B2Badmin/contacts/search', {
        params: {
          query: searchTerm, // Search term
          dateRange: dateRange, // Date range filter
          page: currentPage,         // Current page number
          limit: itemsPerPage,   
        },
      
      });
      setContacts(response.data.contacts);
      const totalPages = Math.ceil(response.data.contacts / itemsPerPage);
      setTotalPages(totalPages);

    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleOpenModal = (data: ContactData | null = null) => {
    if (data) {
      setSelectedData({ ...data });
      setIsEditing(true);
    } else {
      setSelectedData({
        name: '',
        email: '',
        country: '',
        mobileNo: '',
        companyName: '',
        service: '',
        createdAt:'',
        comment: ''
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedData({
      name: '',
      email: '',
      country: '',
      mobileNo: '',
      companyName: '',
      createdAt:'',
      service: '',
      comment: ''
    });
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSelectedData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && selectedData._id) {
        await axios.put(`https://adminbackend.base2brand.com/api/B2Badmin/contacts/${selectedData._id}`, selectedData);
        alert('Contact updated successfully');
      } else {
        await axios.post('https://adminbackend.base2brand.com/api/B2Badmin/contact-us', selectedData);
        alert('Contact created successfully');
      }
      handleCloseModal();
      fetchContacts(); // Refresh contacts after submit
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert('Error submitting the form');
    }
  };

  const handleDelete = async (id: string) => {
    if(typeof window !== "undefined"){ 
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`http://3.109.22.239:8080/api/B2Badmin/contacts/${id}`);
        alert('Contact deleted successfully');
        fetchContacts(); // Refresh contacts after deletion
      } catch (error) {
        console.error("Error deleting contact:", error);
        alert('Error deleting the contact');
      }
    }
  }
  };


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


   // Function to handle checkbox selection
   const handleCheckboxChange = (id: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  // Function to export selected blogs to CSV
  const exportToCSV = () => {
    // Filter blogs to only include the selected ones
    const selectedData = contacts.filter((blog) => selectedRows.includes(blog._id || ''));

    if (selectedData.length === 0) {
      alert('Please select at least one row.');
      return;
    }

    // Create CSV content
    const header = Object.keys(selectedData[0]);  // Get headers from the keys of the first selected row
    const rows = selectedData.map((row) =>
      header.map((field) => `"${row[field as keyof ContactData]}"`).join(',') // Format each row's data as CSV
    );

    // Combine header and rows into a full CSV string
    const csvContent = `data:text/csv;charset=utf-8,${header.join(',')}\n${rows.join('\n')}`;

    // Encode the CSV content
    const encodedUri = encodeURI(csvContent);

    // Create a download link dynamically
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'selected_blogs.csv'); // Always download a new file with this name
    document.body.appendChild(link);

    // Trigger the download by clicking the link programmatically
    link.click();

    // Remove the link after the download
    document.body.removeChild(link);
  };


  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="container-fluid "> 
        <div className="d-flex justify-content-between align-items-center bg__heading_admin">
        <h2 className="title">Contact Us</h2>
        <div className="d-flex align-items-center gap-3">
        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center position-relative">
          {/* <i className="fa fa-search search-icon"></i> */}
          <input
            type="search"
            className="form-control"
            placeholder="Search contact..."
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
        <button onClick={exportToCSV} className="btn-create ml-2">
              Export to CSV
            </button>
        </div> 
        </div> 
        <div className="table-responsive overlap__header">
        <table className="table">
          <thead>
            <tr> 
            <th>Select</th> 
              <th>Created At</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th> 
              <th>Company Name</th>
              <th>Service</th>
              <th>Message</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {contacts.map((data) => (
              <tr key={data._id} className="table-row"> 
               <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(data._id)}
                  onChange={() => handleCheckboxChange(data._id)}
                />
              </td>
              <td> 
               <div style={{ width:'115px'}}>
                  {new Date(data.createdAt).toLocaleDateString()}
                  </div>
              </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobileNo}</td>
                <td>{data.companyName}</td>
                <td>{data.service}</td>
                <td>{data.comment}</td>
                {/* <td className="actions">
                  <button onClick={() => handleOpenModal(data)} className="btn-edit">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(data._id!)} className="btn-delete">
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        </Stack> */}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="modal-title">{isEditing ? 'Update Contact Us' : 'Create New Contact Us'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={selectedData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={selectedData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={selectedData.country}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="tel"
              name="mobileNo"
              className="form-control"
              value={selectedData.mobileNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              value={selectedData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Service</label>
            <input
              type="text"
              name="service"
              className="form-control"
              value={selectedData.service}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              name="comment"
              className="form-control"
              value={selectedData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            {isEditing ? 'Update' : 'Submit'}
          </button>
        </form>
      </Modal>
    </>
  );
}
