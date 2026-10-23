var skills = [
  {
    title: "Programming & Web Development",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "WordPress"]
  },
  {
    title: "Database",
    tags: ["MySQL"]
  },
  {
    title: "Development Tools",
    tags: ["Git", "GitHub", "Visual Studio Code", "XAMPP", "Docker", "LocalWP"]
  },
  {
    title: "UI/UX & Design",
    tags: ["Figma", "Canva"]
  },
  {
    title: "Testing & QA",
    tags: ["Manual QA Testing", "Functional Testing"]
  }
];

function displaySkills() {
  var skillsList = document.getElementById("skillsList");
  if (skillsList === null) {
    return;
  }

  for (var i = 0; i < skills.length; i++) {
    var tagsMarkup = "";

    for (var j = 0; j < skills[i].tags.length; j++) {
      tagsMarkup += `<span class="skill-tag">` + skills[i].tags[j] + `</span>`;
    }

    var skillBox = document.createElement("div");
    skillBox.className = "skill-box";

    skillBox.innerHTML = `
      <h3 class="skill-title">` + skills[i].title + `</h3>
      <div class="tag-list">` + tagsMarkup + `</div>
    `;

    skillsList.appendChild(skillBox);
  }
}

document.addEventListener("DOMContentLoaded", displaySkills);