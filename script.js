let menuOpen = false;

function toggleMenu() {
  const menu = document.querySelector('.menuWrap');
  menu.classList.toggle('open');
  menuOpen = !menuOpen;
}