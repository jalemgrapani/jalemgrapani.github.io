const projects = [
  {
    title: "Easechedemy",
    image: "images/easechedemy.jpg",
    imageAlt: "Easechedemy class scheduling system screenshot",
    description:
      "A web-based class scheduling system that factors in teacher subject preferences, built for Almond Academy Foundation Inc. Handles schedule management and automatic schedule generation.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    action: {
      label: "Source",
      href: "https://github.com/StackedFrogs/Easechedemy.com.git",
      icon: "bi-code-slash",
    },
  },
  {
    title: "GREACS Solutions Website",
    image: "images/greacs-solutions.jpg",
    imageAlt: "GREACS Solutions website screenshot",
    description:
      "A business website designed and built during my internship, from Figma mockups to a working WordPress site.",
    tags: ["WordPress", "Figma", "Canva", "LocalWP"],
    action: {
      label: "Visit site",
      href: "https://greacsolutions.com/",
      icon: "bi-box-arrow-up-right",
    },
  },
];

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  let tagsMarkup = "";
  for (let i = 0; i < project.tags.length; i++) {
    tagsMarkup += '<span class="skill-tag">' + project.tags[i] + "</span>";
  }

  card.innerHTML = `
    <div class="project-image">
      <img
        src="` + project.image + `"
        alt="` + project.imageAlt + `"
        onerror="this.parentElement.classList.add('project-image-fallback'); this.remove();"
      />
    </div>
    <div class="project-content">
      <h3 class="project-title">` + project.title + `</h3>
      <p class="project-description">` + project.description + `</p>
      <div class="tag-list">` + tagsMarkup + `</div>
      <a href="` + project.action.href + `" target="_blank" rel="noopener" class="project-action">
        <i class="bi ` + project.action.icon + `"></i>
        ` + project.action.label + `
      </a>
    </div>
  `;

  return card;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  projects.forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);