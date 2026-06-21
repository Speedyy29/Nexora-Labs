/* ================================================================
   CONSTANTS & CONFIGURATION — Nexora Labs
   ================================================================ */
var AGENCY = {
  name: 'Nexora Labs',
  tagline: 'Built with AI. Delivered with precision.',
  email: 'us641787@gmail.com',
  whatsapp: '+919304008740',
  linkedin: 'https://www.linkedin.com/in/utkarshh29/',
  github: 'https://github.com/utkarsh',
  location: 'Bengaluru, India',
  projects: [
    {
      title: 'Career Boost AI',
      category: 'AI Platform',
      featured: true,
      url: 'https://career-pro-ai.vercel.app/',
      description: 'AI-powered career development platform with resume analysis, interview prep, and personalized career roadmaps.',
      tags: ['AI', 'Career Development', 'React', 'Node.js'],
      screenshot: 'img/career-boost-ai.png'
    },
    {
      title: 'CodeCanvas',
      category: 'AI SaaS Platform',
      featured: true,
      url: 'https://career-pro-ai.vercel.app/',
      description: 'AI-powered platform that visualizes codebases, generates architecture diagrams, and provides intelligent code quality insights.',
      tags: ['Next.js', 'TypeScript', 'AI', 'Developer Tools'],
      screenshot: 'img/code-canvas.png'
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
  { icon: 'ti-robot', name: 'AI Applications', desc: 'Intelligent applications powered by machine learning, NLP, and custom AI models that transform how businesses operate.' },
  { icon: 'ti-device-desktop', name: 'Custom Websites', desc: 'Premium, high-performance websites built with modern frameworks, designed to convert visitors into customers.' },
  { icon: 'ti-crown', name: 'SaaS Platforms', desc: 'Full-stack SaaS products with authentication, billing, dashboards, and scalable cloud architecture.' },
  { icon: 'ti-sparkles', name: 'AI Agents', desc: 'Autonomous AI agents that handle complex workflows, make decisions, and execute tasks independently.' },
  { icon: 'ti-arrows-join', name: 'Automation Systems', desc: 'End-to-end business automation that eliminates repetitive tasks and accelerates operational efficiency.' },
  { icon: 'ti-chart-line', name: 'Business Intelligence', desc: 'Data dashboards and analytics platforms that turn raw data into actionable business insights.' },
  { icon: 'ti-palette', name: 'UI/UX Design', desc: 'User-centered design that transforms complex ideas into intuitive, visually stunning experiences.' },
  { icon: 'ti-settings-cog', name: 'Product Engineering', desc: 'Scalable software architecture from MVP to enterprise-grade systems built for long-term growth.' }
];

var PHILOSOPHY_QUOTES = [
  { text: 'Technology should simplify complexity, not create it.' },
  { text: 'Great products are built where design, engineering, and business meet.' },
  { text: 'The best software feels invisible because it solves the problem effortlessly.' }
];

var BUSINESS_IMPACT = [
  { icon: 'ti-target', name: 'Generate More Leads', desc: 'Websites and landing pages engineered to attract, engage, and convert your ideal customers into qualified leads — turning traffic into revenue.' },
  { icon: 'ti-arrows-diagonal', name: 'Automate Repetitive Tasks', desc: 'AI-powered workflows that handle routine operations — from data entry to customer follow-ups — so your team focuses on high-value work.' },
  { icon: 'ti-chart-bar', name: 'Increase Conversion Rates', desc: 'Strategic UX design, performance optimization, and A/B-tested interfaces that turn more visitors into paying customers.' },
  { icon: 'ti-coins', name: 'Reduce Operational Costs', desc: 'Smart automation and efficient systems that cut overhead without compromising quality or customer experience.' },
  { icon: 'ti-rocket', name: 'Launch Faster', desc: 'AI-accelerated development workflows that compress months of work into days — delivering production-ready products on aggressive timelines.' },
  { icon: 'ti-mood-smile', name: 'Improve Customer Experience', desc: 'Intuitive interfaces, seamless interactions, and intelligent support systems that keep customers coming back and referring others.' }
];

var CLIENT_FEEDBACK = [
  {
    name: 'Rahul Sharma',
    role: 'Restaurant Owner',
    company: 'Spice Garden',
    text: 'Nexora Labs transformed our online presence completely. The process was smooth, professional, and much faster than we expected.',
    initials: 'RS'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Business Consultant',
    company: 'Mitchell Consulting',
    text: 'The attention to detail and speed of delivery were outstanding. The final product exceeded expectations.',
    initials: 'SM'
  },
  {
    name: 'David Cooper',
    role: 'Startup Founder',
    company: 'TechVenture',
    text: 'The team understood our vision immediately and delivered a modern solution that helped us launch faster.',
    initials: 'DC'
  }
];

var WHY_US = [
  { icon: 'ti-rocket', title: 'Launch in Days, Not Months', desc: 'Our AI-accelerated workflow delivers premium products fast.' },
  { icon: 'ti-sparkles', title: 'AI-First Engineering', desc: 'Every product leverages cutting-edge AI tools for superior quality.' },
  { icon: 'ti-user-check', title: 'Founder-Led Development', desc: 'Direct access to the developer building your product. No middlemen.' },
  { icon: 'ti-code', title: 'Modern Tech Stack', desc: 'Built with Next.js, TypeScript, and production-grade infrastructure.' },
  { icon: 'ti-shield-check', title: 'Production Ready', desc: 'Every product is deployed, tested, and optimized for real-world use.' },
  { icon: 'ti-chart-line', title: 'Built to Scale', desc: 'Architecture designed for growth \u2014 from MVP to enterprise.' }
];

var PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'We learn your business, goals, and audience.' },
  { num: '02', title: 'AI Research', desc: 'AI analyzes competitors and optimal patterns.' },
  { num: '03', title: 'Design', desc: 'AI generates stunning design concepts.' },
  { num: '04', title: 'Development', desc: 'Pixel-perfect code with premium animations.' },
  { num: '05', title: 'Launch', desc: 'Deploy, test, and hand over your new site.' }
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
  'RestroBar Management System'
];

