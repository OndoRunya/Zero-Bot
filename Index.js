//mise en place du bot
const Discord = require ("discord.js");
const Client = new Discord.Client;
const config = require('./config.json');
const prefix = config.prefix; 

Client.on("ready", () => {
    console.info("Bot opérationel")
    console.info(`[MAIN] Logged in as ${Client.user.tag}! [MAIN]`); // info log on utilise console.info
});

Client.once('reconnecting', () => {
    console.info('Reconnecting!');
});

Client.once('disconnect', () => {
    console.info('Disconnect!');
});



//les commandes

Client.on("message", message => {
if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong");
}});

Client.on("message", message => {
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

Client.on("message", message => {
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

Client.on("message", message => {
if (message.content.startsWith(prefix + "help")) {
const embed = new Discord.RichEmbed()
  .setTitle("Zero-Bot Help Link")
  .setAuthor("Zero-Bot help", "https://imgur.com/pXbFE37.jpg")

  .setColor(0x00AE86)
  .setDescription("Voici les commandes de Zero-Bot!")
  .setFooter("Créer par OndoRunya & Temakisushi", "https://imgur.com/pXbFE37.png")
  .setImage("https://imgur.com/pXbFE37.jpg")
  .setThumbnail("https://imgur.com/pXbFE37.png")

  .setTimestamp()
  .setURL("https://discord.com/channels/733585317365547029/733585317365547032")
  .addField(prefix + "clear (a venir) : ",
    "Suprimmer de 1 a 99 message sur un channel specifique usage : $clear <nombre>")
    
    
  .addField(prefix + "kick : ", "Expulsez un utilisateur avec raison ou non", true)
  
  .addField(prefix + "ban : ", "Bannir un utilisateur avec raison ou non", true)

  .addBlankField(true)
  
  .addField(prefix + "ping", "Faire un ping", true)

  message.channel.send({embed});
}});



Client.login(config.token)
