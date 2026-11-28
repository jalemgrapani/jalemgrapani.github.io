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
    tags: ["Manual QA Testing", "Functional Testing", "Postman"],
  },
];

// Functions
function displaySkills() {
  const skillsList = document.getElementById("skillsList");
  let html = "";

  skills.forEach((skill) => {
    let tags = "";

    skill.tags.forEach((tag) => {
      tags += `<span class="skill-tag font-monospace">${tag}</span>`;
    });

    html += `
      <div class="row-item">
        <div class="row gy-2">
          <h3 class="skill-title col-md-4 text-body-secondary fw-medium mb-0">${skill.title}</h3>
          <div class="col-md-8 d-flex flex-wrap row-gap-1 column-gap-3">${tags}</div>
        </div>
      </div>
    `;
  });

  skillsList.innerHTML = html;
}

// Events
document.addEventListener("DOMContentLoaded", displaySkills);