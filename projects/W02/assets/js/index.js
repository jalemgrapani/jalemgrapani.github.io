// Variables
var navbar = document.getElementById("navbar");
var menu = document.getElementById("navbarNav");
var footerYear = document.getElementById("footerYear");
var progressBar = document.getElementById("progressBar");
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var navSections = [];

// Functions
function setActiveLink() {
    var position = window.scrollY + 120;
    var current = -1;

    navSections.forEach(function(section, index) {
        if (section.offsetTop <= position) {
            current = index;
        }
    });

    navLinks.forEach(function(link, index) {
        if (index === current) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
}

function checkScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

function updateProgress() {
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    var percent = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;

    progressBar.style.width = percent + "%";
}

function updatePage() {
    setActiveLink();
    checkScroll();
    updateProgress();
}

// Setup
footerYear.textContent = new Date().getFullYear();

navLinks.forEach(function(link) {
    var target = document.querySelector(link.getAttribute("href"));

    if (target) {
        navSections.push(target);
    }
});

// Events
window.addEventListener("scroll", updatePage);
window.addEventListener("resize", updatePage);

menu.addEventListener("show.bs.collapse", function() {
    navbar.classList.add("open");
});

menu.addEventListener("hidden.bs.collapse", function() {
    navbar.classList.remove("open");
});

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

// Start
updatePage();