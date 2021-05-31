const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif bot`)
. setImage(``)
.setDescription(`
**[INVITES](https://discord.com/api/oauth2/authorize?client_id=772052634604404766&permissions=8&scope=bot)INVITE TO PORE BOT **`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['add'],
permLevel: 0
};

exports.help = {
  name: 'add',
  description: 'rexuss',
  usage: 'a'
};
