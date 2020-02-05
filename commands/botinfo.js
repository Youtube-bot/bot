const Discord = require('discord.js')
const config = require("../config.json")

exports.run = (client, message, args) => {

        let guildsCounts = await this.client.shard.fetchClientValues("guilds.size");
        let guildsCount = guildsCounts.reduce((p, count) => p + count);
        let usersCounts = await this.client.shard.fetchClientValues("users.size");
        let usersCount = usersCounts.reduce((p, count) => p + count);
        


        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .addField(message.language.botinfos.statistics.title(), message.language.botinfos.statistics.content(guildsCount, usersCount) , true)
        .addField(message.language.botinfos.versions.title(), message.language.botinfos.versions.content(Discord.version, process.version), true)
        .addBlankField();
        client.totalShards.forEach((shard) => {
            embed.addField(title, shard(shard[1], shard[3], shard[0]), true);
        });

        message.channel.send(embed);
    }