import Image from "next/image";
import React from "react";
import NewFooterForm from "../NewFooterForm";
import {
  FaDollarSign,
  FaChartBar,
  FaBoxes,
  FaCreditCard,
  FaFileInvoice,
  FaUsers
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Customer-Specific Pricing",
    desc: "Negotiated rates auto-applied",
    icon: <FaDollarSign />
  },
  {
    id: 2,
    title: "Tiered Pricing",
    desc: "Customer class-based rates",
    icon: <FaChartBar />
  },
  {
    id: 3,
    title: "Volume Discounts",
    desc: "Quantity break automation",
    icon: <FaBoxes />
  },
  {
    id: 4,
    title: "Credit Management",
    desc: "Real-time limit enforcement",
    icon: <FaCreditCard />
  },
  {
    id: 5,
    title: "PO Number Automation",
    desc: "Customer PO numbers auto-synced",
    icon: <FaFileInvoice />
  },
  {
    id: 6,
    title: "Company Hierarchies",
    desc: "Multiple authorized buyers",
    icon: <FaUsers />
  }
];

const AutomationForm = () => {
  return (
    <div className="px-md-3">
      <div
        className="row  my-3 mx-auto"
        style={{
          maxWidth: "1920px",
          rowGap: "10px"
        }}
      >
        <div className="col-12 col-md-6 newformleftbgouter"
         style={{backgroundImage : `url(/newhomepage/newformleftbg.webp)`}}
        >
          <div className="newformleftbgrelative px-md-4 py-5">
            <div className="newformleftbgabsoluteinn newformleftbgabsoluteinn_automation">
              <h2 className="new_subheading text-white">
                B2B Integration Platform
              </h2>

              <p className="new_subdescription text-white pt-lg-2 pt-2 col-12 col-xl-10">
                Automated Synchronization
              </p>
              <div className="row g-4">
                {features.map(item =>
                  <div className="col-md-6" key={item.id}>
                    <div className="erp-card-v2 h-100">
                      <div className="erp-icon-v2">
                        {item.icon}
                      </div>

                      <h5 className="mt-3 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-muted mb-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <NewFooterForm
            title="Review Your B2B Automation Requirements"
            description="Schedule a call to discuss your wholesale operations, ERP setup, and objectives."
          />
        </div>
      </div>
    </div>
  );
};

export default AutomationForm;
