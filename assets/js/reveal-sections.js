// Functions
function revealSections() {
  var sections = document.getElementsByClassName("content-section");
  var bottomOfScreen = window.pageYOffset + window.innerHeight - 80;

  for (var i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop < bottomOfScreen) {
      sections[i].classList.add("visible");
    }
  }
}

// Events
window.addEventListener("scroll", revealSections);
document.addEventListener("DOMContentLoaded", revealSections);