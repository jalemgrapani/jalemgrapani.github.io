// Data
const skills = [
  {
    title: "Programming & Web Development",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "WordPress"],
  },
  {
    title: "Database",
    tags: ["MySQL"],
  },
  {
    title: "Development Tools",
    tags: ["Git", "GitHub", "Visual Studio Code", "XAMPP", "Docker", "LocalWP"],
  },
  {
    title: "UI/UX & Design",
    tags: ["Figma", "Canva"],
  },
  {
    title: "Testing & QA",
    tags: ["Manual QA Testing", "Functional Testing"],
  },
];

// Functions
function displaySkills() {
  const skillsList = document.getElementById("skillsList");

  if (skillsList === null) {
    return;
  }

  skills.forEach((skill) => {
    let tags = "";

    skill.tags.forEach((tag) => {
      tags += `<span class="skill-tag">${tag}</span>`;
    });

    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";
    skillBox.innerHTML = `
      <h3 class="skill-title">${skill.title}</h3>
      <div class="tag-list">${tags}</div>
    `;

    skillsList.appendChild(skillBox);
  });
}

// Events
document.addEventListener("DOMContentLoaded", displaySkills);