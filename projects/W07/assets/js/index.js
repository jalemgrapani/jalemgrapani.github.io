// Variables
const hero = document.getElementById("hero");
const heroAgent = document.getElementById("heroAgent");
const heroCaption = document.getElementById("heroCaption");

// Functions
function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

async function displayHero() {
    try {
        const [agents, maps] = await Promise.all([getAgents(), getMaps()]);
        const agent = getRandomItem(agents);
        const map = getRandomItem(maps);

        hero.style.setProperty("--splash", `url("${map.splash}")`);
        heroAgent.src = agent.fullPortrait;
        heroAgent.alt = agent.displayName;
        heroCaption.textContent = `${agent.displayName} on ${map.displayName}`;
    } catch (error) {
        console.error(error.message);
    }
}

// Start
displayHero();