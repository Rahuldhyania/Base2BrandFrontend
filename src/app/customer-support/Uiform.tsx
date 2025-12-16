"use client";

import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Uifrom() {
  const [checkbox,SetCheckbox] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "N/A",
    service: "", // Array to store selected services
    companyName: "base2brand",
    country: "India",
    comment: ""
  });
  const handleChange = (
    e:
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://adminbackend.base2brand.com/api/B2Badmin/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        toast.success("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          mobileNo: "N/A",
          service: "",
          companyName: "base2brand",
          country: "India",
          comment: ""
        });
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <div>
      <div>
        <div className="container pt-md-2 pt-3 pb-2 b2b-overflow-hidden">
          <div className="text-start">
            <h3 className="call_back_heading text-black">
               Get in touch
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 text-white">
              <form className="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label className="text-black">Full Name*</label>
                    <input
                      type="text"
                      className="call_back_form_uiux text-black"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="text-black">Email Address*</label>
                    <input
                      type="email"
                      className="call_back_form_uiux text-black"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <label className="text-black">Message*</label>
                    <textarea
                      className="call_back_form_uiux call_back_textarea text-black"
                      name="comment"
                      placeholder="Your comment"
                      value={formData.comment}
                      onChange={handleChange}
                      maxLength={200}
                      required
                    />
                  </div>
                  <div className="d-flex pt-2 pb-2 ui_privacy_policy mb-3">
                    <input type="checkbox" name="" id="" className="custom-checkbox me-1" defaultChecked required />
                    I have read and accepted the <span> <a href="https://base2brand.com/privacy-policy" target="_blank" className="text-black ps-2 font_600"> Privacy Policy </a></span>
                  </div>
                  <div className=" d-flex justify-content-start m-0">
                    <button type="submit" className="b2b-btn disable ui_btn b2b-btn-sm">
                      Submit Now
                    </button>
                  </div>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
