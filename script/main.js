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

const swiper = new Swiper(".swiper", {
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1.2 },
    480: { slidesPerView: 1.5 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

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

ScrollReveal().reveal(".choose-img img", {
  ...scrollRevealOPtion,
  origin: "left",
});
ScrollReveal().reveal(".about-img", {
  ...scrollRevealOPtion,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".choose-content .section-subheader", {
  ...scrollRevealOPtion,
  delay: 500,
});
ScrollReveal().reveal(".choose-content .section-header", {
  ...scrollRevealOPtion,
  delay: 1000,
});
ScrollReveal().reveal(".choose-list li", {
  ...scrollRevealOPtion,
  delay: 1500,
  interval: 500,
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let value = Math.floor(progress * (end - start) + start);
    if (progress === 1 && end > 14) {
      obj.innerHTML = value + "+";
    } else {
      obj.innerHTML = value;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".counter");

const countersObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const end = parseInt(el.dataset.end);
        animateValue(el, 0, end, 800);
        observer.unobserve(el);
      }
    });
  },
  {
    threshold: 0.5, 
  }
);

counters.forEach((counter) => countersObserver.observe(counter));
