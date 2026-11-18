// Variables
const params = new URLSearchParams(window.location.search);
const agentId = params.get("agentId");
const agentStage = document.getElementById("agentStage");
const agentImage = document.getElementById("agentImage");
const agentBackground = document.getElementById("agentBackground");
const agentName = document.getElementById("agentName");
const agentRole = document.getElementById("agentRole");
const agentRoleIcon = document.getElementById("agentRoleIcon");
const agentDescription = document.getElementById("agentDescription");
const abilityContainer = document.getElementById("abilityContainer");
const abilityKeys = {
    Grenade: "C",
    Ability1: "Q",
    Ability2: "E",
    Ultimate: "X",
};

// Functions
function displayAbilities(abilities) {
    const slots = Object.keys(abilityKeys);
    const visibleAbilities = slots
        .map((slot) => abilities.find((ability) => ability.slot === slot))
        .filter((ability) => ability && ability.displayIcon);

    abilityContainer.innerHTML = visibleAbilities
        .map((ability) => `
            <div class="ability-row">
                <span class="keycap">${abilityKeys[ability.slot]}</span>
                <img class="ability-icon" src="${ability.displayIcon}" alt="">
                <div class="ability-info">
                    <h3 class="ability-name">${ability.displayName}</h3>
                    <p class="ability-text">${ability.description}</p>
                </div>
            </div>
        `)
        .join("");
}

async function loadAgent() {
    if (!agentId) {
        agentName.textContent = "No agent selected";
        agentDescription.textContent = "Pick an agent from the Agents page.";
        return;
    }

    try {
        const agent = await getAgent(agentId);

        document.title = `${agent.displayName} | Loadout`;
        agentName.textContent = agent.displayName;
        agentDescription.textContent = agent.description;
        agentImage.src = agent.fullPortrait;
        agentImage.alt = agent.displayName;
        agentBackground.src = agent.background;
        agentStage.style.setProperty("--type", getAgentColor(agent));

        if (agent.role) {
            agentRole.textContent = agent.role.displayName;
            agentRoleIcon.src = agent.role.displayIcon;
        }

        displayAbilities(agent.abilities);
    } catch (error) {
        console.error(error.message);
        agentName.textContent = "Agent not found";
        agentDescription.textContent = "Could not load this agent. Go back to the Agents page and try again.";
    }
}

// Start
loadAgent();