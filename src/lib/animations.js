// Shared luxury animation configs for consistent, slow, elegant motion

export const easeLuxury = [0.22, 1, 0.36, 1];

// Standard scroll-reveal transition — slow & luxurious
export const transitionLuxury = { duration: 1.4, ease: easeLuxury };
export const transitionLuxurySlow = { duration: 1.8, ease: easeLuxury };
export const transitionLuxuryFast = { duration: 1.0, ease: easeLuxury };

// With stagger delay
export const transitionStagger = (delay = 0) => ({ duration: 1.4, ease: easeLuxury, delay });

// Standard fade-up variant for scroll reveals
export const fadeUpVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: transitionLuxury,
};

export const fadeUpStaggerVariant = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.4, ease: easeLuxury, delay: index * 0.12 },
});