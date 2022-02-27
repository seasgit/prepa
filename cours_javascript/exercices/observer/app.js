 let observer = new IntersectionObserver((entries) => {
     /*
         L'observateur passe en revue tous les éléments observables
     */
     for (let entry of entries) {
         /*
             Si un article est en partie dans la zone visible du document,
             on change sa classe.
             Si un article possède l'id 'der' alors celui ci a son contenu animé 
         */
         if (entry.intersectionRatio > 0.5) {
             entry.target.classList.replace('hidden', 'show')
             if (entry.target.id == 'der') {
                 entry.target.querySelector('div').classList.replace('der', 'der-show')
             }
         }
     }

 }, {
     threshold: [0.5]
 })


 // on référence tous les articles
 const articles = document.querySelectorAll('article')

 for (art of articles) {
     // on leur donne la classe 'hidden'
     art.classList.add('hidden')
     // on les rend observables
     observer.observe(art)
 }