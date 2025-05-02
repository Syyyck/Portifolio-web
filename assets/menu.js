let btnMenuMobile = document.getElementById('btn-menu-mobile')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.add('abrir-menu')
})
menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu')
})
overlay.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu')
})