'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import Modal from '../adminModal/Modal'; // Adjust the path if needed
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface QuoteData {
  _id?: string; // Optional property
  services: string[];
  projectType: string;
  projectDescription: string;
  name: string;
  email: string;
  country: string;
  mobileNo: string;
  createdAt:string;
}

export default function AdminQuotes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);  // Track selected rows for export


  const [selectedData, setSelectedData] = useState<QuoteData>({
    services: [],
    projectType: '',
    projectDescription: '',
    name: '',
    email: '',
    createdAt:'',
    country: '',
    mobileNo: ''
  });
  const [quotes, setQuotes] = useState<QuoteData[]>([]);

  useEffect(() => {
    fetchQuotes();
  },  [searchTerm, startDate, endDate]);

  const fetchQuotes = async () => {
    try {

      const dateRange = startDate && endDate
      ? `${startDate.toLocaleDateString('en-GB')} to ${endDate.toLocaleDateString('en-GB')}`
      : "";

      const response = await axios.get('https://adminbackend.base2brand.com/api/B2Badmin/quotes/search',{
        params: {
          query: searchTerm, // Search term
          dateRange: dateRange, // Date range filter
        },
      })
      setQuotes(response.data.quotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  const handleOpenModal = (data: QuoteData | null = null) => {
    if (data) {
      setSelectedData({ ...data });
      setIsEditing(true);
    } else {
      setSelectedData({
        services: [],
        projectType: '',
        projectDescription: '',
        name: '',
        email: '',
        country: '',
        createdAt:'',
        mobileNo: ''
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedData({
      services: [],
      projectType: '',
      projectDescription: '',
      name: '',
      email: '',
      country: '',
      createdAt:'',
      mobileNo: ''
    });
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedData(prevState => ({ ...prevState, [name]: value }));
  };
  

  const handleServicesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedData(prevState => ({
        ...prevState,
        services: [...prevState.services, value]
      }));
    } else {
      setSelectedData(prevState => ({
        ...prevState,
        services: prevState.services.filter(service => service !== value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && selectedData._id) {
        await axios.put(`https://adminbackend.base2brand.com/api/B2Badmin/quotes/${selectedData._id}`, selectedData);
        alert('Quote updated successfully');
      } else {
        await axios.post('https://adminbackend.base2brand.com/api/B2Badmin/quotes', selectedData);
        alert('Quote created successfully');
      }
      handleCloseModal();
      fetchQuotes();
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert('Error submitting the form');
    }
  };

  const handleDelete = async (id: string) => {
    if(typeof window !== "undefined"){ 

    if (window.confirm("Are you sure you want to delete this quote?")) {
      try {
        await axios.delete(`https://adminbackend.base2brand.com/api/B2Badmin/quotes/${id}`);
        alert('Quote deleted successfully');
        fetchQuotes();
      } catch (error) {
        console.error("Error deleting quote:", error);
        alert('Error deleting the quote');
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
    const selectedData = quotes.filter((blog) => selectedRows.includes(blog._id || ''));

    if (selectedData.length === 0) {
      alert('Please select at least one row.');
      return;
    }

    // Create CSV content
    const header = Object.keys(selectedData[0]);  // Get headers from the keys of the first selected row
    const rows = selectedData.map((row) =>
      header.map((field) => `"${row[field as keyof QuoteData]}"`).join(',') // Format each row's data as CSV
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

  return (
    <>
      <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center bg__heading_admin">
        <h2 className="title">Quotes</h2>

        <div className="d-flex align-items-center gap-3">
        {/* Search Bar */}
        <div className="search-bar d-flex align-items-center position-relative">
          {/* <i className="fa fa-search search-icon"></i> */}
          <input
            type="search"
            className="form-control"
            placeholder="Search quote..."
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
        {/* <button onClick={() => handleOpenModal()} className="btn-create">Create new</button> */}
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
              <th>Country</th>
              <th>Project Type</th>
              <th>Services</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((data) => (
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
                <td>{data.country}</td> 
                <td>
                  <div style={{width:'130px'}}>
                  {data.projectType}
                  </div>
                  </td>
                <td>{data.services.join(' , ')}</td>
                <td>{data.projectDescription}</td>
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
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="modal-title">{isEditing ? 'Update Quote' : 'Create New Quote'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Services (select multiple)</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Consulting"
                  checked={selectedData.services.includes('Consulting')}
                  onChange={handleServicesChange}
                />
                Consulting
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Development"
                  checked={selectedData.services.includes('Development')}
                  onChange={handleServicesChange}
                />
                Development
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Design"
                  checked={selectedData.services.includes('Design')}
                  onChange={handleServicesChange}
                />
                Design
              </label>
              {/* Add more checkboxes as needed */}
            </div>
          </div>
          <div className="form-group">
            <label>Project Type</label>
            <select
              name="projectType"
              className="form-control"
              value={selectedData.projectType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Project">Project</option>
              <option value="Retainer">Retainer</option>
              <option value="Hourly">Hourly</option>
            </select>
          </div>
          <div className="form-group">
            <label>Project Description</label>
            <textarea
              name="projectDescription"
              className="form-control"
              value={selectedData.projectDescription}
              onChange={handleChange}
            ></textarea>
          </div>
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
          <button type="submit" className="btn-submit">
            {isEditing ? 'Update' : 'Submit'}
          </button>
        </form>
      </Modal>
    </>
  );
}
