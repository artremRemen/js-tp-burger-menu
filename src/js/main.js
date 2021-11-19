const VerifJs = document.querySelectorAll('html, body, .nav-button, .navigation, main')
const mainSection = document.querySelector('.main');
const burgerbutton = document.querySelector('.nav-button');
let flipflop = 0;
for (let i = 0; i < VerifJs.length; i++) {
    const element = VerifJs[i];
    element.classList.add('js-enabled');
}
burgerbutton.addEventListener("click", (event)=>{
    if (flipflop === 0) {
        mainSection.classList.add('is-opened');
        flipflop=1;
    }
    else{
    mainSection.classList.remove('is-opened');
    flipflop=0;
    }
});
console.log( document.body.clientWidth);