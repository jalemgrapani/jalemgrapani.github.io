// Variables
var navbar = document.getElementById("navbar");
var menu = document.getElementById("navbarNav");
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var navSections = [];
var footerYear = document.getElementById("footerYear");
var selectedColor = document.getElementById("selectedColor");
var colorImage = document.getElementById("colorImage");
var swatches = document.querySelectorAll(".swatch");

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

function selectColor(swatch) {
    swatches.forEach(function(item) {
        var isSelected = item === swatch;

        item.classList.toggle("selected", isSelected);
        item.setAttribute("aria-pressed", isSelected);
    });

    colorImage.src = swatch.dataset.image;
    colorImage.alt = "Realme C33 in " + swatch.dataset.name;
    selectedColor.innerHTML = "You picked <strong>" + swatch.dataset.name + "</strong>. Select another color to compare.";
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
window.addEventListener("scroll", function() {
    setActiveLink();
    checkScroll();
});

window.addEventListener("resize", setActiveLink);

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

swatches.forEach(function(swatch) {
    swatch.addEventListener("click", function() {
        selectColor(swatch);
    });
});

// Start
setActiveLink();
checkScroll();