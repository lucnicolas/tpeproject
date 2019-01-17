# tpeproject
11th school project - TPE Obesity

17/01/2019 - v.1.2 {
APPLICATION FONCTIONNELLE
    - nouvelles mise en forme et nouvelles couleurs.
    - nouvelles fonctions js - implémentation de jquerry - hide() show() ...
    - mise en place du .innerHTML pour les totaux.
    - impossible de valider le formulaire si les options ne sont pas sélectionné.
    - les options se désactivent après submitting
    //TODO : - voir pour placer les informations pour l'introduction en dehors de la div principale
}

16/01/2019 - v.1.1 {
    - mise en place du data mapping dans le script et finalisation des fontions de ce dernier.
    - manque encore finalisation du contenue brut et mise en forme de celle-ci si nécessaire.
    //TODO supprimer ombres buttons + backgroud-color  
}

15/01/2019 - v.1.0 {
    - première idée du rendu finale.
    - toute la nomenclature est à réaliser.
    - les values des selectors ne correspondent encore à rien mais permette de donner un rendu avec l'alert du score finale ... à voir
}

-
-
-
-
-
-

INSTRUCTION TRAVAIL COLABORATIF PROJET GIT :
# en étant sur master, récupérer d'abord la dernière version de master
git pull origin master
# créer une branche (par feature, par dev, c'est comme vous voulez)
git checkout -b nom_branche
# faire les modifs qu'on veut
# une fois que les commits sont faits, si un autre contributeur a fait des modifications sur master
git checkout master
git pull origin master
git checkout nom_branche
git rebase master
# résoudre les éventuels conflits
git checkout master
git merge nom_branche
git push origin master
# supprimer la branche de travail
git branch -D nom_branche
# créer une nouvelle branche pour réaliser les nouvelles modifs
git checkout -b nom_branche_suivante
# etc ...

git pull --rebase=preserve
