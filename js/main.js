/* ================================================================
   CONSTANTS & CONFIGURATION — Nexora Labs
   ================================================================ */

/* ================================================================
   INPUT SANITIZATION
   ================================================================ */
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
    .substring(0, 2000);
}

var AGENCY = {
  name: 'Nexora Labs',
  tagline: 'AI + Web + Automation. Turning business problems into digital systems.',
  email: 'us641787@gmail.com',
  whatsapp: '+919304008740',
  linkedin: 'https://www.linkedin.com/in/utkarshh29/',
  github: 'https://github.com/utkarshh',
  location: 'Bengaluru, India',
  projects: [
    {
      title: 'Code Canva',
      category: 'Developer Tools',
      featured: true,
      url: 'https://code-canva-lime.vercel.app/',
      description: 'An intelligent platform that transforms codebases into beautiful visual architecture diagrams. Built for developers who want to understand, optimize, and showcase their systems.',
      tags: ['Next.js', 'TypeScript', 'AI', 'TailwindCSS'],
      screenshot: 'img/code-canvas.png'
    },
    {
      title: 'CareerBoost AI',
      category: 'AI Platform',
      url: 'https://www.linkedin.com/in/utkarshh29/',
      description: 'AI-powered career development platform with resume analysis, interview prep, and personalized career roadmaps.',
      tags: ['AI', 'Career Development', 'React', 'Node.js'],
      screenshot: 'img/career-boost-ai.png'
    },
    {
      title: 'ResuMatch',
      category: 'AI Recruitment',
      url: 'https://resu-match-three.vercel.app/',
      description: 'AI resume optimization platform with ATS scoring and tailored resume generation for every job application.',
      tags: ['Next.js', 'AI', 'TypeScript', 'Vercel'],
      screenshot: 'img/resumatch.png'
    },
    {
      title: 'My Daily W',
      category: 'Productivity',
      url: 'https://my-daily-w.vercel.app/',
      description: 'Daily productivity and habit tracking application with streaks, completion tracking, and progress analytics.',
      tags: ['React', 'TypeScript', 'Vercel'],
      screenshot: 'img/my-daily-w.png'
    }
  ]
};

var EXPERTISE_CARDS = [
  { icon: 'ti-robot', name: 'AI Applications', desc: 'Custom AI tools built around specific business workflows.', highlighted: true },
  { icon: 'ti-device-desktop', name: 'Business Websites', desc: 'Premium, fast and conversion-focused websites.', highlighted: false },
  { icon: 'ti-crown', name: 'SaaS Products', desc: 'MVPs and production-ready web applications.', highlighted: true },
  { icon: 'ti-sparkles', name: 'AI Agents', desc: 'Assistants that qualify leads, answer questions and automate repetitive work.', highlighted: true },
  { icon: 'ti-arrows-join', name: 'Automation Systems', desc: 'Connect forms, CRM, WhatsApp, email and internal workflows.', highlighted: false },
  { icon: 'ti-chart-line', name: 'Business Dashboards', desc: 'Turn business data into useful operational visibility.', highlighted: false }
];

var BUSINESS_IMPACT = [
  { problem: 'OUTDATED WEBSITE', solution: 'Conversion-focused experience', outcome: 'Attract & Trust', icon: 'ti-device-desktop' },
  { problem: 'NO BOOKING FLOW', solution: 'Online appointment system', outcome: 'Instant Conversion', icon: 'ti-calendar' },
  { problem: 'MANUAL FOLLOW-UP', solution: 'Automated workflow', outcome: 'Saves Hours Daily', icon: 'ti-sparkles' },
  { problem: 'LOST ENQUIRIES', solution: 'Centralized lead capture', outcome: 'No Missed Revenue', icon: 'ti-mail' },
  { problem: 'NO CUSTOMER DATA', solution: 'Analytics + dashboard', outcome: 'Clear Visibility', icon: 'ti-chart-line' },
  { problem: 'REPETITIVE QUESTIONS', solution: 'AI assistant', outcome: '24/7 Qualification', icon: 'ti-message-circle' }
];

