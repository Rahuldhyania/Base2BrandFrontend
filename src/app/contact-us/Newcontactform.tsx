"use client";

import React, { useRef, useState } from "react";
import "./Newcontactform.css";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
// import "react-phone-input-2/lib/style.css";

function Newcontactform() {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    country: "",
    notes: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      mobile: value,
      country: countryData?.name || "",
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    const payload = {
      __vtrftk:
        "sid:8ccf724925dc6eb6e357f28baa5bfe01a512d874,1780396856",

      publicid: "a65c6b3cb33fbd21ea5a375951a2546f",
      urlencodeenable: "1",
      name: "Base2brand Contact us",

      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      country: formData.country,

      cf_1402: formData.notes,

      leadsource: "base2brand contact us",
      recaptchaToken,
    };

    try {
      setSubmitting(true);

      const res = await fetch("/api/captcha-crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");

        setFormData({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          country: "",
          notes: "",
        });

        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      } else {
        toast.error(data?.message || "Submission failed.");
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      toast.error("Server error!");
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="crm-form bg-white p-4">
        <h2 className="title">Start a Conversation</h2>

        <div className="grid">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstname"
              required
              data-label="First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastname"
              data-label="Last Name"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile Phone*</label>
            <PhoneInput
              country={"in"}
              value={formData.mobile}
              onChange={handlePhoneChange}
              inputProps={{
                name: "mobile",
                required: true,
              }}
              containerStyle={{ width: "100%" }}
              inputStyle={{ width: "100%", height: "50px" }}
            />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              required
              data-label="Primary Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Country*</label>
            <input
              type="text"
              name="country"
              data-label="Country"
              required
              readOnly
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Comment</label>
            <textarea
              name="notes"
              data-label="Customer Notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={token => setRecaptchaToken(token || "")}
              onExpired={() => setRecaptchaToken("")}
              onErrored={() => {
                setRecaptchaToken("");
                toast.error("Captcha error. Please try again.");
              }}
            />
          </div>

          <input
            type="hidden"
            name="leadsource"
            value="base2brand contact us"
          />
        </div>

        <button className="submit-btn" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Newcontactform;