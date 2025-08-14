console.log("Connected 🚀✌🏼");

// ---------------------------------------------- //
// --------------- Quote array ------------------ //
// ---------------------------------------------- //
const quotes = [
  { id: 'quote1', speed: 0.5 },
  { id: 'quote2', speed: 0.7 },
  { id: 'quote3', speed: 0.7 },
  { id: 'quote4', speed: 0.5 },
  { id: 'quote5', speed: 0.7 },
  { id: 'quote6', speed: 0.7 },
  { id: 'quote7', speed: 0.6 },
  { id: 'quote8', speed: 0.5 },
];

// ---------------------------------------------- //
// ------------- Quote array loop --------------- //
// ---------------------------------------------- //
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  quotes.forEach(quote => {
    const el = document.getElementById(quote.id);
    if (el) el.style.transform = `translateY(${-scrollY * quote.speed}px)`;
  });
});


// ---------------------------------------------- //
// ----------------- Carousel ------------------- //
// ---------------------------------------------- //
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector('[data-slides]')
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// Making carousel change automatically //
setInterval(() => {
  const nextButton = document.querySelector('[data-carousel-button="next"]');
  if (nextButton) {
    nextButton.click();
  }
}, 4500);



// ---------------------------------------------- //
// ------------ Scroll to top button ------------ //
// ---------------------------------------------- //
document.querySelector('.scroll-to-top-btn').addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


// ---------------------------------------------- //
// ------------- Star animation code ------------ //
// ---------------------------------------------- //
const sky = document.querySelector('.sky');
const numStars = 20; // Number of stars to create

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Randomize initial position
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  
  // Randomize animation delay to make them appear at different times
  star.style.animationDelay = -Math.random() * 5 + 's';
  
  sky.appendChild(star);
}
