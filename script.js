const scrollButtons = document.querySelectorAll("[data-scroll]");

for (const button of scrollButtons) {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-scroll");
    const target = document.querySelector(targetSelector);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.14,
  }
);

const revealTargets = document.querySelectorAll(".section, .hero-copy, .hero-card");

for (const item of revealTargets) {
  item.classList.add("reveal");
  observer.observe(item);
}
