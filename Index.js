//mise en place du bot
const Discord = require ("discord.js");
const Client = new Discord.Client; 
const prefix = "$"; 

Client.on("ready", () => {
    console.log("bot opérationel")
  })

  Client.on('ready', () => {
    console.info(`[MAIN] Logged in as ${Client.user.tag}! [MAIN]`); // info log on utilise console.info
        Client.user.setActivity("$help")
    console.info("L'activité joue a $help a bien était mise")
});

Client.login("Le_token")

//les commandes
