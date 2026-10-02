var watches = [
    { img: "tommy1.png", title: "Tommy Hilfiger 1710701 Men's Ionic Plated Gold Zinc Alloy Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy2.png", title: "Tommy Hilfiger 1710682 Men's Stainless Steel and dark Dial Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy3.png", title: "Tommy Hilfiger 1710702 Men's Ionic Plated Gold Zinc Alloy Watch", oldPrice: 12500, price: 9400 },
    { img: "tommy4.png", title: "Tommy Hilfiger 1710686 Men's Stainless Steel and Green Dial Watch", oldPrice: 14200, price: 11400 },
    { img: "tommy5.png", title: "Tommy Hilfiger 1792192 Men's Two Tone Stainless Steel Watch", oldPrice: 10900, price: 8700 },
    { img: "tommy6.png", title: "Tommy Hilfiger 1710700 Men's Two Tone Zinc Alloy Watch", oldPrice: 14200, price: 11400 }
];

var container = document.getElementById("outletCardContainer");
var count = document.getElementById("resultCount");
var buttons = document.querySelectorAll(".filter-button");

function formatPrice(n) {
    return "₱" + n.toLocaleString("en-US") + ".00";
}

function showWatches(filter) {
    var html = "";
    var shown = 0;

    for (var i = 0; i < watches.length; i++) {
        var w = watches[i];

        if (filter === "under" && w.price >= 10000) continue;
        if (filter === "over" && w.price < 10000) continue;

        var off = Math.round((1 - w.price / w.oldPrice) * 100);
        shown++;

        html += `<div class="col-xl-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div class="cardBrand rounded-5 d-flex flex-column align-items-center my-2" style="height: auto; max-width: 300px; overflow: hidden;">
                <span class="sale-badge">` + off + `% off</span>
                <img src="../assets/img/` + w.img + `" class="watchImage3 p-3 img-fluid" alt="` + w.title + `">
                <div class="card-description text-center p-3">
                    <h6 class="text-dark">` + w.title + `</h6>
                    <p class="old-price">` + formatPrice(w.oldPrice) + `</p>
                    <h4 class="price">` + formatPrice(w.price) + `</h4>
                    <a href="preview.html"><button class="btn fs-6 add-button mt-3">View details</button></a>
                </div>
            </div>
        </div>`;
    }

    container.innerHTML = html;
    count.textContent = shown + " of " + watches.length + " watches";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
        showWatches(this.getAttribute("data-filter"));
    });
}

showWatches("all");