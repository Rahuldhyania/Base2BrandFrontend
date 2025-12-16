import Headernew from "@/Newcomponents/Headernew";
import Mainbanner from "@/Newcomponents/Mainbanner";
import React from "react";
import "../../Newcomponents/Newcomponentsmain.css";
import SplitText from "@/Newcomponents/Splittext";
import WorkingProcess from "@/Newcomponents/Workprocess";
import Serviceimagecard from "@/Newcomponents/Serviceimagecard";
import ImageScrollSlider from "@/Newcomponents/Imgaecompress";
import StickyTextExpander from "@/Newcomponents/newcomponents/StickyTextExpander";
import Newheader from "@/Newcomponents/newcomponents/Newheader";
import Aboutus from "@/Newcomponents/newcomponents/Aboutus";
import Servicestab from "@/Newcomponents/newcomponents/Servicestab";
import Puzzlebrand from "@/Newcomponents/newcomponents/Puzzlebrand";
import Techstack from "@/Newcomponents/newcomponents/Techstack";
import Choice from "@/Newcomponents/newcomponents/Choice";
import Newteam from "@/Newcomponents/newcomponents/Newteam";
import Faqnew from "@/Newcomponents/newcomponents/Faqnew";
import Newfooter from "@/Newcomponents/newcomponents/Footercomponent/Newfooter";
import Result from "@/Newcomponents/newcomponents/Result";
import Scrollservice from "@/Newcomponents/newcomponents/Scrollservice";
export default function Mainnewhome() {
  return (
    <div>
      <div
        className="fixed_header"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42100_hmja31.png)",
          backgroundSize: "contain"
        }}
      >
        <Newheader />
      </div>
      <Mainbanner />
      {/* <Aboutus /> */}
      <StickyTextExpander
        text="THE <br /> SERVICES THAT DRIVE YOUR <br /> GROWTH."
        subtitle="From code to marketing, we power it all."
      />
      <Scrollservice />
      <WorkingProcess />
      <Servicestab />
      <Puzzlebrand />
      <Techstack />
      <Choice />
      <Newteam />
      <Faqnew />
      <Result />
      <Newfooter />
    </div>
  );
}
