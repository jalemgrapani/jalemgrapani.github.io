// Variables
const root = document.documentElement;
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

// Functions
function setTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  // Update icon
  if (theme === "dark") {
    themeIcon.className = "bi bi-brightness-high-fill";
  } else {
    themeIcon.className = "bi bi-moon-stars-fill";
  }

  themeButtons.forEach((button) => {
    button.setAttribute("aria-checked", theme === "dark");
  });
}

function toggleTheme() {
  if (root.getAttribute("data-bs-theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

// Events
themeButtons.forEach((button) => {
  button.addEventListener("click", toggleTheme);
});

setTheme(localStorage.getItem("portfolio-theme") || "dark");