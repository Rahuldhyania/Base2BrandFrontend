"use client";

import React, { useState } from "react";
import "./Newcrmform.css";
import { toast } from "react-toastify";
function Newcrmform({ onCloseModal }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    services: "Shopify Development"
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
      __vtrftk: "sid:49a43073c52509949b7ebf78f93d918471f523f3",
      publicid: "6d0d19741a038631a27222bf5cd1d919",
      urlencodeenable: "1",
      name: "B2B website",
      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      "cf_1188[]": formData.services
    };

    try {
      const res = await fetch("/api/crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
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
          services: "Shopify Development"
        });
        onCloseModal();
      } else {
        toast.error("Submission failed.");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="crm-form">
        <h2 className="title">Let's Discuss Your Project!</h2>

        <div className="grid">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstname"
              required
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
            <label>Mobile Phone*</label>
            <input
              type="text"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Services</label>
            <select
              name="services"
              className="service_select"
              value={formData.services}
              onChange={handleChange}
            >
              <option value="Shopify Development">Shopify Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic & UI/UX Marketing">
                Graphic & UI/UX Marketing
              </option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="DevOps Services">DevOps Services</option>
              <option value="AI Services">AI Services</option>
              <option value="Back Office Services">Back Office Services</option>
            </select>
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Newcrmform;
