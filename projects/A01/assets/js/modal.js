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
    var price = card.querySelector(".product-price").textContent.trim();
    var img = card.querySelector("img").getAttribute("src");

    cartItems.push({ name: name, price: price, img: img });
    saveCart();

    modalText.textContent = name + " has been added to your cart.";
    modal.show();
}

// Cart
cartText.textContent = cartItems.length;

// Events
document.querySelectorAll(".btn-shop").forEach((button) => {
    button.addEventListener("click", addToCart);
});

document.querySelectorAll(".viewAll").forEach((button) => {
    button.addEventListener("click", (event) => event.preventDefault());
});