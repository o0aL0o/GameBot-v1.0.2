console.clear();

const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents, partials: ["MESSAGE", "CHANNEL", "REACTION" ] });
const memberCounter = require("./counters/member-counter");
const mongoose = require("mongoose");

require("dotenv").config();

client.on("ready", () => {
    memberCounter(client);
    client.user.setActivity(`g.help || created by aL`, {type: 'WATCHING'});
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler"].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}).then(() =>{
    console.log("connected to the database!");
}).catch((err) =>{
    console.log(err);
});


client.login(process.env.DISCORD_TOKEN);