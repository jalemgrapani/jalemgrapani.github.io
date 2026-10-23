// Highlight the nav link of the section you are currently viewing
function updateNavigation() {
  var sections = document.getElementsByClassName("content-section");
  var links = document.querySelectorAll(".site-navigation a");
  var scrollPosition = window.pageYOffset + 180;
  var activeId = "";

  // Find the last section that has already reached the top
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop <= scrollPosition) {
      activeId = sections[i].id;
    }
  }

  // Add "active" to the matching link, remove it from the others
  for (var j = 0; j < links.length; j++) {
    if (links[j].getAttribute("href") === "#" + activeId) {
      links[j].classList.add("active");
    } else {
      links[j].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", updateNavigation);
document.addEventListener("DOMContentLoaded", updateNavigation);