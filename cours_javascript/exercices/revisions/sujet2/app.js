const carre =  document.querySelector('.carre')
const prev = document.querySelector('.fa-arrow-circle-o-left')
const next = document.querySelector('.fa-arrow-circle-o-right')

// tableau des lettres
const lettres = ['A', 'B', 'C', 'D', 'E']
// pointer la première lettre
let i = 0
// on l'affiche
let lettre;
 affiche_la_lettre_en(i);

next.addEventListener('click', () => {
    if(i == lettres.length-1){
        i=0
    }else{
        i++
    }
     affiche_la_lettre_en(i);
})

prev.addEventListener('click', () => {
    if (i == 0) {
        i = lettres.length - 1
    } else {
        i--
    }
     affiche_la_lettre_en(i);
})


const affiche_la_lettre_en = (i) => {
    lettre = lettres[i]
    carre.textContent = lettre
}




