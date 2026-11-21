// Functions
function revealSections() {
  const sections = document.querySelectorAll(".content-section");
  const bottomOfScreen = window.scrollY + window.innerHeight - 80;

  sections.forEach((section) => {
    if (section.offsetTop < bottomOfScreen) {
      section.classList.add("visible");
    }
  });
}

// Events
window.addEventListener("scroll", revealSections);
document.addEventListener("DOMContentLoaded", revealSections);