import Brand from "@/app/brand";
import Image from "next/image";
import React from "react";

const TrustedPartners = [
  "/newhomepage/trustpartner1.webp",
  "/newhomepage/trustpartner2.webp",
  "/newhomepage/trustpartner3.webp",
  "/newhomepage/trustpartner4.webp"
];
const TrustedPartnersBrand = () => {
  return (
    <div className="b2b-black-bg">
      <div className="xxl_container py-5">
        <div className="text-center pb-3 pb-md-5">
               <h2
              className="b2b-heading text-center text-capitalize"
              data-aos="fade-up"
            >
              Our Trusted Partners
            </h2>
        </div>
        <div className="container-xl row m-auto TrustedPartnermain">
          {TrustedPartners.map((data, index) =>
            <div className={`col-6 col-lg-3 py-4 ${TrustedPartners.length == index+1 ? '' : 'TrustedPartnercard'}`} key={index}>
              <Image src={data} alt="" width={1000} height={500} className="TrustedPartnersimage m-auto" />
            </div>
          )}
        </div>
      </div>
      <Brand heading={"Top Brands We Have Worked With"} color="text-white" />
    </div>
  );
};

export default TrustedPartnersBrand;
