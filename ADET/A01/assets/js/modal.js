// Variables
var modalElement = document.getElementById("addedModal");
var modalText = document.getElementById("addedModalText");
var modal = new bootstrap.Modal(modalElement);
var cartText = document.getElementById("cartCount");
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Functions
function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartText.textContent = cartItems.length;
}

function addToCart(event) {
    event.preventDefault();

    var card = event.currentTarget.closest(".product-card");
    var name = card.querySelector(".product-name").textContent.trim();

    cartItems.push(name);
    saveCart();

    modalText.textContent = name + " has been added to your cart.";
    modal.show();
}

function stopJump(event) {
    event.preventDefault();
}

// Cart
cartText.textContent = cartItems.length;

// Events
document.querySelectorAll(".btn-shop").forEach((button) => {
    button.addEventListener("click", addToCart);
});

document.querySelectorAll(".viewAll").forEach((button) => {
    button.addEventListener("click", stopJump);
});