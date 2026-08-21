"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A two-part cursor: a dot that tracks the pointer exactly, and a ring that
 * eases toward it a frame behind. Over anything interactive the ring grows
 * and picks up the accent colour.
 *
 * Deliberately does nothing unless the device has a fine pointer (so touch
 * and stylus keep their native behaviour) and the user hasn't asked for
 * reduced motion. When it's off, the native cursor is left alone, the
 * `cursor: none` rule is only applied once this mounts and decides to run.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const decide = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    decide();

    finePointer.addEventListener("change", decide);
    reducedMotion.addEventListener("change", decide);
    return () => {
      finePointer.removeEventListener("change", decide);
      reducedMotion.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide the native cursor only while this is actually running.
    document.documentElement.classList.add("has-custom-cursor");

    // Start off-screen so nothing flashes at 0,0 before the first move.
    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let visible = false;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Grow the ring over anything the user can actually click.
      const interactive =
        e.target instanceof Element &&
        e.target.closest('a, button, [role="button"], input, textarea, select');
      ring.dataset.active = interactive ? "true" : "false";
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const render = () => {
      // Ease the ring toward the pointer; the dot is pinned to it exactly.
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-1 rounded-full bg-bright opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        data-active="false"
        className={[
          "pointer-events-none fixed left-0 top-0 z-[60] rounded-full border opacity-0",
          "h-7 w-7 border-white/25 bg-white/[0.04] backdrop-blur-[2px]",
          "transition-[opacity,width,height,border-color] duration-200",
          "data-[active=true]:h-11 data-[active=true]:w-11 data-[active=true]:border-accent data-[active=true]:bg-accent/[0.08]",
        ].join(" ")}
      />
    </div>
  );
}
