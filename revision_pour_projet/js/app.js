const btnSwitch = document.querySelector('.btn-switch');
const root = document.documentElement;

let light = true;
//  abonnment à un écouteur anonyme
btnSwitch.addEventListener('click', function() {
    change()
})

function change() {
    // si on est sur jour
    if(light == true) {
        //on veut passer en mode nuit
        btnSwitch.classList.replace('day', 'night')
        root.style.setProperty('--bg-body', '#333')
        root.style.setProperty('--text-parag', '#bcbcbc');
        root.style.setProperty('--text-titre', '#ddd');
    }else{
        // on veut passer en mode jour
        btnSwitch.classList.replace('night', 'day')
        root.style.setProperty('--bg-body', '#efefef')
        root.style.setProperty('--text-parag', '#555');
        root.style.setProperty('--text-titre', '#444');
    }
    // interrupteur logique  ==>  vrai devient faux  ou  faux devient vrai
    light = !light
}

//  Gestion jour/nuit selon l'heure de l'ordinateur
const d =  new Date();
const heure =  d.getHours();
if(heure > 6 && heure < 20){
    light = false ;
    change();
}