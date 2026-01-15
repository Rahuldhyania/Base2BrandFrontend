'use client'
import React, { useState } from "react";

const BlogDetailFrom = () => {
  const [formData, setformData] = useState({
    userName: "",
    userEmail: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setformData(prev => ({
      ...prev,
      [name]: value
    }));
  };
   
  return (
    <div className="blog-detail-from">
      <p className="bdetail_bar m-0">Limited Spots Available</p>
      <h3 className="detail-from-heading pt-4">
        Book a Free 30-Minute Strategy Session
      </h3>
      <p className="detail-from-description">
        Not sure which AI tool is right for your business? Our experts will
        analyze your needs and recommend the perfect solution. No commitment
        required.
      </p>
      <div className="pt-4 row">
        <div className="col-6">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Your name"
            className="detail-from-input"
          />
        </div>
        <div className="col-6">Column 2</div>
      </div>
    </div>
  );
};

export default BlogDetailFrom;
