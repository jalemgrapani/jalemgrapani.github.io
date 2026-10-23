// Variables
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var navLinks = document.querySelectorAll(".navbar .nav-link");
var navSections = [];
var backToTop = document.getElementById("backToTop");

// Functions
function setActiveLink() {
  var position = window.scrollY + 120;
  var current = 0;

  for (var i = 0; i < navSections.length; i++) {
    if (navSections[i].offsetTop <= position) {
      current = i;
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    if (j === current) {
      navLinks[j].classList.add("active");
    } else {
      navLinks[j].classList.remove("active");
    }
  }
}

function checkScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

function closeMenu() {
  if (menu.classList.contains("show")) {
    bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePage() {
  setActiveLink();
  checkScroll();
}

// Events
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", closeMenu);
}

window.addEventListener("scroll", updatePage);
window.addEventListener("resize", setActiveLink);
backToTop.addEventListener("click", scrollToTop);

// Start
for (var j = 0; j < navLinks.length; j++) {
  navSections.push(document.querySelector(navLinks[j].getAttribute("href")));
}

updatePage();
