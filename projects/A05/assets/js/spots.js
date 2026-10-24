// Variables
var filters = document.getElementById("filters");
var spotGrid = document.getElementById("spotGrid");
var spotCount = document.getElementById("spotCount");
var spotTotal = document.getElementById("spotTotal");
var currentCategory = "All";
var spotModal = new bootstrap.Modal(document.getElementById("spotModal"));
var modalImg = document.getElementById("spotModalImg");
var modalPlace = document.getElementById("spotModalPlace");
var modalTitle = document.getElementById("spotModalTitle");
var modalText = document.getElementById("spotModalText");
var modalTip = document.getElementById("spotModalTip");

// Functions
function getSpots(category) {
  if (category === "All") {
    return spots;
  }

  return spots.filter(function (spot) {
    return spot.category === category;
  });
}

function displayFilters() {
  var content = "";

  categories.forEach(function (category) {
    var count = getSpots(category.name).length;

    content +=
      `
            <div class="col-6 col-lg-3">
                <button class="filter-button" type="button" data-category="` +
      category.name +
      `" onclick="selectCategory('` +
      category.name +
      `')">
                    <span class="filter-icon"><i class="fa-solid ` +
      category.icon +
      `"></i></span>
                    <span>
                        <span class="filter-name">` +
      category.name +
      `</span>
                        <span class="filter-count">` +
      count +
      ` spots</span>
                    </span>
                </button>
            </div>
        `;
  });

  filters.innerHTML = content;
}

function updateFilters() {
  var buttons = filters.querySelectorAll(".filter-button");

  buttons.forEach(function (button) {
    if (button.dataset.category === currentCategory) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.classList.remove("active");
      button.setAttribute("aria-pressed", "false");
    }
  });
}

function displaySpots() {
  var items = getSpots(currentCategory);
  var content = "";

  items.forEach(function (spot) {
    content +=
      `
            <div class="col-12 col-md-6 col-lg-4">
                <button class="spot-card" type="button" onclick="showModal(` +
      spots.indexOf(spot) +
      `)">
                    <img src="` +
      spot.image +
      `" class="spot-img" alt="` +
      spot.name +
      `" loading="lazy" onerror="this.classList.add('d-none')">
                    <span class="spot-badge">` +
      spot.badge +
      `</span>
                    <span class="spot-info d-block">
                        <span class="spot-place d-block">` +
      spot.place +
      `</span>
                        <span class="spot-title d-block">` +
      spot.name +
      `</span>
                    </span>
                </button>
            </div>
        `;
  });

  spotGrid.innerHTML = content;
  spotCount.textContent =
    "Showing " + items.length + " of " + spots.length + " spots";
}

function selectCategory(category) {
  currentCategory = category;
  updateFilters();
  displaySpots();
}

function showModal(index) {
  var spot = spots[index];

  modalImg.classList.remove("d-none");
  modalImg.src = spot.image;
  modalImg.alt = spot.name;
  modalPlace.textContent = spot.place + " · " + spot.badge;
  modalTitle.textContent = spot.name;
  modalText.textContent = spot.text;
  modalTip.textContent = spot.tip;

  spotModal.show();
}

// Start
spotTotal.textContent = spots.length;
displayFilters();
updateFilters();
displaySpots();
