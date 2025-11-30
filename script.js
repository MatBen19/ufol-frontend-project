// program pro zobrazeni menu pri zmacknuti hamburger ikony
let hamburger = document.querySelector(".nav__hamburger");
let menu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", showMenu);

function showMenu () {
    menu.classList.toggle("nav__menu--open");
    hamburger.classList.toggle("nav__cross");
}