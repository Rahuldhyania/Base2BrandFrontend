import Link from "next/link";
import Image from "next/image";
export default function FooterBottom() {
  return (
    <>

      <div className="main_footer p-5 b2b-black-bg">
        <div className="row d-flex flex-wrap align-items-start row-gap-5">
          <div className="mb-sm-0 mb-4 footerMenu">
            {/* <img src={logo.src} className="FooterLogo" alt="logo" /> */}
            <h2 className="text-white"><b>Follow Us</b></h2>
            <div className="social d-flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/TechBase2Brand/"
                target="_blank"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Facebook.png"
                  className="SocialIcon"
                  alt="Facebook"
                  width={100}
                  height={100}
                />{" "}
              </a>
              <a
                href="https://www.instagram.com/techbase2brand/?hl=en"
                target="_blank"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Instagram.png"
                  className="SocialIcon"
                  alt="Instagram"
                  width={100}
                  height={100}
                />{" "}
              </a>
              <a href="https://twitter.com/techBase2Brand" target="_blank">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Twitter.png"
                  className="SocialIcon"
                  alt="Twitter"
                  width={100}
                  height={100}
                />{" "}
              </a>

              <a
                href="https://in.linkedin.com/company/techbase2brand"
                target="_blank"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Linkedin.png"
                  className="SocialIcon"
                  alt="Linkedin"
                  width={100}
                  height={100}
                />{" "}
              </a>
              <a
                href="https://www.youtube.com/channel/UCEHsjR1TFlEfsbcYQPlLW4Q"
                target="_blank"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/youtube.png"
                  className="SocialIcon"
                  alt="Youtube"
                  width={100}
                  height={100}
                />{" "}
              </a>

              {/* <a href="https://maps.app.goo.gl/xMquw6oWpdiJwLBh8"><img src={Googlemap.src} className="SocialIcon" alt="Googlemap"/> </a> */}
            </div>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h6>Working Hours:</h6>
            <ul className="mb-0">
              <li>Mon-Fri: 10 Am- 07 Pm</li>
              <li>Sat-Sun: Holiday</li>
            </ul>
          </div>
          <div className="mb-sm-0 mb-4 footerMenu">
            <h6>India (headquarter) </h6>
            <ul className="mb-0">
              <li>F-209,
                Sector 74, Mohali, 160074 <br />
                IND <a className="text-white" href="tel:+91-9872487850">+91 9872487850</a></li>
            </ul>
          </div>

          <div className="mb-sm-0 mb-4 footerMenu">
            <h6>USA</h6>
            <ul className="mb-0">
              <li>7311 Gladys Ave El Cerrito CA 94530, <br />
                USA, <a className="text-white" href="tel:+1-720-903-5933">+1 720 9035933</a></li>

            </ul>
          </div>


          <div className="mb-sm-0 mb-4 footerMenu">
            <h6>UK</h6>
            <ul className="mb-0">
              <li>7 Snow Avenue, Blaby, LE8 4BR
                <br />
                UK
                <a className="text-white" href="tel:+44-2080-953232"> +44 2080953232
                </a>
                <br />
                UK
                <a className="text-white" href="tel:+44-7552-535341"> +44 7448435973
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p className="m-0 text-white">
          © 2025 All rights reserved |  <Link className="text-white" href="/"> Base2Brand</Link> |  <Link className="text-white" href="/disclaimer"> Disclaimer</Link> |
          <Link className="text-white" href="/privacy-policy"> Privacy Policy</Link> |  <Link className="text-white" href="/terms-of-service">Terms of Service</Link>

        </p>
      </div>
    </>
  );
}
