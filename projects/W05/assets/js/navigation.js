// Variables
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var footerYear = document.getElementById("footerYear");

// Functions
function setActive(id) {
    navLinks.forEach(function(link) {
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
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            setActive(entry.target.id);
        }
    });
}, { rootMargin: "-80px 0px -60% 0px" });

navLinks.forEach(function(link) {
    var section = document.querySelector(link.getAttribute("href"));

    if (section) {
        observer.observe(section);
    }

    link.addEventListener("click", function() {
        setActive(link.getAttribute("href").slice(1));
    });
});

// Start
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}