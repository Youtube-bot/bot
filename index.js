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
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

if(!client.shard){
 console.error("❌ | Please start the bot with the file sharder.js not index.js !")
process.exit(1)
}


fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => {
        eventFunction.run(client, ...args)
        console.log("✅ | executed the event " + files)
      })
      });
  });

  
  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
      console.log(`✅ | ${message.author.tag} has executed the command ${message.content}`)
    } catch (err) {
   // console.log(`❌ | error while executing the command ${command}, ${err}`)
    }
  });
  
  client.login(config.token)