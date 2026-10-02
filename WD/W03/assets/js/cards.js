// One list of dishes instead of two parallel arrays that had to stay in sync
const dishes = [
  { name: "Adobong Baboy", img: "adobongBaboy.jpg" },
  { name: "Arroz Caldo", img: "arrozCaldo.jpg" },
  { name: "Bicol Express", img: "bicolExpress.jpg" },
  { name: "Kaldereta", img: "kaldereta.jpg" },
  { name: "Kare-kare", img: "karekare.jpg" },
  { name: "Lechong Kawali", img: "lechonKawali.jpg" },
  { name: "Lumpia", img: "lumpia.jpg" },
  { name: "Pinakbet", img: "pinakbet.jpg" },
  { name: "Sinigang na Baboy", img: "sinigang.jpg" },
  { name: "Sisig", img: "sisig.jpg" },
  { name: "Tinolang Manok", img: "tinola.jpg" },
  { name: "Sinigang na Hipon", img: "sinigang2.jpg" },
  { name: "Laing", img: "laing.jpg" },
  { name: "Ginataang Alimango", img: "ginataangAlimango.jpg" },
  { name: "Lechong Paksiw", img: "lechongPaksiw.jpg" },
  { name: "Beef Bulalo", img: "beefBulalo.jpg" },
];

// Build one card's markup
function dishCard(dish) {
  return `
    <div class="col-xl-3 col-md-4 col-sm-6 col-12">
      <div class="card dish-card h-100 border-0 shadow-sm overflow-hidden">
        <img src="assets/img/${dish.img}" class="card-img-top" alt="${dish.name}" loading="lazy">
        <div class="card-body">
          <h5 class="card-title text-center mb-0">${dish.name}</h5>
        </div>
      </div>
    </div>`;
}

// Render all cards in one go
const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = dishes.map(dishCard).join("");

// Show or hide the social icons
const socialLinks = document.getElementById("socialLinks");
const btnExpand = document.getElementById("btnExpand");

function expandContent() {
  const isHidden = socialLinks.classList.toggle("d-none");
  btnExpand.textContent = isHidden ? "Follow us" : "Close";
}

// Light / dark mode
const body = document.getElementById("body");
const btnColor = document.getElementById("btnColor");
const themeIcon = document.getElementById("themeIcon");

function setColorMode(mode) {
  body.setAttribute("data-bs-theme", mode);

  const isDark = mode === "dark";
  themeIcon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  btnColor.title = isDark ? "Switch to light mode" : "Switch to dark mode";

  try {
    localStorage.setItem("colorMode", mode);
  } catch (e) {
    // Storage can be unavailable (private browsing, etc.) - not critical
  }
}

function changeColorMode() {
  const current = body.getAttribute("data-bs-theme");
  setColorMode(current === "light" ? "dark" : "light");
}

// Start with the saved choice, or the device setting
let savedMode = null;
try {
  savedMode = localStorage.getItem("colorMode");
} catch (e) {
  // Storage can be unavailable - fall back to device preference below
}

if (savedMode) {
  setColorMode(savedMode);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setColorMode("dark");
}

// Close the mobile menu after clicking a link
const menu = document.getElementById("navbarNavDropdown");
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("show"));
});