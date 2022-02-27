const section4 = document.querySelector('.s4')
section4.classList.add('hide')

// on récupère les limites de la section 4 et notamment la coordonée top
const section4top =  section4.getBoundingClientRect().top

window.addEventListener('scroll', () => {

    if(this.scrollY > section4top - 500  &&  section4.classList.contains('hide')) {
        section4.classList.replace('hide', 'show')
    }
})