// Variables
const container = document.getElementById("agentContainer");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const perPage = 12;
let allItems = [];
let items = [];
let currentPage = 1;

// Functions
function getTotalPages() {
    return Math.ceil(items.length / perPage);
}

function displayItems() {
    if (items.length === 0) {
        displayMessage(container, "No agents match your search.");
        pagination.innerHTML = "";
        return;
    }

    const start = (currentPage - 1) * perPage;
    const pageItems = items.slice(start, start + perPage);

    container.innerHTML = pageItems.map(createAgentCard).join("");
    displayPagination(pagination, currentPage, getTotalPages());
}

async function loadItems() {
    try {
        allItems = await getAgents();
        items = allItems;
        displayItems();
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load agents. Check your connection and refresh the page.");
    }
}

// Events
searchInput.addEventListener("input", () => {
    if (allItems.length === 0) {
        return;
    }

    items = filterByName(allItems, searchInput.value);
    currentPage = 1;
    displayItems();
});

pagination.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    currentPage = getNewPage(button, currentPage, getTotalPages());
    displayItems();
    window.scrollTo({ top: 0 });
});

// Start
loadItems();