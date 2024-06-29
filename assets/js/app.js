// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Select lazy-load images
const images = document.querySelectorAll(".lazy-load");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Lazy loading images to avoid FOUC
window.addEventListener("load", () => {
  images.forEach((img) => {
    img.classList.remove("lazy-load");
  });
});

// Clears up the contact form after submission
window.onbeforeunload = () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.reset();
  }
};
