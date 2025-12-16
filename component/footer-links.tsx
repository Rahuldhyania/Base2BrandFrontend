import Link from "next/link";

interface linkProps {
  id?: number;
}

export default function FooterLinks({ id }: linkProps) {
  return (
    <>
      {id === 1 ? (
        <ul className="mb-0">
          <li>
            <Link href="/seo-services">Search Engine Optimization</Link> 
          </li>
          <li>
            <Link href="/content-writing-services">Content Writing</Link>
          </li>
          <li>
            <Link href="/google-ads-services">Google Ads (PPC)</Link>
          </li>
          <li>
            <Link href="/facebook-ad-agency">Facebook Ad Agency</Link>
          </li>
          <li>
            <Link href="/youtube-marketing">YouTube Marketing</Link>
          </li>
          <li>
          <Link href="/conversion-rate-optimization-services">Conversion Optimization Agency</Link>
          </li>
          <li>
            <Link href="/social-media-services">Social Media Optimization</Link>
          </li>
          <li>
            <Link href="/orm-services">Online Reputation Management</Link>
          </li>
          <li>
            <Link href="/email-marketing-services">Email Marketing Providers</Link>
          </li>
          <li>
            <Link href="/ecommerce-marketing">E-commerce Marketing</Link>
          </li>
        </ul>
      ) : null}
      {id === 2 ? (
        <ul className="mb-0">
          <li>
            <Link href="/web-application">Remix Framework</Link>
          </li>
          <li>
            <Link href="/web-application">Laravel Development</Link>
          </li>
          <li>
            <Link href="/web-application">MEAN Stack Development</Link>
          </li>
          <li>
            <Link href="/web-application">ASP.NET Development</Link>
          </li>
          <li>
            <Link href="/web-application">MERN Stack Development</Link>
          </li>
          <li>
            <Link href="/web-application">Native IOS and Android</Link>
          </li>
          <li>
            <Link href="/web-application">Hybrid apps Development</Link>
          </li>
        </ul>
      ) : null}
      {id === 3 ? (
        <ul className="mb-0">
          <li>
            <Link href="/graphic">Branding &amp; Identity</Link>
          </li>
          <li>
            <Link href="/web-mobile-app-design-services">Website &amp; App Design</Link>
          </li>
          <li>
            <Link href="/motion-graphic-video-services">Motion Graphics</Link>
          </li>
          <li>
            <Link href="/social-media-management-services">Social Media Design</Link>
          </li>
          <li>
            <Link href="/graphic">2D &amp; infographic Design</Link>
          </li>
        </ul>
      ) : null}
      {id === 4 ? (
        <ul className="mb-0">
          <li>
            <Link href="/shopify">Shopify Theme Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Woo Commerce Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Magento Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Big Commerce Development</Link>
          </li>
          <li>
            <Link href="/e-commerce">Open Cart Development</Link>
          </li>
          <li>
            <Link href="/shopify">Shopify App Development</Link>
          </li>
        </ul>
      ) : null}
      {id === 5 ? (
        <ul className="mb-0">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/underconstrution">Hire Resources</Link>
          </li>
          <li>
            <Link href="/case-study">Case Studies</Link>
          </li>
          <li>
            <Link href="/customer-support">Customer Support</Link>
          </li>
        </ul>
      ) : null}
     
    </>
  );
}
