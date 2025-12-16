"use client";
import { useState, useRef, useEffect } from "react";
import "./Newcomponentsmain.css"
import { usePathname } from "next/navigation";
const tabs = [
  {
    id : 0,
    slug : "",
    tabName : "Home",
  },
  {
    id : 1,
    slug : "",
    tabName : "About Us",
  }
  ,{
    id : 2,
    slug : "",
    tabName :   "Services",
  }
  ,{
    id : 3,
    slug : "",
    tabName :   "Portfolio",
  }
  ,{
    id : 4,
    slug : "",
    tabName : "Resource Outsourcing",
  }
  ,{
    id : 5,
    slug : "",
    tabName : "Blog"
  }  
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const barRef = useRef<HTMLSpanElement | null>(null);
    const pathName = usePathname();
  console.log(pathName , "sjbfi");
  useEffect(
    () => {
      if (tabRefs.current[active] && barRef.current) {
        const el = tabRefs.current[active];
        barRef.current.style.width = el.offsetWidth + 10 + "px";
        barRef.current.style.left = el.offsetLeft + "px";
      }
    },
    [active]
  );

  return (
    <>
      <nav className="nav">
        <ul className="navList d-flex">
          {tabs.map((tab, index) =>
            <li
              key={index}
              ref={el => {
                tabRefs.current[index] = el;
              }}
              className={`navItem text_xl ${tab.slug === pathName ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {tab.tabName}
            </li>
          )}
          <span className="bar" ref={barRef} style={{backgroundImage:"url(https://res.cloudinary.com/driveuyen/image/upload/v1756195856/base2brand_website/new%20home%20page/79c92e5b1ed4fb6b3e41655525803969b5d95eab_1_3_ejoxcd.png)",backgroundSize:"cover",backgroundPosition:"center"}} />
        </ul>
      </nav>

    </>
  );
}
