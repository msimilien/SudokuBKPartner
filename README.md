# SudokuBKPartner
Jeux Sudoku Ajax,Jquery,JavaScript, ASP.Net

Ce projet consiste à remplir le tableau pour former un sudoku. Le tableau contient 9 sous-tableaux de 9 case chacune.
Un sous-tableau ne doit pas contenir deux chiffres identiques , de meme que pour une colonne ou une file de toute la table.

Le projet est divisé en 2 parties.
La partie client qui gère toute les regles du jeu telles que: le chrono, le score accumulé, et toute la validation du jeu.
Les fichiers qui constituent la partie client sont:
- index.aspx
- sudoku.js
- sudoku.css

L'index.aspx est une page Asp.net qui constitue la page principale. 
Cette page est liée au fichier sudoku.js qui contient du code javaScript , Ajax et JQuerry. 

La partie serveur qui sert à faire le loguin du client et enregistrer son score. Elle contient les fichiers suivants:
- DataSudoku.aspx.cs qui sert la porte pour rececevoir des petitions Ajax . Ce fichier contient les WebMethode qui recoivent ces petitions.
- Userlogin.cs c'est une classe qui contient les propriétes de l'utilisateur connecté. 
- un ficher web.config qui contient les configuration du stringConnection.

Le projet contient aussi une base de donnée hebergée dans un host privé. Cette base contient 2 tables: UserSudoku et ScoreSudoku,
et 2 procédures stockées: LoginSudoku et AddScoreSudoku.
Cette base de donnée sert à sauvegarder les scores accumulé de chaque utilisateur.

