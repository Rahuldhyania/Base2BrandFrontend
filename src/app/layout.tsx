// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from './index';
import { AppStateProvider } from "./context/AppStateContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

import Header from "../../component/header";
import Footer from "../../component/footer";
import Footerbar from "./footerbar";
import Callbackcus from "./customer-support/Callbackcus";
import Ukwebsitemeta from "./Ukwebsitemeta";
import Canonical from "./Canonical";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   verification: {
//     google: 'bUGDRRzEBb5VQ8pNq6l7Qtp-sQJg15CvaLJ2a2O8ZH8',
//   },
//   robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
// }

// JSON-LD Schemas as JavaScript objects:
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.base2brand.com",
  name: "Base 2 Brand Infotech Pvt. Ltd",
  logo: "https://www.base2brand.com/path-to-logo-image.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 98724-87850",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: "English"
  },
  sameAs: [
    "https://www.youtube.com/channel/UCEHsjR1TlFfsbCYQPl1W4Q",
    "https://in.linkedin.com/company/techbase2brand",
    "https://twitter.com/techBase2Brand",
    "https://www.instagram.com/techbase2brand?hl=en",
    "https://www.facebook.com/TechBase2Brand"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.base2brand.com",
  name: "Base 2 Brand Infotech Pvt. Ltd",
  description: "Base2Brand Infotech is a leading agency offering digital marketing, SEO, web development, and Shopify development services for businesses.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.base2brand.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.base2brand.com",
  name: "Base2Brand - Hire Shopify Developers",
  description: "Looking to hire Shopify developers? Get expert Shopify development services for your online store. Affordable, experienced, and professional developers.",
  publisher: {
    "@type": "Organization",
    name: "Base 2 Brand Infotech Pvt. Ltd",
    logo: {
      "@type": "ImageObject",
      url: "https://www.base2brand.com/path-to-logo-image.jpg"
    }
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Shopify Development",
  provider: {
    "@type": "Organization",
    name: "Base 2 Brand Infotech Pvt. Ltd",
    url: "https://www.base2brand.com",
    logo: "https://www.base2brand.com/path-to-logo-image.jpg"
  },
  areaServed: {
    "@type": "Place",
    name: "India"
  },
  offers: {
    "@type": "Offer",
    url: "https://www.base2brand.com/hire-shopify-developers",
    priceCurrency: "INR",
    price: "0",  // Adjust price as number (use 0 or actual price)
    priceValidUntil: "2025-12-31",
    eligibleRegion: {
      "@type": "Place",
      name: "India"
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "0",
      priceCurrency: "INR",
      valueAddedTaxIncluded: false
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can your Shopify expert services help increase my store’s conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement strategies like optimized checkout processes, abandoned cart recovery emails."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer custom Shopify store development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build fully customized Shopify stores tailored to your brand’s needs, ensuring seamless navigation and mobile responsiveness."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Base 2 Brand Infotech Pvt. Ltd",
  image: "https://www.base2brand.com/path-to-logo-image.jpg",
  telephone: "+91 83601 16967",
  email: "base2brand@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-209, Phase 8B",
    addressLocality: "Mohali",
    addressRegion: "Punjab",
    postalCode: "160074",
    addressCountry: "IN"
  },
  url: "https://www.base2brand.com",
  sameAs: [
    "https://www.youtube.com/channel/UCEHsjR1TlFfsbCYQPl1W4Q",
    "https://in.linkedin.com/company/techbase2brand",
    "https://twitter.com/techBase2Brand",
    "https://www.instagram.com/techbase2brand?hl=en",
    "https://www.facebook.com/TechBase2Brand"
  ]
};

// const reviewRatingSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   name: "Base 2 Brand Infotech Pvt. Ltd",
//   url: "https://www.base2brand.com/",
//   review: {
//     "@type": "Review",
//     reviewRating: {
//       "@type": "Rating",
//       ratingValue: "5",
//       bestRating: "5",
//       worstRating: "1"
//     },
//     author: {
//       "@type": "Person",
//       name: "John"
//     },
//     datePublished: "2025-01-01",
//     description: "Base2Brand Infotech is a leading agency offering digital marketing, SEO, web development, and Shopify development services for businesses."
//   }
// };
const ratingSchema ={
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Base 2 Brand Infotech Pvt. Ltd",
  url: "https://www.base2brand.com/",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: 2000,
    bestRating: "5",
    worstRating: "1"
  },
  "review": {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1"
    },
    author: {
      "@type": "Person",
      name: "Mohit"
    },
    datePublished: "2025-01-01",
    description: "Base2Brand Infotech 23423 is a leading agency offering digital marketing, SEO, web development, and Shopify development services for businesses."
  }
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Ukwebsitemeta/>
        <Canonical/>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Content:wght@400;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WF8GV7S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

<Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        websiteSchema,
        webpageSchema,
        faqSchema,
        serviceSchema,
        localBusinessSchema,
        // reviewRatingSchema,
        ratingSchema
      ],
    }),
  }}
/>

      </head>
      <body>
        <AppStateProvider>
          <Index>
            {children}
            <Callbackcus />
          </Index>
        </AppStateProvider>

        <ToastContainer />
        {/* Popper & Bootstrap JS */}
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-82ZFJ2HBGY" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-82ZFJ2HBGY');
            `
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qgutziiy6g");
            `
          }}
        />

        {/* Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WF8GV7S');
            `
          }}
        />

        {/* Facebook Pixel */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1057584673056804');
              fbq('track', 'PageView');
            `
          }}
        />
  
        
           


        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1057584673056804&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
