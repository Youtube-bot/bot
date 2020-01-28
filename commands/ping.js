const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setDescription("🏓 • Pong ! • 🏓")
    .addField("⚓ API ping", `» ${m.createdTimestamp - message.createdTimestamp}`)
    .addField("📥 Bot ping", `» ${client.ping}`)
    .addField(`bot's tip: use ${config.prefix}giveaway-start to start a giveaway !`, config.footer)
    
    message.channel.send("📤 pinging...").then((m) => {
        m.edit(embed)
    })
}