// Variables
var searchInput = document.getElementById("searchTerm");
var searchButton = document.getElementById("searchButton");
var resultContainer = document.getElementById("resultContainer");
var typeClass = {
  Fighter: "fighter-bg",
  Mage: "mage-bg",
  Assassin: "assassin-bg",
  Tank: "tank-bg",
  Support: "support-bg",
  Marksman: "marksman-bg",
};

// Functions
function displayMessage(message) {
  resultContainer.innerHTML =
    `
        <div class="col-12 text-center">
            <p class="search-message mt-4">` +
    message +
    `</p>
        </div>
    `;
}

function displayHint() {
  displayMessage(
    'Type a champion name above to start, for example "<span class="search-term">Ahri</span>" or "<span class="search-term">Garen</span>".',
  );
}

function displayNoResults(searchTerm) {
  resultContainer.innerHTML = `
        <div class="col-12 text-center">
            <p class="search-message mt-4">No League of Legends champion found for "<span class="search-term" id="searchTermText"></span>".</p>
            <p class="search-message-note">This site only lists League of Legends champions. Check the spelling or browse the full list below.</p>
            <a class="btn search-message-btn" href="champions.html">Browse all champions</a>
        </div>
    `;

  // textContent keeps typed text from running as HTML
  document.getElementById("searchTermText").textContent = searchTerm;
}

async function searchChampion() {
  var rawTerm = searchInput.value.trim();
  var searchTerm = rawTerm.toLowerCase();
  var content = "";

  if (searchTerm === "") {
    displayHint();
    return;
  }

  var response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json",
  );
  var data = await response.json();
  var champions = Object.values(data.data);

  var results = champions.filter((champion) => {
    return (
      champion.id.toLowerCase().includes(searchTerm) ||
      champion.name.toLowerCase().includes(searchTerm)
    );
  });

  if (results.length === 0) {
    displayNoResults(rawTerm);
    return;
  }

  results.forEach((champion) => {
    var bgClass = typeClass[champion.tags[0]] || "";
    var roles = champion.tags.join(", ");
    var imageUrl =
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
      champion.id +
      "_0.jpg";

    content +=
      `
            <div class="col-12 col-md-6 col-lg-4">
                <a href="view.html?championName=` +
      champion.id +
      `">
                    <div class="champion-info ` +
      bgClass +
      `">
                        <img id="championImage" src="` +
      imageUrl +
      `" alt="` +
      champion.name +
      `">
                        <h2 id="championName">` +
      champion.name +
      `</h2>
                        <p id="championDescription">` +
      champion.title +
      `</p>
                        <div id="championRoles"><strong>Role: </strong>` +
      roles +
      `</div>
                    </div>
                </a>
            </div>
        `;
  });

  resultContainer.innerHTML = content;
}

// Events
searchButton.addEventListener("click", searchChampion);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchChampion();
  }
});

// Start
displayHint();
