"use client";

import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Callbackform() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "null",
    email: "",
    mobileNo: "",
    service: "",
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

    const payload = {
      __vtrftk:
        "sid:ae9424b5bc72783db333534d6ec0efb4da069571,1765285959",
      publicid: "a65c6b3cb33fbd21ea5a375951a2546f",
      urlencodeenable: "1",
      name: "Base2brand Contact us",

      // CRM fields
      firstname: formData.name || null,
      lastname: null,
      mobile: formData.mobileNo || null,
      email: formData.email || null,
      country: null,

      // Notes
      cf_1196: formData.comment || null,

      // Hidden lead source
      leadsource: "callback form"
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

      if (data?.success) {
        toast.success("Callback request submitted successfully!");

        setFormData({
          name: "",
          lastname: "null",
          email: "",
          mobileNo: "",
          service: "",
          companyName: "base2brand",
          country: "India",
          comment: ""
        });
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      toast.error("Server error!");
    }
  };

  return (
    <div>
      <div className="container pt-md-2 pt-3 pb-2 b2b-overflow-hidden">
        <div className="text-start">
          <h3 className="call_back_heading text-white">
            Let's Discuss With <br />
            Base<span style={{ color: "#F37335" }}>2</span>brand
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 text-white">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <input
                    type="text"
                    className="call_back_form text-white"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12 mb-3">
                  <input
                    type="email"
                    className="call_back_form text-white"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-12 mb-3">
                  <input
                    type="number"
                    className="call_back_form text-white"
                    name="mobileNo"
                    placeholder="Phone"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    onInput={(
                      e: React.FormEvent<HTMLInputElement>
                    ) => {
                      const inputElement =
                        e.target as HTMLInputElement;
                      inputElement.value =
                        inputElement.value.replace(
                          /[^0-9]/g,
                          ""
                        );
                    }}
                  />
                </div>

                <div className="col-lg-12 mb-3">
                  <textarea
                    className="call_back_form call_back_textarea text-white"
                    name="comment"
                    placeholder="Your comment"
                    value={formData.comment}
                    onChange={handleChange}
                    maxLength={200}
                    required
                  />
                </div>

                <div className="d-flex justify-content-end m-0">
                  <button
                    type="submit"
                    className="b2b-btn b2b-btn-sm"
                  >
                    Let's Call !
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
