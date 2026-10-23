// Data
var watches = [
    { img: "tommy1.png", title: "Tommy Hilfiger 1710701 Men's Ionic Plated Gold Zinc Alloy Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy2.png", title: "Tommy Hilfiger 1710682 Men's Stainless Steel and dark Dial Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy3.png", title: "Tommy Hilfiger 1710702 Men's Ionic Plated Gold Zinc Alloy Watch", oldPrice: 12500, price: 9400 },
    { img: "tommy4.png", title: "Tommy Hilfiger 1710686 Men's Stainless Steel and Green Dial Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy5.png", title: "Tommy Hilfiger 1792192 Men's Two Tone Stainless Steel Watch", oldPrice: 10900, price: 8700 },
    { img: "tommy6.png", title: "Tommy Hilfiger 1710700 Men's Two Tone Zinc Alloy Watch", oldPrice: 14200, price: 11400 }
];

// Variables
var container = document.getElementById("outletCardContainer");
var count = document.getElementById("resultCount");
var sortSelect = document.getElementById("sortSelect");
var buttons = document.querySelectorAll(".filter-button");
var currentFilter = "all";

// Functions
function formatPrice(price) {
    return "₱" + price.toLocaleString("en-US") + ".00";
}

function sortWatches(items) {
    var mode = sortSelect.value;

    if (mode === "low") {
        items.sort((a, b) => a.price - b.price);
    } else if (mode === "high") {
        items.sort((a, b) => b.price - a.price);
    } else {
        items.sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price));
    }
}

function showWatches(filter) {
    var items = [];
    var content = "";

    watches.forEach(watch => {
        if (filter === "under" && watch.price >= 10000) {
            return;
        }

        if (filter === "over" && watch.price < 10000) {
            return;
        }

        items.push(watch);
    });

    sortWatches(items);

    items.forEach(item => {
        var saving = item.oldPrice - item.price;
        var percent = Math.round((saving / item.oldPrice) * 100);

        content += `
            <li class="product row g-0 align-items-center py-3">
                <div class="col-4 col-md-3 p-2">
                    <img src="../assets/img/` + item.img + `" class="product-image img-fluid" alt="` + item.title + `">
                </div>
                <div class="col-8 col-md-5 ps-3 ps-md-4">
                    <h3 class="product-name mb-0">` + item.title + `</h3>
                </div>
                <div class="col-12 col-md-4 mt-3 mt-md-0 d-flex flex-md-column justify-content-between align-items-center align-items-md-end gap-3">
                    <div class="text-md-end">
                        <p class="price-was mb-0">` + formatPrice(item.oldPrice) + `</p>
                        <p class="price-now mb-0">` + formatPrice(item.price) + `</p>
                        <p class="price-saving mb-0">Save ` + formatPrice(saving) + ` (` + percent + `% off)</p>
                    </div>
                    <a href="preview.html" class="details-button">View details</a>
                </div>
            </li>
        `;
    });

    container.innerHTML = content;
    count.textContent = items.length + " of " + watches.length + " watches";
}

// Events
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(otherButton => {
            otherButton.classList.remove("active");
            otherButton.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        currentFilter = button.getAttribute("data-filter");
        showWatches(currentFilter);
    });
});

sortSelect.addEventListener("change", () => {
    showWatches(currentFilter);
});

showWatches("all");