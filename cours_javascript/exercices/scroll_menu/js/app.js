// référencer les élements DOM utiles

const ancres = document.querySelectorAll('.menu a')
const navbar = document.querySelector('.navbar')
const bouton = document.querySelector('.bouton-croix')
const croix = bouton.querySelector('span')

// A l'ouverture, si min-width:768px alors navbar visible

if (window.matchMedia("(min-width:768px)").matches) {
    navbar.style.display = 'flex'
} else {
    navbar.style.display = 'none'
    open = false;
    croix.style.transform = "rotate(45deg)"
}

/*
    Au clic

*/

bouton.addEventListener('click', (e) => {

    if (window.matchMedia("(max-width:767px)").matches) {

        if (open == false) {
            navbar.style.display = 'flex'
            croix.style.transform = "rotate(0deg)"
        } else {
            navbar.style.display = 'none'
            croix.style.transform = "rotate(45deg)"
        }
        open = !open
    }

})


ancres.forEach(ancre => {
    ancre.addEventListener('click', () => {
        open = true;
        bouton.click()
    })
})


window.addEventListener('resize', redimensionnement)

function redimensionnement() {

    if (window.matchMedia("(min-width:768px)").matches) {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
        open = false;
        croix.style.transform = "rotate(45deg)"
    }

}