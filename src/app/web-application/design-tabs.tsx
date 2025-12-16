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
    <div>
        { isBreakpoint ? (
            <div>
                <MobileTabs />
            </div>
        ) : (
            <div>
                <DesktopTabs />
            </div>
        )}
    </div>
    )}


export default DesignTabs;