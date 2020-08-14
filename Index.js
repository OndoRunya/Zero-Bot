//mise en place du bot
const Discord = require ("discord.js");
const Client = new Discord.Client; 
const prefix = "$"; 

Client.on("ready", () => {
    console.info("Bot opérationel")
    console.info(`[MAIN] Logged in as ${Client.user.tag}! [MAIN]`); // info log on utilise console.info
});

Client.login("Le_token")


//les commandes
