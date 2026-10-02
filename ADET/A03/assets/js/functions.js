var total = 0;
var receiptItems = [];

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach(function (product, index) {
        categoriesContainer.innerHTML += `
      <button type="button" class="category-tab" onclick="loadProducts(` + index + `)">` + product.category + `</button>
    `;
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    var contents = products[categoryIndex].contents;

    contents.forEach(function (content, contentIndex) {
        if (content.isAvailable) {
            maincontainer.innerHTML += `
        <button type="button" class="product-card" onclick="addToReceipt(` + categoryIndex + `, ` + contentIndex + `)">
          <span class="product-media">
            <img src="assets/img/` + content.image + `.png" alt="">
          </span>
          <span class="product-name">` + content.name + `</span>
          <span class="product-price">₱` + content.price + `</span>
        </button>
      `;
        }
    });

    if (maincontainer.innerHTML == "") {
        maincontainer.innerHTML = `<p class="empty-note">No items available in this category.</p>`;
    }

    // highlight the selected category tab
    var tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(function (tab, index) {
        if (index == categoryIndex) {
            tab.classList.add("is-active");
        } else {
            tab.classList.remove("is-active");
        }
    });
}

function addToReceipt(categoryIndex, contentIndex) {
    var content = products[categoryIndex].contents[contentIndex];
    var itemFound = false;

    receiptItems.forEach(function (item) {
        if (item.name == content.name) {
            item.quantity += 1;
            itemFound = true;
        }
    });

    if (!itemFound) {
        receiptItems.push({ name: content.name, price: parseFloat(content.price), quantity: 1 });
    }

    updateReceipt();
}

function updateReceipt() {
    var receiptContainer = document.getElementById("receipt");
    var totalValueElement = document.getElementById("totalValue");
    var itemCountElement = document.getElementById("itemCount");
    var confirmBtn = document.getElementById("confirmBtn");

    receiptContainer.innerHTML = "";
    total = 0;
    var count = 0;

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

    // nothing in the order yet
    if (count == 0) {
        receiptContainer.innerHTML = `
      <div class="receipt-empty">
        <i class="fa-solid fa-receipt"></i>
        <p>No items in this order yet</p>
        <small>Tap an item on the menu to add it.</small>
      </div>
    `;
    }

    totalValueElement.innerHTML = "₱" + total;

    if (count == 1) {
        itemCountElement.innerHTML = "1 item";
    } else {
        itemCountElement.innerHTML = count + " items";
    }

    // Confirm button only works when there is something to buy
    confirmBtn.disabled = (count == 0);
}

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

function confirmPurchase() {
    var hasItems = receiptItems.some(function (item) {
        return item.quantity > 0;
    });

    var purchaseIcon = document.getElementById("purchaseIcon");
    var purchaseTitle = document.getElementById("purchaseModalLabel");
    var purchaseMessage = document.getElementById("purchaseMessage");

    if (hasItems) {
        purchaseIcon.className = "purchase-icon is-success";
        purchaseIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        purchaseTitle.innerText = "Purchase confirmed";
        purchaseMessage.innerText = "₱" + total + " total. Thank you for ordering!";
        receiptItems = [];
        total = 0;
        updateReceipt();
    } else {
        purchaseIcon.className = "purchase-icon is-warning";
        purchaseIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        purchaseTitle.innerText = "Nothing to purchase";
        purchaseMessage.innerText = "Add at least one item to the order first.";
    }

    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    purchaseModal.show();
}

loadCategories();
if (products.length > 0) {
    loadProducts(0);
}
updateReceipt();