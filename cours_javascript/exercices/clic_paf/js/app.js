// références des éléments de page
const footer = document.querySelector('footer')
const points = document.querySelector('.points')
const rond  = document.querySelector('.rond')
const boxTimerGame =  document.querySelector('.temps')

// init du jeu
let score = 0;
let time =  5;
boxTimerGame.textContent = time
points.textContent = score

// limtes horizont. et vertic.
const largeur_deplacement = footer.offsetWidth - 50
const hauteur_deplacement = footer.offsetHeight - 50

// A intervalle régulier, le rond change de position
const timerRond =  setInterval(() => {
    let pleft = Math.random() * largeur_deplacement;
    let ptop = Math.random() * hauteur_deplacement
    rond.style.left = pleft + 'px'
    rond.style.top = ptop + 'px'
}, 1000);

//  rendre cliquable le rond avec un écouteur nommé clicRond
rond.addEventListener('mousedown', clicRond );

function clicRond(){
    score ++;
    points.textContent =  score;
}

const timerGame =  setInterval(() => {
    time--;
    boxTimerGame.textContent = time
    if(time==0){
        rond.removeEventListener('mousedown', clicRond);
        clearInterval(timerGame)
        clearInterval(timerRond)
    }
},1000);