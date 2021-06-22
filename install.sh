#!/bin/bash

sudo aptitude install npm # install npm
npm install discord.js # install discord.js
npm init -y # init de package-lock.json
npm install nodemon --save-dev # install nodemon to run
sudo npm install -g npm # update (using sudo)

echo "Avez vous configurer votre token dans config.json ? Si oui (y) si non (n)"
read a

if [[ a == "y" ]]
then
    npm run dev # run
elif [[ a == "n" ]]
then
    echo "Annule (pour run : npm run dev)"
else
    echo "Error"
fi
