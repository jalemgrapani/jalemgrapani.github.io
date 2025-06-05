const carousel = document.getElementById('carouselAllCategories');

carousel.addEventListener('slide.bs.carousel', (event) => {
  const upcomingSlide = event.relatedTarget;
  const heading = upcomingSlide.querySelector('h2.category-animate');

  if (heading) {
    heading.classList.add('animate-down');

    setTimeout(() => {
      heading.classList.remove('animate-down');
    }, 500);
  }
});
