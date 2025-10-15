# Le jeu des Éléments

## Présentation du projet

Le Jeu des Éléments est une mini-application en JavaScript inspirée de pierre-feuille-ciseaux.
Le joueur et l’ordinateur disposent chacun de trois pouvoirs : feu, eau et terre.
Le feu bat la terre, l’eau bat le feu et la terre bat l’eau.
Le premier à atteindre 10 points remporte la partie. Une fois la partie terminée, un message indique le gagnant et les
boutons sont désactivés.
Un bouton “Nouvelle partie” permet de relancer le jeu.

## Technologies utilisées

Concernant les technologies, j'ai utilisé : 

- HTML5 pour la structure de la page
- CSS3 pour la mise en forme et le centrage de l’interface
- JavaScript pour la logique du jeu, la gestion des scores et la manipulation du DOM

## Choix techniques

Le code repose sur plusieurs fonctions différentes :

- powerPc() qui génère un pouvoir aléatoire pour l’ordinateur
- powerPlayer() qui récupère le choix du joueur
- playGame() qui compare les deux choix, affiche le résultat et met à jour les scores
- resetGame() qui réinitialise le jeu et réactive les boutons

Les interactions sont gérées via la manipulation du DOM (querySelector, textContent, addEventListener).

## Choix visuels

L’interface est centrée et épurée, avec une mise en page simple et lisible.
Les boutons disposent d’un effet de survol.

## Conclusion

Ce projet a mis en pratique les bases essentielles du JavaScript apprise en cours : variables, conditions, fonctions, 
tableaux et manipulation du DOM. Il illustre concrètement la logique de jeu et l’interactivité d’une page web 
dynamique.