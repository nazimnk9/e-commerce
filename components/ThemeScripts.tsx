"use client";

import { useEffect } from "react";

const scripts = [
  "/assets/js/jquery-3.3.1.min.js",
  "/assets/js/slick.js",
  "/assets/js/slick-animation.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/menu.js",
  "/assets/js/lazysizes.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/bootstrap-notify.min.js",
  "/assets/js/theme-setting.js",
  "/assets/js/script.js",
  "/assets/js/custom-slick-animated.js",
];

function loadScript(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-mk-src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.setAttribute("data-mk-src", src);
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load " + src));
    document.body.appendChild(script);
  });
}

export default function ThemeScripts() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(error);
        }
        if (cancelled) return;
      }
      if (cancelled) return;
      try {
        if (typeof window.WOW === "function") {
          new window.WOW({ live: false }).init();
        }
      } catch (error) {
        console.error(error);
      }
      window.__mkThemeReady = true;
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}