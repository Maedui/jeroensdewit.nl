const navbar = document.querySelector(".navbar");

let navbarOffset = navbar.offsetTop

function callToActionBreakpoint(){
  if(window.scrollY <= navbarOffset) {
    navbar.style.top = (80 - window.scrollY) + "px";
  } else if(window.scrollY > 80){
    navbar.style.top = 0 + "px";
  }
}

window.addEventListener("scroll", callToActionBreakpoint);
window.addEventListener("load", callToActionBreakpoint);
