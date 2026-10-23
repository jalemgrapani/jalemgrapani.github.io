// Variables
var cartList = document.getElementById("cartList");
var cartEmpty = document.getElementById("cartEmpty");
var cartContent = document.getElementById("cartContent");
var cartTotal = document.getElementById("cartTotal");

// Functions
function displayCart() {
    var content = "";

    cartItems.forEach((item, index) => {
        content += '<div class="row align-items-center border-bottom py-2">';
        content += '<div class="col-8">' + item + '</div>';
        content += '<div class="col-4 text-end">';
        content += '<button type="button" class="btn btn-sm btn-outline-danger" onclick="removeItem(' + index + ')">Remove</button>';
        content += '</div>';
        content += '</div>';
    });

    cartList.innerHTML = content;
    cartTotal.textContent = cartItems.length;

    if (cartItems.length == 0) {
        cartEmpty.classList.remove("d-none");
        cartContent.classList.add("d-none");
    } else {
        cartEmpty.classList.add("d-none");
        cartContent.classList.remove("d-none");
    }
}

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

// Cart
displayCart();