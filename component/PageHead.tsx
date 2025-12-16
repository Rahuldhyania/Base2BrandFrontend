"use client"; // Marking this as a Client Component

import { useEffect } from "react";

export default function PageHead({ PageMeta }) {
  useEffect(() => {
    // Set title
    document.title = PageMeta?.title;

    // Update the meta description tag
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", PageMeta?.description);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content = PageMeta?.description;
      document.head.appendChild(newMetaTag);
    }

    // Add or update the canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
if (canonicalLink) {
  canonicalLink.setAttribute("href", PageMeta?.canonical);
} else {
  canonicalLink = document.createElement("link");
  canonicalLink.setAttribute("rel", "canonical"); // Corrected the attribute assignment
  canonicalLink.setAttribute("href", PageMeta?.canonical); // Corrected the attribute assignment
  document.head.appendChild(canonicalLink);
}

    // Add or update Open Graph image
    let ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) {
      ogImage.setAttribute("content", PageMeta?.image);
    } else {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      ogImage.setAttribute("content", PageMeta?.image);
      document.head.appendChild(ogImage);
    }

    // Add or update Open Graph title
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", PageMeta?.title);
    } else {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      ogTitle.setAttribute("content", PageMeta?.title);
      document.head.appendChild(ogTitle);
    }

    // Add or update Open Graph description
    let ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute("content", PageMeta?.description);
    } else {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      ogDescription.setAttribute("content", PageMeta?.description);
      document.head.appendChild(ogDescription);
    }

    // Add or update Twitter image
    let twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) {
      twitterImage.setAttribute("content", PageMeta?.image);
    } else {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      twitterImage.setAttribute("content", PageMeta?.image);
      document.head.appendChild(twitterImage);
    }

    // Add or update Twitter card type
    let twitterCard = document.querySelector("meta[name='twitter:card']");
    if (twitterCard) {
      twitterCard.setAttribute("content", "summary_large_image");
    } else {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      twitterCard.setAttribute("content", "summary_large_image");
      document.head.appendChild(twitterCard);
    }

  }, [PageMeta]); // Dependency array to re-run the effect if PageMeta? changes

  return null; // No UI elements are rendered here
}
