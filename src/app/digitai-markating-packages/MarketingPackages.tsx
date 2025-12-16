import React from "react";
import Image from "next/image";

import markaing from "../../../public/img/digitai-markating-packags/Markatingprrops.png";

type Props = {};

const MarketingPackages = (props: Props) => {
  return (
    <>
      <section className="pt-2 b2b-gray-bg-gk  pb-lg-5 pb-3  ">
        <div className="b2b-container-lg">
          <h2 className="text-center gk-sub-heading-bold  text-white "></h2>
          <p className="b2b-text text-center hhh "></p>
          <div className="row align-items-lg-center gap-lg-0 gap-4 pt-3 pt-lg-0 flex-column-reverse flex-lg-row">
            <div className="col-lg-6 pb-lg-0 pb-3">
              <h1 className="gk-sub-heading-bold"></h1>
           
          
            
              <p className=" b2b-sub-text">
              Digital marketing packages are vital for building a robust business foundation. With a range of online marketing plans available, these packages play a key role in driving growth for businesses of all sizes. However, not all businesses can afford every marketing strategy on the market. That’s why choosing a reliable provider is essential.

              </p>
              <button className="gk-b2b-btn b2b-btn-sm mt-3 m-0">
                  <a
                    href="https://wa.me/+918360116967?text=Hello%20there!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Let’s Talk
                  </a>
                </button>
              
            </div>
            <div className="col-lg-6">
              <Image
                className="img-fluid"
                src={markaing}
                alt="Shopify Website"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingPackages;
