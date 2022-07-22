const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

    let invite = new MessageButton().setStyle('url').setLabel('Invite Me').setURL('https://discord.com/api/oauth2/authorize?client_id=800442243697213442&permissions=8&scope=bot')
    let support = new MessageButton().setStyle('url').setLabel('Support Server').setURL('https://discord.gg/bwfsd4qfkn')
     
      const allbuttons = [invite, support]

‌   let mybuttonsmsg = await message.channel.send({    
   .setColor(`RANDOM`)
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .setTitle(`** > Oliver Bot **`)
   .setDescription(`Invite You Server [  click  ](https://discord.com/api/oauth2/authorize?client_id=916776483366772756&permissions=8&scope=bot)`)
   buttons: allbuttons
      });
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
