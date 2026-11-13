"use client";

import { useEffect } from "react";
import { initMotion } from "@/lib/motion";

/** Boots Lenis + GSAP + Vanta once the page has hydrated. Renders nothing. */
export default function Motion() {
  useEffect(() => initMotion(), []);
  return null;
}
