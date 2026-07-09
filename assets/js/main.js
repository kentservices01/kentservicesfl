/* Kent Services - site interactions. Small, dependency-free, resilient. */
(function () {
  "use strict";

  /* Entrance animations are handled purely in CSS (see .reveal in styles.css),
     so content is always visible and can never get stuck hidden. */

  /* ---- Mobile nav toggle ---- */
  try {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", links.classList.contains("open") ? "true" : "false");
      });
    }
  } catch (e) {}

  /* ---- FAQ accordions ---- */
  try {
    var items = document.querySelectorAll(".faq-item");
    for (var i = 0; i < items.length; i++) {
      (function (item) {
        var q = item.querySelector(".faq-q");
        var a = item.querySelector(".faq-a");
        if (!q || !a) return;
        q.addEventListener("click", function () {
          var isOpen = item.classList.contains("open");
          item.classList.toggle("open");
          q.setAttribute("aria-expanded", isOpen ? "false" : "true");
          a.style.maxHeight = isOpen ? null : a.scrollHeight + "px";
        });
      })(items[i]);
    }
  } catch (e) {}

  /* ---- Current year in footer ---- */
  try {
    var years = document.querySelectorAll(".js-year");
    for (var j = 0; j < years.length; j++) {
      years[j].textContent = new Date().getFullYear();
    }
  } catch (e) {}
})();
