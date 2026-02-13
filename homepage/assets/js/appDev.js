var appProjects = [
    {
        title: "JWatch Store",
        desc: "Multi-brand watch e-commerce site using MVC architecture.",
        tags: ["HTML", "CSS", "Bootstrap", "PHP"],
        image: "homepage/assets/img/appDev1.png",
        liveDemo: "ADET/A02/index.php",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/ADET/A02"
    },
    {
        title: "Tommy Hilfiger Showcase",
        desc: "Bento-style watch showcase website with glassmorphism design.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "homepage/assets/img/appDev2.png",
        liveDemo: "ADET/A03/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/ADET/A03"
    },
    {
        title: "J.CO Philippines (Front-end)",
        desc: "Point-of-Sale system for J.CO Donuts & Coffee.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "JSON"],
        image: "homepage/assets/img/appDev3.png",
        liveDemo: "ADET/A04/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/ADET/A04"
    },
    {
        title: "J.CO Philippines (Back-end)",
        desc: "Point-of-Sale system for J.CO Donuts & Coffee.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        image: "homepage/assets/img/appDev3.png",
        liveDemo: "ADET/A06/A06_FE/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/ADET/A06"
    },
    {
        title: "Palawan Tourists Spots",
        desc: "Showcases featured tourist destinations in Palawan.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "homepage/assets/img/appDev4.png",
        liveDemo: "ADET/A07/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/ADET/A07"
    }
];

function loadAppProjects() {
    var container = document.getElementById("projectContainer");
    container.innerHTML = "";

    setActiveButton("appBtn", "webBtn");
    
    var html = "";

    for (var i = 0; i < appProjects.length; i += 2) {
        html += `<div class="row justify-content-center g-3">`;
        for (var j = 0; j < 2; j++) {
            if (i + j < appProjects.length) {
                var card = appProjects[i + j];
                var tagHTML = "";
                for (var k = 0; k < card.tags.length; k++) {
                    tagHTML += `<span class="badge mx-1">` + card.tags[k] + `</span>`;
                }

                html += `
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9 d-flex justify-content-center">
                    <div class="card project-card"
                        onmouseenter="addHoverEffect(this)"
                        onmouseleave="removeHoverEffect(this)">

                        <img src="` + card.image + `" class="card-img-top mb-3">

                        <div class="card-body text-center">
                            <h5 class="card-title">` + card.title + `</h5>
                            <p class="card-text">` + card.desc + `</p>
                            <div>` + tagHTML + `</div>

                            <div class="mt-3 d-flex justify-content-center gap-2">
                                <a href="` + card.liveDemo + `" target="_blank" class="demo-button btn">
                                    <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> Site
                                </a>
                                <a href="` + card.code + `" target="_blank" class="code-button btn">
                                    <i class="fa-brands fa-github me-1"></i> Code
                                </a>
                            </div>
                        </div>

                    </div>
                </div>`;
            }
        }

        html += `</div>`;
    }

    container.innerHTML = html;
}

loadAppProjects();
