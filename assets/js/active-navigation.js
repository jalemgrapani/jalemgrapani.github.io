// Functions
function updateNavigation() {
  const sections = document.querySelectorAll(".content-section");
  const links = document.querySelectorAll(".site-navigation a");
  const scrollPosition = window.scrollY + 180;
  let activeId = "";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeId = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

// Events
window.addEventListener("scroll", updateNavigation);
document.addEventListener("DOMContentLoaded", updateNavigation);