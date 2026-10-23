// Variables
var months = document.querySelectorAll(".month");
var seasonNow = document.getElementById("seasonNow");

// Functions
function markCurrentMonth() {
    var number = new Date().getMonth();
    var month = months[number];

    month.classList.add("current");
    seasonNow.textContent = "Right now it is " + monthNames[number] + ", which is in the " + month.dataset.season + " period.";
}

// Start
markCurrentMonth();