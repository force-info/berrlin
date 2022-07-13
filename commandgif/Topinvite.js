const { MessageEmbed } = require("discord.js")
exports.run = async (app, message, client, args) => {


        message.guild.fetchInvites().then((invites) => {
            const inviteCounter = {}


            invites.forEach((invite => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${inviter}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
             }))

             let replyText = new MessageEmbed()
             .setDescription('**Top invites** \n')
             .setColor("BLUE")

             const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

             if (sortedInvites.length > 10) sortedInvites.length = 10
             else if(sortedInvites.length > 10) sortedInvites.length = sortedInvites.length


             for(const invite of sortedInvites) {
                 const count = inviteCounter[invite]
                 replyText.description += `\n${invite} has invited ${count} member(s)!`
             }
             message.channel.send(replyText)


        })
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["topinv", "topinvite"],
  permLevel: 0
};

exports.help = {
  name: 'tinvite',
  description: 'rexuss',
  usage: 'tinvite'
