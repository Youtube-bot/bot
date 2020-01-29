const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const fs = require("fs")
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./assets/giveaways.json",
    updateCountdownEvery: config.giveaways.updatetimer,
    default: {
        botsCanWin: config.giveaways.allowbots,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: config.giveaways.embedcolor,
        reaction: config.giveaways.reaction
    }
})
client.giveawaysManager = manager;

if(!client.shard) return console.error("❌ | Please start the bot with the file sharder.js not index.js !")


fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => {
        eventFunction.run(client, ...args)
        if(!file === "message.js") return console.log("✅ | executed the event " + file)
      })
      });
  });

  
  
  client.login(config.token)