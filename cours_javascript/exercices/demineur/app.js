const section =  document.querySelector('section')

let niveaujeu = 9;
const mine =  Math.floor(Math.random()*niveaujeu)

// ici on crée dynamiquement 9 div dans la section
section.innerHTML =""
for(let i=0; i<niveaujeu; i++) {
    section.innerHTML += '<div></div>'
}
// ici on crée un tableau des div de la section
const cases = document.querySelectorAll('section div')
// J'attribue à chaque case un numero qui correspondà sa position
for (let i=0; i<cases.length; i++) {
    cases[i].numero = i
    cases[i].addEventListener('click', clicdiv)
}

function clicdiv(e){
    const unecase = e.target;
    if(unecase.numero == mine) {
        unecase.style.backgroundColor = 'red'
        for (let i = 0; i < cases.length; i++) {
            cases[i].removeEventListener('click', clicdiv)
        }
        setTimeout(() => {
            alert('game over - looser')
        }, 10);

    }else{
        unecase.style.backgroundColor = 'green'
    }
}
