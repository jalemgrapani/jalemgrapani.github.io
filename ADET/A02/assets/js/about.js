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
    <div class='col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center'>
        <div class='cardBrand text-center w-100'>
            <img src='../assets/img/` + brands[i].img + `' class='watchImage' alt='` + brands[i].name + `'>
            <h4 class='brand'>` + brands[i].name + `</h4>
        </div>
    </div>`;
}