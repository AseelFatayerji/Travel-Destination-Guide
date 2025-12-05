const menuBtn = document.getElementById("hamburger-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  hamburger.checked = false;
});
