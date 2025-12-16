import Image from "next/image";
import React from "react";
type title = {
  title: string;
};
const Hirestep = ({ title }: title) => {
  return (
    <div className="cus_container max_w_1920 pt-5">
      <div className="text-center">
        <h2
          className="hire_banner_subheading text-black"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="b2b-title-text text-black">
          Partner with the Best Advertising Agency Dubai in just 3 simple steps
          to boost your brand visibility and results!
        </p>
      </div>
      <div className="pt-4 hire_step_container">
        <div className="container hire_step_aus_outer">
          <div className="hire_step_aus">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/images_1_kxch3m.png"
              alt=""
              width={1000}
              height={500}
            />
            <span className="hire_step_aus_count b2b-title-text">01</span>
            <p className="b2b-partners-heading text_hire_primary fw-semibold bg-white px-3 py-2 m-0 mt-4">
              Brief & Strategy <br /> Call
            </p>
          </div>
          <div className="hire_step_aus">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/images_1_kxch3m.png"
              alt=""
              width={1000}
              height={500}
            />
            <span className="hire_step_aus_count b2b-title-text">02</span>
            <p className="b2b-partners-heading text_hire_primary fw-semibold bg-white px-3 py-2 m-0 mt-4">
              Creative Planning & <br /> Approval
            </p>
          </div>
          <div className="hire_step_aus">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/images_1_kxch3m.png"
              alt=""
              width={1000}
              height={500}
            />
            <span className="hire_step_aus_count b2b-title-text">03</span>
            <p className="b2b-partners-heading text_hire_primary fw-semibold bg-white px-3 py-2 m-0 mt-4">
              Launch & Scale <br /> Your Campaign
            </p>
          </div>
          <div className="hire_step_aus_hr">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hirestep;
