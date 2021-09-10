const profileModel = require("../models/profileSchema");
module.exports = {
    name: "withdraw",
    aliases: [""],
    cooldown: 0,
    permissions: ["SPEAK"],
    description: "withdraw money from your bank",
    async execute(client, message, cmd, args, Discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.reply("Deposit amount should be a number");
        try {
            if(amount > profileData.bank) return message.reply("You don't have enough money to withdraw");
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                },
            });

            const embed = new Discord.MessageEmbed()
            .setColor("#ffa3e5")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyname: true }))
            .addFields(
                { name: "`conins: `", value: `+ **${amount}**` },
                { name: "`bank: `", value: `- **${amount}**` }
            )
            message.channel.send({ embeds: [embed] })
        }catch(err){
            console.log(err);
        }
    }
}