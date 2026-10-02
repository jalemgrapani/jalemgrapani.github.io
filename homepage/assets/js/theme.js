var pageRoot = document.documentElement;

function setTheme(theme) {
    pageRoot.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    if (theme === "dark") {
        document.getElementById("themeIcon").className = "bi bi-moon-stars-fill";
        document.getElementById("themeText").textContent = "Light mode";
    } else {
        document.getElementById("themeIcon").className = "bi bi-brightness-high-fill";
        document.getElementById("themeText").textContent = "Dark mode";
    }
}

function changeTheme() {
    var currentTheme = pageRoot.getAttribute("data-theme");

    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

var savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme("light");
}

document.getElementById("themeButton").addEventListener("click", changeTheme);

