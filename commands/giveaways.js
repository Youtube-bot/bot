const ms = require("ms"); 
const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {

let allGiveaways = client.giveawaysManager.giveaways.lenght; 

let onServer = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id).lenght;

let notEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).lenght;

let Ended = client.giveawaysManager.giveaways.filter((g) => g.ended).lenght;

let gnotEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).filter((g) => g.guildID === message.guild.id).lenght;

let gEnded = client.giveawaysManager.giveaways.filter((g) => g.ended).filter((g) => g.guildID === message.guild.id).lenght;


const embed = new Discord.RichEmbed()
.setTitle("Statistics Giveaways - Youtube Bot")
.addField("Bot's Total Giveaways", `» There have been ${allGiveaways} giveaways that have been created since the creation of the bot`)
.addField("Server's Total Giveaways", `» There have been ${onServer} giveaways on this server`)
.addField("Bot's Total Giveaways not ended", `» There have been ${notEnded} giveaways that are not currently finished `)
.addField("Bot's Total Giveaways ended", `» There have been ${Ended} giveaways that are currently finished `)
.addField("Server's Total Giveaways not ended", `» There have been ${gnotEnded} giveaways that are not currently finished `)
.addField("Server's Total Giveaways ended", `» There have been ${gEnded} giveaways that are currently finished `)
.setFooter("thanks for using the bot !", config.footer)
message.channel.send(embed)
}