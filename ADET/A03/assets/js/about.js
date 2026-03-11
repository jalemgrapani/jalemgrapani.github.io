var brands = [
    { img: "alpinaaa.png", name: "Alpina" },
    { img: "tommyy.png", name: "Tommy Hilfiger" },
    { img: "calvinn.png", name: "Calvin Klein" },
    { img: "coachh.png", name: "Coach" },
    { img: "tissottt.png", name: "Tissot" }
];

var container = document.getElementById("brandCardContainer");

for (var i = 0; i < brands.length; i++) {
    container.innerHTML += `
    <div class='col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center'>
        <div class='cardBrand text-center'>
            <img src='../assets/img/` + brands[i].img + `' class='watchImage'>
            <h4 class='brand text-dark'>` + brands[i].name + `</h4>
        </div>
    </div>`;
}