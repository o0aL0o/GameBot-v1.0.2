module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions:["SPEAK"],
    description: "Check your balance",
    execute(client, message, cmd, args, Discord, profileData){
        message.channel.send(`your wellet balance is ${profileData.coins}, your bank balance is ${profileData.bank}`);
    }
}