"use client";

import React, { useState } from "react";
import "./Newcontactform.css";
import { toast } from "react-toastify";

function Newcontactform() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    country: "",
    notes: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      __vtrftk: "sid:ae9424b5bc72783db333534d6ec0efb4da069571,1765285959",
      publicid: "a65c6b3cb33fbd21ea5a375951a2546f",
      urlencodeenable: "1",
      name: "Base2brand Contact us",

      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      country: formData.country,

      // vtiger custom field
      cf_1196: formData.notes,

      // hidden select field
      leadsource: "base2brand contact us"
    };

    try {
      const res = await fetch("/api/crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");

        setFormData({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          country: "",
          notes: ""
        });
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="crm-form  bg-white p-4">
        <h2 className="title">Start a Conversations</h2>

        <div className="grid">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastname"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile Phone</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Comment</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            //   rows="4"
            />
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Newcontactform;
