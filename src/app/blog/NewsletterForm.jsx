"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const NewsletterForm = () => {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!mail) return;

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter-crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: mail
        })
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Subscribed successfully!");
        setMail("");
      } else {
        toast.error("Subscription failed!");
      }
    } catch (err) {
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="p-4 newletterouter">
        <h5 className="newletter_heading text-white">
          Subscribe to our Newsletter
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="email"
                value={mail}
                onChange={e => setMail(e.target.value)}
                className="newletter_input"
                placeholder="Email address"
                required
              />
            </div>

            <div className="col-3 d-flex align-items-center px-0">
              <button
                type="submit"
                className="b2b-btn py-2 px-3 btn_font"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default NewsletterForm;
