document.querySelectorAll('.nav-list a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const offset = rect.top + window.scrollY;
    const centerScroll = offset - window.innerHeight / 2 + rect.height / 2;

    window.scrollTo({
      top: centerScroll,
      behavior: "smooth",
    });
  });
});

document.querySelector(".navLogo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
