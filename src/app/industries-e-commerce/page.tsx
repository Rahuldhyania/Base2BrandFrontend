import React from "react";
import IndustriesBanner from "../Component/IndustriesPages/IndustriesBanner";
import Header from "../../../component/header";
import FooterNew from "../Component/FooterNew";
import "../Component/IndustriesPages/Industries.css";
import "../Component/NewHomePage/NewHome.css";
import IndustriesMonthlyGrowth from "../Component/IndustriesPages/IndustriesMonthlyGrowth";
import IndustriesHowWork from "../Component/IndustriesPages/IndustriesHowWork";
import IndustriesGlobal from "../Component/IndustriesPages/IndustriesGlobal";
import OurRiskManagement from "../Component/IndustriesPages/OurRiskManagement";
const page = () => {
  return (
    <div>
      <Header />
      <IndustriesBanner />
      <IndustriesMonthlyGrowth />
      <IndustriesHowWork />
      <IndustriesGlobal />
      <OurRiskManagement />
      <FooterNew />
    </div>
  );
};

export default page;
