const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
 //  message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`RaGif`)
      .setDescription(`${Member.user.username} Is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
     // .setTimestamp();

    message.channel.send(embed);

    //End
  }
   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg"],
  permLevel: 0
};

exports.help = {
  name: 'howgay',
  description: 'rexuss',
  usage: 'howgay'
};
