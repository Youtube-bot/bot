const Discord = require('discord.js')

exports.run = (client, oldGuild, newGuild) => {

const messagechannel = client.channels.get(567005354873847838)


    if (oldGuild.name !== newGuild.name) {
        const embed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTimestamp()
            .setAuthor("the guild's name has changed")
            .addField(`📤 old name`, oldGuild.name)
            .addField(`📥 new name`, newGuild.name);
        messagechannel.send(embed);
    }

    if (oldGuild.afkChannelID !== newGuild.afkChannelID) {
        const embed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTimestamp()
            .setAuthor("AFK channel was changed")
            .addField(`📤 old AFK channel`, oldGuild.afkChannel === null ? "not defined" : oldGuild.afkChannel.name)
            .addField(`📥 new AFK channel`, newGuild.afkChannel === null ? "not defined" : newGuild.afkChannel.name);
        messagechannel.send(embed);
    }

    if (oldGuild.afkTimeout !== newGuild.afkTimeout) {
        const embed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTimestamp()
            .setAuthor("the AFK TimeOut was changed")
            .addField(`📤 old time`, `${oldGuild.afkTimeout} seconds`)
            .addField(`📥 new time`, `${newGuild.afkTimeout} seconds`);
        messagechannel.send(embed);
    }

    if (oldGuild.iconURL() !== newGuild.iconURL()) {
        const embed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTimestamp()
            .setAuthor("Discord server's icon was changed")
            .addField(`📤 old icon`, oldGuild.iconURL() === null ? "not defined" : oldGuild.iconURL())
            .addField(`📥 new icon`, newGuild.iconURL() === null ? "not defined" : newGuild.iconURL());
        messagechannel.send(embed);
    }

    if (oldGuild.owner.id !== newGuild.owner.id) {
        const embed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTimestamp()
            .setAuthor("the server's owner was changed")
            .addField(`📤 old owner`, oldGuild.owner.user.tag)
            .addField(`📥 new owner`, newGuild.owner.user.tag);
        messagechannel.send(embed);
    }

}