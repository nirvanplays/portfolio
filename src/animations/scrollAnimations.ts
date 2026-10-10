import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(): void {
  // Prevent duplicate triggers if called multiple times
  killScrollAnimations();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Section reveals
  gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 60%',
          toggleActions: 'play none none none',
        },
      },
    );
  });

  // Project card stagger reveals
  const projectCards = gsap.utils.toArray<HTMLElement>('.project-card-reveal');
  if (projectCards.length) {
    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }

  // Timeline item stagger
  const timelineItems = gsap.utils.toArray<HTMLElement>('.timeline-item-reveal');
  if (timelineItems.length) {
    timelineItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }

  // Skill category buttons stagger
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    const btns = skillSection.querySelectorAll<HTMLElement>('.skill-cat-btn');
    if (btns.length) {
      gsap.fromTo(
        btns,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillSection,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        },
      );
    }
  }

  // Certification card stagger
  const certCards = gsap.utils.toArray<HTMLElement>('.cert-card-reveal');
  if (certCards.length) {
    certCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 87%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  }

  // Refresh ScrollTrigger to calculate exact trigger positions
  ScrollTrigger.refresh();
}

export function killScrollAnimations(): void {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
