var skills = [
    {
        title: "Web Development",
        desc: "Building responsive and interactive web applications using modern technologies.",
        icon: "fa-solid fa-code",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"]
    },
    {
        title: "Database Technologies",
        desc: "Designing and managing relational databases to store, retrieve, and manipulate data efficiently.",
        icon: "fa-solid fa-database",
        tags: ["MySQL", "SQL"]
    },
    {
        title: "Tools & Environments",
        desc: "Leveraging industry-standard development tools and version control systems for efficient workflow.",
        icon: "fa-solid fa-wrench",
        tags: ["XAMPP", "VS Code", "Git", "GitHub"]
    },
    {
        title: "Design Tools",
        desc: "Creating visually appealing designs and prototypes that enhance user interface and experience.",
        icon: "fa-solid fa-palette",
        tags: ["Figma", "Canva"]
    }
];

function loadSkills() {
    var container = document.getElementById("skillsContainer");
    container.innerHTML = "";
    var html = "";

    for (var i = 0; i < skills.length; i += 2) {
        html += `<div class="row justify-content-center g-4 mb-3">`;

        for (var j = 0; j < 2; j++) {
            if (i + j < skills.length) {
                var skill = skills[i + j];
                var tagHTML = "";
                for (var k = 0; k < skill.tags.length; k++) {
                    tagHTML += `<span class="badge">` + skill.tags[k] + `</span>`;
                }

                html += `<div class="col-xl-5 col-lg-5 col-md-6 col-sm-9 d-flex justify-content-center">
                    <div class="card w-100" style="max-width: 550px;">
                        <div class="card-body">
                            <div class="skill-box"><i class="` + skill.icon + `"></i></div>
                            <h5 class="card-title">` + skill.title + `</h5>
                            <p class="card-text">` + skill.desc + `</p>
                            <div>` + tagHTML + `</div>
                        </div>
                    </div>
                </div>`;
            }
        }

        html += `</div>`;
    }

    container.innerHTML = html;
}

loadSkills();
