# Bienvenue sur Lego GraphQL

Ce projet est assez basique, il s'appuie sur les données du site Rebrickable qui recense tous les sets de Lego.
Les données récupérés brut sur ce site sont mis à disposition au format CSV.
L'objectif est de créer un serveur qui puisse les mettre à disposition sous un format plus pratique.

Il s'agit d'un serveur Express qui fait tourner une API GRAPHL.

Le serveur puise directement dans une "base de données" composé de fichier CSV qui sont auparavant parsé.
Ces fichiers sont mis à jour grâce à un script qui récupère les fichiers CSV sur le site https://rebrickable.com/ de manière automatisé et les télécharge dans le répertoire data/

## Comment tester cette API en local ?

- Ouvrir "download-data.sh".
- Modifier le chemin d'accès et le remplacer par celui du répertoire ou vous venez de cloner le repo (Voir le commentaire).
- npm start
- Le serveur tourne sur le port 4000, en accédant depuis votre navigateur vous accéderez au playground GRAPHQL d'ou vous pourrez lancer vos première requètes (par ex : "{sets {name, year}}" récupère le nom et l'année de sortie de tous les sets).
