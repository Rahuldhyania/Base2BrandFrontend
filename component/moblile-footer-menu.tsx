 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
import "./footer.css";
import home from "../public/footer-icon/home.svg";
import homefill from "../public/footer-icon/home-Fill.svg";
import About from "../public/footer-icon/About.svg";
import Aboutfill from "../public/footer-icon/About-Fill.svg";
import Contact from "../public/footer-icon/Contact.svg";
import contactfill from "../public/footer-icon/contact-us-Fill.svg";
import portfolio from "../public/footer-icon/portfolio.svg";
import portfoliofill from "../public/footer-icon/portfolio-Fill-svg.svg"; 
import Services from "../public/footer-icon/service.svg"; 
import Servicesfill from "../public/footer-icon/service_FUllfill-02.svg"; 
export default function FooterMobileMenu() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="chin-popup">
      <div className="chin-popup--wrapper">
        <Link href="/" className={`chins ${pathname === "/" ? "active" : ""}`}>
        <img src={pathname === "/" ? homefill.src : home.src} alt="Home Icon" /> 
          <span>HOME</span>
        </Link>

        <Link href="/services" className={`chins ${pathname === "/services" ? "active" : ""}`}>
          {/* <img src={Services.src} alt="Services Icon" className="activeRemove" /> */}
        <img src={pathname === "/services" ? Servicesfill.src : Services.src} className="serviceIconSVG" alt="Services Icon" /> 

          <span>SERVICE</span>
        </Link>

        <Link href="/portfolio" className={`chins ${pathname === "/portfolio" ? "active" : ""}`}>
          {/* <img src={portfolio.src} alt="Portfolio Icon" className="activeRemove" /> */}
        <img src={pathname === "/portfolio" ? portfoliofill.src : portfolio.src} alt="portfolio Icon" /> 

          <span>PORTFOLIO</span>
        </Link>

        <Link href="/about" className={`chins ${pathname === "/about" ? "active" : ""}`}>
          {/* <img src={About.src} alt="About Us Icon" className="activeRemove" /> */}
        <img src={pathname === "/about" ? Aboutfill.src : About.src} alt="About Icon" /> 

          <span>ABOUT US</span>
        </Link>

        <Link href="/contact-us" className={`chins ${pathname === "/contact-us" ? "active" : ""}`}>
          {/* <img src={Contact.src} alt="Contact Us Icon" className="activeRemove" /> */}
        <img src={pathname === "/contact-us" ? contactfill.src : Contact.src} alt="Contact Icon" /> 

          <span>CONTACT US</span>
        </Link>
      </div>
    </div>
  );
}
