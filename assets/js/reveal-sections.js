// Variables
const contentSections = document.querySelectorAll(".content-section");

// Enable reveal
document.documentElement.classList.add("js");

// Functions
function revealSections() {
  const bottomOfScreen = window.scrollY + window.innerHeight - 80;

  contentSections.forEach((section) => {
    if (section.offsetTop < bottomOfScreen) {
      section.classList.add("visible");
    }
  });
}

// Events
window.addEventListener("scroll", revealSections);
document.addEventListener("DOMContentLoaded", revealSections);