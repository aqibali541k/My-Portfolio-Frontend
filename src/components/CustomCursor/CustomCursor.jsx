import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import "./customCursor.css";

/* -------------------------------------------------------------------------- */
/*                             Interactive Elements                           */
/* -------------------------------------------------------------------------- */

const INTERACTIVE_SELECTORS = `
a,
button,
input,
textarea,
select,
label,
img,
svg,
[role="button"],
.cursor-pointer,
.group,
article,
[data-cursor="hover"]
`;


const CustomCursor = () => {
  const dotRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  /* ---------------------------------------------------------------------- */
  /*                          Motion Values                                 */
  /* ---------------------------------------------------------------------- */

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springX = useSpring(ringX, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  const springY = useSpring(ringY, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  /* ---------------------------------------------------------------------- */
  /*                         Instant Dot Movement                           */
  /* ---------------------------------------------------------------------- */

  const moveDot = useCallback((x, y) => {
    if (!dotRef.current) return;

    dotRef.current.style.transform =
      `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  }, []);

  /* ---------------------------------------------------------------------- */
  /*                         Mouse Tracking                                 */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    let raf = null;

    let mouseX = -100;
    let mouseY = -100;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) setVisible(true);

      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        moveDot(mouseX, mouseY);

        ringX.set(mouseX);
        ringY.set(mouseY);
      });

      const target = e.target;

      const isInteractive =
        target instanceof Element &&
        target.closest(INTERACTIVE_SELECTORS);

      setHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    const handleWindowBlur = () => {
      setVisible(false);
    };

    const handleWindowFocus = () => {
      setVisible(true);
    };

    document.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    document.addEventListener(
      "mouseup",
      handleMouseUp
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    window.addEventListener(
      "focus",
      handleWindowFocus
    );

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      document.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      window.removeEventListener(
        "focus",
        handleWindowFocus
      );

      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [moveDot, ringX, ringY]);

  /* ---------------------------------------------------------------------- */
  /*                           Cursor States                                */
  /* ---------------------------------------------------------------------- */

  const dotScale = clicking
    ? 1
    : hovering
      ? 1
      : 1;

  const ringScale = 1;

  return (
    <>
      {/* ================= Inner Dot ================= */}

      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: visible ? 1 : 0,
          transform: "translate(-100px,-100px)",
          scale: dotScale,
          transition:
            "opacity .2s ease, transform .08s ease, scale .2s ease",
        }}
      />

      {/* ================= Outer Ring ================= */}

      <motion.div
        className={`cursor-ring ${hovering ? "is-hovering" : ""
          }`}
        style={{
          x: springX,
          y: springY,
          left: 0,
          top: 0,
          opacity: visible ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: ringScale,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 260,
            damping: 22,
          },
          opacity: {
            duration: 0.15,
          },
        }}
      />
    </>
  );
};
export default CustomCursor;