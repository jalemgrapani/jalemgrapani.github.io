// Variables
const header = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const menuIcon = menuButton.querySelector("i");
const siteNav = document.getElementById("siteNav");

// Functions
function setMenuOpen(isOpen) {
  header.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuIcon.className = isOpen ? "bi bi-x-lg" : "bi bi-list";
}

// Events
menuButton.addEventListener("click", () => {
  setMenuOpen(!header.classList.contains("menu-open"));
});

siteNav.addEventListener("click", (event) => {
  // Links close the menu, the dark mode button keeps it open
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.matchMedia("(min-width: 992px)").addEventListener("change", (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});