var watches = [
    {
        img: "tommy1.png",
        title: "Tommy Hilfiger 1710701 Men's Ionic Plated Gold Zinc Alloy Watch",
        price: "₱11,400.00"
    },
    {
        img: "tommy2.png",
        title: "Tommy Hilfiger 1710682 Men's Stainless Steel and dark Dial Watch",
        price: "₱11,400.00"
    },
    {
        img: "tommy3.png",
        title: "Tommy Hilfiger 1710702 Men's Ionic Plated Gold Zinc Alloy Watch",
        price: "₱9,400.00"
    },
    {
        img: "tommy4.png",
        title: "Tommy Hilfiger 1710686 Men's Stainless Steel and Green Dial Watch",
        price: "₱11,400.00"
    },
    {
        img: "tommy5.png",
        title: "Tommy Hilfiger 1792192 Men's Two Tone Stainless Steel Watch",
        price: "₱8,700.00"
    },
    {
        img: "tommy6.png",
        title: "Tommy Hilfiger 1710700 Men's Two Tone Zinc Alloy Watch",
        price: "₱11,400.00"
    }
];

var container = document.getElementById("watchCardContainer");

for (var i = 0; i < watches.length; i++) {
    container.innerHTML += `<div class="col-xl-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <div class="cardBrand rounded-5 d-flex flex-column align-items-center my-2" style="height: auto; max-width: 300px; overflow: hidden;">
            <img src="../assets/img/` + watches[i].img + `" class="watchImage3 p-3 img-fluid">
            <div class="card-description text-center p-3">
                <h6 class="text-dark">` + watches[i].title + `</h6>
                <h4 class="price text-dark">` + watches[i].price + `</h4>
            </div>
        </div>
    </div>`;
}
