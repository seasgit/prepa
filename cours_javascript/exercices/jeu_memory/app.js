/*
    Références des éléments du DOM
*/

const countdown =  document.querySelector('.countdown')
const btnJouer =  document.querySelector('.btn-play')
const info =  document.querySelector('.info')
const zoneJeu =  document.querySelector('.zone-jeu')

/*
   Déclaration des  Variables et constantes du jeu
*/
let nbCases = 16
let symboles = ['bath','music','umbrella','car','coffee','leaf','apple','plane']
let tab2symboles =[] // contient 2 symboles à comparer
let compteur_paires = 0 ;  // fini quand on arrive à 8
let timerJeu; // setInterval 

/*
    Construction jeu
*/
let symboles_copy = symboles.slice()
let symboles_melanges = [];

/*
Ci-dessous : Travail autour des tableaux et des méthodes de manipulation
https: //developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Tant que le tableau copy n'est pas vide
while(symboles_copy.length > 0){
    // Prendre un symbole au hasard, l'extraire du tableau et le donner à un autre
    let r = Math.floor(Math.random()*symboles_copy.length)
    // on extrait l'élément avec splice, et on récupère le string avec shift
    let symb =  symboles_copy.splice(r,1).shift();
    symboles_melanges.push(symb)
}

