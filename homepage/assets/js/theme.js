// Variables
var pageRoot = document.documentElement;

// Functions
function setTheme(theme) {
  var themeButton = document.getElementById("themeButton");
  var themeIcon = document.getElementById("themeIcon");
  var icon = "bi bi-moon-stars-fill";
  var label = "Switch to dark mode";

  if (theme === "dark") {
    icon = "bi bi-brightness-high-fill";
    label = "Switch to light mode";
  }

  pageRoot.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeIcon.className = icon;
  themeButton.setAttribute("aria-label", label);
  themeButton.setAttribute("title", label);
}

function changeTheme() {
  if (pageRoot.getAttribute("data-theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function startTheme() {
  var savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("dark");
  }

  document.getElementById("themeButton").addEventListener("click", changeTheme);
}

// Events
document.addEventListener("DOMContentLoaded", startTheme);