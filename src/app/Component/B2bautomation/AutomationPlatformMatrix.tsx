"use client";
import React, { ReactNode } from "react";
import {
  FaShopify,
  FaWordpress,
  FaWarehouse,
  FaBolt,
  FaShoppingCart,
  FaMagento,
  FaBuilding,
} from "react-icons/fa";

interface PlatformItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const platformMatrixData: PlatformItem[] = [
  {
    id: 1,
    title: "Standard Shopify",
    description:
      "Deploy complete B2B functionality including customer-specific pricing, tiered pricing, and credit enforcement—without upgrading to Shopify Plus.",
    icon: <FaShopify />,
  },
  {
    id: 2,
    title: "WooCommerce",
    description:
      "Supports all B2B pricing models via Wholesale for WooCommerce—open-source flexibility without licensing constraints.",
    icon: <FaWordpress />,
  },
  {
    id: 3,
    title: "ERP / Retail Management",
    description:
      "Acumatica, NetSuite, Sage Intacct, SAP B1, Lightspeed, and Retail Express supported with full B2B pricing compatibility.",
    icon: <FaWarehouse />,
  },
  {
    id: 4,
    title: "Shopify Plus",
    description:
      "Required when multiple users per corporate account need individual login credentials and distributed purchasing workflows.",
    icon: <FaBolt />,
  },
  {
    id: 5,
    title: "Lightspeed",
    description:
      "Native price book–based B2B pricing with automated customer group and tier assignments.",
    icon: <FaShoppingCart />,
  },
  {
    id: 6,
    title: "Magento",
    description:
      "Complete B2B suite including company hierarchies, quote workflows, pricing rules, and inventory visibility.",
    icon: <FaMagento />,
  },
  {
    id: 7,
    title: "Retail Express",
    description:
      "Tier pricing, customer-specific rates, and credit management deployed without platform modification.",
    icon: <FaBuilding />,
  },
  {
    id: 8,
    title: "SAP Business One",
    description:
      "Enterprise-grade wholesale automation with multi-location inventory synchronization and credit enforcement.",
    icon: <FaWarehouse />,
  },
];

const PlatformMatrix = () => {
  return (
   <div className="b2b-black-bg">
     <section className="platform-matrix py-5">
      <div className="container">
        <div className="text-center mb-5 matrix_text_container">
          <h2 className="SolutionAccelerator_heading text-white">
            Wholesale Platform <span className="gradient_text">Compatibility Matrix</span>
          </h2>
          <p className="b2b-title-text text-white">
            Enterprise-grade wholesale automation across leading eCommerce and
            ERP platforms—without costly upgrades.
          </p>
        </div>

        <div className="row g-4">
          {platformMatrixData.map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="platform-card h-100">
                <div className="platform-pillar">
                  <div className="platform-icon">{item.icon}</div>
                </div>

                <div className="platform-content">
                  <h5 className="m-0">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default PlatformMatrix;
