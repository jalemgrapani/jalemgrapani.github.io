// Back-to-top button (only visible on mobile screens, see style.css)
(function () {
  var button = document.getElementById("scrollTopButton");
  if (button === null) {
    return;
  }

  // Show the button after the visitor scrolls past the hero section
  function toggleButton() {
    if (window.scrollY > 400) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  }

  button.addEventListener("click", function () {
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  });

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
})();