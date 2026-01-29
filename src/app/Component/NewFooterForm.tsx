"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

function NewFooterForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    project: "",
    nda: false,
    newsletter: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      __vtrftk:
        "sid:138be17a50b5d5b16c13c88c41f52b4e2cff7dff,1769081630",
      publicid: "ff86a0070ff9c58da7e3e3ee130122b8",
      urlencodeenable: "1",
      name: "Base2brand footer form",

      lastname: formData.fullname, // VTiger required
      mobile: formData.mobile,
      email: formData.email,
      cf_1370: formData.project,
      cf_1372: formData.nda ? true : false,
      cf_1374: formData.newsletter ? true : false,
      cf_1298: "Base2brand footer form"
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
        toast.success("Thank you! We’ll get back to you soon.");

        setFormData({
          fullname: "",
          mobile: "",
          email: "",
          project: "",
          nda: false,
          newsletter: false
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Server error!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{height : '100%'}}>
      <div
        className="newfooterFormmain"
        style={{ backgroundImage: "url(/newhomepage/newfrombg.webp)" }}
      >
        <div className="newfooterouter">
          <h2 className="b2b-sub-heading">
             Fill Out Your Project Details to Get Started!
          </h2>

          <p className="b2b-sub-text pt-lg-2 pt-2 col-12 col-lg-10">
            Share the details of your project – like scope or business challenges – and our team will review them carefully to plan the next steps with you.
          </p>

          <div>
            {/* Full Name */}
            <div className="newfooterouterfrom">
              <div className="from_outer">
                <div className="form">
                  <input
                    type="text"
                    name="fullname"
                    required
                    autoComplete="off"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  <label className="label-name">
                    <span className="content-name">
                      Your full name*
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="newfooterouterfrom">
              <div className="from_outer">
                <div className="form">
                  <input
                    type="number"
                    name="mobile"
                    required
                    autoComplete="off"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <label className="label-name">
                    <span className="content-name">
                      📞 +91 123-456-7891
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="newfooterouterfrom">
              <div className="from_outer">
                <div className="form">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label className="label-name">
                    <span className="content-name">
                      Your E-mail*
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="newfooterouterfrom">
              <div className="from_outer">
                <div className="form">
                  <input
                    type="text"
                    name="project"
                    required
                    autoComplete="off"
                    value={formData.project}
                    onChange={handleChange}
                  />
                  <label className="label-name">
                    <span className="content-name">
                      About your project*
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="row">
            <div className="col-12 col-md-8">
              <p className="b2b-sub-text pt-2 col-12 col-lg-10">
                By sending this form I confirm that I have read and
                accept the{" "}
                <Link href="/privacy-policy" className="text_underline">
                  Privacy Policy
                </Link>
              </p>

              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  name="nda"
                  className="newcheckbox"
                  checked={formData.nda}
                  onChange={handleChange}
                />
                <p className="b2b-sub-text m-0">
                  Request an NDA
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  name="newsletter"
                  className="newcheckbox"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <p className="b2b-sub-text m-0">
                  Stay updated with our latest insights
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex align-items-end justify-content-end">
              <button type="submit" className="b2b-btn b2b-btn-lg">
                Let’s Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewFooterForm;
