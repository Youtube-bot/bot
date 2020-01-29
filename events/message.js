const fs = require("fs");
const config = require("../config.json");

exports.run = (client, message) => {

if (message.author.bot) return;
if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
try {
  let commandFile = require(`../commands/${command}.js`);
  commandFile.run(client, message, args);
} catch (err) {
}

}