"use client";

import { useEffect } from "react";

function waitFor(predicate: () => boolean, timeout = 15000): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const started = Date.now();
    const tick = () => {
      if (predicate()) return resolve(true);
      if (Date.now() - started > timeout) return resolve(false);
      window.setTimeout(tick, 120);
    };
    tick();
  });
}

function loadScriptOnce(src: string): Promise<void> {
  return new Promise<void>((resolve) => {
    if (document.querySelector(`script[data-mk-loaded="${src}"]`)) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.setAttribute("data-mk-loaded", src);
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

/* demo plugins that need their markup present before they are loaded */
const requirements: [string, string][] = [
  ["/timer1.js", ".countdown, .timer, [data-countdown], .deal-timer"],
  ["/timer.js", ".countdown, .timer, [data-countdown], .deal-timer"],
  ["/price-range.js", ".js-range-slider"],
  ["/isotope.min.js", ".grid, .isotope, [data-isotope]"],
  ["/main.js", ".grid, .isotope, [data-isotope]"],
  ["/addtocart.js", '.cart-box, [data-bs-target="#addtocart"]'],
];

function needed(src: string): boolean {
  const rule = requirements.find(([needle]) => src.includes(needle));
  if (!rule) return true;
  return Boolean(document.querySelector(rule[1]));
}

/*
 * Runs the demo pages' own plugin scripts (price range, isotope, lightbox,
 * prism, countdown, etc.) after the shared theme stack is ready.
 */
export default function PageAssets() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const nodes = Array.from(
        document.querySelectorAll<HTMLScriptElement>(
          ".theme-page script[data-mk-src], .theme-page script[data-mk-inline]"
        )
      );
      if (!nodes.length) return;

      const ready = await waitFor(() => window.__mkThemeReady === true);
      if (!ready || cancelled) return;

      for (const node of nodes) {
        if (cancelled) return;
        const src = node.getAttribute("data-mk-src");
        if (src) {
          if (!needed(src)) continue;
          await loadScriptOnce(src);
          continue;
        }
        try {
          // eslint-disable-next-line no-new-func
          new Function(node.textContent ?? "")();
        } catch (error) {
          console.warn("Multikart page script failed:", error);
        }
      }

      if (window.Prism && typeof window.Prism.highlightAll === "function") {
        try {
          window.Prism.highlightAll();
        } catch (error) {
          /* prism optional */
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}