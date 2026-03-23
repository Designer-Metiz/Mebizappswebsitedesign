import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Check if the script is already added to avoid duplicates
    if (document.getElementById("ga-script")) return;

    // Add the async Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-BZ30QGXRCQ";
    script1.id = "ga-script";
    document.head.appendChild(script1);

    // Add the inline configuration script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BZ30QGXRCQ');
    `;
    script2.id = "ga-config-script";
    document.head.appendChild(script2);
  }, []);

  // Track page views whenever the user navigates to a new page
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.gtag) {
      // @ts-ignore
      window.gtag('config', 'G-BZ30QGXRCQ', {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  return null;
}

