// Variables
const container = document.getElementById("eventContainer");

// Functions
async function loadEvents() {
    try {
        const events = await getEvents();

        container.innerHTML = events.map(createEventRow).join("");
    } catch (error) {
        console.error(error.message);
        displayMessage(container, "Could not load events. Check your connection and refresh the page.");
    }
}

// Start
loadEvents();