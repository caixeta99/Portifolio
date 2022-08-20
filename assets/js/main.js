const elementoNavMenu = document.querySelector("header");
const elementoLabelMenu = document.querySelector(".iconeMenu label");
const elementoInputsMenu = document.querySelector(".iconeMenu input");

elementoLabelMenu.addEventListener("click",()=>{
    console.log(elementoNavMenu)
    if(elementoInputsMenu.checked != true){
        elementoNavMenu.classList.add("displayBlock");
    }else{
        elementoNavMenu.classList.remove("displayBlock");
    }
});