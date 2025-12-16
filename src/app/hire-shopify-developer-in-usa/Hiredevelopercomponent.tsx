import React from "react";
type HiredevelopercomponentProps = {
    hiredevcount?: string;
    hiredevheading?: string;
    hiredevtext?: string;
};

const Hiredevelopercomponent = ({ hiredevcount, hiredevheading , hiredevtext }: HiredevelopercomponentProps) => {
  return (
    <div className="hire_developer_component h-100">
      <p className="b2b-partner-heading hire_developer_count">{hiredevcount}</p>
      <div className="hire_developer_outer">
        <h2 className="b2b-partner-heading m-0 pb-2 text_hire_green">{hiredevheading}</h2>
        <p className="b2b-text text-white">{hiredevtext}</p>
      </div>
    </div>
  );
};

export default Hiredevelopercomponent;
