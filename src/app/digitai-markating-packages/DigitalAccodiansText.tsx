import React from "react";
import AccodianText from "./AccodianText";

const DigitalAccodiansText = () => {
  return (
    <>
      <section className="pt-lg-5 pb-lg-5 b2b-gray-bg-gk">
        <div className="b2b-container-lg">
          <div className="pt-lg-3 pt-5 pb-5">
            <div className="d-flex flex-column flex-lg-row align-items-start gap-4">
              <div className="flex-grow-1 w-100">
                <div className="p-0 p-md-3">
                  <p className="gk-rendom-text">DIGITAL MARKETING AGENCY</p>
                  <h2 className="gk-sub-heading-bold">
                    Get Ready to Enhance Your Brand's Visibility with Our
                    Digital Marketing Packages
                    {/* <span
                      style={{
                        color: "#EF6B19",
                      }}
                    >
                      2
                    </span>
                    Brand: Our Expertise, Your Success. Let's Flex our
                    E-Commerce Muscles! */}
                  </h2>
                  <p className="b2b-sub-text">
                    Prepare to elevate your brand’s visibility with our
                    comprehensive digital marketing packages. We offer tailored
                    solutions that include SEO, content marketing, and targeted
                    advertising to boost your online presence. Our expert
                    strategies ensure your brand stands out in a crowded
                    marketplace, attracts more potential customers, and drives
                    meaningful engagement. By leveraging our services, you’ll
                    see increased traffic, enhanced brand recognition, and
                    improved business outcomes. Start today and transform your
                    digital presence into a powerful asset for growth and
                    success.
                  </p>
                </div>
              </div>

              <div
                className="flex-grow-1 w-100"
                style={{ background: "white", borderRadius: "20px" }}
              >
                {/*  */}
                <AccodianText />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAccodiansText;
