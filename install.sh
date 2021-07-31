#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

sleep 2
echo "${green}[INSTALLER] Installing Zero-Bot${reset}"


sudo aptitude install npm # install npm
npm install discord.js # install discord.js
npm init -y # init de package-lock.json
npm install nodemon --save-dev # install nodemon to run
sudo npm install -g npm # update (using sudo)

sleep 2
echo "${green}[INSTALLER] Succesfully installed Zero-Bot${reset}"