var WHY_US = [
  { icon: 'ti-user-check', title: 'Founder-Led', desc: 'You communicate directly with the person building the system.' },
  { icon: 'ti-rocket', title: 'AI-Powered Workflow', desc: 'Modern AI-assisted development allows faster iteration.' },
  { icon: 'ti-shield-check', title: 'No Unnecessary Complexity', desc: 'We build what your business actually needs.' },
  { icon: 'ti-code', title: 'Transparent Process', desc: 'Clear scope, milestones and communication.' },
  { icon: 'ti-cpu', title: 'Modern Technology', desc: 'React, Next.js, Node.js, AI APIs, databases, and cloud deployment.' },
  { icon: 'ti-chart-line', title: 'Built Around Outcomes', desc: 'We start with the business problem rather than the technology.' }
];

var PROCESS_STEPS = [
  { num: '01', title: 'DISCOVER', desc: 'Understand your business, customers and goals.' },
  { num: '02', title: 'AUDIT', desc: 'Find the biggest digital and operational opportunities.' },
  { num: '03', title: 'DESIGN', desc: 'Create the experience and workflow before development.' },
  { num: '04', title: 'BUILD', desc: 'Develop the website, application or automation system.' },
  { num: '05', title: 'TEST', desc: 'Test across devices, browsers and real workflows.' },
  { num: '06', title: 'LAUNCH', desc: 'Deploy, configure and hand over the system.' },
  { num: '07', title: 'GROW', desc: 'Improve based on real usage and business feedback.' }
];

var TECH_STACK = [
  { icon: 'ti-brand-nextjs', name: 'Next.js' },
  { icon: 'ti-brand-react', name: 'React' },
  { icon: 'ti-brand-typescript', name: 'TypeScript' },
  { icon: 'ti-brand-nodejs', name: 'Node.js' },
  { icon: 'ti-robot', name: 'AI Agents' },
  { icon: 'ti-sparkles', name: 'OpenAI' },
  { icon: 'ti-brain', name: 'Claude' },
  { icon: 'ti-database', name: 'MongoDB' },
  { icon: 'ti-triangle', name: 'Vercel' },
  { icon: 'ti-cloud', name: 'AWS' }
];

var UPCOMING_PROJECTS = [
  'Stock Predictor',
  'Money Tracker',
  'IQUE',
  'RestroBar Management System',
  'NotebookLM Clone'
];

var FOUNDER_TIMELINE = [
  { year: 'Utkarsh Srivastava', title: 'Founder & Lead Developer', desc: 'Built directly by the founder using modern AI-assisted engineering.' },
  { year: 'Direct & Honest', title: 'No unnecessary outsourcing', desc: 'Ensures absolute quality, speed, and alignment with your goals.' }
];

var PROJECT_INSIGHTS = [
  {
    title: 'Code Canva',
    challenge: 'Create a modern AI-powered developer/productivity experience.',
    solution: 'Built an interactive web platform with modern frontend architecture and AI-focused workflows.',
    learning: 'Designing AI products requires strong information hierarchy and feedback states.',
    outcome: 'A functional product experience demonstrating Nexora\'s ability to design and build modern AI interfaces.'
  },
  {
    title: 'CareerBoost AI',
    challenge: 'Provide personalized career coaching and resume reviews at scale.',
    solution: 'Integrated large language models to analyze resumes and suggest targeted improvements.',
    learning: 'Real-time feedback loops are critical to user trust in automated systems.',
    outcome: 'Scalable career assistance accessible via LinkedIn and web integration.'
  },
  {
    title: 'ResuMatch',
    challenge: 'Help job seekers optimize resumes for modern automated tracking systems (ATS).',
    solution: 'Built an ATS scoring matching system that identifies missing keywords and structure gaps.',
    learning: 'Parsing complex document structures requires robust data validation and cleanup.',
    outcome: 'Fully functional ATS optimization tool with high precision feedback.'
  },
  {
    title: 'My Daily W',
    challenge: 'Build a habit tracking interface that encourages daily consistency.',
    solution: 'Designed a minimal frontend tracker focused on quick daily logging and visual streak metrics.',
    learning: 'Minimizing friction in habit logging drastically increases user retention.',
    outcome: 'Lightweight daily tracker with local/cloud persistence and streak analytics.'
  }
];

