// Variables
const container = document.getElementById("mapContainer");
const searchInput = document.getElementById("searchInput");
const detailModal = document.getElementById("detailModal");
const detailTitle = document.getElementById("detailTitle");
const detailBody = document.getElementById("detailBody");
let maps = [];

// Functions
function displayMaps() {
    const filtered = filterByName(maps, searchInput.value);

    if (filtered.length === 0) {
        displayMessage(container, "No maps match your search.");
        return;
    }

    container.innerHTML = filtered.map(createMapCard).join("");
}

function displayMapDetail(map) {
    const minimap = map.displayIcon ? `<img class="minimap" src="${map.displayIcon}" alt="Minimap of ${map.displayName}">` : "";

    detailTitle.textContent = map.displayName;
    detailBody.innerHTML = `
        <img class="detail-image" src="${map.splash}" alt="${map.displayName}">
        <div class="row g-4">
            <div class="col-12 col-md-5">${minimap}</div>
            <div class="col-12 col-md-7">
                <p class="fw-bold">${map.tacticalDescription || "Special map"}</p>
                <p class="detail-text mb-0">${map.narrativeDescription || "No description available."}</p>
            </div>
        </div>
    `;
}

async function loadMaps() {
    try {
        maps = await getMaps();
        displayMaps();
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load maps. Check your connection and refresh the page.");
    }
}

// Events
searchInput.addEventListener("input", () => {
    if (maps.length > 0) {
        displayMaps();
    }
});

detailModal.addEventListener("show.bs.modal", (event) => {
    const map = maps.find((item) => item.uuid === event.relatedTarget.dataset.uuid);

    displayMapDetail(map);
});

// Start
loadMaps();