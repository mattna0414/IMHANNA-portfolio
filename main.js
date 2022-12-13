const navbar = document.querySelector("#navbar");
const navbarEl = navbar.getBoundingClientRect().height;
const menuBtn = document.querySelector(".navbar__menubtn");
const navbarMenu = document.querySelector(".navbar__menu");
const contactBtn = document.querySelector(".home__contact__btn");
const workCategories = document.querySelector(".work_categories");
const categoriesBtn = document.querySelector(".categories_btn");
const projects = document.querySelectorAll(".projects");
const workProjects = document.querySelector(".work_projects");
const topButton = document.querySelector("#to-top"); 



document.addEventListener("scroll", () => {
  if (window.scrollY >= navbarEl) {
    navbar.classList.add("navbar__purple");
  } else {
    navbar.classList.remove("navbar__purple")
  }
}); //네비바를 아래로 스크롤 하면 상단에 고정되게 만들어줌



menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
}); //모바일용등 일정 크기로 줄어들면 카테고리가 햄버거버튼 안으로 숨음



navbarMenu.addEventListener("click", event=>{
  if(event.target.nodeName === "LI"){
    let li_element = event.target.dataset.link;
    document.querySelector(li_element).scrollIntoView({behavior : 'smooth'});
  }
}); //해당하는 카테고리 누르면 이동하기


contactBtn.addEventListener("click", event =>{
  event.preventDefault();
  document.querySelector("#contact").scrollIntoView(true,{behavior: 'smooth'});
});//js 다시 수정해서 부드럽게 넘어가는 방법 고민해보기

//works
workCategories.addEventListener("click", (event) =>{
  const Target = event.target;
  const Category =  
    Target.dataset.category || Target.parentNode.dataset.category;

  const selected = document.querySelector("categories_btn.selected");
  const selectTarget =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
    selected.classList.add("selected");
    selectTarget.classList.remove("")

    workProjects.classList.add("transition_none");
    setTimeout (() => {
      projects.forEach(function (eventHandler) {
        if (eventHandler.dataset.project == Category || "*" == Category) {
          eventHandler.classList.remove("projects_nothing")
        } else {
          eventHandler.classList.add("projects_nothing");
        }
      });
      workProjects.classList.remove("transition_none");
    },200);
});
//버튼을 누르면 카테고리에 해당하는 목록들만 뜨게 만들기
//지금은 안됨 수정해나가기


topButton.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo:0
  });
}); //우측하단에 상단으로 올라가는 버튼을 동작하게 만들어줌