var DEMO_FEEDBACK = [
  {
    name: 'Rohan Mehta',
    business: 'Restaurant Owner',
    role: '',
    location: 'Bengaluru',
    quote: 'Most of our customers find us through Google or Instagram. Having the menu, location and reservation option in one place would make things much easier for them.',
    initials: 'RM'
  },
  {
    name: 'Ananya Kapoor',
    business: 'Interior Design Studio',
    role: 'Founder',
    location: 'Mumbai',
    quote: 'We get a lot of enquiries through Instagram, but people don\u2019t always understand the kind of projects we take on. A proper portfolio and enquiry flow could make that first conversation much easier.',
    initials: 'AK'
  },
  {
    name: 'Dr. Arjun Malhotra',
    business: 'Dental Clinic',
    role: 'Clinic Director',
    location: 'Delhi',
    quote: 'Patients usually want to know the services, approximate process and how to book before they call. Having that information clearly available would save our staff a lot of repeated questions.',
    initials: 'AM'
  },
  {
    name: 'Priya Nair',
    business: 'Fitness Studio',
    role: 'Owner',
    location: 'Hyderabad',
    quote: 'We mostly depend on Instagram for enquiries. I\u2019d like people who are interested in a trial session to be able to book it without having to message us back and forth.',
    initials: 'PN'
  },
  {
    name: 'Vikram Shah',
    business: 'Business Consultancy',
    role: 'Founder',
    location: 'Pune',
    quote: 'Our website explains what we do, but it doesn\u2019t really guide someone toward contacting us. The biggest improvement for us would probably be making the journey from visitor to enquiry much clearer.',
    initials: 'VS'
  },
  {
    name: 'Sarah Thomas',
    business: 'Home Renovation Company',
    role: 'Business Owner',
    location: 'Bengaluru',
    quote: 'We receive enquiries from several different places and keeping track of them manually is becoming difficult. Connecting the website enquiries with a simple follow-up process would be useful.',
    initials: 'ST'
  }
];

var BUSINESS_SOLUTIONS = [
  {
    id: 'restaurants',
    tabName: 'Restaurants & Caf\u00e9s',
    problem: 'Customers discover you through Google and Instagram but struggle to book, view menus or contact you directly.',
    solution: 'Premium website + menu + reservations + WhatsApp + Google integration + customer capture.'
  },
  {
    id: 'clinics',
    tabName: 'Clinics & Dentists',
    problem: 'Potential patients need answers and appointment options immediately.',
    solution: 'Service pages + doctor profiles + appointment requests + WhatsApp + automated follow-up.'
  },
  {
    id: 'gyms',
    tabName: 'Gyms & Fitness',
    problem: 'Visitors are interested but don\'t convert into trial sessions.',
    solution: 'Landing page + membership information + trial booking + lead capture + automated follow-up.'
  },
  {
    id: 'interior',
    tabName: 'Interior Designers',
    problem: 'High-value prospects need to see credibility and previous work before contacting you.',
    solution: 'Premium portfolio + project case studies + enquiry system + lead qualification.'
  },
  {
    id: 'realestate',
    tabName: 'Real Estate',
    problem: 'Property enquiries are scattered across platforms and difficult to manage.',
    solution: 'Property pages + enquiry capture + WhatsApp + lead management + automation.'
  },
  {
    id: 'b2b',
    tabName: 'B2B Businesses',
    problem: 'Manual enquiries, quotations and follow-ups waste employee time.',
    solution: 'Lead forms + CRM integration + quotation workflows + dashboards + automation.'
  },
  {
    id: 'localservices',
    tabName: 'Premium Local Services',
    problem: 'Salons, car detailing, wedding planners, home renovation, solar installers, or consultants losing leads due to friction.',
    solution: 'Conversion-focused website + enquiry system + WhatsApp + automation.'
  }
];

/* ================================================================
   DYNAMIC LINKS
   ================================================================ */
var waMsg = encodeURIComponent('Hi, I found your website and I\'m interested in booking a consultation for a premium project.');
var waLink = 'https://wa.me/' + AGENCY.whatsapp.replace(/[^0-9]/g, '') + '?text=' + waMsg;

function setHref(id, href) {
  var el = document.getElementById(id);
  if (el) el.href = href;
}
setHref('waBtn', waLink);
setHref('waContact', waLink);
setHref('emailLink', 'mailto:' + AGENCY.email);
setHref('liContact', AGENCY.linkedin);
setHref('linkedinLink', AGENCY.linkedin);
setHref('founderLinkedin', AGENCY.linkedin);
setHref('founderGithub', AGENCY.github);
setHref('founderEmail', 'mailto:' + AGENCY.email);

