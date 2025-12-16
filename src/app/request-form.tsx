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
import Newcrmform from "./Newcrmform";

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Your form submission logic goes here
      const response = await fetch(
        "https://adminbackend.base2brand.com/api/B2Badmin/quotes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        // Handle success, maybe show a success projectDescription
        toast.success("Form submitted successfully");
        nextForm();
        setTimeout(function() {
          onCloseModal();
        }, 800);
        onCloseModal();
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Error submitting form");
    } finally {
      // Re-enable the button after the submission attempt
      setLoading(false);
    }
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
    <div>
      <div
        className="modal request-form fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        data-modal="hideTab"
      >
        <div className="position-relative newfrommodal" >
          <div className="newcrosss"  onClick={onCloseModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 15 15"
            >
              <rect width="15" height="15" fill="none" />
              <path
                fill="#000000ff"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
              />
            </svg>
        
          </div>

          <Newcrmform onCloseModal={onCloseModal} />
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
