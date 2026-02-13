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

const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('starValue');

        for (let i = 0; i < rating; i++) {
          stars[i].classList.add('selected');
        }
      });
    });

    
