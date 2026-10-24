// Data
var categories = [
  {
    id: "fullstack",
    label: "Full-Stack",
    icon: "bi-database",
    description: "PHP and MySQL projects with a working backend.",
  },
  {
    id: "wordpress",
    label: "WordPress",
    icon: "bi-wordpress",
    description: "Business websites built from design to launch.",
  },
  {
    id: "frontend",
    label: "Front-End",
    icon: "bi-window-stack",
    description: "Websites and interfaces built with HTML, CSS, and JavaScript.",
  },
];

var projects = [
  // Fullstack
  {
    title: "Easechedemy",
    category: "fullstack",
    description:
      "A web-based class scheduling system built for Almond Academy Foundation Inc. It considers teacher subject preferences and supports class schedule management and generation.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    action: {
      label: "Source",
      href: "https://github.com/StackedFrogs/Easechedemy.com",
      icon: "bi-code-slash",
    },
  },
  {
    title: "POS Product Management",
    category: "fullstack",
    description:
      "A point-of-sale project with a frontend interface and PHP backend files for product and category data.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    action: {
      label: "View frontend",
      href: "projects/A04/FE/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },

  // Frontend
  {
    title: "JCO Donut POS",
    category: "frontend",
    description:
      "A point-of-sale interface for browsing donut products and organizing product selections.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/A03/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Watch Store Website Design",
    category: "frontend",
    description:
      "A watch store website showcasing product collections and brand pages with a responsive layout.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/A02/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Palawan Tourism Website",
    category: "frontend",
    description:
      "A tourism website highlighting Palawan destinations through photos, destination information, and visual sections.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/A05/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Philippines Tourism Website",
    category: "frontend",
    description:
      "A tourism website showcasing destinations in the Philippines using image galleries and parallax scrolling effects.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/W06/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Filipino Food Website",
    category: "frontend",
    description:
      "A food website showcasing Filipino dishes with food images and recipe-related content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/W03/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "League of Legends Information Website",
    category: "frontend",
    description:
      "A website presenting League of Legends information with separate pages for browsing and viewing content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    action: {
      label: "View project",
      href: "projects/W04/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Realme Product Website",
    category: "frontend",
    description:
      "A product-focused website showcasing Realme devices and product features.",
    tags: ["HTML", "CSS", "Bootstrap"],
    action: {
      label: "View project",
      href: "projects/W01/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Japan Travel Website",
    category: "frontend",
    description:
      "A travel website featuring Japanese destinations and travel-related imagery.",
    tags: ["HTML", "CSS", "Bootstrap"],
    action: {
      label: "View project",
      href: "projects/W02/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
  {
    title: "Riot Games Website",
    category: "frontend",
    description:
      "A gaming website featuring Riot Games titles and related game information.",
    tags: ["HTML", "CSS", "Bootstrap"],
    action: {
      label: "View project",
      href: "projects/W05/index.html",
      icon: "bi-box-arrow-up-right",
    },
  },
];

// Variables
var selectedIndex = 6;

// Functions
function truncate(text, max) {
  if (text.length <= max) {
    return text;
  }
  return text.slice(0, max).trim() + "...";
}

function getCategory(id) {
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].id === id) {
      return categories[i];
    }
  }
  return categories[0];
}

function createCard(project, index) {
  var category = getCategory(project.category);
  var shortTitle = truncate(project.title, 40);
  var shortDescription = truncate(project.description, 150);
  var card = document.createElement("article");

  card.className = "play-card";
  card.tabIndex = 0;

  card.innerHTML =
    `
    <div class="card-corner" aria-hidden="true">
      <i class="bi ` + category.icon + `"></i>
    </div>
    <h4 class="card-title" title="` + project.title + `">` + shortTitle + `</h4>
    <p class="card-description" title="` + project.description + `">` + shortDescription + `</p>
    <a href="` + project.action.href + `" target="_blank" rel="noopener"
       class="card-action small-action d-inline-block text-decoration-none rounded-pill">
      <i class="bi ` + project.action.icon + `"></i>
      ` + project.action.label + `
    </a>
    <div class="card-corner card-corner-bottom" aria-hidden="true">
      <i class="bi ` + category.icon + `"></i>
    </div>
  `;

  // Events
  card.addEventListener("click", function () {
    selectProject(index, true);
  });

  card.querySelector(".card-action").addEventListener("click", function (event) {
    if (!card.classList.contains("selected")) {
      event.preventDefault();
    }
  });

  card.addEventListener("keydown", function (event) {
    if (event.target === card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      selectProject(index, true);
    }
  });

  return card;
}

function centerCard(index, smooth) {
  var track = document.getElementById("deckTrack");
  var card = track.children[index];
  var behavior = "auto";

  if (card === undefined) {
    return;
  }

  if (smooth) {
    behavior = "smooth";
  }

  track.scrollTo({
    left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
    behavior: behavior,
  });
}

function selectProject(index, shouldScroll) {
  var track = document.getElementById("deckTrack");
  var cards = track.children;

  if (index < 0 || index >= projects.length) {
    return;
  }

  selectedIndex = index;

  for (var i = 0; i < cards.length; i++) {
    var offset = i - index;

    if (offset > 4) {
      offset = 4;
    }
    if (offset < -4) {
      offset = -4;
    }

    cards[i].style.setProperty("--offset", offset);

    if (i === index) {
      cards[i].classList.add("selected");
      cards[i].setAttribute("aria-current", "true");
    } else {
      cards[i].classList.remove("selected");
      cards[i].removeAttribute("aria-current");
    }
  }

  document.getElementById("deckCount").textContent = index + 1 + " / " + projects.length;
  document.getElementById("deckPrev").disabled = index === 0;
  document.getElementById("deckNext").disabled = index === projects.length - 1;

  if (shouldScroll) {
    centerCard(index, true);
  }
}

function renderProjects() {
  var grid = document.getElementById("projectGrid");

  if (grid === null) {
    return;
  }

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

  var track = document.getElementById("deckTrack");

  for (var i = 0; i < projects.length; i++) {
    track.appendChild(createCard(projects[i], i));
  }

  // Events
  document.getElementById("deckPrev").addEventListener("click", function () {
    selectProject(selectedIndex - 1, true);
  });

  document.getElementById("deckNext").addEventListener("click", function () {
    selectProject(selectedIndex + 1, true);
  });

  track.addEventListener("keydown", function (event) {
    var next = selectedIndex;

    if (event.key === "ArrowRight") {
      next = selectedIndex + 1;
    } else if (event.key === "ArrowLeft") {
      next = selectedIndex - 1;
    } else {
      return;
    }

    if (next >= 0 && next < projects.length) {
      event.preventDefault();
      selectProject(next, true);
      track.children[next].focus({ preventScroll: true });
    }
  });

  selectProject(selectedIndex, false);
  centerCard(selectedIndex, false);
}

// Events
document.addEventListener("DOMContentLoaded", renderProjects);

window.addEventListener("load", function () {
  centerCard(selectedIndex, false);
});