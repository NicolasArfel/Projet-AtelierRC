# Liste des commandes Git à se rappeller :

1. Faire un clone du dossier :

    `git clone git@github.com:O-clock-Blob/projet-14-AtelierRC.git`

2. Aller dans le dossier sur lequel vous souhaitez travailler :
    - `cd API`
    - `cd Client`

3. Créer sa branche :
    - `git checkout -b nom-de-la-branche`
    - par exemple : `git checkout -b header`

4. Vérifier le status actuel du travail :
    - `git status`

5. Voir la branche locale:
    - `git branch`

6. Sauvegarder votre travail (!! Bien verifier d'être sur la bonne branch ) :
    - `git add`
    - `git commit -m "texte clair et explicite"`
    - `git push`

7. Switcher sur une autre branche :
    - `git checkout le-nom-de-la-branche`
    - par exemple : `git checkout main` vous renverra sur la branche 'main'.

!!! Ne pas oublier de git pull entre chaques merges de composants !!!

8. Récupérer le travail de la branch terminée :
   - Se placer sur la branch parente du composant a merge => `git merge nom-de-la-branch-enfant`
   - Ajouter à git les modifications => `git add . => git commit -m description du commit" => git push`
   - Une fois chaques branch principale actualisée faire un `git merge nom-de-la-branche-principale` depuis la branch Main pour avoir le repos à jour
### N'oubliez pas de repartir d'une nouvelle branche en reprenant l'étape 3

