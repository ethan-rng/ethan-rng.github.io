"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * The classic spinning ASCII torus, a port of Andy Sloane's donut.c.
 *
 * Two angles, A and B, rotate the torus about the x and z axes. For each
 * point on its surface we project to a character cell, keep the nearest hit
 * in a z-buffer, and pick a glyph from the luminance ramp based on the dot
 * product of the surface normal with the light direction.
 *
 * Written straight to the DOM through a ref: at ~1,700 cells a frame, going
 * through React state would mean a reconciliation pass 24 times a second for
 * something purely decorative.
 */

/** Dimmest to brightest. The original ramp. */
const LUMINANCE = ".,-~:;=!*#$@";

const THETA_STEP = 0.07; // around the tube
const PHI_STEP = 0.02; // around the torus

function renderFrame(
  a: number,
  b: number,
  width: number,
  height: number,
): string {
  const output = new Array<string>(width * height).fill(" ");
  const zBuffer = new Float32Array(width * height);

  // Projection constants, scaled from donut.c's 80x22 defaults so the torus
  // stays circular at any grid size. The x scale is roughly double the y to
  // compensate for character cells being taller than they are wide.
  const centerX = width / 2;
  const centerY = height / 2;
  const scaleX = width * 0.375;
  const scaleY = height * 0.682;

  const sinA = Math.sin(a);
  const cosA = Math.cos(a);
  const sinB = Math.sin(b);
  const cosB = Math.cos(b);

  for (let theta = 0; theta < 6.28; theta += THETA_STEP) {
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let phi = 0; phi < 6.28; phi += PHI_STEP) {
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      // Circle of radius 1 offset by 2, the tube, before revolution.
      const circleX = cosTheta + 2;
      // One over z, after pushing the torus 5 units from the camera.
      const ooz = 1 / (sinPhi * circleX * sinA + sinTheta * cosA + 5);
      const t = sinPhi * circleX * cosA - sinTheta * sinA;

      const x = Math.floor(
        centerX + scaleX * ooz * (cosPhi * circleX * cosB - t * sinB),
      );
      const y = Math.floor(
        centerY + scaleY * ooz * (cosPhi * circleX * sinB + t * cosB),
      );

      if (y < 0 || y >= height || x < 0 || x >= width) continue;

      const index = x + width * y;
      if (ooz <= zBuffer[index]) continue;

      // Surface normal dotted with the light, mapped onto the ramp.
      const luminance =
        cosB * (sinTheta * sinA - sinPhi * cosTheta * cosA) -
        sinPhi * cosTheta * sinA -
        sinTheta * cosA -
        cosPhi * cosTheta * sinB;

      zBuffer[index] = ooz;
      const ramp = Math.floor(luminance * 8);
      output[index] = LUMINANCE[ramp > 0 ? Math.min(ramp, LUMINANCE.length - 1) : 0];
    }
  }

  // Slice into rows.
  let frame = "";
  for (let row = 0; row < height; row++) {
    frame += output.slice(row * width, (row + 1) * width).join("") + "\n";
  }
  return frame;
}

export default function Donut({
  width = 80,
  height = 22,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  const preRef = useRef<HTMLPreElement>(null);

  // Rendered on the server too. renderFrame is pure, so the markup matches on
  // hydration, and it means the torus is there before JS runs (and stays, if
  // JS never arrives), with the box reserving its height from the first paint.
  const initialFrame = useMemo(
    () => renderFrame(0, 0, width, height),
    [width, height],
  );

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Still frame for anyone who'd rather not have things moving.
    if (reducedMotion.matches) {
      pre.textContent = renderFrame(1, 1, width, height);
      return;
    }

    let a = 0;
    let b = 0;
    let raf = 0;
    let last = 0;
    let paused = false;

    // ~24fps: enough to read as motion, and it suits the terminal feel more
    // than a perfectly smooth 60.
    const FRAME_MS = 1000 / 24;

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (paused || now - last < FRAME_MS) return;
      last = now;

      a += 0.07;
      b += 0.03;
      pre.textContent = renderFrame(a, b, width, height);
    };

    // Don't burn cycles on a tab nobody's looking at.
    const onVisibility = () => {
      paused = document.hidden;
    };

    raf = requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [width, height]);

  return (
    <pre
      ref={preRef}
      aria-hidden="true"
      className={`select-none whitespace-pre font-mono text-muted ${className}`}
    >
      {initialFrame}
    </pre>
  );
}
