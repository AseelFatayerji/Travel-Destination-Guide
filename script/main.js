/*Author: Aseel Fatayerji*/

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);

  if (window.innerWidth >= 1024) {
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
  }
});


const menuBtn = document.getElementById("hamburger-toggle");
const navLinks = document.getElementById("nav-links");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cards = Array.from(document.querySelectorAll(".client-card"));
const counters = document.querySelectorAll(".counter");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtn.checked = false;
});

next.addEventListener("click", () => {
  for (let index = 0; index < cards.length; index++) {
    if (cards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % cards.length;
      cards[index].classList.remove("active");
      cards[nextIndex].classList.add("active");
      break;
    }
  }
});
prev.addEventListener("click", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".swiper");
  if (swiperEl) {
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        new Swiper(".swiper", {
          spaceBetween: 0,
          loop: true,
          breakpoints: {
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
          preloadImages: false,
          lazy: true,
        });
        obs.disconnect();
      }
    });
    observer.observe(swiperEl);
  }
});

const scrollRevealOption = {
  distance: "50px",
  duration: 1000,
  easing: "ease-out",
  reset: false,
  viewFactor: 0.2,
};

ScrollReveal().reveal(".header-img img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header-content form", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".choose-img img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});
ScrollReveal().reveal(".choose-content .section-subheader", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose-list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 1000,
});
ScrollReveal().reveal(".explore-img img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-subheader", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".explore-content .explore-btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".explore-grid div", {
  ...scrollRevealOption,
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
ScrollReveal().reveal(".contact-container .section-header", scrollRevealOption);
ScrollReveal().reveal(".contact-container .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".contact-container form", {
  ...scrollRevealOption,
  delay: 1500,
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let value = Math.floor(progress * (end - start) + start);
    obj.innerHTML = progress === 1 && end > 14 ? value + "+" : value;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
