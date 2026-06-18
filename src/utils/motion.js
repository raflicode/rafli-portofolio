export const shouldAnimate = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
