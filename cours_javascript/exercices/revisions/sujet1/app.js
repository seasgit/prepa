const carre = document.querySelector('.carre')
const btnMoins = document.querySelector('.fa-minus-square-o')
const btnPlus = document.querySelector('.fa-plus-square-o')
const compteur = document.querySelector('.compteur')

let a = 0;
let v = 1
compteur.textContent = v

carre.style.backgroundColor = 'green'

let delai;

const timerRotation = setInterval(() => {
    a+=v
    carre.style.transform = `rotate(${a}deg)`
    compteur.textContent = v
}, 50);

btnMoins.addEventListener('click', ()=> {
    v--
})

btnPlus.addEventListener('click', () => {
    // si v égale à 5, on réduit au bout de 6 secondes
    if (v < 5) {
        v++
    }
    if(v==5) {
        carre.style.backgroundColor = 'red'
        delai = setTimeout(() => {
            v=2
            carre.style.backgroundColor = 'green'
        }, 6000);
    }
})


// version 2 : la carre tourne seul avec un setInterval, les boutons modifient la vitesse
// le bouton moins permet de réduire la vitesse jusqu'a 0
// le bouton plus permet d'augmenter jusqu'à 5
// A la vitesse max, si au bout de 5s secondes*, on n'a pas ralenti, le programme le fait lui même 
// voir setTimeout


