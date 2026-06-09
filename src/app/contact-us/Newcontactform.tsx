"use client";

import React, { useState } from "react";
import "./Newcontactform.css";
import { toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";  // ← CSS import zaroori hai
import PhoneInput from "react-phone-input-2";

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
// ← Mobile ke liye alag handler
  const handlePhoneChange = (value, countryData) => {
  setFormData({
    ...formData,
    mobile: value,
    country: countryData.name  // ← auto fill country name
  });
};
  const handleSubmit = async e => {
    e.preventDefault();
    // Last Name Required
  // if (!formData.lastname.trim()) {
  //   toast.error("Last Name is required");
  //   return;
  // }

  // // Email Validation
  // if (formData.email.trim() !== "") {
  //   const emailFilter =
  //     /^[_/a-zA-Z0-9]+([!"#$%&()*+,./:;<=>?\^_`{|}~-]?[a-zA-Z0-9/_/-])*@[a-zA-Z0-9]+([\_\-\.]?[a-zA-Z0-9]+)*\.([\-\_]?[a-zA-Z0-9])+(\.?[a-zA-Z0-9]+)?$/;

  //   const illegalChars = /[\(\)\<\>\,\;\:\"\[\]]/;

  //   if (!emailFilter.test(formData.email)) {
  //     toast.error("Please enter a valid email address");
  //     return;
  //   }

  //   if (formData.email.match(illegalChars)) {
  //     toast.error("Email contains illegal characters");
  //     return;
  //   }
  // }
            const payload = {
          __vtrftk:
            "sid:8ccf724925dc6eb6e357f28baa5bfe01a512d874,1780396856",

          publicid: "a65c6b3cb33fbd21ea5a375951a2546f",
          urlencodeenable: "1",
          name: "Base2brand Contact us",

          firstname: formData.firstname,
          lastname: formData.lastname,
          mobile: formData.mobile,
          email: formData.email,
          country: formData.country,

          cf_1402: formData.notes,

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
            <label>First Name*</label>
            <input
            type="text"
            name="firstname"
            required
            data-label="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
                type="text"
                name="lastname"
                data-label="Last Name"
                required
                value={formData.lastname}
                onChange={handleChange}
              />
          </div>
           <div className="form-group">
            <label>Mobile Phone*</label>
            {/* ← Sirf yeh input replace karna hai */}
            <PhoneInput
              country={"in"}          // default India
              value={formData.mobile}
              onChange={handlePhoneChange}
              inputProps={{
                name: "mobile",
                required: true,
              }}
              containerStyle={{ width: "100%" ,}}
              inputStyle={{ width: "100%", height: "50px" }}
            />
          </div>

          <div className="form-group">
            <label>Email*</label>
           <input
              type="email"
              name="email"
              required
              data-label="Primary Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Country*</label>
            <input
              type="text"
              name="country"
              data-label="Country"
              required
              readOnly  // ← Country auto fill hoga, user edit nahi kar sakta
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Comment</label>
            <textarea
            name="notes"
            data-label="Customer Notes"
            value={formData.notes}
            onChange={handleChange}
            />
          </div>
          <input
            type="hidden"
            name="leadsource"
            value="base2brand contact us"
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Newcontactform;
