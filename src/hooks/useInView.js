import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer – replaces framer-motion's
 * useInView to avoid deprecated import paths in newer framer versions.
 * @param {number} threshold  - 0 to 1, how much of element must be visible
 * @param {boolean} once      - only trigger once (default: true)
 */
export const useInView = (threshold = 0.15, once = true) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, inView];
};
