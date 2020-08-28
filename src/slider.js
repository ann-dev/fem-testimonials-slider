const prev = document.querySelector('#slide-back');
const next = document.querySelector('#slide-next');

const toggleImage = () => {
  const sliderImages = document.querySelectorAll('.slide_portrait-image');
  sliderImages.forEach((image) => {
    if (image.classList.contains('active')) {
      image.classList.remove('active');
    } else {
      image.classList.add('active');
    }
  });
};

const toggleTestimonial = () => {
  const testimonials = document.querySelectorAll('.slide_testimonial');
  testimonials.forEach((elems) => {
    if (elems.classList.contains('active')) {
      elems.classList.remove('active');
    } else {
      elems.classList.add('active');
    }
  });
};

const toggleSlides = () => {
  toggleImage();
  toggleTestimonial();
};

prev.addEventListener('click', toggleSlides);
next.addEventListener('click', toggleSlides);
