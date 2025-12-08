// program pro zobrazeni menu pri zmacknuti hamburger ikony
const hamburger = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__menu");
const body = document.body;

hamburger.addEventListener("click", showMenu);

function showMenu () {
    menu.classList.toggle("nav__menu--open");
    hamburger.classList.toggle("nav__cross");
    body.classList.toggle("no-scroll");
}