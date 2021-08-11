document.addEventListener("DOMContentLoaded", (event) => {
    const menuButton = document.querySelector(".menu-btn");
    const menuContainer = document.querySelector(".menu");

    menuButton.addEventListener("click", () => {
        menuContainer.style.display = menuContainer.style.display === 'flex' ? '' : 'flex';
    });
});

