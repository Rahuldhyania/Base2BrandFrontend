import Image from "next/image";
import React from "react";
import NewFooterForm from "../NewFooterForm";

const HomeFrom = () => {
  return (
    <div className="px-md-3">
      <div
        className="row  my-3 mx-auto"
        style={{
          maxWidth: "1920px",
          rowGap: "10px"
        }}
      >
        <div className="col-12 col-md-6 newformleftbgouter">
          <Image
            src={"/newhomepage/newformleftbg.webp"}
            alt=""
            width={1000}
            height={500}
            className="newformleftbg"
          />
          <div className="newformleftbgabsolute px-md-4">
            <div className="newformleftbgabsoluteinn">
              <h5 className="text-white">Contact Us</h5>

              <h2 className="new_subheading text-white">
                We Fix, Transform, and Accelerate Your Product
              </h2>

              <p className="new_subdescription text-white pt-lg-2 pt-2 col-12 col-xl-10">
                Tell us where your product needs support, we’ll guide you with
                clarity and speed. From architecture to launch, we’re your
                trusted growth partner.
              </p>
              <p className="new_subdescription text-white pt-lg-2 pt-2 col-12 col-xl-9">
                Book your free consultation today. Let us help you move faster,
                smarter, and more efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <NewFooterForm />
        </div>
      </div>
    </div>
  );
};

export default HomeFrom;
