(function () {
    var hero = document.getElementById('hero');
    if (!hero) return;
    var revealLayer = document.querySelector('.hero-reveal-layer');
    if (!revealLayer) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var isMobile = window.innerWidth <= 768 || coarsePointer;

    var SPOTLIGHT_R = isMobile ? 180 : 260;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:none;';
    hero.appendChild(canvas);

    var ctx = canvas.getContext && canvas.getContext('2d');
    if (!ctx) return;

    var rafId = 0;
    var running = true;
    var reduceToStaticFrame = false;

    var mouse = { x: -999, y: -999 };
    var smooth = { x: -999, y: -999 };

    function setCanvasSize() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }

    function buildMask(cx, cy) {
        var w = canvas.width;
        var h = canvas.height;
        if (w <= 0 || h <= 0) return;

        ctx.clearRect(0, 0, w, h);

        var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, SPOTLIGHT_R);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.4, 'rgba(255,255,255,1)');
        grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
        grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
        grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    function applyMask() {
        var dataUrl = canvas.toDataURL();
        revealLayer.style.maskImage = 'url(' + dataUrl + ')';
        revealLayer.style.webkitMaskImage = 'url(' + dataUrl + ')';
        revealLayer.style.maskSize = '100% 100%';
        revealLayer.style.webkitMaskSize = '100% 100%';
    }

    function tick() {
        if (!running || reduceToStaticFrame) return;

        var lerpK = reduceMotion ? 1 : isMobile ? 0.06 : 0.1;
        smooth.x += (mouse.x - smooth.x) * lerpK;
        smooth.y += (mouse.y - smooth.y) * lerpK;

        buildMask(smooth.x, smooth.y);
        applyMask();

        rafId = requestAnimationFrame(tick);
    }

    function onMove(e) {
        if (reduceMotion || !e || typeof e.clientX !== 'number') return;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function onTouchMove(e) {
        if (!e || !e.touches || !e.touches.length) return;
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }

    function centerSpotlight() {
        mouse.x = window.innerWidth / 2;
        mouse.y = window.innerHeight * 0.35;
    }

    function initEvents() {
        if (reduceMotion) {
            centerSpotlight();
            return;
        }

        hero.addEventListener('mousemove', onMove, { passive: true });
        hero.addEventListener('mouseleave', centerSpotlight, { passive: true });
        hero.addEventListener('touchmove', onTouchMove, { passive: true });
        hero.addEventListener('touchend', centerSpotlight, { passive: true });
    }

    function initOffscreenPause() {
        var obs = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            if (!entry) return;

            running = entry.isIntersecting;

            if (!running) {
                reduceToStaticFrame = true;
                cancelAnimationFrame(rafId);
            } else {
                reduceToStaticFrame = false;
                smooth.x = mouse.x;
                smooth.y = mouse.y;
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(tick);
            }
        }, { threshold: 0.15 });
        obs.observe(hero);
    }

    function init() {
        setCanvasSize();
        centerSpotlight();
        smooth.x = mouse.x;
        smooth.y = mouse.y;

        buildMask(smooth.x, smooth.y);
        applyMask();

        initEvents();
        initOffscreenPause();

        reduceToStaticFrame = false;
        rafId = requestAnimationFrame(tick);
    }

    var resizeRaf = 0;
    window.addEventListener('resize', function () {
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(function () {
            setCanvasSize();
            if (reduceMotion) {
                centerSpotlight();
                smooth.x = mouse.x;
                smooth.y = mouse.y;
                buildMask(smooth.x, smooth.y);
                applyMask();
            }
        });
    }, { passive: true });

    init();
})();
