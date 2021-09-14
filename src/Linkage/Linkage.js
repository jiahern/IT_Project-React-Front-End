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


const profileButn = document.querySelector("button.profileBarButton");
const profileBar = document.querySelector(".profileBar");
profileButn.addEventListener("click", () => {
        profileBar.classList.toggle("hidden");
})

const CreateUnionButn = document.querySelector("button.newUnion");
const newUnionSet = document.querySelector(".newCreateUnion");
const backButton = document.querySelector("button.backButton");
CreateUnionButn.addEventListener("click", () => {
        newUnionSet.classList.toggle("translate-x-full");
})
backButton.addEventListener("click", () => {
        newUnionSet.classList.toggle("translate-x-full");
})

const editLinkageButn = document.querySelector("button.editButton");
const editLinkage = document.querySelector(".editLinkage");
const backeditButton = document.querySelector("button.backButtonEdit");
editLinkageButn.addEventListener("click", () => {
        editLinkage.classList.toggle("translate-x-full");
})
backeditButton.addEventListener("click", () => {
        editLinkage.classList.toggle("translate-x-full");
})
