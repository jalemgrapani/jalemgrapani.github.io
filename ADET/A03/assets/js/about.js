 var brands = [
            { img: "alpinaaa.png", name: "Alpina" },
            { img: "tommyy.png", name: "Tommy Hilfiger" },
            { img: "calvinn.png", name: "Calvin Klein" },
            { img: "coachh.png", name: "Coach" },
            { img: "tissottt.png", name: "Tissot" }
        ];

        var container = document.getElementById("brandCardContainer");

        for (var i = 0; i < brands.length; i++) {
            var container = document.getElementById("brandCardContainer");
            container.innerHTML += `
            <div class='col-6 col-md-4 col-lg-4 mb-4'>
                <div class='cardBrand d-flex flex-column align-items-center justify-content-center text-center p-4' style='border-radius: 10px;'>
                <img src='../assets/img/` + brands[i].img + `' class='watchImage img-fluid' style='max-width: 150px; height: auto;'>
                <h4 class='brand text-dark mt-3' style='font-size: 1.5rem;'>` + brands[i].name + `</h4>
                </div>
            </div>`;
        }