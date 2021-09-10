const profileModel = require("../models/profileSchema");
module.exports = {
    name: "give",
    aliases: [""],
    cooldown: 0,
    permissions: ["ADMINISTRATOR"],
    description: "admin command:give money to people",
    async execute(client, message, cmd, args, Discord, profileData) {
        if(!args.length) return message.reply("You need to mention a member");
        const amount = args[1];
        const target = message.mentions.users.first();
        if(!target) return message.reply("User do not exit");

        if(amount % 1 != 0 || amount <= 0) return message.reply("You need to give a whole number");

        try{
            const targetData = await profileModel.findOne({userID: target.id});
            if(!targetData) return message.reply("This user didn't create a profile");

            await profileModel.findOneAndUpdate({
                userID: target.id
            }, {
                $inc: {
                    coins: amount,
                }
            });

            const embed = new Discord.MessageEmbed()
            .setColor("#ffa3e5")
            .setDescription(`You give ${target} **${amount}**`);

            message.channel.send({ embeds: [embed] })
        }catch(err){
            console.log(err);
        }
    }
}