/* ================================================================
   ANALYTICS
   ================================================================ */
function trackEvent(name, params) {
  params = params || {};
  if (typeof gtag === 'function') gtag('event', name, params);
}
document.querySelectorAll('[data-track]').forEach(function (el) {
  el.addEventListener('click', function () { trackEvent(el.dataset.track); });
});

/* ================================================================
   NAVIGATION
   ================================================================ */
(function () {
  var nav = document.getElementById('nav');
  var lastY = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 80) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (y > lastY && y > 100) nav.classList.add('hide'); else nav.classList.remove('hide');
    lastY = y;
  }, { passive: true });
})();

/* Mobile menu */
(function () {
  var mobileMenu = document.getElementById('mobileMenu');
  var hamburger = document.getElementById('hamburger');
  var mobileClose = document.getElementById('mobileClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileClose.focus();
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  /* Close on link click */
  document.querySelectorAll('.mm-link').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
})();

/* ================================================================
   SCROLL REVEAL (fallback if GSAP not loaded)
   ================================================================ */
(function () {
  if (typeof gsap !== 'undefined') return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();

/* ================================================================
   RENDER DYNAMIC CONTENT
   ================================================================ */
(function () {
  /* --- What We Build Cards --- */
  var expertiseGrid = document.getElementById('expertiseGrid');
  if (expertiseGrid) {
    expertiseGrid.innerHTML = '';
    EXPERTISE_CARDS.forEach(function (c, i) {
      var card = document.createElement('div');
      card.className = 'expertise-card reveal reveal-delay-' + ((i % 3) + 1);
      if (c.highlighted) card.classList.add('highlighted');
      card.innerHTML =
        '<div class="expertise-icon"><i class="ti ' + c.icon + '" aria-hidden="true"></i></div>' +
        '<div class="expertise-name">' + c.name + '</div>' +
        '<div class="expertise-desc">' + c.desc + '</div>';
      expertiseGrid.appendChild(card);
    });
  }

  /* --- Why Us Cards --- */
  var whyusGrid = document.getElementById('whyusGrid');
  if (whyusGrid) {
    whyusGrid.innerHTML = '';
    WHY_US.forEach(function (w, i) {
      var card = document.createElement('div');
      card.className = 'whyus-card reveal reveal-delay-' + ((i % 3) + 1);
      card.innerHTML =
        '<div class="whyus-icon"><i class="ti ' + w.icon + '" aria-hidden="true"></i></div>' +
        '<div><div class="whyus-title">' + w.title + '</div>' +
        '<div class="whyus-desc">' + w.desc + '</div></div>';
      whyusGrid.appendChild(card);
    });
  }

  /* --- Process Steps --- */
  var timeline = document.getElementById('processTimeline');
  if (timeline) {
    timeline.innerHTML = '';
    PROCESS_STEPS.forEach(function (s) {
      var step = document.createElement('div');
      step.className = 'process-step';
      step.innerHTML =
        '<div class="process-num">' + s.num + '</div>' +
        '<div class="process-connector" aria-hidden="true"></div>' +
        '<div class="process-title">' + s.title + '</div>' +
        '<div class="process-desc">' + s.desc + '</div>';
      timeline.appendChild(step);
    });
  }

  /* --- Tech Stack --- */
  var techGrid = document.getElementById('techstackGrid');
  if (techGrid) {
    techGrid.innerHTML = '';
    TECH_STACK.forEach(function (t, i) {
      var card = document.createElement('div');
      card.className = 'tech-card reveal reveal-delay-' + ((i % 5) + 1);
      card.innerHTML = '<i class="ti ' + t.icon + '" aria-hidden="true"></i><span>' + t.name + '</span>';
      techGrid.appendChild(card);
    });
  }

  /* --- Business Impact Cards --- */
  var impactGrid = document.getElementById('impactGrid');
  if (impactGrid) {
    impactGrid.innerHTML = '';
    BUSINESS_IMPACT.forEach(function (o, i) {
      var card = document.createElement('div');
      card.className = 'impact-card reveal reveal-delay-' + ((i % 3) + 1);
      card.innerHTML =
        '<div class="impact-icon-wrap"><i class="ti ' + o.icon + '" aria-hidden="true"></i></div>' +
        '<div class="impact-problem">' + o.problem + '</div>' +
        '<div class="impact-arrow"><i class="ti ti-arrow-down" aria-hidden="true"></i></div>' +
        '<div class="impact-solution">' + o.solution + '</div>' +
        '<div class="impact-arrow"><i class="ti ti-arrow-down" aria-hidden="true"></i></div>' +
        '<div class="impact-outcome">' + o.outcome + '</div>';
      impactGrid.appendChild(card);
    });
  }

  /* --- Founder timeline --- */
  var founderTimeline = document.getElementById('founderTimeline');
  if (founderTimeline) {
    founderTimeline.innerHTML = '';
    FOUNDER_TIMELINE.forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'timeline-item';
      el.innerHTML =
        '<div class="timeline-year">' + item.year + '</div>' +
        '<div class="timeline-title">' + item.title + '</div>' +
        '<div class="timeline-desc">' + item.desc + '</div>';
      founderTimeline.appendChild(el);
    });
  }

  /* --- Upcoming Projects --- */
  var upcomingGrid = document.getElementById('upcomingGrid');
  if (upcomingGrid) {
    upcomingGrid.innerHTML = '';
    UPCOMING_PROJECTS.forEach(function (name) {
      var card = document.createElement('div');
      card.className = 'upcoming-card';
      card.innerHTML = '<i class="ti ti-clock" aria-hidden="true"></i><span>' + name + '</span>';
      upcomingGrid.appendChild(card);
    });
  }

  /* --- Demo Feedback Scenarios --- */
  var feedbackGrid = document.getElementById('feedbackGrid');
  if (feedbackGrid) {
    feedbackGrid.innerHTML = '';
    DEMO_FEEDBACK.forEach(function (t, i) {
      var roleLine = t.role ? t.role + ' \u00B7 ' + t.business : t.business;
      var locationLine = t.location ? '<div class="feedback-location">' + t.location + '</div>' : '';
      var card = document.createElement('div');
      card.className = 'feedback-card reveal reveal-delay-' + ((i % 3) + 1);
      card.innerHTML =
        '<div>' +
        '<div class="feedback-badge">Illustrative Scenario</div>' +
        '<div class="feedback-text">\u201C' + t.quote + '\u201D</div>' +
        '</div>' +
        '<div class="feedback-author">' +
        '<div class="feedback-avatar">' + t.initials + '</div>' +
        '<div>' +
        '<div class="feedback-name">' + t.name + '</div>' +
        '<div class="feedback-role">' + roleLine + '</div>' +
        locationLine +
        '</div>' +
        '</div>';
      feedbackGrid.appendChild(card);
    });
  }

  /* --- Project Insights --- */
  var insightsGrid = document.getElementById('insightsGrid');
  if (insightsGrid) {
    insightsGrid.innerHTML = '';
    PROJECT_INSIGHTS.forEach(function (ins, i) {
      var card = document.createElement('div');
      card.className = 'insight-card reveal reveal-delay-' + ((i % 2) + 1);
      card.innerHTML =
        '<div class="insight-header">' +
        '<span class="insight-project-tag">' + ins.title + '</span>' +
        '</div>' +
        '<div class="insight-body">' +
        '<div class="insight-section"><strong>Challenge:</strong> <span>' + ins.challenge + '</span></div>' +
        '<div class="insight-section"><strong>Solution:</strong> <span>' + ins.solution + '</span></div>' +
        '<div class="insight-section"><strong>Learning:</strong> <span>' + ins.learning + '</span></div>' +
        '<div class="insight-section"><strong>Outcome:</strong> <span class="outcome-tag">' + ins.outcome + '</span></div>' +
        '</div>';
      insightsGrid.appendChild(card);
    });
  }

  /* --- Business Specific Solutions --- */
  var solTabs = document.getElementById('solTabs');
  var solContent = document.getElementById('solContent');
  if (solTabs && solContent) {
    solTabs.innerHTML = '';
    solContent.innerHTML = '';

    BUSINESS_SOLUTIONS.forEach(function (sol, idx) {
      var btn = document.createElement('button');
      btn.className = 'sol-tab-btn' + (idx === 0 ? ' active' : '');
      btn.dataset.id = sol.id;
      btn.textContent = sol.tabName;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      btn.setAttribute('aria-controls', 'panel-' + sol.id);
      btn.id = 'tab-' + sol.id;
      solTabs.appendChild(btn);

      var panel = document.createElement('div');
      panel.className = 'sol-panel' + (idx === 0 ? ' active' : '');
      panel.id = 'panel-' + sol.id;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', 'tab-' + sol.id);
      panel.innerHTML =
        '<div class="sol-panel-inner">' +
        '  <div class="sol-panel-col">' +
        '    <div class="sol-label-header">Typical Opportunity</div>' +
        '    <div class="sol-problem-text"><i class="ti ti-alert-circle" aria-hidden="true"></i> ' + sol.problem + '</div>' +
        '  </div>' +
        '  <div class="sol-panel-col">' +
        '    <div class="sol-label-header">How Nexora Helps</div>' +
        '    <div class="sol-solution-text"><i class="ti ti-circle-check" aria-hidden="true"></i> ' + sol.solution + '</div>' +
        '    <a href="#audit" class="btn btn-secondary sol-panel-cta" data-track="explore_solution_' + sol.id + '">Explore Solution <i class="ti ti-arrow-right" aria-hidden="true"></i></a>' +
        '  </div>' +
        '</div>';
      solContent.appendChild(panel);

      btn.addEventListener('click', function () {
        document.querySelectorAll('.sol-tab-btn').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.sol-panel').forEach(function (p) {
          p.classList.remove('active');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        panel.classList.add('active');
      });

      /* Keyboard navigation for tabs */
      btn.addEventListener('keydown', function (e) {
        var tabs = Array.from(solTabs.querySelectorAll('.sol-tab-btn'));
        var idx = tabs.indexOf(btn);
        var next;
        if (e.key === 'ArrowRight') {
          next = tabs[(idx + 1) % tabs.length];
        } else if (e.key === 'ArrowLeft') {
          next = tabs[(idx - 1 + tabs.length) % tabs.length];
        } else if (e.key === 'Home') {
          next = tabs[0];
        } else if (e.key === 'End') {
          next = tabs[tabs.length - 1];
        }
        if (next) {
          e.preventDefault();
          next.click();
          next.focus();
        }
      });
    });
  }
})();

/* ================================================================
   FORM HANDLERS — AUDIT & CONTACT
   ================================================================ */
(function () {
  function showInlineError(inputEl, errorEl, message) {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = message;
    errorEl.hidden = false;
    inputEl.setAttribute('aria-invalid', 'true');
  }

  function clearInlineError(inputEl, errorEl) {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = '';
    errorEl.hidden = true;
    inputEl.removeAttribute('aria-invalid');
  }

  function addInlineErrorFields(form) {
    var fields = form.querySelectorAll('input[required], textarea[required], select[required]');
    fields.forEach(function (input) {
      var errEl = document.createElement('div');
      errEl.className = 'field-error';
      errEl.setAttribute('role', 'alert');
      errEl.setAttribute('aria-live', 'polite');
      errEl.hidden = true;
      input.parentNode.appendChild(errEl);
      input.addEventListener('input', function () {
        clearInlineError(input, errEl);
      });
    });
  }

  /* Audit Form */
  var auditForm = document.getElementById('auditForm');
  var auditSuccess = document.getElementById('auditSuccess');
  if (auditForm && auditSuccess) {
    addInlineErrorFields(auditForm);

    auditForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('auditName').value.trim();
      var business = document.getElementById('auditBizName').value.trim();
      var url = document.getElementById('auditUrl').value.trim();
      var industry = document.getElementById('auditIndustry').value.trim();
      var email = document.getElementById('auditEmail').value.trim();
      var whatsapp = document.getElementById('auditWhatsapp').value.trim();

      var hasError = false;
      var fields = [
        { el: document.getElementById('auditName'), val: name, msg: 'Name is required.' },
        { el: document.getElementById('auditBizName'), val: business, msg: 'Business name is required.' },
        { el: document.getElementById('auditIndustry'), val: industry, msg: 'Industry is required.' },
        { el: document.getElementById('auditEmail'), val: email, msg: 'Email is required.' },
        { el: document.getElementById('auditWhatsapp'), val: whatsapp, msg: 'WhatsApp number is required.' }
      ];

      fields.forEach(function (f) {
        var errEl = f.el.parentNode.querySelector('.field-error');
        clearInlineError(f.el, errEl);
        if (!f.val) {
          showInlineError(f.el, errEl, f.msg);
          hasError = true;
        }
      });

      if (hasError) {
        var firstError = auditForm.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }

      var submitBtn = auditForm.querySelector('button[type="submit"]');
      var originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader" aria-hidden="true"></i> Submitting...';

      var payload = {
        name: sanitizeInput(name),
        businessName: sanitizeInput(business),
        websiteUrl: sanitizeInput(url),
        industry: sanitizeInput(industry),
        email: sanitizeInput(email),
        whatsapp: sanitizeInput(whatsapp),
        _subject: 'New Free Audit Request from ' + sanitizeInput(name) + ' (' + sanitizeInput(business) + ')'
      };

      fetch('https://formsubmit.co/' + AGENCY.email, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (res && res.ok) {
          auditForm.style.display = 'none';
          auditSuccess.hidden = false;
          auditSuccess.style.display = 'block';
          trackEvent('audit_submitted', { name: name, business: business });
        } else {
          showInlineError(document.getElementById('auditEmail'), auditForm.querySelector('.field-error'), 'Submission failed. Please try again.');
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        showInlineError(document.getElementById('auditEmail'), auditForm.querySelector('.field-error'), 'Submission failed. Please check your connection.');
      });
    });
  }

  /* Contact Form */
  var contactForm = document.getElementById('customContactForm');
  var contactSuccess = document.getElementById('contactSuccess');
  if (contactForm && contactSuccess) {
    addInlineErrorFields(contactForm);

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('cName').value.trim();
      var business = document.getElementById('cBusiness').value.trim();
      var email = document.getElementById('cEmail').value.trim();
      var whatsapp = document.getElementById('cWhatsapp').value.trim();
      var improve = document.getElementById('cImprove').value.trim();
      var budget = document.getElementById('cBudget').value;
      var timeline = document.getElementById('cTimeline').value;

      var hasError = false;
      var fields = [
        { el: document.getElementById('cName'), val: name, msg: 'Name is required.' },
        { el: document.getElementById('cEmail'), val: email, msg: 'Email is required.' },
        { el: document.getElementById('cWhatsapp'), val: whatsapp, msg: 'WhatsApp number is required.' },
        { el: document.getElementById('cImprove'), val: improve, msg: 'Please describe what you want to improve.' }
      ];

      fields.forEach(function (f) {
        var errEl = f.el.parentNode.querySelector('.field-error');
        clearInlineError(f.el, errEl);
        if (!f.val) {
          showInlineError(f.el, errEl, f.msg);
          hasError = true;
        }
      });

      if (hasError) {
        var firstError = contactForm.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="ti ti-loader" aria-hidden="true"></i> Sending...';

      var payload = {
        name: sanitizeInput(name),
        business: sanitizeInput(business),
        email: sanitizeInput(email),
        whatsapp: sanitizeInput(whatsapp),
        improvements: sanitizeInput(improve),
        budgetRange: sanitizeInput(budget),
        timeline: sanitizeInput(timeline),
        _subject: 'New Project Contact Form from ' + sanitizeInput(name) + ' (' + sanitizeInput(business) + ')'
      };

      fetch('https://formsubmit.co/' + AGENCY.email, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (res && res.ok) {
          contactForm.style.display = 'none';
          contactSuccess.hidden = false;
          contactSuccess.style.display = 'block';
          trackEvent('contact_form_submitted', { name: name, business: business });
        } else {
          showInlineError(document.getElementById('cEmail'), contactForm.querySelector('.field-error'), 'Submission failed. Please try again.');
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        showInlineError(document.getElementById('cEmail'), contactForm.querySelector('.field-error'), 'Submission failed. Please check your connection.');
      });
    });
  }
})();

/* ================================================================
   INIT MODULES
   ================================================================ */
if (typeof PortfolioRenderer !== 'undefined') PortfolioRenderer.init(AGENCY.projects, trackEvent);
if (typeof EstimatorModule !== 'undefined') EstimatorModule.init(AGENCY);

/* ================================================================
   WHATSAPP MOBILE DELAY
   ================================================================ */
(function () {
  var btn = document.getElementById('waBtn');
  if (btn && window.matchMedia('(pointer:coarse)').matches) {
    setTimeout(function () { btn.classList.add('show'); }, 3000);
  }
})();
