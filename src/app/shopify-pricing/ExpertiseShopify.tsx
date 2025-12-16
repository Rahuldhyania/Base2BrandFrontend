import React from "react";
import CreateAcco from "./CreateAcco";

const ExpertiseShopify = () => {
  return (
    <>
      <section className="pt-lg-5 pb-lg-5  b2b-gray-bg-gk">
        <div className="b2b-container-lg">
          <div className="pt-lg-3 pt-5 pb-5">
            <div className="d-flex flex-column flex-lg-row align-items-start gap-4" >
              
              <div className="flex-grow-1 w-100">
                <div className="p-0 p-md-3">
                  <p
                    className="gk-rendom-text"
                 
                  >
                    SHOPIFY AGENCY
                  </p>
                  <h2 className="gk-sub-heading-bold">
                    Get Your Shopify Site in Shape with Base
                    <span
                      style={{
                        color: "#EF6B19",
                      }}
                    >
                      2
                    </span>
                    Brand: Our Expertise, Your Success. Let&apos;s Flex our
                    E-Commerce Muscles!
                  </h2>
                  <p className="b2b-sub-text">
                    Base2Brand is your go-to partner for creating a successful
                    Shopify site. We specialize in providing expert solutions
                    for businesses of all sizes, ensuring that your e-commerce
                    store is designed, developed, and launched with the utmost
                    care and attention. Our team of experienced professionals
                    works closely with you to understand your needs and goals,
                    delivering a Shopify store that’s tailored to your specific
                    business needs. 
                  </p>
                  <p className="b2b-sub-text">
                    From user-friendly design to optimized functionality, our
                    Shopify experts will ensure that your online store is ready
                    to take on the competition. With Base2Brand, you can rest
                    assured that your e-commerce site is in safe hands, ready to
                    flex its muscles and achieve success.
                  </p>
                </div>
              </div>
              
              <div className="flex-grow-1 w-100" style={{ background: "white", borderRadius: "20px" }}>
                <CreateAcco />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertiseShopify;
