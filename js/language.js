// language.js
// Motor del sistema de traducción. Recorre elementos [data-i18n*] y aplica
// los textos correspondientes desde translations.js según el idioma activo.

document.addEventListener("DOMContentLoaded", () => {
  const SUPPORTED_LANGS = ["es", "en"];
  const STORAGE_KEY = "preferredLang";

  function detectDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) return saved;

    const browserLang = (navigator.language || "es").slice(0, 2);
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

    return "es";
  }

  function applyTranslations(lang) {
    const dict = translations[lang];
    // Cambia el título de la pestaña
    const page = document.body.dataset.page;

    if (page === "home") {
        document.title = dict.pageTitleHome;
    }

    if (page === "about") {
        document.title = dict.pageTitleAbout;
    }
    if (!dict) return;

    // Texto plano
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Texto con HTML embebido
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Atributos traducibles
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.dataset.i18nAlt;
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
      const key = el.dataset.i18nAriaLabel;
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.dataset.i18nTitle;
      if (dict[key] !== undefined) el.setAttribute("title", dict[key]);
    });

    // Idioma del documento (accesibilidad + SEO)
    document.documentElement.lang = lang;

    // Persistencia
    localStorage.setItem(STORAGE_KEY, lang);

    // Estado visual del switcher
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Revela el body (evita el "flash" de contenido sin traducir)
    document.body.classList.add("i18n-ready");

    // Avisa a otros scripts que el idioma cambió
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  // Listeners de los botones ES / EN
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (SUPPORTED_LANGS.includes(lang)) applyTranslations(lang);
    });
  });

  applyTranslations(detectDefaultLang());
});