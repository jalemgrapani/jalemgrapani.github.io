// Variables
var navbar = document.getElementById("navbar");
var footerYear = document.getElementById("footerYear");
var body = document.getElementById("body");
var themeButton = document.getElementById("btnColor");
var themeIcon = document.getElementById("themeIcon");
var socialButton = document.getElementById("btnExpand");
var socialLinks = document.getElementById("socialLinks");
var menu = document.getElementById("navbarNavDropdown");
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var navSections = [];
var lockTime = 0;
var savedMode = localStorage.getItem("colorMode");

// Functions
function setColorMode(mode) {
    body.setAttribute("data-bs-theme", mode);

    if (mode === "dark") {
        themeIcon.className = "bi bi-sun-fill";
        themeButton.title = "Switch to light mode";
    } else {
        themeIcon.className = "bi bi-moon-stars-fill";
        themeButton.title = "Switch to dark mode";
    }

    localStorage.setItem("colorMode", mode);
}

function checkScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

function toggleSocial() {
    var isHidden = socialLinks.classList.toggle("d-none");

    if (isHidden) {
        socialButton.textContent = "Follow Us";
        socialButton.setAttribute("aria-expanded", "false");
    } else {
        socialButton.textContent = "Close";
        socialButton.setAttribute("aria-expanded", "true");
    }
}

function showActiveLink(current) {
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

function setActiveLink() {
    var current = 0;
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (Date.now() < lockTime) {
        return;
    }

    navSections.forEach(function(section, index) {
        if (section.getBoundingClientRect().top <= 120) {
            current = index;
        }
    });

    if (atBottom) {
        current = navSections.length - 1;
    }

    showActiveLink(current);
}

function updatePage() {
    setActiveLink();
    checkScroll();
}

// Setup
footerYear.textContent = new Date().getFullYear();

navLinks.forEach(function(link) {
    navSections.push(document.querySelector(link.getAttribute("href")));
});

if (savedMode) {
    setColorMode(savedMode);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setColorMode("dark");
}

// Events
themeButton.addEventListener("click", function() {
    if (body.getAttribute("data-bs-theme") === "light") {
        setColorMode("dark");
    } else {
        setColorMode("light");
    }
});

socialButton.addEventListener("click", toggleSocial);

menu.addEventListener("show.bs.collapse", function() {
    navbar.classList.add("open");
});

menu.addEventListener("hidden.bs.collapse", function() {
    navbar.classList.remove("open");
});

navLinks.forEach(function(link, index) {
    link.addEventListener("click", function() {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }

        lockTime = Date.now() + 800;
        showActiveLink(index);
        setTimeout(updatePage, 850);
    });
});

window.addEventListener("scroll", updatePage);
window.addEventListener("resize", updatePage);

// Start
updatePage();