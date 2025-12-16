"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import radialRight from "../../public/img/radial-right.svg";
// import './our-project.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "react-tooltip";

export default function Seoform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "0",
    service: "", // Array to store selected services
    companyName: "base2brand",
    country: "India",
    comment: "",
    websiteUrl: "",
    competitorUrl: ""
  });

  // console.log("formData", formData);

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
          mobileNo: "0",
          service: "",
          companyName: "base2brand",
          country: "India",
          comment: "",
          websiteUrl: "",
          competitorUrl: ""
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
      <div
        className="footer-map b2b-black-bg pt-5  pb-5"
        style={{
          backgroundImage: `https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha.svg`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right"
        }}
      >
        <div className="container b2b-overflow-hidden">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 text-center mb-5 mb-md-0 seo_form_container"
              data-aos="fade-up"
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/seo-search-engine-optimization-modish-ecommerce-online-retail-business-showing-computer-screen_ve1gkc.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
            <div className="col-lg-6 col-md-12 text-white" data-aos="fade-up">
              <div className="text-start">
                <h2 className="b2b-partners-heading">
                  Test your website&apos;s performance with an in-depth SEO audit to
                  enhance your search engine visibilitys
                </h2>
              </div>
              <form className="footer-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control removeBorder"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      className="form-control removeBorder"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control removeBorder"
                      name="websiteUrl"
                      placeholder="Your website url"
                      required
                      value={formData.websiteUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control removeBorder"
                      name="competitorUrl"
                      placeholder="Competitor url"
                      required
                      value={formData.competitorUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      className="form-control removeBorder"
                      name="comment"
                      placeholder="Your comment"
                      value={formData.comment}
                      onChange={handleChange}
                      maxLength={200}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <button type="submit" className="form-btn">
                      Send comment
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
