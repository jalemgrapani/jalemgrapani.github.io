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

function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function getEventStatus(event) {
    const now = Date.now();

    if (now < new Date(event.startTime)) {
        return "Upcoming";
    }

    if (now > new Date(event.endTime)) {
        return "Ended";
    }

    return "Live";
}

function createAgentCard(agent, index) {
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

function createSkinRow(skin) {
    const levels = getCountText(skin.levels.length, "level");
    const chromas = getCountText(skin.chromas.length, "chroma");

    return `
        <div class="col-12 col-lg-6">
            <div class="skin-row">
                <div class="skin-image">
                    <img src="${skin.displayIcon}" alt="${skin.displayName}" loading="lazy">
                </div>
                <div>
                    <h2 class="skin-name">${skin.displayName}</h2>
                    <p class="skin-meta mb-0">${levels} and ${chromas}</p>
                </div>
            </div>
        </div>
    `;
}

function createModeRow(mode) {
    const icon = mode.displayIcon ? `<img class="mode-icon" src="${mode.displayIcon}" alt="">` : "";
    const duration = mode.duration ? `<p class="mode-meta mb-0">${mode.duration}</p>` : "";

    return `
        <div class="col-12 col-lg-6">
            <div class="mode-row">
                ${icon}
                <div>
                    <h2 class="mode-name">${mode.displayName}</h2>
                    <p class="mode-text">${mode.description || "No description available."}</p>
                    ${duration}
                </div>
            </div>
        </div>
    `;
}

function createEventRow(event) {
    const status = getEventStatus(event);

    return `
        <div class="col-12">
            <div class="event-row">
                <span class="event-dates">${formatDate(event.startTime)} to ${formatDate(event.endTime)}</span>
                <h2 class="event-name">${event.displayName}</h2>
                <span class="event-status event-${status.toLowerCase()}">${status}</span>
            </div>
        </div>
    `;
}

function createLinkRow(name, type, link) {
    return `
        <a class="result-link" href="${link}">
            <span class="result-name">${name}</span>
            <span class="result-type">${type}</span>
        </a>
    `;
}

function displayMessage(element, message) {
    element.innerHTML = `<div class="col-12"><p class="message">${message}</p></div>`;
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

// Start
document.getElementById("footerYear").textContent = new Date().getFullYear();