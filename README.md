# tpeproject
11th school project - TPE Obesity

ECHEANCE 22/01/19

20/01/2019 - v.1.4 {
    - mise à jour et finalisation de la data.
    - mise à jour du contenu.
    - icones check ou times en fonction de si le resultat est correct ou non.
    - les menus se desactive à la selection et affiche leur contenu en dessous.
    //TODO : - finaliser le contenu
    //TODO : - organiser et optimiser le code + rédaction commentaires
}

19/01/2019 - v.1.4 {
    - mise à jour de la data
    - rédaction du contenu
    - création d'un footer + quelques animations
    - mise en forme de l'espace résultat :
        # totaux sous forme de liste
        # background-color change en fonction du résultat
        # ajout img pouce vert et pouce rouge
    - les selects se désactivent après validation du formulaire
    - mise en place d'un design un minimum responsive
    - nettoyage des scripts + ajout des commentaires
    - ajout d'une favicon et d'icons diverses
    - correction bugs animation et autres
    //TODO : - finalisation de la mise en page du nouveau contenue
    //TODO : - optimisation maximale du code
}

18/01/2019 - v.1.3 {
    - nouvelles fonctionnalités tant que le formulaire n'est pas complété :
        # suppression de l'animation du bouton "Valider".
        # cache le message "merci".
    - fenêtre modale pour le message d'introduction.
    - correction de bugs.
    //TODO : - vérifiacation cohérence des variables, id, class ...
    //TODO : - optimisation du code.
    //TODO : - ajout commentaires.
    //TODO : - manque toujours le contenue.
}

17/01/2019 - v.1.2 {
APPLICATION FONCTIONNELLE
    - nouvelles mise en forme et nouvelles couleurs.
    - nouvelles fonctions js - implémentation de jquerry - hide() show() ...
    - mise en place du .innerHTML pour les totaux.
    - impossible de valider le formulaire si les options ne sont pas sélectionné.
    - les options se désactivent après submitting
    //TODO : - voir pour placer les informations pour l'introduction en dehors de la div principale.
}

16/01/2019 - v.1.1 {
    - mise en place du data mapping dans le script et finalisation des fontions de ce dernier.
    - manque encore finalisation du contenue brut et mise en forme de celle-ci si nécessaire.
    //TODO supprimer ombres buttons + backgroud-color .
}

15/01/2019 - v.1.0 {
    - première idée du rendu finale.
    - toute la nomenclature est à réaliser.
    - les values des selectors ne correspondent encore à rien mais permette de donner un rendu avec l'alert du score finale ...
}


----------------------------------------------------------------------

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

----------------------------------------------------------------------

git pull --rebase=preserve

----------------------------------------------------------------------

MBP-de-Luc:tpeproject luc$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/master-temporaire
MBP-de-Luc:tpeproject luc$ git branch -r
  origin/HEAD -> origin/master
  origin/master
  origin/master-temporaire
MBP-de-Luc:tpeproject luc$ git branch -rd origin/master-temporaire
Deleted remote-tracking branch origin/master-temporaire.
