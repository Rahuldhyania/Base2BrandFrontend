"use client";
// import "./services2.css"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function WebApplication() {
  const currentRoute = usePathname();
  console.log(currentRoute);

  const navigationlinks =[
    {
      id:1,
      case_route:"/case-study/vip-number-shop",
      case_page_name:"Case-Vip Number Shop",
      case_about:"About VIP Number Shop"
    },
    {
      id:2,
      case_route:"/case-study/loria-medicals",
      case_page_name:"Case-Loria Medical",
      case_about:"About Loria Medical"
    },
    {
      id:3,
      case_route:"/case-study/case-grill",
      case_page_name:"Case-Grill Father's",
      case_about:"About Loria Medical"
    },
    {
      id:4,
      case_route:"/case-study/smart-pet",
      case_page_name:"Case-Smart Pet",
      case_about:"About Smart Pet"
    },
    {
      id:5,
      case_route:"/case-study/tech-city",
      case_page_name:"Case-Tech City",
      case_about:"About Tech City"
    },
    {
      id:6,
      case_route:"/case-study/siena-home",
      case_page_name:"Case-Siena Home",
      case_about:"About Siena Home"
    },
    {
      id:7,
      case_route:"/case-study/healthy-bedrooms",
      case_page_name:"Case-Healthy Bedrooms",
      case_about:"About Healthy Bedrooms"
    },
    {
      id:8,
      case_route:"/case-study/metal-press",
      case_page_name:"Case-Metal Press",
      case_about:"About Metal Press"
    },
    {
      id:9,
      case_route:"/case-study/zoom-auto-car-rental",
      case_page_name:"Case-Zoom Auto Car Rental",
      case_about:"About Zoom Auto Car Rental"
    },
    {
      id:10,
      case_route:"/case-study/vis-learning",
      case_page_name:"Case-VIS Learning",
      case_about:"About VIS Learning"
    },
    {
      id:11,
      case_route:"/case-study/ehis-school",
      case_page_name:"Case-EHIS School",
      case_about:"About EHIS School"
    },
    {
      id:12,
      case_route:"/case-study/warley-superstore",
      case_page_name:"Case-Warley Superstore",
      case_about:"About Warley Superstore"
    },
    {
      id:13,
      case_route:"/case-study/duracrafts-furniture",
      case_page_name:"Case-Duracrafts Furniture",
      case_about:"About Duracrafts Furniture"
    },
    {
      id:14,
      case_route:"/case-study/barbell",
      case_page_name:"Case-Barbell",
      case_about:"About Barbell"
    },
    {
      id:15,
      case_route:"/case-study/rolly-receipts",
      case_page_name:"Case-Rolly Receipts",
      case_about:"About Rolly Receipts"
    },
  ]
  return (
    <div className="case-footer">
      <div className="cus_container pt-5 ">
        <div className="row  justify-content-center">
          <div className="col-lg-10">
            <div className="row footer-menue justify-content-center">
              {navigationlinks.map((data,index)=>(
              <>
               {currentRoute === data.case_route
                    ? ""
                    : <div
                        className="col-lg-4 col-md-6 col-sm-8 mb-3"
                        key={index}
                        data-aos="fade-up"
                      >
                        <Link href={`${data.case_route}`}>
                          <div className=" b2b-pink-bg menuInner-gk">
                            <h3 className="b2b-title-text text-black">
                             {data.case_page_name}
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">{data.case_about}</p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                </div>}
              </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
