
import FooterLinks from "./footer-links";
import FooterBottom from "./footer-bottom";
export default function FooterDesktop() {
  return (
    <footer className="footer">
      <div className="p-5 borderbottom b2b-black-bg">
        <div className="row footer-box">
          <div className="col footerMenu">
            <h6>Digital Marketing</h6>
            <FooterLinks id={1} />
          </div>
          <div className="col footerMenu">
            <h6>Web/Mobile Development</h6>
            <FooterLinks id={2} />
          </div>
          <div className="col footerMenu">
            <h6>Graphic Design</h6>
            <FooterLinks id={3} />
          </div>
          <div className="col footerMenu">
            <h6>Ecommerce  Development</h6>
            <FooterLinks id={4} />
          </div>
          <div className="col footerMenu">
            <h6>Quick Links</h6>
            <FooterLinks id={5} />
          </div>
          {/* <div className="col footerMenu">
            <h5>Other Links</h5>
            <FooterLinks id={6} />
          </div> */}
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
