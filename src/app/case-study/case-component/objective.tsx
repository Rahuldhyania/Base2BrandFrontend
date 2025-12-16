import React from "react";
import "./component.css"
type objective_con = {
  discription: string;
  objtive_arrow:string
};
const Objective = ({ discription,objtive_arrow }: objective_con) => {
  return (
    <div className="objective_list">
      <li className="vip_li_data">
        <div className=" ul_list">
          <span className="objective_arrow">
            <img src={objtive_arrow} alt="" />
          </span>
          <div className="objective_dis">
            {discription}
          </div>
        </div>
      </li>
    </div>
  );
};

export default Objective;
