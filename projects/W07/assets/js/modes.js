// Variables
const container = document.getElementById("modeContainer");

// Functions
async function loadModes() {
    try {
        const modes = await getModes();

        container.innerHTML = modes.map(createModeRow).join("");
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load game modes. Check your connection and refresh the page.");
    }
}

// Start
loadModes();