const carre = document.querySelector('.carre')
const btnMoins = document.querySelector('.fa-minus-square-o')
const btnPlus = document.querySelector('.fa-plus-square-o')

let a = 0;

btnMoins.addEventListener('click', ()=> {
    a-=10
    carre.style.transform = `rotate(${a}deg)`
})

btnPlus.addEventListener('click', () => {
    a+=10
    carre.style.transform = `rotate(${a}deg)`
})

