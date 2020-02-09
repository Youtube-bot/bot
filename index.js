const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const opusscript = require("opusscript")
const { Player } = require("discord-player");
const player = new Player(client, config.music.YT_API_KEY, {
  leaveOnEnd: false,
  leaveOnStop: true,
  leaveOnEmpty: true
});
client.player = player;

const { GiveawaysManager } = require("discord-giveaways");
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
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
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
  } catch (err) {
  }
});


client.login(config.token);