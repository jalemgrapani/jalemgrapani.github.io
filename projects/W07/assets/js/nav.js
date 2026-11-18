// Variables
const navMenu = document.getElementById("navbarNav");
const navToggler = document.querySelector(".navbar-toggler");

// Functions
function closeMenu() {
    if (navMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false }).hide();
    }
}

// Events
document.addEventListener("click", (event) => {
    const isInside = navMenu.contains(event.target) || navToggler.contains(event.target);

    if (!isInside) {
        closeMenu();
    }
});

navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});