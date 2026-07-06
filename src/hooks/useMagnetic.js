/**
 * useMagnetic.js
 *
 * A reusable hook that adds a smooth magnetic pull effect to any element.
 * When the pointer hovers within the element's bounds, the element drifts
 * toward the cursor. When the pointer leaves, it springs back.
 *
 * Usage:
 *   const magnetRef = useMagnetic(0.35); // 0–1, how strongly it pulls
 *   <button ref={magnetRef}>Click Me</button>
 */

import { useRef, useEffect } from "react";

const useMagnetic = (strength = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId = null;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const lerp = (a, b, t) => a + (b - a) * t;
    const LERP_FACTOR = 0.12; // smoothing

    const animate = () => {
      currentX = lerp(currentX, targetX, LERP_FACTOR);
      currentY = lerp(currentY, targetY, LERP_FACTOR);

      el.style.transform = `translate(${currentX}px, ${currentY}px)`;

      // Stop looping once close enough to target
      const dist = Math.hypot(targetX - currentX, targetY - currentY);
      if (dist > 0.05) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Maximum pull in pixels
      const maxPull = Math.min(rect.width, rect.height) * 0.4;

      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;

      // Clamp to maxPull
      targetX = Math.max(-maxPull, Math.min(maxPull, dx));
      targetY = Math.max(-maxPull, Math.min(maxPull, dy));

      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
      // Reset transform on cleanup
      el.style.transform = "";
    };
  }, [strength]);

  return ref;
};

export default useMagnetic;
