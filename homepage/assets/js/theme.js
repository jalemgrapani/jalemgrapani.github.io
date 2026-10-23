var pageRoot = document.documentElement;

function setTheme(theme) {
  var themeButton = document.getElementById("themeButton");
  var themeIcon = document.getElementById("themeIcon");

  pageRoot.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  if (theme === "dark") {
    themeIcon.className = "bi bi-brightness-high-fill";
    themeButton.setAttribute("aria-label", "Switch to light mode");
    themeButton.setAttribute("title", "Switch to light mode");
  } else {
    themeIcon.className = "bi bi-moon-stars-fill";
    themeButton.setAttribute("aria-label", "Switch to dark mode");
    themeButton.setAttribute("title", "Switch to dark mode");
  }
}

function changeTheme() {
  var currentTheme = pageRoot.getAttribute("data-theme");

  if (currentTheme === "dark") {
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

document.addEventListener("DOMContentLoaded", startTheme);