let sideMenu = document.querySelector(".menu-lines");
let menuItem = document.querySelector(".menu-items");
let menuItems = document.querySelectorAll(".menu-item");
let menuLines = document.querySelectorAll(".menu-lines");

sideMenu.addEventListener("click",toggleMenu);

function toggleMenu(){
    if (menuItem.classList.contains("show")){
        menuItem.classList.remove("show");
    }else{
        menuItem.classList.add("show");
    }

    for(let i=0; i<menuItems.length; i++){
        if(menuItems[i].classList.contains("show")){
            menuItems[i].classList.remove("show");
        }else{
            menuItems[i].classList.add("show");
        }
    }

    for(i=0; i<menuLines.length; i++){
        if(menuLines[i].classList.contains("rotate")){
            menuLines[i].classList.remove("rotate");
        }else{
            menuLines[i].classList.add("rotate");
        }
    }
}