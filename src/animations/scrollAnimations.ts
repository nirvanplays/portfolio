import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(): void {
  killScrollAnimations();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Gentle section entrance
  const sections = gsap.utils.toArray<HTMLElement>('.section-container');
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  ScrollTrigger.refresh();
}

export function killScrollAnimations(): void {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
