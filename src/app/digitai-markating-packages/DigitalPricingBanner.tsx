"use client";
import { useState } from "react";
import BannerImage from "../../../public/img/digitai-markating-packags/digitai-markating-packagsbanner.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DigitalPricing = () => {
  const [error, setError] = useState({
    userName: false,
    email: false,
    phoneNo: false,
  });
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNo: "",
    messages: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newError = {
      userName: formData.userName === "",
      email: formData.email === "",
      phoneNo: formData.phoneNo === "",
    };

    setError(newError);

    if (!newError.userName && !newError.email && !newError.phoneNo) {
      // Clear the form fields immediately
      setFormData({
        userName: "",
        email: "",
        phoneNo: "",
        messages: "",
      });

      try {
        const response = await fetch("https://empmgt.base2brand.com/base2-brand", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Form submitted successfully');
        } else {
          toast.error('Failed to submit the form');
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
      }
    } else {
      console.log("Please fill in all required fields.");
    }
  }


  return (
    <>
      <section
        className="Shopify-Pricing-Banner header-padding"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "80% 90%",
        }}
      >
        <div className="b2b-container-lg">
          <div className="row align-items-center justify-content-between pt-lg-3 pb-lg-5 pt-3 pb-4">
            <div className="col-sm-1 col-md-12 col-lg-6 col-xl-6">
              <div className="pricing-shopifty-page">
                <h1 className="gk-sub-heading text-white">
                  Award Winning Digital Marketing Company in India
                </h1>
                <p className="b2b-sub-text">
                  Base2Brand is a leading digital marketing company in India
                  with professionals with more than 10 years of experience in
                  digital marketing services.
                </p>
              </div>
              <button
                className="gk-b2b-btn b2b-btn-sm mt-3 m-0"

              >
                Let’s Talk
              </button>
            </div>

            {/* Conditionally render the form based on submitform state */}

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 pt-4 pt-lg-0">
              <div
                className="p-20px bg-white"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="p-lg-4 p-4">
                  <h3 className="b2b-sub-heading text-black">
                    Submit Details Below To Get A Call Back
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="text-black mb-2">
                        Name<span style={{ color: "red" }}> *</span>
                      </label>
                      <input
                        name="userName"
                        type="text"
                        placeholder="Enter your name"
                        className="form-control w-100"
                        style={{
                          padding: "10px",
                          borderStyle: "none",
                          border: "1px solid",
                          borderColor: error.userName ? "red" : "#ced4da",
                        }}
                        value={formData.userName}
                        onChange={handleChange}
                      />
                      {error.userName && (
                        <span className="required-text" style={{ color: "red" }}>
                          Please Enter your Name
                        </span>
                      )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <div className="flex-fill">
                        <label className="text-black mb-2">
                          Email<span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                            borderColor: error.email ? "red" : "#ced4da",
                          }}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {error.email && (
                          <span className="required-text" style={{ color: "red" }}>
                            Please Enter a valid Email
                          </span>
                        )}
                      </div>
                      <div className="ms-2 flex-fill">
                        <label className="text-black mb-2">
                          Phone Number<span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          name="phoneNo"
                          type="tel"
                          placeholder="Enter your number"
                          className="form-control w-100"
                          style={{
                            padding: "10px",
                            borderStyle: "none",
                            border: "1px solid",
                            borderColor: error.phoneNo ? "red" : "#ced4da",
                          }}
                          value={formData.phoneNo}
                          onChange={handleChange}
                        />
                        {error.phoneNo && (
                          <span className="required-text" style={{ color: "red" }}>
                            Please Enter your Number
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="text-black mb-2">
                        Message
                      </label>
                      <textarea
                        name="messages"
                        placeholder="Give us a small brief about your project"
                        className="form-control w-100"
                        style={{
                          height: "150px",
                          padding: "10px",
                          borderStyle: "none",
                          border: "1px solid #ced4da",
                        }}
                        value={formData.messages}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="gk-b2b-btn b2b-btn-sm mt-3"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalPricing;
