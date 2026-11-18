// Variables
const container = document.getElementById("agentContainer");
const pagination = document.getElementById("pagination");
const perPage = 12;
let items = [];
let currentPage = 1;

// Functions
function getTotalPages() {
    return Math.ceil(items.length / perPage);
}

function displayItems() {
    const start = (currentPage - 1) * perPage;
    const pageItems = items.slice(start, start + perPage);

    container.innerHTML = pageItems.map(createAgentCard).join("");
}

async function loadItems() {
    try {
        items = await getAgents();
        displayItems();
        displayPagination(pagination, currentPage, getTotalPages());
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load agents. Check your connection and refresh the page.");
    }
}

// Events
pagination.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    currentPage = getNewPage(button, currentPage, getTotalPages());
    displayItems();
    displayPagination(pagination, currentPage, getTotalPages());
    window.scrollTo({ top: 0 });
});

// Start
loadItems();