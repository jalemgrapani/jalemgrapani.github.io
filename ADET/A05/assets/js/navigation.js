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

    navSections.forEach(function(section, index) {
        if (section.offsetTop <= position) {
            current = index;
        }
    });

    navLinks.forEach(function(link, index) {
        link.classList.toggle("active", index === current);
    });
}

function checkScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    backToTop.classList.toggle("show", window.scrollY > 400);
}

// Setup
navLinks.forEach(function(link) {
    navSections.push(document.querySelector(link.getAttribute("href")));
});

// Events
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

window.addEventListener("scroll", function() {
    setActiveLink();
    checkScroll();
});

window.addEventListener("resize", setActiveLink);

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Start
setActiveLink();
checkScroll();