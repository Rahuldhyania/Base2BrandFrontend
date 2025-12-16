"use client";
import { useState, useCallback, useEffect } from 'react';
import FooterDesktop from './footer-desktop';
import FooterMobile from './footer-mobile';
import FooterMobileMenu from './moblile-footer-menu';
import { usePathname } from 'next/navigation';
import Footerbar from '@/app/footerbar';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import Footerlinking from '@/app/Footerlinking';
const useMediaQuery = (width) => {

  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
const Footer = () => {
  const currentpath = usePathname()
  const isBreakpoint = useMediaQuery(600)
  return (
    <>
      {/* <Footerlinking/> */}

      <div>
        {isBreakpoint ? (
          <div>
            {currentpath === "/" ?
              "" :
              <Footerbar />
            }
            <FooterMobile />
            <FooterMobileMenu />
          </div>
        ) : (
          <div>
            {currentpath === "/" ?
              "" :
              <Footerbar />
            }
            <FooterDesktop />
          </div>
        )}
      </div>
      <div className="whatsapp_home_logo position-fixed z-3  "
        style={{ width: "60px" }}>
        <a href='https://wa.me/9041700209' target='_blank' >
          <Player
            src="/json/about-us/whtasappjson.json"
            loop
            autoplay
            className="animated-imgs animated-banner-img whatsapp_json"
            style={{
              height: "max-content"
            }}
          />
        </a>
      </div>
    </>
  )
}

export default Footer;