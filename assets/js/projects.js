// Data
var categories = [
  {
    id: "fullstack",
    label: "Full-Stack",
    description: "PHP and MySQL projects with a working backend.",
  },
  {
    id: "wordpress",
    label: "WordPress",
    description: "Business websites built from design to launch.",
  },
  {
    id: "frontend",
    label: "Front-End",
    description:
      "Websites and interfaces built with HTML, CSS, and JavaScript.",
  },
];

// Projects
var projects = [
  // Fullstack
  {
    title: "Easechedemy",
    category: "fullstack",
    description:
      "A web-based class scheduling system built for Almond Academy Foundation Inc. It considers teacher subject preferences and supports class schedule management and generation.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    docs: "https://github.com/StackedFrogs/Easechedemy.com",
    site: "",
  },
  {
    title: "Bookblast",
    category: "fullstack",
    description:
      "A web-based digital library system that makes reading and managing books easier. It has separate login-based admin and user sides, and supports book management through a PHP backend, including batch book handling.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    docs: "https://github.com/Pages-Beyond/BookBlast-Website",
    site: "",
  },
  {
    title: "Eventure",
    category: "fullstack",
    description:
      "A web-based event management system for creating, browsing, and managing events.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    docs: "https://github.com/pupstc-student-academic-works/adet-grp-7",
    site: "",
  },
  {
    title: "POS Product Management",
    category: "fullstack",
    description:
      "A point-of-sale project with a frontend interface and PHP backend files for product and category data.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A04",
    site: "projects/A04/FE/index.html",
  },

  // Frontend
  {
    title: "JCO Donut POS",
    category: "frontend",
    description:
      "A point-of-sale interface for browsing donut products and organizing product selections.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A03",
    site: "projects/A03/index.html",
  },
  {
    title: "Watch Store Website Design",
    category: "frontend",
    description:
      "A watch store website showcasing product collections and brand pages with a responsive layout.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A02",
    site: "projects/A02/index.html",
  },
  {
    title: "Palawan Tourism Website",
    category: "frontend",
    description:
      "A tourism website highlighting Palawan destinations through photos, destination information, and visual sections.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/A05",
    site: "projects/A05/index.html",
  },
  {
    title: "Philippines Tourism Website",
    category: "frontend",
    description:
      "A tourism website showcasing destinations in the Philippines using image galleries and parallax scrolling effects.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W06",
    site: "projects/W06/index.html",
  },
  {
    title: "Filipino Food Website",
    category: "frontend",
    description:
      "A food website showcasing Filipino dishes with food images and recipe-related content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W03",
    site: "projects/W03/index.html",
  },
  {
    title: "League of Legends Information Website",
    category: "frontend",
    description:
      "A website presenting League of Legends information with separate pages for browsing and viewing content.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W04",
    site: "projects/W04/index.html",
  },
  {
    title: "Realme Product Website",
    category: "frontend",
    description:
      "A product-focused website showcasing Realme devices and product features.",
    tags: ["HTML", "CSS", "Bootstrap"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W01",
    site: "projects/W01/index.html",
  },
  {
    title: "Japan Travel Website",
    category: "frontend",
    description:
      "A travel website featuring Japanese destinations and travel-related imagery.",
    tags: ["HTML", "CSS", "Bootstrap"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W02",
    site: "projects/W02/index.html",
  },
  {
    title: "Riot Games Website",
    category: "frontend",
    description:
      "A gaming website featuring Riot Games titles and related game information.",
    tags: ["HTML", "CSS", "Bootstrap"],
    docs: "https://github.com/jalemgrapani/jalemgrapani.github.io/tree/main/projects/W05",
    site: "projects/W05/index.html",
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

function createActionLink(href, icon, label) {
  var attributes = "";
  var disabledClass = "";

  if (href) {
    attributes = ` href="` + href + `" target="_blank" rel="noopener"`;
  } else {
    attributes = ` aria-disabled="true" tabindex="-1"`;
    disabledClass = " disabled-action";
  }

  return (
    `<a` +
    attributes +
    ` class="card-action small-action d-inline-block text-decoration-none rounded-pill` +
    disabledClass +
    `">
      <i class="bi ` +
    icon +
    `"></i>
      ` +
    label +
    `
    </a>`
  );
}

function createActionsHtml(project) {
  // Actions
  return (
    createActionLink(project.docs, "bi-github", "View documentation") +
    createActionLink(project.site, "bi-globe2", "Site")
  );
}

function createCard(project, index) {
  var shortTitle = truncate(project.title, 40);
  var shortDescription = truncate(project.description, 150);
  var actionsHtml = createActionsHtml(project);
  var card = document.createElement("article");

  card.className = "play-card";
  card.tabIndex = 0;
  card.innerHTML =
    `
    <h4 class="card-title" title="` +
    project.title +
    `">` +
    shortTitle +
    `</h4>
    <p class="card-description" title="` +
    project.description +
    `">` +
    shortDescription +
    `</p>
    <div class="card-actions">` +
    actionsHtml +
    `</div>
  `;

  // Events
  card.addEventListener("click", function () {
    selectProject(index, true);
  });

  var buttons = card.querySelectorAll(".card-action");

  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", function (event) {
      if (
        !card.classList.contains("selected") ||
        this.classList.contains("disabled-action")
      ) {
        event.preventDefault();
      }
    });
  }

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

  document.getElementById("deckCount").textContent =
    index + 1 + " / " + projects.length;
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