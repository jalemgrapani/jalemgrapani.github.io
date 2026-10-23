// Variables
var container = document.getElementById("championContainer");
var pagination = document.getElementById("pagination");
var champions = [];
var currentPage = 1;
var perPage = 20;
var typeClass = {
    Fighter: "fighter-bg",
    Mage: "mage-bg",
    Assassin: "assassin-bg",
    Tank: "tank-bg",
    Support: "support-bg",
    Marksman: "marksman-bg"
};

// Functions
function getTotalPages() {
    return Math.ceil(champions.length / perPage);
}

function changeImage(image) {
    if (image.dataset.step === "0") {
        image.dataset.step = "1";
        image.src = image.dataset.splash;
    } else if (image.dataset.step === "1") {
        image.dataset.step = "2";
        image.src = image.dataset.icon;
    }
}

function displayChampions() {
    var start = (currentPage - 1) * perPage;
    var pageChampions = champions.slice(start, start + perPage);
    var content = "";

    pageChampions.forEach(champion => {
        var bgClass = typeClass[champion.tags[0]] || "";
        var roles = champion.tags.join(", ");
        var tileUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/" + champion.id + "_0.jpg";
        var splashUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg";
        var iconUrl = "https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/" + champion.image.full;

        content += `
            <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                <a href="view.html?championName=${champion.id}">
                    <div class="card my-3 ${bgClass}">
                        <div class="imgcontainer">
                            <img src="${tileUrl}" alt="${champion.name}" data-step="0" data-splash="${splashUrl}" data-icon="${iconUrl}">
                        </div>
                        <div class="championname">${champion.name}</div>
                        <div class="text-muted">${roles}</div>
                    </div>
                </a>
            </div>
        `;
    });

    container.innerHTML = content;

    // Fallback 
    container.querySelectorAll("img").forEach(image => {
        image.addEventListener("error", () => {
            changeImage(image);
        });
    });
}

function displayPagination() {
    var totalPages = getTotalPages();
    var prevClass = "";
    var nextClass = "";
    var content = "";

    if (currentPage === 1) {
        prevClass = " disabled";
    }

    if (currentPage === totalPages) {
        nextClass = " disabled";
    }

    content += `
        <li class="page-item${prevClass}">
            <button class="page-link btn btn-primary" data-page="prev">Previous</button>
        </li>
    `;

    for (var i = 1; i <= totalPages; i++) {
        var activeClass = "";

        if (i === currentPage) {
            activeClass = " active";
        }

        content += `
            <li class="page-item${activeClass}">
                <button class="page-link btn btn-primary" data-page="${i}">${i}</button>
            </li>
        `;
    }

    content += `
        <li class="page-item${nextClass}">
            <button class="page-link btn btn-primary" data-page="next">Next</button>
        </li>
    `;

    pagination.innerHTML = content;
}

async function getChampions() {
    var response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json");
    var data = await response.json();

    champions = Object.values(data.data);
    displayChampions();
    displayPagination();
}

// Events
pagination.addEventListener("click", event => {
    var button = event.target.closest("button");

    if (!button) {
        return;
    }

    var page = button.dataset.page;

    if (page === "prev") {
        if (currentPage > 1) {
            currentPage--;
        }
    } else if (page === "next") {
        if (currentPage < getTotalPages()) {
            currentPage++;
        }
    } else {
        currentPage = Number(page);
    }

    displayChampions();
    displayPagination();
});

// Start
getChampions();