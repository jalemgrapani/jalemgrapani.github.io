var skills = [
    {
        title: "Programming & web development",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "WordPress"]
    },
    {
        title: "Database",
        tags: ["MySQL"]
    },
    {
        title: "Development tools",
        tags: ["Git", "GitHub", "Visual Studio Code", "XAMPP", "Docker", "LocalWP"]
    },
    {
        title: "UI/UX & design",
        tags: ["Figma", "Canva"]
    },
    {
        title: "Testing & QA",
        tags: ["Manual QA testing", "Functional testing"]
    }
];

function displaySkills() {
    var skillsList = document.getElementById("skillsList");

    for (var i = 0; i < skills.length; i++) {
        var skillBox = document.createElement("div");
        skillBox.className = "skill-box";

        var skillTitle = document.createElement("h3");
        skillTitle.className = "skill-title";
        skillTitle.textContent = skills[i].title;

        var tagList = document.createElement("div");
        tagList.className = "tag-list";

        for (var j = 0; j < skills[i].tags.length; j++) {
            var skillTag = document.createElement("span");
            skillTag.className = "skill-tag";
            skillTag.textContent = skills[i].tags[j];

            tagList.appendChild(skillTag);
        }

        skillBox.appendChild(skillTitle);
        skillBox.appendChild(tagList);
        skillsList.appendChild(skillBox);
    }
}

document.addEventListener("DOMContentLoaded", displaySkills);

