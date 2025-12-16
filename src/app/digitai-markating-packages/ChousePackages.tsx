"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrowicon from "../../../public/img/Arrow-icon.svg";

const ChousePackages = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section
        className="tabs b2b-brands-wrap"
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/choosepackages.png')",
          backgroundSize: "cover",
          backgroundPosition: "98% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="b2b-container-lg">
          <h3 className="gk-heading-bold text-center m-auto gk-width-lg">
            What Do Our Digital Marketing Packages Include?
          </h3>
          <p className=" b2b-sub-text text-center pt-3 pb-3">
            Our comprehensive digital marketing packages are designed to elevate
            your business. They typically encompass essential services such as
            SEO, content marketing, and paid advertising.
          </p>

          <div className="row py-2 py-md-5">
            <div className="col-md-4">
              <ul
                className="nav flex-column nav-pills line-1 gap-3"
                role="tablist"
                aria-orientation="vertical"
              >
                <li className="nav-item display-int" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab1" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Search Engine Optimization
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab2" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab2")}
                  >
                   Content Marketing
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab3" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab3")}
                  >
                    Paid Advertising
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab4" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab4")}
                  >
                   Social Media Management
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab5" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab5")}
                  >
                    Analytics and Reporting
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "tab6" ? "active" : ""
                      }`}
                    onClick={() => handleTabClick("tab6")}
                  >
                    Conversion Rate Optimization
                    <span className="arrow-icon-gk ">
                      <Image className="omg" src={Arrowicon} alt="" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-8 pt-4 pt-md-0">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${activeTab === "tab1" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                    Search Engine Optimization (SEO)
                  </h4>
                  <p className=" b2b-sub-text">

                    Our digital marketing packages include thorough SEO services aimed at enhancing your website’s visibility on search engines. This involves keyword research, on-page optimization, technical SEO, and building high-quality backlinks. Our goal is to improve your search engine rankings, drive organic traffic, and ensure your website meets the latest SEO standards. By optimizing your site’s content and structure, we help you attract and retain more potential customers.

                  </p>
                  <p className=" b2b-sub-text">
               
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab2" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                  Content Marketing
                  </h4>
                  <p className=" b2b-sub-text">
                  Content marketing is a crucial component of our packages, focusing on creating and distributing valuable, relevant content to engage your target audience. This includes blog posts, articles, infographics, and videos tailored to your industry and audience interests. Our approach ensures that your content not only drives traffic but also builds brand authority and trust. Effective content marketing helps establish your business as an industry leader and encourages customer loyalty.
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab3" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                  Paid Advertising
                  </h4>
                  <p className=" b2b-sub-text">
                  Our packages feature targeted paid advertising strategies to drive immediate traffic and conversions. This includes pay-per-click (PPC) campaigns on platforms like Google Ads and social media advertising on channels such as Facebook and Instagram. We manage ad creation, targeting, and budget optimization to ensure maximum ROI. By leveraging precise targeting and performance tracking, we help you reach potential customers who are actively searching for products or services like yours.
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab4" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">Social Media Management</h4>
                  <p className=" b2b-sub-text">
Social media management is integral to our digital marketing services, focusing on building and maintaining a strong presence across various platforms. We create engaging content, manage your social media profiles, and interact with your audience to foster community and brand loyalty. Our team develops and implements strategies to increase followers, drive engagement, and analyze performance metrics. This helps your business stay relevant and connected with its target audience.
</p>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab5" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">
                  Analytics and Reporting
                  </h4>
                  <p className=" b2b-sub-text">
                  
Our digital marketing packages include detailed analytics and reporting to track the effectiveness of your campaigns. We provide regular reports on key performance indicators such as website traffic, conversion rates, and ROI. By analyzing this data, we identify trends, measure success, and make data-driven decisions to optimize your marketing efforts. Transparent reporting ensures you are informed about your campaign performance and the value of our services.

                  </p>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab6" ? "show active" : ""
                    }`}
                >
                  <h4 className="gk-b2b-bold text-white">Conversion Rate Optimizatio</h4>
                  <p className=" b2b-sub-text ">
                   
Conversion Rate Optimization is a vital aspect of our digital marketing services, focusing on improving your website’s ability to convert visitors into customers. This involves analyzing user behavior, testing different design elements, and refining calls-to-action. Our team works to enhance the user experience, streamline the conversion process, and increase the effectiveness of your landing pages. By optimizing for conversions, we help you achieve better results from your existing traffic.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChousePackages;
