// référencer les élements DOM utiles

const ancres = document.querySelectorAll('.menu a')
const navbar = document.querySelector('.navbar')
const bouton = document.querySelector('.bouton-croix')
const croix =  bouton.querySelector('span')

/*
A l'ouverture si on est en mobile :
    le menu est fermé et le bouton affiche une croix
*/

let open = false
croix.style.transform =  "rotate(45deg)"
navbar.style.display ='none'


/*
    Au clic sur le bouton
        - si le menu  n'est pas visible
            display flex
          sinon 
            display none
        - on change la valeur de open ( interrupteur true/false)
            selon la valeur de open => rotation du bouton
*/

bouton.addEventListener('click', (e) => {
    if( open == false ){
        navbar.style.display = 'flex'
        croix.style.transform = "rotate(0deg)"
    }else{
        navbar.style.display = 'none'
        croix.style.transform = "rotate(45deg)"
    }
    open = !open

})


ancres.forEach( ancre => {
    ancre.addEventListener('click', () => {
        open = true;
        bouton.click()
    })
} )


window.addEventListener('resize', redimensionnement)

function redimensionnement() {

    if(window.matchMedia("(min-width:768px)").matches) {
        navbar.style.display = 'flex'
    }else{
        navbar.style.display = 'none'
        open= false;
        croix.style.transform = "rotate(45deg)"
    }

}