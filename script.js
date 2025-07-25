const buttons = document.querySelectorAll(".morph-btn");
const wrapper = document.getElementById("iframeWrapper");
const iframe = document.getElementById("iframeView");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    morphToFullscreen(btn, btn.dataset.url);
  });
});

function morphToFullscreen(originalBtn, url) {
  const rect = originalBtn.getBoundingClientRect();
  const span = originalBtn.querySelector("span");
  const clone = originalBtn.cloneNode(true);
  clone.innerHTML = span ? span.outerHTML : originalBtn.innerHTML;

  clone.classList.add("morph-clone");
  document.body.appendChild(clone);

  clone.style.top = `${rect.top}px`;
  clone.style.left = `${rect.left}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;

  clone.getBoundingClientRect(); // force layout

  clone.style.top = "0px";
  clone.style.left = "0px";
  clone.style.width = "100vw";
  clone.style.height = "100vh";
  clone.style.borderRadius = "0px";
  clone.style.fontSize = "0";

  setTimeout(() => {
    document.body.removeChild(clone);
    wrapper.classList.add("visible");
    iframe.src = url;

    setTimeout(() => {
      wrapper.classList.add("loaded");
    }, 50);
  }, 600);
}

function closeIframe() {
  wrapper.classList.remove("loaded");
  iframe.src = "";
  setTimeout(() => {
    wrapper.classList.remove("visible");
  }, 300);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeIframe();
});

document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetID = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetID);
    const offset = window.innerHeight / 2 - target.offsetHeight / 2;

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    });
  });
});
