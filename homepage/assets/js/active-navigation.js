var navSections = document.querySelectorAll(".content-section");
var navLinks = document.querySelectorAll(".site-navigation a");

function updateNavigation() {
  var activeId = "";

  for (var i = 0; i < navSections.length; i++) {
    if (navSections[i].getBoundingClientRect().top <= 180) {
      activeId = navSections[i].id;
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    if (navLinks[j].getAttribute("href") === "#" + activeId) {
      navLinks[j].classList.add("active");
    } else {
      navLinks[j].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", updateNavigation);
updateNavigation();