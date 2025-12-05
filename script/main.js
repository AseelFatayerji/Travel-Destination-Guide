const menuBtn = document.getElementById("hamburger-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  hamburger.checked = false;
});

const scrollRevealOPtion = {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
};

ScrollReveal().reveal(".header-img img", {
  ...scrollRevealOPtion,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOPtion,
  delay: 500,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOPtion,
  delay: 2000,
});
ScrollReveal().reveal(".header-content form", {
  ...scrollRevealOPtion,
  delay: 2500,
});
