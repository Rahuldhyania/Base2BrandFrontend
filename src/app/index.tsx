"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { AppStateContext } from "./context/AppStateContext";

export default function Index({ children }) {
  const pathname = usePathname();
  // console.log("pathname22222",pathname);
  
  // const searchParams = useSearchParams();
  // const query = searchParams.toString();
  const { currentUrl, setCurrentUrl } = useContext(AppStateContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(typeof window !== undefined){

      // Set current URL on the client-side when loading is complete  
      setCurrentUrl(`${window?.location?.href}`);
      setLoading(false);
    }
  }, [pathname]);

  return ( 
    <>
      <head>  
        <link rel="canonical" href={currentUrl} /> 
      </head>
      <div>
        {children}
      </div>
    </>
  );
}
