// Variables
const pageRoot = document.documentElement;
const themeButtons = document.querySelectorAll("[data-theme-toggle]");

// Tell the CSS that JavaScript is working
pageRoot.classList.add("js");

// Functions
function setTheme(theme) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  pageRoot.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  themeButtons.forEach((button) => {
    const icon = button.querySelector("[data-theme-icon]");

    // The switch reports its state, the round button describes its action
    if (button.getAttribute("role") === "switch") {
      button.setAttribute("aria-checked", isDark);
    } else {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    }

    if (icon) {
      icon.className = isDark
        ? "bi bi-brightness-high-fill"
        : "bi bi-moon-stars-fill";
    }
  });
}

// Events
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(pageRoot.dataset.theme === "dark" ? "light" : "dark");
  });
});

setTheme(localStorage.getItem("portfolio-theme") || "dark");