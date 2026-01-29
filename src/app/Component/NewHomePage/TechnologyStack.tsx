"use client";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  "All",
  "Back-End",
  "Front-End",
  "iOS",
  "Android",
  "Cross-Platform",
  "CMS",
  "E-Commerce",
  "Low-Code",
  "Web 3.0",
  "AI",
  "Databases"
];
const technologies = [
  {
    id: 1,
    name: "MongoDB",
    image: "/newhomepage/technology/MongoDB.webp",
    category: ["All", "Databases"]
  },
  {
    id: 2,
    name: "React",
    image: "/newhomepage/technology/react.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 3,
    name: "Flutter",
    image: "/newhomepage/technology/Flutter.webp",
    category: ["All", "Cross-Platform"]
  },
  {
    id: 4,
    name: "Shopify",
    image: "/newhomepage/technology/Shopify.webp",
    category: ["All", "E-Commerce"]
  },
  {
    id: 5,
    name: "Angular",
    image: "/newhomepage/technology/Angular.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 6,
    name: "PyTorch",
    image: "/newhomepage/technology/PyTorch.webp",
    category: ["All", "AI"]
  },
  {
    id: 7,
    name: "WordPress",
    image: "/newhomepage/technology/WordPress.webp",
    category: ["All", "CMS"]
  },
  {
    id: 8,
    name: "Kotlin",
    image: "/newhomepage/technology/Kotlin.webp",
    category: ["All", "Android"]
  },
  {
    id: 9,
    name: "Webflow",
    image: "/newhomepage/technology/Webflow.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 10,
    name: "Ethereum",
    image: "/newhomepage/technology/Ethereum.webp",
    category: ["All", "Web 3.0"]
  },
  {
    id: 11,
    name: "Laravel",
    image: "/newhomepage/technology/Laravel.webp",
    category: ["All", "Back-End"]
  },
  {
    id: 12,
    name: "Framer",
    image: "/newhomepage/technology/framer.svg fill.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 13,
    name: "WooCommerce",
    image: "/newhomepage/technology/WooCommerce.webp",
    category: ["All", "E-Commerce"]
  },
  {
    id: 14,
    name: "Vue.js",
    image: "/newhomepage/technology/Vuejs.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 15,
    name: "Keras",
    image: "/newhomepage/technology/Keras.webp",
    category: ["All", "AI"]
  },
  {
    id: 16,
    name: "Swift",
    image: "/newhomepage/technology/swift.webp",
    category: ["All", "iOS"]
  },
  {
    id: 17,
    name: "Bubble",
    image: "/newhomepage/technology/Bubble Apps.webp",
    category: ["All", "Low-Code"]
  },
  {
    id: 18,
    name: "MySQL",
    image: "/newhomepage/technology/MySQL.webp",
    category: ["All", "Databases"]
  },
  {
    id: 19,
    name: "React Native",
    image: "/newhomepage/technology/React Native.webp",
    category: ["All", "Cross-Platform"]
  },
  {
    id: 20,
    name: "Django",
    image: "/newhomepage/technology/Django.webp",
    category: ["All", "Back-End"]
  },
  {
    id: 21,
    name: "Next.js",
    image: "/newhomepage/technology/Nextjs.webp",
    category: ["All", "Front-End"]
  },
  {
    id: 22,
    name: "TensorFlow",
    image: "/newhomepage/technology/tensor-flow.webp",
    category: ["All", "AI"]
  },
  {
    id: 23,
    name: "Craft CMS",
    image: "/newhomepage/technology/Craft CMS.webp",
    category: ["All", "CMS"]
  },
  {
    id: 24,
    name: "C",
    image: "/newhomepage/technology/C.webp",
    category: ["All", "Back-End"]
  },
  {
    id: 25,
    name: "Java",
    image: "/newhomepage/technology/java.webp",
    category: ["All", "Back-End", "Android"]
  },
  {
    id: 26,
    name: "HyGraph",
    image: "/newhomepage/technology/HyGraph.webp",
    category: ["All", "CMS"]
  },
  {
    id: 27,
    name: "PostgreSQL",
    image: "/newhomepage/technology/PostgreSQL.webp",
    category: ["All", "Databases"]
  },
  {
    id: 28,
    name: "OpenAI GPT",
    image: "/newhomepage/technology/Open AI GPT.webp",
    category: ["All", "AI"]
  },
  {
    id: 29,
    name: "Meta AI",
    image: "/newhomepage/technology/Meta AI.webp",
    category: ["All", "AI"]
  },
  {
    id: 30,
    name: "Node.js",
    image: "/newhomepage/technology/Nodejs.webp",
    category: ["All", "Back-End"]
  },
  {
    id: 31,
    name: "MS SQL Server",
    image: "/newhomepage/technology/MS SQL Server.webp",
    category: ["All", "Databases"]
  },
  {
    id: 32,
    name: "Kotlin Multiplatform",
    image: "/newhomepage/technology/Kotlin Multiplatform.webp",
    category: ["All", "Cross-Platform"]
  }
];

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="text-center">
          <h2 className="b2b-heading text-white">Smart Technology Stack We use For <br/> Smart Solutions</h2>
        </div>

        <section className="technology-section pt-2 pt-md-5">
          <div className="technology-tabs d-flex flex-wrap gap-2 gap-md-3 justify-content-center">
            {tabs.map((tab, i) =>
              <button
                key={i}
                className={`tech-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )}
          </div>

          <div className="technology-grid d-flex flex-wrap justify-content-center">
            {technologies.map(item => {
              const isActive =
                activeTab === "All" || item.category.includes(activeTab);

              return (
                <div
                  key={item.id}
                  className={`technology-item ${isActive ? "show" : "dim"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1000}
                    height={500}
                    className=""
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnologyStack;
