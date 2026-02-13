var names = ["Adobong Baboy", "Arroz Caldo",
    "Bicol Express", "Kaldereta", "Kare-kare",
    "Lechong Kawali", "Lumpia", "Pinakbet",
    "Sinigang na Baboy", "Sisig",
    "Tinolang Manok", "Sinigang na Hipon", "Laing", "Ginataang Alimango", "Lechong Paksiw", "Beef Bulalo"];

var pics = ["adobongBaboy.jpg", "arrozCaldo.jpg",
    "bicolExpress.jpg", "kaldereta.jpg", "karekare.jpg",
    "lechonKawali.jpg", "lumpia.jpg", "pinakbet.jpg",
    "sinigang.jpg", "sisig.jpg", "tinola.jpg",
    "sinigang2.jpg", "laing.jpg", "ginataangAlimango.jpg", "lechongPaksiw.jpg", "beefBulalo.jpg"];

for (var i = 0; i < names.length; i++) {
    var myContainer = document.getElementById('cardContainer');
    myContainer.innerHTML += `
    <div class='col-xl-3 col-md-4 col-sm-6 col-12'>
      <div class='card my-3' id='c` + i + `' 
           onmouseenter='addHoverEffect("c` + i + `")' 
           onmouseleave='removeHoverEffect("c` + i + `")'>
        <img src='assets/img/` + pics[i] + `' class='card-img-top'>
        <div class='card-body'>
          <h5 class='card-title'>` + names[i] + `</h5>
          <p class='card-text'><a href='#'></a></p>
        </div>
      </div>
    </div>`;
}

function addHoverEffect(id) {
    var card = document.getElementById(id);
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
}

function removeHoverEffect(id) {
    var card = document.getElementById(id);
    card.style.transform = "scale(1)";
}

var display = "none";
function expandContent() {
    var footer = document.getElementById("footer");
    var btnExpand = document.getElementById("btnExpand");

    if (display == "none") {
        footer.style.display = "block";
        display = "block";
        btnExpand.innerHTML = "CLOSE";
        footerExpand.style.display = "block"
    } else {
        footer.style.display = "none";
        display = "none";
        btnExpand.innerHTML = "OPEN";
        footerExpand.style.display = "none"
    }
}

var colorMode = "light";
function changeColorMode() {
    if (colorMode == "light") {
        document.getElementById("body").setAttribute("data-bs-theme", "dark");
        document.getElementById("btnColor").innerHTML = "Light Mode";
        colorMode = "dark";
    } else {
        document.getElementById("body").setAttribute("data-bs-theme", "light");
        document.getElementById("btnColor").innerHTML = "Dark Mode";
        colorMode = "light";
    }
}
