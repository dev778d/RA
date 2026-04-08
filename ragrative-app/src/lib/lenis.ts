"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

// Lenis configuration
export const lenisConfig = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
};

// Global Lenis instance
let lenisInstance: Lenis | null = null;

/**
 * Initialize Lenis smooth scroll
 */
export function initLenis(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis(lenisConfig);

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

/**
 * Get Lenis instance
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Destroy Lenis instance
 */
export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

/**
 * Scroll to element or position
 */
export function scrollTo(
  target: string | HTMLElement | number,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
  }
) {
  if (!lenisInstance) return;

  const { offset = 0, duration = 1.2, immediate = false } = options || {};

  lenisInstance.scrollTo(target, {
    offset,
    duration,
    immediate,
  });
}

/**
 * Stop scroll
 */
export function stopScroll() {
  lenisInstance?.stop();
}

/**
 * Start scroll
 */
export function startScroll() {
  lenisInstance?.start();
}

/**
 * React hook for Lenis
 */
export function useLenis(callback?: (lenis: Lenis) => void) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis
    lenisRef.current = initLenis();

    // Call callback if provided
    if (callback && lenisRef.current) {
      callback(lenisRef.current);
    }

    // Cleanup
    return () => {
      // Don't destroy globally - just clean up ref
      lenisRef.current = null;
    };
  }, [callback]);

  return lenisRef.current;
}

/**
 * Hook to integrate Lenis with GSAP ScrollTrigger
 */
export function useLenisScrollTrigger() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = initLenis();

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", () => {
      // Import dynamically to avoid SSR issues
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.update();
      });
    });

    return () => {
      // Cleanup handled by global destroy
    };
  }, []);
}
