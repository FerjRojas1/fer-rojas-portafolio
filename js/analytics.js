function trackEvent(eventName, parameters = {}) {
    if (typeof gtag === "function") {
        gtag("event", eventName, parameters);
    }
}

/* Registro de eventos */

document.querySelectorAll("[data-event]").forEach(element => {

    element.addEventListener("click", () => {

        trackEvent(element.dataset.event, {

            page: window.location.pathname,
            section: element.dataset.section || "",
            language: localStorage.getItem("language") || "es"

        });

    });

});