// Data
var brands = [
    { img: "alpinaaa.png", name: "Alpina" },
    { img: "tommyy.png", name: "Tommy Hilfiger" },
    { img: "calvinn.png", name: "Calvin Klein" },
    { img: "coachh.png", name: "Coach" },
    { img: "tissottt.png", name: "Tissot" }
];

// Variables
var container = document.getElementById("brandCardContainer");
var content = "";

// Display
brands.forEach(brand => {
    content += `
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
            <div class="cardBrand text-center w-100">
                <img src="../assets/img/` + brand.img + `" class="watchImage" alt="` + brand.name + `">
                <h4 class="brand">` + brand.name + `</h4>
            </div>
        </div>
    `;
});

container.innerHTML = content;