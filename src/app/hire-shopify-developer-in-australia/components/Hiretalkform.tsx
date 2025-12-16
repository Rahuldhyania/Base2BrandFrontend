"use client";


import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Hiretalkform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
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
          mobileNo: "",
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
    <div className="bg_blue_right py-5">
      <div>
        <div className="cus_container pt-md-2 pt-3 pb-2 b2b-overflow-hidden">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3d-render-shopify-logo-extruded-transparent-green-resin-hovering-45-degree-angle-neon-gree_x102zo.webp"
                alt=""
                width={1000}
                height={500}
                className="hire_from_banner"
              />
            </div>
            <div className="col-12 col-lg-6 text-white">
              <div className="text-start">
                <h3 className="hire_banner_subheading text-white">
                  Get in touch with us
                </h3>
                <p className="b2b-title-text text-white">
                  Book a call with our experts!
                </p>
              </div>
              <form className="" onSubmit={handleSubmit}>
                <div className="px-mt-0 px-3">
                  <div className="row hire_dev_formmain">
                    <div className="col-lg-12 mb-3 hire_developer_input_outer">
                      <label className="text-white">Full Name*</label>
                      <input
                        type="text"
                        className="hire_developer_form text-white"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3 hire_developer_input_outer">
                      <label className="text-white">Email Address*</label>
                      <input
                        type="email"
                        className="hire_developer_form text-white"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3 hire_developer_input_outer">
                      <label className="text-white">Mobile Number*</label>
                      <input
                        type="number"
                        className="hire_developer_form text-white"
                        name="mobileNo"
                        placeholder="Mobile Number"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 hire_developer_input_outer">
                      <label className="text-white">Message*</label>
                      <textarea
                        className="hire_developer_form call_back_textarea text-white"
                        name="comment"
                        placeholder="Your comment"
                        value={formData.comment}
                        onChange={handleChange}
                        maxLength={200}
                        required
                      />
                    </div>
                    <div className="d-flex pt-2 pb-2 mb-3 text-white">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="hire_dev_form_checkbox me-1"
                        required
                      />
                      I have read and accepted the{" "}
                      <span>
                        {" "}<a
                          href="https://base2brand.com/privacy-policy"
                          target="_blank"
                          className="text-blue ps-2 font_600"
                        >
                          {" "}Privacy Policy{" "}
                        </a>
                      </span>
                    </div>
                    <div className=" d-flex justify-content-start m-0">
                      <button
                        type="submit"
                        className="b2b-btn disable ui_btn b2b-btn-sm"
                      >
                        Submit Now
                      </button>
                    </div>
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
