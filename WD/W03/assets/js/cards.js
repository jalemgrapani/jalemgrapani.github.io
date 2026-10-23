// Data
var dishes = [
    { name: "Adobong Baboy", img: "adobongBaboy.jpg", type: "Pork" },
    { name: "Arroz Caldo", img: "arrozCaldo.jpg", type: "Chicken" },
    { name: "Bicol Express", img: "bicolExpress.jpg", type: "Pork" },
    { name: "Kaldereta", img: "kaldereta.jpg", type: "Beef" },
    { name: "Kare-Kare", img: "karekare.jpg", type: "Beef" },
    { name: "Lechon Kawali", img: "lechonKawali.jpg", type: "Pork" },
    { name: "Lumpia", img: "lumpia.jpg", type: "Pork" },
    { name: "Pinakbet", img: "pinakbet.jpg", type: "Vegetable" },
    { name: "Sinigang na Baboy", img: "sinigang.jpg", type: "Pork" },
    { name: "Sisig", img: "sisig.jpg", type: "Pork" },
    { name: "Tinolang Manok", img: "tinola.jpg", type: "Chicken" },
    { name: "Sinigang na Hipon", img: "sinigang2.jpg", type: "Seafood" },
    { name: "Laing", img: "laing.jpg", type: "Vegetable" },
    { name: "Ginataang Alimango", img: "ginataangAlimango.jpg", type: "Seafood" },
    { name: "Lechon Paksiw", img: "lechongPaksiw.jpg", type: "Pork" },
    { name: "Beef Bulalo", img: "beefBulalo.jpg", type: "Beef" }
];

// Variables
var cardContainer = document.getElementById("cardContainer");
var filters = document.getElementById("filters");
var dishModal = new bootstrap.Modal(document.getElementById("dishModal"));
var modalImg = document.getElementById("dishModalImg");
var modalTitle = document.getElementById("dishModalTitle");

// Functions
function countDishes(type) {
    if (type === "All") {
        return dishes.length;
    }

    return dishes.filter(function(dish) {
        return dish.type === type;
    }).length;
}

function showFilters() {
    var types = ["All"];
    var content = "";

    dishes.forEach(function(dish) {
        if (types.indexOf(dish.type) === -1) {
            types.push(dish.type);
        }
    });

    types.forEach(function(type) {
        var pressed = type === "All" ? "true" : "false";
        var total = countDishes(type);
        var label = total === 1 ? " dish" : " dishes";

        content += `
            <button type="button" class="filter-tab" data-type="${type}" aria-pressed="${pressed}" aria-label="${type}, ${total + label}">
                <span class="filter-name">${type}</span>
                <span class="count">${total}</span>
            </button>
        `;
    });

    filters.innerHTML = content;
}

function showDishes(type) {
    var content = "";

    dishes.forEach(function(dish) {
        if (type !== "All" && dish.type !== type) {
            return;
        }

        content += `
            <li>
                <button type="button" class="dish" data-img="${dish.img}" data-name="${dish.name}">
                    <span class="dish-photo">
                        <img src="assets/img/${dish.img}" alt="${dish.name}" loading="lazy">
                    </span>
                    <span class="dish-name">${dish.name}</span>
                    <span class="dish-type">${dish.type}</span>
                </button>
            </li>
        `;
    });

    cardContainer.innerHTML = content;
}

function showModal() {
    dishModal.show();
}

// Events
filters.addEventListener("click", function(event) {
    var tab = event.target.closest(".filter-tab");
    var tabs = filters.querySelectorAll(".filter-tab");

    if (!tab) {
        return;
    }

    tabs.forEach(function(otherTab) {
        otherTab.setAttribute("aria-pressed", otherTab === tab ? "true" : "false");
    });

    showDishes(tab.dataset.type);
});

cardContainer.addEventListener("click", function(event) {
    var tile = event.target.closest(".dish");

    if (!tile) {
        return;
    }

    modalTitle.textContent = tile.dataset.name;
    modalImg.alt = tile.dataset.name;

    // Show the modal after the image loads
    modalImg.removeAttribute("src");
    modalImg.onload = showModal;
    modalImg.onerror = showModal;
    modalImg.src = "assets/img/" + tile.dataset.img;
});

// Start
showFilters();
showDishes("All");