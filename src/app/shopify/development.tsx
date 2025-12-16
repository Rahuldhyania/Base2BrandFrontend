import { useState, useCallback, useEffect } from 'react';
import DesktopTabs from './desktop-tabs';
import MobileTabs from './mobile-tabs';

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


const DesignTabs = () => {
   const isBreakpoint = useMediaQuery(991)
   return (
    <div className=''>
        { isBreakpoint ? (
            <div>
               <div className="b2b-gray-bg w-100 py-5"> 
                    <div className="b2b-container-lg"> 
                         <div className="row">
                              <div className="col-md-8 text-center m-auto" >
                                   <h3 className='b2b-partners-heading'>Shopify Website Development Services</h3> 
                                   <p className="text-white">Creating or refining your Shopify store? Let us assist you! From building new shops to optimizing existing ones, we&apos;ve got you covered.</p>
                              </div>
                         </div>
                    </div>
               </div>
                <MobileTabs />
            </div>
        ) : (
            <div>
               <div className="b2b-gray-bg w-100 py-5"> 
                    <div className="b2b-container-lg"> 
                         <div className="row">
                              <div className="col-md-8 text-center m-auto" >
                                   <h3 className='b2b-partners-heading'>Shopify Website Development Services</h3> 
                                   <p className="text-white">Creating or refining your Shopify store? Let us assist you! From building new shops to optimizing existing ones, we&apos;ve got you covered.</p>
                              </div>
                         </div>
                    </div>
               </div>
                <DesktopTabs />
            </div>
        )}
    </div>
    )}


export default DesignTabs;