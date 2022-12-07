const navbar = document.querySelector("#navbar");
const navBtn = document.querySelector(".navbar__menubtn");
const navbarMenu = document.querySelector(".navbar__menu");
const menuIcon = document.querySelector(".material-icons menu");

function handleToMenuClick (){
  navbarMenu.add.classList("active");
  menuIcon.add.classList("active");
}

navBtn.addEventListener("click",handleToMenuClick);

