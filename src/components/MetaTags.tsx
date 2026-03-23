import { useEffect } from "react";
import faviconImage from 'figma:asset/39ad0543309688def41bfab4f3afb0d632e20b4f.png';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export function MetaTags({ 
  title = "Mebiz Apps - Premium Shopify App Solutions", 
  description = "Discover our flagship Shopify apps: Mebiz Store Finder, GST Suite, and Wishlister. Professional solutions to enhance your e-commerce store.",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
}: MetaTagsProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update favicon
    const updateFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(icon => icon.remove());
      
      // Add new favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = faviconImage;
      document.head.appendChild(link);
      
      // Add apple-touch-icon
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.href = faviconImage;
      document.head.appendChild(appleLink);
    };
    
    updateFavicon();

    // Update or create meta tag helper function
    const updateOrCreateMetaTag = (selector: string, attribute: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, attributeValue);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    // Standard meta tags
    updateOrCreateMetaTag('meta[name="description"]', "name", "description", description);
    updateOrCreateMetaTag('meta[name="title"]', "name", "title", title);
    updateOrCreateMetaTag('meta[name="google-site-verification"]', "name", "google-site-verification", "kcyUTdF0z2Y-YOSkcmTwL_q8hjYqJY3jNGe47zXe7IU");
    
    // Open Graph meta tags
    updateOrCreateMetaTag('meta[property="og:title"]', "property", "og:title", title);
    updateOrCreateMetaTag('meta[property="og:description"]', "property", "og:description", description);
    updateOrCreateMetaTag('meta[property="og:image"]', "property", "og:image", image);
    updateOrCreateMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    updateOrCreateMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Mebiz Apps");
    
    // Twitter Card meta tags
    updateOrCreateMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    updateOrCreateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateOrCreateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateOrCreateMetaTag('meta[name="twitter:image"]', "name", "twitter:image", image);
    
    // Remove any Figma-related meta tags if they exist
    const figmaMetaTags = document.querySelectorAll('meta[content*="Figma"], meta[content*="figma"]');
    figmaMetaTags.forEach(tag => {
      // Only remove if it's in og: or twitter: tags to avoid breaking image imports
      const property = tag.getAttribute('property') || tag.getAttribute('name') || '';
      if (property.startsWith('og:') || property.startsWith('twitter:')) {
        tag.remove();
      }
    });
  }, [title, description, image]);

  return null;
}