var webProjects = [
    { 
        title: "Realme C33 Showcase", 
        desc: "Showcases Realme C33 smartphone specs, features, battery, and colors.", 
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"], 
        image: "homepage/assets/img/webDev1.png",
        liveDemo: "WD/Activity 4/index.html", 
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%204"
    },
    { 
        title: "Japan Tourism Showcase", 
        desc: "Highlights Japan's popular destinations.", 
        tags: ["HTML", "CSS", "Bootstrap"], 
        image: "homepage/assets/img/webDev2.png",
        liveDemo: "WD/Activity 5/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%205"
    },
    { 
        title: "Filipino Cuisine Gallery", 
        desc: "Showcases traditional Filipino dishes with cards and carousel.", 
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"], 
        image: "homepage/assets/img/webDev3.png",
        liveDemo: "WD/Activity 6/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%206"
    },
    { 
        title: "League of Legends Champion Info", 
        desc: "Displays LoL champions, search, and detailed info using Riot API.", 
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"], 
        image: "homepage/assets/img/webDev4.png",
        liveDemo: "WD/Activity 7/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%207"
    },
    { 
        title: "League of Legends Info Website", 
        desc: "Provides info about LoL, champions, news, and related games.", 
        tags: ["HTML", "CSS", "Bootstrap"], 
        image: "homepage/assets/img/webDev5.png",
        liveDemo: "WD/Activity 8/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%208"
    },
    { 
        title: "Buildings & Architecture Parallax", 
        desc: "Parallax website showcasing Philippine architecture.", 
        tags: ["HTML", "CSS", "JavaScript"], 
        image: "homepage/assets/img/webDev6.png",
        liveDemo: "WD/Activity 9/index.html",
        code: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/WD/Activity%209"
    }
];

function loadWebProjects() {
    var container = document.getElementById("projectContainer");
    container.innerHTML = "";

    setActiveButton("webBtn", "appBtn");

    var html = "";
    
    for (var i = 0; i < webProjects.length; i += 2) {
        html += `<div class="row justify-content-center g-3">`;
        for (var j = 0; j < 2; j++) {
            if (i + j < webProjects.length) {
                var card = webProjects[i + j];
                var tagHTML = "";
                for (var k = 0; k < card.tags.length; k++) {
                    tagHTML += `<span class="badge mx-1">` + card.tags[k] + `</span>`;
                }
                html += `
                <div class="col-xl-4 col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
                    <div class="card project-card"
                        onmouseenter="addHoverEffect(this)"
                        onmouseleave="removeHoverEffect(this)">
                        <img src="` + card.image + `" class="card-img-top mb-3" alt="` + card.title + `">
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

// loadWebProjects();
