import Image from "next/image";
import React from "react";

const productCardsData = [
  {
    id: 1,
    image: "/newhomepage/RateFlex.webp",
    title: "RateFlex",
    description: "Enhance shopping with bulk rates and tiered discounts.",
    link: ""
  },
  {
    id: 2,
    image: "/newhomepage/CounterOffer.webp",
    title: "CounterOffer",
    description:
      "Enable live price negotiation for a more interactive shopping experience.",
    link: ""
  },
  {
    id: 3,
    image: "/newhomepage/AppCartify.webp",
    title: "AppCartify",
    description: "Turn your website into a full mobile shopping app.",
    link: ""
  },
  {
    id: 4,
    image: "/newhomepage/ValueGauge.webp",
    title: "ValueGauge",
    description: "Instant, easy fabric pricing with precise results.",
    link: ""
  }
];

const ProductsBuild = () => {
  return <div className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="text-center">
          <h2 className="b2b-heading text-center text-capitalize">
            Our Top Performing Products
          </h2>
          {/* <p className="b2b-title-text text-center">
            Innovative digital products tailored for evolving industries.
          </p> */}
        </div>
        <div className="pt-4 row row-gap-4">
          {productCardsData.map((data, index) =>
            <div className=" col-12 col-md-6 col-xl-3">
              <div className="productcrad p-4 my-2" key={index}>
                <div>
                  <Image
                    src={data.image}
                    alt="#"
                    width={1000}
                    height={500}
                    className="productcradimage"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="productcradtitle text-white">
                    {data.title}
                  </h3>
                  <p className="productcraddescription text-white">
                    {data.description}
                  </p>
                </div>
                <div>
                  <Image
                    src={"/newhomepage/arrow.svg"}
                    alt="arrw"
                    width={1000}
                    height={500}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>;
};

export default ProductsBuild;
