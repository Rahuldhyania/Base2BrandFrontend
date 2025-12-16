"use client";
// import { Player } from "@lottiefiles/react-lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, ChangeEvent } from "react";
import "./customform.css"
// import '../../app/our-project.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cusoform() {
  const [cpopup, setpopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    mobileNo: "",
    comment: ""
  });
  // const [cpopup,setpopup] = useState(false)
  // Event handler function
  const handleChange = (
    e:
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Your form submission logic goes here
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
        // Handle success, maybe show a success comment
        toast.success("Form submitted successfully");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          mobileNo: "",
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
    <div className="mt-5 pb-4 d-flex justify-content-center">
      <div className="cus_form_main ">
        <div className="container md-5 b2b-overflow-hidden outer_center d-flex justify-content-center">
          <div className="row  justify-content-center w-100">
            <div className="col-lg-12 col-md-12 w-90 out_con  text-white d-flex align-items-center  ps-4 pt-3 pe-4 ">
              <form
                className="footer- d-flex align-items-center justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="row w-100">
                  <div className="  col-lg-12 d-flex justify-content-between">
                    <h2 className="cus-heading text-black capmton fw-bold">
                       Get started with a free demo
                    </h2>
                    
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      className="custo_input"
                      name="name"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      className="custo_input"
                      name="lastname"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      className="custo_input"
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
                      className="custo_input"
                      name="mobileNo"
                      placeholder="Phone"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      required
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const inputElement = e.target as HTMLInputElement; // Cast the target to HTMLInputElement
                        inputElement.value = inputElement.value.replace(
                          /[^0-9]/g,
                          ""
                        ); // Only allows digits
                      }}
                    />
                  </div>

                  <div className="col-lg-12 mb-3" id="form_custom_message">
                    <textarea
                      className="custo_input"
                      id=""
                      name="comment"
                      placeholder="Comment"
                      value={formData.comment}
                      onChange={handleChange}
                      maxLength={200}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3 pt-1 pb-2">
                    <button type="submit" className="b2b-btn b2b-btn-sm  m-0">
                      Submit
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
