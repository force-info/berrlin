const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const {MessageActionRow} = require('discord-buttons');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

‌   let embed = new Discord.MessageEmbed()    
   .setColor(`RANDOM`)
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .setTitle(`** > Oliver Bot **`)
   .setDescription(`Invite You Server [  click  ](https://discord.com/api/oauth2/authorize?client_id=916776483366772756&permissions=8&scope=bot)`)
   
    const support = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.gg/bwfsd4qfkn')
    .setLabel('Support Server')

const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=8&scope=bot')
    .setLabel('Invite Me')
 
 
let row = new MessageActionRow();
row.addComponent(button);
row.addComponent(support);

 return message.channel.send({
  embed: embed,
  component: row
})

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
