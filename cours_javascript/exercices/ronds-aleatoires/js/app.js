const footer =  document.querySelector('footer')
// limtes horizont. et vertic.
const limiteH = footer.offsetWidth - 50
const limiteV = footer.offsetHeight - 50

//  d'abord on ajoute 5 ronds au footer
for(let i=1; i<=5; i++) {
    footer.innerHTML += `<div class='rond'></div>`
}
// ensuite in crée un tableau des ronds
const ronds =  document.querySelectorAll('.rond')

// et puis on boucke sur chque rond pour appliquer une position
for(let i=0; i< ronds.length; i++ ) {
    let rond =  ronds[i];
    let pleft  =  Math.random()*limiteH;
    let ptop = Math.random()*limiteV
    rond.style.left = pleft +'px'
    rond.style.top = ptop +'px'
}


