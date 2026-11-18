// Variables
const apiUrl = "https://valorant-api.com/v1";

// Functions
async function getData(path) {
    const response = await fetch(`${apiUrl}${path}`);

    if (!response.ok) {
        throw new Error("Unable to load data.");
    }

    const { data } = await response.json();

    return data;
}

async function getAgents() {
    const agents = await getData("/agents?isPlayableCharacter=true");

    return agents.sort((a, b) => a.displayName.localeCompare(b.displayName));
}

function getAgent(id) {
    return getData(`/agents/${id}`);
}

async function getSkins() {
    const skins = await getData("/weapons/skins");

    // Skins without an icon are placeholders
    return skins.filter((skin) => skin.displayIcon);
}

async function getMaps() {
    const maps = await getData("/maps");

    return maps.filter((map) => map.splash);
}

async function getWeapons() {
    const weapons = await getData("/weapons");

    return weapons.sort((a, b) => a.displayName.localeCompare(b.displayName));
}

async function getModes() {
    const modes = await getData("/gamemodes");

    return modes.sort((a, b) => a.displayName.localeCompare(b.displayName));
}

async function getEvents() {
    const events = await getData("/events");

    return events.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
}