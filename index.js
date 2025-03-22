// Sidebar Toggle Functions
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  if (sidebar.style.display === 'flex' && !sidebar.contains(e.target) && !menuButton.contains(e.target)) {
    hideSidebar();
  }
});

// Product Slider Functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const totalSlides = slides.length;
const visibleSlides = 4;

function updateSlider() {
  const offset = -currentIndex * (100 / visibleSlides);
  slider.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0;
    slider.style.transition = 'none';
    updateSlider();
    setTimeout(() => {
      slider.style.transition = 'transform 0.5s ease';
    }, 10);
  } else {
    slider.style.transition = 'transform 0.5s ease';
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - visibleSlides;
    slider.style.transition = 'none';
    updateSlider();
    setTimeout(() => {
      slider.style.transition = 'transform 0.5s ease';
    }, 10);
  } else {
    slider.style.transition = 'transform 0.5s ease';
    updateSlider();
  }
});

// Testimonial Slider Functionality
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialPrevBtn = document.querySelector('.testimonial-prev-btn');
const testimonialNextBtn = document.querySelector('.testimonial-next-btn');
let testimonialCurrentIndex = 0;
const testimonialTotalSlides = testimonialSlides.length;
const testimonialVisibleSlides = 3;

function updateTestimonialSlider() {
  const offset = -testimonialCurrentIndex * (100 / testimonialVisibleSlides);
  testimonialSlider.style.transform = `translateX(${offset}%)`;
}

testimonialNextBtn.addEventListener('click', () => {
  testimonialCurrentIndex++;
  if (testimonialCurrentIndex > testimonialTotalSlides - testimonialVisibleSlides) {
    testimonialCurrentIndex = 0;
    testimonialSlider.style.transition = 'none';
    updateTestimonialSlider();
    setTimeout(() => {
      testimonialSlider.style.transition = 'transform 0.5s ease';
    }, 10);
  } else {
    testimonialSlider.style.transition = 'transform 0.5s ease';
    updateTestimonialSlider();
  }
});

testimonialPrevBtn.addEventListener('click', () => {
  testimonialCurrentIndex--;
  if (testimonialCurrentIndex < 0) {
    testimonialCurrentIndex = testimonialTotalSlides - testimonialVisibleSlides;
    testimonialSlider.style.transition = 'none';
    updateTestimonialSlider();
    setTimeout(() => {
      testimonialSlider.style.transition = 'transform 0.5s ease';
    }, 10);
  } else {
    testimonialSlider.style.transition = 'transform 0.5s ease';
    updateTestimonialSlider();
  }
});

// Ensure sliders adjust on window resize
window.addEventListener('resize', () => {
  updateSlider();
  updateTestimonialSlider();
});