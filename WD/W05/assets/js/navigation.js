// Variables
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var footerYear = document.getElementById("footerYear");

// Functions
function setActive(id) {
    navLinks.forEach(link => {
        var isCurrent = link.getAttribute("href") === "#" + id;

        link.classList.toggle("active", isCurrent);

        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

// Events
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActive(entry.target.id);
        }
    });
}, { rootMargin: "-80px 0px -60% 0px" });

navLinks.forEach(link => {
    var section = document.querySelector(link.getAttribute("href"));

    if (section) {
        observer.observe(section);
    }

    link.addEventListener("click", () => {
        setActive(link.getAttribute("href").slice(1));
    });
});

// Start
footerYear.textContent = new Date().getFullYear();