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

// Select contact form
const contactForm = document.getElementById("contact-form");

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
  if (contactForm) {
    contactForm.reset();
  }
};

// Load translations
const loadTranslations = (lang) => {
  fetch(`assets/locales/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update HTML elements with translations
      const dataI18n = document.querySelectorAll("[data-i18n]");
      dataI18n.forEach((element) => {
        const key = element.dataset.i18n;
        if (key !== "long_loading" && key !== "up_arrow") {
          element.textContent = data[key];
        }
      });

      // Update the lang attribute of the html tag
      document.documentElement.lang = lang;

      // Update the title of the head
      document.title = data["head_title"];

      // Update the alt attributes of images
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        const key = img.dataset.i18n;
        if (key) {
          img.alt = data[key];
        }
      });

      // Update the title of some links
      const links = document.querySelectorAll("a, i");
      links.forEach((link) => {
        const key = link.dataset.i18n;
        if (key) {
          link.title = data[key];
        }
      });

      // Update the placeholders for the form
      const inputs = document.querySelectorAll(
        "input[placeholder], textarea[placeholder]"
      );
      inputs.forEach((input) => {
        const key = input.dataset.i18n;
        if (key) {
          input.placeholder = data[key];
        }
      });

      // Update the value of the submit inputs
      const submit = document.querySelector('input[type="submit"]');
      const key = submit.dataset.i18n;
      submit.value = data[key];

      // Update the flag visibility
      const flagEn = document.querySelector(".flag-en");
      const flagFr = document.querySelector(".flag-fr");
      flagFr.style.display = lang === "en" ? "inline" : "none";
      flagEn.style.display = lang === "fr" ? "inline" : "none";
    });
};

// Set the language to French by default
loadTranslations("fr");

// Add language toggle functionality
const languageToggle = document.querySelector("#language-toggle");
languageToggle.addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "fr" ? "en" : "fr";
  loadTranslations(newLang);
});
