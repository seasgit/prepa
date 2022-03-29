// contiendra la somme des 3 valeurs des ronds
let somme =  0;
// compte si les trois ronds sont cliqués
let compteur =  0
const resultat =  document.querySelector('.resultat span')
// trois ronds dans un tableau
const lesRonds =  document.querySelectorAll('.rond')
// trois ronds cliquables
for(let i=0; i<lesRonds.length; i++){
    lesRonds[i].addEventListener('click', clicRond)
}
// Ecouteur d'événement
function clicRond(e){
    // pour ne cliquer qu'une seule fois
    this.removeEventListener('click', clicRond)
    compteur++;
    // e.target ou this représentent l'élement cliqué
    // console.log(e.target)
    // console.log(this)
    let r = -1 + Math.floor(Math.random()*3)
    this.firstElementChild.textContent =  r;

    // ici on constitue la somme et on la donne à resultat
    somme +=r;
    resultat.textContent = somme
    //
    if(compteur==3) {
        if(somme==0){
            console.log('GAGNE')
        }else{
            console.log("PERDU");
        }
    }

}