"use client";
import Image from "next/image";
import React from "react";
type whyb2b = {
  whytitle: string;
  whydescription1?: string;
  whydescription2?: string;
  whydescription?: string;
  whybanner?: string;
};
const Whyb2b = ({
  whytitle,
  whydescription1,
  whydescription2,
  whydescription,
  whybanner
}: whyb2b) => {
  return (
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 py-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <Image
              src={whybanner ? whybanner : 'https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify-store-setup-with-multiple-payment-options-shipping-methods-tailored-customer-needs_xkg6t4.webp'}
              alt=""
              width={1000}
              height={500}
              className="whyb2b_banner"
            />
          </div>
          <div className="col-12 col-lg-6 m-auto mt-4 mt-md-0">
            <div className="text-right text-lg-end  ">
              <h2
                className="hire_banner_subheading text-white"
                dangerouslySetInnerHTML={{ __html: whytitle }}
              />

              {whydescription
                ? <p
                  className="b2b-title-text pt-3"
                  dangerouslySetInnerHTML={{ __html: whydescription }}
                />
                : <div>
                  <p className="b2b-title-text pt-3">
                    {whydescription1}
                  </p>
                  <p className="b2b-title-text pt-3">
                    {whydescription2}
                  </p>
                </div>}

              <div className="mt-4">
                <button className="b2b-btn b2b-btn-sm m-0">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whyb2b;
