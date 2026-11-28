// Variables
const header = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const menuIcon = menuButton.querySelector("i");
const siteNav = document.getElementById("siteNav");

// Functions
function openMenu() {
  siteNav.classList.remove("d-none");
  siteNav.classList.add("d-flex");
  menuButton.setAttribute("aria-expanded", "true");
  menuIcon.className = "bi bi-x-lg fs-6";
}

function closeMenu() {
  siteNav.classList.remove("d-flex");
  siteNav.classList.add("d-none");
  menuButton.setAttribute("aria-expanded", "false");
  menuIcon.className = "bi bi-list fs-6";
}

// Events
menuButton.addEventListener("click", () => {
  if (siteNav.classList.contains("d-flex")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu
document.addEventListener("click", (event) => {
  const clickedInsideHeader = header.contains(event.target);
  const clickedLink = event.target.closest("#siteNav a");

  if (!clickedInsideHeader || clickedLink) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});