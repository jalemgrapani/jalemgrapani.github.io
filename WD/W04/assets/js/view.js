// Variables
var params = new URLSearchParams(window.location.search);
var championId = params.get("championName");
var championImage = document.getElementById("championImage");
var championName = document.getElementById("championName");
var championDescription = document.getElementById("championDescription");
var championRole = document.getElementById("championRole");

// Functions
async function getChampion() {
    var response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion/" + championId + ".json");
    var data = await response.json();
    var champion = data.data[championId];

    championName.textContent = champion.name;
    championImage.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg";
    championImage.alt = champion.name;
    championDescription.innerHTML = champion.lore;
    championRole.textContent = "Role: " + champion.tags[0];

    document.body.classList.add(champion.tags[0].toLowerCase() + "-bg");
}

// Start
getChampion();