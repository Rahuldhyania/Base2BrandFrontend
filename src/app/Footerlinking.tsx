"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const linkingdata = {
  socialmedia: [
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    },
    {
      pagename: "Social Media Srvices",
      slugname: "/social-media-services"
    },
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    },
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    },
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    },
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    },
    {
      pagename: "Social Media Management Srvices",
      slugname: "/social-media-management-services"
    }
  ],
  shopifyservices: [
    {
      pagename: "Shopify Agency In India",
      slugname: "/shopify-agency-in-india"
    },
    {
      pagename: "Shopify App Development Services",
      slugname: "/shopify-app-development-services"
    },
    {
      pagename: "Shopify Development Company India",
      slugname: "/shopify-development-company-india"
    },
    {
      pagename: "Shopify Experts Developers",
      slugname: "/shopify-experts-developers"
    },
    {
      pagename: "Shopify Experts In Chicago",
      slugname: "/shopify-experts-in-chicago"
    },
    {
      pagename: "Shopify Integration With ERP",
      slugname: "/shopify-integration-with-erp"
    },
    {
      pagename: "Shopify Store Migration Services",
      slugname: "/shopify-store-migration-services"
    },

    {
      pagename: "Shopify Theme Development Services",
      slugname: "/shopify-theme-development-services"
    },
    {
      pagename: "Shopify Website Development Company Chandigarh",
      slugname: "/shopify-website-development-company-chandigarh"
    },
    {
      pagename: "Shopify Website Development Company India",
      slugname: "/shopify-website-development-company-india"
    },
    {
      pagename: "Hire Shopify Developer Dallas",
      slugname: "/hire-shopify-developer-dallas"
    },
    {
      pagename: "Hire Shopify Developer Dubai",
      slugname: "/hire-shopify-developer-dubai"
    },

    {
      pagename: "Hire Shopify Developer In Australia",
      slugname: "/hire-shopify-developer-in-australia"
    },
    {
      pagename: "Hire Shopify Developer In USA",
      slugname: "/hire-shopify-developer-in-usa"
    },
    {
      pagename: "Hire Shopify Theme Developers",
      slugname: "/hire-shopify-theme-developers"
    }
  ]
};
export default function Footerlinking() {
  var addperitem = 8;
  const [showpage, setshowpage] = useState(addperitem);
  const [showpage2, setshowpage2] = useState(addperitem);
  const currentpath = usePathname();
  return (
    <div className="b2b-black-bg">
      <div className="cus_container max_w_1920">
        <div className="pt-4">
          <h2 className="text-white m-0">Social media</h2>
          <div className="footerMenu footer_linking_wrap pt-4">
            {linkingdata.socialmedia.slice(0, showpage2).map((data, index) =>
              <Link href={data.slugname}>
                <h6
                  key={index}
                  className={`text-white footer_linking m-0 mt-3  ${currentpath ===
                  data.slugname
                    ? "text-decoration-underline"
                    : ""}`}
                >
                  {data.pagename} |
                </h6>
              </Link>
            )}
            {linkingdata.shopifyservices.length > showpage2
              ? <p
                  onClick={() => setshowpage2(showpage2 + addperitem)}
                  className="m-0 mt-3 footer_linking_btn"
                >
                  Read More
                </p>
              : <p
                  onClick={() => setshowpage2(showpage2 - addperitem)}
                  className="m-0 mt-3 footer_linking_btn"
                >
                  Read Less
                </p>}
          </div>
        </div>
        <div className="pt-4">
          <h2 className="text-white m-0">Shopify Services</h2>
          <div className="footerMenu footer_linking_wrap pt-4">
            {linkingdata.shopifyservices.slice(0, showpage).map((data, index) =>
              <Link href={data.slugname}>
                <h6
                  key={index}
                  className={`text-white footer_linking m-0 mt-3  ${currentpath ===
                  data.slugname
                    ? "text-decoration-underline"
                    : ""}`}
                >
                  {data.pagename} |
                </h6>
              </Link>
            )}
            {linkingdata.shopifyservices.length > showpage
              ? <p
                  onClick={() => setshowpage(showpage + addperitem)}
                  className="m-0 mt-3 footer_linking_btn"
                >
                  Read More
                </p>
              : <p
                  onClick={() => setshowpage(showpage - addperitem)}
                  className="m-0 mt-3 footer_linking_btn"
                >
                  Read Less
                </p>}
          </div>
        </div>
      </div>
    </div>
  );
}
