"use client";

import Image from "next/image";
import React from "react";

type HirebannerProps = {
  benefiticon?: string;
  benefitheading?: string;
  benefittext?: string;
};
const Topbenefit = ({
  benefiticon,
  benefitheading,
  benefittext
}: HirebannerProps) => {
  return (
    <div className="hire_top_benefit mt-4 greenGradiant">
      <div className="gap-3 align-itmes-center justify-content-center pb-3">
        <Image
          src={benefiticon}
          alt={benefitheading}
          width={1000}
          height={500}
          className="hire_benefit_icon"
        />
        <h2 className="b2b-partner-heading m-0 text_hire_green pt-2">
          {benefitheading}
        </h2>
      </div>
      <div>
        <p className="b2b-text text-black">
          {benefittext}
        </p>
      </div>
    </div>
  );
};

export default Topbenefit;
