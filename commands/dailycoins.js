const profileModel = require("../models/profileSchema");
module.exports = {
    name: "dailycoins",
    aliases: ["dlc"],
    cooldown: 7200,
    permissions:["SPEAK"],
    description: "beg for coins",
    async execute(client, message, cmd, args, Discord, profileData){
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        }, {
            $inc: {
                coins: randomNumber,
            },
        });
        return message.channel.send(`${message.author.username}, you bagged and received ${randomNumber} **coins**`)
    }
}