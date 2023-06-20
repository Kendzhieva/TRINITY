let burgerButton = document.querySelector('.header__burger');
let menuButton = document.querySelector('.header__menu');

burgerButton.addEventListener("click", () =>{
    burgerButton.classList.toggle('header__burger--active')
    menuButton.classList.toggle('header__menu--active')
})