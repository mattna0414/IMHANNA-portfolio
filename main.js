const navbar = document.querySelector("#navbar");
const navbarEl = navbar.getBoundingClientRect().height;
const menuBtn = document.querySelector(".navbar__menubtn");
const navbarMenu = document.querySelector(".navbar__menu");
const topButton = document.querySelector("#to-top"); 


document.addEventListener("scroll", () => {
  if (window.scrollY >= navbarEl) {
    navbar.classList.add("navbar__purple");
  } else {
    navbar.classList.remove("navbar__purple")
  }
}); //네비바를 아래로 스크롤 하면 상단에 고정되게 만들어줌

navbarMenu.addEventListener("click", (event) => {
  const Target = event.target;
  const clickLink = Target.dateset.link;
  if (clickLink === null) {
    return;
  } else {
    navbarMenu.classList.remove("open");
    const Link = document.querySelector(clickLink);
  }
});

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
}); //모바일용등 일정 크기로 줄어들면 카테고리가 햄버거버튼 안으로 숨음


const containerIds = [
  "#home",
  "#about",
  "skills",
  "works",
  "contact"
]

const container = containerIds.map(function (containerIds) {
  return document.querySelector(containerIds);
});





topButton.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo:0
  });
}); //우측하단에 상단으로 올라가는 버튼을 동작하게 만들어줌