// Data
const projects = [
  {
    title: "Easechedemy",
    description:
      "A web-based class scheduling system developed for Almond Academy Foundation Inc. It helps manage class schedules and generates schedules based on teachers' subject preferences.",
    image: "assets/img/Easechedemy.png",
    alt: "Screenshot of the Easechedemy class scheduling system",
    docs: "https://github.com/StackedFrogs/Easechedemy.com",
    site: "",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
  },
  {
    title: "Eventure",
    description:
      "A web-based event management system that allows users to create, browse, and manage event information through an organized interface.",
    image: "assets/img/Eventure.png",
    alt: "Screenshot of the Eventure event management system",
    docs: "https://github.com/pupstc-student-academic-works/adet-grp-7",
    site: "",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "J.CO Donuts & Coffee POS System",
    description:
      "A front-end ordering system for J.CO Donuts & Coffee that displays donuts, coffee, beverages, and other menu items by category. Users can select products, manage quantities, remove items, and view an order summary with an automatically calculated total.",
    image: "assets/img/JCO POS.png",
    alt: "Screenshot of the J.CO Donuts & Coffee ordering system",
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A03",
    site: "projects/A03/index.html",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSON"],
  },
  {
    title: "League of Legends Champion API Website",
    description:
      "A website that uses the Riot Games Data Dragon API to retrieve and display League of Legends champion information. It includes champion browsing, name-based search, pagination, and individual champion profiles with images and lore.",
    image: "assets/img/LOL.png",
    alt: "Screenshot of the League of Legends champion website",
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W04",
    site: "projects/W04/index.html",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "League of Legends API"],
  },
  {
    title: "Valorant API Website",
    description:
      "A website that uses the Valorant API to display agents with their roles and abilities, along with maps, weapons, and skins.",
    image: "assets/img/Valorant.png",
    alt: "Screenshot of the Valorant API website",
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W07",
    site: "projects/W07/index.html",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Valorant API"],
  },
  {
    title: "JWatch Store",
    description:
      "An online watch store featuring product collections, brand pages, store information, and a shopping cart.",
    image: "assets/img/JWatch.png",
    alt: "Screenshot of the JWatch Store website",
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A01",
    site: "",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSON", "PHP"],
  },
];

// Variables
let selectedIndex = 3;
let detailsModal;

// Functions
function shortenText(text, max) {
  if (text.length > max) {
    return `${text.slice(0, max).trim()}...`;
  }

  return text;
}

function createLink(url, icon, label) {
  const content = `<i class="bi ${icon}"></i> ${label}`;

  // Link with no url is disabled
  if (url === "") {
    return `<a aria-disabled="true" tabindex="-1" class="card-action small-action disabled-action">${content}</a>`;
  }

  return `<a href="${url}" target="_blank" rel="noopener" class="card-action small-action">${content}</a>`;
}

function createTags(tech) {
  return tech.map((item) => `<span class="skill-tag">${item}</span>`).join("");
}

function createCard(project) {
  const card = document.createElement("article");

  card.className = "play-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${project.image}" alt="${project.alt}" />
      <span class="thumb-overlay"><i class="bi bi-arrows-fullscreen"></i> View details</span>
    </div>
    <h4 class="card-title">${project.title}</h4>
    <p class="card-description">${shortenText(project.description, 130)}</p>
    <div class="card-actions">
      ${createLink(project.docs, "bi-github", "Documentation")}
      ${createLink(project.site, "bi-globe2", "View Site")}
    </div>
  `;

  return card;
}

function createModal() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title experience-title" id="detailsTitle"></h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="d-block w-100 h-auto border rounded mb-4" id="detailsImage" />
            <p class="text-body-secondary mb-4" id="detailsDescription"></p>
            <h4 class="skill-title">Technologies Used</h4>
            <div class="tag-list" id="detailsTech"></div>
          </div>
        </div>
      </div>
    </div>
  `);

  detailsModal = new bootstrap.Modal(document.getElementById("detailsModal"));
}

function showDetails(project) {
  const image = document.getElementById("detailsImage");

  image.src = project.image;
  image.alt = project.alt;

  document.getElementById("detailsTitle").textContent = project.title;
  document.getElementById("detailsDescription").textContent = project.description;
  document.getElementById("detailsTech").innerHTML = createTags(project.tech);

  detailsModal.show();
}

function selectProject(index, behavior = "smooth") {
  const track = document.getElementById("deckTrack");
  const cards = track.children;

  if (index < 0 || index >= cards.length) {
    return;
  }

  selectedIndex = index;

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("selected", i === index);
  }

  // Scroll the selected card to the center
  const card = cards[index];
  const center = (track.clientWidth - card.offsetWidth) / 2;

  track.scrollTo({
    left: card.offsetLeft - center,
    behavior,
  });

  document.getElementById("deckCount").textContent = `${index + 1} / ${cards.length}`;
  document.getElementById("deckPrev").disabled = index === 0;
  document.getElementById("deckNext").disabled = index === cards.length - 1;
}

function addCardEvents(card, index) {
  card.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    const thumb = event.target.closest(".card-thumb");
    const isSelected = card.classList.contains("selected");

    // Links only work on the selected card
    if (link && !isSelected) {
      event.preventDefault();
    }

    selectProject(index);

    // Clicking the image of the selected card opens the details
    if (thumb && isSelected) {
      showDetails(projects[index]);
    }
  });

  card.addEventListener("keydown", (event) => {
    if (event.target !== card) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      // Enter on the selected card opens the details
      if (card.classList.contains("selected")) {
        showDetails(projects[index]);
      } else {
        selectProject(index);
      }
    }
  });
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");

  grid.className = "project-deck";

  grid.innerHTML = `
    <div class="deck-header">
      <span class="deck-count" id="deckCount"></span>
      <div class="deck-controls">
        <button type="button" class="deck-btn" id="deckPrev" aria-label="Previous project">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button type="button" class="deck-btn" id="deckNext" aria-label="Next project">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
    <div class="deck-track" id="deckTrack"></div>
  `;

  const track = document.getElementById("deckTrack");

  projects.forEach((project, index) => {
    const card = createCard(project);

    addCardEvents(card, index);
    track.appendChild(card);
  });

  createModal();

  document.getElementById("deckPrev").addEventListener("click", () => {
    selectProject(selectedIndex - 1);
  });

  document.getElementById("deckNext").addEventListener("click", () => {
    selectProject(selectedIndex + 1);
  });

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      selectProject(selectedIndex + 1);
    } else if (event.key === "ArrowLeft") {
      selectProject(selectedIndex - 1);
    }
  });

  selectProject(selectedIndex, "auto");
}

// Events
document.addEventListener("DOMContentLoaded", renderProjects);