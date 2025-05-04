var total = 0;
var receiptItems = [];

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        categoriesContainer.innerHTML +=
            '<div onclick="loadProducts(' + i + ')" class="card mx-1 custom-button p-3 text-center category-card" style="min-width: 120px; max-width: 200px; width: auto;">' +
            '<small class="category-label">' + product.category + '</small>' +
            '</div>';
    }
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    var categoryContents = products[categoryIndex].contents;
    for (var i = 0; i < categoryContents.length; i++) {
        var content = categoryContents[i];
        if (content.isAvailable) {
            maincontainer.innerHTML +=
                '<div onclick="addToReceipt(' + content.price + ', \'' + content.name + '\')" class="card mx-1 my-2 custom-button content p-3 text-center" style="width: 180px; background-color: #D9B99A">' +
                '<img src="img/' + content.image + '.png" class="img-fluid" style="height: 200px; width: 150px; object-fit: contain; margin: 0;">' +
                '<small style="color: #68200d; font-size: 18px; font-weight: bold;">' + content.name + '</small>' +
                '<small style="color: #68200d; font-size: 18px;">₱' + content.price + '</small>' +
                '</div>';
        }
    }
}

function addToReceipt(price, name) {
    var found = false;
    for (var i = 0; i < receiptItems.length; i++) {
        if (receiptItems[i].name === name) {
            receiptItems[i].quantity += 1;
            found = true;
        }
    }
    if (!found) {
        receiptItems.push({ name: name, price: price, quantity: 1 });
    }
    updateReceipt();
}

function updateReceipt() {
    var receiptContainer = document.getElementById("receipt");
    receiptContainer.innerHTML = '<h3 class="receipt-title" style="text-align: center; margin-bottom: 30px;">Receipt</h3>';
    total = 0;

    for (var i = 0; i < receiptItems.length; i++) {
        var item = receiptItems[i];
        if (item.quantity > 0) {
            var subtotal = item.price * item.quantity;
            total += subtotal;

            receiptContainer.innerHTML +=
                '<div class="d-flex flex-row justify-content-between align-items-center mb-2">' +
                '<div class="mb-1">' +
                '<small style="font-size: 15px;" class="mb-1 d-block">' + item.name + '</small>' +
                '<div class="mb-1">' +
                '<button class="btn btn-sm buttonIcon" onclick="changeQuantity(\'' + item.name + '\', -1)">' +
                '<i class="fa-solid fa-minus iconButton"></i>' +
                '</button>' +
                '<span class="mx-1">' + item.quantity + '</span>' +
                '<button class="btn btn-sm buttonIcon" onclick="changeQuantity(\'' + item.name + '\', 1)">' +
                '<i class="fa-solid fa-plus iconButton"></i>' +
                '</button>' +
                '<button class="btn btn-sm iconButton ms-2" onclick="changeQuantity(\'' + item.name + '\', 0)">' +
                '<i class="fa-solid fa-trash"></i>' +
                '</button>' +
                '</div>' +
                '</div>' +
                '<div><small>₱' + subtotal + '</small></div>' +
                '</div>';
        }
    }

    var totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = "₱" + total;

    var confirmContainer = document.getElementById("confirmContainer");
    var showButton = false;

    for (var j = 0; j < receiptItems.length; j++) {
        if (receiptItems[j].quantity > 0) {
            showButton = true;
        }
    }

    confirmContainer.style.display = showButton ? "block" : "none";
}

function changeQuantity(name, change) {
    for (var i = 0; i < receiptItems.length; i++) {
        if (receiptItems[i].name === name) {
            if (change === 0) {
                receiptItems[i].quantity = 0;
            } else {
                receiptItems[i].quantity += change;
                if (receiptItems[i].quantity < 1) {
                    receiptItems[i].quantity = 0;
                }
            }
        }
    }
    updateReceipt();
}

function confirmPurchase() {
    var hasItems = false;
    for (var i = 0; i < receiptItems.length; i++) {
        if (receiptItems[i].quantity > 0) {
            hasItems = true;
        }
    }

    if (hasItems) {
        alert("Purchase confirmed!\nThank you for ordering!");
        receiptItems = [];
        total = 0;
        updateReceipt();
    } else {
        alert("No items to purchase!");
    }
}

loadCategories();
