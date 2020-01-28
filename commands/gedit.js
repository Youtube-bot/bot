const ms = require("ms"); 
const config = require("../config.json")

exports.run = (client, message, args) => {

    return message.channel.send("📡 | in hard-working by our developers")

/*
        let messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: 3,
            newPrize: "New Prize!",
            addTime: 5000
        }).then(() => {
            message.channel.send("Success! Giveaway will updated in less than "+(manager.updateCountdownEvery/1000)+" seconds.");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
        */
    }

