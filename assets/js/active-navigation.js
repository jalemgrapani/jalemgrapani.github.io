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
    if (link.hash === `#${activeId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Events
window.addEventListener("scroll", updateNavigation);
document.addEventListener("DOMContentLoaded", updateNavigation);