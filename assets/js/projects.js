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
const track = document.getElementById("deckTrack");
const deckCount = document.getElementById("deckCount");
const prevButton = document.getElementById("deckPrev");
const nextButton = document.getElementById("deckNext");
const detailsImage = document.getElementById("detailsImage");
const detailsTitle = document.getElementById("detailsTitle");
const detailsDescription = document.getElementById("detailsDescription");
const detailsTech = document.getElementById("detailsTech");
const detailsModal = new bootstrap.Modal(document.getElementById("detailsModal"));
let selectedIndex = 3;

// Functions
function shortenText(text, max) {
  if (text.length > max) {
    return `${text.slice(0, max).trim()}...`;
  }

  return text;
}

function createTags(tech) {
  let tags = "";

  tech.forEach((item) => {
    tags += `<span class="skill-tag font-monospace">${item}</span>`;
  });

  return tags;
}

function createLink(url, icon, label) {
  const classes = "small-action d-inline-flex align-items-center gap-2 text-nowrap";
  const content = `<i class="bi ${icon}"></i>${label}`;

  // Disabled link
  if (url === "") {
    return `<a aria-disabled="true" tabindex="-1" class="${classes} text-body-secondary opacity-50 pe-none">${content}</a>`;
  }

  return `<a href="${url}" target="_blank" rel="noopener" class="card-action ${classes}">${content}</a>`;
}

function showDetails(project) {
  detailsImage.src = project.image;
  detailsImage.alt = project.alt;
  detailsTitle.textContent = project.title;
  detailsDescription.textContent = project.description;
  detailsTech.innerHTML = createTags(project.tech);

  detailsModal.show();
}

function selectProject(index, behavior = "smooth") {
  const cards = track.children;

  if (index < 0 || index >= cards.length) {
    return;
  }

  selectedIndex = index;

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("selected", i === index);
  }

  // Center card
  const card = cards[index];
  const center = (track.clientWidth - card.offsetWidth) / 2;

  track.scrollTo({ left: card.offsetLeft - center, behavior });

  deckCount.textContent = `${index + 1} / ${cards.length}`;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === cards.length - 1;
}

function handleCardClick(event, card, index) {
  const isSelected = card.classList.contains("selected");

  // Block links
  if (!isSelected) {
    event.preventDefault();
  }

  // Open details
  if (isSelected && event.target.closest(".card-thumb")) {
    showDetails(projects[index]);
  }

  selectProject(index);
}

function handleCardKey(event, card, index) {
  // Ignore link keys
  if (event.target !== card) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    // Open details
    if (card.classList.contains("selected")) {
      showDetails(projects[index]);
    } else {
      selectProject(index);
    }
  }
}

function createCard(project, index) {
  const card = document.createElement("article");

  card.className = "play-card position-relative d-flex flex-column flex-shrink-0 p-3";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="card-thumb position-relative overflow-hidden">
      <img class="d-block w-100 h-100 object-fit-cover" src="${project.image}" alt="${project.alt}" />
      <span class="thumb-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 font-monospace text-white"><i class="bi bi-arrows-fullscreen"></i> View details</span>
    </div>
    <h4 class="card-title overflow-hidden">${project.title}</h4>
    <p class="card-description overflow-hidden text-body-secondary">${shortenText(project.description, 130)}</p>
    <div class="d-flex flex-wrap gap-2 mt-auto">
      ${createLink(project.docs, "bi-github", "Documentation")}
      ${createLink(project.site, "bi-globe2", "View Site")}
    </div>
  `;

  card.addEventListener("click", (event) => {
    handleCardClick(event, card, index);
  });

  card.addEventListener("keydown", (event) => {
    handleCardKey(event, card, index);
  });

  return card;
}

function renderProjects() {
  projects.forEach((project, index) => {
    track.appendChild(createCard(project, index));
  });

  selectProject(selectedIndex, "auto");
}

// Events
prevButton.addEventListener("click", () => {
  selectProject(selectedIndex - 1);
});

nextButton.addEventListener("click", () => {
  selectProject(selectedIndex + 1);
});

track.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    selectProject(selectedIndex + 1);
  } else if (event.key === "ArrowLeft") {
    selectProject(selectedIndex - 1);
  }
});

document.addEventListener("DOMContentLoaded", renderProjects);