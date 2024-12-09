
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

// Open Close Navbar Menu on Click Burger
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
});