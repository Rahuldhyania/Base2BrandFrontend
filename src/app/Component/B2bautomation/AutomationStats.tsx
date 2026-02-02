'use client'
import React from "react";
import CountUp from "react-countup";

const AutomationStats = () => {
  return (
    <div className="b2b-black-bg pb-md-5">
      <div className="xxl_container">
        <div className="stats_main_container">
          
          <div className="stats_grid">
            <div className="stats_card_modern">
              <div className="stats_card_content">
                <div className="stats-number gradient_text">$<CountUp end={58} enableScrollSpy />K+</div>
                <div className="stats_text_modern">
                  Annual Platform Cost<br />Avoidance vs. Shopify Plus
                </div>
              </div>
            </div>

            <div className="stats_card_modern">
              <div className="stats_card_content">
                <div className="stats-number gradient_text"><CountUp end={20} enableScrollSpy />+</div>
                <div className="stats_text_modern">
                  Weekly Hours Redeployed<br />from Manual Processing
                </div>
              </div>
            </div>

            <div className="stats_card_modern">
              <div className="stats_card_content">
                <div className="stats-number gradient_text"><CountUp end={67} enableScrollSpy />%</div>
                <div className="stats_text_modern">
                  Increase in Revenue-Generating<br />Activities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationStats;