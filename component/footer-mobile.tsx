
import FooterLinks from "./footer-links";
import FooterBottom from "./footer-bottom";
export default function FooterMobile() {
  return (
    <footer className="footer">
      <div className="p-5 borderbottom b2b-black-bg">
        <div className="row footer-box">
          <div className="col footerMenu">
            <div className="accordion accordion-flush b2b-accordion" id="accordionFlushExample">
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse1" aria-expanded="false" aria-controls="footer-collapse1">
                        Digital Marketing
                        </button>
                    </h5>
                    <div id="footer-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={1} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse2" aria-expanded="false" aria-controls="footer-collapse2">
                        Web/Mobile Development
                        </button>
                    </h5>
                    <div id="footer-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={2} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse3" aria-expanded="false" aria-controls="footer-collapse3">
                        Graphic Design
                        </button>
                    </h5>
                    <div id="footer-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={3} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse4" aria-expanded="false" aria-controls="footer-collapse4">
                        Ecommerce  Development
                        </button>
                    </h5>
                    <div id="footer-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={4} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse5" aria-expanded="false" aria-controls="footer-collapse5">
                        Quick Links
                        </button>
                    </h5>
                    <div id="footer-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={5} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h5 className="accordion-header fs-4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#footer-collapse6" aria-expanded="false" aria-controls="footer-collapse6">
                        Other Links
                        </button>
                    </h5>
                    <div id="footer-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <FooterLinks id={6} /> 
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
          
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
