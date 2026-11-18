// Variables
const container = document.getElementById("weaponContainer");
const filterContainer = document.getElementById("filterContainer");
const searchInput = document.getElementById("searchInput");
const detailModal = document.getElementById("detailModal");
const detailTitle = document.getElementById("detailTitle");
const detailBody = document.getElementById("detailBody");
let weapons = [];
let currentCategory = "All";

// Functions
function displayFilters() {
    const categories = ["All", ...new Set(weapons.map((weapon) => getLastWord(weapon.category)))];

    filterContainer.innerHTML = categories
        .map((category) => {
            const activeClass = category === currentCategory ? "active" : "";

            return `<button type="button" class="filter-button ${activeClass}" data-category="${category}">${category}</button>`;
        })
        .join("");
}

function displayWeapons() {
    const inCategory = weapons.filter((weapon) => currentCategory === "All" || getLastWord(weapon.category) === currentCategory);
    const filtered = filterByName(inCategory, searchInput.value);

    if (filtered.length === 0) {
        displayMessage(container, "No weapons match your search.");
        return;
    }

    container.innerHTML = filtered.map(createWeaponCard).join("");
}

function displayWeaponDetail(weapon) {
    const stats = weapon.weaponStats;
    let content = `<img class="weapon-detail-image" src="${weapon.displayIcon}" alt="${weapon.displayName}">`;

    if (!stats) {
        content += `<p class="message mb-0">This weapon has no stats listed.</p>`;
    } else {
        const cost = weapon.shopData && weapon.shopData.cost > 0 ? `${weapon.shopData.cost}` : "Free";
        const rows = stats.damageRanges
            .map((range) => `
                <tr>
                    <td>${range.rangeStartMeters} to ${range.rangeEndMeters} m</td>
                    <td>${Math.round(range.headDamage)}</td>
                    <td>${Math.round(range.bodyDamage)}</td>
                    <td>${Math.round(range.legDamage)}</td>
                </tr>
            `)
            .join("");

        content += `
            <dl class="stat-list">
                ${createStat("Cost", cost)}
                ${createStat("Fire rate", `${stats.fireRate} per second`)}
                ${createStat("Magazine", stats.magazineSize)}
                ${createStat("Reload", `${stats.reloadTimeSeconds} s`)}
                ${createStat("Equip", `${stats.equipTimeSeconds} s`)}
                ${createStat("Wall penetration", getLastWord(stats.wallPenetration))}
            </dl>
            <table class="table table-sm damage-table">
                <thead><tr><th>Range</th><th>Head</th><th>Body</th><th>Leg</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        `;
    }

    detailTitle.textContent = weapon.displayName;
    detailBody.innerHTML = content;
}

async function loadWeapons() {
    try {
        weapons = await getWeapons();
        displayFilters();
        displayWeapons();
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load weapons. Check your connection and refresh the page.");
    }
}

// Events
searchInput.addEventListener("input", () => {
    if (weapons.length > 0) {
        displayWeapons();
    }
});

filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    currentCategory = button.dataset.category;
    displayFilters();
    displayWeapons();
});

detailModal.addEventListener("show.bs.modal", (event) => {
    const weapon = weapons.find((item) => item.uuid === event.relatedTarget.dataset.uuid);

    displayWeaponDetail(weapon);
});

// Start
loadWeapons();