// Variables
const searchInput = document.getElementById("searchTerm");
const searchButton = document.getElementById("searchButton");
const resultContainer = document.getElementById("resultContainer");
const maxSkins = 24;
let agents = [];
let skins = [];
let maps = [];
let weapons = [];
let modes = [];

// Functions
function displayHint() {
    resultContainer.innerHTML = `<p class="message">Try <span class="search-term">Jett</span>, <span class="search-term">Ascent</span> or <span class="search-term">Vandal</span>.</p>`;
}

function displayNoResults(searchTerm) {
    resultContainer.innerHTML = `<p class="message">Nothing found for "<span class="search-term" id="searchTermText"></span>". Check the spelling and try again.</p>`;

    // textContent keeps typed text from running as HTML
    document.getElementById("searchTermText").textContent = searchTerm;
}

function filterByName(items, searchTerm) {
    return items.filter((item) => item.displayName.toLowerCase().includes(searchTerm));
}

function displayResults(results) {
    const { agentResults, skinResults, mapResults, weaponResults, modeResults } = results;
    let content = "";

    if (agentResults.length > 0) {
        content += `
            <h2 class="display result-title">Agents</h2>
            <div class="row g-3">${agentResults.map(createAgentCard).join("")}</div>
        `;
    }

    const linkRows = [
        ...mapResults.map((map) => createLinkRow(map.displayName, "Map", "maps.html")),
        ...weaponResults.map((weapon) => createLinkRow(weapon.displayName, "Weapon", "weapons.html")),
        ...modeResults.map((mode) => createLinkRow(mode.displayName, "Game mode", "modes.html")),
    ];

    if (linkRows.length > 0) {
        content += `
            <h2 class="display result-title">Maps, weapons and modes</h2>
            <div>${linkRows.join("")}</div>
        `;
    }

    if (skinResults.length > 0) {
        content += `
            <h2 class="display result-title">Skins (${skinResults.length})</h2>
            <div class="row g-3">${skinResults.slice(0, maxSkins).map(createSkinRow).join("")}</div>
        `;

        if (skinResults.length > maxSkins) {
            content += `<p class="message mt-3">Showing the first ${maxSkins}. Add more letters to narrow it down.</p>`;
        }
    }

    resultContainer.innerHTML = content;
}

async function searchData() {
    const rawTerm = searchInput.value.trim();
    const searchTerm = rawTerm.toLowerCase();

    if (searchTerm === "") {
        displayHint();
        return;
    }

    try {
        if (agents.length === 0) {
            [agents, skins, maps, weapons, modes] = await Promise.all([
                getAgents(),
                getSkins(),
                getMaps(),
                getWeapons(),
                getModes(),
            ]);
        }

        const results = {
            agentResults: filterByName(agents, searchTerm),
            skinResults: filterByName(skins, searchTerm),
            mapResults: filterByName(maps, searchTerm),
            weaponResults: filterByName(weapons, searchTerm),
            modeResults: filterByName(modes, searchTerm),
        };
        const total = Object.values(results).reduce((sum, list) => sum + list.length, 0);

        if (total === 0) {
            displayNoResults(rawTerm);
            return;
        }

        displayResults(results);
    } catch (error) {
        console.error(error.message);
        resultContainer.innerHTML = `<p class="message">Could not reach the VALORANT API. Check your connection and try again.</p>`;
    }
}

// Events
searchButton.addEventListener("click", searchData);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchData();
    }
});

// Start
displayHint();