const config = require('../config.json');
const Discord = require('discord.js')

exports.run = (client, message, args) => {

    
    const embed = new Discord.RichEmbed()
    .setTitle("🎶 Help - Youtube Bot ✨")
    .setDescription(`• The Server's prefix is \`${config.prefix}\` `)
    .addField("__**🍪 Useful**__", `» ${config.prefix}**help**
    » ${config.prefix}**ping**
    » ${config.prefix}**ping**
    » ${config.prefix}**ping**
    » ${config.prefix}**ping**
    » ${config.prefix}**ping**`, true)
    .addField("__**🎶 Music**__", `
    » ${config.prefix}**play**
    » ${config.prefix}**np**
    » ${config.prefix}**skip**
    » ${config.prefix}**stop**
    » ${config.prefix}**queue**`, true)
    .addField("__**🎶 Giveaways**__", `
    » ${config.prefix}**gstart**
    » ${config.prefix}**reroll**
    » ${config.prefix}**gdelete**
    » ${config.prefix}**gedit**
    » ${config.prefix}**giveaways**`, false)
    .addField(`bot's tip: use the command ${config.prefix}ping to know the bot's ping`, config.footer, false)

    message.channel.send(embed)

}