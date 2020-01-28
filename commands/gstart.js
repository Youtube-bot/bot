const ms = require("ms"); 
const config = require("../config.json")

exports.run = (client, message, args) => {

    if(!args[0]) return message.channel.send("❌ | Error: please add when the giveaway will finish (ex: " + config.prefix + "gstart <time>(s/m/d/w) <winners> a awesome sweat)")
    if(!args[1]) return message.channel.send("❌ | Error: please add how many winners i will pick (ex: " + config.prefix + "gstart <time>(s/m/d/w) <winners> a awesome sweat)")
    if(isNaN(args[1])) return message.channel.send("❌ | Error: please add a valid number of winners")

    if(args[1] > 5) return message.channel.send("🛑 | Error: you can have more than 5 winners, you must be premium to have more than 5 winners")
    
    let giveawayCount = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).length;
        if(giveawayCount >= 3){
        return message.channel.send("🛑 | Error: you can't create more than 3 giveaways on the same time, you must be premium to have more than 3 giveaways");
    } else {


        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            messages: {
                giveaway: "@everyone\n\n🎉 **GIVEAWAY** 🎉",
                giveawayEnded: "@everyone\n\n🎉 **GIVEAWAY ENDED** 🎉",
                timeRemaining: "Time remaining: **{duration}**!",
                inviteToParticipate: "React with 🎉 to participate!",
                winMessage: "🎊 Congratulations {winners} ! 🎊 You won **{prize}**!",
                embedFooter: "YouTube-Bot ∘ Giveaways",
                noWinner: "🛑 Giveaway cancelled, no valid participations.",
                winners: "winner(s)",
                endedAt: "Ended at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        });
    }// And the giveaway has started!
    }
