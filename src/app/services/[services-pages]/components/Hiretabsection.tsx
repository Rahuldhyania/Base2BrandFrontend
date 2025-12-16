"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

type hiretabsection = {
  tabtitle: string;
  tabcontent: any;
};

const Hiretabsection = ({ tabtitle, tabcontent }: hiretabsection) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = index => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 py-5">
        <div className="text-center pb-4">
          <h2
            className="hire_banner_subheading text-white"
            dangerouslySetInnerHTML={{ __html: tabtitle }}
          />
        </div>
        <div className="tabs-container py-3">
          <div className="tabs-list">
            {tabcontent.map((tab, index) =>
              <div
                key={index}
                className={`tab-title b2b-title-text ${activeTab === index
                  ? "active"
                  : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {tab.heading}
              </div>
            )}
          </div>

          <div className="pt-md-4">
            <div className={`tab-content ${isTransitioning ? "fading" : ""}`}>
              <div className="row">
                <div className="col-12 col-lg-6 m-auto">
                  <div>
                    <h2 className="hire_banner_subheading text_hire_green">
                      Challenge
                    </h2>
                    <p
                      className="b2b-title-text text-white"
                      dangerouslySetInnerHTML={{
                        __html: tabcontent[activeTab].challenge
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="hire_banner_subheading text_hire_primary">
                      Our Solution
                    </h2>
                    <p
                      className="b2b-title-text text-white"
                      dangerouslySetInnerHTML={{
                        __html: tabcontent[activeTab].solution
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex mt-4 mt-md-0 justify-content-center">
                  <Image
                    src={
                      tabcontent[0].tab_image
                    }
                    alt={tabcontent[0].title}
                    width={1000}
                    height={500}
                    className="hire_challage_banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiretabsection;
