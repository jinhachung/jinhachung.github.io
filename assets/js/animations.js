// Scroll-triggered fade-in animations for Style B
(function() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Add fade-in class to all sections and entries
  var targets = document.querySelectorAll('.section, .pub-entry, .entry, .skill-group');
  targets.forEach(function(el) {
    el.classList.add('fade-in');
  });

  // Use Intersection Observer for efficient scroll detection
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(function(el) {
    observer.observe(el);
  });
})();
