const fs = require("fs");
const config = require("../config.json");

exports.run = (client) => {

  client.user.setActivity(`${client.guilds.size} Guilds · ${config.prefix}help`)

         // client.user.setPresence({ game: { name: `${config.prefix}help • beta`, type: 2 } });


    console.log(`✅ | [YouTube Bot] ready in ${client.guilds.size} server(s) with a total of ${client.users.size} users.`)
   console.log(`✅ | [YouTube Bot] shard [${client.shard.id + 1}/${config.shards}]`)
    console.log(`Bot Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  }