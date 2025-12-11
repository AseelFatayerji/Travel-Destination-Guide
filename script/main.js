/*Author: Aseel Fatayerji*/

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  tl.to(".img-container .lens", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.out",
  }).to(
    ".section.intro",
    {
      transformOrigin: "center center",
      ease: "power1.out",
      duration: 1.5,
    },
    "<"
  );
  ScrollTrigger.refresh();
});

const menuBtn = document.getElementById("hamburger-toggle");
const navLinks = document.getElementById("nav-links");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cards = Array.from(document.querySelectorAll(".client-card"));
const counters = document.querySelectorAll(".counter");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtn.checked = false;
});

next.addEventListener("click", (e) => {
  for (let index = 0; index < cards.length; index++) {
    if (cards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % cards.length;
      cards[index].classList.remove("active");
      cards[nextIndex].classList.add("active");
      break;
    }
  }
});
prev.addEventListener("click", (e) => {
  for (let index = 0; index < cards.length; index++) {
    if (cards[index].classList.contains("active")) {
      const prevIndex = (index ? index : cards.length) - 1;
      cards[index].classList.remove("active");
      cards[prevIndex].classList.add("active");
      break;
    }
  }
});

function startCounter(counter) {
  const end = +counter.getAttribute("data-end");
  let current = 0;
  const increment = end / 100;
  const update = () => {
    current += increment;
    if (current < end) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.textContent = end > 14 ? `${end}+` : end;
    }
  };
  update();
}

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
  interval: 200,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOPtion,
  delay: 1000,
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
  delay: 1000,
});

ScrollReveal().reveal(".choose-content .section-subheader", {
  ...scrollRevealOPtion,
  delay: 1000,
});
ScrollReveal().reveal(".choose-content .section-header", {
  ...scrollRevealOPtion,
  delay: 1000,
});
ScrollReveal().reveal(".choose-list li", {
  ...scrollRevealOPtion,
  delay: 1500,
  interval: 1000,
});

ScrollReveal().reveal(".explore-img img", {
  ...scrollRevealOPtion,
  origin: "right",
  delay: 1000,
});

ScrollReveal().reveal(".explore-content .section-subheader", {
  ...scrollRevealOPtion,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-header", {
  ...scrollRevealOPtion,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-description", {
  ...scrollRevealOPtion,
  delay: 1500,
});
ScrollReveal().reveal(".explore-content .explore-btn", {
  ...scrollRevealOPtion,
  delay: 2000,
});

ScrollReveal().reveal(".explore-grid div", {
  distance: "50px",
  duration: 1200,
  delay: 2500,
  easing: "ease-out",
  origin: "bottom",

  afterReveal: () => {
    counters.forEach((counter) => {
      if (!counter.classList.contains("started")) {
        counter.classList.add("started");
        startCounter(counter);
      }
    });
  },
});

ScrollReveal().reveal(".contact-container .section-header", {
  ...scrollRevealOPtion,
});

ScrollReveal().reveal(".contact-container .section-description", {
  ...scrollRevealOPtion,
  delay: 1000,
});

ScrollReveal().reveal(".contact-container form", {
  ...scrollRevealOPtion,
  delay: 1500,
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
