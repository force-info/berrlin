const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {

    
    
    let replies = "https://media.discordapp.net/attachments/980153527844368454/987153682892206190/trim.2A670A08-ADAF-4D5B-8511-DB6C665A2008.mov"

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('<a:heartblack:996849798554599454>');
           });
          });
      }





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["v", "be", "ve"],
  permLevel: 0
};

exports.help = {
  name: 'vedio',
  description: 'rexuss',
  usage: ''
};
 

//MapXoor 
