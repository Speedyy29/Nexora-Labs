var PortfolioRenderer = (function() {
  function init(projects, trackEventFn) {
    var scene = document.getElementById('portfolioScene');
    if (!scene) return;

    projects.forEach(function(p) {
      var card = document.createElement('div');
      card.className = 'portfolio-card reveal' + (p.featured ? ' featured' : '');

      var badgesHtml = '<div class="portfolio-badges">';
      if (p.featured) badgesHtml += '<span class="portfolio-badge featured-badge"><i class="ti ti-star-filled" aria-hidden="true"></i> Featured</span>';
      badgesHtml += '<span class="portfolio-badge live-badge"><i class="ti ti-circle-filled" aria-hidden="true" style="font-size:0.5rem;"></i> Live Project</span>';
      badgesHtml += '<span class="portfolio-badge category-badge">' + p.category + '</span>';
      badgesHtml += '</div>';

      var tagsHtml = '';
      if (p.tags && p.tags.length) {
        tagsHtml = '<div class="portfolio-tags">';
        p.tags.forEach(function(t) { tagsHtml += '<span class="portfolio-tech">' + t + '</span>'; });
        tagsHtml += '</div>';
      }

      var actionsHtml = '<div class="portfolio-actions">';
      actionsHtml += '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="portfolio-link">View Live <i class="ti ti-arrow-right" aria-hidden="true"></i></a>';
      if (p.github) {
        actionsHtml += '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" class="github-link"><i class="ti ti-brand-github" aria-hidden="true"></i> Source</a>';
      }
      actionsHtml += '</div>';

      var imgHtml;
      if (p.screenshot) {
        imgHtml = '<img src="' + p.screenshot + '" alt="' + p.title + ' screenshot" width="800" height="450" loading="lazy" />';
      } else {
        imgHtml = '<div style="width:100%;height:100%;background:var(--surface-soft);display:flex;align-items:center;justify-content:center;"><i class="ti ti-rocket" aria-hidden="true" style="font-size:2rem;color:var(--muted);opacity:.4;"></i></div>';
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
