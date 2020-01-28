const ms = require("ms"); 
const config = require("../config.json")

exports.run = (client, message, args) => {

    if(!args[0]) return message.channel.send("❌ | Error: please add the giveway's message id to reroll")


            let messageID = args[0];
            client.giveawaysManager.reroll(messageID).then(() => {
                message.channel.send("✅ |  Giveaway re-rolled !");
            }).catch((err) => {
                message.channel.send("❌ | No giveaway found for "+messageID+", please check and try again");
            });
        }
    

