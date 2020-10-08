# Bienvenue sur Lego GraphQL

Ce projet est assez basique, il s'appuie sur les données du site Rebrickable qui recense tous les sets de Lego.
Les données récupérés brut sur ce site sont mis à disposition au format CSV.
L'objectif est de créer un serveur qui puisse les mettre à disposition sous un format plus pratique.

Il s'agit d'un serveur Express qui fait tourner une API GRAPHL.

Le serveur puise directement dans une "base de données" composé de fichier CSV qui sont auparavant parsé.
Ces fichiers sont mis à jour grâce à un script qui récupère les fichiers CSV sur le site https://rebrickable.com/ de manière automatisé et les télécharge dans le répertoire data/

## Comment tester cette API en local ?

- Cloner le repo
- Ouvrir "download-data.sh".
- Modifier le chemin d'accès et le remplacer par celui du répertoire ou vous venez de cloner le repo (Voir le commentaire).
- npm i
- npm start
- Le serveur tourne sur le port 4000, en accédant depuis votre navigateur vous accéderez au playground GRAPHQL d'ou vous pourrez lancer vos première requètes (par ex : "{sets {name, year}}" récupère le nom et l'année de sortie de tous les sets).


# Welcome to GraphQL Lego

This project is relatively basic, it uses data from the internet site Rebrickable which identify all sets of Legos.
Raw data retrieved on this site are exposed in CSV format.

The objective is to create a server who could expose all those data in a more easily usable format.

It's an Express server who runs a GRAPHQL API.

The server sources in a database composed by parsed CSV files.
Those files are updated with a script which retrieves CSV files on https://rebrickable.com/ automatically and download them in the "data" directory.

## How to test this API in local?

- Clone the repo.
- Edit "download-data.sh"
- Modify the directory path and replace it by the path of the directory you just cloned.
- npm i
- npm start
- The server run on port 4000, by accessing in yout browser localhost:4000, you will access the GRAPHQL playground, where you can launch your first queries (
for example: "{sets {name, year}}" retrieve the name and year of all sets.
)