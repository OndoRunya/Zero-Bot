const Discord = require ("discord.js");
const client = new Discord.Client;
const config = require('./config.json');
const config_2 = require('./enable_config.json');
const prefix = config.prefix

client.on("ready", () => {
    console.info("Bot Online")
    console.info(`[MAIN] Run at ${client.user.tag}! [MAIN]`);
});

client.once('reconnecting', () => {
    console.info('Reconnecting!');
});

client.once('disconnect', () => {
    console.info('Disconnect!');
});


client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(c => c.name === config.join_channel);
  if (!channel) return message.reply("Le channel configuré dans config.json n'existe pas");
  channel.send(`Bienvenue sur le serveur ${member}. !`);
  member.addRole(config.join_role);
});


//Commands

client.on("message", message => {
if (message.content.startsWith(prefix + "ping")) {
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.sendMessage("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");
  }
});

client.on("message", message => {
if (message.content.startsWith(prefix + "kick")) {
    if(!message.member.roles.some(r=>[config.kick_user_role].includes(r.name)) )
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
    if(!message.member.roles.some(r=>[config.ban_user_role].includes(r.name)) )
      return null
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Le membre n'existe pas");
    if(!member.bannable) 
      message.reply("impossible de bannir cet utilisateur veuillez verifier les permissions")
    
    member.kick()
    message.reply(`${member.user.tag} a etait banni par ${message.author.tag} pour raison: ${reason}`);
}})

client.on("message", message => {
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
  .setURL("https://imgur.com/pXbFE37.jpg")
  .addField(prefix + "clear : ",
    "Suprimmer de 1 a 99 message sur un channel specifique usage : $clear <nombre>")
    
    
  .addField(prefix + "kick : ", "Expulsez un utilisateur avec raison ou non", true)
  
  .addField(prefix + "ban : ", "Bannir un utilisateur avec raison ou non", true)

  .addBlankField(true)
  
  .addField(prefix + "ping", "Faire un ping", true)

  .addField(prefix + "avatar", "Montre l'avatar de la personne mentionnée", true)

  .addField(prefix + "server-info", "Montre les infos du serveur", true)

  message.reply("Vous avez recu un DM")
  message.author.send({embed});
  message.author.send("No reply message");
}});

client.on("message", message => {
if (message.content.startsWith(prefix + "avatar")) {
if (!message.mentions.users.size) {
    return message.channel.send(`Ton avatar : ${message.author.displayAvatarURL}`);
}
    
const avatar = message.mentions.users.map(user => {
    return `${user.username}'s avatar: ${user.displayAvatarURL}`;
});

message.channel.send(avatar);
}})

client.on("message", message => {
if (message.content.startsWith(prefix + "server-info")) {
message.channel.send(`Nom du serveur: ${message.guild.name}\n Il y a ${message.guild.memberCount} utilisateur au total`);
    message.guild.fetchMembers().then(fetchedGuild => {
	    const totalOnline = fetchedGuild.members.filter(member => member.presence.status === 'online');
	    message.channel.send(`Il y a ${totalOnline.size} utilisateur de connectés !`);
	    const totalOffline = fetchedGuild.members.filter(member => member.presence.status === 'offline');
	    message.channel.send(`Il y a ${totalOffline.size} utilisateur de déconnectés !`);
});
}})

client.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
    if(!message.member.roles.some(r=>[config.clear_user_role].includes(r.name)) )
      return null

if (message.content.startsWith(prefix + "clear")) {
    
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 1 || deleteCount > 99)
      return message.reply("s'il te plaît, donne un nombre entre 1 et 99 pour les messages à supprimer !");
    
  }
});


// In devloppement


client.on('message', message => {
  if (message.content.includes(prefix + "sondage")) {
    UserMessage = message.content.substring(sondage.length)
    message.channel.send("Voici le sondage :\n" + UserMessage + "\n :thumbsup: si vous êtes pour, :thumbsdown: si vous êtes contre")

  }
});


client.on("message", message => {
    if (message.content.includes(prefix + "sondage")) {
        message.react('👍'); 
        message.react('👎');
}})

client.on("message", message => {
if (message.content.startsWith(prefix + "credit")) {
const embed = new Discord.RichEmbed()
  .setTitle("Zero-Bot crédit")
  .setAuthor("Zero-Bot crédit", "https://imgur.com/pXbFE37.jpg")

  .setColor(0x00AE86)
  .setDescription("Tout les remerciments pour la création de ce bot")
  .setFooter("Bot créer par OndoRunya & Temakisushi", "https://imgur.com/pXbFE37.png")
  .setThumbnail("https://imgur.com/pXbFE37.png")

  .setTimestamp()
  .setURL("https://imgur.com/pXbFE37.jpg")

.addField("temakisushi: ", "Devloper", true)
	  
.addField("OndoRunya: ", "Principal devloper", true)

message.channel.send({embed})
}})

client.login(config.token)
