const { ShardingManager } = require('discord.js');
const config = require("./config.json")
const manager = new ShardingManager('./index.js', { token: config.token });

var shards = "2";

if(NaN(shards)) return console.error("The number of shards is invalid or ")

manager.spawn(shards);
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));