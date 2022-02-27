const b1  = document.querySelector('.b1')
const b2  = document.querySelector('.b2')
const b3  = document.querySelector('.b3')


window.addEventListener('scroll', () => {

    let v1 = this.scrollY * 0.001
    let v2 = this.scrollY *0.1
    let v3 =  this.scrollY * 0.05

    b1.style.transform = `translateY(${-v1}px)`
    b2.style.transform = `translateY(${-v2}px)`
    b3.style.transform = `translateY(${-v3}px)`
})