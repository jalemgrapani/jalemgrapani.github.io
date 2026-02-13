var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch("http://localhost/Jalem's Portfolio/jalemgrapani.github.io/ADET/A06/A06_BE/categories.php"
    )
        .then(response => response.json())
        .then(data => {
            categories = data
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch("http://localhost/Jalem's Portfolio/jalemgrapani.github.io/ADET/A06/A06_BE/products.php", {
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

getAllCategories();

var total = 0;
var receiptItems = [];

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach(function (category) {
        categoriesContainer.innerHTML += `
      <div onclick="getAllProducts(` + category.categoryID + `)" class="card mx-1 custom-button p-3 text-center category-card" style="min-width: 120px; max-width: 200px; width: auto;">
        <small class="category-label">` + category.name + `</small>
      </div>
    `;
    });
}

function loadProducts(categoryID) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(function (product) {
        if (product.isAvailable) {
            maincontainer.innerHTML += `
        <div onclick="addToReceipt(` + product.price + `, '` + product.name + `')" class="card mx-1 my-2 custom-button content p-3 text-center" style="width: 180px; background-color: #D9B99A">
          <img src="../../A04/assets/img/` + product.image + `.png" class="img-fluid" style="height: 200px; width: 150px; object-fit: contain; margin: 0;">
          <small style="color: #68200d; font-size: 18px; font-weight: bold;">` + product.name + `</small><br>
          <small style="color: #68200d; font-size: 18px;">₱` + product.price + `</small>
        </div>
      `;
        }
    });
}

function addToReceipt(price, name) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    var totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    var itemFound = false;

    receiptItems.forEach(function (item) {
        if (item.name == name) {
            item.quantity += 1;
            itemFound = true;
        }
    });

    if (!itemFound) {
        receiptItems.push({ name: name, price: price, quantity: 1 });
    }

    updateReceipt();
}

function updateReceipt() {
    var receiptContainer = document.getElementById("receipt");
    var totalValueElement = document.getElementById("totalValue");
    var confirmContainer = document.getElementById("confirmContainer");

    receiptContainer.innerHTML = `
    <h3 class="receipt-title" style="text-align: center; margin-bottom: 30px;">Receipt</h3>
  `;

    total = 0;

    receiptItems.forEach(function (item) {
        if (item.quantity > 0) {
            var subTotal = item.price * item.quantity;
            total += subTotal;

            receiptContainer.innerHTML += `
        <div class="d-flex flex-row justify-content-between align-items-center mb-2">
          <div class="mb-1">
            <small style="font-size: 15px;" class="mb-1 d-block">` + item.name + `</small>
            <div class="mb-1">
              <button class="btn btn-sm buttonIcon" onclick="changeQuantity('` + item.name + `', -1)">
                <i class="fa-solid fa-minus iconButton"></i>
              </button>
              <span class="mx-1">` + item.quantity + `</span>
              <button class="btn btn-sm buttonIcon" onclick="changeQuantity('` + item.name + `', 1)">
                <i class="fa-solid fa-plus iconButton"></i>
              </button>
              <button class="btn btn-sm iconButton ms-2" onclick="changeQuantity('` + item.name + `', 0)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div><small>₱` + subTotal + `</small></div>
        </div>
      `;
        }
    });

    totalValueElement.innerHTML = `₱` + total;

    var showButton = false;
    receiptItems.forEach(function (item) {
        if (item.quantity > 0) {
            showButton = true;
        }
    });

    if (showButton) {
        confirmContainer.style.display = 'block';
    } else {
        confirmContainer.style.display = 'none';
    }
}

function changeQuantity(name, change) {
    receiptItems.forEach(function (item) {
        if (item.name == name) {
            if (change == 0) {
                item.quantity = 0;
            } else {
                item.quantity += change;
                if (item.quantity < 1) {
                    item.quantity = 0;
                }
            }
        }
    });

    updateReceipt();
}

function confirmPurchase() {
    var hasItems = receiptItems.some(item => item.quantity > 0);
    var purchaseMessage = document.getElementById("purchaseMessage");

    if (hasItems) {
        purchaseMessage.innerText = "Purchase confirmed!\nThank you for ordering!";
        receiptItems = [];
        total = 0;
        updateReceipt();
    } else {
        purchaseMessage.innerText = "No items to purchase!";
    }

    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
    purchaseModal.show();
}