// Variables
const navigationSections = document.querySelectorAll(".content-section");
const navigationLinks = document.querySelectorAll(".site-navigation a");

// Functions
function updateNavigation() {
  const scrollPosition = window.scrollY + 180;
  let activeId = "";

  navigationSections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeId = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

// Events
window.addEventListener("scroll", updateNavigation);
document.addEventListener("DOMContentLoaded", updateNavigation);