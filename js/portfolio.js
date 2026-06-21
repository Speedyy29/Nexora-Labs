var PortfolioRenderer = (function() {
  function init(projects, trackEventFn) {
    var scene = document.getElementById('portfolioScene');
    if (!scene) return;

    projects.forEach(function(p, idx) {
      var card = document.createElement('div');
      card.className = 'portfolio-card reveal' + (p.featured ? ' featured' : '');

      var badgesHtml = '<div class="portfolio-badges">';
      if (p.featured) badgesHtml += '<span class="portfolio-badge featured-badge"><i class="ti ti-star-filled"></i> Featured</span>';
      badgesHtml += '<span class="portfolio-badge live-badge"><i class="ti ti-circle-filled" style="font-size:0.5rem;animation:pulse 2s infinite;"></i> Live Project</span>';
      badgesHtml += '<span class="portfolio-badge category-badge">' + p.category + '</span>';
      badgesHtml += '</div>';

      var tagsHtml = '';
      if (p.tags && p.tags.length) {
        tagsHtml = '<div class="portfolio-tags">';
        p.tags.forEach(function(t) { tagsHtml += '<span class="portfolio-tech">' + t + '</span>'; });
        tagsHtml += '</div>';
      }

      var actionsHtml = '<div class="portfolio-actions">';
      actionsHtml += '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="portfolio-link">Explore Project <i class="ti ti-arrow-right"></i></a>';
      if (p.github) {
        actionsHtml += '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" class="github-link"><i class="ti ti-brand-github"></i> Source</a>';
      }
      actionsHtml += '</div>';

      var imgHtml;
      if (p.screenshot) {
        imgHtml = '<img src="' + p.screenshot + '" alt="' + p.title + ' screenshot" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />';
      } else {
        imgHtml = '<div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0533,#0d1b2a);display:flex;align-items:center;justify-content:center;"><i class="ti ti-rocket" style="font-size:2rem;color:var(--primary);opacity:.4;"></i></div>';
      }

      card.innerHTML =
        '<div class="browser-frame">' +
          '<div class="browser-bar">' +
            '<span class="browser-dot r"></span><span class="browser-dot y"></span><span class="browser-dot g"></span>' +
            '<div class="browser-url">' + p.url + '</div>' +
          '</div>' +
          '<div class="browser-img-wrap">' +
            imgHtml +
          '</div>' +
        '</div>' +
        '<div class="portfolio-meta">' +
          '<div>' +
            badgesHtml +
            '<div class="portfolio-title">' + p.title + '</div>' +
            '<div class="portfolio-desc">' + p.description + '</div>' +
            tagsHtml +
            actionsHtml +
          '</div>' +
        '</div>';
      scene.appendChild(card);

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-8px) scale(1.01)';
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });

      var hoverTimer;
      card.addEventListener('mouseenter', function() {
        hoverTimer = setTimeout(function() {
          if (trackEventFn) trackEventFn('project_viewed', { project: p.title });
        }, 2000);
      });
      card.addEventListener('mouseleave', function() { clearTimeout(hoverTimer); });
    });
  }

  return { init: init };
})();
