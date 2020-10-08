#!/bin/bash

wget https://cdn.rebrickable.com/media/downloads/themes.csv.gz --output-document=/home/bruno/Bureau/projets-en-cours/lego-graph/data/themes.csv.gz
gunzip /home/bruno/Bureau/projets-en-cours/lego-graph/data/themes.csv.gz
# Remplacer les deux chemins de fichiers/dossiers  par votre chemin d'installation
wget https://cdn.rebrickable.com/media/downloads/sets.csv.gz --output-document=/home/bruno/Bureau/projets-en-cours/lego-graph/data/sets.csv.gz
gunzip /home/bruno/Bureau/projets-en-cours/lego-graph/data/sets.csv.gz
# Remplacer les deux chemins fichiers/dossiers par votre chemin d'installation

