const btn = document.querySelector('.btn')

// ref de la section s1 et de sa propriété pour compter le nombre de carrés verts
const s1 = document.querySelector('.s1')
s1.verts = 0
// idem section 2
const s2 =  document.querySelector('.s2')
s2.verts = 0;

//Tableau qui est la base du tirage aléatoire de couleur
const colors = ['green', 'red']

// permet de savoir si on a finit
let compteur_clic =  0;

btn.addEventListener('click', () => {
    // on compte les clics
    compteur_clic++
    // on crée à la volée un div et on l'affecte à un parent
    const ele =  document.createElement('div')
    // on définit un index pour la couleur aléatoire et on l'applique
    let r = Math.floor(Math.random() * colors.length)
    const col =  colors [r]
    ele.style.backgroundColor =  col;
    
    // on regarde où le placer avec le reste de la division
    if( compteur_clic%2 !==0 ){
        s1.appendChild(ele)
        if(col=='green') s1.verts++
    }else{
        s2.appendChild(ele)
        if (col == 'green') s2.verts++
    }

    if(compteur_clic==8) {
        console.log("FINI");
        if(s1.verts > s2.verts){
            console.log('la section 1 gagne');
        }else if(s2.verts > s1.verts){
            console.log('la section 2 gagne');
        }else{
            console.log('Les deux sections à égalité');
        }
    }

})