(function() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.reveal').forEach(function(el) {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.expertise-card, .impact-card, .feedback-card, .philosophy-card, .whyus-card').forEach(function(card, i) {
    gsap.fromTo(card,
      { opacity: 0, y: 25 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        delay: i * 0.06,
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
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        delay: i * 0.1,
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
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        delay: i * 0.1,
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
        duration: 0.4,
        delay: i * 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          once: true
        }
      }
    );
  });

  gsap.utils.toArray('.cta-block').forEach(function(block) {
    gsap.fromTo(block,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 88%',
          once: true
        }
      }
    );
  });
})();
