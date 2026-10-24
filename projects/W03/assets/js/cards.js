// Data
var dishes = [
  { name: "Adobong Baboy", img: "adobongBaboy.jpg", type: "Pork" },
  { name: "Arroz Caldo", img: "arrozCaldo.jpg", type: "Chicken" },
  { name: "Bicol Express", img: "bicolExpress.jpg", type: "Pork" },
  { name: "Kaldereta", img: "kaldereta.jpg", type: "Beef" },
  { name: "Kare-Kare", img: "karekare.jpg", type: "Beef" },
  { name: "Lechon Kawali", img: "lechonKawali.jpg", type: "Pork" },
  { name: "Lumpia", img: "lumpia.jpg", type: "Pork" },
  { name: "Pinakbet", img: "pinakbet.jpg", type: "Vegetable" },
  { name: "Sinigang na Baboy", img: "sinigang.jpg", type: "Pork" },
  { name: "Sisig", img: "sisig.jpg", type: "Pork" },
  { name: "Tinolang Manok", img: "tinola.jpg", type: "Chicken" },
  { name: "Sinigang na Hipon", img: "sinigang2.jpg", type: "Seafood" },
  { name: "Laing", img: "laing.jpg", type: "Vegetable" },
  { name: "Ginataang Alimango", img: "ginataangAlimango.jpg", type: "Seafood" },
  { name: "Lechon Paksiw", img: "lechongPaksiw.jpg", type: "Pork" },
  { name: "Beef Bulalo", img: "beefBulalo.jpg", type: "Beef" },
];

// Variables
var container = document.getElementById("cardContainer");
var filters = document.getElementById("filters");
var modal = new bootstrap.Modal(document.getElementById("dishModal"));
var modalImage = document.getElementById("dishModalImg");
var modalTitle = document.getElementById("dishModalTitle");

// Functions
function countDishes(type) {
  var total = 0;

  dishes.forEach(function (dish) {
    if (type === "All" || dish.type === type) {
      total++;
    }
  });

  return total;
}

function showFilters() {
  var types = ["All"];
  var content = "";

  dishes.forEach(function (dish) {
    if (types.indexOf(dish.type) === -1) {
      types.push(dish.type);
    }
  });

  types.forEach(function (type) {
    var total = countDishes(type);
    var label = total === 1 ? " dish" : " dishes";

    content +=
      `
            <button type="button" class="filter-tab" data-type="` +
      type +
      `" aria-pressed="` +
      (type === "All") +
      `" aria-label="` +
      type +
      `, ` +
      total +
      label +
      `">
                <span class="filter-name">` +
      type +
      `</span>
                <span class="count">` +
      total +
      `</span>
            </button>
        `;
  });

  filters.innerHTML = content;
}

function showDishes(type) {
  var content = "";

  dishes.forEach(function (dish) {
    if (type === "All" || dish.type === type) {
      content +=
        `
                <li>
                    <button type="button" class="dish" data-img="` +
        dish.img +
        `" data-name="` +
        dish.name +
        `">
                        <span class="dish-photo">
                            <img src="assets/img/` +
        dish.img +
        `" alt="` +
        dish.name +
        `" loading="lazy">
                        </span>
                        <span class="dish-name">` +
        dish.name +
        `</span>
                        <span class="dish-type">` +
        dish.type +
        `</span>
                    </button>
                </li>
            `;
    }
  });

  container.innerHTML = content;
}

function showModal() {
  modal.show();
}

// Events
filters.addEventListener("click", function (event) {
  var tab = event.target.closest(".filter-tab");

  if (tab) {
    filters.querySelectorAll(".filter-tab").forEach(function (button) {
      button.setAttribute("aria-pressed", button === tab);
    });

    showDishes(tab.dataset.type);
  }
});

container.addEventListener("click", function (event) {
  var dish = event.target.closest(".dish");

  if (dish) {
    modalTitle.textContent = dish.dataset.name;
    modalImage.alt = dish.dataset.name;
    modalImage.removeAttribute("src");
    modalImage.onload = showModal;
    modalImage.onerror = showModal;
    modalImage.src = "assets/img/" + dish.dataset.img;
  }
});

// Start
showFilters();
showDishes("All");
