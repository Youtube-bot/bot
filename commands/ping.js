const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {

    
    message.channel.send("📤 pinging...")
    .then((m) => {
        const embed = new Discord.RichEmbed()
        .setDescription("🏓 • Pong ! • 🏓")
        .addField("⚓ API ping", `» ${m.createdTimestamp - message.createdTimestamp} ms`)
        .addField("📥 Bot ping", `» ${client.ping} ms`)
        .addField(`bot's tip: use ${config.prefix}gstart to start a giveaway !`, config.footer)
        m.edit(embed)
    })
}