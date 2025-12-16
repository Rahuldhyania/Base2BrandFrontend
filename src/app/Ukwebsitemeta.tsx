"use client";
import { useEffect, useState } from 'react';
const Ukwebsitemeta = () => {
  const [baseURL, setBaseURL] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.origin);
      setBaseURL(url.origin);     
    }
  }, []);
  return (
    <>
      {baseURL.includes('base2brand.co.uk') ? (
        <meta
          name="google-site-verification"
          content="viFJOkfV5CIQOM5gQQW9zcIDTiqN3KmXQnUTR3flGqA"
        />
      ) : (
        <meta
          name="google-site-verification"
          content="bUGDRRzEBb5VQ8pNq6l7Qtp-sQJg15CvaLJ2a2O8ZH8"
        />
      )}
    </>
  );
};

export default Ukwebsitemeta;
