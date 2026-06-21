import * as THREE from 'three';

(function() {
  const canvas = document.getElementById('globalCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 60 : 200;

  let scene, camera, renderer;
  let crystal, wireframe;
  let particles, particlePositions;
  let scrollProgress = 0;
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let clock;
  let isRendering = true;
  let lastFrameTime = 0;
  const targetFPS = isMobile ? 24 : 45;
  const frameInterval = 1000 / targetFPS;

  function init() {
    clock = new THREE.Clock();
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.065);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'low-power'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));

    createLights();
    createCrystal();
    createParticles();
    setupEvents();
    animate();
  }

  function createLights() {
    scene.add(new THREE.AmbientLight(0x8257ff, 0.3));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);
    const p1 = new THREE.PointLight(0x8257ff, 1.5, 20);
    p1.position.set(-3, 2, 2);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x00d4ff, 1, 20);
    p2.position.set(3, -2, 2);
    scene.add(p2);
  }

  function createCrystal() {
    const crystalX = isMobile ? 0 : 1.0;
    const detail = isMobile ? 1 : 2;

    const geo = new THREE.IcosahedronGeometry(0.85, detail);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x8257ff,
      metalness: 0.3,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    crystal = new THREE.Mesh(geo, mat);
    crystal.position.x = crystalX;
    scene.add(crystal);

    const wireGeo = new THREE.IcosahedronGeometry(0.9, detail);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    wireframe = new THREE.Mesh(wireGeo, wireMat);
    wireframe.position.x = crystalX;
    scene.add(wireframe);
  }

  function createParticles() {
    const geo = new THREE.BufferGeometry();
    particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x8257ff,
      size: 0.02,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });
    particles = new THREE.Points(geo, mat);
    scene.add(particles);
  }

  function setupEvents() {
    window.addEventListener('scroll', function() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = docHeight > 0 ? window.scrollY / docHeight : 0;
    }, { passive: true });

    document.addEventListener('mousemove', function(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('visibilitychange', function() {
      isRendering = !document.hidden;
      if (isRendering) lastFrameTime = 0;
    });
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function smoothstep(min, max, v) {
    const x = Math.max(0, Math.min(1, (v - min) / (max - min)));
    return x * x * (3 - 2 * x);
  }

  function animate(currentTime) {
    requestAnimationFrame(animate);
    if (!isRendering) return;

    const delta = currentTime - lastFrameTime;
    if (delta < frameInterval) return;
    lastFrameTime = currentTime - (delta % frameInterval);

    const t = clock.getElapsedTime();
    const p = scrollProgress;

    targetMouseX += (mouseX - targetMouseX) * 0.03;
    targetMouseY += (mouseY - targetMouseY) * 0.03;

    camera.position.x = lerp(camera.position.x, targetMouseX * 0.2, 0.02);
    camera.position.y = lerp(camera.position.y, -targetMouseY * 0.12, 0.02);
    camera.lookAt(0, 0, 0);

    const heroFade = 1 - smoothstep(0.08, 0.18, p);
    const targetScale = heroFade * 1.0 + (1 - heroFade) * 0.3;
    crystal.scale.setScalar(lerp(crystal.scale.x, targetScale, 0.04));
    wireframe.scale.setScalar(lerp(wireframe.scale.x, targetScale * 1.06, 0.04));

    crystal.material.opacity = lerp(crystal.material.opacity, heroFade * 0.6 + 0.08, 0.04);
    wireframe.material.opacity = lerp(wireframe.material.opacity, heroFade * 0.15 + 0.03, 0.04);

    crystal.rotation.x = t * 0.1 + targetMouseY * 0.2;
    crystal.rotation.y = t * 0.15 + targetMouseX * 0.2;
    wireframe.rotation.x = t * 0.08 + targetMouseY * 0.15;
    wireframe.rotation.y = t * 0.12 + targetMouseX * 0.15;

    const floatY = Math.sin(t * 0.6) * 0.08;
    crystal.position.y = lerp(crystal.position.y, floatY, 0.04);
    wireframe.position.x = crystal.position.x;
    wireframe.position.y = crystal.position.y;

    if (particles) {
      const positions = particles.geometry.attributes.position.array;
      const count = positions.length / 3;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(t * 0.3 + i * 0.1) * 0.0006;
        positions[i * 3] += Math.cos(t * 0.2 + i * 0.15) * 0.0003;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = t * 0.006;
    }

    scene.fog.density = lerp(0.05, 0.08, p);
    renderer.render(scene, camera);
  }

  init();
})();
