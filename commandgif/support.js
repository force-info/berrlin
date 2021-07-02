const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`**Links**`)
.setImoge(`https://media.discordapp.net/attachments/860507919799549962/860507957800468490/image0.png`)
.setDescription(`
[Invite Me](https://discord.com/api/oauth2/authorize?client_id=784303756925468713&permissions=8&scope=bot)
-
[Support Server](https://discord.gg/wTYH5vzV7B)
`)
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['support'],
permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'rexuss',
  usage: 'support'
};
