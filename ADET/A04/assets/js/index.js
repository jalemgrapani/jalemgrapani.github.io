// State
var categories = [];
var products = [];

// API
const getAllCategories = async () => {
    fetch("http://localhost/Jalem's Portfolio/jalemgrapani.github.io/ADET/A04/BE/categories.php"
    )
        .then(response => response.json())
        .then(data => {
            categories = data
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    // Request
    const categoryData = {
        categoryID: categoryID
    };

    fetch("http://localhost/Jalem's Portfolio/jalemgrapani.github.io/ADET/A04/BE/products.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}

// Start
getAllCategories();

// Order
var total = 0;
var receiptItems = [];

// Categories
function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach(function (category) {
        categoriesContainer.innerHTML += `
      <button type="button" class="category-tab" onclick="getAllProducts(` + category.categoryID + `); setActiveCategory(this)">` + category.name + `</button>
    `;
    });

    // Default
    if (categories.length > 0) {
        getAllProducts(categories[0].categoryID);
        setActiveCategory(categoriesContainer.firstElementChild);
    }
}

// Active
function setActiveCategory(selectedTab) {
    var tabs = document.querySelectorAll(".category-tab");

    tabs.forEach(function (tab) {
        tab.classList.remove("is-active");
    });

    selectedTab.classList.add("is-active");
}

// Products
function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    // Cards
    products.forEach(function (product, index) {
        if (product.isAvailable) {
            maincontainer.innerHTML += `
        <button type="button" class="product-card" onclick="addToReceipt(` + index + `)">
          <span class="product-media">
            <img src="../../A03/assets/img/` + product.image + `.png" alt="">
          </span>
          <span class="product-name">` + product.name + `</span>
          <span class="product-price">₱` + parseFloat(product.price) + `</span>
        </button>
      `;
        }
    });

    // Empty
    if (maincontainer.innerHTML == "") {
        maincontainer.innerHTML = `<p class="empty-note">No items available in this category.</p>`;
    }
}

// Cart
function addToReceipt(index) {
    var product = products[index];
    var itemFound = false;

    // Lookup
    receiptItems.forEach(function (item) {
        if (item.name == product.name) {
            item.quantity += 1;
            itemFound = true;
        }
    });

    // Insert
    if (!itemFound) {
        receiptItems.push({ name: product.name, price: parseFloat(product.price), quantity: 1 });
    }

    updateReceipt();
}

// Receipt
function updateReceipt() {
    // Elements
    var receiptContainer = document.getElementById("receipt");
    var totalValueElement = document.getElementById("totalValue");
    var itemCountElement = document.getElementById("itemCount");
    var confirmBtn = document.getElementById("confirmBtn");

    receiptContainer.innerHTML = "";
    total = 0;
    var count = 0;

    // Rows
    receiptItems.forEach(function (item, index) {
        if (item.quantity > 0) {
            var subTotal = item.price * item.quantity;
            total += subTotal;
            count += item.quantity;

            receiptContainer.innerHTML += `
        <div class="receipt-row">
          <span class="receipt-name">` + item.name + `</span>
          <span class="receipt-sub">₱` + subTotal + `</span>
          <div class="receipt-controls">
            <div class="qty">
              <button type="button" class="qty-btn" onclick="changeQuantity(` + index + `, -1)" aria-label="Remove one ` + item.name + `">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-value">` + item.quantity + `</span>
              <button type="button" class="qty-btn" onclick="changeQuantity(` + index + `, 1)" aria-label="Add one ` + item.name + `">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <span class="receipt-unit">₱` + item.price + ` each</span>
          </div>
          <button type="button" class="remove-btn" onclick="changeQuantity(` + index + `, 0)" aria-label="Remove ` + item.name + ` from order">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
        }
    });

    // Empty
    if (count == 0) {
        receiptContainer.innerHTML = `
      <div class="receipt-empty">
        <i class="fa-solid fa-receipt"></i>
        <p>No items in this order yet</p>
        <small>Tap an item on the menu to add it.</small>
      </div>
    `;
    }

    // Total
    totalValueElement.innerHTML = "₱" + total;

    // Count
    if (count == 1) {
        itemCountElement.innerHTML = "1 item";
    } else {
        itemCountElement.innerHTML = count + " items";
    }

    // Button
    confirmBtn.disabled = (count == 0);
}

// Quantity
function changeQuantity(index, change) {
    var item = receiptItems[index];

    if (change == 0) {
        item.quantity = 0;
    } else {
        item.quantity += change;
        if (item.quantity < 1) {
            item.quantity = 0;
        }
    }

    updateReceipt();
}

// Purchase
function confirmPurchase() {
    var hasItems = receiptItems.some(function (item) {
        return item.quantity > 0;
    });

    // Elements
    var purchaseIcon = document.getElementById("purchaseIcon");
    var purchaseTitle = document.getElementById("purchaseModalLabel");
    var purchaseMessage = document.getElementById("purchaseMessage");

    if (hasItems) {
        // Success
        purchaseIcon.className = "purchase-icon is-success";
        purchaseIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        purchaseTitle.innerText = "Purchase confirmed";
        purchaseMessage.innerText = "₱" + total + " total. Thank you for ordering!";
        receiptItems = [];
        total = 0;
        updateReceipt();
    } else {
        // Warning
        purchaseIcon.className = "purchase-icon is-warning";
        purchaseIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        purchaseTitle.innerText = "Nothing to purchase";
        purchaseMessage.innerText = "Add at least one item to the order first.";
    }

    // Modal
    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    purchaseModal.show();
}

// Init
updateReceipt();