var FOUNDER_TIMELINE = [
  { year: '2022', title: 'Started Building', desc: 'Began full-stack development with a focus on modern web technologies.' },
  { year: '2023', title: 'AI Integration', desc: 'Pioneered AI-assisted development workflows for rapid product delivery.' },
  { year: '2024', title: 'Nexora Labs Founded', desc: 'Launched the studio to serve global clients with premium digital products.' },
  { year: '2025', title: 'Scaling Globally', desc: 'Expanding capabilities in AI agents, SaaS, and enterprise automation.' }
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

var mobileMenu = document.getElementById('mobileMenu');
document.getElementById('hamburger').addEventListener('click', function () { mobileMenu.classList.add('open'); });
document.getElementById('mobileClose').addEventListener('click', function () { mobileMenu.classList.remove('open'); });
document.querySelectorAll('.mm-link').forEach(function (a) { a.addEventListener('click', function () { mobileMenu.classList.remove('open'); }); });

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
  /* --- Expertise Cards --- */
  var expertiseGrid = document.getElementById('expertiseGrid');
  if (expertiseGrid) {
    EXPERTISE_CARDS.forEach(function (c, i) {
      var card = document.createElement('div');
      card.className = 'expertise-card reveal reveal-delay-' + ((i % 4) + 1);
      card.innerHTML =
        '<div class="expertise-icon"><i class="ti ' + c.icon + '"></i></div>' +
        '<div class="expertise-name">' + c.name + '</div>' +
        '<div class="expertise-desc">' + c.desc + '</div>';
      expertiseGrid.appendChild(card);
    });
  }

  /* --- Why Us Cards --- */
  var whyusGrid = document.getElementById('whyusGrid');
  if (whyusGrid) {
    WHY_US.forEach(function (w, i) {
      var card = document.createElement('div');
      card.className = 'whyus-card reveal reveal-delay-' + ((i % 4) + 1);
      card.innerHTML =
        '<div class="whyus-icon"><i class="ti ' + w.icon + '"></i></div>' +
        '<div><div class="whyus-title">' + w.title + '</div>' +
        '<div class="whyus-desc">' + w.desc + '</div></div>';
      whyusGrid.appendChild(card);
    });
  }

  /* --- Process Steps --- */
  var timeline = document.getElementById('processTimeline');
  if (timeline) {
    PROCESS_STEPS.forEach(function (s) {
      var step = document.createElement('div');
      step.className = 'process-step';
      step.innerHTML =
        '<div class="process-num">' + s.num + '</div>' +
        '<div class="process-connector"></div>' +
        '<div class="process-title">' + s.title + '</div>' +
        '<div class="process-desc">' + s.desc + '</div>';
      timeline.appendChild(step);
    });
  }

  /* --- Tech Stack --- */
  var techGrid = document.getElementById('techstackGrid');
  if (techGrid) {
    TECH_STACK.forEach(function (t, i) {
      var card = document.createElement('div');
      card.className = 'tech-card reveal reveal-delay-' + ((i % 5) + 1);
      card.innerHTML = '<i class="ti ' + t.icon + '"></i><span>' + t.name + '</span>';
      techGrid.appendChild(card);
    });
  }

  /* --- Business Impact Cards --- */
  var impactGrid = document.getElementById('impactGrid');
  if (impactGrid) {
    BUSINESS_IMPACT.forEach(function (o, i) {
      var card = document.createElement('div');
      card.className = 'impact-card reveal reveal-delay-' + ((i % 4) + 1);
      card.innerHTML =
        '<div class="impact-icon-wrap"><i class="ti ' + o.icon + '"></i></div>' +
        '<div class="impact-name">' + o.name + '</div>' +
        '<div class="impact-desc">' + o.desc + '</div>';
      impactGrid.appendChild(card);
    });
  }

  /* --- Founder Timeline --- */
  var founderTimeline = document.getElementById('founderTimeline');
  if (founderTimeline) {
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
    UPCOMING_PROJECTS.forEach(function (name) {
      var card = document.createElement('div');
      card.className = 'upcoming-card';
      card.innerHTML = '<i class="ti ti-clock"></i><span>' + name + '</span>';
      upcomingGrid.appendChild(card);
    });
  }
})();

