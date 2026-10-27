// Variables
var cartKey = "cartItems";
var cartItems = [];

var cartList = document.getElementById("cartList");
var cartEmpty = document.getElementById("cartEmpty");
var cartDone = document.getElementById("cartDone");
var cartContent = document.getElementById("cartContent");
var cartTotal = document.getElementById("cartTotal");
var cartCount = document.getElementById("cartCount");
var cartPrice = document.getElementById("cartPrice");
var confirmList = document.getElementById("confirmList");
var confirmTotal = document.getElementById("confirmTotal");

// Prices
var priceList = {
    "Tissot Chemin Des Tourelles Powermatic 80 34MM T139.207.22.038.00": 58300,
    "Tissot Chemin Des Tourelles Powermatic 80 34MM": 58300,
    "Tissot Chrono XL Classic T116.617.11.047.01": 49600,
    "Tissot Chemin des Tourelles Powermatic 80": 51000,
    "Tissot Chrono XL Classic T116.617.11.057.01": 26300,
    "Tissot Chrono XL Classic T116.617.11.092.00": 26300,
    "Coach 14504302 Women's Ionic Thin Gold Plated Steel Watch": 10980,
    "Coach 14504308 Women's Ionic Thin Gold Plated Steel Watch": 13980,
    "Coach 14602680 Men's Ionic Thin Gold Plated Steel Watch": 19880,
    "Coach 14602682 Men's Two-Tone Steel Watch": 19880,
    "Coach 14602679 Men's Steel Watch": 19880,
    "Coach Women's Ionic Black Plated Steel Mesh Watch": 9380,
    "Alpina Alpiner 4 Automatic AL-525NS4AQ6B": 106000,
    "Alpina Alpiner Extreme Regulator Automatic AL-650DGN4AE6": 166000,
    "Alpina Alpiner Comtesse Quartz Light Brown AL-240LBR2C6B": 66000,
    "Alpina Alpiner Comtesse Quartz Blooming Purple AL-240LP2C6B": 66000,
    "Alpina Alpiner 4 Automatic AL-525N4AQ6": 102000,
    "Alpina Alpiner 4 Automatic AL-525GS4AQ6B": 106000
};

// Storage
function loadCart() {
    var saved = localStorage.getItem(cartKey);

    if (!saved) {
        cartItems = [];
        return;
    }

    try {
        cartItems = JSON.parse(saved);
    } catch (error) {
        cartItems = [];
    }

    if (!Array.isArray(cartItems)) {
        cartItems = [];
    }
}

function saveCart() {
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    localStorage.setItem("cartCount", cartItems.length);
    updateBadge();
}

function updateBadge() {
    var badges = document.querySelectorAll(".cart-badge");

    badges.forEach(function(badge) {
        badge.textContent = cartItems.length;
    });
}

// Add
function addToCart(button) {
    var card = button.closest(".product-card");
    var name = card.querySelector(".product-name").textContent.trim();
    var price = card.querySelector(".product-price").textContent.trim();
    var img = card.querySelector("img").getAttribute("src");

    cartItems.push({ name: name, price: price, img: img });
    saveCart();
}

// Helpers
function toNumber(text) {
    var clean = String(text).replace(/[^0-9.]/g, "");
    return parseFloat(clean) || 0;
}

function formatPrice(number) {
    return "₱ " + number.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function getName(item) {
    if (typeof item === "object") {
        return item.name;
    }
    return item;
}

function getPrice(item) {
    if (typeof item === "object" && item.price) {
        return toNumber(item.price);
    }

    var name = String(getName(item)).trim();

    if (priceList[name]) {
        return priceList[name];
    }

    return 0;
}

function getImage(item) {
    if (typeof item === "object" && item.img) {
        if (item.img.indexOf("assets/") == 0) {
            return item.img;
        }
        return "assets/" + item.img;
    }
    return "";
}

function getTotalPrice() {
    var total = 0;

    cartItems.forEach(function(item) {
        total += getPrice(item);
    });

    return total;
}

function getModal() {
    var modalBox = document.getElementById("confirmModal");
    return bootstrap.Modal.getOrCreateInstance(modalBox);
}

// Display
function displayCart() {
    var content = "";

    cartItems.forEach(function(item, index) {
        var name = getName(item);
        var price = formatPrice(getPrice(item));
        var image = getImage(item);
        var imageTag = "";

        if (image != "") {
            imageTag = `<img src="` + image + `" class="cart-item-img" alt="">`;
        }

        content += `
            <div class="cart-item">` + imageTag + `
                <div class="cart-item-info">
                    <p class="cart-item-name">` + name + `</p>
                    <div class="cart-item-price">` + price + `</div>
                </div>
                <button type="button" class="cart-remove" aria-label="Remove item" onclick="removeItem(` + index + `)">
                    <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button>
            </div>`;
    });

    cartList.innerHTML = content;
    cartTotal.textContent = cartItems.length;
    cartCount.textContent = cartItems.length;
    cartPrice.textContent = formatPrice(getTotalPrice());

    cartDone.classList.add("d-none");

    if (cartItems.length == 0) {
        cartEmpty.classList.remove("d-none");
        cartContent.classList.add("d-none");
    } else {
        cartEmpty.classList.add("d-none");
        cartContent.classList.remove("d-none");
    }
}

// Actions
function removeItem(index) {
    cartItems.splice(index, 1);
    saveCart();
    displayCart();
}

function clearCart() {
    cartItems = [];
    saveCart();
    displayCart();
}

// Buy
function openConfirm() {
    if (cartItems.length == 0) {
        return;
    }

    var content = "";

    cartItems.forEach(function(item) {
        var name = getName(item);
        var price = formatPrice(getPrice(item));

        content += `
            <div class="confirm-item">
                <span class="confirm-item-name">` + name + `</span>
                <span class="confirm-item-price">` + price + `</span>
            </div>`;
    });

    confirmList.innerHTML = content;
    confirmTotal.textContent = formatPrice(getTotalPrice());
    getModal().show();
}

function confirmPurchase() {
    // Save the order to the database here
    cartItems = [];
    saveCart();
    getModal().hide();
    displayCart();

    cartEmpty.classList.add("d-none");
    cartDone.classList.remove("d-none");
}

// Start
loadCart();
updateBadge();

if (cartList) {
    displayCart();
}