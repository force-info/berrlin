const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
const config = require('./config.json');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`>help Gif Vip ✨| Verified Bot ☑️`, { type:"LISTENING" })

  console.log("${client.user.tag}")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandgif/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./commandgif/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./commandgif/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === config.sahip) permlvl = 4;
    return permlvl;
};
client.login(config.token)


//------------------------ kakwolf Random Gif Pp -----------------------//
//------------------------ kakwolf Random Gif Pp -----------------------//
//------------------------ kakwolf Random Gif Pp -----------------------//

client.on("userUpdate", async(Revenge, NYKS) => {
  
if(Revenge.avatarURL === NYKS.avatarURL) return;
let RevengePP = NYKS.avatarURL.split("?")[0]

const Kanal = client.channels.filter(Revenge => Revenge.name === 'random-gif' && Revenge.type === 'text').array().forEach(Nucceteere => {
if (RevengePP.endsWith('gif')) {
Nucceteere.send(new Discord.Attachment(RevengePP))
}
const Kanal2 = client.channels.filter(Revenge => Revenge.name === 'random-pp' && Revenge.type === 'text').array().forEach(Revenge => {
if (!RevengePP.endsWith('gif')) {
Revenge.send(new Discord.Attachment(RevengePP))
}
})
})
}) 



client.on('message', async message => {
if(message.content.startsWith(PREFIX + 'mute')) {
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
 
if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
        const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("#9700ff")
.setTitle("Error ❌")
.setDescription("** I don't have permission`MANAGE_ROLES` **")
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(embed);
};
if (!message.member.hasPermission('MANAGE_GUILD')) {
    const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("#ff0000")
.setTitle("Error ❌")
.setDescription(`** you don't have permissionMANAGE_GUILD**`)
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(embed);
};
 
let muteRole = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if (!muteRole) {
    return message.channel.send("** I don't found role `Muted`**")
};
 
if(!mention) return message.channel.send(`**Ex : ${PREFIX}mute @user**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});//////All codes by robot.probot we are a robot
mention.roles.add(role)
const embed = new Discord.MessageEmbed()
.setThumbnail(mention.user.avatarURL())
.setColor("#9700ff")
.setTitle("Done ✅")
.setDescription(`**muted ${mention.user.username}**`)
.setFooter(`by ${message.author.username}`)
message.channel.send(embed)
}
});



//------------------------ Mapxor Random Gif Pp -----------------------//
//------------------------Mapxor Random Gif Pp -----------------------//
//------------------------ kakwolf Random Gif Pp -----------------------//



/// Code banner 
