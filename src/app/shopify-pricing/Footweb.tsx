import React from "react";

const Footweb = ( {title , para1 , para2}) => {
  return (
    <>
      <section className="pt-lg-5 pt-4 pb-lg-5 pb-4 b2b-gray-bg ">
        <div className="b2b-container-lg">
          <div className="last-gk">
            <h2 className="gk-heading-bold  text-center  text-cente m-auto gk-width">
             {title}
            </h2>
            <p className="b2b-sub-text text-center  mt-4 ">
           {para1}
            </p>
            <p className=" b2b-sub-text text-center mt-4 ">
             {para2}
            </p>
          </div>

        </div>

      </section>
      <div className="text-center p-3 b2b-gray-bg main_footer">
        <p className="m-0 text-white">
          ©2024
          <a className="text-white " target="_blank" href="https://www.base2brand.com/"> base2brand.com </a>

           .All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footweb;
