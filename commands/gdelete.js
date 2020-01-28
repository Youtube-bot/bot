const ms = require("ms"); 
const config = require("../config.json")

exports.run = (client, message, args) => {

    if(!args[0]) return message.channel.send("❌ | Error: please add the giveway's message id to delete it")


        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ | Success ! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("❌ | Oh no ! giveaway found for "+messageID+", please check and try again");
        });
    }

