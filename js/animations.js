(function() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  /* Respect prefers-reduced-motion */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Only animate transform and opacity — compositor-friendly */
  gsap.utils.toArray('.reveal').forEach(function(el) {
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.expertise-card, .impact-card, .feedback-card, .whyus-card').forEach(function(card, i) {
    gsap.fromTo(card,
      { opacity: 0, y: 15 },
      {
        opacity: 1, y: 0,
        duration: 0.4,
        delay: i * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.portfolio-card').forEach(function(card, i) {
    gsap.fromTo(card,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.process-step').forEach(function(step, i) {
    gsap.fromTo(step,
      { opacity: 0, y: 15 },
      {
        opacity: 1, y: 0,
        duration: 0.4,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 92%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.tech-card').forEach(function(card, i) {
    gsap.fromTo(card,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        delay: i * 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true
        }
      }
    );
  });
})();
