// Variables
const pageRoot = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

// Tell the CSS that JavaScript is working
pageRoot.classList.add("js");

// Functions
function setTheme(theme) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  pageRoot.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeIcon.className = isDark
    ? "bi bi-brightness-high-fill"
    : "bi bi-moon-stars-fill";
  themeButton.setAttribute("aria-label", label);
  themeButton.setAttribute("title", label);
}

// Events
themeButton.addEventListener("click", () => {
  setTheme(pageRoot.dataset.theme === "dark" ? "light" : "dark");
});

setTheme(localStorage.getItem("portfolio-theme") || "dark");