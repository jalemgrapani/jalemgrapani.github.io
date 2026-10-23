// Functions
function updateNavigation() {
  var sections = document.getElementsByClassName("content-section");
  var links = document.querySelectorAll(".site-navigation a");
  var scrollPosition = window.pageYOffset + 180;
  var activeId = "";

  for (var i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop <= scrollPosition) {
      activeId = sections[i].id;
    }
  }

  for (var j = 0; j < links.length; j++) {
    if (links[j].getAttribute("href") === "#" + activeId) {
      links[j].classList.add("active");
    } else {
      links[j].classList.remove("active");
    }
  }
}

// Events
window.addEventListener("scroll", updateNavigation);
document.addEventListener("DOMContentLoaded", updateNavigation);