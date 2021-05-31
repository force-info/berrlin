const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif Invite`)
.setImoge (`https://images-ext-1.discordapp.net/external/mYylpyqnCG0imci8zLHG7UE1Vropu-z4wv0S-adYedo/https/media.discordapp.net/attachments/848121416696070164/848210376364654602/image0.gif `)
.setDescription(`**[Invite](https://discord.com/api/oauth2/authorize?client_id=772052634604404766&permissions=8&scope=bot) INVITE TO PORE BOT **`)
    
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
