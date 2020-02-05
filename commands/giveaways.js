const ms = require("ms"); 
const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {

const allGiveaways = client.giveawaysManager.giveaways.length; 

const onServer = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id).length;

const notEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).length;

const Ended = client.giveawaysManager.giveaways.filter((r) => r.ended).length;

const gnotEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).filter((d) => d.guildID === message.guild.id).length;

const gEnded = client.giveawaysManager.giveaways.filter((g) => g.ended).filter((d) => d.guildID === message.guild.id).length;


const embed = new Discord.RichEmbed()
.setTitle("Statistics Giveaways - Youtube Bot")
.addField("Bot's Total Giveaways", `» There have been ${allGiveaways} giveaways that have been created since the creation of the bot`)
.addField("Server's Total Giveaways", `» There have been ${onServer} giveaways on this server`)
.addField("Bot's Total Giveaways not ended", `» There have been ${notEnded} giveaways that are not currently finished `)
.addField("Bot's Total Giveaways ended", `» There have been ${Ended} giveaways that are currently finished `)
.addField("Server's Total Giveaways not ended", `» There have been ${gnotEnded} giveaways that are not currently finished `)
.addField("Server's Total Giveaways ended", `» There have been ${gEnded} giveaways that are currently finished `)
.addField("thanks for using the bot !", "[Donate](https://www.patreon.com/botyoutube) ● [Website](https://youtube-bot.com) ● [Like Me !](https://bladebotlist.xyz/bot/youtubebot) ● [Invite](https://discordapp.com/oauth2/authorize?client_id=596068311863918604&permissions=8&scope=bot)")
message.channel.send(embed)
}