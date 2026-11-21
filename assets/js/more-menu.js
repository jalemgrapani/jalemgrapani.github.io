// Variables
const sidebar = document.querySelector(".site-sidebar");
const moreButton = document.getElementById("moreButton");
const moreMenu = document.getElementById("moreMenu");

// Functions
function setMenuOpen(isOpen) {
  sidebar.classList.toggle("more-open", isOpen);
  moreButton.setAttribute("aria-expanded", isOpen);
  moreButton.setAttribute("aria-label", isOpen ? "Close menu" : "More");
}

// Events
moreButton.addEventListener("click", () => {
  setMenuOpen(!sidebar.classList.contains("more-open"));
});

moreMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.matchMedia("(min-width: 576px)").addEventListener("change", (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});