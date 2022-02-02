const about = document.querySelector(".about");
const menuBtn = document.querySelector(".menu_link");
const menu = document.querySelector(".menu");
const planetImg = document.querySelector(".menu_transition-planet");
const menuNav = document.querySelector(".menu_nav");
const container = document.querySelector(".container");
const callToAction = document.querySelector(".callToAction");



function showMenu() {
  if(menuBtn.classList.contains("menu_link-active")){
    planetImg.classList.remove("menu_transition-planet-open");
    planetImg.classList.add("menu_transition-planet-closed");
    menuNav.classList.add("menu_nav-closed");
    menuNav.classList.remove("menu_nav-open");
    menuBtn.classList.remove("menu_link-active");
    setTimeout(() => {
      container.style.display = "block";
      }, 800);
  }
  else {
    planetImg.classList.add("menu_transition-planet-open");
    planetImg.classList.remove("menu_transition-planet-closed");
    menuNav.classList.remove("menu_nav-closed");
    menuNav.classList.add("menu_nav-open");
    menuBtn.classList.add("menu_link-active");
    setTimeout(() => {
      container.style.display = "none";
      }, 1000);
  }
}



menuBtn.addEventListener("click", showMenu);


