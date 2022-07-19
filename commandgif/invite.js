const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`** > Oliver Bot **`)
.setDescription(`Invite You Server [  click  ](https://discord.com/api/oauth2/authorize?client_id=916776483366772756&permissions=8&scope=bot)`)
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['invite'],
permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'rexuss',
  usage: 'invite'
};
