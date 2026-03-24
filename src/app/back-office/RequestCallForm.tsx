"use client";

import React, { useState } from "react";
import "../../app/contact-us/Newcontactform.css";
import { toast } from "react-toastify";

function RequestCallForm() {
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
      __vtrftk: "sid:2425af34aa3df2aa825a83b286be68c1dfa90f12,1774336996",
      publicid: "6fb0d65890678d06cb2015642a9f437f",
      urlencodeenable: "1",
      name: "Back office support",

      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      country: formData.country,

      // vtiger custom field
      cf_1196: formData.notes,

      // hidden select field
      leadsource: "backoffice support"
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
        <h2 className="title">Request a Call Back</h2>

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

          <div className="form-group full">
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

export default RequestCallForm;
