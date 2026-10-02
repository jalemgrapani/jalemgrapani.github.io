function revealSections() {
  for (var i = 0; i < navSections.length; i++) {
    if (navSections[i].getBoundingClientRect().top < window.innerHeight - 80) {
      navSections[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealSections);
revealSections();