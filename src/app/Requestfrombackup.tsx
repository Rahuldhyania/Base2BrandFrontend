"use client";
import React, { useState, ChangeEvent, useEffect, useMemo } from "react";
// import $ from 'jquery';
import quoteImg from "../../public/contact-us/quote-img.svg";
import "./form.css";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./request-form.css";
import Select from "react-select";
import countryList from "react-select-country-list";

interface ModalProps {
  onCloseModal: () => void;
}

const RequestForm: React.FC<ModalProps> = ({ onCloseModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    country: "",
    services: [] as string[],
    projectType: "Retainer",
    projectDescription: ""
  });
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = value => {
    setValue(value);
    setFormData({
      ...formData,
      country: value.label // Assuming value is an object like {label: 'Country Name', value: 'Country Code'}
    });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      services: checked
        ? [...prevData.services, value]
        : prevData.services.filter(service => service !== value)
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      // ----------------------------------------------------
      // 1) SUBMIT TO YOUR BACKEND FIRST
      // ----------------------------------------------------
      const response = await fetch(
        "https://adminbackend.base2brand.com/api/B2Badmin/quotes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      // If your API failed → show toast & stop
      if (!response.ok) {
        toast.error("Failed to submit form");
        setLoading(false);
        return;
      }

      // ----------------------------------------------------
      // 2) SUBMIT TO V-TIGER CRM FORM
      // ----------------------------------------------------

      // Split Name → firstname / lastname
      const fullName = formData.name.trim().split(" ");
      const firstname = fullName.slice(0, -1).join(" ") || fullName[0];
      const lastname = fullName.slice(-1).join(" ") || "User";

      // Create CRM form data object
      const crmForm = new FormData();
      crmForm.append(
        "__vtrftk",
        "sid:49a43073c52509949b7ebf78f93d918471f523f3,1764669131"
      );
      crmForm.append("publicid", "6d0d19741a038631a27222bf5cd1d919");
      crmForm.append("urlencodeenable", "1");
      crmForm.append("name", "B2B website");

      // CRM required fields
      crmForm.append("lastname", lastname);
      crmForm.append("firstname", firstname);
      crmForm.append("mobile", formData.mobileNo);
      crmForm.append("email", formData.email);
      crmForm.append("website", "");
      crmForm.append("secondaryemail", "");
      crmForm.append("pobox", "");
      crmForm.append("code", "");
      crmForm.append("country", formData.country);
      crmForm.append("city", "");
      crmForm.append("state", "");

      // POST to CRM
      await fetch("https://crm.base2brand.com/modules/Webforms/capture.php", {
        method: "POST",
        body: crmForm
      });

      // ----------------------------------------------------
      // 3) SUCCESS UI
      // ----------------------------------------------------
      toast.success("Form submitted successfully to CRM");

      nextForm();
      setTimeout(() => {
        onCloseModal();
      }, 800);
    } catch (error) {
      toast.error("Error submitting form");
      console.log("CRM ERROR:", error);
    }

    setLoading(false);
  };

  const handleRecaptchaVerify = (response: string | null) => {
    // Verify if the response is not null
    if (response) {
      // handleSubmit();
    } else {
      console.error("reCAPTCHA verification failed");
    }
  };
  const nextForm = async () => {
    const ModalBody = document.querySelector(".b2b-modal-body");
    const TabNumber = ModalBody.getAttribute("data-tab");
    const NextTabNumber = parseInt(TabNumber) + 1;
    ModalBody.classList.remove("tab-" + TabNumber);
    ModalBody.classList.add("tab-" + NextTabNumber);
    ModalBody.setAttribute("data-tab", `${NextTabNumber}`);

    // boxTabs.forEach(boxTab => {
    //     boxTab.classList.remove("d-block");
    //     boxTab.classList.add("d-none");
    //   });
    const boxTabBodyprev = document.querySelector(`.box-tab-${TabNumber}`);
    boxTabBodyprev.classList.remove("d-block");
    boxTabBodyprev.classList.add("d-none");

    const boxTabBody = document.querySelector(`.box-tab-${NextTabNumber}`);
    boxTabBody.classList.remove("d-none");
    boxTabBody.classList.add("d-block");

    return false;
  };

  const prevForm = async () => {
    const ModalBody = document.querySelector(".b2b-modal-body");
    const TabNumber = ModalBody.getAttribute("data-tab");
    const prevTabNumber = parseInt(TabNumber) - 1;
    ModalBody.classList.remove("tab-" + TabNumber);
    ModalBody.classList.add("tab-" + prevTabNumber);
    ModalBody.setAttribute("data-tab", `${prevTabNumber}`);

    const boxTabBodyprev = document.querySelector(`.box-tab-${TabNumber}`);
    boxTabBodyprev.classList.remove("d-block");
    boxTabBodyprev.classList.add("d-none");

    const boxTabBody = document.querySelector(`.box-tab-${prevTabNumber}`);
    boxTabBody.classList.remove("d-none");
    boxTabBody.classList.add("d-block");

    return false;
  };

  const stepBack = event => {
    event.preventDefault();
    prevForm();
  };
  const handleClick = event => {
    console.log("event22222222222", event);
    event.preventDefault();

    // Get all checkboxes with name "service"
    const checkboxes = document.querySelectorAll(
      'input[name="service"]:checked'
    );
    const selectedRadio = document.querySelector(
      'input[name="service_type"]:checked'
    ) as HTMLInputElement;

    // Check if at least one checkbox is checked
    const errorBox = document.querySelector(".serviceError") as HTMLElement;

    if (checkboxes.length === 0 && !selectedRadio) {
      // Show error projectDescription
      errorBox.style.display = "block";
    } else {
      // Hide error projectDescription
      errorBox.style.display = "none";
      nextForm();
    }
  };
  return (
    <div
      className="modal request-form fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      data-modal="hideTab"
    >
      <div className="modal-dialog modal-lg ">
        <div className="modal-content b2b-modal-content p-0">
          <div className="modal-body b2b-modal-body tab-1" data-tab="1">
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                onClick={stepBack}
                className="b2b-btn-back"
                aria-label="Back"
              />
              <button
                type="button"
                onClick={onCloseModal}
                className="btn-close b2b-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="box-tab box-tab-1 d-block">
                <h2>Quote</h2>
                <h3>What services would you like to opt?</h3>
                <div className="formServices request mb-2 pb-2">
                  <div className="ux_color">
                    <input
                      className="serviceCheckbox"
                      id="uxui"
                      type="checkbox"
                      name="service"
                      value="UI/UX"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="uxui">UX-UI</label>
                  </div>
                  <div className="branding_color">
                    <input
                      className="serviceCheckbox"
                      id="branding"
                      type="checkbox"
                      name="service"
                      value="Branding"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="branding">Branding</label>
                  </div>
                  <div className="development_color">
                    <input
                      className="serviceCheckbox"
                      id="development"
                      type="checkbox"
                      name="Development"
                      value="Development"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="development">Development</label>
                  </div>
                  <div className="marketing_color">
                    <input
                      className="serviceCheckbox"
                      id="marketing"
                      type="checkbox"
                      name="service"
                      value="Marketing"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="marketing">Marketing</label>
                  </div>
                  <div className="service_color">
                    <input
                      className="serviceCheckbox"
                      id="all"
                      type="checkbox"
                      name="service"
                      value="ERP Services"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="all">ERP Services</label>
                  </div>
                  <div className="other_color">
                    <input
                      className="serviceCheckbox"
                      id="other"
                      type="checkbox"
                      name="other"
                      value="other"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <div
                  className="errorBox serviceError"
                  style={{ display: "none" }}
                >
                  <span className="error">Please fill out this field</span>
                </div>
                <div
                  className="errorBox serviceError"
                  style={{ display: "none" }}
                >
                  <span className="error">Please fill out this field</span>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="b2b-continue-btn"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <div className="box-tab box-tab-2 d-none">
                <h2>Quote</h2>
                <h3>What services would you like to opt?</h3>
                <div className="formServices request mb-2 pb-2">
                  <div>
                    <input
                      className="serviceType"
                      id="Project"
                      type="radio"
                      name="service_type"
                      value="Project"
                      checked={formData.projectType === "Project"}
                      onChange={handleChange}
                    />
                    <label onClick={handleClick} htmlFor="Project">
                      Project
                    </label>
                  </div>
                  <div>
                    <input
                      className="serviceType"
                      id="Retainer"
                      type="radio"
                      name="service_type"
                      value="Retainer"
                      checked={formData.projectType === "Retainer"}
                      onChange={handleChange}
                    />
                    <label onClick={handleClick} htmlFor="Retainer">
                      Retainer
                    </label>
                  </div>
                  <div>
                    <input
                      className="serviceType"
                      id="Hourly"
                      type="radio"
                      name="service_type"
                      value="Hourly"
                      checked={formData.projectType === "Retainer"}
                      onChange={handleChange}
                    />
                    <label onClick={handleClick} htmlFor="Hourly">
                      Hourly
                    </label>
                  </div>
                  <div
                    className="errorBox serviceTypeError"
                    style={{ display: "none" }}
                  >
                    <span className="error">Please fill out this field</span>
                  </div>
                </div>
              </div>
              <div className="box-tab box-tab-3 d-none">
                <h2>Quote</h2>
                <h3 className="text-center">Project description</h3>
                <div className="formDescription mb-2 pb-2">
                  <div>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className="project_description"
                      maxLength={200}
                    />
                  </div>
                </div>
                <div className="errorBox descError" style={{ display: "none" }}>
                  <span className="error">Please fill out this field</span>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="b2b-continue-btn"
                  >
                    Continue
                  </button>
                </div>
              </div>
              <div className="box-tab box-tab-4 d-none">
                <h2>Quote</h2>
                <div className="formIntro mb-2 pb-2">
                  <div className="formRow pb-2">
                    <label className="form-label">Hi ! am</label>
                    <input
                      type="text"
                      required
                      placeholder="eg.Andy"
                      className="form-control removeBorder"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="formRow pb-2">
                    <label className="form-label">Reach me at</label>
                    <input
                      type="email"
                      required
                      placeholder="eg.hello@gmail.com"
                      className="form-control removeBorder"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="formRow countrySelect pb-2">
                    <label className="form-label">Country</label>
                    <Select
                      className="w-50 quote_list"
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                    {/* <select required className="form-control removeBorder" id="" name="service" > 
                                        <option value="India">India</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="AmericanSamoa">AmericanSamoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina"></option><option value="Armenia"></option>
                                        </select> */}
                  </div>
                  <div className="formRow pb-2">
                    <label className="form-label">Mobile No.</label>
                    <input
                      type="number"
                      required
                      placeholder="eg.7686788766"
                      className="form-control removeBorder"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="b2b-quote-btn"
                    disabled={loading} // Disable button when loading is true
                  >
                    <span>
                      {" "}{loading ? "Submitting..." : "Submit"}{" "}
                    </span>
                    {/* Show loading text */}
                  </button>

                  {/* <button type="submit" className="b2b-quote-btn"><span>Send</span></button> */}
                </div>
              </div>
              <div className="box-tab box-tab-5 d-none">
                <div className="thankyou-content">
                  <h2>Thank You!</h2>
                  <p>
                    We&apos;ll Get Back <br />To You As Soon As Possible.
                  </p>
                </div>

                <img src={quoteImg.src} className="thankyouImg" alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
