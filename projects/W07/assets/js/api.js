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

function getSkins() {
    return getData("/weapons/skins");
}

async function getMaps() {
    const maps = await getData("/maps");

    return maps.filter((map) => map.splash);
}

async function getWeapons() {
    const weapons = await getData("/weapons");

    return weapons.sort((a, b) => a.displayName.localeCompare(b.displayName));
}