# Jeu du memory
## Analyse de l'interface
### Section principale de jeu
Une section avec 8 ou 16 carrés pour 2 niveaux de jeu. 
__nb__ : pour selectionner un niveau : La section et les carrés doivent être créés dynamiquement. 

Un carré contient deux symbole :  
- fixe : le ?
- aléatoire, et qui lui est affecté lors de la construction
### section de contrôle
- element de compte à rebours
- zone d'info
- bouton pour jouer
### Programmation de l'interface
- section de controle dans le dom
- section de jeu doit être construite en fonction des paramètres de jeu
    - nb_cases
    - bases de données de nb_cases /2
- On doit intégrer des icones ( font awesome )  -> version 4.7
    
### Construction HTML/CSS
-  placer dans html ce qui est statique
-  prévoir les classes css pour ce qui est généré par JS
### Début du programme
- déclarer les variables et constantes du jeu