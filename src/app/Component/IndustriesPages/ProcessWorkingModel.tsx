
import React from "react";



const ProcessWorkingModel = ({title, stepdata}) => {
  return (
    <section className="engineering_design_process">
      <div className="xxl_container engineering_design_processinner">
        <div className="edp_header">
          <h2 className="SolutionAccelerator_heading gradient_text">
            {title}
          </h2>
          <p className="pt-2 b2b-title-text text-white">
            A structured methodology ensuring quality at every stage
          </p>
        </div>
        <div className="edp_diagram_container">
          <div className="edp_center_line"></div>
          {stepdata.map((s) => (
            <div key={s.step} className={`edp_step ${s.containerClass}`}>
              <div className="edp_step_hexagon">
                <div className="edp_step_number">{s.step}</div>
              </div>
              <div className="edp_step_content">
                <h3 className="edp_step_title">{s.title}</h3>
                <div className="edp_step_desc">
                  {s.desc.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              {s.connectorClass ? (
                <div className={`edp_connector ${s.connectorClass}`}></div>
              ) : null}
            </div>
          ))}

          <div className="edp_center_circle">
            <div className="edp_engineering_text">BASE2BRAND</div>
            <div className="edp_design_text">WORK PROCESS</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessWorkingModel;


