document.addEventListener("DOMContentLoaded", () => {


// Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

 
  // Typed role rotator
  const roles = ['Desarrollador Full Stack', 'Diseño · Solucion · Evolucion', 'De la idea al deploy'];
  const typedEl = document.getElementById('typedRole');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    let roleIndex = 0, charIndex = 0, deleting = false;
    function tick(){
      const current = roles[roleIndex];
      if (!deleting){
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length){ deleting = true; setTimeout(tick, 1400); return; }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 30 : 55);
    }
    tick();
  }

  });