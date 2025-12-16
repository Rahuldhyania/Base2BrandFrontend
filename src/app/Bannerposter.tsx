"use client";
import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
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
const Bannerposter = () => {
  const currentpath = usePathname()
  const isBreakpoint = useMediaQuery(600)
  return (
    <>
      <div className='position-relative'>
        {!isBreakpoint ? (
          <div className='poster_banner'>
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/BlackFridayimg.png?v=1761288936'
              alt=''
              width={10000}
              height={1000}
              className='poster_banner_image'
            />
          </div>
        ) : (
          <div className='poster_banner_ph'>
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/mobile_banner.png'
              alt=''
              width={1000}
              height={500}
            />
          </div>
        )}
        <Link href='/contact-us'>
          <div className='banner_poster_btn'>
            <Image
              src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/deal_btn.png?v=1761290246'
              alt=''
              width={10000}
              height={500}
            />
          </div>
        </Link>
      </div>

    </>
  )
}

export default Bannerposter;
