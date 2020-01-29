const fs = require("fs");
const config = require("../config.json");

exports.run = (client) => {





            client.user.setPresence({ game: { name: `${config.prefix}help • [${(client.shard.ids) + 1}/${client.shard.totalShards}] `, status: 'dnd', type: 'LISTENING' }})
            .catch(console.error);


    console.log(`✅ | [YouTube Bot] ready in ${client.guilds.size} server(s) with a total of ${client.users.size} users.`)
   console.log(`✅ | [YouTube Bot] shard [${client.shard.ids}/${client.shard.totalShards}]`)
    console.log(`Bot Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  }