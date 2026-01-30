
import React from "react";
const steps = [
  {
    step: "01",
    title: "ASK",
    desc: ["to identify the need", "and constraints"],
    containerClass: "step_ask",
    connectorClass: "connector_ask"
  },
  {
    step: "02",
    title: "RESEARCH",
    desc: ["and redesign", "the problem as needed"],
    containerClass: "step_research",
    connectorClass: "connector_research"
  },
  {
    step: "03",
    title: "IMAGINE",
    desc: ["possible solutions"],
    containerClass: "step_imagine",
    connectorClass: "connector_imagine"
  },
  {
    step: "04",
    title: "PLAN",
    desc: ["by selecting a", "promising solution"],
    containerClass: "step_plan",
    connectorClass: "connector_plan"
  },
  {
    step: "05",
    title: "CREATE",
    desc: ["a prototype"],
    containerClass: "step_create",
    connectorClass: "connector_create"
  },
  {
    step: "06",
    title: "TEST",
    desc: ["the prototype", "and evaluate"],
    containerClass: "step_test",
    connectorClass: "connector_test"
  },
  {
    step: "07",
    title: "IMPROVE",
    desc: ["refine and optimize"],
    containerClass: "step_improve"
    // last step intentionally has no connector
  }
];


const ProcessWorkingModel = () => {
  return (
    <section className="engineering_design_process">
      <div className="xxl_container engineering_design_processinner">
        <div className="edp_header">
          <h2 className="SolutionAccelerator_heading gradient_text">
            Our <span className="edp_gradient">Process Model</span>
          </h2>
          <p className="pt-2 b2b-title-text text-white">
            A structured methodology ensuring quality at every stage
          </p>
        </div>
        <div className="edp_diagram_container">
          <div className="edp_center_line"></div>
          {steps.map((s) => (
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


