"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom easing functions
export const easings = {
  // Expo easing - smooth and natural
  expoOut: "power4.out",
  expoIn: "power4.in",
  expoInOut: "power4.inOut",

  // Smooth easing for UI
  smooth: "power2.out",
  smoothIn: "power2.in",
  smoothInOut: "power2.inOut",

  // Spring-like bounce
  elastic: "elastic.out(1, 0.3)",

  // Back easing with overshoot
  back: "back.out(1.7)",
  backIn: "back.in(1.7)",

  // Custom bezier for cinematic feel
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
};

// Animation durations
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
};

/**
 * Animate element fade in with slide up
 */
export function fadeInUp(
  element: Element | Element[] | null,
  options?: {
    duration?: number;
    delay?: number;
    y?: number;
    ease?: string;
    stagger?: number;
  }
) {
  if (!element) return;

  const {
    duration = durations.normal,
    delay = 0,
    y = 60,
    ease = easings.expoOut,
    stagger = 0.1,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
    }
  );
}

/**
 * Animate element scale in
 */
export function scaleIn(
  element: Element | Element[] | null,
  options?: {
    duration?: number;
    delay?: number;
    scale?: number;
    ease?: string;
  }
) {
  if (!element) return;

  const {
    duration = durations.normal,
    delay = 0,
    scale = 0.9,
    ease = easings.expoOut,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
    }
  );
}

/**
 * Animate text reveal (clip path)
 */
export function textReveal(
  element: Element | Element[] | null,
  options?: {
    duration?: number;
    delay?: number;
    ease?: string;
  }
) {
  if (!element) return;

  const {
    duration = durations.slow,
    delay = 0,
    ease = easings.expoOut,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      clipPath: "inset(0 0 100% 0)",
    },
    {
      clipPath: "inset(0 0 0% 0)",
      duration,
      delay,
      ease,
    }
  );
}

/**
 * Create scroll-triggered animation
 */
export function scrollTriggerFadeIn(
  element: Element | Element[] | null,
  options?: {
    start?: string;
    end?: string;
    y?: number;
    duration?: number;
    stagger?: number;
    markers?: boolean;
  }
) {
  if (!element) return;

  const {
    start = "top 80%",
    end = "bottom 20%",
    y = 60,
    duration = durations.normal,
    stagger = 0.1,
    markers = false,
  } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: easings.expoOut,
      scrollTrigger: {
        trigger: element as Element,
        start,
        end,
        toggleActions: "play none none reverse",
        markers,
      },
    }
  );
}

/**
 * Parallax effect on scroll
 */
export function parallax(
  element: Element | null,
  options?: {
    speed?: number;
    direction?: "up" | "down";
  }
) {
  if (!element) return;

  const { speed = 0.5, direction = "up" } = options || {};
  const y = direction === "up" ? -100 * speed : 100 * speed;

  return gsap.to(element, {
    y,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

/**
 * Magnetic button effect
 */
export function magneticEffect(
  element: HTMLElement,
  strength: number = 0.3
): () => void {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: easings.smooth,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: easings.elastic,
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Stagger children animation
 */
export function staggerChildren(
  parent: Element | null,
  childSelector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) {
  if (!parent) return;

  const {
    y = 40,
    duration = durations.normal,
    stagger = 0.08,
    delay = 0,
  } = options || {};

  const children = parent.querySelectorAll(childSelector);

  return gsap.fromTo(
    children,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: easings.expoOut,
    }
  );
}

/**
 * Counter animation
 */
export function animateCounter(
  element: Element | null,
  endValue: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  if (!element) return;

  const {
    duration = 2,
    prefix = "",
    suffix = "",
  } = options || {};

  const counter = { value: 0 };

  return gsap.to(counter, {
    value: endValue,
    duration,
    ease: easings.expoOut,
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
    },
  });
}

/**
 * Hover scale effect
 */
export function hoverScale(
  element: HTMLElement,
  scale: number = 1.05
): () => void {
  const handleMouseEnter = () => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: easings.smooth,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: easings.smooth,
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Create timeline for complex animations
 */
export function createTimeline(paused: boolean = true) {
  return gsap.timeline({ paused });
}

/**
 * Kill all GSAP animations on element
 */
export function killAnimations(element: Element | Element[] | null) {
  if (!element) return;
  gsap.killTweensOf(element);
}

/**
 * Refresh ScrollTrigger (call after DOM changes)
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

/**
 * Kill all ScrollTrigger instances
 */
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
