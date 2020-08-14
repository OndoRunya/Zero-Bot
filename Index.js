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

client.on("message", message => {
if (message.content.startsWith(prefix + "kick")) {
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) ) // on verifie les roles
      return null
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Le membre n'existe pas");
    if(!member.bannable) 
      message.reply("impossible de kicker cet utilisateur veuillez verifier les permissions")
    
    member.kick()
    message.reply(`${member.user.tag} a etait kicker par ${message.author.tag} pour raison: ${reason}`);
}})

client.on("message", message => {
if (message.content.startsWith(prefix + "ban")) {
    if(!message.member.roles.some(r=>["Admin"].includes(r.name)) ) // on verifie les roles
      return null
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Le membre n'existe pas");
    if(!member.bannable) 
      message.reply("impossible de bannir cet utilisateur veuillez verifier les permissions")
    
    member.kick()
    message.reply(`${member.user.tag} a etait banni par ${message.author.tag} pour raison: ${reason}`);
}})
