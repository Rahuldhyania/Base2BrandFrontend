"use client";
import React, { useState } from "react";


const Faqs = ({ title,faqdata }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const handleFaqClick = id => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const slicenumber = Math.ceil(faqdata.length / 2);

  return (
    <div className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="text-center pb-3 pb-md-5">
          <h2
            className="b2b-heading text-center text-capitalize"
            data-aos="fade-up"
          >
            {title}
          </h2>
        </div>

        <div className="newfaqCardcontainer m-auto">
          <div className="row newfaqCardOuter">
            <div className="faqcardin">
              {faqdata.slice(0, slicenumber).map((data, index) =>
                <div
                  className="newfaqCard  py-4"
                  key={index}
                  onClick={() => handleFaqClick(data.id)}
                >
                  <div className="d-flex gap-2 gap-md-4 align-items-start">
                    <div
                      className={`newfaqCardcount gradient-border ${activeFaq ===
                      index
                        ? "active"
                        : ""}`}
                    >
                      {data.id < 9 ? "0" + (data.id + 1) : data.id + 1}
                    </div>

                    <div
                      className={`newfaqCardtext my-auto ${activeFaq === index
                        ? "open"
                        : ""}`}
                    >
                      <h5 className="text-white">
                        {data.question}
                      </h5>

                      {activeFaq === data.id &&
                        <p className="text-white">
                          {data.answer}
                        </p>}
                    </div>
                  </div>
                  <div
                    className={` cross_ani ${activeFaq === data.id
                      ? "cross"
                      : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M15.5953 6.8908C15.5953 6.28988 15.1082 5.80273 14.5072 5.80273C13.9063 5.80273 13.4192 6.28988 13.4192 6.8908V13.4192H6.8908C6.28988 13.4192 5.80273 13.9063 5.80273 14.5072C5.80273 15.1082 6.28988 15.5953 6.8908 15.5953L13.4192 15.5953V22.1237C13.4192 22.7246 13.9063 23.2118 14.5072 23.2118C15.1082 23.2118 15.5953 22.7246 15.5953 22.1237V15.5953L22.1237 15.5953C22.7246 15.5953 23.2118 15.1082 23.2118 14.5072C23.2118 13.9063 22.7246 13.4192 22.1237 13.4192H15.5953V6.8908Z"
                        fill={`${activeFaq === data.id ? "#9AD1FC" : "white"}`}
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="faqcardin">
              {faqdata.slice(slicenumber, faqdata.length).map((data, index) =>
                <div
                  className="newfaqCard  py-4"
                  key={index}
                  onClick={() => handleFaqClick(data.id)}
                >
                  <div className="d-flex gap-2 gap-md-4 align-items-start">
                    <div
                      className={`newfaqCardcount gradient-border ${activeFaq ===
                      index
                        ? "active"
                        : ""}`}
                    >
                      {data.id < 9 ? "0" + (data.id + 1) : data.id}
                    </div>
                    <div
                      className={`newfaqCardtext my-auto ${activeFaq === index
                        ? "open"
                        : ""}`}
                    >
                      <h5 className="text-white">
                        {data.question}
                      </h5>

                      {activeFaq === data.id &&
                        <p className="text-white">
                          {data.answer}
                        </p>}
                    </div>
                  </div>
                  <div
                    className={` cross_ani ${activeFaq === data.id
                      ? "cross"
                      : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M15.5953 6.8908C15.5953 6.28988 15.1082 5.80273 14.5072 5.80273C13.9063 5.80273 13.4192 6.28988 13.4192 6.8908V13.4192H6.8908C6.28988 13.4192 5.80273 13.9063 5.80273 14.5072C5.80273 15.1082 6.28988 15.5953 6.8908 15.5953L13.4192 15.5953V22.1237C13.4192 22.7246 13.9063 23.2118 14.5072 23.2118C15.1082 23.2118 15.5953 22.7246 15.5953 22.1237V15.5953L22.1237 15.5953C22.7246 15.5953 23.2118 15.1082 23.2118 14.5072C23.2118 13.9063 22.7246 13.4192 22.1237 13.4192H15.5953V6.8908Z"
                        fill={`${activeFaq === data.id ? "#9AD1FC" : "white"}`}
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
