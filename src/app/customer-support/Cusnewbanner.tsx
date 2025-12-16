"use client";
import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
export default function Cusnewbanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    service: "", // Array to store selected services
    companyName: "base2brand",
    country: "India",
    comment: "",
    competitorUrl: "",
    mobileNo: '0'
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
          websiteUrl: "",
          service: "",
          companyName: "base2brand",
          country: "India",
          comment: "",
          competitorUrl: "",
          mobileNo: '0'
        });
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };
  return (
    <div className="bg_home">
      <div
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh_2_tfauei_1.svg")',
          backgroundRepeat: "no-repeat",
          width: "100%"
        }}
        className=" pt-5 pb-5"
      >
        <div className="container mx-auto pt-sm-5 pb-sm-5">
          <div className="row flex-wrap align-items-center m-auto pt-0 pb-0 pt-sm-5 pb-sm-5">
            <div className="col-12 col-sm-12 col-md-6 ">
              <h1 className="b2b-sub-heading-bold">
                <p className="m-0 new_customer_title1">
                  Resolving Your Customers’ Issues, Our Priority –
                </p>
                <p className="m-0 new_customer_title2">
                  24/7 Customer Support at
                </p>
                <p className="m-0 new_customer_title3">
                  Base<span style={{ color: "#F37335" }}>2</span>Brand!
                </p>
              </h1>
              <p className="text-white col-12 col-sm-12 col-md-10 pt-2">
                At Base2Brand with round-the-clock assistance, expert solutions,
                and <br /> personalized service, we ensure your business stays
                ahead,<br />
                no matter the challenge.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center">
              <div className="col-lg-12 col-md-12 text-white cus_text_zindex">
                <div className="text-start">
                  <h2 className="b2b-partners-heading">
                    Get started with a free demo! 👋
                  </h2>
                </div>
                <form className="footer-form" onSubmit={handleSubmit}>
                  <div className="row pt-3 cus_text_zindex">
                    <div className="col-lg-6 mb-3 cus_form_outer">
                      <input
                        type="text"
                        className="form-control customer_form_new removeBorder"
                        name="name"
                        placeholder="Name"
                        id="cus_from_new"
                        value={formData.name}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="col-lg-6 mb-3 cus_form_outer">
                      <input
                        type="email"
                        id="cus_from_new"
                        className="form-control customer_form_new removeBorder"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 mb-3 cus_form_outer">
                      <input
                        type="text"
                        id="cus_from_new"
                        className="form-control customer_form_new removeBorder"
                        name="websiteUrl"
                        placeholder="Your website url"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 mb-3 cus_form_outer">
                      <input
                        type="text"
                        id="cus_from_new"
                        className="form-control customer_form_new removeBorder"
                        name="competitorUrl"
                        placeholder="Competitor url"
                        value={formData.competitorUrl}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3 cus_form_outer">
                      <textarea
                        className="form-control  customer_form_new removeBorder"
                        name="comment"
                        placeholder="Your comment"
                        value={formData.comment}
                        id="cus_from_new"
                        onChange={handleChange}
                        maxLength={200}
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-3 pt-3 ">
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
    </div>
  );
}
