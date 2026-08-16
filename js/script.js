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
  const typedEl = document.getElementById('typedRole');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let typingTimeout = null;

  function startTyping(lang) {
    if (!typedEl) return;

    // Toma los roles del idioma activo (con fallback por si translations.js no cargó)
    const roles = (typeof translations !== "undefined" && translations[lang] && translations[lang].roles)
      ? translations[lang].roles
      : ['Desarrollador Full Stack'];

    clearTimeout(typingTimeout);

    if (reduceMotion) {
      typedEl.textContent = roles[0];
      return;
    }

    let roleIndex = 0, charIndex = 0, deleting = false;
    typedEl.textContent = "";

    function tick(){
      const current = roles[roleIndex];
      if (!deleting){
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length){ deleting = true; typingTimeout = setTimeout(tick, 1400); return; }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
      }
      typingTimeout = setTimeout(tick, deleting ? 30 : 55);
    }
    tick();
  }

  // Arranca con el idioma ya aplicado por language.js (o "es" por defecto)
  startTyping(document.documentElement.lang || 'es');

  // Reinicia el efecto cada vez que el usuario cambia de idioma
  document.addEventListener("languagechange", (e) => startTyping(e.detail.lang));

  //Navbar visible e invisible

  const navbar = document.querySelector('.navbar');
  const prehero = document.querySelector('.prehero');

    if (!prehero) {
        // Páginas sin video (about.html, etc.) -> navbar visible siempre
        navbar.classList.add('visible');
    } else {
        const observer = new IntersectionObserver(
          ([entry]) => {
              navbar.classList.toggle('visible', !entry.isIntersecting);
          },
          { threshold: 0, rootMargin: '-80% 0px 0px 0px' }
      );
          observer.observe(prehero);
    }

    // Estado "compacto" opcional al seguir bajando
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

});