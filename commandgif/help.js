const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif Help`)
.setDescription(`
**Info Commands**
\`avatar\` - \`about\` - \`ping\`
\`invite\` - \`server\` - \`support\`

**Gifs Commands**
\`boy\` - \`girl\` - \`baby\`
\`neon\` - \`sad\` - \`smoking\`
\`animal\` - \`anime\` - \`cuople\`
\`emoji\`
** Photo Commands **
\`pboy\` -\`pgirl

** games Commands **
\`howgay\`
**Links**
**[Invite](https://discord.com/api/oauth2/authorize?client_id=916776483366772756&permissions=8&scope=bot) - [Server Support](https://discord.gg/bYFjkzNTMg)**
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'h'
};