/* ================================================================
   CLIENT FEEDBACK
   ================================================================ */
(function () {
  var grid = document.getElementById('feedbackGrid');
  if (!grid) return;

  grid.innerHTML = '';
  CLIENT_FEEDBACK.forEach(function (t, i) {
    var card = document.createElement('div');
    card.className = 'feedback-card reveal reveal-delay-' + ((i % 3) + 1);

    card.innerHTML =
      '<div class="feedback-text">\u201C' + t.text + '\u201D</div>' +
      '<div class="feedback-author">' +
      '<div class="feedback-avatar">' + t.initials + '</div>' +
      '<div>' +
      '<div class="feedback-name">' + t.name + '</div>' +
      '<div class="feedback-role">' + t.role + '</div>' +
      '<div class="feedback-company">' + t.company + '</div>' +
      '</div>' +
      '</div>';

    grid.appendChild(card);
  });
})();

/* ================================================================
   PHILOSOPHY QUOTE CARDS
   ================================================================ */
(function () {
  var grid = document.getElementById('philosophyGrid');
  if (!grid) return;

  grid.innerHTML = '';
  PHILOSOPHY_QUOTES.forEach(function (q, i) {
    var card = document.createElement('div');
    card.className = 'philosophy-card reveal reveal-delay-' + ((i % 3) + 1);
    card.innerHTML =
      '<i class="ti ti-quote philosophy-quote-icon"></i>' +
      '<div class="philosophy-text">\u201C' + q.text + '\u201D</div>';
    grid.appendChild(card);
  });
})();

/* ================================================================
   SERVICE CARD TILT (kept for any remaining service cards)
   ================================================================ */
(function () {
  document.querySelectorAll('.service-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(600px) rotateY(' + (x * 5) + 'deg) rotateX(' + (-y * 5) + 'deg) translateY(-8px)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = ''; });
  });
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
