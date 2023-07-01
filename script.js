// sticky navbar
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.sticky-nav');
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const scrollY = window.pageYOffset;
  
  if (scrollY >= headerHeight) {
      nav.classList.add('sticky');
  } else {
      nav.classList.remove('sticky');
  }
});

// for mobile
const menuIcon = document.querySelector(".menu-icon");
const navUl = document.querySelector(".nav-ul");

menuIcon.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".sticky-nav");
  nav?.classList.toggle("sticky", window.scrollY > 0);

  if (navUl.classList.contains("active")) {
    setTimeout(() => {
      navUl.classList.remove("active");
    }, 600);
  }
});


// reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.05,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
