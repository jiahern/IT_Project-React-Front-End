const butn = document.querySelector("button.name_button");
const nameHome = document.querySelector("span.nameHomepage");
const nameUnion = document.querySelector("span.nameUnion");
const nameLinkage = document.querySelector("span.nameLinkage");
const nameTask = document.querySelector("span.nameTask");
const nameCalendar = document.querySelector("span.nameCalendar");
const totalName = document.querySelector(".totalName");



butn.addEventListener("click", () => {
        nameHome.classList.toggle("hidden");
        nameUnion.classList.toggle("hidden");
        nameLinkage.classList.toggle("hidden");
        nameTask.classList.toggle("hidden");
        nameCalendar.classList.toggle("hidden");
         
})

const statusButn = document.querySelector("button.StatusChange");
const changeBar = document.querySelector("div.statusBar");
statusButn.addEventListener("click", () => {
        changeBar.classList.toggle("hidden");
})

const profileButn = document.querySelector("button.profileBarButton");
const profileBar = document.querySelector("div.profileBar");
profileButn.addEventListener("click", () => {
        profileBar.classList.toggle("hidden");
})
