// Références d'éléments du DOM

const pg = document.querySelector('header p');
const btn = document.querySelector(('header span'))

const bar_samsung = document.querySelector('footer div:nth-of-type(1)')
const bar_apple = document.querySelector('footer div:nth-of-type(2)')


btn.addEventListener('mousedown', onSimulation);

function onSimulation(){
    
    let vente_samsung = Math.floor(Math.random()*301);
    let vente_apple = Math.floor(Math.random() *301);
    
    bar_apple.style.height = vente_apple +'px'
    bar_samsung.style.height =  vente_samsung +'px'

}

