// Functions
function getAgentColor(agent) {
    if (!agent.backgroundGradientColors) {
        return "";
    }

    return `#${agent.backgroundGradientColors[0].slice(0, 6)}`;
}

function getCountText(count, word) {
    return `${count} ${word}${count === 1 ? "" : "s"}`;
}

// Turns values like "EEquippableCategory::Sidearm" into "Sidearm"
function getLastWord(text) {
    return text ? text.split("::").pop() : "";
}

function filterByName(items, searchTerm) {
    const term = searchTerm.trim().toLowerCase();

    return items.filter((item) => item.displayName.toLowerCase().includes(term));
}

function getSkinMeta(skin) {
    if (!skin.levels || !skin.chromas) {
        return "Details are not available";
    }

    return `${getCountText(skin.levels.length, "level")} and ${getCountText(skin.chromas.length, "chroma")}`;
}

function createSkinImage(skin, altText) {
    if (!skin.displayIcon) {
        return `<span class="message">Image is not available.</span>`;
    }

    return `<img src="${skin.displayIcon}" alt="${altText}" loading="lazy">`;
}

function createStat(label, value) {
    return `<div class="stat"><dt>${label}</dt><dd>${value}</dd></div>`;
}

function createAgentCard(agent) {
    const role = agent.role ? agent.role.displayName : "Agent";
    const roleIcon = agent.role ? `<img class="agent-role-icon" src="${agent.role.displayIcon}" alt="">` : "";

    return `
        <div class="col-6 col-md-4 col-lg-3">
            <a class="agent-card" href="view.html?agentId=${agent.uuid}" style="--type: ${getAgentColor(agent)}" aria-label="${agent.displayName}, ${role}">
                <img class="agent-image" src="${agent.fullPortrait}" alt="" loading="lazy">
                <span class="agent-info">
                    ${roleIcon}
                    <span class="agent-name">${agent.displayName}</span>
                </span>
            </a>
        </div>
    `;
}

function createMapCard(map) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <button type="button" class="map-card" data-bs-toggle="modal" data-bs-target="#detailModal" data-uuid="${map.uuid}">
                <img class="map-image" src="${map.splash}" alt="" loading="lazy">
                <span class="map-info">
                    <span class="map-name">${map.displayName}</span>
                    <span class="map-sites">${map.tacticalDescription || "Special map"}</span>
                </span>
            </button>
        </div>
    `;
}

function createWeaponCard(weapon) {
    const category = getLastWord(weapon.category);
    const cost = weapon.shopData && weapon.shopData.cost > 0 ? `${weapon.shopData.cost} credits` : "Free";

    return `
        <div class="col-6 col-md-4 col-lg-3">
            <button type="button" class="weapon-card" data-bs-toggle="modal" data-bs-target="#detailModal" data-uuid="${weapon.uuid}">
                <img class="weapon-image" src="${weapon.displayIcon}" alt="" loading="lazy">
                <span class="weapon-name">${weapon.displayName}</span>
                <span class="weapon-meta">${category}</span>
                <span class="weapon-cost">${cost}</span>
            </button>
        </div>
    `;
}

function createSkinCard(skin) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <button type="button" class="skin-card" data-bs-toggle="modal" data-bs-target="#detailModal" data-uuid="${skin.uuid}">
                <span class="skin-image">${createSkinImage(skin, "")}</span>
                <span class="skin-name">${skin.displayName}</span>
                <span class="skin-meta">${getSkinMeta(skin)}</span>
            </button>
        </div>
    `;
}

function displayMessage(element, message) {
    element.innerHTML = `<div class="col-12"><p class="message">${message}</p></div>`;
}

function displaySkinDetail(skin) {
    const stats = skin.levels && skin.chromas
        ? `<dl class="stat-list mb-0">${createStat("Levels", skin.levels.length)}${createStat("Chromas", skin.chromas.length)}</dl>`
        : `<p class="message mb-0">Details are not available.</p>`;

    document.getElementById("detailTitle").textContent = skin.displayName;
    document.getElementById("detailBody").innerHTML = `
        <div class="skin-preview">${createSkinImage(skin, skin.displayName)}</div>
        ${stats}
    `;
}

// Shows the first, last and nearby pages only
function displayPagination(element, currentPage, totalPages) {
    const prevClass = currentPage === 1 ? "disabled" : "";
    const nextClass = currentPage === totalPages ? "disabled" : "";
    let lastShown = 0;
    let content = `<li class="page-item ${prevClass}"><button class="page-link" data-page="prev">Previous</button></li>`;

    for (let page = 1; page <= totalPages; page++) {
        const isEdge = page === 1 || page === totalPages;
        const isNear = Math.abs(page - currentPage) <= 2;

        if (!isEdge && !isNear) {
            continue;
        }

        if (page - lastShown > 1) {
            content += `<li class="page-item disabled"><span class="page-link">&hellip;</span></li>`;
        }

        const activeClass = page === currentPage ? "active" : "";
        content += `<li class="page-item ${activeClass}"><button class="page-link" data-page="${page}">${page}</button></li>`;
        lastShown = page;
    }

    content += `<li class="page-item ${nextClass}"><button class="page-link" data-page="next">Next</button></li>`;
    element.innerHTML = content;
}

function getNewPage(button, currentPage, totalPages) {
    const page = button.dataset.page;

    if (page === "prev") {
        return Math.max(currentPage - 1, 1);
    }

    if (page === "next") {
        return Math.min(currentPage + 1, totalPages);
    }

    return Number(page);
}

// Events
// Error events do not bubble, so this listens in the capture phase
document.addEventListener("error", (event) => {
    const image = event.target;
    const box = image.tagName === "IMG" ? image.closest(".skin-image, .skin-preview") : null;

    if (box) {
        box.innerHTML = `<span class="message">Image is not available.</span>`;
    }
}, true);

// Start
document.getElementById("footerYear").textContent = new Date().getFullYear();