var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach(function(product, index) {
        categoriesContainer.innerHTML += 
          '<div onclick="loadProducts(' + index + ')" class="card mx-1 custom-button p-3 text-center category-card" style="min-width: 120px; max-width: 200px; width: auto;">' +
          '<small class="category-label">' + product.category + '</small>' +
          '</div>';
    });
}

function loadProducts(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products[categoryIndex].contents.forEach(function(content) {
        if (content.isAvailable) {
            maincontainer.innerHTML += 
              '<div onclick="addToReceipt(' + content.price + ', \'' + content.name.replace(/'/g, "\\'") + '\')" ' +
              'class="card mx-1 my-2 custom-button content p-3 text-center" ' +
              'style="width: 180px; background-color: #D9B99A">' +
              '<img src="' + content.image + '" alt="' + content.name + '" ' +
              'class="img-fluid" ' +
              'style="height: 200px; width: 150px; object-fit: contain; margin: 0;">' +
              '<small style="color: #68200d; font-size: 18px; font-weight: bold; display: block; margin: 0;">' + content.name + '</small>' +
              '<small style="color: #68200d; font-size: 18px; display: block; margin: 0;">₱' + content.price + '</small>' +
              '</div>';
        }
    });
}

function addToReceipt(price, name) {
    var receiptContainer = document.getElementById("receipt");

    if (!receiptContainer.querySelector(".receipt-title")) {
        receiptContainer.innerHTML = '<h3 class="receipt-title" style="text-align: center; margin-bottom: 10px;">Receipt</h3>' + receiptContainer.innerHTML;
    }

    total += parseFloat(price);

    var totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = '₱' + total.toFixed(2);

    receiptContainer.innerHTML += 
      '<div class="d-flex flex-row justify-content-between">' +
        '<div><small>' + name + '</small></div>' +
        '<div><small>₱' + price + '</small></div>' +
      '</div>';
}

loadCategories();
