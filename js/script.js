"use strict";

const menuButton = document.querySelector(".menu-btn");
const menuContainer = document.querySelector(".menu");
const menuLinks = Array.from(document.querySelectorAll('.menu-nav__link-main'));

menuButton.addEventListener("click", () => {
    menuContainer.style.display = menuContainer.style.display === 'flex' ? '' : 'flex';
});

window.addEventListener("DOMContentLoaded", burgerMenu);
window.addEventListener("resize", burgerMenu);

function burgerMenu() {
    if (window.innerWidth <= 764) {        
        for (const key in menuLinks) {
            menuLinks[key].addEventListener("mouseover", () => {
                // showMenuElements(key);
});
        }
    } else { 
        for (const key in menuLinks) {
            menuLinks[key].removeEventListener("mouseover", () => { 
                // showMenuElements(key);
            });
        }  
    }
}

function showMenuElements(idx) {
    let div = document.createElement("div");
    const menuItems = menuLinks[idx].querySelectorAll(".menu-nav__link-group .menu-nav__link");

    menuItems.forEach( item => {
        div.appendChild(item);
    });
    
    // menuLinks[idx].parentNode.insertBefore(menuLinks[idx], menuLinks[idx].parentNode.childNodes);
    console.log(menuLinks[idx].parentNode.childNodes[menuLinks[idx]]);
    // console.log(div);
}

