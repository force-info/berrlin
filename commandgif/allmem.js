const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`RaGif All Members`, ``)
.setDescription(`**
- all Members  ${message.guild.memberCount}
- online   ${
   message.guild.members.cache.filter(m => m.presence.status == "online").size
 } 
- do not distrub       ${
      message.guild.members.cache.filter(m => m.presence.status == "dnd").size
    } 
- idle       ${
   message.guild.members.cache.filter(m => m.presence.status == "idle").size
 }   
             
                                              - offline   ${
   message.guild.members.cache.filter(m => m.presence.status == "offline").size
 } 
  ** `)

message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["allm", "Allmem", "allmem"],
permLevel: 0
};

exports.help = {
  name: 'allmembere',
  description: 'rexuss',
  usage: 'allmem'
};
