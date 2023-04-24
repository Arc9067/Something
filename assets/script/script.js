const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-ul");

menu.addEventListener("click", () => {
  navmenu.classList.toggle("open-nav");
});
