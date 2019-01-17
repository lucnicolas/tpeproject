# tpeproject
11th school project - TPE Obesity

17/01/2019 - v.2.0 {
INITIALISATION DE LA V2
    - 
    //TODO :
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
